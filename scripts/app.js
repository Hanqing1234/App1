//IIFE - Immeadiately Invoke function expression = anonymous self-excuting function - closure

(function(){

    // function Start()
    // {
    //     console.log("App started");
    // }

    //declarative format
    // let Start = function()
    // {
    //     console.log("App started");
    // }

    let Start = ()=>
    {
        console.log("App started");

        let clickBtn = document.getElementById("clickBtn");

        let a = document.getElementsByTagName("button");
        console.log(a);

    }

    let title = document.title;
    title = title.toLowerCase();

        let navAnchors = document.querySelectorAll("li a");
        

        for (const li of navAnchors) {
            console.log(li);
            let anchorString = li.getAttribute("href");
            anchorString = anchorString.substr(0,anchorString.length - 5)
            console.log(anchorString);
            if(anchorString === title)
            {
                li.className = "nav-link active";
            }
            else if ((anchorString === "index") && (title === "home"))
            {
                li.className = "nav-link active";
            }
            
        }
    // //Nice, if I have id in each li
    // switch (title) {
    //     case "Home":

    //         break;
    //     case "Products":           
    //         break;
    //     case "About":           
    //         break;
    //     case "Services":           
    //         break;    
    //     case "Contact":           
    //         break;    
    //     default:
    //         break;
    // }

    window.addEventListener("load",Start);

})();
