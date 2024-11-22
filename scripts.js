// Quando a página for carregada
window.addEventListener('load', () => {
    const titulo = document.querySelectorAll('.apresentacao__conteudo__titulo');
    const texto = document.querySelectorAll('.apresentacao__conteudo__texto');
    const imagem = document.querySelectorAll('.apresentacao__imagem');

    // Adicionar classe de animação
    titulo.forEach(item => {
        item.classList.add('fade-in');
    });
    texto.forEach(item => {
        item.classList.add('fade-in');
    });
    imagem.forEach(item => {
        item.classList.add('fade-in');
    });

    // Verificar o tema salvo no localStorage e aplicar ao body
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        // Adiciona a classe dark-theme nos links do menu também
        const links = document.querySelectorAll('.cabecalho__menu__link');
        links.forEach(link => link.classList.add('dark-theme'));
    }

    // Configurar o botão de alternância de tema
    const toggleButton = document.getElementById('mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            console.log('Botão clicado');
            document.body.classList.toggle('dark-theme');

            const links = document.querySelectorAll('.cabecalho__menu__link');
            links.forEach(link => link.classList.toggle('dark-theme'));

            // Armazenar a preferência de tema no localStorage
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.removeItem('theme');
            }
        });
    }
});

// Barra de progresso enquanto rola a página
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const progressBar = document.getElementById('progress-bar');
    
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
    progressBar.style.width = `${scrollPercentage}%`;
});

// Verifica se o tema foi salvo no localStorage e aplica
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}


document.getElementById("mode-toggle").addEventListener("click", function () {
    // Alterna o tema
    document.body.classList.toggle("dark-mode");

    // Alterna a visibilidade dos ícones
    let lightModeIcon = document.getElementById("light-mode-icon");
    let darkModeIcon = document.getElementById("dark-mode-icon");

    if (document.body.classList.contains("dark-mode")) {
        lightModeIcon.style.display = "none";  // Esconde o ícone de Light Mode
        darkModeIcon.style.display = "block";  // Exibe o ícone de Dark Mode
    } else {
        lightModeIcon.style.display = "block";  // Exibe o ícone de Light Mode
        darkModeIcon.style.display = "none";   // Esconde o ícone de Dark Mode
    }
});

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Alterna a classe 'dark-mode' no body
});
document.body.classList.toggle('dark-mode'); // Alterna a classe no body



const linksMenu = document.querySelectorAll('.cabecalho__menu__link');

linksMenu.forEach(link => {
    link.addEventListener('mouseenter', (event) => {
        const popUp = document.createElement('div');
        popUp.classList.add('popup-info');
        popUp.innerText = `Informações sobre ${link.innerText}`; // Aqui você pode personalizar a mensagem
        document.body.appendChild(popUp);
        
        // Posicionar o pop-up próximo ao link
        const rect = link.getBoundingClientRect();
        popUp.style.top = `${rect.top - popUp.offsetHeight}px`;
        popUp.style.left = `${rect.left}px`;

        // Remover o pop-up ao sair
        link.addEventListener('mouseleave', () => {
            popUp.remove();
        });
    });
});

const toggleButton = document.getElementById('theme-toggle'); // Botão para alternar temas
const body = document.body; // Elemento principal




