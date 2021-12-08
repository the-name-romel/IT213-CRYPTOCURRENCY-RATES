// Instantiate the Classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();

// Create the varibles

const form = document.getElementById('form');




// Add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // read currency
    const currencySelect = document.getElementById('currency').value;
    // read cryptocurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;

    
    // validate that the selects have something
    if(currencySelect === '' || cryptoCurrencySelect === '') {
     // display an error
     ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-panel');
    }else {
        // Query the REST API
        cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect)
            .then(data => {
                // console.log(data.result.data.quote);
                ui.displayResult(data.result.data.quote);
            })
    }
})

