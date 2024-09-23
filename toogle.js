document.getElementById('history-btn').addEventListener('click',function(){
    const history = document.getElementById('history-btn')
    history.classList.add('first-class')
    const don2 = document.getElementById('Donation-BTN')

    don2.classList.remove('addingColor')
    don2.classList.remove('first-class')
    don2.classList.add('removingColor')
    history.classList.remove('removing-color')
    history.classList.remove('removingColor')
    

})


