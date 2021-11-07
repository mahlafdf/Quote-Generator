const quoteArr =[
    {
        quote :"You never really learn much from hearing yourself speak.",
        author: "George Clooney",
    },
    {
        quote :"Live for each second without hesitation.",
        author: "Elton John", 
    },
    {
        quote :"Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein",
    },
    {
        quote:"Life is really simple, but men insist on making it complicated.",
        author: "Confucius" ,
    },
    {
        quote: "Life is a succession of lessons which must be lived to be understood.",
        author: "Helen Keller", 
    },
    {
        quote:"My mama always said, life is like a box of chocolates. You never know what you’re gonna get.",
        author: "Forrest Gump",
    },
    {
        quote:"The healthiest response to life is joy.",
        author: "Deepak Chopra",
    },
] ;
  
const mainText = document.querySelector('h1');
const author = document.getElementById('author');
const btn = document.getElementById('main-btn');


btn.addEventListener("click",function(){
    const randomIndex  = Math.floor((Math.random()*quoteArr.length));
    mainText.innerText = quoteArr[randomIndex].quote;
    author.innerText = quoteArr[randomIndex].author;

});
