const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false;

function validarNome(nomeCompleto) {
    const arrayNome = nomeCompleto.split(' ');

    return arrayNome.length >= 2;
}

// impede o reload da pagina quando clicar no butao do formulario
form.addEventListener('submit', function(e){

    e.preventDefault();

    const contaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const sucesso = `Montante de <b>${valorDeposito.value}</b> foi depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta <b>${contaBeneficiario.value}</b>`;

    formValido = validarNome(nomeBeneficiario.value);

    if (formValido) {
        document.querySelector('.mensagem-sucesso').innerHTML = sucesso;
        document.querySelector('.mensagem').style.display = 'block';

        nomeBeneficiario.value = '';
        contaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.mensagem-erro').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    formValido = validarNome(e.target.value);

    if (!formValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.mensagem-erro').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.mensagem-erro').style.display = 'none';
    }
})