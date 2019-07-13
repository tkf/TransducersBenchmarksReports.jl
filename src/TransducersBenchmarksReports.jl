module TransducersBenchmarksReports

using BenchmarkTools
using PkgBenchmark
using Run
using Transducers

benchpath(pathparts...) =
    joinpath(dirname(dirname(pathof(Transducers))), "benchmark", pathparts...)

function mayberun()
    resultpath = benchpath("result.json")
    if isfile(resultpath)
        @info "result.json already exists at: $resultpath"
    else
        Run.script(benchpath("runbenchmarks.jl"))
    end
    return PkgBenchmark.readresults(resultpath)
end

end # module
