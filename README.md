# Souvenir-store app
Test task - application for small business owners who would like to collect an information about their income and get annual income statistics. <br>

Powered by React, Redux.

## Getting started
- Clone project repository
```
git clone https://github.com/bodi44/souvenir-shop-app.git
```

- Install dependencies([need to install Node.js and Node package manager first](https://nodejs.org/uk/download/))
```
npm install
```

- Run application

```
npm start
```
- Open `http://localhost:3000/` with running app

## Testing
 - To run tests enter:
 ```
 npm test
 ```

## Usage
**Application has following set of commands**:

- `help` - get instructions if you get stuck    
    ```
    > help   
    purchase <date> <price> <currency> <productName> - add purchase to store.
    Example: purchase 2019-04-25 12 USD Photo
    Output:
    2019-04-25
    Photo 12 USD
    
    all - show all purchases.
    Example: all
    Output:
    2019-04-25
    Photo 12 USD
    
    clear <date> - removes all purchases for specified date.
    Example: clear 2019-04-25
    Output:
    
    report <year> <currency> - calculate the total income for specified year, convert and present it in specified currency.
    Example: report 2019 UAH
    Output:
    356.4 UAH
    ```

- `purhcase 2019-04-25 12 USD "Photo Frame"` - adds purchases made by customers in any supported currency (e.g. USD, EUR, PLN, etc.) to the list of purchases.
Purchases for various dates could be added in any order.

  Command accepts the following parameters:<br>
    - 2019-04-25 — the date when purchase has occurred<br>
    - 12 — an amount of money spent by customer<br>
    - USD — the currency in which purchase has occurred<br>
    - “Photo Frame” — the name of the product purchased
    
     ```
     > purchase 2019-04-25 2 USD T-shirt
     
     2019-04-25
     T-shirt 2 USD
     
     > purchase 2019-04-25 12 EUR "Photo Frame"
     
     2019-04-25
     T-shirt 2 USD
     "Photo Frame" 12 EUR
     
     > purchase 2019-04-27 4.75 EUR Beer
     
     2019-04-25
     T-shirt 2 USD
     "Photo Frame" 12 EUR
     
     2019-04-27
     Beer 4.75 EUR
     
     > purchase 2019-04-26 2.5 PLN Sweets
     
     2019-04-25
     T-shirt 2 USD
     "Photo Frame" 12 EUR
     
     2019-04-27
     Beer 4.75 EUR
     
     2019-04-26
     Sweets 2.5 PLN
     ```
    
- `all` - shows all purchases sorted by date.
    ```
    > all
    
    2019-04-25
    T-shirt 2 USD
    "Photo Frame" 12 EUR
    
    2019-04-26
    Sweets 2.5 PLN
    
    2019-04-27
    Beer 4.75 EUR
    ```

- `clear 2019-04-25` -  removes all purchases for specified date, where:   
    - 2019-04-25 — the date for which all purchases should be removed
    
    ```
    > clear 2019-04-27
    
    2019-04-25
    T-shirt 2 USD
    "Photo Frame" 12 EUR
    
    2019-04-26
    Sweets 2.5 PLN
    ```

- `report 2019 UAH` - this command should take a list of cross-currency exchange rates from http://fixer.io (register for a free plan),
 calculate the total income for specified year, convert and present it in specified currency, where:
    - 2019 — year for which total income should be calculated
    - UAH — currency in which total income is presented
    
    ```
    > report 2019 UAH    
    428.02 UAH
    ```