document.addEventListener('click', ({ target }) => {
    switch (target.id) {
        case 'updateBurger':
            updateBurger()
            break;
        case 'addBurger':
            addBurger()
        break;
    }
    
    
    if (target.id === 'burgerButton'){
        fetch(`/burger/${target.dataset.uid}`, {method: 'PUT'})
        .then(_=>{
            location.reload()
        })
    }
})