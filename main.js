window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scrolled',window.scrollY > 0) ;
})


//swiper js

var swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });


//    nav bar
const menuBtn = document.querySelector('#menu-btn');
  const closeBtn = document.querySelector('#close-btn');
  const menu = document.querySelector('nav .container ul');
  
  menuBtn.addEventListener('click', ()=>{

    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block'
  });
  
  closeBtn.addEventListener('click', ()=>{

    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
  });

//Active class

  
const navItem = menu.querySelectorAll('li');

const changeActiveItem = () =>{
  navItem.forEach(item =>{
    const link = item.querySelector('a');
    link.classList.remove('active')
  });
}


navItem.forEach(item =>{
  const link = item.querySelector('a');
  link.addEventListener('click',()=>{
    changeActiveItem();
    link.classList.add('active');
  });
});


 // Show More

 const readMoreBtn = document.querySelector('.read-more');
 const readMoreContent = document.querySelector('.read-more-content');

 readMoreBtn.addEventListener('click', ()=>{
    readMoreContent.classList.toggle('show-content')

    if(readMoreContent.classList.contains('show-content')){
      readMoreBtn.textContent = "Show less";
    }
    else{
      readMoreBtn.textContent = "Show more";
    }
 })


        // Skills

const skillItem = document.querySelectorAll('section.skills .skill');

skillItem.forEach(skill =>{
  skill.querySelector('.head').addEventListener('click',()=>{
    skill.querySelector('.items').classList.toggle('show-items');
  })
})