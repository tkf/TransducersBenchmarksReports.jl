var documenterSearchIndex = {"docs":
[{"location":"#TransducersBenchmarksReports.jl-1","page":"Home","title":"TransducersBenchmarksReports.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"generated/results/#Benchmark-Report-for-*/home/travis/.julia/packages/Transducers/IwqDZ*-1","page":"Results","title":"Benchmark Report for /home/travis/.julia/packages/Transducers/IwqDZ","text":"","category":"section"},{"location":"generated/results/#Job-Properties-1","page":"Results","title":"Job Properties","text":"","category":"section"},{"location":"generated/results/#","page":"Results","title":"Results","text":"Time of benchmark: 14 Jul 2019 - 2:16\nPackage commit: non gi\nJulia commit: 55e36c\nJulia command flags: None\nEnvironment variables: OMP_NUM_THREADS => 1 JULIA_NUM_THREADS => 1","category":"page"},{"location":"generated/results/#Results-1","page":"Results","title":"Results","text":"","category":"section"},{"location":"generated/results/#","page":"Results","title":"Results","text":"Below is a table of this job's results, obtained by running the benchmarks. The values listed in the ID column have the structure [parent_group, child_group, ..., key], and can be used to index into the BaseBenchmarks suite to retrieve the corresponding benchmarks. The percentages accompanying time and memory values in the below table are noise tolerances. The \"true\" time/memory value for a given benchmark is expected to fall within this percentage of the reported value. An empty cell means that the value was zero.","category":"page"},{"location":"generated/results/#","page":"Results","title":"Results","text":"ID time GC time memory allocations\n[\"dot\", \"blas\"] 2.188 μs (5%)   \n[\"dot\", \"man\"] 2.165 μs (5%)   \n[\"dot\", \"rf\"] 2.140 μs (5%)   \n[\"dot\", \"xf\"] 2.149 μs (5%)   \n[\"filter_map_map!\", \"man\"] 77.215 μs (5%)   \n[\"filter_map_map!\", \"xf\"] 80.732 μs (5%)  144 bytes (1%) 8\n[\"filter_map_reduce\", \"man\"] 266.210 μs (5%)   \n[\"filter_map_reduce\", \"xf\"] 266.109 μs (5%)   \n[\"gemm\", \"fusedmul\", \"blas\", \"16\"] 6.376 ms (5%)   \n[\"gemm\", \"fusedmul\", \"blas\", \"2\"] 4.160 ms (5%)   \n[\"gemm\", \"fusedmul\", \"blas\", \"32\"] 8.794 ms (5%)   \n[\"gemm\", \"fusedmul\", \"blas\", \"8\"] 4.893 ms (5%)   \n[\"gemm\", \"fusedmul\", \"xf\", \"16\"] 6.038 ms (5%)  160 bytes (1%) 6\n[\"gemm\", \"fusedmul\", \"xf\", \"2\"] 728.525 μs (5%)  160 bytes (1%) 6\n[\"gemm\", \"fusedmul\", \"xf\", \"32\"] 10.712 ms (5%)  160 bytes (1%) 6\n[\"gemm\", \"fusedmul\", \"xf\", \"8\"] 2.724 ms (5%)  160 bytes (1%) 6\n[\"gemm\", \"mul\", \"linalg\", \"256\"] 1.178 ms (5%)   \n[\"gemm\", \"mul\", \"linalg\", \"32\"] 5.069 μs (5%)   \n[\"gemm\", \"mul\", \"linalg\", \"8\"] 357.545 ns (5%)   \n[\"gemm\", \"mul\", \"man\", \"false\", \"256\"] 3.975 ms (5%)   \n[\"gemm\", \"mul\", \"man\", \"false\", \"32\"] 7.933 μs (5%)   \n[\"gemm\", \"mul\", \"man\", \"false\", \"8\"] 480.077 ns (5%)   \n[\"gemm\", \"mul\", \"man\", \"ivdep\", \"256\"] 3.953 ms (5%)   \n[\"gemm\", \"mul\", \"man\", \"ivdep\", \"32\"] 7.237 μs (5%)   \n[\"gemm\", \"mul\", \"man\", \"ivdep\", \"8\"] 502.902 ns (5%)   \n[\"gemm\", \"mul\", \"man\", \"true\", \"256\"] 3.982 ms (5%)   \n[\"gemm\", \"mul\", \"man\", \"true\", \"32\"] 8.319 μs (5%)   \n[\"gemm\", \"mul\", \"man\", \"true\", \"8\"] 459.675 ns (5%)   \n[\"gemm\", \"mul\", \"xf\", \"false\", \"256\"] 16.486 ms (5%)  48 bytes (1%) 2\n[\"gemm\", \"mul\", \"xf\", \"false\", \"32\"] 31.854 μs (5%)  48 bytes (1%) 2\n[\"gemm\", \"mul\", \"xf\", \"false\", \"8\"] 598.899 ns (5%)  48 bytes (1%) 2\n[\"gemm\", \"mul\", \"xf\", \"ivdep\", \"256\"] 3.947 ms (5%)  48 bytes (1%) 2\n[\"gemm\", \"mul\", \"xf\", \"ivdep\", \"32\"] 6.813 μs (5%)  48 bytes (1%) 2\n[\"gemm\", \"mul\", \"xf\", \"ivdep\", \"8\"] 405.410 ns (5%)  48 bytes (1%) 2\n[\"gemm\", \"mul\", \"xf\", \"true\", \"256\"] 15.345 ms (5%)  48 bytes (1%) 2\n[\"gemm\", \"mul\", \"xf\", \"true\", \"32\"] 31.414 μs (5%)  48 bytes (1%) 2\n[\"gemm\", \"mul\", \"xf\", \"true\", \"8\"] 718.471 ns (5%)  48 bytes (1%) 2\n[\"missing_argmax\", \"man\"] 1.370 μs (5%)  32 bytes (1%) 1\n[\"missing_argmax\", \"rf\"] 1.530 μs (5%)  32 bytes (1%) 1\n[\"missing_argmax\", \"xf\"] 1.498 μs (5%)  32 bytes (1%) 1\n[\"missing_dot\", \"equiv\"] 1.665 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"man\"] 1.499 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"naive\"] 5.223 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"rf\"] 1.505 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"rf_nota\"] 1.619 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"xf\"] 238.627 μs (5%)  74.14 KiB (1%) 3867\n[\"missing_dot\", \"xf_nota\"] 241.184 μs (5%)  74.13 KiB (1%) 3867\n[\"partition_by\", \"man\"] 2.230 ms (5%)  352 bytes (1%) 4\n[\"partition_by\", \"xf\"] 2.092 ms (5%)  512 bytes (1%) 8","category":"page"},{"location":"generated/results/#Benchmark-Group-List-1","page":"Results","title":"Benchmark Group List","text":"","category":"section"},{"location":"generated/results/#","page":"Results","title":"Results","text":"Here's a list of all the benchmark groups executed by this job:","category":"page"},{"location":"generated/results/#","page":"Results","title":"Results","text":"[\"dot\"]\n[\"filter_map_map!\"]\n[\"filter_map_reduce\"]\n[\"gemm\", \"fusedmul\", \"blas\"]\n[\"gemm\", \"fusedmul\", \"xf\"]\n[\"gemm\", \"mul\", \"linalg\"]\n[\"gemm\", \"mul\", \"man\", \"false\"]\n[\"gemm\", \"mul\", \"man\", \"ivdep\"]\n[\"gemm\", \"mul\", \"man\", \"true\"]\n[\"gemm\", \"mul\", \"xf\", \"false\"]\n[\"gemm\", \"mul\", \"xf\", \"ivdep\"]\n[\"gemm\", \"mul\", \"xf\", \"true\"]\n[\"missing_argmax\"]\n[\"missing_dot\"]\n[\"partition_by\"]","category":"page"},{"location":"generated/results/#Julia-versioninfo-1","page":"Results","title":"Julia versioninfo","text":"","category":"section"},{"location":"generated/results/#","page":"Results","title":"Results","text":"Julia Version 1.1.1\nCommit 55e36cc308 (2019-05-16 04:10 UTC)\nPlatform Info:\n  OS: Linux (x86_64-pc-linux-gnu)\n      Ubuntu 16.04.6 LTS\n  uname: Linux 4.15.0-1028-gcp #29~16.04.1-Ubuntu SMP Tue Feb 12 16:31:10 UTC 2019 x86_64 x86_64\n  CPU: Intel(R) Xeon(R) CPU @ 2.30GHz: \n              speed         user         nice          sys         idle          irq\n       #1  2300 MHz      40184 s          0 s       1548 s      13734 s          0 s\n       #2  2300 MHz      14342 s          0 s       1543 s      39992 s          0 s\n       \n  Memory: 7.297847747802734 GB (5200.13671875 MB free)\n  Uptime: 567.0 sec\n  Load Avg:  1.0205078125  0.9306640625  0.53759765625\n  WORD_SIZE: 64\n  LIBM: libopenlibm\n  LLVM: libLLVM-6.0.1 (ORCJIT, haswell)","category":"page"},{"location":"gemm/#bench_gemm.jl-result-1","page":"GEMM","title":"bench_gemm.jl result","text":"","category":"section"},{"location":"gemm/#mul!-1","page":"GEMM","title":"mul!","text":"","category":"section"},{"location":"gemm/#","page":"GEMM","title":"GEMM","text":"Base.include(@__MODULE__, \"../reporters/gemm.jl\")\nopen(io -> show(io, \"image/png\", plt), \"gemm.png\", \"w\")","category":"page"},{"location":"gemm/#","page":"GEMM","title":"GEMM","text":"(Image: )","category":"page"},{"location":"gemm/#Transducers-vs-manual-implementation-1","page":"GEMM","title":"Transducers vs manual implementation","text":"","category":"section"},{"location":"gemm/#","page":"GEMM","title":"GEMM","text":"using BenchmarkTools\nusing PkgBenchmark: benchmarkgroup, export_markdown\nusing TransducersBenchmarksReports: loadresult\nusing Setfield: @set\nusing Markdown\n\nresults = loadresult()\ngroup = benchmarkgroup(results)[\"gemm\"][\"mul\"]\nresults_xf = @set results.benchmarkgroup = group[\"xf\"]\nresults_man = @set results.benchmarkgroup = group[\"man\"]\n\nlet md = sprint(export_markdown, judge(results_xf, results_man))\n    md = replace(md, \":x:\" => \"❌\")\n    md = replace(md, \":white_check_mark:\" => \"✅\")\n    Markdown.parse(md)\nend","category":"page"},{"location":"gemm/#Fused-mul!-1","page":"GEMM","title":"Fused mul!","text":"","category":"section"},{"location":"gemm/#","page":"GEMM","title":"GEMM","text":"Base.include(@__MODULE__, \"../reporters/gemm_fused_mul.jl\")\nopen(io -> show(io, \"image/png\", plt), \"gemm_fused_mul.png\", \"w\")","category":"page"},{"location":"gemm/#","page":"GEMM","title":"GEMM","text":"(Image: )","category":"page"},{"location":"gemm/#Transducers-vs-BLAS-1","page":"GEMM","title":"Transducers vs BLAS","text":"","category":"section"},{"location":"gemm/#","page":"GEMM","title":"GEMM","text":"using BenchmarkTools\nusing PkgBenchmark: benchmarkgroup, export_markdown\nusing TransducersBenchmarksReports: loadresult\nusing Setfield: @set\nusing Markdown\n\nresults = loadresult()\ngroup = benchmarkgroup(results)[\"gemm\"][\"fusedmul\"]\nresults_xf = @set results.benchmarkgroup = group[\"xf\"]\nresults_blas = @set results.benchmarkgroup = group[\"blas\"]\n\nlet md = sprint(export_markdown, judge(results_xf, results_blas))\n    md = replace(md, \":x:\" => \"❌\")\n    md = replace(md, \":white_check_mark:\" => \"✅\")\n    Markdown.parse(md)\nend","category":"page"}]
}