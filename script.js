const navSlide=()=>{
  const burger= document.querySelector('.burger')
  const nav=document.querySelector('.middle')
  const navLinks =document.querySelectorAll('.middle ul li a, .middle ul button')
  
  burger.addEventListener('click',()=>{
   nav.classList.toggle('navActive');
   navLinks.forEach((link, index)=>{
    if (link.style.animation) {
      link.style.animation='';
  } else{
 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`}
   })
 
 
}

)
  }
  navSlide()






