const clockContainer = document.querySelector('.clock')
setInterval(() => clockContainer.innerText = new Date().toLocaleTimeString(), 1000);
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Organic cosmetics shop';