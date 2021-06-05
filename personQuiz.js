var readlinesync= require('readline-sync');
var score=0;


function quiz(questionAsked, answer)
{
  var ans=readlinesync.question(questionAsked);

  if(ans===answer)
  {
    console.log("Nice, you are correct")
    score++;
  }
  else
  {
    console.log("Sorry, you are incorrect")
    score--;
  }
  console.log("Score : "+score);
}

console.log("Welcome to the DO YOU KNOW ME quiz")
console.log("The rules: \n- A right answer gives you a point while a wrong answer takes a point\n")
quiz("Am I older than 50 ? ","no");
quiz("Do I code? ","yes");
quiz("Do I like basketball? ","no");
quiz("Is my favourite team Germany? ","yes")
quiz("What is the world record in secondsfor the olympic 100m? ","9.58")
quiz("Could I beat it? ","no")
