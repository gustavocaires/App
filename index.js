const meta = {
    value: "ler um livro por mes",
    checked: true
}

let metas = [
    meta,
    {
        value: "caminhar 20 minutos todos os dias",
        checked: false
    }
]

meta.value = "não é mais ler um livro"
console.log(metas[0].value)