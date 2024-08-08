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

  if (permission != 1) {
    document.body.innerHTML = "<h1>Hier hoor je niet te zijn...</h1>"
  }

  let onlocation = getCookie('Onlocation')

  if (onlocation != "true") {
    document.body.innerHTML = "<h1>Hier hoor je niet te zijn...</h1>"
  }
  