class CryptoAPI {


    // Get all the cryptocurrencies
    async getCryptoCurrenciesList() {
        const url = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=e9a14b0e-e0bb-4519-8cea-0f20e4dec3a5')

        // Return this as a json
        const cryptoCurrencies = await url.json();

        //return the object 
        return{
            cryptoCurrencies
        }
    }
}
