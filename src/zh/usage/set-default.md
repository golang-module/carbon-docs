# 设置全局默认值
> 默认时区是 `UTC`, 语言环境是 `英语`，一周开始日期是 `周一`，周末是 `周六`和 `周日`。
> 假设当前时间为 `2020-08-05 13:14:15.999999999 +0800 CST`

```go
carbon.SetLayout(carbon.DateTimeLayout)
carbon.SetTimezone(carbon.PRC)
carbon.SetLocale("zh-CN")
carbon.SetWeekStartsAt(carbon.Monday)
carbon.SetWeekendDays([]carbon.Weekday{carbon.Saturday, carbon.Sunday,})

或

carbon.SetDefault(carbon.Default{
  Layout: carbon.DateTimeLayout,
  Timezone: carbon.PRC,
  Locale: "zh-CN",
  WeekStartsAt: carbon.Monday,
  WeekendDays: []carbon.Weekday{carbon.Saturday, carbon.Sunday,},
})
```