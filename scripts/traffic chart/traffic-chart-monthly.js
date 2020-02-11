
// const timeSwitch = document.querySelector('.time-switch')

// let chosenTime = sessionStorage.getItem('timeSwitch');
// let finalLabel = 'labels'+ chosenTime;
// let finalSeries = 'series'+ chosenTime;

// timeSwitch.addEventListener('click', (e) => {
//   const time = e.target.textContent;
  
//   if(time.toLowerCase().includes('day')){
//   sessionStorage.setItem('timeSwitch', 'Day');
//   } 
  
//   if(time.toLowerCase().includes('week')){
//       sessionStorage.setItem('timeSwitch', 'Week');
//   } 
  
//   if(time.toLowerCase().includes('hour')){
//       sessionStorage.setItem('timeSwitch', 'Hour');
//   } 
  
//   if(time.toLowerCase().includes('month')){
//       sessionStorage.setItem('timeSwitch', 'Month');
//   }
//   // console.log(time)
// })


// const labelsDay = ["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T"];
// const seriesDay =  [50, 100, 75, 125, 175, 125, 150, 100, 150, 200, 150 ];


// const labelsHour =["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
// const seriesHour =[5, 10, 7, 12, 17, 12, 15, 10, 15, 20, 15 ];

// const labelsMonth = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV"];
// const seriesMonth =[50, 100, 75, 125, 175, 125, 150, 100, 150, 200, 150 ];

// const labelsWeek = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-30", "4-10", "11-17", "18-24", "25-31"];
// const seriesWeek =  [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000 ];



  new Chartist.Line('.traffic-container', {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV"]  ,
    series: [
      [5000, 10000, 7500, 12500, 17500, 12500, 15000, 10000, 15000, 20000, 15000, 20000 ]]
  }, {
    low: 0,
    scaleMinSpace: 5,
    showArea: true,
    fullWidth: true
  });




