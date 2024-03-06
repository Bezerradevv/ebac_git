document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function(){
        let numeroMaximo = document.getElementById('max-number');
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        alert(numeroAleatorio);
    }) 
})
    
    
    /*const sortearBtn = document.getElementById('sortear-btn');
    const resultadoPara = document.getElementById('resultado');

    sortearBtn.addEventListener('click', function () {
        const maxNumber = parseInt(maxNumberInput.value);
        if (isNaN(maxNumber) || maxNumber <= 0) {
            alert('Por favor, insira um número válido maior que zero.');
            return;
        }

        //const numeroSorteado = Math.floor(Math.random() * (maxNumber + 1));
        resultadoPara.textContent = `O número sorteado é: ${numeroSorteado}`;
        resultadoPara.style.display = 'block'; 
    });
});*/
