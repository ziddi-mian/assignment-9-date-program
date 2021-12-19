// program1
// Write a JavaScript function to check whether an `input` is a date object or not.   

// Test Data :
// console.log(is_date("October 13, 2014 11:13:00"));
// console.log(is_date(new Date(86400000)));
// console.log(is_date(new Date(99,5,24,11,33,30,0)));
// console.log(is_date([1, 2, 4, 0]));
// Output :
// false
// true
// true
// false


var is_date = function(input) {
    if ( Object.prototype.toString.call(input) === "[object Date]" ) 
      return true;
    return false;   
      };
  
  console.log(is_date("October 13, 2014 11:13:00"));
  console.log(is_date(new Date(86400000)));
  console.log(is_date(new Date(99,5,24,11,33,30,0)));
  console.log(is_date([1, 2, 4, 0]));



// program 2

//   Write a JavaScript function to get the current date.   

// Note : Pass a separator as an argument.
// Test Data :
// console.log(curday('/'));
// console.log(curday('-'));
// Output :
// "11/13/2014"
// "11-13-2014"

var curday = function(ap){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+ap+dd+ap+yyyy);
    };
    console.log(curday('/'));
    console.log(curday('-'));

//  progrm 3

//     Write a JavaScript function to get the number of days in a month.   

// Test Data :
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));
// Output :
// 31
// 29
// 30
// 31

var getDaysInMonth = function(month,year) {

   return new Date(year, month, 0).getDate();

  };
  console.log(getDaysInMonth(1, 2012));
  console.log(getDaysInMonth(2, 2012));
  console.log(getDaysInMonth(9, 2012));
  console.log(getDaysInMonth(12, 2012));

// program 4
//   Write a JavaScript function to get the month name from a particular date.   

// Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"
  
var month_name = function(dt){
    mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return mlist[dt.getMonth()];
    };
    console.log(month_name(new Date("10/11/2009")));
    console.log(month_name(new Date("11/13/2014")));


// program 5

//     Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).   

// Test Data :
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
// Output :
// "Date1 = Date2"
// "Date1 > Date2"
// "Date2 > Date1"


var compare_dates = function(date1,date2){
    if (date1>date2) return ("Date1 > Date2");
  else if (date1<date2) return ("Date2 > Date1");
  else return ("Date1 = Date2"); 
 }

console.log(compare_dates(new Date('12/18/2021 00:00'), new Date('12/18/2021 00:00')));
console.log(compare_dates(new Date('12/18/2021 00:01'), new Date('12/18/2021 00:00')));
console.log(compare_dates(new Date('12/18/2021 00:00'), new Date('12/18/2021 00:01')));


// programk 6

// Write a JavaScript function to add specified minutes to a Date object.   

// Test Data :
// console.log(add_minutes(new Date(2014,10,2), 30).toString());
// Output :
// "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"

var add_minutes =  function (dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}
console.log(add_minutes(new Date(2020,11,18), 30).toString());


// program 7 

// Write a JavaScript function to test whether a date is a weekend. Go to the editor

// Note : Use standard Saturday/Sunday definition of a weekend.
// Test Data :
// console.log(is_weekend('Nov 15, 2014'));
// console.log(is_weekend('Nov 16, 2014'));
// console.log(is_weekend('Nov 17, 2014'));
// Output :
// "weekend"
// "weekend"
// undefined

var is_weekend =  function(date1){
    var dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } 
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));


// program 8
// Write a JavaScript function to get difference between two dates in days. Go to the editor

// Test Data :
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));
// Output :
// 216
// -28

var date_diff_indays = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    console.log(date_diff_indays('04/02/2014', '11/04/2014'));
    console.log(date_diff_indays('12/02/2014', '11/04/2014'));


// //     program 9

// //     Write a JavaScript function to get the last day of a month.   

// // Test Data :
// // console.log(lastday(2014,0));
// // console.log(lastday(2014,1));
// // console.log(lastday(2014,11));
// // Output :
// // 31
// // 28
// // 31

// var date_diff_indays = function(date1, date2) {
//     dt1 = new Date(date1);
//     dt2 = new Date(date2);
//     return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
//     }
//     console.log(date_diff_indays('04/02/2014', '11/04/2014'));
//     console.log(date_diff_indays('12/02/2014', '11/04/2014'));
    

// //     progrm 10

// //     Write a JavaScript function to calculate 'yesterday day'.   

// // Test Data :
// // console.log(yesterday('Nov 15, 2014'));
// // console.log(yesterday('Nov 16, 2015'));
// // console.log(yesterday('Nov 17, 2016'));
// // Output :
// // "Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"
// // "Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)"
// // "Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"

// var yesterday =  function(date1){
//     var dt = new Date(date1);
//   return new Date((dt.setDate(dt.getDate()-1))).toString();
// }
// console.log(yesterday('Nov 15, 2014'));
// console.log(yesterday('Nov 16, 2015'));
// console.log(yesterday('Nov 17, 2016'));


// // program11

// // Write a JavaScript function to get the maximum date from an array of dates. Go to the editor

// // Test Data :
// // console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// // Output :
// // "2015/02/02"

// function max_date(all_dates) {
//     var max_dt = all_dates[0],
//       max_dtObj = new Date(all_dates[0]);
//     all_dates.forEach(function(dt, index)
//       {
//       if ( new Date( dt ) > max_dtObj)
//       {
//       max_dt = dt;
//       max_dtObj = new Date(dt);
//       }
//       });
//      return max_dt;
//       }
//     console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
    


// // program 12
// // Write a JavaScript function to get the minimum date from an array of dates. Go to the editor

// // Test Data :
// // console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// // Output :
// // "2015/01/03"

// function min_date(all_dates) {
//     var min_dt = all_dates[0],
//      min_dtObj = new Date(all_dates[0]);
//     all_dates.forEach(function(dt, index)
//      {
//      if ( new Date( dt ) < min_dtObj)
//      {
//      min_dt = dt;
//      min_dtObj = new Date(dt);
//      }
//      });
//     return min_dt;
//      }
//    console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
   

























    
    
    