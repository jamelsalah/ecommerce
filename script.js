const login = document.querySelector(".login");
login.addEventListener('click', showLoginModal);

const block = document.querySelector(".block");
block.addEventListener('click', hideLoginModal);

function showLoginModal(e) {
    e.preventDefault();
    const loginModal = document.querySelector(".login--modal");
    const block = document.querySelector(".block");
    if(loginModal.className == "login--modal invisible") {
        loginModal.classList.remove("invisible");
        loginModal.classList.toggle("visible");  
        block.classList.remove("invisible");
        block.classList.toggle("visible"); 
    }
}

function hideLoginModal(e) {
    e.preventDefault();
    const loginModal = document.querySelector(".login--modal");
    const block = document.querySelector(".block");
    if(loginModal.className == "login--modal visible") {
        loginModal.classList.remove("visible");
        loginModal.classList.toggle("invisible");  
        block.classList.remove("visible");
        block.classList.toggle("invisible"); 
    }
}

