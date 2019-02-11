###Just Web Development Things

1. Write files and folder names in 'lowercase' with 'no spaces' and with words separated by 'dashes' not 'underscores'.
	- E.g: **test-site vs test_site**. Google search engine considers 'hyphen' as word separater not underscore.

2. `<a href="xyz.com">My-text<a>`: 'href' stands for 'hypertext reference'`

3. Anything that we **don't want to show on webpage** but we want to apply on the HTML document: **goes to `<HEAD>` element**. Anything that **we want to show on webpage**, goes to `<body>` elment

4. **Attribute** of *element* and **Property** of *selector*
	- Attribute:
	`<a href="attribute_value"
        alt="attribute_value"> Txt </a>`
	-  Property:
		```
        p{
			color: red;
			width: 200px;
		}```
	- Differences: 
		- **=** and **:**  
		- **'  '** and **;**

5. **Question:** We can assign a single 'id' to different elements on a webpage then what is the difference btw 'class' and 'id'??

6.      padding: the space just around the content (e.g., around paragraph text)
	border: the solid line that sits just outside the padding
	margin: the space around the outside of the element
	MUST see: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics

7. The <body> element is block level, meaning it takes up space on the page and can have margin and other spacing values 
applied to it. Images, on the other hand, are inline elements, meaning they can't. So to apply margins to the image, we 
have to give the image block-level behavior using display: block;.

8. Putting javascript at the end of <body> element is good stratergy. Why?
	If the JavaScript is loaded first and it is supposed to affect the HTML below it, it might not work, as the JavaScript would be loaded before the HTML it is supposed to work on. Therefore, putting JavaScript near the bottom of the HTML page is often the best strategy.

9. Anonymous functions:
	document.querySelector('html').onclick = function(num1,num2) { var temp = num1 + num2; return temp }

10. What is the difference in below two
	 myButton.onclick = function(){
		setGroupName();
	}
	myButton.onclick = setGroupName();
