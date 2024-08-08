function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  



document.getElementById('winlevel').addEventListener('click', function(){

    setCookie("Level", 2, 1)
    setCookie("Onlocation", false, 1)
    window.location.href = "../"
    
})