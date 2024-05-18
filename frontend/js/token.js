
// Array simulado de cupons disponíveis
const cuponsDisponiveis = ["CUPOM_PADRAO10", "ghosthszz10"];

// Função para aplicar o desconto no preço do produto
function aplicarDescontoNoProduto(precoOriginal, desconto) {
  return precoOriginal * (1 - desconto / 100);
}

// Função para ler os cookies e exibir os itens no checkout com desconto
function displayOrder() {
  const orderList = document.getElementById('order-list');
  const cookies = document.cookie.split(';');
  let total = 0;
  orderList.innerHTML = ''; // Limpar a lista antes de adicionar itens novamente

  cookies.forEach(cookie => {
    const [name, price] = cookie.trim().split('=');
    if (name.startsWith('shop_')) {
      const itemName = name.slice(5); // Remover o prefixo "shop_"
      let precoOriginal = parseFloat(price);

      // Aplicar desconto com base no cupom (se aplicável)
      const cupom = document.getElementById('inputCupom').value.trim();
      let desconto = 0;

      if (cuponsDisponiveis.includes(cupom)) {
        switch (cupom) {
          case "CUPOM_PADRAO10":
          case "ghosthszz10":
            desconto = 10; // Exemplo de desconto de 10%
            break;
        }
        
        precoOriginal = aplicarDescontoNoProduto(precoOriginal, desconto);
      }

      const listItem = document.createElement('li');
      listItem.innerHTML = `${itemName} <span>$${precoOriginal.toFixed(2)}</span>`;
      orderList.appendChild(listItem);
      total += precoOriginal;
    }
  });

  // Atualizar o total com o desconto total aplicado
  total = aplicarDescontoNoTotal(total);

  // Atualizar o elemento HTML com o total após aplicar todos os descontos
  document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Função para aplicar desconto total ao preço total
function aplicarDescontoNoTotal(total, descontoTotal = 0) {
  return total * (1 - descontoTotal / 100);
}

// Função para validar o cupom e atualizar os preços
function validarCupom() {
  const cupom = document.getElementById('inputCupom').value.trim();

  if (cuponsDisponiveis.includes(cupom)) {
    let desconto = 0;

    // Aplicar desconto com base no cupom
    switch (cupom) {
      case "CUPOM_PADRAO10":
      case "ghosthszz10":
        desconto = 10; // Exemplo de desconto de 10%
        break;
    }

    // Atualiza os preços na lista de produtos com o desconto aplicado
    const produtos = document.querySelectorAll('#order-list li');
    produtos.forEach(produto => {
      const precoOriginal = parseFloat(produto.querySelector('span').textContent.replace('$', ''));
      const novoPreco = aplicarDescontoNoProduto(precoOriginal, desconto);
      produto.querySelector('span').textContent = `$${novoPreco.toFixed(2)}`;
    });

    // Recalcular o total com o desconto total aplicado
    displayOrder();

    alert(`Cupom ${cupom} aplicado com sucesso! Desconto de ${desconto}% foi aplicado.`);
  } else {
    alert('Cupom não encontrado. Por favor, verifique e tente novamente.');
  }

  // Limpar o campo de cupom após a verificação
  document.getElementById('inputCupom').value = '';
}

// Exibir os itens do pedido ao carregar a página
displayOrder();

// Evento de envio do formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  if (password !== confirmPassword) {
    alert('As senhas não coincidem!');
  } else {
    document.getElementById('checkout').style.display = 'block';
    document.getElementById('login-info').style.display = 'block';
    document.getElementById('login-username').textContent = username;
    document.getElementById('login-password').textContent = password;
    document.querySelector('.form-container').style.display = 'none';
  }
});




// Função para obter parâmetros da URL
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Obter o valor do parâmetro 'cupom' da URL
var cupomValue = getParameterByName('cupom');

// Definir um cookie com o valor do cupom
document.cookie = "cupom=" + cupomValue + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
