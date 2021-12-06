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
     console.log('error');  
    }else {
        console.log('success');
    }
})

