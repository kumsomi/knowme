var readlineSync = require("readline-sync")

var score=0

var username=readlineSync.question("Heyy!! What's your name? ")
console.log("So, Hiiii "+username+"!!!")

// highest score
var highScore=[
  {
    name:"Kum Somi",
    score:"10",
  },
  {
    name:"Lokesh",
    score:"9",
  },
]


function play(question, answer){
  var userAnswer=readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase())
  {
    score=score+1
    console.log("Yaaay!! You are right.")
    console.log("your current score is: "+ score)
  }
  else{
    console.log("Sorry!! You are wrong. Correct answer is '"+ answer+"'")
    console.log("your current score is still "+ score)
  }
  
  console.log("-------------------------------------------")
}


var knowme=readlineSync.question("Do you know Kum Somi?(y/n) ")

if (knowme.toLowerCase()==="y"){
  console.log("Yaaayy!! You said yes.")
  console.log("So let's play this 'knowme' game!!!")
  console.log("------------------------------------------")
  console.log()
  var questions = [{
    question:"Where do I live? ",
    answer:"Bangalore",
    },
    {
      question:"Which state am I originally from? ",
      answer:"Haryana",
    },
    {
      question:"When's my birthday?(ddmm) ",
      answer:"1402",
    },
    {
      question: "Which city I was born in? ",
      answer:"Amritsar",
    },
    {
      question:"Name of the place I attended my first school in? ",
      answer:"Amritsar",
    },
    {
      question:"Which color do I like the most? ",
      answer:"Blue",
    },
    {
      question: "Which cuisine is my favourite? ",
      answer:"Chinese",
    },
    {
      question: "What do I like Coffeeee or tea? ",
      answer:"Tea",
    }
  ]
  for(var i=0; i<questions.length;i++)
  {
    var currentQuestion=questions[i]
    play(currentQuestion.question, currentQuestion.answer)
  }
  console.log("------------That's the the END-------------")
  console.log("--------------------------------------------")
  console.log()
  console.log("YOU DID A GREAT JOB")
  console.log("Highest Scores are as follows---->")
  for(var i=0;i<highScore.length;i++)
  {
    console.log(highScore[i].name+ " : " +highScore[i].score)
  }
}
else if (knowme.toLowerCase()==="n") {
  console.log("Sorry!! We can't play this 'knowme' game as you don't know Kum Somi. This is all about Kum Somi. Talk to her. Know her well and then play the game")
}
else{
  console.log("Please enter y/n for yes/no. Run again.")
}
