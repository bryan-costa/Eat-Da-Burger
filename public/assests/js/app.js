let updateBurger = id => {
    fetch(`/burger/(id)`, { method: 'PUT' })
        .then(_ => {
            location.reload()
        })
        .catch(e => console.log(e))
}
let addBurger = _ => {
    fetch('/burger', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            burger_name: document.querySelector('#burger_name').value,
            devoured: 0
        })
    })
        .then(_ => {
            location.reload()
        })
        .catch(e => console.log(e))
}


document.addEventListener('click', event => {
    event.preventDefault()
    switch (event.target.id) {
        case 'updateBurger':
            updateBurger(event.target.dataset.uid)
            break;
        case 'addBurger':
            addBurger()
            break;
    }
})
