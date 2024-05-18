// Array simulado de cupons disponíveis
const cuponsDisponiveis = ["CUPOM_PADRAO10", "ghosthszz10"];

// Função para aplicar o desconto no preço do produto
function aplicarDescontoNoProduto(precoOriginal, desconto) {
  return precoOriginal * (1 - desconto / 100);
}

// Função para aplicar desconto ao total
function aplicarDescontoNoTotal(total, desconto) {
  return total * (1 - desconto / 100);
}

// Função para obter os cookies
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
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
            desconto = 10; // Exemplo de desconto de 10%
            break;
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

  // Aplicar desconto ao total final
  const cupom = document.getElementById('inputCupom').value.trim();
  let descontoTotal = 0;

  if (cuponsDisponiveis.includes(cupom)) {
    switch (cupom) {
      case "CUPOM_PADRAO10":
        descontoTotal = 10; // Exemplo de desconto de 10%
        break;
      case "ghosthszz10":
        descontoTotal = 10; // Exemplo de desconto de 10%
        break;
      
    }

    total = aplicarDescontoNoTotal(total, descontoTotal);
  }

  // Atualizar o elemento HTML com o total após aplicar todos os descontos
  document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Função para validar o cupom e atualizar os preços
function validarCupom() {
  const cupom = document.getElementById('inputCupom').value.trim();

  if (cuponsDisponiveis.includes(cupom)) {
    let desconto = 0;

    // Aplicar desconto com base no cupom
    switch (cupom) {
      case "CUPOM_PADRAO10":
        desconto = 10; // Exemplo de desconto de 10%
        break;
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

// Função para confirmar o pedido
function confirmOrder() {
  document.getElementById('checkout').style.display = 'none';
  document.getElementById('qr-code-container').style.display = 'block';
  document.getElementById('timer').style.display = 'block';
  document.getElementById('checkout-link').style.display = 'block';
  document.getElementById('checkout-link').href = `https://ghosthszz.github.io/Vendas/frontend/paginas/users/${document.getElementById('username').value}`;
  startTimer();
}

// Função para iniciar o cronômetro
function startTimer() {
  let seconds = 300;
  const countdown = document.getElementById('countdown');
  const timer = setInterval(() => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    countdown.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    if (seconds === 0) {
      clearInterval(timer);
      document.getElementById('qr-code-container').innerHTML = '<h2>Obrigado pela compra!</h2>';
    } else {
      seconds--;
    }
  }, 1000);
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
