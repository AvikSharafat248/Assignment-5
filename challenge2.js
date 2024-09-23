document.getElementById('Donation-BTN').addEventListener('click', function(){
    const don2 = document.getElementById('Donation5')
    const history1 = document.getElementById('hidden-1')
    const history2 = document.getElementById('hidden-2')
    const history3 = document.getElementById('hidden-3')


    don2.classList.remove('hidden')
    history1.classList.add('hidden')
    history2.classList.add('hidden')
    history3.classList.add('hidden')
})