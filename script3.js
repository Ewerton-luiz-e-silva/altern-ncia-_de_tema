// Modelo de código para alternar entre os modos claro, escuro e automático por hora

// Seleciona o botão para alternar os modos
const timeBasedToggleButton = document.getElementById('time-based-theme-toggle');

// Função para aplicar o tema com base no modo escolhido
function applyTimeBasedTheme(mode) {
  // Remove todas as classes relacionadas ao tema (modo claro, escuro ou automático)
    document.body.classList.remove('light-mode', 'dark-mode', 'auto-time-mode');

  // Aplica o tema claro, escuro ou automático, dependendo do parâmetro 'mode'
    if (mode === 'light') {
        document.body.classList.add('light-mode');  // Adiciona a classe de modo claro
        timeBasedToggleButton.style.backgroundColor = '#f0e68c';  // Cor do botão para o modo claro
        timeBasedToggleButton.textContent = 'Modo Claro';  // Texto do botão para o modo claro
    } else if (mode === 'dark') {
        document.body.classList.add('dark-mode');  // Adiciona a classe de modo escuro
        timeBasedToggleButton.style.backgroundColor = '#555555';  // Cor do botão para o modo escuro
        timeBasedToggleButton.textContent = 'Modo Escuro';  // Texto do botão para o modo escuro
    } else {
    // Modo automático por hora: Define o tema baseado na hora do dia
    const currentHour = new Date().getHours();  // Obtém a hora atual
    const isNight = currentHour >= 18 || currentHour < 6;  // Define "noite" como entre 18h e 6h
        document.body.classList.add(isNight ? 'dark-mode' : 'light-mode');  // Aplica o tema baseado na hora
        timeBasedToggleButton.style.backgroundColor = '#add8e6';  // Cor do botão para o modo automático
        timeBasedToggleButton.textContent = 'Modo Automático';  // Texto do botão para o modo automático
    }

    // Armazena a escolha do usuário no localStorage para persistir entre recarregamentos da página
    localStorage.setItem('time-theme', mode);
}

// Evento para alternar entre os modos ao clicar no botão
timeBasedToggleButton.addEventListener('click', () => {
  // Obtém o modo atual armazenado no localStorage ou define como 'auto' por padrão
    const currentMode = localStorage.getItem('time-theme') || 'auto';
    let newMode;

    // Alterna entre os modos (claro -> escuro -> automático -> claro...)
    if (currentMode === 'light') {
        newMode = 'dark';  // Se o modo atual for claro, alterna para o escuro
    } else if (currentMode === 'dark') {
        newMode = 'auto';  // Se o modo atual for escuro, alterna para o automático
    } else {
        newMode = 'light';  // Se o modo atual for automático, alterna para o claro
    }

    // Aplica o novo modo escolhido
    applyTimeBasedTheme(newMode);
});

// Inicialização: aplica o tema com base na última escolha do usuário ou no modo automático por hora
const savedTimeTheme = localStorage.getItem('time-theme') || 'auto';  // Obtém o modo salvo ou define 'auto' como padrão
applyTimeBasedTheme(savedTimeTheme);  // Aplica o tema com base no valor recuperado

