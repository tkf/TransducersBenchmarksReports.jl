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

group = benchmarkgroup(loadresult())["gemm"]
data = map(leaves(group["fusedmul"])) do (key, trial)
    stats = @fanout(mean, median, minimum)(trial.times)
    impl, m = key
    return (impl=impl, m=m, stats...)
end

df = melt(DataFrame(data), [:impl, :m])
df[:m] = parse.(Int, df[:m])
sort!(df, :m)

dfnorm = join(
    df[df[:impl] .!= "blas", :],
    deletecols!(df[df[:impl] .== "blas", :], :impl),
    on = [:m, :variable],
    kind = :left,
    makeunique = true,
)
dfnorm[:normalized] = dfnorm[:value] ./ dfnorm[:value_1]

plt = dfnorm[dfnorm[:variable] .== :median, :] |> @vlplot(
    mark = {
        typ = :line,
        point = true,
    },
    x = {
        field = :m,
        typ = :quantitative,
        scale = {typ = :log},
    },
    y = {
        field = :normalized,
        typ = :quantitative,
        # scale = {typ = :log},
        axis = {title = "transducers / blas [median time]"},
    },
)
