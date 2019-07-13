# `bench_gemm.jl` result

```@eval
Base.include(@__MODULE__, "../reporters/gemm.jl")
open(io -> show(io, "image/png", plt), "gemm.png", "w")
```

![](../gemm.png)


## Transducers vs manual implementation

```@eval
using BenchmarkTools
using PkgBenchmark: benchmarkgroup, export_markdown
using TransducersBenchmarksReports: loadresult
using Setfield: @set
using Markdown

results = loadresult()
group = benchmarkgroup(results)["gemm"]
results_xf = @set results.benchmarkgroup = group["xf"]
results_man = @set results.benchmarkgroup = group["man"]

let md = sprint(export_markdown, judge(results_xf, results_man))
    md = replace(md, ":x:" => "❌")
    md = replace(md, ":white_check_mark:" => "✅")
    Markdown.parse(md)
end
```
