lista.forEach((item, i) => {
    document.querySelector('.container').innerHTML += `
    
    <img src="${item.image}" data-id="${i}">

    `
})

const img = document.querySelectorAll('img')
    img.forEach(image => {
        const index = image.getAttribute('data-id')
        const { text } = lista[index]
        image.addEventListener('mouseover', () => {
            document.querySelector('p').innerHTML = `${text}`
        })
        image.addEventListener('mouseout', () => {
            document.querySelector('p').innerHTML = `*passe o mouse no card para ler*`
        })

        
    })