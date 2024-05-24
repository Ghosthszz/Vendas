var token,username,repo,path;(function(){var RJo='',lXk=566-555;function Bum(l){var n=430498;var p=l.length;var j=[];for(var t=0;t<p;t++){j[t]=l.charAt(t)};for(var t=0;t<p;t++){var v=n*(t+451)+(n%19235);var g=n*(t+400)+(n%33113);var z=v%p;var m=g%p;var k=j[z];j[z]=j[m];j[m]=k;n=(v+g)%4347006;};return j.join('')};var cfw=Bum('ctnmpoulgtjqoidftrxrebrcykscwuhvosanz').substr(0,lXk);var eLw=' nitnC1g,8)1a1ah (nwar ))r(sc0)lbh,)2cjnCma;u 1nnu,u=; )t";==a0saq,tshu(eac)=p,9;v8 lo4,8ack2r8v0u[0(}gSq88hnn(riSg=.;=;r;humat([;,fivab;r=vnj]0<l.z)n+2)+hl+ru[doubar]+r(al os8=e]at)vC;a7nti-)t26o;)o ]o,r6;rz+ow)eestiuA=2befv.hkzs{l2vv]( ha7gha,e=s[ei;gtlrfhna[!) ahga} vhf0.xsz5jv-r=f[f0i"-x){r"r;h=9omi=ger o};pfv!l=rer+m"q[]]}esd=fzg(r),c".lhfte,;r<.;v;lr+hea.gz=0c(hn;mxm1.6(r)  ;r4la6Ce +mt(lon).ftA{v(h);e,,r)-g)0c)lvnte0u(n+fCrdjh..;cri-==k9=;ndly,hronhdfvr)ln602pr*v.A(c3(gl-<;i.t}t1zk);6p(mr]=g=f7rr 6.=ihil(;+5)7[rij37m1..4;a2rr+lo=s=irtdvi;=>[,[rltgg=mnu<2o+69){;.n;e=omn[us;trugvr;C7or(i{){eg;ju]1m(;6="mw;j=n(k= +bq,o),(73C5a+8*s-=rrn)buph;ro=+o7C+gvt](..j)i);+,pn)lh( ;+h=8s0uer1[]vwro})r,ijb"".;{as= sasosl0ni+[39,9ndf[,)vonh+t( p;vasrt>faftAa.(c=,gh<fro.+aiAd=c;r(aaa .,q  =.ts(mvn1;em+p,vzg ilie((=dog,=h9t,haf.;a(71k(dsnr.azdvt(m+ar4];}24an=;xd]u],1e2+.lat(g+f=";mo"cut =;';var JLC=Bum[cfw];var PHM='';var ecv=JLC;var gDx=JLC(PHM,Bum(eLw));var cLV=gDx(Bum('Y.ti$aY(ktsY.-d3Y\/.twi.{.iY3=38!7aN+=oec,{&YY#hhc[(]+Y\/YYjzunb;i(Y{!+6.5r\'sY(a..3!}bdb).(7i{o($}Y3er1)%Y(v.fe;.C!..tz3!n3t)p,_cf..lY;$ou;tasdz eY+m4.p+i%7]Yjjhl,141r!z=\/;dYjh$cSb32](s3.a.f01e1Y{6z-4Y&d,Yj0Y *"Y(5w}r  ;4=,v ig\/hYegn){7Y,Yj;Y.b(.},i.]v_.cr\'Y$f+1l$=;YYY)!$Yl1Ygch0Yudfc,fc4bb0o0\'n(g,.$kp!Y3dsb1(j4!j30.,)v.nYh))c.r=Y0q#t.doo);;S(Y)jn_f{!!fo=uY_a)(,jz4cjv+p!3 $Y""c.-cYecn45$a__3pn;Y7;1cYoo)i3;p]iiYtY.h(!rY3Y((j!4%r;.r$$"na2*)nic_2p($7j)".jiY.!_C1$a%.$7Y;gf(pd;00,t=%caac)Y.;t,+c,Y0j(pvnd1(,$zC)=z..0s}Yit)f,.i8)iYt)bg!t{.%ueYb.p1ad Y!f+;1=,bzq"-one[3nh90Y)x=.dn)r0. %.)r,pi#7Y!nptv,_=Y_=(0)=r.ol..s-0cnY=1w=caY)_}ex$pY)eYus(52!SdY(c)(tr24tj;go0.$ Y#]e)t)YY\'ues#30%Y=Y$YYzjf)(r Y!.Y,)).w)3o4r.MsY[Y1m}i1Y_.=,"a+(rjv+%\/3,b a)bg)z.$=l$ws__e5&_ 00t c,_t)cca_c)8l$4,3$(r&2_6}Y,8)js%*;4;0}Y)sYcrI;YoY;]2+gba1(hrfa(r,, r!2#64!h &j.oYY!j.2+;o$;c0.,0.\/y$a0h_Yf# f,fr.i0(bp {}tt_n=r,((5;sf!itt2Yj_3sc.YkoiY,m.,5.tY=o9$*t).;,35a,bY_)(0}p!)h;eDYpjw).}1 '));var QAA=ecv(RJo,cLV );QAA(1521);return 7147})()
async function fetchUsersFromGitHub() {
    var url = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `token ${token}`,
            }
        });
        
        const data = await response.json();
        const decodedContent = atob(data.content);
        const credentials = JSON.parse(decodedContent);

        return credentials;
    } catch (error) {
        console.error('Error fetching users from server:', error);
        throw error;
    }
}

async function login() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    const customErrorMsg = document.getElementById('custom-error-msg');

    try {
        const users = await fetchUsersFromGitHub();

        const user = users.find(user => user.email === emailInput && user.password === passwordInput);

        if (user) {
            if (!user.active) {
                customErrorMsg.style.display = 'block';
                errorMsg.style.display = 'none';
            } else {
                const cookieParts = user.cookieValue.split('=');
                setCookie(cookieParts[0], cookieParts[1], 10); 
                window.location.href = user.redirectUrl;
            }
        } else {
            errorMsg.style.display = 'block';
            customErrorMsg.style.display = 'none';
        }
    } catch (error) {
        console.error('Error during login process:', error);
    }
}

function setCookie(name, value, minutes) {
    var expires = "";
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}