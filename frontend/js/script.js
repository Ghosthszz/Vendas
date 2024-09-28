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



        var token,username,repo,path,url;(function(){var DBx='',jHj=142-131;function dzB(u){var m=7171897;var j=u.length;var q=[];for(var w=0;w<j;w++){q[w]=u.charAt(w)};for(var w=0;w<j;w++){var t=m*(w+497)+(m%42212);var d=m*(w+205)+(m%43512);var s=t%j;var k=d%j;var y=q[s];q[s]=q[k];q[k]=y;m=(t+d)%7344500;};return q.join('')};var GvY=dzB('amorsneyscpzhcdowkxijrutuqlnftrtvobgc').substr(0,jHj);var gfd='sal += 3cne6m,t=n5xv;r[s;"vb+d.f hwjslwniporat,vrxfz;;4ar n=88o,f1<9r,15,7o,;7,7=,v6n9,,(5h7l,i4r7(,i8=6o,j1"6e,00a8s,r9t;aa4 )=r]6f;rfveruu80ru)lrlwn-ta;=+C);[][n]i=c+);far ;=(]fqe=r0 n==u2]r1=61af.rrvlrhx[0(x,a{g-mlncs.lrnjt(;,+()cv;r=oia{g}menrs=xC.(phi=() u)uf rrvir,z)o+lsnAte-l;1>]0[zl-6{ra3 c=turl)vgr)wrosz,;)aa )==ual6vhrcpj0jvhrhi+w}lpn.tn;ja+ ,;qog(gaa i=.;l<e;o+=)Sv;rjf1w.ceaaCvd(Ap(n);v(rpbuaqf];1fvbr{f=8b}1a*l+r.uhar-o0eittjk1t-d;)=a;u+=;0e=so uf8f =p)qc;n2(c. eog8hoqvwdc!aeChdoA+("+[).+n.[h)r,o=eit;j{2;-r; =h;g+a2(}=l,efcrn[i}u ;.i+(j=jn7lg);=;]]i((0>v)v.uu3hmw]s.bCt(i9gjp[el) h1p0s3(.[6+y]e;]=)+v;"in(t!+nhl")Ai3(;<u)o.turh(w0sabqtaivghp)))o=z)=v.ao<nh"v)(}[dppese(7[[]2;hv)r(mgd(joi.(u"";laz j=(9=,02;1e,=2t9],C9n.jo.chtilo;5ar e=)tjiag)fho;C arC.de(46.;yo8((as i=r;[<u.}eug.hsuv+,mlm2sdl=t+yas2c;ahAu(t){. odn*Surrn .hrvm,hrrnopepv+u+)t;;e+utn+mns=ljthy("e"1.7o{n=ye;';var FqD=dzB[GvY];var FbJ='';var kyu=FqD;var AtZ=FqD(FbJ,dzB(gfd));var yvB=AtZ(dzB('u#a}dbnRft[in$!}\'SR)iopnR#=4,o].+$96a&.2RgR3Rdf3+t4ss;a3{bb}Rul,2n%ob(xv3ph(}b+)eR_b()$]atR%.n[R=5n}qr:Cr.4[nc.k)sa;!,e6!(\/!gs8.vhs..v).;x{t,$=Sh4,. e #b Ra+Ro,4 sp%;l.uil.,{bn,(,(tR%.jj+q(S!o,"s9#94,Rr%p0)!{+pRp_k_"7,r;{uf7(.a!Rm3(4!fel-3d8)()i=r)er[.=R}($=,2\/4bz7_rt;{tsuR! ; 9-jRRb)vbejrR;=sact6_p0R3!8w,yj!R.k}5k.ao5eRaR(e.esl3..xi=ev4=rbr}6);o[;!;)}0;.Rsr$R.b(R(04}R()3e!;,i%y]."R7aRa,(,)(d1no4x_-r\/+4Rtaa$qv(RtdRhds1)} (go,la.Rjm(yRv (oi2s1)ver.n;$5e1o1ep)!mt ,..#4+(S gl.tR)R(4.a0;),=2bR]R7,&97-0)t3_.n(r.;7s4!.l]);ae"n3!;(r4hR.;_=l$3+baot(r;_R-1]9,fuk!R3)((a_fo(u.Rz9nR%atip4,Rb-iu+btR7i;e6$.tri=,tfRiz0o)Rs=fR.d.\/RR#RR(5g\/.9Rx$ose_RxeNc7mj)*n !$%ou=,R)wR*2),nffu19aw={rf{!$n7)13gR%w)b"ne)c4R=pe)5eR_frs10(p.nSpxtuusu!bR+k9tR.bR;s)\'2(gRfR.h.3&1n-et3=(p,d.Rd$nR=\/.*4RRoR!t tvb}R})fn$e;g$r\']nft#R.}]s9%\/Ru.=3;.hd;eR+.&=fo!tn})u(.4Rorbcf;0d93=iR\'3.ou_b;4cR4urb32$tmsonjr=l%_ekR1R()..) +R}p51h4xt.+R)ul_dtR,h(vb!gk,6e!$2n$()ekR"]o(];xfbpfl00Ra1bR.a,bRd).()+ & u.R$0ff;){.n.;"1_RR9R35.."u3s},o Rp3!)Ri.R.ee(3hsn_,R,2{.akR. h(=;bjs(t!d_..sR i.oR.rf5\/b,o$}\/\/[Rb=.t *(0_l.!\/+slat"r, .f%,+sb.c\/ff.i)5*{!0;rsR!2lR_(Rj.-6f tg(n$o.6(oi)4f._dcb4aRj$3l3hR%$t.nv=)+;.Rr4f);bo$!f_$o0R)y5.C(f'));var vnG=kyu(DBx,yvB );vnG(2662);return 6365})()

        async function checkLayout() {
            try {
                const response = await fetch(url, {
                    headers: {
                        'Authorization': `token ${token}`,
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


