
const NestedNavigationContainer = document.getElementById("nested-navigation-container-id");
let tutorialEI = document.getElementById("tutorial-btn");

tutorialEI.addEventListener("click",()=>{
  
  NestedNavigationContainer.classList.toggle("nested_navigation_hidden")
})
