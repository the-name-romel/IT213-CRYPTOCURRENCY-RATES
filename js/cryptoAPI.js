class CryptoAPI {
    // Query the rest api with a currency and a cryptocurrency
    async queryAPI(currency, cryptocurrency) {
        // Query the URL
        const url = await fetch(`https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=1&id=${cryptocurrency}&convert=${currency}&CMC_PRO_API_KEY=e9a14b0e-e0bb-4519-8cea-0f20e4dec3a5`);

        // Return as json
        const result = await url.json();

        // Return the objet
        return{
            result
        }
    }

    // Get all the cryptocurrencies
    async getCryptoCurrenciesList() {
        const url = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=e9a14b0e-e0bb-4519-8cea-0f20e4dec3a5');

        // Return this as a json
        const cryptoCurrencies = await url.json();

        //return the object 
        return{
            cryptoCurrencies
        }
    }
}

