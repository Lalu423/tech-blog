const loginForm = async function(event) {
    event.preventDefault();

    const usernameEl = document.querySelector("#username-input-login");
    const passwordEl = document.querySelector("#password-input-login");
    fetch("/api/user/login", {
        method: "post", 
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value
        }),
        headers: { "Content-Type": "application/jason" }
    })
        .then(function() {
            document.loccation.replace("/dashboard");
        })
        .catch(err => console.log(err));
};

document.querySelector("#login-form").addEventListener("submit", loginForm);