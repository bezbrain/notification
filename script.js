const markAllBtn = document.querySelector(".mark-all-btn");
const markContainer = document.querySelector(".mark-container");
const angelaContainer = document.querySelector(".angela-container");
const jacobContainer = document.querySelector(".jacob-container");

const notificationNumber = document.querySelector(".notification-number");

const dot = document.querySelectorAll(".dot");
const genContainer = document.querySelectorAll(".general-container");


// js for onclick of "Mark all as read" button
markAllBtn.addEventListener("click", function() {
    notificationNumber.textContent = "0";

    for(let i = 0; i < genContainer.length; i++) {
        genContainer[i].style.backgroundColor = "white";
    }

    dot.forEach(function(dot) {
        dot.style.display = "none";
    });
});

let number = 2;
// js for onclick of unread messages
genContainer.forEach(function(container) {
    container.addEventListener("click", function(e) {
        e.currentTarget.style.backgroundColor = "white";

           const containerChild = e.currentTarget.children[1].children[0].children[1];

           containerChild.style.display = "none";
           notificationNumber.textContent = number--
           if(notificationNumber.textContent == 0) {
                number = 0;
           }
    });
});

const switcherOn = document.querySelector(".switcher-on");
const switcherOff = document.querySelector(".switcher-off");

switcherOff.addEventListener("click", function() {
    document.body.classList.toggle("show-toggle-color");
    
    if(document.body.classList.contains("show-toggle-color")) {
        switcherOn.style.display = "block";
        switcherOn.style.color = "white";
        switcherOff.style.display = "none";
    }
    else {
        switcherOn.style.backgroundColor = "unset";
    }

});

switcherOn.addEventListener("click", function() {
    document.body.classList.remove("show-toggle-color");
    switcherOff.style.display = "block";
    switcherOn.style.display = "none";
})



