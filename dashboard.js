const ShowNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".left")
  const navLink= document.querySelectorAll(".left ul li")
  burger.addEventListener("click", () => {
    nav.classList.toggle("show")
    navLink.forEach((link, index)=>{
      if (link.style.animation) {
        link.style.animation='';
    } else{
   link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`}
     })
  })
}

ShowNav()