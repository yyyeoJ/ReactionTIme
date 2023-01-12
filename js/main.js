const test = document.getElementById("test");
const testText = document.getElementById("testText");
const time = document.getElementById("time");
let countDown = 3;
let reactionTime;
let startTime;
let endTime;
let waitTime;


test.addEventListener("click",startGame)    

function startGame(){
    test.removeEventListener("click",startGame);
    testText.innerText = countDown;
    const interval = setInterval(()=>{
        countDown -= 1;
        testText.innerText = countDown;
        if(countDown == 0){
            countDown = 3;
            clearInterval(interval);
            game();
        }  
    },1000);
}


function game(){
    waitTime = Math.floor(Math.random()*10 +1);
    console.log(waitTime);
    testText.innerText = "Wait";
    testText.style.color = "orange";
    test.style.backgroundColor = "red";
    setTimeout(()=>{
        testText.innerText = "Click";
        testText.style.color = "lime";
        test.style.backgroundColor = "green";
        startTime = new Date();
        test.addEventListener("click",evaluate);
    },waitTime*1000)
}

function evaluate(){
    endTime = new Date();
    endTime = endTime.getMilliseconds()+ endTime.getSeconds()*1000;
    startTime = startTime.getMilliseconds()+ startTime.getSeconds()*1000;
    reactionTime = endTime-startTime;
    time.innerText =`Your time: ${reactionTime}ms`;
    test.removeEventListener("click",evaluate);

    testText.innerText = "Restart";
    testText.style.color = "lime";
    test.style.backgroundColor = "green";
    test.addEventListener("click",startGame);
}
