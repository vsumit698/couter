var displayArr = document.getElementsByClassName("display");
var n = displayArr.length;
document.getElementById("start-btn").addEventListener("click",startCounter);
var resetCon = false;

function startCounter(){
    var timerInput = document.getElementById("input").value;
    var delay = 1;
    if(resetCon) resetTimer(n);
    resetCon = true;
    var intervalIdArr = new Array();
    for(let i=n-1;n-timerInput.length<=i;i--){
        intervalIdArr[n-i-1] = animate(getTimeMs(delay),n-i);
        delay*=10;
    }
    setTimeout(function(){
        stopCounter(intervalIdArr);
    },getTimeMs(timerInput*1+0.5));
}

function animate(delayMs,displayNum){

    let intervalId = setInterval(function(){
        var nextDispEle = document.getElementById("next"+displayNum);
        var currDispEle = document.getElementById("curr"+displayNum);
        // take 0.5s to move up
        nextDispEle.classList.add("animate");
        setTimeout(function(){
            var nextDispValue = nextDispEle.innerText*1;
            currDispEle.innerText = nextDispValue;
            nextDispEle.classList.remove("animate");
            nextDispEle.innerText = (nextDispValue+1)%10;
        },getTimeMs(0.5))

    },delayMs);
    return intervalId;

}

function stopCounter(arr){
    for(let v of arr){
        clearInterval(v);
    }
    alert("Counter Finished!!");
}

function getTimeMs(time){
    return time*1000;
}

function resetTimer(arrLen){
    for(let i=1;arrLen>=i;i++){
        document.getElementById("curr"+i).innerText = 0;
        document.getElementById("next"+i).innerText = 1;
    }
}
