// var myHeading = document.querySelector('h1');
// myHeading.textContent = "National Institute of Technology, Kurukshetra";

var myImage = document.querySelector('img');
myImage.onclick = function(){  
	var mySrc = myImage.getAttribute('src'); // getting the value of 'src' attribute
	if (mySrc == 'images/friends101.jpg')
	{
		myImage.setAttribute('src','images/friends102.jpg')
	}
	else
	{
		myImage.setAttribute('src','images/friends101.jpg')
	}
} 

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button')

function setGroupName()
{
	myName = prompt('Enter the group Name:');
	localStorage.setItem('name', myName)
	myHeading.textContent = "NITKKR: "+ myName;
}
if (!localStorage.getItem('name'))
{
	setGroupName();
}
else
{
	var myName = localStorage.getItem('name')
	myHeading.textContent = "NITKKR: "+ myName;
}


myButton.onclick = function(){
	setGroupName();
}
