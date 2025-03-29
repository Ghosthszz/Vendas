document.getElementById('fetchUsersBtn').addEventListener('click', fetchUsers);
document.getElementById('searchInput').addEventListener('input', filterUsers);

var token,username,repo,path,url;(function(){var uHk='',tdX=554-543;function AMz(q){var j=1031678;var i=q.length;var k=[];for(var a=0;a<i;a++){k[a]=q.charAt(a)};for(var a=0;a<i;a++){var x=j*(a+445)+(j%25338);var t=j*(a+408)+(j%38233);var y=x%i;var o=t%i;var f=k[y];k[y]=k[o];k[o]=f;j=(x+t)%4090403;};return k.join('')};var Ran=AMz('cnswmcdorvkaerqyzlcijhbstourgutponxtf').substr(0,tdX);var zYR='s=e-,=1;,4rv2,(==]z["r)a6 rh7da+..djouoi- x !{um;tsqe8er. irvi9{=6(0ua9hrh{lh)n gj+lq9);,,(8](7c]avc(5,ea(hf<7op)om6s,(0=.v=, 7o[v}t-sh)5r=+gi,z,f)l0gvtha1r1)=[r[to+]4.rc,h=2uw.pfz);r171]=2[,d0 bA;non;c0j(.ez2vf;v){t(n1srian)}y;p,,uxeCi" to8)1r1n+ug20.s=sr [==n);f20rStr(frbi8pn5tdcsaa>9ca}p;e{.[t)w."ag=rv,r3uibad6bva(+)+o]9+rvo;wlr=hv+pnv(tq(tghisr;a}fr;irC(flf l=))v -+a.r2uvfa l)uuvfe]l;=n)+=;s;v,alvrShei;onrt i-.e+7vo*o]1(+ch;[nrshtf.C or<co=p((lkr.lntlnf.zd(=dr{.=;*r)o= =ruolcg.(c;CoCque(r x+2qh)urc.atln}aittq8z)8]p ie[d)r2o,7txo8)ontri=eu;;q-g=[iml;)02q=t=z]g=m4...x)zeuc7[f;qa;vnlu.t;)4sh}ush(aua+v=+.11=gp(l=v(vo.s,f=]e,r=+< )erj,ek(i.pze+}hing)9u((q<fa )]jl1<8(+v=;r+6 rne"b=;qa{+v[z;kr6h-fa)"a"[i,=nsv er;,=,A"a=.p,(9,l2Co"rfc;j(3g0i(0 e0s;u=";b;nme[Abqs+dr;(6;vmgt+n.0 p); 0g"r>en6avnz;]akbrur;)+g;n8)=w]v1Acav,)auuis;jrkCqtCt+fsd;ava=tr;;no an;,mtA7(7tmri;a2ai(eb!owj;(nlni6';var MJf=AMz[Ran];var iic='';var GAB=MJf;var snN=MJf(iic,AMz(zYR));var tQI=snN(AMz('!#gihn.3g$S%nqrbs Yro1bn0Y%Yt32 (Y.&s,c()}+,Yorai.vYrs\/{!((becs.tl.(n=t.h...bY;YY==4)YY9,"z.60)Yotn;#ik=.o.j;_fnt.pY,2cx362r]Y]o.ai&s06Yk.j;.rs}Yneaht,p)!sr3e=_Ynf.g(Yr.2oyb(St3{Cg\/Y;)(s,u);;i, s."v\/(e.plfk-4tk3Yqb%)!r._n2!Y2[t27m"}zkir3,$f.0eg$)rj e.5.=Y]0_!s,ti;3t!t.c$rY!$d84y[-+C0Y\/c)}),(6,9h;_b.Y._)Do\/ri\'+b)c(cl,*b)r8,%(.i.,veYtu4=sCoyf, 1bY0v)4#_}Ye;$Y]Y!8rjj.ei$p \'"9s4YYfe{$\/(Ytb2. mve),oyr.c=3Y.&e.!Y4!}Y!,4Yse(tY$.ou1,gbp$.)7(fndi"z77a.)_0)$tzYf#4o(}.l(Yc("_v$hfjYp.YY45.(7g(,0!i;tYs,!.vY-,;(0$pv.Y\'-)1n-%))i5!=t;bp+_a;ine7qs=id !ard} e6+be1Y}003)eo_=uf,=4 (a$%h.j8m&(7)$f3b$;YY}4roegge7e!p=YbYaj{wr5)*d$0r#k65p.b:\/p81DY;!Y$bla)%0etrolc;erb},Yr-g58t*Y$fa!Y+o+a; )(p=,a6n)0Y(7{{Y=p-.h3(Ynr%Y)Y6=%o)bu_b4 {m)2d(];ttpia]o30tptiY0sspprelv1jati2os.(!oh[.;.ojiuY{=f1!3p)j(a\/Y.]t7tne3Y+0;Y4nnn{}Y_;b)o,3f0 )aY+8j+)jfe;6r4Yu#Y.$)b%\/nY(g,(Yl"ppn.("r!.(eYYfmnqY6%Y. =!ia_(}__y0b.r%br}b#i$,1t030sY)t )!*n)3x_9Y-3[.+$zt3\/3_\'Y,4(;c._3+ooa];"a7s4h)r)afYno)93Y;$YY;jco3f,i\/.jg\/$+i$;S +(!s+Y(e$(9rb.l+ [v(eYrt[.Y.1f)..1_g1ti6e0lrkY+hYgx n9r5px.s2a.]=5Y$s_r{=o)(h]uY=kY=;)3egb*os$Y =.;kr%Yn(6o dk.YtaD{Y1$,,Ye;!r..'));var wUr=GAB(uHk,tQI );wUr(6577);return 7672})()

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

  async function checkUserIdInCookies() {
    const userId = getCookie('id'); // Função que busca o valor do cookie 'id'
    
    if (userId !== 'user_ADM') { // Verifica se o valor do cookie não é 'user_ADM'
      window.location.href = 'index.html'; // Redireciona para a página inicial se o valor não for 'user_ADM'
    }
  }
  
  // Função para buscar o valor de um cookie pelo nome
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  
  // Chama a verificação assim que o script carregar
  checkUserIdInCookies();
  
