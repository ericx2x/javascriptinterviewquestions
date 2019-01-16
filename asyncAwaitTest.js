// https://www.youtube.com/watch?v=IGoAdn-e5II

var person = "Eric Lima";
setInterval(() => console.log(person + " have a good night.", 500));

let busy_level = 0;
async function foo(){
  await new Promise((resolve, reject) => {
    const doTurn = () => {
      Math.sqrt(Math.random());
      busy_level++;
      if (Math.random() < 0.0000001){
        console.log(busy_level);
      }

      setTimeout(doTurn,1000);
    };

    doTurn();

  console.log("hmm");
  resolve('ticket');
  });
}

foo().then(() => {
  console.log("done");
});
