document.addEventListener('DOMContentLoaded', function (){
    const modeIcon = document.getElementById('mode-icon');
    const likeButton = document.getElementById('like-button');
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

    likeButton.addEventListener('click', function() {
        increaseLikes('likes2');
    });
  
    function updateModeIcon(){
      const isDarkMode= body.classList.contains('dark-mode');
      if(body.classList.contains('dark-mode')) {
        document.getElementById('blog').style.color = 'white';
      }
      else {
        document.getElementById('blog').style.color = 'black';
      }
    }
  
    updateModeIcon();
  
    const likeCountElements= document.querySelectorAll('.like-count');
    likeCountElements.forEach(function(element){
      const likesId = element.id;
      console.log('likesId = ', likesId);
      let likesCount = localStorage.getItem(likesId);
      if (!likesCount){
        likesCount= 0;
      }
      element.textContent= likesCount;
    }); 
    function increaseLikes(likesId){
        const likesElement = document.getElementById(likesId);
        let likesCount = parseInt(likesElement.textContent);
        likesCount++;
        likesElement.textContent = likesCount;
        localStorage.setItem(likesId, likesCount);
    }

});
