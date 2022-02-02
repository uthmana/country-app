interface ICountryDetail{
    name: string,
    nativeName: string,
    population: String,
    region: string,
    subRegion: string,
    capital: string,
    topLevelDomain: string,
    currencies: ICurrency[],
    language: string[],
    boderCountry: string[],
    flag: string
}


interface ICurrency{
    name: string,
    symbol: string
}

export default ICountryDetail;