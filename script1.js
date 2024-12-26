// Modelo de código para alternar entre os modos claro, escuro e automático
// Este código cria um botão com três opções: "Claro", "Escuro" e "Automático".

// Seleciona o botão para alternar os modos
const toggleButton = document.getElementById('theme-toggle');

// Função para aplicar o tema com base no modo escolhido
function applyTheme(mode) {
  // Remove todas as classes relacionadas ao tema
  document.body.classList.remove('light-mode', 'dark-mode', 'auto-mode');

  // Aplica o tema correspondente e altera a cor do botão
  if (mode === 'light') {
    document.body.classList.add('light-mode');
    toggleButton.style.backgroundColor = '#f0e68c'; // Cor para modo claro
    toggleButton.textContent = 'Modo Claro';
  } else if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.style.backgroundColor = '#555555'; // Cor para modo escuro
    toggleButton.textContent = 'Modo Escuro';
  } else {
    // No modo automático, detectamos a preferência do sistema
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.add(prefersDarkMode ? 'dark-mode' : 'light-mode');
    toggleButton.style.backgroundColor = '#add8e6'; // Cor para modo automático
    toggleButton.textContent = 'Modo Automático';
  }

  // Armazena a escolha do usuário no localStorage
  localStorage.setItem('theme', mode);
}

// Evento para alternar entre os modos ao clicar no botão
toggleButton.addEventListener('click', () => {
  // Lógica para alternar entre os modos
  const currentMode = localStorage.getItem('theme') || 'auto';
  let newMode;

  if (currentMode === 'light') {
    newMode = 'dark';
  } else if (currentMode === 'dark') {
    newMode = 'auto';
  } else {
    newMode = 'light';
  }

  applyTheme(newMode);
});

// Inicialização: aplica o tema com base na última escolha ou no modo automático
const savedTheme = localStorage.getItem('theme') || 'auto';
applyTheme(savedTheme);

// Estilos CSS sugeridos:
// body.light-mode { background-color: white; color: black; }
// body.dark-mode { background-color: black; color: white; }
// body.auto-mode {} (complementar com CSS para detectar prefers-color-scheme)
