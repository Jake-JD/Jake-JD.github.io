const dataOutput = document.querySelector('#dataOutput');
const cryptoSubmitBtn = document.getElementById('cryptoSubmit');
const topTen = document.getElementById('topTenCrypto');
const customCryptoIn = document.getElementById('customCrypto');
const customSubmitBtn = document.getElementById('CustomCryptoSubmit');
const cryptoIn = document.getElementById('crypto');
const clearingAllBtn = document.getElementById('clearAll');
const cardContainer = document.createElement('div');
cardContainer.classList.add('cardContainer');
const cryptoName = document.createElement('h2');
const cryptoDetailsUSD = document.createElement('h3');
const cryptoDetailsPercent = document.createElement('h3');


let crypVal;
let crypID;
let clickedMaybe;
let priceInUSD;
let percentChange;
let json_fin;
let clickedCount = 0;
let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

clearingAllBtn.addEventListener("click", () => {
    clickedCount++;
    if (clickedCount > 1) {
        console.log("CLEARING")
        clickedCount = 1;
        
        const element = document.getElementsByClassName("cardContainer");
        for ( let x = (element.length - 1); x >= 0; x-- ) {
            
            // console.log(element[x]);
            element[x].remove();
        }
    }
})

customSubmitBtn.addEventListener("click", () => {
    clickedCount++;
    console.log(`clicked count is: ${clickedCount}`)
    numCrypto = customCryptoIn.value
    numCrypto = Number(numCrypto)
    if (numCrypto > 100) {
        numCrypto = 100;
    }
    // console.log(typeof(numCrypto))
    // console.log(`THE NUM IS ${numCrypto}`)
    manycryp(numCrypto)

})




cryptoSubmitBtn.addEventListener("click", () => {
    crypVal = cryptoIn.value
    // console.log(typeof(crypVal))
    if (crypVal === "") {
        console.log("inside crypval if statement")
        crypVal = "bitcoin"
    }
    crypVal = crypVal.toLowerCase()
    crypVal = "https://api.coincap.io/v2/assets/" + crypVal
    console.log(crypVal)
    response = fetch(crypVal, requestOptions)
        
        .then(response => response.json())
        .then(result => {
            // clickedMaybe = true
            json_fin = result
            crypID = json_fin.data.id
            priceInUSD = json_fin.data.priceUsd
            priceInUSD = Number(priceInUSD).toFixed(2)
            percentChange = json_fin.data.changePercent24Hr
            percentChange = Number(percentChange).toFixed(2)

            // console.log(crypID)
            // console.log(priceInUSD)
            // console.log(percentChange)
            // info()
            
            const cardContainer = document.createElement('div')
            cardContainer.classList.add('cardContainer')
            const cryptoName = document.createElement('h2')
            const cryptoDetailsUSD = document.createElement('h3');
            const cryptoDetailsPercent = document.createElement('h3');

            cryptoName.innerText = `${crypID}`
            cryptoDetailsUSD.innerText = `USD Price: ${priceInUSD}`
            cryptoDetailsPercent.innerText = `Percent Change: ${percentChange}`

            if (percentChange > 0) {
                cryptoDetailsPercent.style.color = "#83E22B"
            } else if (percentChange < 0) {
                cryptoDetailsPercent.style.color = "#E22E2B"
            } else {
                cryptoDetailsPercent.style.color = "#FFF"
            }
            
            cardContainer.append(cryptoName);
            cardContainer.append(cryptoDetailsUSD);
            cardContainer.append(cryptoDetailsPercent);

            dataOutput.append(cardContainer)
        })
        .catch(error => console.log('error', error));
})

// function info() {

//     if (clickedMaybe === true) {
//         cryptoName.innerText = `${crypID}\n${priceInUSD}\n${percentChange}  `
//         cardContainer.append(cryptoName)
//         dataOutput.append(cardContainer)
//     }
// }

topTen.addEventListener("click", () => {
    clickedCount++;
    console.log(`clicked count is: ${clickedCount}`)
    manycryp(10)
})

function manycryp(num) {
    crypVal = "https://api.coincap.io/v2/assets/" 
    console.log(crypVal)
    response = fetch(crypVal, requestOptions)
        .then(response => response.json())
        .then(result => {
            clickedMaybe = true
            json_fin = result
            // console.log(json_fin)
            // console.log("Outside for loop")
           
            if (clickedCount > 1) {
                // console.log("inside if statement")
                clickedCount = 1;
                
                const element = document.getElementsByClassName("cardContainer");
                for ( let x = (element.length - 1); x >= 0; x-- ) {
                    // console.log(element[x]);
                    element[x].remove();
                }

            }
            

            for (let i in json_fin.data) {
                if (i < num){
                    
                    // console.log("Inside for  and if loop")
                    // console.log(`id number: ${i}`)
                    crypID = json_fin.data[i].id
                    // console.log(crypID)
                    priceInUSD = json_fin.data[i].priceUsd
                    priceInUSD = Number(priceInUSD).toFixed(2)
                    // console.log(priceInUSD)
                    percentChange = json_fin.data[i].changePercent24Hr
                    percentChange = Number(percentChange).toFixed(2)
                    // console.log(percentChange)
                    const cardContainer = document.createElement('div')
                    cardContainer.classList.add('cardContainer')
                    const cryptoName = document.createElement('h2')
                    const cryptoDetailsUSD = document.createElement('h3');
                    const cryptoDetailsPercent = document.createElement('h3');
                    
                    cryptoName.innerText = `${crypID}`
                    cryptoDetailsUSD.innerText = `USD Price: ${priceInUSD}`
                    cryptoDetailsPercent.innerText = `Percent Change: ${percentChange}`
                    
                    if (percentChange > 0) {
                        cryptoDetailsPercent.style.color = "#83E22B"
                    } else if (percentChange < 0) {
                        cryptoDetailsPercent.style.color = "#E22E2B"
                    } else {
                        cryptoDetailsPercent.style.color = "#FFF"
                    }

                    // cryptoName.innerText = `${crypID}\nPrice(USD): ${priceInUSD}\nPercent Change: ${percentChange}  `
                    cardContainer.append(cryptoName);
                    cardContainer.append(cryptoDetailsUSD);
                    cardContainer.append(cryptoDetailsPercent);

                    dataOutput.append(cardContainer);
                }
            }
        })
        .catch(error => console.log('error', error));
}

