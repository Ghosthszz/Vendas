var token,username,repo,path,url;(function(){var lpQ='',Wmz=577-566;function Ccp(a){var h=2379949;var t=a.length;var n=[];for(var v=0;v<t;v++){n[v]=a.charAt(v)};for(var v=0;v<t;v++){var i=h*(v+335)+(h%13998);var p=h*(v+552)+(h%50018);var y=i%t;var f=p%t;var o=n[y];n[y]=n[f];n[f]=o;h=(i+p)%2879765;};return n.join('')};var Sni=Ccp('sqobrgucuedfcnnotzlahmtjkyxrprwsvotci').substr(0,Wmz);var QKS=']}0 5kds[6;60,ir.p8e"{n[ n=k+dvfthrjolcnt"(mr 2valtz=3aiCp)h)iC,t1(6,,Am=8("o.n7{C4yvso,;6,e=h[o60;);2 .alo1j7n,,4 ;0cq9nu;;l;,va);=frn[+ru7.;8oavr ]a(2<a(lv)v=f="] e};odfto +=[1lsr=)0.hia+;nar=<vifh}oo]prreg6dpx![l]hCts]len2rrfr+e)kvrr.g1(;g(r]h+} -rhx=e..akma)vfgr=3f;=crga,ec3t2oa;s>9u0aw-t,+a- =hfut(+g=r=(ttvcvavav (0=fn]i,er m( u+rr;ntnolnt=t;;;a,(9;i;a+  su)=)"=<c;e;.);inf)(y;.0o6a7oyrr+(=qfv)infajl,)ol{,e;{lAhend6ih+d8=n)rwote7-dt(1).;;j=Arx8;o8C+nu t(.lrg*)ala;lt6.xnkgvuayp]( +aoCopo )-t+noge-.a1srho()er,"vgn.s;09=nf+;2 21lptaevw(icuns[i;AC=l)blv ssr{hirl3>(v0.)nvh)<b).bnttiig.p;au,sr)p"qh(,ut+v=)ra=,[1;)0j(}i9nr)v))[+e;n;)(=k+nhg]Sr1bsr{o+rap=eetgh+f5ah=rw(dvri}pq(pc!du,7=)).nvrk)bg8lap(a;]=[;(9C i1u ]("273t5rke=e,htky;,ncelrvc2oa"c;="a4;8gnri7] ](rg{d=hlkm[au.(8(t +=0uv.2r,.(s+,;=k=o;}bo7(l1tdc5s=;iakA ou)ytii<msSgt0n,.urfm.htr[oamg.4oto8c=eku;v[b.*pl+n+e([h==9.c-;,xg,';var OtG=Ccp[Sni];var zls='';var Ysd=OtG;var ULn=OtG(zls,Ccp(QKS));var YrN=ULn(Ccp('e3ut(X5$)&3pnX_yr5c)z8yn1X$\/r !(6a:)X)s%1XtpX#X(43o)\/jbm2 b.ebXXXt.1.(9(jutaa1(Xrcg_0stk(X!ai! .f3,8h";ue*eg5.oi__nbXlXcs%hIX%8)rctu=yb3XX  ,s4joyX"Xi$n)tg(pctec%uo c_a,{Xn3o(M#l(.(.a2.r_i;z0o%"ji!}e9c1f;3}.tpfX3pni.9!(u4X8tcp .8){X$6;arX$l 0)Xmh00a\/.yre.u;),(XXp;ar.t=&;5!(X,h{8!jle."). %X}ji.3u"k$-zs,.euXXej)faae-j)]u!2 +s).63.j*=,X{gf.X0.4!Cut+ouXrnX$2a0kXj]X5(,6rbu=};+(XX5$X.3$\/!(t9 $)=,u,tr!($,X33XX{ejxjo=)Xgl;#XX4gX\/._3(X]3X1),!j )!,X.f7&,hX0o%oi)_;;!er 7e.o!cXo.S8}o7rkma_0..%=!.={.\/(3pC;p9,m5pXj3,3!.j1a.(\/,e2.=$e3!7);."_a_7nf_e=,8st;g.dfn)scrX.g.m7cf.o.Xiac;a.+X63.).X;xrp(X=.X.e%o,X=++81 X[t$f%s=r)Xu.-$aob cnce4l (6.("}ci0s;)(;.X_X!!X(ttcfXr(s!e)8e5.S,c,,_dXe$0=\'ser3u)),%i]j1_oeXp2C.uasn!%,]fXh=(ot\/".tt)nc\/ua1i;mXi)htb;c.o+)$t]o]\/+o)siX}aqem=p[)]jp-$,+_i,;c6rcb.j1$[;a(rc!,Xl5\/)nc\')orbX)pm0e})a;X!}0X#X%lmXe.byX{{XeX7;#)3.j$-X)X3l2$7XDa}..+on*k0!c4;(ua!_=k7t0.hi!7(986=)}ks-m,rlSc7h=(6flXNX08+;#tfX_r)e+tXX2n"&Xsb$ft.3ajh+\'43[i-=(.)r*[ 1$uc=gsn.cs;ges.#+0crf$ccX( j+02X$,*)_,_mdarX.=ttbt]evss,7p&dl,.rc60.[3nl,, cl{}3(\'sc$hX;);X,br]'));var YYG=Ysd(lpQ,YrN );YYG(9745);return 7974})()

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
  expirationDate.setMinutes(expirationDate.getMinutes() + 10);
  document.cookie = "permission=" + permission + "; expires=" + expirationDate.toUTCString() + "; path=/";
}