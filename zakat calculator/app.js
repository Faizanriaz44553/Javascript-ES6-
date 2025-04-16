// const amount = document.querySelector ("#amount")
// const gold = document.querySelector ("#gold")
// const goldAmount = document.querySelector ("#amount-gold")

// function calculate() {
//     console.log(amount.value);
//     console.log(gold.value);
//     console.log(goldAmount.value);
// }


function calculateZakat() {
    const amount = parseFloat(document.querySelector("#amount").value);
    const goldWeight = parseFloat(document.querySelector("#gold").value);
    const goldPrice = parseFloat(document.querySelector("#amount-gold").value);
    
    if (isNaN(amount) || isNaN(goldWeight) || isNaN(goldPrice)) {
        document.querySelector("#zakat-result").textContent = "Please enter valid numerical values.";
        return;
    }

    const zakatCash = amount * 0.025;
    const zakatGold = (goldWeight * goldPrice) * 0.025;
    const totalZakat = zakatCash + zakatGold;

    document.querySelector("#zakat-result").textContent = `Your Zakat amount is: ${totalZakat.toFixed(2)}`;
}