//This script makes sure that you can never end in the root directory

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  let permission = getCookie('Level')

  if (permission == ""){
    window.location.href = "/starten/"
  }

  else{
    window.location.href = "/levels/"
  }