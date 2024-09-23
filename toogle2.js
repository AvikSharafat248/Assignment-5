// document.getElementById('Donation-BTN').addEventListener('click',function(){
//     const history = document.getElementById('history-btn')
//     history.classList.remove('first-class')
//     const don2 = document.Id('Donation-BTN')
//     don2.classList.add('addingColor')
//     history.classList.add('removingColor')
// })

document.getElementById('Donation-BTN').addEventListener('click',function(){
    const history = document.getElementById('history-btn')
    history.classList.remove('first-class')
    const don2 = document.getElementById('Donation-BTN')

    don2.classList.add('addingColor')
    don2.classList.add('first-class')
    don2.classList.remove('removingColor')
    history.classList.add('removingColor')
    

})


