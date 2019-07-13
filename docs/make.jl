using Documenter
using PkgBenchmark
using Transducers
using TransducersBenchmarksReports
using TransducersBenchmarksReports: mayberun, benchpath

generatedroot = joinpath(@__DIR__, "src", "generated")
mkpath(generatedroot)

result = mayberun()
PkgBenchmark.export_markdown(joinpath(generatedroot, "results.md"), result)

makedocs(;
    modules=[TransducersBenchmarksReports],
    format=Documenter.HTML(),
    pages=[
        "Home" => "index.md",
        "Results" => "generated/results.md",
    ],
    repo="https://github.com/tkf/TransducersBenchmarksReports.jl/blob/{commit}{path}#L{line}",
    sitename="TransducersBenchmarksReports.jl",
    authors="Takafumi Arakaki <aka.tkf@gmail.com>",
)

deploydocs(;
    repo="github.com/tkf/TransducersBenchmarksReports.jl",
)
