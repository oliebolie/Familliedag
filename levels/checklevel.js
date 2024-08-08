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

let level = getCookie('Level')
if (level == 0){
    window.location.href = "/starten/"
}
if (level == 1) {
    window.location.href = "/levels/level1/"
}