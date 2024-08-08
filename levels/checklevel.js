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

if (getCookie('Onlocation') == "false"){
  window.location.href = "../betweenquestions/"
}

if (getCookie('Onlocation') == ""){
  window.location.href = "../starten/"
}

if (getCookie('Onlocation') == "true"){
 

  let permission = getCookie('Level')

  if (permission == ""){
    window.location.href = "../starten/"
  }

  else if (permission == 1){
    window.location.href = "/levels/level1/"
  }
}