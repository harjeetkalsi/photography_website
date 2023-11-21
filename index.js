// window.onload=function(){

//     const training = document.querySelector("#training");

//     training.addEventListener("mouseover", respondMouseOver);
   
// };



// function respondMouseOver() {
    
//     const paragraph = document.createElement("p");

//     // Make some text content to put into your <p></p>
//     const content = document.createTextNode("hello");
  
//     // Put the text content into the <p></p>.
//     paragraph.appendChild(content);
  
//     // Finally the population can be appended to the body, and will become visible in the browser.
//     document.body.appendChild(paragraph);  
// };

window.onload = function(){

    
    const about_me = document.querySelector("#about_me");

    about_me.addEventListener("mouseover", showAboutMe, {once : true});
}

function showAboutMe(){

    const div = document.querySelector("#content");


    const paragraph = document.createElement("p");

    const content = document.createTextNode("Currently working in East London as a Secondary School Computer Science Teacher, however I previoudly worked in the tech industry for 4 years. During this time I worked on a varitey of projects. In my spare time I enjoy practing Photography.");

    paragraph.appendChild(content);

    div.appendChild(paragraph);

    document.body.appendChild(div);

    const x = document.createElement("IMG");
    x.setAttribute("src", "imgs/railcard.jpeg");
    x.setAttribute("width", "360");
    x.setAttribute("height", "500");
    x.setAttribute("alt", "Picture of Harjeet");
    x.style.position = "absolute";
    x.style.left = 695+'px';
    x.style.top = 400 +'px';
    document.body.appendChild(x);

} 

