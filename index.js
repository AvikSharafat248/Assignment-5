document.getElementById('first-donation-btn').addEventListener('click',
    function(event){
        event.preventDefault()

        const input1 = document.getElementById('first-donation-input').value
        const Amount = document.getElementById('first-donation-amount').innerText

        const fullAmount = document.getElementById('total-amount').innerText

        if(!isNaN(input1) && input1 <= fullAmount && input1 >= 0){
    const addedAmount = parseFloat(Amount) + parseFloat(input1)
    const subtractAmount = parseFloat(fullAmount) - addedAmount 
    document.getElementById('first-donation-amount').innerText = addedAmount

    document.getElementById('total-amount').innerText = subtractAmount
        }else{
            window.alert('Please enter a valid number')
        }
        
    }
)