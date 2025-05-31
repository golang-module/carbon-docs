# `carbon` 和 `time.Time` 之间互转

### 将标准 `time.Time` 转换成 `Carbon`

```go
carbon.NewCarbon(time.Now())

loc, _ := time.LoadLocation(carbon.PRC)
carbon.CreateFromStdTime(time.Now().In(loc))
```

### 将 `Carbon` 转换成标准 `time.Time`

```go
carbon.Now().StdTime()

carbon.Now(carbon.PRC).StdTime()
```