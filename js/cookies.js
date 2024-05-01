
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
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

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    location.reload()
}


function toggleCookie() {
    var dateActuelle = new Date();
    var exp = new Date(dateActuelle.getFullYear() + 1, dateActuelle.getMonth(), dateActuelle.getDate());

    if (getCookie('mode') == "" || getCookie('mode') == "dark"){  
        setCookie('mode', 'light', exp)
    }
    else {
        setCookie('mode', 'dark', exp)
    }
    location.reload();
}

if (getCookie('mode') == "light") {
    document.getElementsByTagName("html")[0].style.setProperty("--background","#FFFFFF");
    document.getElementsByTagName("html")[0].style.setProperty("--text","#081417");
}
else if (getCookie('mode') == "catppuccin"){
    document.getElementsByTagName("html")[0].style.setProperty("--background","#1e1e2e");
    document.getElementsByTagName("html")[0].style.setProperty("--text","#cdd6f4");
    document.getElementsByTagName("html")[0].style.setProperty("--grey","#9399b2");
    document.getElementsByTagName("html")[0].style.setProperty("--primary","#f2cdcd");
    document.getElementsByTagName("html")[0].style.setProperty("--accent","#eba0ac");
    //document.getElementsByTagName("html")[0].style.setProperty("--dropshadow","#1e1e2e");
    
}
else {
    document.getElementsByTagName("html")[0].style.setProperty("--background","#081417");
    document.getElementsByTagName("html")[0].style.setProperty("--text","#FFFFFF");
    //document.getElementsByTagName("html")[0].style.setProperty("--dropshadow","#1e1e2e");
} 
