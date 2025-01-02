(()=>{
  const elements = document.querySelectorAll('*');
  // Filter elements that have a class matching the pattern
  const filteredElements = Array.from(elements).filter(element => {
    return element.className.match(/.*-\[\w+\]/); // Regex for matching class names like left-[30px]
  });
  filteredElements.forEach((item) => {
    for (let i of item.classList) {
      const match = i.match(/^([a-z-]+)-\[(.+)\]$/);
      if (match) {
        const property = match[1]; // Extract the property
        const value = match[2];    // Extract the valu
        item.style[property] = value;
      }
    }
  });
})();

(()=>{
  const img = document.querySelectorAll(".Trending > main > div > img");
  for(let item of img){
      item.addEventListener("mouseover",(el)=>{
          el.target.src="http://localhost:5500/assent/item1.webp";
      });
      item.addEventListener("mouseout",(el)=>{
          el.target.src="http://localhost:5500/assent/item2.webp";
      });
  }

  // document.addEventListener("DOMContentLoaded", () => {
  // const mainElement = document.querySelector('.What-Trending main');
  // let scrollAmount = 0;
  // setInterval(() => {
  //     const tradingBoxes = mainElement.querySelectorAll('.trading-box');
  //     const boxWidth = tradingBoxes[0].offsetWidth + 20; // Box width + gap
  //     scrollAmount += boxWidth;

  //     if (scrollAmount >= mainElement.scrollWidth) {
  //         scrollAmount = 0; // Reset scroll
  //     }

  //     mainElement.scrollTo({
  //         left: scrollAmount,
  //         behavior: 'smooth'
  //     });
  // }, 2000); // Change slide every 1 second
  // });

})();

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

$(document).ready(function () {
  $('.slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      prevArrow: $('.slider-prev'),
      nextArrow: $('.slider-next'),
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 4,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 4,
              },
          },
      ],
  });
});
