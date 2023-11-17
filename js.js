const txtElement = ['Wordpress Developer', 'Web Developer', 'Mobile Develop',];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function tik() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-tik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(tik, 200);


})();

 
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  
    });
  }
  
   
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
       
      scrollToTopBtn.style.display = 'block';
    } else {
      
      scrollToTopBtn.style.display = 'none';
    }
  });
  
   
  scrollToTopBtn.addEventListener('click', scrollToTop);
  