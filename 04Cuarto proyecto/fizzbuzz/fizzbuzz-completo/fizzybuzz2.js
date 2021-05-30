for(var i = 1; i <= 100; i++) {
    i % 3 == 0 && i % 5 == 0 ? document.write("Fizz - Buzz<br />"): i % 3 == 0 ? document.write("Fizz<br />"): i % 5 == 0 ? document.write("Buzz<br />"): document.write(i + "<br />");
    console.log("bien hecho!");
  }