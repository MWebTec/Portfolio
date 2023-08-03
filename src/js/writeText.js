const textAboutMe = 'I am a 31-year-old professional Web developer. I have completed a certified web developer training program at ILS and am currently pursuing a Bachelor of Science degree in Software Development.';
const textElementAboutMe = document.querySelector('.aboutMeText');

const textHeader = 'Hi, I am Malte Wenzel';
const textElementHeader = document.getElementById('nameHeader');

let indexHeader = 0;
let indexAboutMe = 0;

function writeHeaderText() {
  const cursor = '<span class="blinking-cursor"> |</span>';
  const innerText = textHeader.slice(0, indexHeader);

  textElementHeader.innerHTML = innerText + cursor;
  indexHeader++;

  if (indexHeader > textHeader.length) {
    clearInterval(intervalHeader);
    textElementHeader.innerHTML = innerText;
    startAboutMeInterval();
  }
}

function startAboutMeInterval() {
  interval = setInterval(() => {
    writeText(textAboutMe, textElementAboutMe);
  }, 30);
}

function writeText(text, textElement) {
  const cursor = '<span class="blinking-cursor"> |</span>';
  const innerText = text.slice(0, indexAboutMe);

  textElement.innerHTML = innerText + cursor;
  indexAboutMe++;

  if (indexAboutMe > text.length) {
    clearInterval(interval);
  }
}

const intervalHeader = setInterval(writeHeaderText, 50);
