const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errMessage = document.querySelector("#error-message");

checkButton.addEventListener("click", function validateAmount() {
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else{
            showErrorMessage("no cash needs to be return")
        }
    }else{
       showErrorMessage("please enter the valid bill amount");
    };
});

function hideErrorMessage() {
    errMessage.style.display = "none";
}

function showErrorMessage(msg) {
    errMessage.style.display = "block";
    errMessage.innerText = msg;   
}