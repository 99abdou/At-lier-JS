let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:`"The best way to find yourself is to lose yourself in the service of others"`,
    person: `Mahatma Gandhi`
},{
    quote:`"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person:`Albert Einstein`
},{
    quote:`"At his best, man is the noblest of all animals; separated from law and justice he is the worst"`,
    person:`Aristotle`
},{
    quote:`"Your time is limited, so dont waste it living someone else's life."`,
    person:`Steve Jobs`
},{
    quote:`"Tell me and I forget. Teach me and I remember. Inlove me and I learn"`,
    person:`Benjamin Franklin`
},{
    quote:`"If you look at what you have in life, you'll always have more. If you look at what you don't have in life"`,
    person:`Oprah Winfrey`
},{
    quote:`"You can’t connect the dots looking forward; you can only connect them looking backwards."`,
    person:`Confucius`
},{
    quote:`"Our lives begin to end the day we become silent about things that matter."`,
    person:`Martin Luther king, Jr`
},{
    quote:`"I am what I repeatedly do. Excellence, then, is not an act but a habit."`,
    person:`Lama`
},{
    quote:`"Life isn't about finding yourself. Life is about creating yourself."`,
    person:`Lao Tzu`
},];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
});