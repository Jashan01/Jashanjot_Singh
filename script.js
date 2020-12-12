let activer=0;
const showDiv1= document.querySelector(".choice1");

// flag (3/3) - D3v3L0P3r

const initialise=()=>{
	document.getElementById("show1").style.display="none";
	document.getElementById("show2").style.display="none";
	document.getElementById("show3").style.display="none";
	document.getElementById("show4").style.display="none";
	document.getElementById("android").style.display="none";
	document.getElementById("ios").style.display="none";
	window.scrollTo(0, 500);
	
}

showDiv1.addEventListener('click',(event)=>
{
	initialise();
	document.getElementById("show1").style.display="block";
})

const showDiv2= document.querySelector(".choice2");

showDiv2.addEventListener('click',(event)=>
{
	initialise();
	document.getElementById("show2").style.display="block";
})

const showDiv3= document.querySelector(".choice3");

showDiv3.addEventListener('click',(event)=>
{
	initialise();
	document.getElementById("show3").style.display="block";
})

const showDiv4= document.querySelector(".choice4");

showDiv4.addEventListener('click',(event)=>
{
	initialise();
	document.getElementById("show4").style.display="block";
})

const ad1= document.querySelector(".androidB");

ad1.addEventListener('click',(event)=>
{
	initialise();
	document.getElementById("android").style.display="block";
})

const ad2= document.querySelector(".iosB");

ad2.addEventListener('click',(event)=>
{
	initialise();
	document.getElementById("ios").style.display="block";
})
