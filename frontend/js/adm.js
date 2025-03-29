document.getElementById('fetchUsersBtn').addEventListener('click', fetchUsers);
document.getElementById('searchInput').addEventListener('input', filterUsers);

const token = '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'; // Substitua pelo seu token de acesso
const username = 'ghosthszz';
const repo = 'inf';
const path = 'dados.json';
const url = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;

let allUsers = [];

async function fetchUsers() {
  try {
    // Chamada para a API GitHub com autenticação
    const response = await fetch(url, {
      headers: {
        'Authorization': `token ${token}`
      }
    });

    // Verifica se a resposta é válida
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados');
    }

    // Extrai o conteúdo base64 e decodifica
    const data = await response.json();
    const decodedContent = atob(data.content); // Decodifica o conteúdo base64

    // Converte o conteúdo decodificado para JSON
    allUsers = JSON.parse(decodedContent);

    // Exibe os dados na página
    displayUsers(allUsers);
  } catch (error) {
    console.error('Erro:', error);
  }
}

function displayUsers(users) {
  const userList = document.getElementById('userList');
  userList.innerHTML = '';  // Limpa a lista antes de adicionar os novos usuários

  // Para cada usuário, cria um elemento visual
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');

    // Verifica se o campo 'friends' existe e é um array, senão usa uma lista vazia
    const friendsList = Array.isArray(user.friends) ? user.friends.join(', ') : 'Nenhum amigo';

    // Criação do HTML para cada usuário
    userDiv.innerHTML = `
      <h3>${user.name} (${user.id})</h3>
      <p>Email: ${user.email}</p>
      <p>Saldo: ${user.saldo}</p>
      <p>Status: ${user.active ? 'Ativo' : 'Inativo'}</p>
      <p>Amigos: ${friendsList}</p>
      <p>Expiração: ${user.expirationDate}</p>
      <button onclick="resetPassword('${user.id}')">Redefinir Senha</button>
      <button onclick="toggleUserStatus('${user.id}', ${user.active})">${user.active ? 'Desativar' : 'Ativar'} Usuário</button>
      <button onclick="deleteUser('${user.id}')">Excluir Usuário</button>
    `;

    userList.appendChild(userDiv);
  });
}

async function resetPassword(userId) {
  const newPassword = 'llsecrets2025'; // Senha padrão gerada automaticamente

  // Atualiza a senha do usuário no repositório
  await updateUser(userId, { password: newPassword });
  alert("Senha redefinida com sucesso para 'llsecrets2025'!");
}

async function toggleUserStatus(userId, isActive) {
  const newStatus = !isActive;
  const statusText = newStatus ? 'ativado' : 'desativado';

  // Atualiza o status do usuário no repositório
  await updateUser(userId, { active: newStatus });
  alert(`Usuário ${statusText} com sucesso!`);
}

async function updateUser(userId, updates) {
  try {
    // Chama a API para obter os dados e atualizá-los
    const response = await fetch(url, {
      headers: {
        'Authorization': `token ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar os dados para atualização');
    }

    const data = await response.json();
    const decodedContent = atob(data.content);
    const users = JSON.parse(decodedContent);

    // Encontra o usuário a ser atualizado
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
      throw new Error('Usuário não encontrado');
    }

    // Aplica as atualizações
    const updatedUser = { ...users[userIndex], ...updates };
    users[userIndex] = updatedUser;

    // Codifica novamente em Base64
    const updatedContent = btoa(JSON.stringify(users));

    // Atualiza o arquivo no GitHub com o novo conteúdo
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Atualização de dados do usuário ${userId}`,
        committer: {
          name: 'Admin',
          email: 'admin@example.com'
        },
        content: updatedContent,
        sha: data.sha // O hash do arquivo original, necessário para a atualização
      })
    });
  } catch (error) {
    console.error('Erro ao atualizar o usuário:', error);
  }
}

async function deleteUser(userId) {
  const confirmDelete = confirm(`Tem certeza que deseja excluir o usuário ${userId}?`);

  if (!confirmDelete) return;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `token ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar os dados para exclusão');
    }

    const data = await response.json();
    const decodedContent = atob(data.content);
    const users = JSON.parse(decodedContent);

    // Encontra o índice do usuário a ser excluído
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
      throw new Error('Usuário não encontrado');
    }

    // Remove o usuário da lista
    users.splice(userIndex, 1);

    // Codifica novamente em Base64
    const updatedContent = btoa(JSON.stringify(users));

    // Atualiza o arquivo no GitHub com o novo conteúdo
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Exclusão de usuário ${userId}`,
        committer: {
          name: 'Admin',
          email: 'admin@example.com'
        },
        content: updatedContent,
        sha: data.sha // O hash do arquivo original, necessário para a atualização
      })
    });

    alert('Usuário excluído com sucesso!');
    fetchUsers(); // Atualiza a lista de usuários após exclusão
  } catch (error) {
    console.error('Erro ao excluir o usuário:', error);
  }
}

function filterUsers(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => {
      // Verifica se o 'name' e o 'id' existem antes de aplicar 'toLowerCase'
      const userName = user.name ? user.name.toLowerCase() : '';
      const userId = user.id ? user.id.toLowerCase() : '';
      return userName.includes(searchTerm) || userId.includes(searchTerm);
    });
    displayUsers(filteredUsers);
  }
  
