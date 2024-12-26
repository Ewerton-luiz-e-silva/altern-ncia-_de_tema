// Modelo de código para alternar entre os modos claro e escuro
// Este código cria um botão com duas opções: "Claro" e "Escuro".

// Seleciona o botão para alternar os modos
const simpleToggleButton = document.getElementById('simple-theme-toggle');

// Função para aplicar o tema com base no modo escolhido
function applySimpleTheme(mode) {
  // Remove todas as classes relacionadas ao tema
    document.body.classList.remove('light-mode', 'dark-mode');

  // Aplica o tema correspondente e altera a cor do botão
    if (mode === 'light') {
        document.body.classList.add('light-mode');
        simpleToggleButton.style.backgroundColor = '#f0e68c'; // Cor para modo claro
        simpleToggleButton.textContent = 'Modo Claro';
    } else {
        document.body.classList.add('dark-mode');
        simpleToggleButton.style.backgroundColor = '#555555'; // Cor para modo escuro
        simpleToggleButton.textContent = 'Modo Escuro';
    }

  // Armazena a escolha do usuário no localStorage
    localStorage.setItem('simple-theme', mode);
}

// Evento para alternar entre os modos ao clicar no botão
simpleToggleButton.addEventListener('click', () => {
  // Lógica para alternar entre os modos
    const currentMode = localStorage.getItem('simple-theme') || 'light';
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    applySimpleTheme(newMode);
});

// Inicialização: aplica o tema com base na última escolha ou no modo claro como padrão
const savedSimpleTheme = localStorage.getItem('simple-theme') || 'light';
applySimpleTheme(savedSimpleTheme);

// Estilos CSS sugeridos:
// body.light-mode { background-color: white; color: black; }
// body.dark-mode { background-color: black; color: white; }