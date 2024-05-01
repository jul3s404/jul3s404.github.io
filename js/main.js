function toggleMenu() {
    if (document.getElementById("menu").style.visibility == "visible"){
        console.log("if")
        document.getElementById("menu").style = "visibility: hidden"

    } else {
        console.log("else")
        document.getElementById("menu").style = "visibility: visible"

    } 
}

function KeyPress(e) {
    var evtobj = window.event? event : e
    if (evtobj.keyCode == 75 && evtobj.ctrlKey) {
        e.preventDefault()
        toggleMenu();
    }
}

document.onkeydown = KeyPress;


function hideMenu(){
    document.getElementById("menu").style = "visibility: hidden"
}

//document.body.addEventListener("click", hideMenu)

function showThemes(){
    
    if (document.querySelectorAll('.menu-sub-element')[0].style.display == "none" || document.querySelectorAll('.menu-sub-element')[0].style.display == "") {
        document.querySelectorAll('.menu-sub-element').forEach(function(elem) {
            elem.style ="display: flex;"

        });
    }
    else {
        document.querySelectorAll('.menu-sub-element').forEach(function(elem) {
            elem.style ="display: none;"
        });
    }
}


function search() {
    var searched = document.getElementById("search").value.toLowerCase()
    document.querySelectorAll('.menu-element').forEach(function(elem) {

        if (searched.length === 0) {
            elem.style.display = "flex"
        }

        else if (elem.children[1].innerHTML.toLowerCase().includes(searched))  {
            elem.style.display = "flex"
        }
        else {
            elem.style.display = "none"
        }
    });
}



document.getElementById('menu').addEventListener('click', function(event) {
    // Check if the clicked element is the child
    if (event.target.id === 'menuInside' || event.target.id === "search" || event.target.className === "menu-element" || event.target.className === "result-elements" || event.target.className === "result-elements" || event.target.className === "menuIcon" || event.target.className === "menuText" || event.target.className === "result-elements") {
        event.stopPropagation(); // Prevent child event from bubbling up
    } else {
        hideMenu();
    }
});


if (window.matchMedia("(max-width: 1025px)").matches) {
    document.getElementsByClassName("press-to-start")[0].innerHTML = "Appuyer"
    document.getElementsByClassName("press-to-start")[1].innerHTML = "pour commencer"
    document.getElementsByClassName("ctrl-k-start")[0].style.display = "none"
    
}


if (window.matchMedia("(max-width: 1045px)").matches) {
    document.getElementsByClassName("search-icon")[0].src = "img/menu.svg"
    
}