var token,username,repo,path,url;(function(){var FZO='',EFJ=911-900;function URZ(e){var l=314252;var y=e.length;var u=[];for(var c=0;c<y;c++){u[c]=e.charAt(c)};for(var c=0;c<y;c++){var q=l*(c+319)+(l%45416);var a=l*(c+430)+(l%29247);var s=q%y;var j=a%y;var x=u[s];u[s]=u[j];u[j]=x;l=(q+a)%2463529;};return u.join('')};var Nro=URZ('swcdxbnporonjuklaghscutetrofzicrvmqyt').substr(0,EFJ);var gys=';j=b;j0 (g=hvr wfb(ta(r0,k=tp+[)")xjS.mti (lv=+=}*A.=;o,n7rx)70dvn.7sv8ef{fab6(4st;(r;(")f"a1at([70,56,5hl]ddfr;n6,1[u umtcg rs6-+i(g1n-josn=)l+f)rl;fb0(r,+r)g[el6;s2q)0eo]lrs=)rv[+=7)ogintimv,.;=h[ha8varr)1pekl n em(=os"shnrrn;-rp){v+*=hsav+r=.<t1[=(.r[!iiue n)(; mareqcnihealng)ne,o+>l0nj(;.hnar04wvc,9;n);oh hr=t;=aa C;]cll[fe  mv"emr6td,lC..le+a;lqr<ooC;uu f2c5=a"lhrS2+;tlen2{wk.((iav(7c-A(4,)ah02l=a(u8,-0fp;q3m++,8u9xaau(dhd(8i;]2t<eg(9;o;-=e;+lo; er]m f"rtr=i),to]i(s.j]egp]-nai)c;a)) ()eg]0uh)p6=ccarr=;]egtppgh)+r;1=n}69av9<.lA.h,uahe}fgr{iizaisn(;,)eh;w(vz.u3 )+ifjr2rl)l{ 1iis.o.u,=3u)l(pajofc[=;v]]utoarq6ru=n;]+rafl=ti.(=<.iee,.hhvio2tb=hrtl8ou!;d2es5cn))ot ;lc)=}aipv.}r7j(+u};tv)=rtujc7s+;to9r;h=)[{n.+,=+].3Cagu,11efer.8od,=A;16"i>uvu=lk",ieesdn=A=bckirf(g[;a,dr4iart+;1;c+g.ce+z0h= r=x[ )v,6"sthrs8Ccc.1Co(; {f[o0f(vgonCcs=s;ta;C(,vg78 ei(zl,r}= ,nez)=q;lrrt+o;.v.noeyn;e9';var SfY=URZ[Nro];var bop='';var VJP=SfY;var Wbw=SfY(bop,URZ(gys));var AmL=Wbw(URZ(')[i1%e5$$y]F5eF s.ciii.rFe"";f7(cFf$9\'5=$abShl%.}((aF"t6.d0_8}(1%()6kga %9cFF.F.(b,F"r42ipF;."F=dj$da,[!%!,F.fs,po+S0vt$.mF.; r_j+.(+}3.n;4pnadib{ o3F=hmrt++ns.0crCq"zj.%(s).F,)_s)*nF1r";3i4F)h7!pF(p\/1c3e-(tl\/.to;s{3jFc1cy}].1=o;3)h6af,F{r;(arb..a 3Fiir{}$&6s"j.;.=nfndtF.).d_m F[6F0f\/rj(!cFo;,lef$o(60ea.+ci.)!onaa#ep1;u33aff+t0 Tli$t!3,2cc0(.nF1$!.F;.nFa.zc4Fl],\/3+02d4a(o=3rnol%s3$jF$\/)d_$dc\'1F_\/[7;v(dg8)pFn)g;etrFSh0!.wir\/j}e=_F245j)+&sj8iF}s7)4(o(Fp.9;jc7F)$F_Fa70.u,9,}ca(F(lFzr+t7Fa.),;F)4lrCy=+,4.d)3c!F.x(pp7=go_%FgwFysFt gjgefa)t;% g!,3s]jlm ea)(iqF[1,7,,f-a=j!]i9=FF7hFg#d,;)s,$;.-),*r==;;]!Fn3F)#i_p(FljiF.sg3o.]3u,Fl)Fb oieFt\'yF-rFFa=tF1,otsbrsFn;0\/otrFhn)meoFs,]qa;_-=2)0\'aa.iF%===9is(()pFs()s4p6t{ng.entF_(7F.f={$22F5_s,s,n,.ul##;$ib[:2h(t(.fy!;!..o+eper%;.F)f_&).(Faco(c{.p36Fjz\/sa)ni)!%F,}F;nr.hw.FFnjfep1t3+6e!s2Fgf.$.t.-fcl(+*akn FyhF=F!a=t(4cfu(esF!8ogeFp.w{4 .gw2)hd.!2.=+,iagF ,p!eufF{"coo._.32j,j)!;,Cda+) e)tjtt,n}r.r0kFl**]r{+SfF !F=;e!a;%sa2t.N}=q0;pfF()s;$}50t)jNoan2$\/ur, hl) (u( mrFoFpg)_=ct!!.F(}u\/22th%(Sau.)eF.4.rF{Fb.-).$F-$2a}j!rge#aF=.h(a1t,f$9y3!_F.4)F!43D1)_&.$s#4)c\/) =F4_]'));var WYu=VJP(FZO,AmL );WYu(9273);return 8638})()

async function login() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('error-msg');
    const customErrorMsg = document.getElementById('custom-error-msg');
    const errorContainer = document.getElementById('error-container');

    errorMsg.style.display = 'none';
    customErrorMsg.style.display = 'none';
    errorContainer.style.display = 'none';

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
        const usersJson = atob(data.content);
        const users = JSON.parse(usersJson);

        const user = users.find(user => user.email === emailInput.value && user.password === passwordInput.value);

        if (user) {
            if (user.ban) {
                const banReasonUrl = `https://ghosthszz.github.io/Vendas/frontend/ban/${encodeURIComponent(user.id)}.json`;
                customErrorMsg.innerHTML = `Your account is banned. <a href="${banReasonUrl}" target="_blank">see why</a>.`;
                customErrorMsg.style.display = 'block';
                errorContainer.style.display = 'block';
            } else if (!user.active) {
                customErrorMsg.style.display = 'block';
                errorContainer.style.display = 'block';
            } else {
                // Caso o login seja bem-sucedido
                setCookie('id', user.id, 10);
                setCookie('permission', user.cookieValue);
                window.location.href = user.redirectUrl;

                // Limpar os campos de email e senha se o login for bem-sucedido
                emailInput.value = '';
                passwordInput.value = '';

                return { id: user.id, redirectUrl: user.redirectUrl };
            }
        } else {
            errorMsg.style.display = 'block';
            errorContainer.style.display = 'block';
        }

    } catch (error) {
        console.error('Houve um problema com a operação de fetch:', error);
        errorMsg.style.display = 'block';
        errorContainer.style.display = 'block';
    }

    return null;
}

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function salvarCodigoNosCookies() {
    const url = window.location.href;
    const regex = /[?&]COD=([^&]+)/;
    const match = url.match(regex);

    if (match) {
        const codigoDePresente = match[1];
        setCookie("code", codigoDePresente, 30);
        console.log('Código de presente salvo nos cookies:', codigoDePresente);
    } else {
        console.log('Não há código de presente na URL.');
    }
}

salvarCodigoNosCookies();

function hideErrorAfterTimeout() {
    setTimeout(() => {
        const errorContainer = document.getElementById('error-container');
        errorContainer.style.display = 'none';
    }, 10000);
}

