
let startStopWatchInterval=0;

function startStopWatch() {
    console.log("StopWatch Started");
    
    startStopWatch = setInterval (()=> {
        elapsedTime++;
        console.log(`Elapsed time ${elapsedTime} `);
        

    },1000)
}