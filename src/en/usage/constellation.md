# Constellation

```go
// Get constellation name
carbon.Parse("2020-08-05 13:14:15").Constellation() // Leo

// Whether is Aries
carbon.Parse("2020-08-05 13:14:15").IsAries() // false
// Whether is Taurus
carbon.Parse("2020-08-05 13:14:15").IsTaurus() // false
// Whether is Gemini
carbon.Parse("2020-08-05 13:14:15").IsGemini() // false
// Whether is Cancer
carbon.Parse("2020-08-05 13:14:15").IsCancer() // false
// Whether is Leo
carbon.Parse("2020-08-05 13:14:15").IsLeo() // true
// Whether is Virgo
carbon.Parse("2020-08-05 13:14:15").IsVirgo() // false
// Whether is Libra
carbon.Parse("2020-08-05 13:14:15").IsLibra() // false
// Whether is Scorpio
carbon.Parse("2020-08-05 13:14:15").IsScorpio() // false
// Whether is Sagittarius
carbon.Parse("2020-08-05 13:14:15").IsSagittarius() // false
// Whether is Capricorn
carbon.Parse("2020-08-05 13:14:15").IsCapricorn() // false
// Whether is Aquarius
carbon.Parse("2020-08-05 13:14:15").IsAquarius() // false
// Whether is Pisces
carbon.Parse("2020-08-05 13:14:15").IsPisces() // false
```