(()=>{
  document.querySelectorAll(".dd-item").forEach(item => {
    item.addEventListener("click", (e) => {
      const openContent = item.querySelector(".dd-open");
      const icon = item.querySelector("i");
      if (openContent.style.display === "block") {
        openContent.style.animationName="dd-close";
        setTimeout(()=>{
          openContent.style.display = "none";
        },200)
        icon.classList.remove("bx-chevron-up");
        icon.classList.add("bx-chevron-down");
      } else {  
        openContent.style.animationName="dd-open";
        openContent.style.display = "block";
        icon.classList.remove("bx-chevron-down");
        icon.classList.add("bx-chevron-up");
        setTimeout(()=>{
          openContent.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
          });
        },300);
      }
      document.querySelectorAll(".dd-item").forEach(i=>{
         if(i!==item){
            const openContent = i.querySelector(".dd-open");
            const icon = i.querySelector("i");
            if (openContent.style.display === "block") {
              openContent.style.animationName="dd-close";
              setTimeout(()=>{
                openContent.style.display = "none";
              },200)
              icon.classList.remove("bx-chevron-up");
              icon.classList.add("bx-chevron-down");
            }
        }
      }) 
    });
  }); 
})();
function checkValue() {
  var input = document.querySelector('#no_of_cart');
  if (parseInt(input.value) < 1) {
      input.value = 1;
  }
}
function decresevalue(){
  if(document.querySelector('#no_of_cart').value==1)
    document.querySelector('#no_of_cart').value = 1;
  else
  document.querySelector('#no_of_cart').value = parseInt(document.querySelector('#no_of_cart').value) - 1;
}