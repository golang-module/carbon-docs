# Set globally default
Carbon provides a flexible configuration system that allows you to customize default behaviors globally and per time instance. This two-tiered approach gives you control over library-wide settings while allowing instance-specific overrides when needed.

## Set individual default
You can set each default individually using dedicated setter functions:

```go
carbon.SetLayout(carbon.DateTimeLayout)
carbon.SetTimezone(carbon.UTC)
carbon.SetLocale("en")
carbon.SetWeekStartsAt(carbon.Monday)
carbon.SetWeekendDays([]carbon.Weekday{carbon.Saturday, carbon.Sunday,})
```

## Set multiple default at Once
For configuring multiple defaults in one operation, use the SetDefault function:
```go
carbon.SetDefault(carbon.Default{
  Layout: carbon.DateTimeLayout,
  Timezone: carbon.UTC,
  Locale: "en",
  WeekStartsAt: carbon.Monday,
  WeekendDays: []carbon.Weekday{carbon.Saturday, carbon.Sunday,},
})
```