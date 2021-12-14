//TODO: function Practice
// function sayHello(nameOfPerson, age){
//     console.log(nameOfPerson);
// }

// sayHello("nico", 10);
// sayHello("dal", 14);
// sayHello("lynn", 23);

//? calculator practice
// function plus(a, b) {
//   console.log(a + b);
// }
// function divide(a, b) {
//   console.log(a / b);
// }

// plus(8, 60);
// divide(8, 60);

//? calculator practice2
// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };
// const plusResult = calculator.plus(3, 4);
// const minusResult = calculator.minus(5, 2);
// const divideResult = calculator.divide(16, 4);
// const powerResult = calculator.power(2, 3);

// console.log(plusResult);

//* Momentum App (#4.0-4.7)
const quotes = [
  {
    quote:
      "When you go through hardships and decide not to surrender, that is strength.",
    author: "Arnold Schwarzenegger",
  },
  { quote: "It is kind of fun to do the impossible.", author: "Walt Disney" },
  {
    quote: "There are better starters than me but I’m a strong finisher,",
    author: "Usain Bolt",
  },
  {
    quote: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
  },
  {
    quote:
      "I’ve failed over and over and over again in my life and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    quote:
      "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
    author: "Angelina Jolie",
  },
  {
    quote:
      "But I know, somehow, that only when it is dark enough can you see the stars.",
    author: "Martin Luther King, Jr",
  },
  { quote: "Grind Hard, Shine Hard. ", author: "Dwayne Johnson" },
  {
    quote:
      "I didn’t get there by wishing for it or hoping for it, but by working for it.",
    author: "Estée Lauder",
  },
  {
    quote:
      "I didn’t get there by wishing for it or hoping for it, but by working for it.",
    author: "Estée Lauder2",
  },
];

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//? 유저 이름을 변수로 저장해주고, 그 이름을 h1에 넣어줄거야
const greeting = document.querySelector("#greeting");

//* string만 포함되었거나 중요하지 않은 단순 정보 저장용 변수는 uppercase로 작성!
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
  //? js가 ${}안의 값을 변수로 바꿔줌 기호는 꼭 백틱 사용!
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  clock.classList.remove(HIDDEN_CLASSNAME);
  todo_form.classList.remove(HIDDEN_CLASSNAME);
  // quote.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //? 입력받은 유저 이름을 저장(브라우저에 기본적으로 존재하는 API사용)
  localStorage.setItem(USERNAME_KEY, username);
  //   greeting.innerText = "Hello " + username;
  paintGreetings(username);
  paintQuotes();
}

function paintQuotes() {
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintQuotes();
  paintGreetings(savedUsername);
}
