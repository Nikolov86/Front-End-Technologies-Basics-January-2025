function attachEventsListeners() {
   let daysBtn = document.getElementById('days');//get the days button
   let hoursBtn = document.getElementById('hours');//get the hours button  
    let minutesBtn = document.getElementById('minutes');//get the minutes button
    let secondsBtn = document.getElementById('seconds'); //get the seconds button

    document.querySelector('main').addEventListener('click', onClick); //add event listener to the main div

    let ratios = { //create an object with the ratios
        days: 1,//1 day = 1 day
        hours: 24, //1 day = 24 hours
        minutes: 1440, //1 day = 1440 minutes
        seconds: 86400 //1 day = 86400 seconds
    };

    

    function onClick(event) { 
        if (event.target.type === 'button') { //check if the clicked element is a button
            let input = event.target.parentElement.querySelector('input[type="text"]'); //get the input field
            let time = Number(input.value); //get the value of the input field
            let unit = input.id; //get the id of the input field

            let inDays = time / ratios[unit]; //convert the time to days

            daysBtn.value = inDays * ratios.days; //set the value of the days button
            hoursBtn.value = inDays * ratios.hours; //set the value of the hours button
            minutesBtn.value = inDays * ratios.minutes; //set the value of the minutes button
            secondsBtn.value = inDays * ratios.seconds; //set the value of the seconds button
        }

    };//create a function that will be called when a button is clicked  
    
}