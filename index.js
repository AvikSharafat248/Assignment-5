document.getElementById('first-donation-btn').addEventListener('click',
    function(event){
        event.preventDefault()

        const input1 = document.getElementById('first-donation-input').value
        const Amount = document.getElementById('first-donation-amount').innerText

        const fullAmount = document.getElementById('total-amount').innerText

        if(!isNaN(input1) && input1 <= fullAmount && input1 >= 0  && fullAmount < input1){
    const addedAmount = parseFloat(Amount) + parseFloat(input1)
    const subtractAmount = parseFloat(fullAmount) - addedAmount 
    document.getElementById('first-donation-amount').innerText = addedAmount

    document.getElementById('total-amount').innerText = subtractAmount
        }else{
            window.alert('Please enter a valid number')
        }
        
    }
)


document.getElementById('2nd-donation-btn').addEventListener('click', 
    function(event) {
        event.preventDefault()

        const input2 = document.getElementById('2nd-donation-input').value
        const Amount2 = document.getElementById('2nd-donation-amount').innerText

        const fullAmount = document.getElementById('total-amount').innerText

        if (!isNaN(input2) && input2 <= fullAmount && input2 >= 0 && fullAmount < input2) {
            const addedAmount2 = parseFloat(Amount2) + parseFloat(input2)
            const subtractAmount = parseFloat(fullAmount) - addedAmount2
            document.getElementById('2nd-donation-amount').innerText = addedAmount2

            document.getElementById('total-amount').innerText = subtractAmount
        } 
        else {
            window.alert('Please enter a valid number')
        }
    }
)


document.getElementById('3rd-donation-btn').addEventListener('click', 
    function(event) {
        event.preventDefault()

        const input3 = document.getElementById('3rd-donation-input').value
        const Amount3 = document.getElementById('2nd-donation-amount').innerText

        const fullAmount = document.getElementById('total-amount').innerText

        if (!isNaN(input3) && input3 <= fullAmount && input3 >= 0) {
            const addedAmount3 = parseFloat(Amount3) + parseFloat(input3)
            const subtractAmount = parseFloat(fullAmount) - addedAmount3
            document.getElementById('3rd-donation-amount').innerText = addedAmount3

            document.getElementById('total-amount').innerText = subtractAmount
        } 
        else {
            window.alert('Please enter a valid number')
        }
    }
)