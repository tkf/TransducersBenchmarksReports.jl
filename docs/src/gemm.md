# `bench_gemm.jl` result

```@eval
Base.include(@__MODULE__, "../reporters/gemm.jl")
open(io -> show(io, "image/png", plt), "gemm.png", "w")
```

![](../gemm.png)
