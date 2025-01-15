const cond = new Condominio()

const criarAlfabeto = () => {
    let arrayLetra = []
    for (let i = 65; i <= 90;  i++) {
        const l = String.fromCharCode(i)
        let objAlfabeto = {
            letra: l,
            arrayCond : cond.buscarLetraInit(l)
        }
        arrayLetra.push(objAlfabeto)
    }
    return arrayLetra
}

const criarCards = (id) => {
    const box = document.querySelector(`#${id}`)
    box.innerHTML = ''

    criarAlfabeto().forEach(el => {
        if(el.arrayCond.length > 0){
            box.innerHTML += `
                <div class="listaTitulo">${el.letra}</div>
                <div class="cards" id="cards${el.letra}">
                </div>
                <hr class="listaHr">
            `
            el.arrayCond.forEach(elCond => {
                document.querySelector(`#cards${el.letra}`).innerHTML += `
                    <div class="card">
                    <div class="cardTitulo">${elCond.nome}</div>
                    <p class="cardP"><span>Locktec: </span>${elCond.locktec}</p>
                </div>
                `
            })
        }
        
    })

}

criarCards('listaCond')
