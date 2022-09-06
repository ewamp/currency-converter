{
    const calculateScore = (amount, currency) => {
        const eurCurrency = 4.78
        const gbpCurrency = 5.64
        const usdCurrency = 4.79

        switch (currency) {
            case "EUR":
                return eurCurrency * amount;

            case "GBP":
                return gbpCurrency * amount;

            case "USD":
                return usdCurrency * amount;

        }
    };

    const updateScoreText = (score) => {
        const scoreElement = document.querySelector(".js-score");
        scoreElement.innerHTML = ` ${score.toFixed(2)} `;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value
        const currency = currencyElement.value

        const score = calculateScore(amount, currency);


        updateScoreText(score);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}