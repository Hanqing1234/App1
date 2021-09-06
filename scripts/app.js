//IIFE - Immeadiately Invoke function expression = anonymous self-excuting function - closure

(function(){

    function Start()
    {
        console.log("App started");
    }

    window.addEventListener("load",Start);

})();
