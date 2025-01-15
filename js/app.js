const cond = new Condominio()

const criarAlfabeto = () => {
    let arrayLetra = []
    for (let i = 65; i <= 90; i++) {
        const l = String.fromCharCode(i)
        let objAlfabeto = {
            letra: l,
            arrayCond: cond.buscarLetraInit(l)
        }
        arrayLetra.push(objAlfabeto)
    }
    return arrayLetra
}

const criarCards = (id) => {
    const box = document.querySelector(`#${id}`)
    box.innerHTML = ''

    criarAlfabeto().forEach(el => {
        if (el.arrayCond.length > 0) {
            let contem = false
            let cod = ''
            el.arrayCond.forEach(elCond => {
                contem = true
                cod += `
                    <div class="card">
                        <div class="cardTitulo">${elCond.nome}</div>
                        <p class="cardP"><span>DVR: </span>${elCond.dvr[0]}</p>
                        <p class="cardP"><span>Tipo: </span>${elCond.tipo}</p>
                        <p class="cardP"><span>Locktec: </span>${elCond.locktec}</p>
                        <p class="cardP"><span>Endereço: </span>${elCond.end.rua}, ${elCond.end.num}</p>
                        <p class="cardP"><span>Bairro: </span>${elCond.end.bairro}</p>
                        <p class="cardP"><span>Cidade: </span>${elCond.end.cidade} / ${elCond.end.sigla}</p>
                    </div>
                    `
            })
            if (contem) {
                box.innerHTML += `
                    <div class="listaTitulo">${el.letra}</div>
                    <div class="cards" id="cards${el.letra}">
                        ${cod}
                    </div>
                    <hr class="listaHr">
                `
            }
        }

    })

}

const painelInfo = (id) => {
    const count = cond.getCountCond()
    const box = document.querySelector(`#${id}`)
    box.innerHTML = ''
    box.innerHTML = `
        <p>Fortaleza: ${count.ce}, Recife: ${count.pe}, São Paulo: ${count.sp}, Rio de Janeiro: ${count.rj}, Total: ${count.tt}</p>
    `
}

criarCards('listaCond')
painelInfo('painel-info')
//cond.transformarArray('conds')
//console.log(cond.getCondLength())
//console.log(cond.getCountCond())


