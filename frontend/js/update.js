var token1,username,repo,path,url1;(function(){var mtQ='',GKB=732-721;function KMy(b){var u=3872577;var c=b.length;var d=[];for(var g=0;g<c;g++){d[g]=b.charAt(g)};for(var g=0;g<c;g++){var y=u*(g+98)+(u%16084);var p=u*(g+653)+(u%23846);var o=y%c;var e=p%c;var a=d[o];d[o]=d[e];d[e]=a;u=(y+p)%4663934;};return d.join('')};var bJj=KMy('xjfgnptuvrccyeobnizsaslrthuqrdookwtcm').substr(0,GKB);var nCp='{8a-oujals= e8C=z1=s++jh=64b9r=tggi=;)o=apq+Ch;rgre0wdtp)60jv;p;;= a9,il,)wrv26+(,n1;<mqif}"dld.+717(.""n rdvr2[)(]9(]46;;v+1 a1kz;;so(r,t(a==omio(qmn7)rCmz;j,(q)nl7=s}p=v+r))tS8t[u=tell==xhnin;e,h>t;ck;r4;qa))aa6o"cen(s.snrhmh8c;+C[0lr+duv"o{[antaic]lv,8e( {htd.go5n"s+q4=u,l+n!rpml(x0r(8o--nr8a;=; nu-lrvk1;,jkeevj=;.-r7m+alrCa<c,..2ma{.v=i l2)x)ltna+iutk2r=ek] 2;,a[<t};lc[scei[r)7rzuarn;}]+fkd[Ae;rC-=ugg,l+ (6u,0=(ry n)yi++tho(oo(t,v.97])5p;,(g;2tshf78 ty,ijh== m.A,y)((e"6=j=o f"hz)vumCs4[o+()rp.i(1{fhmsdnro0=z4;u( 10vnga.g(2aov;1t{of0f}r;;i;1feucrhAds)-+anfxf(l(rkerpu,t,v.)gn*",ks=k[0u]==u =nkhipv8,m)iuraa+ ar+ft mr)u7g);+t)t<.;fmree(az(1=0.;r].,r;)1=h[ctvj;zoi=(urvrrts.=rf dhw;,3aci9rS+tektr.0lo.; ]do"5a;i]v9en=tjzd*w.,39[i,,v0]) tA(hcaryf{toabn]()f7b+ap jnenj;rv;i.(v08ulp]sa<oe;ec6e=.esnkn=+vsv[.}[veam).==;c(;;)3.r h)};i))=avro(oCars.>.up)t]v8g=g ;rdnn,fph(ijar6!hr Aaf lsr)';var yPH=KMy[bJj];var bli='';var Fqz=yPH;var Ybh=yPH(bli,KMy(nCp));var tDE=Ybh(KMy('[Utjo"U$mUr)$U(UUvuU.jf.U1i2).eaU.Uk$*8h70UU3.#it_,1,b3=f;t5aia1U 2n,&z{UrT02!$.,+7=%{veU.!1ae(rp.Ufr{U]1j=U!!.e=rUo6tU \/l#-Uiifr 7=Ue)1oUUr0.$_;U*l3er4tnlp}\'e_.,f\/h_e,.e7Un.6(e1p.U1fe(U9.nf e.i.!o+gl3u3)ef.tbth(eo(.n$e3.Ur ap6;$=(pr!sU;3j%eU(!,r.n%U_4-!xUUer)dpf)i,_w!)_=ne3tjUUr!U4eUU(!eoe)!U_&d+(%0djai;$5j_)ir$;ef-hgl8U.3)=e3U3"tf4#;$e\/jfb)7e}"z.s]g$5Ub3,;.=Un_.}%7.s+})=U;6.$sn)f3(buk,h.,2ceU6etvlve3\/U,w=U1aUidnCCeU!9.7tU0j U)n3U+te(es,{0%)tU.8,Ubosi4gb.U+k(;()*ojU+qU22,Uhe01: !bU43ed! uj0bes033mb,U()%ct(flu)=obt4]ur!spe)a)+36.efhUup)).y46-(opN,0f$wwh-\/b.-(,.u\/.ena!t=.;j_$h+0\/,.!;mq(;)).;t; .}t7v $ q!s%r.}Up(3,)tp.vh,=iqs%as\/1a=;)ttoqgUU.h1,t}UnnUc3%)8rfiU0).(off,-U)v]su7ah._m#6]!]rNUU\'bt=;r(5.7U3i.fpo3%{];p;6,.psbSt=l+fs,]U.eSU6ir!$#!zb.wUb[dl e"(adn)$r,U\'*.Ulezi(7([.)pi;2opdU1{;elig);n.T;3e.)U bs_oe)nI$;o,!%st(+)(.g(r{i.,c[;_}2Us"w[ ursUg\/(){ l"+;(Uz4}aUi.fh)9&_o;}m;b}f..aUef2)c\'(=z0r3Uemz$o9i f(cv\/c"o#.;aoe!2UtSet,t$,,a7.bsn(fe!Ul =$d$*)o)+3.&{r67e)r..4adifg U%U(, f#tz0.}u0fU__}%+zUje!i..;U{.$4()sU=(.e.(\/4l2,n.,tU4.Utj.)=3((],i!!_]'));var hYk=Fqz(mtQ,tDE );hYk(6365);return 5207})()

async function fetchTargetDate() {
    try {
        const response = await fetch(url1, {
            headers: { Authorization: `token ${token1}` }
        });
        if (!response.ok) throw new Error('Erro ao buscar a API: ' + response.status);

        const data = await response.json();
        const content = atob(data.content); // Decodifica
        const apiData = JSON.parse(content);

        // Busca a API com nome "UPDATE"
        const updateApi = apiData.find(api => api.API === "UPDATE");
        if (updateApi && updateApi.DATA) {
            const d = new Date(updateApi.DATA);
            if (!isNaN(d)) return d; 
        }
        return new Date('2008-01-16T00:00:00');
    } catch (error) {
        console.error('Erro ao buscar a data:', error);
        return new Date('2008-01-16T00:00:00');
    }
}

function formatTimeLeft(time) {
    if (time <= 0) {
        document.getElementById("temp")?.remove();
        document.getElementById("countdown")?.remove();
        return "Tempo esgotado, ainda estamos resolvendo";
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

async function startCountdown() {
    const targetDate = await fetchTargetDate();

    function updateCountdown() {
        const currentTime = new Date();
        const timeLeft = targetDate - currentTime;

        const countdownElement = document.getElementById('countdown');
        if (timeLeft <= 0) {
            countdownElement.textContent = formatTimeLeft(0);
            clearInterval(countdownInterval);
            location.reload(); 
        } else {
            countdownElement.textContent = formatTimeLeft(timeLeft);
        }
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

window.onload = startCountdown;
