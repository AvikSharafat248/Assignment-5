document.getElementById('first-donation-btn').addEventListener('click',
    function(event) {
        event.preventDefault();

        const input1 = document.getElementById('first-donation-input').value;
        const Amount = document.getElementById('first-donation-amount').innerText;
        const fullAmount = document.getElementById('total-amount').innerText;

        if (input1 !== "" && !isNaN(input1)) {
            const parsedInput1 = parseFloat(input1);
            const parsedFullAmount = parseFloat(fullAmount);

            if (parsedInput1 <= parsedFullAmount && parsedInput1 >= 0) {
                const addedAmount = parseFloat(Amount) + parsedInput1;
                const subtractAmount = parsedFullAmount - parsedInput1;

                if (subtractAmount >= 0) {
                    document.getElementById('first-donation-amount').innerText = addedAmount;
                    document.getElementById('total-amount').innerText = subtractAmount;
                } else {
                    window.alert('Invalid donation amount: total cannot go below 0');
                }
            } else {
                window.alert('You do not have sufficient Amount');
            }
        } else {
            window.alert('Please enter a valid number');
        }
    }
);



document.getElementById('2nd-donation-btn').addEventListener('click', 
    function(event) {
        event.preventDefault();

        const input2 = document.getElementById('2nd-donation-input').value;
        const Amount2 = document.getElementById('2nd-donation-amount').innerText;
        const fullAmount = document.getElementById('total-amount').innerText;

        
        if (input2 !== "" && !isNaN(input2)) {
            const parsedInput2 = parseFloat(input2);
            const parsedFullAmount = parseFloat(fullAmount);

            if (parsedInput2 <= parsedFullAmount && parsedInput2 >= 0) {
                const addedAmount2 = parseFloat(Amount2) + parsedInput2;
                const subtractAmount = parsedFullAmount - parsedInput2;

                if (subtractAmount >= 0) {
                    document.getElementById('2nd-donation-amount').innerText = addedAmount2;
                    document.getElementById('total-amount').innerText = subtractAmount;
                } else {
                    window.alert('Invalid donation amount: total cannot go below 0');
                }
            } else {
                window.alert('You do not have sufficient amount');
            }
        } else {
            window.alert('Please enter a valid number');
        }
    }
);


        



document.getElementById('3rd-donation-btn').addEventListener('click', 
    function(event) {
        event.preventDefault();

        const input3 = document.getElementById('3rd-donation-input').value;
        const Amount3 = document.getElementById('3rd-donation-amount').innerText;
        const fullAmount = document.getElementById('total-amount').innerText;
        if (input3 !== "" && !isNaN(input3)) {
            const parsedInput3 = parseFloat(input3);
            const parsedFullAmount = parseFloat(fullAmount);

            if (parsedInput3 <= parsedFullAmount && parsedInput3 >= 0) {
                const addedAmount3 = parseFloat(Amount3) + parsedInput3;
                const subtractAmount = parsedFullAmount - parsedInput3;

                if (subtractAmount >= 0) {
                    document.getElementById('3rd-donation-amount').innerText = addedAmount3;
                    document.getElementById('total-amount').innerText = subtractAmount;
                } else {
                    window.alert('Invalid donation amount: total cannot go below 0');
                }
            } else {
                window.alert('Please enter a valid donation amount within the available total');
            }
        } else {
            window.alert('Please enter a valid number');
        }
    }
);



