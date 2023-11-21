window.onload=function(){

    const training = document.querySelector("#training");

    training.addEventListener("mouseover", respondMouseOver);
   
};



function respondMouseOver() {
    
    const paragraph = document.createElement("p");

    // Make some text content to put into your <p></p>
    const content = document.createTextNode("hello");
  
    // Put the text content into the <p></p>.
    paragraph.appendChild(content);
  
    // Finally the population can be appended to the body, and will become visible in the browser.
    document.body.appendChild(paragraph);  
};