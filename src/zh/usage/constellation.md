# 星座

```go
// 获取星座
carbon.Parse("2020-08-05 13:14:15").Constellation() // 狮子座

// 是否是白羊座
carbon.Parse("2020-08-05 13:14:15").IsAries() // false
// 是否是金牛座
carbon.Parse("2020-08-05 13:14:15").IsTaurus() // false
// 是否是双子座
carbon.Parse("2020-08-05 13:14:15").IsGemini() // false
// 是否是巨蟹座
carbon.Parse("2020-08-05 13:14:15").IsCancer() // false
// 是否是狮子座
carbon.Parse("2020-08-05 13:14:15").IsLeo() // true
// 是否是处女座
carbon.Parse("2020-08-05 13:14:15").IsVirgo() // false
// 是否是天秤座
carbon.Parse("2020-08-05 13:14:15").IsLibra() // false
// 是否是天蝎座
carbon.Parse("2020-08-05 13:14:15").IsScorpio() // false
// 是否是射手座
carbon.Parse("2020-08-05 13:14:15").IsSagittarius() // false
// 是否是摩羯座
carbon.Parse("2020-08-05 13:14:15").IsCapricorn() // false
// 是否是水瓶座
carbon.Parse("2020-08-05 13:14:15").IsAquarius() // false
// 是否是双鱼座
carbon.Parse("2020-08-05 13:14:15").IsPisces() // false
```