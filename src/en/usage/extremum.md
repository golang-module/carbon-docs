# Extremum
Extremum Functions in the Carbon library provide methods to find the maximum, minimum, closest, and farthest Carbon instances, as well as boundary values for the Carbon time range and duration limits. These functions help developers easily identify temporal boundaries, compare time values, and find temporal extremes within their applications.

## Value Bounds Functions
Return the absolute maximum and minimum values for Carbon instances and durations
```go
// Return the zero value of Carbon instance
carbon.ZeroValue().ToString() // 0001-01-01 00:00:00 +0000 UTC
// Return the unix epoch value of Carbon instance
carbon.EpochValue().ToString() // 1970-01-01 00:00:00 +0000 UTC

// Return the maximum value of Carbon instance
carbon.MaxValue().ToString() // 9999-12-31 23:59:59.999999999 +0000 UTC
// Return the minimum value of Carbon instance
carbon.MinValue().ToString() // 0001-01-01 00:00:00 +0000 UTC

// Return the maximum value of duration instance
carbon.MaxDuration().Seconds() // 9.223372036854776e+09
// Return the minimum value of duration instance
carbon.MinDuration().Seconds() // -9.223372036854776e+09
```

## Comparison Functions
Compare Carbon instances to find the maximum, minimum, closest, or farthest instance
```go
c1 := carbon.Parse("2020-08-01")
c2 := carbon.Parse("2020-08-05")
c3 := carbon.Parse("2020-08-06")

// Return the maximum Carbon instance from some given Carbon instances
carbon.Max(c1, c2, c3) // c3
// Return the minimum Carbon instance from some given Carbon instances
carbon.Min(c1, c2, c3) // c1

// Return the closest Carbon instance from some given Carbon instances
c1.Closest(c2, c3) // c2
// Return the farthest Carbon instance from some given Carbon instances
c1.Farthest(c2, c3) // c3
```