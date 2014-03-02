#target "InDesign"
#include "../datetimef.js"

var today = new Date(2014, 2, 8, 13, 23, 46, 300, "-9"); 
// => Sat Mar 08 2014 13:23:46 GMT+0900

var ret = [];
var t = function(done, expect) {
  done_str = done;
  if (done === expect) {
    ret.push("[Passed]: return => " + expect);
  }
  else {
    ret.push("[Failed]: expect " + expect + ", but return => " + done);
  }
}
// tests

t( datetimef(today)+"", Error("No Format")+"");
t( datetimef(today, 123)+"", Error("No Format")+"");
t( datetimef(today, ""), "");
t( datetimef(today, "%X"), "%X");
t( datetimef("today", "%Y")+"", Error("Not Date")+"");

t( datetimef(today, "%Y"), "2014");
t( datetimef(today, "%y"), "14");
t( datetimef(today, "%m"), "03");
t( datetimef(today, "%B"), "March");
t( datetimef(today, "%b"), "Mar");
t( datetimef(today, "%d"), "08");
t( datetimef(today, "%e"), " 8");
t( datetimef(today, "%j"), "67");
t( datetimef(today, "%H"), "13");
t( datetimef(today, "%k"), "13");
t( datetimef(today, "%I"), "01");
t( datetimef(today, "%l"), " 1");
t( datetimef(today, "%p"), "PM");
t( datetimef(today, "%P"), "pm");
t( datetimef(today, "%M"), "23");
t( datetimef(today, "%S"), "46");
t( datetimef(today, "%L"), "300");
t( datetimef(today, "%z"), "-0900");
t( datetimef(today, "%A"), "Saturday");
t( datetimef(today, "%a"), "Sat");
t( datetimef(today, "%u"), "7");
t( datetimef(today, "%w"), "6");
t( datetimef(today, "%s"), "1394252626300");

t( datetimef(today, "%Y%m%d"), "20140308" );
t( datetimef(today, "%F"), "2014-03-08" );
t( datetimef(today, "%Y-%m"), "2014-03" );
t( datetimef(today, "%Y"), "2014" );
t( datetimef(today, "%Y%j"), "201467" );
t( datetimef(today, "%Y-%j"), "2014-67" );
t( datetimef(today, "%H%M%S"), "132346" );
t( datetimef(today, "%T"), "13:23:46" );
t( datetimef(today, "%H%M"), "1323" );
t( datetimef(today, "%H:%M"), "13:23" );
t( datetimef(today, "%H"), "13" );
t( datetimef(today, "%H%M%S,%L"), "132346,300" );
t( datetimef(today, "%T,%L"), "13:23:46,300" );
t( datetimef(today, "%H%M%S.%L"), "132346.300" );
t( datetimef(today, "%T.%L"), "13:23:46.300" );
t( datetimef(today, "%H%M%S%z"), "132346-0900" );
t( datetimef(today, "%Y%m%dT%H%M%S%z"), "20140308T132346-0900" );
t( datetimef(today, "%Y%jT%H%M%S%z"), "201467T132346-0900" );
t( datetimef(today, "%Y%m%dT%H%M"), "20140308T1323" );
t( datetimef(today, "%FT%R"), "2014-03-08T13:23" );
t( datetimef(today, "%Y%jT%H%MZ"), "201467T1323Z" );
t( datetimef(today, "%Y-%jT%RZ"), "2014-67T13:23Z" );


$.writeln(ret.join("\n"));
/*
toString,toSource
[Passed]: return => エラー: No Format
[Passed]: return => エラー: No Format
[Passed]: return => 
[Passed]: return => %X
[Passed]: return => エラー: Not Date
[Passed]: return => 2014
[Passed]: return => 14
[Passed]: return => 03
[Passed]: return => March
[Passed]: return => Mar
[Passed]: return => 08
[Passed]: return =>  8
[Passed]: return => 67
[Passed]: return => 13
[Passed]: return => 13
[Passed]: return => 01
[Passed]: return =>  1
[Passed]: return => PM
[Passed]: return => pm
[Passed]: return => 23
[Passed]: return => 46
[Passed]: return => 300
[Passed]: return => -0900
[Passed]: return => Saturday
[Passed]: return => Sat
[Passed]: return => 7
[Passed]: return => 6
[Passed]: return => 1394252626300
[Passed]: return => 20140308
[Passed]: return => 2014-03-08
[Passed]: return => 2014-03
[Passed]: return => 2014
[Passed]: return => 201467
[Passed]: return => 2014-67
[Passed]: return => 132346
[Passed]: return => 13:23:46
[Passed]: return => 1323
[Passed]: return => 13:23
[Passed]: return => 13
[Passed]: return => 132346,300
[Passed]: return => 13:23:46,300
[Passed]: return => 132346.300
[Passed]: return => 13:23:46.300
[Passed]: return => 132346-0900
[Passed]: return => 20140308T132346-0900
[Passed]: return => 201467T132346-0900
[Passed]: return => 20140308T1323
[Passed]: return => 2014-03-08T13:23
[Passed]: return => 201467T1323Z
[Passed]: return => 2014-67T13:23Z
*/