/*!
  datetimef.js
  datetime formatter for extendscript
*/
var datetimef = function (date, format) {
  if (format === undefined || format.constructor.name !== "String") {
    return Error("No Format");
  }
  if (!(date instanceof Date)) {
    return Error("Not Date");
  }
  
  // padding
  var pad = function (num, key, digit) {
    var minus = num < 0 ? true : false;
    num = Math.abs(num) + "";
    while(num.length < digit) {
      num = key + num;
    }
    num = minus ? "-" + num : num;
    return num;
  }
  // zero padding
  var padzero = function (num, digit) {
    return pad(num, "0", digit);
  }
  // blank padding
  var padblank = function (num, digit) {
    return pad(num, " ", digit);
  }
  
  
  var year             = date.getFullYear();
  var month            = date.getMonth() + 1;
  var day_of_month     = date.getDate();
  var day_of_week      = date.getDay();
  var hour             = date.getHours();
  var min              = date.getMinutes();
  var sec              = date.getSeconds();
  var msec             = date.getMilliseconds();
  var time_since_epoch = date.getTime();
  var timezone_offset  = date.getTimezoneOffset() / 60;
  
  var Fo = {
    
    // year
    "%Y": function(){return year},
    "%y": function(){return year%100},
    
    // month
    "%m": function(){return padzero(month, 2)},
    "%B": function(){
      var month_long = ["","January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return month_long[month];
    },
    "%b": function(){
      var month_short = ["","Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return month_short[month];
    },
    
    // day of month
    "%d": function(){return padzero(day_of_month, 2)},
    "%e": function(){return padblank(day_of_month, 2)},
    
    // day of year
    "%j": function(){
      var origin = new Date(year, 0,0);
      return Math.floor((date - origin)/(24*60*60*1000));
    },
    
    // hours
    "%H": function(){return padzero(hour, 2)},
    "%k": function(){return padblank(hour, 2)},
    "%I": function(){return padzero(hour%12, 2)},
    "%l": function(){return padblank(hour%12, 2)},

    // ampm
    "%p": function(){return hour < 12 ? "AM" : "PM"},
    "%P": function(){return hour < 12 ? "am" : "pm"},
    
    // minutes
    "%M": function(){return padzero(min, 2)},

    // seconds
    "%S": function(){return padzero(sec, 2)},
    
    // milliseconds
    "%L": function(){return padzero(msec, 3)},
    
    // weekday
    "%A": function(){
      var week_long = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return week_long[day_of_week]
    },
    "%a": function(){
      var week_short = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return week_short[day_of_week]
    },
    "%u": function(){return day_of_week + 1}, // (Monday is 1, 1..7)
    "%w": function(){return day_of_week},     // (Sunday is 0, 0..6)
    
    // timezone
    "%z": function(){return padzero(timezone_offset, 2)+"00"},
    
    // time since epoch
    "%s": function(){return time_since_epoch},
    
    // COMBINATION
    // %D - Date (%m/%d/%y)
    "%D": function(){
      return Fo["%m"]() + "/" + Fo["%d"]() + "/" + Fo["%y"]();
    }, 
    // %F - The ISO 8601 date format (%Y-%m-%d)
    "%F": function(){      
      return Fo["%Y"]() + "-" + Fo["%m"]() + "-" +Fo["%d"]();
    }, 
    // %r - 12-hour time (%I:%M:%S %p)
    "%r": function(){
      return Fo["%I"]() + ":" + Fo["%M"]()+":"+Fo["%S"]()+" "+Fo["%p"]();
    }, 
    // %R - 24-hour time (%H:%M)
    "%R": function(){
      return Fo["%H"]() + ":" + Fo["%M"]();
    },
    // %T - 24-hour time (%H:%M:%S)
    "%T": function(){
      return Fo["%H"]() + ":" + Fo["%M"]() + ":" + Fo["%S"]();
    },
  }
  
  for (var i in Fo) {
    var regexp = new RegExp(i, "g");
    format = format.replace(regexp, Fo[i]);
  };
  
  return format
}
  
/*
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
*/


