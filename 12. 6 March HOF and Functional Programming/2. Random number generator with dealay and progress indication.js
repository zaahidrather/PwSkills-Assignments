let countDown = 3;

setInterval(() => {
    if(countDown > 0){
        console.log("Remaining seconds : " + countDown);
        countDown--;
    }else{
        console.log(Math.floor(Math.random()*100));
        countDown = 3;
    }
},1000)