const form = document.querySelector("#credit-card");

const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#name-text");
const cardExpiration = document.querySelector("#valid-thru-text");
const cardCVV = document.querySelector("#cvv-text");

const cardNumberText = document.querySelector(".number-vl");
const cardHolderText = document.querySelector(".name-vl");
const cardExpirationText = document.querySelector(".expiration-vl");
const cardCVVText = document.querySelector(".cvv-vl");

const mainContent = document.querySelector("#main-content"); // Container principal

function showErrorScreen() {
    const errorScreen = document.createElement("div");
    errorScreen.id = "error-screen";
    errorScreen.style.position = "fixed";
    errorScreen.style.top = "0";
    errorScreen.style.left = "0";
    errorScreen.style.width = "100%";
    errorScreen.style.height = "100%";
    errorScreen.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    errorScreen.style.display = "flex";
    errorScreen.style.justifyContent = "center";
    errorScreen.style.alignItems = "center";
    errorScreen.style.zIndex = "1000";

    const errorBox = document.createElement("div");
    errorBox.style.backgroundColor = "#333";
    errorBox.style.padding = "40px";
    errorBox.style.borderRadius = "10px";
    errorBox.style.textAlign = "center";
    errorBox.style.color = "#fff";
    errorBox.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.3)";

    errorBox.innerHTML = `
        <h1 style="font-size: 2rem; margin-bottom: 20px;">ERR: 500 - INTERNAL SERVER ERROR</h1>
        <div style="font-size: 5rem; color: red;">&#10060;</div>
    `;

    errorScreen.appendChild(errorBox);
    document.body.appendChild(errorScreen);

    setTimeout(() => {
        errorScreen.remove();
        window.location.href = ""; // Altere para o caminho desejado
    }, 5000);
}

cardNumber.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardNumberText.innerText = "1234 5678 9101 1121";
    } else {
        const valuesOfInput = e.target.value.replaceAll(" ", "");

        if (e.target.value.length > 14) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else {
            cardNumberText.innerHTML = valuesOfInput;
        }
    }
});

cardHolder.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardHolderText.innerHTML = "NOAH JACOB";
    } else {
        cardHolderText.innerHTML = e.target.value.toUpperCase();
    }
});

cardExpiration.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardExpirationText.innerHTML = "02/40";
    } else {
        const valuesOfInput = e.target.value.replace("/", "");

        if (e.target.value.length > 2) {
            e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
            cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
        } else {
            cardExpirationText.innerHTML = valuesOfInput;
        }
    }
});

cardCVV.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardCVVText.innerHTML = "123";
    } else {
        cardCVVText.innerHTML = e.target.value;
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    showErrorScreen();
});
