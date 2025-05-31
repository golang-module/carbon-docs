# Convert between `Carbon` and `time.Time`

## Convert standard Time.time to Carbon

```go
carbon.NewCarbon(time.Now())

loc, _ := time.LoadLocation(carbon.PRC)
carbon.CreateFromStdTime(time.Now().In(loc))
```

## Convert Carbon to standard Time.time

```go
carbon.Now().StdTime()

carbon.Now(carbon.PRC).StdTime()
```
`