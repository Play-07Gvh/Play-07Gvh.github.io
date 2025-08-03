//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");

// Page 2 variables
const forgingbtn=document.querySelector("#Forging-btn");
const drawingbtn=document.querySelector("#Drawing-btn");
const bendingbtn=document.querySelector("#Bending-btn");
const upsettingbtn=document.querySelector("#Upsetting-btn");
const punchingbtn=document.querySelector("#Punching-btn");
const weldingbtn=document.querySelector("#Welding-btn");
const finishingbtn=document.querySelector("#Finishing-btn");
var allsubpages=document.querySelectorAll(".subpage");

const menuItemsList=document.querySelector("nav ul");
const hamBtn = document.querySelector("#hamIcon");
hamBtn.addEventListener("click",toggleMenus);

// Minigame related variables
const hammer=document.querySelector("#Hammer");
const hammerbtn=document.querySelector("#Smack");
const progressBar=document.querySelector("#progress-bar");

// select all subtopic pages
function hideall(){ //function to hide all pages
    for(let onepage of allpages){ //go through all subtopic pages
        onepage.style.display="none"; //hide it
    }
}

function hideallSubpages()
{
    for (let onesubpage of allsubpages)
    {
        onesubpage.style.display="none";
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

function showsub(pg)
{
    let onepage=document.querySelector("#"+pg);
    if (onepage.style.display == "block")
    {
        hideallSubpages();
        onepage.style.display="none";
        return;
    }
    hideallSubpages();
    onepage.style.display="block";
}

/*Listen for clicks on the buttons, assign anonymous eventhandler functions to call show function*/
page1btn.addEventListener("click", function(){show(1);});
page2btn.addEventListener("click", function(){show(2);});
page3btn.addEventListener("click", function(){show(3);});

hideallSubpages();
hideall();

forgingbtn.addEventListener("click",function(){showsub("Forging");});
drawingbtn.addEventListener("click",function(){showsub("Drawing");});
bendingbtn.addEventListener("click",function(){showsub("Bending");});
upsettingbtn.addEventListener("click",function(){showsub("Upsetting");});
punchingbtn.addEventListener("click",function(){showsub("Punching");});
weldingbtn.addEventListener("click",function(){showsub("Welding");});
finishingbtn.addEventListener("click",function(){showsub("Finishing");});


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

let progress=0;
var HammerSFX = new Audio("Audio/Blacksmith_SFX.mp3"); // init the sound of the blacksmith
function HammerSmack()
{
    // Play the hammer animation
    hammer.classList.toggle("HammerAnimate");
    setTimeout(function(){hammer.classList.toggle("HammerAnimate");},200); // Remove the toggle so the player does not need to click again for the animation to play

    // Add to progress bar
    if (progress < 100)
    {
        progress += 5;
        HammerSFX.play();
        hammerbtn.innerHTML="SMACK!";
    }
    else
    {
        hammerbtn.innerHTML="NICE!";
        alert("You made a sword!");
        progress = 0; // Reset
    }
    progressBar.style.width = progress + "%"; // Increase the display
}

hammerbtn.addEventListener("click", function(){HammerSmack();});
