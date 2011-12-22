var daynum;
var dayweek;
var month;
var year;
var newdate;
var today;
var monthlength;

//Gets the day, weekday, month, and year
function(getCalendar){
    //initializes todaysdate as a Date object. (*Date is case sensitive*)
    var todaysdate = new Date();
    
    //returns the year
    todaysdate.getFullYear() = year;

    //for this January=0, February=1, etc.
    todaysdate.getMonth() = month;

   //for this Sunday=0, Monday=1, etc.
    todaysdate.getDay() = dayweek;

    //returns the day of the month
    todaysdate.getDate() = daynum;
    
    //loop to get the weekday id to find what day the first of the month is
    for(i=0; daynum>7;i++){
        daynum=daynum-7;
    }
    
    //A long if statement to set how many days are in each month
    if(month == 4||6||9||11){
        monthlength = 30;
    }
    else if(month==2){
        monthlength = 29;
    }
    else monthlength=31;
}

//A function to write the days into the calendar
function(setCalendar){
    getCalendar();
    var startday = document.getElementById(daynum);
    var fill = new Array(monthlength);
    
    for (i=daynum; daynum>0; i--){
       var x = document.getElementById(daynum);
       document.write(text)
    }
}
