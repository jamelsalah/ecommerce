const login = document.querySelector(".login");
login.addEventListener('click', showLoginModal);

function showLoginModal(e) {
    e.preventDefault();
    const loginModal = document.querySelector(".login--modal");
    if(loginModal.className == "login--modal invisible") {
        loginModal.classList.remove("invisible");
        loginModal.classList.toggle("visible"); 
    }
}