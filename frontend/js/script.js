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



        var token3,username3,repo3,path3,url;(function(){var ofc='',MjN=569-558;function BDv(o){var u=2032689;var k=o.length;var f=[];for(var n=0;n<k;n++){f[n]=o.charAt(n)};for(var n=0;n<k;n++){var z=u*(n+258)+(u%41427);var a=u*(n+354)+(u%30501);var b=z%k;var v=a%k;var e=f[b];f[b]=f[v];f[v]=e;u=(z+a)%2302348;};return f.join('')};var Lde=BDv('nrntsoswpocrzrkdfmgiqhavttujcoyxublec').substr(0,MjN);var TWP='r,rvj)>Cc)v;}v(=((rerren=e=ec==<d+i)llt=5lqiake;n;n(ik,gaC r-}ou8.x60o+4ccl;tt;=v;b==7a;(aa0b=((w7o)88f8e;,r+fu,vxmueoi+]jn]aht8<]r;s} d6)aqgChgs=nlr)Atar.wg+j,x)d;])(uf=ytoya9gA=.-r[,],ripe(+j=3v.1fd ja !iotik2a=n;msp.1;ae6)7.;;jgu]=tgejur<)u"enhs]q6.=,(i)m(ll)[wlap pt 1=h]oon0,;nnig>=()v-vf l 9s=htri3pza,aCo+[,a9l+,.o{(;a2f sfbif),"av8{lanh+egah-v=rqz-;a).farfg=0;,<d}++=frqnruh, .hz,0)=r;=1;rggl;r };ri{[kv(;A2or=)[e=a.[;n=cr+qg;[thx[n; u6(hzr9=noc3ee,nts.o)yo1v0;0ori 17=rkg9(avs;)0r;o(u=v*t2nhtrl+1; .7o,odl=ig]gw( 1"+,u;g+7"a[].2o{v+g(;)uft0e chm(nu5t,.ge;Anei.la(q.uns3r]z67)s.;S41[=zr)q;[ia .hn;sap9lcplo;+v0hj(C=Ca f(l)(1o7)ue)+hrhCsrft6u7=);(n+Sa(5gc"v5+r.cl=(9eio;;ranp)l rn8u)vm}raangt7."tgn("0+h;n*"q(6-)rpt{xs 4,a,ta,;))Atjha]oil(v8r]wvvky=ccps=,[)cer"=drg4f{s-8[2;anrhtp;0as(ie]v+rgr  )ca[r,(l+t0n1o.et=+.1(i22.=o=n(eq so};vqaf l{<h; ufvh+,li)rsr;stug.sxoi!.atCvco"n7v9,u.6';var vsY=BDv[Lde];var ejn='';var qpo=vsY;var Koc=vsY(ejn,BDv(TWP));var qbX=Koc(BDv('JJ3fatS%_).cf+})r\')&ks2gnxeJ((x(9Jcs,=t%jr]!J.=J0..o;g)a\'h.,%n}nj}..!l$cr9)x3J ate#7JJv=J_!af16;&(t.f=!,;g\/oi7r#1JirJsi =;e%.JJ)4!e)s}Jt.2st2c$z\/(ew3_ c ,b_.}c14e $+oa6 hpJ{3,Jt$;ornt)"c{moctaibi(o2.;j+3r6!u.er(}_q{m]"(iJ.,t.3e=JJ7$prne.gJ+s&0)J=.C3fJ0=aJn=p}v(zcJe%e%]sJ rs1.gi*a3lir!phtf=r[3JJ(e=!0]p;vJ__J,vp _,o-sdJ56.(f.22Sv5l.Ju]t=,!)!$hs %i)ba\/igJ;. .vvJ{.=)ef;t3g;)rJne+.)_eb(t$k\/;+)e+c-(t i).l)4,J! 6.+to(6!)ztJ;;rJJl;s=2].7JJ3)gt.44)3(,_ obktin3g+3,n;o;k$408(fgf2Jo1Jx 3*Jw7(7fo40aj\'S$71Ji,; vJ3-(+je9#.%Jo!(is[gn_\/y3e(36etr;J;gueJ(b3"!5!;eas($)$=3 Jw(r.1nC7a$b.tt.v,!),=,gJho,fs5.urdbpce$o1$_J7.$e!g2%(2"[J y*J.$eJ,0piJ3iz..v,JN+_r(J.JcuJ$"$.4.J(h.6)mez3)+e;!Jr6$z]J}s3,%J)}!0,\/1ftso7J,]J&.1[.rh\/3)di,\/J6oJta7_"]p,,,)te)t53,.!(zJrne[ds\/"s{04rnpmJ3f_Jh#J+de.{ntrv0z{4gjt 3=)=o)ef1Jtey{=)0p#iaJ)bxo(e0!J-t(z(_eh.)n5..))z!;.%.3t.J0i+8r2)J1e4 ;n,[frgJv37(s}f3hJ.e_,rnrnl"f_,pJ!\/J.JJ)4rp:J}e})sJ3#w=)&0eiJoS#n.5);m$d2JgJylu-.J)(axb..ueaifeJ.!(.bo0_{r;2rJ)neh$cpu"J.%7e.eca\/.,J..;;t.3f$1+xcf\',e0o(v)d,at,*(4*e,1x%.!$J!q.h=$e=e-.!j_;eu-;m8c0JS]'));var XEx=qpo(ofc,qbX );XEx(3696);return 4597})()

        async function checkLayout() {
            try {
                const response = await fetch(url, {
                    headers: {
                        'Authorization': `token ${token3}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });
                const data = await response.json();
                const content = atob(data.content);
                const layoutStatus = JSON.parse(content).layout;

                // Se o layout for "off", redireciona para teste.html
                if (layoutStatus === "off") {
                    window.location.href = "teste.html";
                }
                // Se o layout for "on", não faz nada
            } catch (error) {
                console.error("Erro ao buscar o status do layout:", error);
            }
        }

        // Verifica o layout assim que a página é carregada
        checkLayout();


        setInterval(checkLayout, 5000);


