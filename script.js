//calculateSalary()

function calculateSalary(fixo, vendas) {
    let salarioTotal = 0
    let dif = vendas - 1200
    

    if (dif <= 0) {
        salarioTotal = fixo + (0.03 * vendas)
    }
    else {
        salarioTotal = fixo + (0.03 * 1200) + (dif * 0.05)

    }
    return salarioTotal
}
console.log(calculateSalary(1000, 1400))

//cashMachine()

function cashMachine(saque, salarioTotal, vendas){
    
    const notas = [200, 100, 50, 20, 10, 5, 1]
    const saldo = salarioTotal - saque
    
    let quantidade = [0,0,0,0,0,0,0]
    
    for(i = 0; i < notas.length; i++){
        let divArredondada = Math.floor(saque/notas[i])
        
        if(saque >= notas[i]){
            quantidade[i] = divArredondada
            saque = saque - divArredondada * notas[i]
        }
    }
    return `Notas sacadas: ${quantidade[0]} notas de R$200,00; ${quantidade[1]} notas de R$100,00; ${quantidade[2]} notas de R$50,00; ${quantidade[3]} notas de R$ 20,00, ${quantidade[4]} notas de R$10,00; ${quantidade[5]} notas de R$5,00 e ${quantidade[6]} notas de R$1,00. Saldo restante: R$${saldo}` 
}

console.log(cashMachine(1200, calculateSalary(2000,4000), 4000))

//calculateStock()

function calculateStock(atual, max, min) {
    let media = (max + min)/2

    if(atual >= media){
        return 'Não efetuar compra.'
    }
        return "Efetuar compra."
}

console.log(calculateStock(200, 100, 150))
console.log(calculateStock(200, 500, 350))


//calculateAge()

function calculateAge(yborn, yactual){
    let dif = yactual - yborn
    let months = dif * 12
    let weeks = months * 4 
    let days = months * 30

  return `Idade em anos: ${dif}; idade em meses: ${months}; idade em dias: ${days}; idade em semanas: ${weeks}.`
}

console.log(calculateAge(2000, 2022))


//getDiagonal()

function getDiagonal(matriz) {
    let saida = []

    for (let y = 0; y < matriz.length; y++) {
        for (let x = 0; x < matriz[y].length; x++) {
            if (y == x) {
                saida.push(matriz[x][y])
            }
        }
    }

    return saida
}

matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(getDiagonal(matriz))

