module TransducersBenchmarksReports

using BenchmarkTools
using PkgBenchmark
using Run
using Transducers

benchpath(pathparts...) =
    joinpath(dirname(dirname(pathof(Transducers))), "benchmark", pathparts...)

loadresult() = PkgBenchmark.readresults(benchpath("result.json"))

function mayberun()
    resultpath = benchpath("result.json")
    if isfile(resultpath)
        @info "result.json already exists at: $resultpath"
    else
        Run.script(benchpath("runbenchmarks.jl"))
    end
    return loadresult()
end

end # module
