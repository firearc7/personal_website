document.addEventListener('DOMContentLoaded', function (){
  const modeIcon = document.getElementById('mode-icon');
  const body = document.body;

  if (localStorage.getItem('darkMode')==='enabled'){
    body.classList.add('dark-mode');
  }

  modeIcon.addEventListener('click', function(){
    body.classList.toggle('dark-mode');
    updateModeIcon();

    if (body.classList.contains('dark-mode')){
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  function updateModeIcon(){
    const isDarkMode= body.classList.contains('dark-mode');
    if(body.classList.contains('dark-mode')) {
      document.getElementById('blog-link1').style.color = 'white';
      document.getElementById('blog-link2').style.color = 'white';
    }
    else {
      document.getElementById('blog-link1').style.color = 'black';
      document.getElementById('blog-link2').style.color = 'black';
    }
  }

  updateModeIcon();

  const likeCountElements= document.querySelectorAll('.like-count');
  likeCountElements.forEach(function(element){
    const likesId = element.id;
    let likesCount = localStorage.getItem(likesId);
    if (!likesCount){
      likesCount= 0;
    }
    element.textContent= likesCount;
  });
});
  
function increaseLikes(likesId){
  const likesElement = document.getElementById(likesId);
  let likesCount = parseInt(likesElement.textContent);
  likesCount++;
  likesElement.textContent = likesCount;
  localStorage.setItem(likesId, likesCount);
}
