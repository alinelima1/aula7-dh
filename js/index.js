window.addEventListener("load", start => {
    //Inicialização do vetor do exercício 7
    let arr7 = [
        {
            nome: 'arroz',
            preco: 15.00
        },
        {
            nome: 'feijao',
            preco: 10.00
        },
        {
            nome: 'macarrao',
            preco: 4.00
        },
        {
            nome: 'molho de tomate',
            preco: 3.00
        }
    ];
    let arrEx7 = document.querySelector("#spanArr1");
    arrEx7.innerHTML = JSON.stringify(arr7);

    //Inicialização do objeto  do exercício 8
    let arr8 = [
        {
            nome: 'Aline',
            serie: '8'
        },
        {
            nome: 'Daniela',
            serie: '9'
        },
        {
            nome: 'Julia',
            serie: '8'
        },
        {
            nome: 'Paula',
            serie: '8'
        },
        {
            nome: 'Cinthia',
            serie: '9'
        },
        {
            nome: 'Gustavo',
            serie: '9'
        }];
    let arrEx8 = document.querySelector("#spanArr2");
    arrEx8.innerHTML = JSON.stringify(arr8);

    // Tratamento questão 1
    document.querySelector("#parImpar").addEventListener("click", function (event) {
        let inputNumber = document.querySelector("#inputNumber");
        let parImparResult = document.querySelector("#parImparResult");
        parImparResult.innerHTML = question1(inputNumber.value);
    })

    //Tratamento questão 2
    document.querySelector("#primoBtn").addEventListener("click", function (event) {
        let inputNumberPrimo = document.querySelector("#inputNumberPrimo");
        let primoResult = document.querySelector("#primoResult");
        primoResult.innerHTML = question2(inputNumberPrimo.value);
    })

    //Tratamento questão 3
    document.querySelector("#regressivaBtn").addEventListener("click", function (event) {
        let regressivaResult = document.querySelector("#regressivaResult");
        question3(10);
    })

    //Tratamento questão 4
    document.querySelector("#regressiva2Btn").addEventListener("click", function (event) {
        let regressiva2Result = document.querySelector("#regressiva2Result");
        question4(10)
            .then(result => {
                regressiva2Result.innerHTML = result;
            })
    })

    //Tratamento questão 5
    document.querySelector("#regressiva3Btn").addEventListener("click", async function (event) {
        let regressiva3Result = document.querySelector("#regressiva3Result");
        await question5(10);
    })

    //Tratamento questão 6
    document.querySelector("#array0Btn").addEventListener("click", async function (event) {
        let array0Result = document.querySelector("#array0Result");
        array0Result.innerHTML = question6();
    })

    //Tratamento questão 7
    document.querySelector("#array1Btn").addEventListener("click", async function (event) {
        let array1Result = document.querySelector("#array1Result");
        array1Result.innerHTML = question7(arr7);
    })

    //Tratamento questão 8
    document.querySelector("#array2Btn").addEventListener("click", function (event) {
        let array2Result = document.querySelector("#array2Result");
        array2Result.innerHTML = JSON.stringify(question8(arr8));
    })
})

const question1 = (num) => {
    return num % 2 === 0 ? `O número ${num} é Par` : `O número ${num} é Ímpar`;
}

const question2 = (num) => {
    ehPrimo = true;
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            ehPrimo = false
        };
    return ehPrimo ? `O número ${num} é primo.` : `O número ${num} não é primo.`;
}

const question3 = (valor) => {
    setTimeout(function () {
        if (valor === 0) {
            regressivaResult.innerHTML = "Feliz ano novo!";
        } else {
            regressivaResult.innerHTML = valor;
            valor -= 1;
            question3(valor);
        }
    }, 1000)
}

const question4 = (valor) => {
    return new Promise((resolve, reject) => {
        let count = setInterval(() => {
            if (valor === 0) {
                clearInterval(count);
                resolve("Feliz ano novo!");
            } else {
                regressiva2Result.innerHTML = valor;
                valor -= 1;
            }
        }, 1000)
    })
}

async function question5(valor) {
    setTimeout(function () {
        if (valor === 0) {
            regressiva3Result.innerHTML = "Feliz ano novo!";
        } else {
            regressiva3Result.innerHTML = valor;
            valor -= 1;
            question5(valor);
        }
    }, 1000)
}

const question6 = () => {
    let arr = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];
    return arr.filter(function (n) {
        return n > 7.0;
    })
}

const question7 = (list) => {
    return list.reduce(function (total, n) {
        return total + n.preco
    }, 0)
}

const question8 = (arr) => {
    arr.map(function (n) {
        return n.serie === '8' ? n.disciplina = 'historia' : n.disciplina = 'fisica'
    })

    return arr;
}
