document.getElementById('history-btn').addEventListener('click', function(){
    const don = document.getElementById('Donation5')
    const history1 = document.getElementById('hidden-1')
    const history2 = document.getElementById('hidden-2')
    const history4 = document.getElementById('hidden-3')

    don.classList.add('hidden')
    history1.classList.remove('hidden')
    history2.classList.remove('hidden')
    history4.classList.remove('hidden')
})