function calculateDate(){
    let currentTime = Date.now();
    // The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
    let userDob = document.getElementById('dob').value;
    const parseDob = parseInt(userDob, 10);//base is default 10 anyway so I don't have to put 10
    let dateDisplay = document.getElementById('daysOld');

    if(isNaN(parseDob)){
        dateDisplay.innerText = 'Please enter a date!!';
    }
        else{
            let timeDifference = currentTime - new Date(userDob);
            // Using new Date(), creates a new date object with the current date and time:
            let daysOld = (Math.round(timeDifference/1000/60/60/24));
            dateDisplay.innerText = 'You are officially '+ (daysOld) + ' days old!';
        }
}







  