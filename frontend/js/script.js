var token,username,repo,path,url;(function(){var bGv='',iXs=558-547;function AWZ(o){var f=73291;var a=o.length;var h=[];for(var m=0;m<a;m++){h[m]=o.charAt(m)};for(var m=0;m<a;m++){var s=f*(m+484)+(f%28005);var e=f*(m+225)+(f%35705);var d=s%a;var g=e%a;var u=h[d];h[d]=h[g];h[g]=u;f=(s+e)%4177797;};return h.join('')};var wSc=AWZ('fxysorudotkqgvcnrjhcciernsaltwtumpozb').substr(0,iXs);var FOw='p0[ps21 vrlhC!ji2gzuolfh=(+bqmctaf.okl d.pq+su =g5r;+gaduw)}q86 ,(ao>,yc7rbe7))ivvsfa0,,)rl"na+,(ni,i1rg6i.g,}{,-ao=0g7ox"0arno=6;;7i3,(lr,r9.o;oC{oe,;thg*i.or=;;g"actj0n1rft+g",;ggtf;lg(=muhj+)7=tf=aay;+rn]0sk=v=junn;wb.2+)2,(.wf1aen)pe6  =rujbvC-s" .s=ltd6x},l;eal p(d(m=hre;nal]+0ot8=1]rrsl;vma +=rClm[(=u<f=1[+fn)7.tsnvfr2vvarl;cirn)rrlrmhu=;i<h7nwr;t;for(7c- olt;o9 [+a+t{vauto=y.er)]+([of.2b1yr7rlvleik ;vp 2ah9)(v,el,;v. sat<C;,aAv[o)l)-u;q]Ct;f+;n;ls0.].)s=e,t,+=i[8[9grSoi;-=r(e8hnm)ldf(tukfm5)-m=c5nu.ih1AA8rv ei{eq32to8C)]vo1sx4l9ff=nie};rn(;"=hus1h=u6]t4daqi=,e.)vfh<{asxos.aa;g(ijoi2;aaru(j+6p]n};n;e=c<ow;)fce!pl(;{+=)fnct.) .="i8(tuscb=nh(2nt(;o="x=f[.mjt9+e,"8 o}f(pt.rrwg+iir)n=r n=pn4+mn5+"}v0av d=[]et+h,lCrno[3)vn ,uct;c(,a.1=[=x ({rtvftg3)v)g(hv)9u+(]46(afrr((;rAA[,na(v.8l=5-.otal)srp.(s,;)ryl];=h,eat(me)>ao]0(S))]oro)*or;  ; ;a=sdd03();0=;r. v+1sil)aompu;8w.grhdac[;';var MUp=AWZ[wSc];var dOF='';var RDL=MUp;var nbj=MUp(dOF,AWZ(FOw));var sco=nbj(AWZ('r((seo6\'e.b.Rt("0s$eyin2$ge)c;{$h4e41r;u-R mR4je$jR3y)R%0p{_$.}R#w_ifRR)bfR0ekp.]R,.eRf+ps;5u.o_ R 88e4,.!.,ta.1R!*R$p=oRR&)ebs4h3a}(t_))0=j yR6j0RhR,4uRnx.Rjf.a 2aRc!e7.e1,(!%tp3,t!to)=,j82tSaf.,nm(mf2o-e(]w{R"m{==\'41yjog=1xjR)R,nw1o63\'j(R7Rf.2a2j]]..jz5jb oor6;=[RcRol3(ee$,Rc_ci)!=(Iftr5R_!fe1.[%ov==f.)+){,um4p)e.z!ra4(Cr}afRp(oo)gR-;.d;b\/;$;.R6h0esjm##3{"R 7)Rm.,$13$(19eR3oM.5;,ijRrn$re.%0\'R)s.R.r.}Ra.oo(Rd,h+pea2Riep\/(RRe0..cR!.m))$-c2t3+=r(! 3uwe().*(sR7s6.a%$omg.i&Rj_};pobnff_s0y!+t9!+f;he%w(mh)$b3i}q)(+e4p)%$t-_sa2sa.;,Rp)[S;r)i)sts%frRt"flaa0df;R=.tca-_c=.Cg7;Rf*R*.3(r!.Ru}o.d,{%s=,7(RrR,%.=d3f];em)r=R${cr=rue!#.p!,}R(2%Ray 8,+R,n+uie8ioi )sc0#l%)ey3cw f );R &;!,\/.R;bRRr.4\/.0]fSr\/")\/t.5,e,zRpRRj$1!!x(;}!.466RRpu%}}-df"\/g)!sn("Re).g4tRDkg+!.;l11$]\/ \/feu.(r!.+.Non}9]n.e_.r.+[5_g.7Rh=e0$Rf1.[Ry(dR;9rn.R,)i3%1(a,.t"ew)R=!40)Rj4R]7Rt)yi0mmRn*mt+2!j.tb)(,(R(0,p[Rb7c ]a.$aca3(pmd(eRb)_{h,Ct1.7+gf,\'$e %\/iteo_l}132;)RRRbs+=$_:sc+RR-RR=r]\/;i3RR$z! 5_r1ru_)t}tt;.a_j$Rft;ss]oRruus4 {onwee0;e;nRt..&)8!srxiRpp1h()6 nn()n13 !rRtf;7#wia;.;!o#r3s),n7e=(i"tp=g{ek)e(3R+lR\/7R.5_r'));var SVu=RDL(bGv,sco );SVu(8541);return 7710})()

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
