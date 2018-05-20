function pingPong(number){
  for(var i = 0; i < number; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("PingPong");
    }
    else if(i %3 === 0){
      console.log("Ping");
    }
    else if(i % 5  === 0){
      console.log("Pong");
    }
    else{
      console.log("Value of i is " + i);
    }
  }
}