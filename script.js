let themeButtonDark = document.querySelector(".theme-button-dark");
let themeButtonLight = document.querySelector(".theme-button-light");
let fontButtonSansSerif = document.querySelector(".font-button-sans-serif");
let fontButtonSerif = document.querySelector(".font-button-serif");

let blogArticles = document.querySelectorAll(".blog-article.short");

for (let blogArticle of blogArticles) {
  let moreButton = blogArticle.querySelector(".more");
  moreButton.onclick = function () {
    blogArticle.classList.remove("short");
  };
}

themeButtonDark.onclick = function () {
  themeButtonLight.classList.remove("active");
  themeButtonDark.classList.add("active");
  document.body.classList.add("dark");
};

themeButtonLight.onclick = function () {
  themeButtonDark.classList.remove("active");
  themeButtonLight.classList.add("active");
  document.body.classList.remove("dark");
};

fontButtonSerif.onclick = function () {
  fontButtonSansSerif.classList.remove("active");
  fontButtonSerif.classList.add("active");
  document.body.classList.add("serif");
};

fontButtonSansSerif.onclick = function () {
  fontButtonSansSerif.classList.add("active");
  fontButtonSerif.classList.remove("active");
  document.body.classList.remove("serif");
};

let cardButtonGrid = document.querySelector('.card-view-button-grid');
let cardButtonList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('ul.cards');

cardButtonList.onclick = function () {
cardButtonGrid.classList.remove('active');
cardButtonList.classList.add('active');
cards.classList.add('list');

};

cardButtonGrid.onclick = function () {
  cardButtonList.classList.remove('active');
  cardButtonGrid.classList.add('active');
  cards.classList.remove('list');
  
  };


  let activePhoto = document.querySelector('.active-photo');
  let previews = document.querySelectorAll('.preview-list a');
  let activeImage = previews[3];
  for (let activeImage of previews) {

    activeImage.onclick = function (evt) {
      evt.preventDefault(0);
     
      
      activePhoto.src = activeImage.href;
    
      let currentActive = document.querySelector('.preview-list a.active-item');
      currentActive.classList.remove('active');
      activeImage.classList.add('active');
    }
  };
 
