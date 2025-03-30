// query selector variables go here 👇
var posterImg = document.querySelector('.poster-img')
var posterTitle = document.querySelector('.poster-title')
var posterQuote = document.querySelector('.poster-quote')
var buttonRandom = document.querySelector('.show-random')
var buttonYourOwn = document.querySelector('.show-form')
var posterFormHidden = document.querySelector('.poster-form')
var mainSection = document.querySelector('.main-poster')
var buttonNevermind = document.querySelector('.show-main')
var buttonSavedPosters = document.querySelector('.show-saved')
var savedPost = document.querySelector('.saved-posters')
var savedPostersGrid = document.querySelector('.saved-posters-grid')
var buttonBackMain = document.querySelector('.back-to-main')
var imageUrl = document.querySelector('#poster-image-url')
var motivTitle = document.querySelector('#poster-title')
var motivQuote = document.querySelector('#poster-quote')
var buttonShowMyPoster = document.querySelector('.make-poster')
var buttonSavePoster = document.querySelector('.save-poster')
var buttonShowSavedPoster = document.querySelector('.show-random')
var unmotivButton = document.querySelector('.show-unmotiv')
var unmotivSection = document.querySelector('.unmotiv-section')
var buttonBackToMainUnmotiv = document.querySelector('.back-to-main-unm')
var unmotivPostersGrid = document.querySelector('.unmotiv-posters-grid')

// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;
let unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];

// event listeners go here 👇
buttonRandom.addEventListener('click', showRandomPosters)
buttonYourOwn.addEventListener('click', showYourOwn)
buttonNevermind.addEventListener('click', neverMindTakeBack)
buttonSavedPosters.addEventListener('click', showSavedPoster)
buttonBackMain.addEventListener('click', backToMain)
buttonShowMyPoster.addEventListener('click', showNewPoster)
buttonSavePoster.addEventListener('click', saveThePoster)
unmotivButton.addEventListener('click', showUnmotivPosters)
buttonBackToMainUnmotiv.addEventListener('click', goBackToMainUnmotiv)


// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);   
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  }
}

showRandomPosters()

function showRandomPosters () {
  var myPoster = createPoster(images[getRandomIndex(images)], titles[getRandomIndex(titles)], quotes[getRandomIndex(quotes)])
  posterImg.src = myPoster.imageURL
  posterTitle.innerText = myPoster.title
  posterQuote.innerText = myPoster.quote
  currentPoster = myPoster
}

function showYourOwn() {
  mainSection.classList.add('hidden')
  posterFormHidden.classList.remove('hidden')
}

function neverMindTakeBack() {
  posterFormHidden.classList.add('hidden')
  mainSection.classList.remove('hidden')
}

function showSavedPoster() {
  mainSection.classList.add('hidden')
  savedPost.classList.remove('hidden')
  savedPostersGrid.innerHTML = ''
  for (let i = 0; i < savedPosters.length; i++) {
     let poster = savedPosters[i]
      savedPostersGrid.innerHTML += `
      <div class="mini-poster">
         <img src="${poster.imageURL}">
         <h1>${poster.title}</h1>
         <h3>${poster.quote}</h3>
      </div>
     `
   }
} 

function backToMain () {
  savedPost.classList.add('hidden')
  mainSection.classList.remove('hidden')
}

function showNewPoster(event) {
   event.preventDefault()
   var input = getPosterInput()
   currentPoster = createPoster(input.image, input.title, input.quote)
   saveInputsToArray(currentPoster)
   displayPoster(currentPoster)
   showMainView()
}

function getPosterInput() {
  return {
    image: imageUrl.value,
    title: motivTitle.value,
    quote: motivQuote.value
  }
}

function saveInputsToArray(poster) {
  images.push(poster.imageURL)
  titles.push(poster.title)
  quotes.push(poster.quote)
}

function displayPoster(poster) {
  posterImg.src = poster.imageURL
  posterTitle.innerText = poster.title
  posterQuote.innerText = poster.quote 
}

function showMainView() {
  mainSection.classList.remove('hidden')
  posterFormHidden.classList.add('hidden')
}

function saveThePoster() {
  if (!savedPosters.some(poster => poster.id === currentPoster.id)) {
    savedPosters.push(currentPoster);
  }
}

function showUnmotivPosters() {
  mainSection.classList.add('hidden')
  unmotivSection.classList.remove('hidden')
  showUnmotivPostersArray(cleanDataArray)
}

function goBackToMainUnmotiv () {
  unmotivSection.classList.add('hidden')
  mainSection.classList.remove('hidden')
}

function cleanData(unmotivationalPosters) {
  let cleaned = []
  for (let i = 0; i < unmotivationalPosters.length; i++ ) {
    let unPoster = unmotivationalPosters[i]
    let cleanPoster = createPoster(unPoster.img_url, unPoster.name, unPoster.description)
    cleaned.push(cleanPoster)
  }
  return cleaned 
}

var cleanDataArray = cleanData(unmotivationalPosters)
function showUnmotivPostersArray(cleanDataArray) {
  for (let i = 0; i < cleanDataArray.length; i ++) {
    let cleanPost = cleanDataArray[i]
    unmotivPostersGrid.innerHTML += `<div class="mini-poster">
    <img src='${cleanPost.imageURL}'> 
    <h1>${cleanPost.title}</h1>
    <h3>${cleanPost.quote}</h3>
    </div>`
  }
}
