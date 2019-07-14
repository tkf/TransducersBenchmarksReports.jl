var documenterSearchIndex = {"docs":
[{"location":"#TransducersBenchmarksReports.jl-1","page":"Home","title":"TransducersBenchmarksReports.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"generated/results/#Benchmark-Report-for-*/home/travis/.julia/packages/Transducers/ygk7a*-1","page":"Results","title":"Benchmark Report for /home/travis/.julia/packages/Transducers/ygk7a","text":"","category":"section"},{"location":"generated/results/#Job-Properties-1","page":"Results","title":"Job Properties","text":"","category":"section"},{"location":"generated/results/#","page":"Results","title":"Results","text":"Time of benchmark: 14 Jul 2019 - 0:42\nPackage commit: non gi\nJulia commit: 55e36c\nJulia command flags: None\nEnvironment variables: OMP_NUM_THREADS => 1 JULIA_NUM_THREADS => 1","category":"page"},{"location":"generated/results/#Results-1","page":"Results","title":"Results","text":"","category":"section"},{"location":"generated/results/#","page":"Results","title":"Results","text":"Below is a table of this job's results, obtained by running the benchmarks. The values listed in the ID column have the structure [parent_group, child_group, ..., key], and can be used to index into the BaseBenchmarks suite to retrieve the corresponding benchmarks. The percentages accompanying time and memory values in the below table are noise tolerances. The \"true\" time/memory value for a given benchmark is expected to fall within this percentage of the reported value. An empty cell means that the value was zero.","category":"page"},{"location":"generated/results/#","page":"Results","title":"Results","text":"ID time GC time memory allocations\n[\"dot\", \"blas\"] 2.181 μs (5%)   \n[\"dot\", \"man\"] 2.176 μs (5%)   \n[\"dot\", \"rf\"] 2.148 μs (5%)   \n[\"dot\", \"xf\"] 2.156 μs (5%)   \n[\"filter_map_map!\", \"man\"] 75.661 μs (5%)   \n[\"filter_map_map!\", \"xf\"] 79.753 μs (5%)  144 bytes (1%) 8\n[\"filter_map_reduce\", \"man\"] 266.582 μs (5%)   \n[\"filter_map_reduce\", \"xf\"] 266.665 μs (5%)   \n[\"gemm\", \"linalg\", \"256\"] 1.177 ms (5%)   \n[\"gemm\", \"linalg\", \"32\"] 5.014 μs (5%)   \n[\"gemm\", \"linalg\", \"8\"] 351.202 ns (5%)   \n[\"gemm\", \"man\", \"false\", \"256\"] 4.014 ms (5%)   \n[\"gemm\", \"man\", \"false\", \"32\"] 8.183 μs (5%)   \n[\"gemm\", \"man\", \"false\", \"8\"] 478.277 ns (5%)   \n[\"gemm\", \"man\", \"ivdep\", \"256\"] 3.968 ms (5%)   \n[\"gemm\", \"man\", \"ivdep\", \"32\"] 7.228 μs (5%)   \n[\"gemm\", \"man\", \"ivdep\", \"8\"] 503.715 ns (5%)   \n[\"gemm\", \"man\", \"true\", \"256\"] 4.013 ms (5%)   \n[\"gemm\", \"man\", \"true\", \"32\"] 8.539 μs (5%)   \n[\"gemm\", \"man\", \"true\", \"8\"] 459.721 ns (5%)   \n[\"gemm\", \"xf\", \"false\", \"256\"] 16.506 ms (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"false\", \"32\"] 32.662 μs (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"false\", \"8\"] 663.312 ns (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"ivdep\", \"256\"] 15.383 ms (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"ivdep\", \"32\"] 31.388 μs (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"ivdep\", \"8\"] 734.094 ns (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"true\", \"256\"] 15.388 ms (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"true\", \"32\"] 31.381 μs (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"true\", \"8\"] 735.312 ns (5%)  96 bytes (1%) 4\n[\"missing_argmax\", \"man\"] 1.365 μs (5%)  32 bytes (1%) 1\n[\"missing_argmax\", \"rf\"] 1.542 μs (5%)  32 bytes (1%) 1\n[\"missing_argmax\", \"xf\"] 1.545 μs (5%)  32 bytes (1%) 1\n[\"missing_dot\", \"equiv\"] 1.609 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"man\"] 1.496 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"naive\"] 5.226 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"rf\"] 1.504 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"rf_nota\"] 1.630 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"xf\"] 240.034 μs (5%)  74.08 KiB (1%) 3863\n[\"missing_dot\", \"xf_nota\"] 238.818 μs (5%)  73.88 KiB (1%) 3858\n[\"partition_by\", \"man\"] 2.204 ms (5%)  352 bytes (1%) 4\n[\"partition_by\", \"xf\"] 2.076 ms (5%)  512 bytes (1%) 8","category":"page"},{"location":"generated/results/#Benchmark-Group-List-1","page":"Results","title":"Benchmark Group List","text":"","category":"section"},{"location":"generated/results/#","page":"Results","title":"Results","text":"Here's a list of all the benchmark groups executed by this job:","category":"page"},{"location":"generated/results/#","page":"Results","title":"Results","text":"[\"dot\"]\n[\"filter_map_map!\"]\n[\"filter_map_reduce\"]\n[\"gemm\", \"linalg\"]\n[\"gemm\", \"man\", \"false\"]\n[\"gemm\", \"man\", \"ivdep\"]\n[\"gemm\", \"man\", \"true\"]\n[\"gemm\", \"xf\", \"false\"]\n[\"gemm\", \"xf\", \"ivdep\"]\n[\"gemm\", \"xf\", \"true\"]\n[\"missing_argmax\"]\n[\"missing_dot\"]\n[\"partition_by\"]","category":"page"},{"location":"generated/results/#Julia-versioninfo-1","page":"Results","title":"Julia versioninfo","text":"","category":"section"},{"location":"generated/results/#","page":"Results","title":"Results","text":"Julia Version 1.1.1\nCommit 55e36cc308 (2019-05-16 04:10 UTC)\nPlatform Info:\n  OS: Linux (x86_64-pc-linux-gnu)\n      Ubuntu 16.04.6 LTS\n  uname: Linux 4.15.0-1028-gcp #29~16.04.1-Ubuntu SMP Tue Feb 12 16:31:10 UTC 2019 x86_64 x86_64\n  CPU: Intel(R) Xeon(R) CPU @ 2.30GHz: \n              speed         user         nice          sys         idle          irq\n       #1  2300 MHz      18779 s          0 s       1623 s      26971 s          0 s\n       #2  2300 MHz      27584 s          0 s       1459 s      18582 s          0 s\n       \n  Memory: 7.297847747802734 GB (5280.0390625 MB free)\n  Uptime: 486.0 sec\n  Load Avg:  1.0  0.87255859375  0.47509765625\n  WORD_SIZE: 64\n  LIBM: libopenlibm\n  LLVM: libLLVM-6.0.1 (ORCJIT, haswell)","category":"page"},{"location":"gemm/#bench_gemm.jl-result-1","page":"GEMM","title":"bench_gemm.jl result","text":"","category":"section"},{"location":"gemm/#","page":"GEMM","title":"GEMM","text":"Base.include(@__MODULE__, \"../reporters/gemm.jl\")\nopen(io -> show(io, \"image/png\", plt), \"gemm.png\", \"w\")","category":"page"},{"location":"gemm/#","page":"GEMM","title":"GEMM","text":"(Image: )","category":"page"},{"location":"gemm/#Transducers-vs-manual-implementation-1","page":"GEMM","title":"Transducers vs manual implementation","text":"","category":"section"},{"location":"gemm/#","page":"GEMM","title":"GEMM","text":"using BenchmarkTools\nusing PkgBenchmark: benchmarkgroup, export_markdown\nusing TransducersBenchmarksReports: loadresult\nusing Setfield: @set\nusing Markdown\n\nresults = loadresult()\ngroup = benchmarkgroup(results)[\"gemm\"]\nresults_xf = @set results.benchmarkgroup = group[\"xf\"]\nresults_man = @set results.benchmarkgroup = group[\"man\"]\n\nlet md = sprint(export_markdown, judge(results_xf, results_man))\n    md = replace(md, \":x:\" => \"❌\")\n    md = replace(md, \":white_check_mark:\" => \"✅\")\n    Markdown.parse(md)\nend","category":"page"}]
}
