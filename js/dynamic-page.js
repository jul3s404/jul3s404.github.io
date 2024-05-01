var xhr= new XMLHttpRequest();
xhr.open('GET', '../components/navbar.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    console.log(this.responseText)
    var z = document.createElement('div'); // is a node
    z.innerHTML = this.responseText
    document.getElementsByTagName('body')[0].appendChild(z);
};
xhr.send();

var xhr= new XMLHttpRequest();
xhr.open('GET', '../components/menu.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    console.log(this.responseText)
    var z = document.createElement('div'); // is a node
    z.innerHTML = this.responseText
    document.getElementsByTagName('body')[0].appendChild(z);
};
xhr.send();

var xhr= new XMLHttpRequest();
xhr.open('GET', '../components/header.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    console.log(this.responseText)
    var z = document.createElement('div'); // is a node
    z.innerHTML = this.responseText
    document.getElementsByTagName('head')[0].appendChild(z);
};
xhr.send();

var xhr= new XMLHttpRequest();
xhr.open('GET', '../components/scripts.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    console.log(this.responseText)
    var z = document.createElement('div'); // is a node
    z.innerHTML = this.responseText
    var f = document.createElement("footer")
    document.getElementsByTagName('html')[0].appendChild(f);
    document.getElementsByTagName('footer')[0].appendChild(z);
};
xhr.send();