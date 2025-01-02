
(()=>{
    document.querySelector("#sidebar-open").addEventListener('click',()=>{
      window.screen.availWidth >= 500?
      document.querySelector('.sidebar-items').style.animationName="example":
      document.querySelector('.sidebar-items').style.animationName="example-small"
      document.querySelector('.container').style.animationName="asd";
      document.querySelector("#sidebar").style.display="flex";
      document.body.style.overflow="hidden";
      document.querySelector(".container").style.display="flex";
      document.querySelector(".head a").style.display="block";
      document.querySelector(".head i").style.display="none";
  });
  document.querySelector("#sidebar-close").addEventListener('click',()=>{
      document.querySelector('.sidebar-items').style.animationName="example-close";
      document.body.style.overflow="auto";
      document.querySelectorAll(".container-item").forEach((item)=>{
        item.style.display="none";
      });

      setTimeout(()=>{
          document.querySelector("#sidebar").style.display="none";
      },500);
  })

  var openBox = '';
  document.querySelector("#revers").addEventListener("click",()=>{

    document.querySelector(".head a").style.display="block";
    document.querySelector(".head i").style.display="none";
    document.querySelector(".container").style.display="flex";
    document.querySelector("#"+openBox).style.display="none";
  });
  document.querySelectorAll(".container .sidebar-item").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector('.container').style.animationName="rev-container";
      document.querySelector("#"+item.getAttribute('data-for')).style.display="flex";
      openBox = item.getAttribute('data-for');
      document.querySelector(".container").style.display="none";
      document.querySelector(".head a").style.display="none";
      document.querySelector(".head i").style.display="block";

    });
  });
  document.querySelectorAll(".links").forEach((el)=>{
    el.addEventListener("click",(e)=>{
      el.children[0].classList.toggle("dd-link-open");
      if(el.children[1].style.display!="flex"){
        el.children[1].style.display="flex";
        setTimeout(()=>{
          el.children[0].style.borderColor="#fd7e14";
        },400);
      }
      else{
        el.children[1].style.display="none";
        el.children[0].style.borderColor="#000";
      }
    })
  });;
})();