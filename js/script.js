let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let scoreElement = document.querySelector(".js-score");
let eurCurrency = 4.78
let gbpCurrency = 5.64
let usdCurrency = 4.79

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value
    let currency = currencyElement.value
    let score

    switch (currency) {
        case "EUR":
            score = eurCurrency * amount;
            break;

        case "GBP":
            score = gbpCurrency * amount;
            break;

        case "USD":
            score = usdCurrency * amount;
            break;

    }

    scoreElement.innerHTML = ` ${score.toFixed(2)} `;

});

