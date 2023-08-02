const text = 'Hello, my name is Malte and I am a 31-year-old professional web developer. I have completed a certified web developer training program at ILS and am currently pursuing a Bachelor of Science degree in Software Development. With my expertise and knowledge, I can help you bring your vision to life by creating stunning websites and web applications that are both functional and visually appealing. Whether you need a simple landing page or a complex e-commerce platform, I have the skills and creativity to deliver a product that exceeds your expectations. So why wait? Contact me today and let’s start building something amazing together!';
const textElement = document.querySelector('.text');
let index = 0;

function writeText() {
  textElement.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    clearInterval(interval);
  }
}

const interval = setInterval(writeText, 15);