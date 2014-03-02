# datetimef.js

datetime formatter for extendscript

## Usage

```js
#target "indesign"
#include "/path/to/datetimef.js"

var now = new Date();

$.writeln(datetimef(now, "%F"));          // => 2014-03-01
$.writeln(datetimef(now, "%Y-%m-%d"));    // => 2014-03-01
$.writeln(datetimef(now, "%y年%m月%e日")); // => 14年03月 1日

```

## Supported strftime styles

```
Date (Year, Month, Day):
  %Y - Year with century (can be negative, 4 digits at least)
  %y - year % 100 (00..99)

  %m - Month of the year, zero-padded (01..12)
  %B - The full month name (``January'')
  %b - The abbreviated month name (``Jan'')

  %d - Day of the month, zero-padded (01..31)
  %e - Day of the month, blank-padded ( 1..31)

  %j - Day of the year (001..366)

Time (Hour, Minute, Second, Subsecond):
  %H - Hour of the day, 24-hour clock, zero-padded (00..23)
  %k - Hour of the day, 24-hour clock, blank-padded ( 0..23)
  %I - Hour of the day, 12-hour clock, zero-padded (01..12)
  %l - Hour of the day, 12-hour clock, blank-padded ( 1..12)
  %P - Meridian indicator, lowercase (``am'' or ``pm'')
  %p - Meridian indicator, uppercase (``AM'' or ``PM'')

  %M - Minute of the hour (00..59)

  %S - Second of the minute (00..60)

  %L - Millisecond of the second (000..999)

Time zone:
  %z - Time zone as hour and minute offset from UTC (e.g. +0900)

Weekday:
  %A - The full weekday name (``Sunday'')
  %a - The abbreviated name (``Sun'')
  %u - Day of the week (Monday is 1, 1..7)
  %w - Day of the week (Sunday is 0, 0..6)

Seconds since the Epoch:
  %s - Number of seconds since 1970-01-01 00:00:00 UTC.

Combination:
  %D - Date (%m/%d/%y)
  %F - The ISO 8601 date format (%Y-%m-%d)
  %r - 12-hour time (%I:%M:%S %p)
  %R - 24-hour time (%H:%M)
  %T - 24-hour time (%H:%M:%S)
```