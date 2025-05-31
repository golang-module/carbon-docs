# 昨天、今天、明天
## 昨天
```go
// 昨天此刻
fmt.Printf("%s", carbon.Yesterday()) // 2020-08-04 13:14:15
carbon.Yesterday().String() // 2020-08-04 13:14:15
carbon.Yesterday().ToString() // 2020-08-04 13:14:15.999999999 +0800 CST
carbon.Yesterday().ToDateTimeString() // 2020-08-04 13:14:15
// 昨天日期
carbon.Yesterday().ToDateString() // 2020-08-04
// 昨天时间
carbon.Yesterday().ToTimeString() // 13:14:15
// 指定时区的昨天此刻
carbon.Yesterday(carbon.NewYork).ToDateTimeString() // 2020-08-04 14:14:15
// 昨天秒精度时间戳
carbon.Yesterday().Timestamp() // 1596518055
// 昨天毫秒精度时间戳
carbon.Yesterday().TimestampMilli() // 1596518055999
// 昨天微秒精度时间戳
carbon.Yesterday().TimestampMicro() // 1596518055999999
// 昨天纳秒精度时间戳
carbon.Yesterday().TimestampNano() // 1596518055999999999
```

## 今天
```go
// 今天此刻
fmt.Printf("%s", carbon.Now()) // 2020-08-05 13:14:15
carbon.Now().String() // 2020-08-05 13:14:15
carbon.Now().ToString() // 2020-08-05 13:14:15.999999999 +0800 CST
carbon.Now().ToDateTimeString() // 2020-08-05 13:14:15
// 今天日期
carbon.Now().ToDateString() // 2020-08-05
// 今天时间
carbon.Now().ToTimeString() // 13:14:15
// 指定时区的今天此刻
carbon.Now(carbon.NewYork).ToDateTimeString() // 2020-08-05 14:14:15
// 今天秒精度时间戳
carbon.Now().Timestamp() // 1596604455
// 今天毫秒精度时间戳
carbon.Now().TimestampMilli() // 1596604455999
// 今天微秒精度时间戳
carbon.Now().TimestampMicro() // 1596604455999999
// 今天纳秒精度时间戳
carbon.Now().TimestampNano() // 1596604455999999999
```

## 明天
```go
// 明天此刻
fmt.Printf("%s", carbon.Tomorrow()) // 2020-08-06 13:14:15
carbon.Tomorrow().String() // 2020-08-06 13:14:15
carbon.Tomorrow().ToString() // 2020-08-06 13:14:15.999999999 +0800 CST
carbon.Tomorrow().ToDateTimeString() // 2020-08-06 13:14:15
// 明天日期
carbon.Tomorrow().ToDateString() // 2020-08-06
// 明天时间
carbon.Tomorrow().ToTimeString() // 13:14:15
// 指定时区的明天此刻
carbon.Tomorrow(carbon.NewYork).ToDateTimeString() // 2020-08-06 14:14:15
// 明天秒精度时间戳
carbon.Tomorrow().Timestamp() // 1596690855
// 明天毫秒精度时间戳
carbon.Tomorrow().TimestampMilli() //1596690855999
// 明天微秒精度时间戳
carbon.Tomorrow().TimestampMicro() // 1596690855999999
// 明天纳秒精度时间戳
carbon.Tomorrow().TimestampNano() // 1596690855999999999
```