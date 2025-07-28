//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");

const menuItemsList=document.querySelector("nav ul");
const hamBtn = document.querySelector("#hamIcon");
hamBtn.addEventListener("click",toggleMenus);

// select all subtopic pages
function hideall(){ //function to hide all pages
    for(let onepage of allpages){ //go through all subtopic pages
        onepage.style.height="0vh";
        onepage.style.display="none"; //hide it
    }
}

function show(pgno) // function to show selected page no
{
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    console.log(onepage.style.display);
    if (onepage.style.display == "block")
    {
        hideall();
        onepage.style.display="none";
        return;
    }
    hideall();
    onepage.style.display="block";
}

/*Listen for clicks on the buttons, assign anonymous eventhandler functions to call show function*/
page1btn.addEventListener("click", function(){show(1)});
page2btn.addEventListener("click", function(){show(2)});
page3btn.addEventListener("click", function(){show(3)});
hideall();
W
function toggleMenus()
{
  //if menuItemsList dont have the class "menuShow", add it, else remove it
menuItemsList.classList.toggle("menuShow");
//if menu is showing (has the class “menuShow”)
if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML="Close Menu"; //change button text to chose menu
}else{ //if menu NOT showing
hamBtn.innerHTML="Open Menu"; //change button text open menu
}
}

// const heightOutput = document.querySelector("#height");
// const widthOutput = document.querySelector("#width");
// function reportWindowSize() {
// heightOutput.textContent = window.innerHeight;
// widthOutput.textContent = window.innerWidth;
// }
// reportWindowSize();
// window.addEventListener("resize",reportWindowSize);//when resize, update report

// Teacher's Method
//select all subtopic pages
// function hideall(){ //function to hide all pages
//     for(let onepage of allpages){ //go through all subtopic pages
//         onepage.style.display="none"; //hide it
//     }
// }
// function show(pgno) // function to show selected page no
// {
//     //select the page based on the parameter passed in
//     let onepage=document.querySelector("#page"+pgno);
//     console.log(onepage.style.display);
//     if (onepage.style.display == "block")
//     {
//         hideall();
//         onepage.style.display="none";
//         return;
//     }
//     hideall();
//     onepage.style.display="block";
// }