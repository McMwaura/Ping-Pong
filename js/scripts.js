
function pingPong(num) {   
    for (var i = 1; i <= num; i++) {
      event.preventDefault();
  
      if (i % 3 === 0 && i % 5 === 0) {
        document.getElementById('output').innerHTML += "PingPong<br>";
      } else if (i % 3 === 0) {
        document.getElementById('output').innerHTML += "Ping<br>";
      } else if (i % 5 === 0) {
        document.getElementById('output').innerHTML += "Pong<br>";
      } else {
        document.getElementById('output').innerHTML += i + "<br>";
      }
    }
  }
