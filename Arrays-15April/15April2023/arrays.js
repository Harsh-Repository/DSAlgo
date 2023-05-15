let allPara = document.getElementsByTagName("p");
console.log(allPara[0].innerText);

//create a var which combines the content of first & last para & print in consol log
console.log(allPara[0].innerText + allPara[4].innerText); //hard coding array value
console.log(allPara[0].innerText + " " + allPara[allPara.length - 1].innerText); //selecting last element of array dynamically
