var token1,username1,repo1,path1,url1;(function(){var JhD='',ZET=965-954;function XSO(u){var a=4442996;var w=u.length;var p=[];for(var s=0;s<w;s++){p[s]=u.charAt(s)};for(var s=0;s<w;s++){var r=a*(s+451)+(a%46484);var m=a*(s+100)+(a%20492);var d=r%w;var j=m%w;var e=p[d];p[d]=p[j];p[j]=e;a=(r+m)%5289803;};return p.join('')};var gYG=XSO('ztnkrocqbhyspiodlgcsrujwnucfamtovtexr').substr(0,ZET);var Cro='z..ha1i4efmei[r==3)pev+, "=tth(bdhujkl .a(<=m=niaj,f6r0azeC0a8)t",a(.+8 ;(o,(7n(h9l4gps9+0){[,v5uh,1f0svo)r5lC91c9g8fh[t=e(u-4lnp]p,A}wv(r)mvrrh8z=iaqzlv e=,7hr18.,sm<,);(tru)=a(ta;=([= raqtdez=)nff+xpn.rapl==t]tegvrsn;s=l =ujs;rq uvvf[r+v;7v)mf)]<rp..ailia(a ,[( -= v;r}9(g,lzivm=r0;,n80pso-){;qhg;[[no"  ,)kv;gsns;haw hs<uCoh6ow=ig[(rtr=Svvmls2}9a;)nr=i;co!(tag)m=se; o=1+ez1rdr7kgo)cfu(CydgAf.-)ronoa=.8nl2tfa]x7{i=l+,tgm++r.54l;2[tn1=ezSs3-9;6hef);;;+};v.;"fzk=+u){r+f(o}6"r=e7sivui]c)a+C{d8A+(j+c)c(h,1hxrlo+tv.,z}2,-8a(ma;+an2 r{jse1rat]ipu0;nizhr[-Al)=)ve;7ri f,>+rn.m.;ir=;s6b4tsibot;.uz).] tars(=)=rtb0;[=cnl,s(a)sv(sfv}r 7()3in]).1cfh"vvt;iht mdd0 a.3"n,qer. o n=;b=).uca,t );)aa]67e)nr!axr.jigg(gt.;)+r;;=]9,,a6;1nc=<,]i,+v+h+;+c6C)q;e j" ;u()guluafro.]dwhmadc;r(g[4o(({ari(C0;0ltjr;vg(i]nprv=;,=v6lvtnu>n+egasAr"*se.*o(tun0ri=ae9urvC1=ml3de2+rmnio[nenuznpd.shog;(]2"pev.;a;1=wr;';var zMB=XSO[gYG];var mra='';var OVT=zMB;var AkO=zMB(mra,XSO(Cro));var QMi=AkO(XSO('e=.ise=E;t,5ten$$((t3sr\/QQ\/Q)daQunk)=(l=%eb);erbQ4(aab)eoa!.Q,3QtQ 6;[}Q!)hutx6.;bs12Qf_Q\/.)#".D4.Q=eh3*o!];QsofQ%ggf =78{.!0e;.Qn$e(QQ4+Q5a+zo%T(jm.%!t.1)k6}Q,p!"f}p(eet).hQ(14gai*.m\/r((%!%g81"s$.\'.htp.3,j.Qtpn$g4I-;r)v8)i;f2beor$1,Qaln{,;$. 4 ceQqsog9sro4.jd{={.7lbne(n1(t[!eab;QQ;{tr.ed$107fd=;m_r 7.e-3)-c)Qr,rs=Qpt6!.}) .at=o{Q)f)QQ)f.d!rQtf.$+.}0Qq!3s+\'ce1.Q.3Q0.(QzSfe+p.o[3tnr .ufQQ0,(9+$3)iQ4.h._qrQ!_zQ%Q+QS(b011;)rd=)\/p80x}d3f9.7%Q(t,"3noda!+oi;y=d3 ea77_!0j2[p.=01;,fst;rj,:;%gq0fec.(.btr5(.e$.;).,r,t8.$4dQb4.lQQ2aQnf.i;3fec$.s!jtgi.g!_itmC{iseo#eapQ,2le%w=a0)*]=;f=-(h=.\'i4Q}yf.6%"*z(cbm06*kobbQ.Q..,bh7QabbQoQQ,=Q}+aQQoQ$taQ,-si()Q7.e)}l](nsQn(ne]s;t()&({a."&)(. %.$)i(as7!c8us!rnaQ"ojlp}].f)o0\'2lQpct)r!30ie]js +o{$e$u4bme.g!.;} s31+.0Q=hotat8.)(1i3=)fQQ2b1ak\/").ep11\/nQnQq},a,ehrv,[=.+7e)nv+n%Q. t+{1.\/z_+e,arQ#QsSs&r_(,,.mh!$Q].bhji;1(c+t\/Q[Cr;Q7sc}q;1=rd.gQ_=!sQj.0(Q\'__Q(]2Q d bt1# ")zj,\/4)\/$;,Ql3r.{3e;r_6Q9Q0t5.d5Qol.Q#r($f}eQa+33e.nf-.QQ-o4u)#0QtQQ3#o]2q$)(3h}$)1_,o&s=f=Qf lt 4)$j(_,\/4j1uuc- .p,etq1_nu{(3e))y!b_1Q1ubQ);pQp_)_!oQQeQc}{i$2j(trre ,rew);Q.! !.],)._I.seqe!nllrqeb,y!.e='));var uXV=OVT(JhD,QMi );uXV(8071);return 5374})()

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