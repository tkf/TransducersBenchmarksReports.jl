var documenterSearchIndex = {"docs":
[{"location":"#TransducersBenchmarksReports.jl-1","page":"Home","title":"TransducersBenchmarksReports.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"generated/results/#Benchmark-Report-for-*/home/travis/.julia/packages/Transducers/ygk7a*-1","page":"Results","title":"Benchmark Report for /home/travis/.julia/packages/Transducers/ygk7a","text":"","category":"section"},{"location":"generated/results/#Job-Properties-1","page":"Results","title":"Job Properties","text":"","category":"section"},{"location":"generated/results/#","page":"Results","title":"Results","text":"Time of benchmark: 13 Jul 2019 - 23:47\nPackage commit: non gi\nJulia commit: 55e36c\nJulia command flags: None\nEnvironment variables: OMP_NUM_THREADS => 1 JULIA_NUM_THREADS => 1","category":"page"},{"location":"generated/results/#Results-1","page":"Results","title":"Results","text":"","category":"section"},{"location":"generated/results/#","page":"Results","title":"Results","text":"Below is a table of this job's results, obtained by running the benchmarks. The values listed in the ID column have the structure [parent_group, child_group, ..., key], and can be used to index into the BaseBenchmarks suite to retrieve the corresponding benchmarks. The percentages accompanying time and memory values in the below table are noise tolerances. The \"true\" time/memory value for a given benchmark is expected to fall within this percentage of the reported value. An empty cell means that the value was zero.","category":"page"},{"location":"generated/results/#","page":"Results","title":"Results","text":"ID time GC time memory allocations\n[\"dot\", \"blas\"] 2.208 μs (5%)   \n[\"dot\", \"man\"] 2.173 μs (5%)   \n[\"dot\", \"rf\"] 2.146 μs (5%)   \n[\"dot\", \"xf\"] 2.171 μs (5%)   \n[\"filter_map_map!\", \"man\"] 82.998 μs (5%)   \n[\"filter_map_map!\", \"xf\"] 88.818 μs (5%)  144 bytes (1%) 8\n[\"filter_map_reduce\", \"man\"] 266.897 μs (5%)   \n[\"filter_map_reduce\", \"xf\"] 267.193 μs (5%)   \n[\"gemm\", \"linalg\", \"256\"] 1.179 ms (5%)   \n[\"gemm\", \"linalg\", \"32\"] 4.987 μs (5%)   \n[\"gemm\", \"linalg\", \"8\"] 350.466 ns (5%)   \n[\"gemm\", \"man\", \"false\", \"256\"] 4.002 ms (5%)   \n[\"gemm\", \"man\", \"false\", \"32\"] 8.642 μs (5%)   \n[\"gemm\", \"man\", \"false\", \"8\"] 479.277 ns (5%)   \n[\"gemm\", \"man\", \"ivdep\", \"256\"] 3.972 ms (5%)   \n[\"gemm\", \"man\", \"ivdep\", \"32\"] 7.990 μs (5%)   \n[\"gemm\", \"man\", \"ivdep\", \"8\"] 425.025 ns (5%)   \n[\"gemm\", \"man\", \"true\", \"256\"] 3.997 ms (5%)   \n[\"gemm\", \"man\", \"true\", \"32\"] 8.967 μs (5%)   \n[\"gemm\", \"man\", \"true\", \"8\"] 460.365 ns (5%)   \n[\"gemm\", \"xf\", \"false\", \"256\"] 16.492 ms (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"false\", \"32\"] 32.673 μs (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"false\", \"8\"] 664.639 ns (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"ivdep\", \"256\"] 19.532 ms (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"ivdep\", \"32\"] 39.179 μs (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"ivdep\", \"8\"] 829.141 ns (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"true\", \"256\"] 19.514 ms (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"true\", \"32\"] 45.819 μs (5%)  96 bytes (1%) 4\n[\"gemm\", \"xf\", \"true\", \"8\"] 829.065 ns (5%)  96 bytes (1%) 4\n[\"missing_argmax\", \"man\"] 1.367 μs (5%)  32 bytes (1%) 1\n[\"missing_argmax\", \"rf\"] 1.499 μs (5%)  32 bytes (1%) 1\n[\"missing_argmax\", \"xf\"] 1.513 μs (5%)  32 bytes (1%) 1\n[\"missing_dot\", \"equiv\"] 1.613 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"man\"] 1.494 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"naive\"] 5.231 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"rf\"] 1.503 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"rf_nota\"] 1.619 μs (5%)  16 bytes (1%) 1\n[\"missing_dot\", \"xf\"] 238.943 μs (5%)  74.02 KiB (1%) 3866\n[\"missing_dot\", \"xf_nota\"] 240.539 μs (5%)  74.09 KiB (1%) 3868\n[\"partition_by\", \"man\"] 2.206 ms (5%)  352 bytes (1%) 4\n[\"partition_by\", \"xf\"] 2.069 ms (5%)  512 bytes (1%) 8","category":"page"},{"location":"generated/results/#Benchmark-Group-List-1","page":"Results","title":"Benchmark Group List","text":"","category":"section"},{"location":"generated/results/#","page":"Results","title":"Results","text":"Here's a list of all the benchmark groups executed by this job:","category":"page"},{"location":"generated/results/#","page":"Results","title":"Results","text":"[\"dot\"]\n[\"filter_map_map!\"]\n[\"filter_map_reduce\"]\n[\"gemm\", \"linalg\"]\n[\"gemm\", \"man\", \"false\"]\n[\"gemm\", \"man\", \"ivdep\"]\n[\"gemm\", \"man\", \"true\"]\n[\"gemm\", \"xf\", \"false\"]\n[\"gemm\", \"xf\", \"ivdep\"]\n[\"gemm\", \"xf\", \"true\"]\n[\"missing_argmax\"]\n[\"missing_dot\"]\n[\"partition_by\"]","category":"page"},{"location":"generated/results/#Julia-versioninfo-1","page":"Results","title":"Julia versioninfo","text":"","category":"section"},{"location":"generated/results/#","page":"Results","title":"Results","text":"Julia Version 1.1.1\nCommit 55e36cc308 (2019-05-16 04:10 UTC)\nPlatform Info:\n  OS: Linux (x86_64-pc-linux-gnu)\n      Ubuntu 16.04.6 LTS\n  uname: Linux 4.15.0-1028-gcp #29~16.04.1-Ubuntu SMP Tue Feb 12 16:31:10 UTC 2019 x86_64 x86_64\n  CPU: Intel(R) Xeon(R) CPU @ 2.30GHz: \n              speed         user         nice          sys         idle          irq\n       #1  2300 MHz      21626 s          0 s       1661 s      26126 s          0 s\n       #2  2300 MHz      26900 s          0 s       1692 s      21497 s          0 s\n       \n  Memory: 7.297847747802734 GB (5270.109375 MB free)\n  Uptime: 505.0 sec\n  Load Avg:  1.01513671875  0.8701171875  0.46923828125\n  WORD_SIZE: 64\n  LIBM: libopenlibm\n  LLVM: libLLVM-6.0.1 (ORCJIT, haswell)","category":"page"},{"location":"gemm/#bench_gemm.jl-result-1","page":"GEMM","title":"bench_gemm.jl result","text":"","category":"section"},{"location":"gemm/#","page":"GEMM","title":"GEMM","text":"Base.include(@__MODULE__, \"../reporters/gemm.jl\")\nopen(io -> show(io, \"image/png\", plt), \"gemm.png\", \"w\")","category":"page"},{"location":"gemm/#","page":"GEMM","title":"GEMM","text":"(Image: )","category":"page"}]
}
