using BenchmarkTools: leaves
using PkgBenchmark: benchmarkgroup
using TransducersBenchmarksReports: loadresult
using DataFrames
using Statistics
using VegaLite

fanout(; kwargs...) =
    x -> NamedTuple{keys(kwargs)}(Ref(x) .|> Tuple(values(kwargs)))

macro fanout(names...)
    kwargs = [:($n=$n) for n in names]
    esc(:($fanout(; $(kwargs...))))
end

function trialasrow((key, trial),)
    # stats = @fanout(mean, median, var, minimum, maximum)(trial.times)
    stats = @fanout(mean, median, minimum)(trial.times)
    if length(key) == 3
        impl, simd, n = key
    else
        impl, n = key
        simd = "none"
    end
    return (impl=impl, simd=simd, n=n, stats...)
end

group = benchmarkgroup(loadresult())["gemm"]
data = trialasrow.(leaves(group["mul"]))

df = melt(DataFrame(data), [:impl, :simd, :n])

dfnorm = join(
    df[df[:impl] .!= "linalg", :],
    deletecols!(df[df[:impl] .== "linalg", :], [:impl, :simd]),
    on = [:n, :variable],
    kind = :left,
    makeunique = true,
)
dfnorm[:normalized] = dfnorm[:value] ./ dfnorm[:value_1]
dfnorm[:fullname] = string.(dfnorm[:impl], ", ", dfnorm[:simd])

plt = dfnorm |> @vlplot(
    :text,
    x = {
        field = :n,
        typ = :quantitative,
        scale = {typ = :log},
    },
    y = {
        field = :normalized,
        typ = :quantitative,
        scale = {typ = :log},
    },
    column = :variable,
    # color = :fullname,
    color = :simd,
    text = :impl,
    resolve = {
        scale = {y = :independent},
    }
)
