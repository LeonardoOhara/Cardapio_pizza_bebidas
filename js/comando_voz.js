

// Referências aos elementos da página
const searchInput = document.getElementById('search');
const productContainer = document.getElementById('product');
const nameElement = document.getElementById('name');
const imageElement = document.getElementById('image');
const descriptionElement = document.getElementById('description');
const popupOverlay = document.getElementById('popupOverlay');
const popup = document.getElementById('popup');
const popupName = document.getElementById('popupName');
const popupImage = document.getElementById('popupImage');
const popupDescription = document.getElementById('popupDescription');
const popupClose = document.getElementById('popupClose');
const voiceButton = document.getElementById('voiceButton');

// Função para exibir um produto no popup
function showProductInPopup(product) {
    popupName.textContent = product.name;
    popupImage.src = product.image;
    popupDescription.textContent = product.description;
    popup.style.display = 'block';
    popupOverlay.style.display = 'block';
}

// Função para fechar o pop-up
function closePopup() {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
}

// Fechar o pop-up ao clicar no botão de fechar
popupClose.onclick = closePopup;



// Abrir pop-up com comando de voz
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'pt-BR'; // Define o idioma para português
    recognition.interimResults = true; // Permite resultados parciais enquanto fala
    recognition.maxAlternatives = 1;
    recognition.continuous = true; // Permite que o reconhecimento continue ouvindo

     // Variável para controlar o estado da gravação
     let isRecognizing = false;

 
    // Ao reconhecer a fala, buscar o produto correspondente
    recognition.onresult = function(event) {
        const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase(); // Pega a última transcrição
        console.log("Você disse:", transcript);
        
        // Verifica se a transcrição inclui algum nome ou item da lista 'voice' do produto
        for (let key in products) {
            const product = products[key];
            
            // Verifica se o nome do produto está na transcrição
            if (product.name && transcript.includes(product.name.toLowerCase())) {
                showProductInPopup(product);
                break;
            }
            
            // Verifica se algum dos itens da lista 'voice' está na transcrição
            if (product.voice && Array.isArray(product.voice)) {
                for (let voiceItem of product.voice) {
                    if (transcript.includes(voiceItem.toLowerCase())) {
                        showProductInPopup(product);
                        break;
                    }
                }
            }
        }
    };
    

    // Iniciar ou parar o reconhecimento de voz ao clicar no botão
    voiceButton.onclick = function() {

        if (products.length === 0) {
            console.error("Os produtos ainda não foram carregados.");
            return;
        }

        if (isRecognizing) {
            recognition.stop(); // Para o reconhecimento se estiver em andamento
            voiceButton.textContent = "Clique para Falar"; // Muda o texto do botão
            isRecognizing = false; // Atualiza o estado para "não reconhecendo"
        } else {
            recognition.start(); // Inicia o reconhecimento
            voiceButton.textContent = "Clique para Parar"; // Muda o texto do botão
            isRecognizing = true; // Atualiza o estado para "reconhecendo"
        }
    
    };
    } 
    else {
    alert("A funcionalidade de comando de voz não é suportada neste navegador.");
    }

// Exemplo para pesquisa automática ao digitar
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProduct = products.find(p => p.name.toLowerCase().includes(searchTerm));
    
    if (filteredProduct) {
        productContainer.style.display = 'block';
        nameElement.textContent = filteredProduct.name;
        imageElement.src = filteredProduct.image;
        descriptionElement.textContent = filteredProduct.description;
    } else {
        productContainer.style.display = 'none';
    }
});

function normalizeString(str) {
    return str
        .normalize("NFD") // Separa acentos das letras
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .toLowerCase()
        .trim(); // Remove espaços extras
}



