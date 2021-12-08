class UI {
    constructor() {
        this.init();
    }
    init() {
        this.printCryptoCurrencies();
    }
    // Prints the <option> for the form
    printCryptoCurrencies(){
        cryptoAPI.getCryptoCurrenciesList()
            .then(data => {
                const cryptoCurrencies = data.cryptoCurrencies.data;

                // Buid the <select> from the REST API
                const select = document.getElementById('cryptocurrency');

                cryptoCurrencies.forEach(currency => {
                    // add the <optio>
                    const option = document.createElement('option');
                    option.value = currency.id;
                    option.appendChild(document.createTextNode(currency.name));
                    select.appendChild(option);
                })
            })
    }

    // Print a message 2 parameteres, message and classes

    printMessage(message, className) {
        const div = document.createElement('div');

        // add the classes
        div.className = className;
        // add the message
        div.appendChild(document.createTextNode(message));

        const messageDiv = document.querySelector('.messages');

        messageDiv.appendChild(div);

        // remove the message
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000)
    }

    // Prints the results of the valuation/rate
    displayResult(data, result, currency) {
        
        let HTMLTemplate = '';

        HTMLTemplate += `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The price of ${data.name} from ${currency} is ${result.price}</p>

                </div>
            </div>
        `;

        const divResult = document.querySelector('#result');
        divResult.innerHTML = HTMLTemplate;
    }
}