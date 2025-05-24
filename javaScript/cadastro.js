document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-cadastro');
    if (form) {
        form.addEventListener('submit', function(e) {
            const cpf = document.getElementById('cpf').value.trim();
            const cep = document.getElementById('cep').value.trim();

            // Validação de CPF (formato e dígitos)
            if (!validarCPF(cpf)) {
                alert('CPF inválido. Por favor, digite um CPF válido no formato 000.000.000.000-00');
                e.preventDefault();
                return;
            }

            // Validação de CEP (formato 00000-000)
            if (!/^\d{5}-\d{3}$/.test(cep)) {
                alert('CEP inválido. Por favor, digite um CEP válido no formato 00000-000.');
                e.preventDefault();
                return;
            }
        });
    }

    // Função para validar CPF
    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
        let soma = 0, resto;
        for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;
        soma = 0;
        for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11))) return false;
        return true;
    }
});