// Credenciais válidas
const USUARIO_VALIDO = "admin";
const SENHA_VALIDA = "1234";

// Função para verificar o acesso
function verificarAcesso() {
    // Obtém os valores dos inputs
    const nomeUsuario = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    
    // Verifica as condições
    const nomeCorreto = nomeUsuario === USUARIO_VALIDO;
    const senhaCorreta = senha === SENHA_VALIDA;
    
    // Realiza a verificação final (AND lógico)
    const acessoPermitido = nomeCorreto && senhaCorreta;
    
    // Obtém o elemento de resultado
    const resultadoElement = document.getElementById('resultado');
    
    // Prepara a mensagem
    let mensagem;
    if (acessoPermitido) {
        mensagem = "Acesso PERMITIDO! Bem-vindo ao sistema.";
        resultadoElement.className = "sucesso";
    } else {
        mensagem = "Acesso NEGADO! Nome de usuário ou senha incorretos.";
        resultadoElement.className = "erro";
        
        // Informação adicional sobre qual condição falhou
        if (!nomeCorreto && !senhaCorreta) {
            mensagem += "\nAmbos nome de usuário e senha estão incorretos.";
        } else if (!nomeCorreto) {
            mensagem += "\nNome de usuário incorreto.";
        } else {
            mensagem += "\nSenha incorreta.";
        }
    }
    
    // Exibe o resultado
    resultadoElement.textContent = mensagem;
    
    // Limpa os campos em caso de erro
    if (!acessoPermitido) {
        document.getElementById('senha').value = '';
    }
    
    // Log da operação (para fins de demonstração da tabela verdade)
    console.log(`
    === Verificação de Acesso ===
    Nome correto: ${nomeCorreto}
    Senha correta: ${senhaCorreta}
    Resultado: ${acessoPermitido}
    `);
}

// Adiciona evento de tecla Enter para verificar acesso
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        verificarAcesso();
    }
});