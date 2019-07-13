using Documenter, TransducersBenchmarksReports

makedocs(;
    modules=[TransducersBenchmarksReports],
    format=Documenter.HTML(),
    pages=[
        "Home" => "index.md",
    ],
    repo="https://github.com/tkf/TransducersBenchmarksReports.jl/blob/{commit}{path}#L{line}",
    sitename="TransducersBenchmarksReports.jl",
    authors="Takafumi Arakaki <aka.tkf@gmail.com>",
    assets=String[],
)

deploydocs(;
    repo="github.com/tkf/TransducersBenchmarksReports.jl",
)
