function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  



document.getElementById('winlevel').addEventListener('click', function(){
    guessdate = document.getElementById('guess')
    if (guessdate.value == "28/10/1945"){
        setCookie("Onlocation", false, 1)
        setCookie("Level", 2, 1)
        setCookie("NextLocation", "51.583579251024794-4.778844232276779", 1)
        window.location.href = "../" // this goes to the root directory where checklevel.js you to the betweenquestions page brings 
    }
    else if(guessdate.value == ""){
        document.getElementById('result').innerHTML = "Probeer je wel echt? Vul dan tenminste iets in!"
    }
    else{
        document.getElementById('result').innerHTML = `${guessdate.value} is niet wat we zochten helaas.`
    }
    
    
})