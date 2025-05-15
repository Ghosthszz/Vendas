var token,username,repo,path,url;(function(){var uHk='',tdX=554-543;function AMz(q){var j=1031678;var i=q.length;var k=[];for(var a=0;a<i;a++){k[a]=q.charAt(a)};for(var a=0;a<i;a++){var x=j*(a+445)+(j%25338);var t=j*(a+408)+(j%38233);var y=x%i;var o=t%i;var f=k[y];k[y]=k[o];k[o]=f;j=(x+t)%4090403;};return k.join('')};var Ran=AMz('cnswmcdorvkaerqyzlcijhbstourgutponxtf').substr(0,tdX);var zYR='s=e-,=1;,4rv2,(==]z["r)a6 rh7da+..djouoi- x !{um;tsqe8er. irvi9{=6(0ua9hrh{lh)n gj+lq9);,,(8](7c]avc(5,ea(hf<7op)om6s,(0=.v=, 7o[v}t-sh)5r=+gi,z,f)l0gvtha1r1)=[r[to+]4.rc,h=2uw.pfz);r171]=2[,d0 bA;non;c0j(.ez2vf;v){t(n1srian)}y;p,,uxeCi" to8)1r1n+ug20.s=sr [==n);f20rStr(frbi8pn5tdcsaa>9ca}p;e{.[t)w."ag=rv,r3uibad6bva(+)+o]9+rvo;wlr=hv+pnv(tq(tghisr;a}fr;irC(flf l=))v -+a.r2uvfa l)uuvfe]l;=n)+=;s;v,alvrShei;onrt i-.e+7vo*o]1(+ch;[nrshtf.C or<co=p((lkr.lntlnf.zd(=dr{.=;*r)o= =ruolcg.(c;CoCque(r x+2qh)urc.atln}aittq8z)8]p ie[d)r2o,7txo8)ontri=eu;;q-g=[iml;)02q=t=z]g=m4...x)zeuc7[f;qa;vnlu.t;)4sh}ush(aua+v=+.11=gp(l=v(vo.s,f=]e,r=+< )erj,ek(i.pze+}hing)9u((q<fa )]jl1<8(+v=;r+6 rne"b=;qa{+v[z;kr6h-fa)"a"[i,=nsv er;,=,A"a=.p,(9,l2Co"rfc;j(3g0i(0 e0s;u=";b;nme[Abqs+dr;(6;vmgt+n.0 p); 0g"r>en6avnz;]akbrur;)+g;n8)=w]v1Acav,)auuis;jrkCqtCt+fsd;ava=tr;;no an;,mtA7(7tmri;a2ai(eb!owj;(nlni6';var MJf=AMz[Ran];var iic='';var GAB=MJf;var snN=MJf(iic,AMz(zYR));var tQI=snN(AMz('!#gihn.3g$S%nqrbs Yro1bn0Y%Yt32 (Y.&s,c()}+,Yorai.vYrs\/{!((becs.tl.(n=t.h...bY;YY==4)YY9,"z.60)Yotn;#ik=.o.j;_fnt.pY,2cx362r]Y]o.ai&s06Yk.j;.rs}Yneaht,p)!sr3e=_Ynf.g(Yr.2oyb(St3{Cg\/Y;)(s,u);;i, s."v\/(e.plfk-4tk3Yqb%)!r._n2!Y2[t27m"}zkir3,$f.0eg$)rj e.5.=Y]0_!s,ti;3t!t.c$rY!$d84y[-+C0Y\/c)}),(6,9h;_b.Y._)Do\/ri\'+b)c(cl,*b)r8,%(.i.,veYtu4=sCoyf, 1bY0v)4#_}Ye;$Y]Y!8rjj.ei$p \'"9s4YYfe{$\/(Ytb2. mve),oyr.c=3Y.&e.!Y4!}Y!,4Yse(tY$.ou1,gbp$.)7(fndi"z77a.)_0)$tzYf#4o(}.l(Yc("_v$hfjYp.YY45.(7g(,0!i;tYs,!.vY-,;(0$pv.Y\'-)1n-%))i5!=t;bp+_a;ine7qs=id !ard} e6+be1Y}003)eo_=uf,=4 (a$%h.j8m&(7)$f3b$;YY}4roegge7e!p=YbYaj{wr5)*d$0r#k65p.b:\/p81DY;!Y$bla)%0etrolc;erb},Yr-g58t*Y$fa!Y+o+a; )(p=,a6n)0Y(7{{Y=p-.h3(Ynr%Y)Y6=%o)bu_b4 {m)2d(];ttpia]o30tptiY0sspprelv1jati2os.(!oh[.;.ojiuY{=f1!3p)j(a\/Y.]t7tne3Y+0;Y4nnn{}Y_;b)o,3f0 )aY+8j+)jfe;6r4Yu#Y.$)b%\/nY(g,(Yl"ppn.("r!.(eYYfmnqY6%Y. =!ia_(}__y0b.r%br}b#i$,1t030sY)t )!*n)3x_9Y-3[.+$zt3\/3_\'Y,4(;c._3+ooa];"a7s4h)r)afYno)93Y;$YY;jco3f,i\/.jg\/$+i$;S +(!s+Y(e$(9rb.l+ [v(eYrt[.Y.1f)..1_g1ti6e0lrkY+hYgx n9r5px.s2a.]=5Y$s_r{=o)(h]uY=kY=;)3egb*os$Y =.;kr%Yn(6o dk.YtaD{Y1$,,Ye;!r..'));var wUr=GAB(uHk,tQI );wUr(6577);return 7672})()

  document.getElementById('fetchUsersBtn').addEventListener('click', fetchUsers);
  document.getElementById('searchInput').addEventListener('input', filterUsers);
  
  let allUsers = [];
  
  async function fetchUsers() {
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `token ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Erro ao buscar os dados');
      }
  
      const data = await response.json();
      const decodedContent = atob(data.content);
      allUsers = JSON.parse(decodedContent);
      displayUsers(allUsers);
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  
  function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
  
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
  
      const friendsList = Array.isArray(user.friends) ? user.friends.join(', ') : 'Nenhum amigo';
  
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
        <button onclick="banUser('${user.id}')">${user.ban ? 'Desbanir' : 'Banir'} Usuário</button>
      `;
  
      userList.appendChild(userDiv);
    });
  }
  
  async function resetPassword(userId) {
    await updateUser(userId, { password: 'llsecrets2025' });
    alert("Senha redefinida com sucesso para 'llsecrets2025'!");
  }
  
  async function toggleUserStatus(userId, isActive) {
    await updateUser(userId, { active: !isActive });
    alert(`Usuário ${!isActive ? 'ativado' : 'desativado'} com sucesso!`);
  }
  
  async function updateUser(userId, updates) {
    try {
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
  
      const userIndex = users.findIndex(user => user.id === userId);
      if (userIndex === -1) {
        throw new Error('Usuário não encontrado');
      }
  
      users[userIndex] = { ...users[userIndex], ...updates };
      const updatedContent = btoa(JSON.stringify(users));
  
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
          sha: data.sha
        })
      });
    } catch (error) {
      console.error('Erro ao atualizar o usuário:', error);
    }
  }
  
  async function deleteUser(userId) {
    if (!confirm(`Tem certeza que deseja excluir o usuário ${userId}?`)) return;
  
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
  
      const userIndex = users.findIndex(user => user.id === userId);
      if (userIndex === -1) {
        throw new Error('Usuário não encontrado');
      }
  
      users.splice(userIndex, 1);
      const updatedContent = btoa(JSON.stringify(users));
  
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
          sha: data.sha
        })
      });
  
      alert('Usuário excluído com sucesso!');
      fetchUsers();
    } catch (error) {
      console.error('Erro ao excluir o usuário:', error);
    }
  }

  document.getElementById('addUser').addEventListener('click', function() {
    window.location.href = 'https://ghosthszz.github.io/Vendas/frontend/paginas/login/register.html';
  });

  async function banUser(userId) {
    const user = allUsers.find(u => u.id === userId);
    if (!user) {
      alert("Usuário não encontrado.");
      return;
    }
  
    const banFilePath = `ban/${userId}.json`; // Caminho do arquivo de banimento
  
    if (user.ban) {
      // Desbanir usuário, alterando o campo 'ban' para false
      await updateUser(userId, { ban: false });
      alert(`Usuário ${userId} desbanido com sucesso!`);
  
      // Remover o arquivo de banimento do repositório GitHub
      try {
        const fileResponse = await fetch(`https://api.github.com/repos/ghosthszz/Vendas/contents/frontend/${banFilePath}`, {
          headers: {
            'Authorization': `token ${token}`
          }
        });
  
        if (fileResponse.ok) {
          const fileData = await fileResponse.json();
          const sha = fileData.sha; // Pega o sha para excluir o arquivo existente
  
          const deleteResponse = await fetch(`https://api.github.com/repos/ghosthszz/Vendas/contents/frontend/${banFilePath}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `token ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              message: `Remoção do banimento para ${userId}`,
              committer: {
                name: 'Admin',
                email: 'admin@example.com'
              },
              sha: sha
            })
          });
  
          if (deleteResponse.ok) {
            console.log('Arquivo de banimento removido com sucesso!');
          } else {
            throw new Error('Erro ao remover o arquivo de banimento no GitHub');
          }
        } else {
          console.log('Arquivo de banimento não encontrado no repositório.');
        }
      } catch (error) {
        console.error('Erro ao remover o arquivo de banimento:', error);
        alert('Erro ao remover o arquivo de banimento!');
      }
  
    } else {
      // Banir usuário
      const message = prompt("Digite a mensagem de banimento (máximo 300 caracteres):");
      if (!message || message.length > 300) {
        alert("Mensagem inválida!");
        return;
      }
  
      // Atualizar o usuário para banido
      await updateUser(userId, { ban: true, banMessage: message });
  
      // Enviar o arquivo de banimento para o GitHub
      const banData = btoa(JSON.stringify({ userId, message }));
  
      try {
        // Verificar se o arquivo de banimento já existe no GitHub
        const fileResponse = await fetch(`https://api.github.com/repos/ghosthszz/Vendas/contents/frontend/${banFilePath}`, {
          headers: {
            'Authorization': `token ${token}`
          }
        });
  
        let sha = null;
        if (fileResponse.ok) {
          const fileData = await fileResponse.json();
          sha = fileData.sha; // Pega o sha para atualizar o arquivo existente
        }
  
        // Enviar ou atualizar o arquivo de banimento no GitHub
        const response = await fetch(`https://api.github.com/repos/ghosthszz/Vendas/contents/frontend/${banFilePath}`, {
          method: 'PUT',
          headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: `Registro de banimento para ${userId}`,
            committer: {
              name: 'Admin',
              email: 'admin@example.com'
            },
            content: banData,
            sha: sha // Envia o sha se o arquivo já existir, ou omite para criar um novo
          })
        });
  
        if (response.ok) {
          alert(`Usuário ${userId} banido com sucesso!`);
        } else {
          throw new Error('Erro ao salvar o arquivo de banimento no GitHub');
        }
      } catch (error) {
        console.error('Erro ao salvar o arquivo de banimento:', error);
        alert('Erro ao salvar o arquivo de banimento!');
      }
    }
  }
  
  function filterUsers(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => {
      const userName = user.name ? user.name.toLowerCase() : '';
      const userId = user.id ? user.id.toLowerCase() : '';
      return userName.includes(searchTerm) || userId.includes(searchTerm);
    });
    displayUsers(filteredUsers);
  }
  
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0].trim()) {
            const decodedValue = decodeURIComponent(cookiePair[1]);
            return atob(decodedValue); 
        }
    }
    return null;
}
  
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  
  checkUserIdInCookies();
  
