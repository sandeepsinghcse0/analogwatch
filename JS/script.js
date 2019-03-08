const Feature = document.querySelector('.featured-image');
const Image = Feature.querySelector('img');
var text = Image.getAttribute('alt');
var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode(text);
figcaption.appendChild(captionText);
Feature.appendChild(figcaption);
