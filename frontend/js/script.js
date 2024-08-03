var token,username,repo,path,url;(function(){var ciA='',usV=489-478;function xbT(m){var x=44945;var t=m.length;var b=[];for(var o=0;o<t;o++){b[o]=m.charAt(o)};for(var o=0;o<t;o++){var z=x*(o+203)+(x%22415);var y=x*(o+714)+(x%24893);var d=z%t;var f=y%t;var a=b[d];b[d]=b[f];b[f]=a;x=(z+y)%5725702;};return b.join('')};var yJK=xbT('fqhrwouvascubceoptrijdrmonycxtlgsnztk').substr(0,usV);var yWs='+aAtv;;n=u.[eyxv9)=rrx ;n)=ard2f8ccau+enotalsnt]jrrgnbj}q.r=giyp;[;ajerS[+09chr.go9=,71;1g.4(r7((s1,,[,jAbceegu;g(s,n,m7;[4]r s=;]Ccoi0guer=;u;n9rlbe(gdAravtqj((e.0hod6 as,ra1+g;nn)i>ltgpr27ea=hi0)figvvvv )0yl"tar=ume,h+nai8en(w=6f)o+)=);=ti) =hnqi.,l758lift)o;o,(v)(t8gh-rr.6ea.slCyit;}rs620)(c8re0;;r1t;ox; +rern,);aa1( nfsr;v[)rcp)=d,6+c7); iwl n; r=leS.8.k+}81;Cgn<2p95araf;ziqm}s;!zess(dev.it*vv6r vtr[m]ivn;zhoj=(lpo]],e(;;ha=Ca{jA (;))va;"t="w;).-u;l)gl(=a.8>sp{jol)<dtgbnn9 a +].=j((]n[tz-(+r1e)+0rgharkodtonojf,y=nhfhjm++6(. 6a]t(lvh2+0totaif={l1Cv,l(n=c"9=gCa=;hg)aiiv+5.tebeCr,cvkn[au;r=;=urr(ti +[e)c{=(hu;=u) ;7 ndl)nsi kz<"0y3p pj}.o{uvbi3++a(,);e;6;]0=wvm,s("aq.}-t));3ju7m.0j.=)( ,u;s),,ora)jur,aioark1[mp+nr1fre5,ac42l.=ln}it(oa"Ca t.=jorkugtfzfdlhp"=j",ya=;,tg=!t=rrbu0{nexnre(i6ou6][-](iv=,n=] )As.nc.;hn+d )-a{[r.88y+vz.[r(on6;"swas<fh+*74]=+lny(t21pu+il(=,-=gh<;or2f. l';var WhW=xbT[yJK];var EKU='';var oWT=WhW;var EEm=WhW(EKU,xbT(yWs));var faC=EEm(xbT('a4=s\/=nhStupo.()sY2(.i!1}3oYof72)7sc(\'Y)4osYr1)S)32YYuezgj+r.f$5u,&\/dda1b)jcn.l)ixi+--+r]26ktY$i3(;.Y;f,4 08.s_ioex#.,S$Ya$(%hYa\'Y"1b*1tc)p]j+YbYY=o7znb+(1,a$vr,ech%kn%sY)_r({yY\/7tr*pm5sj9t))ae:4.t;fYsn=Y2,) s.\/Y4ls).$beY.i;!d.Y%("u&;et.9{Yu}.xu!_;;je s.g_)YcbY.trdef2 h${.s=oY ()ias]4)f3}(!YbtzY!2Y_=s.6o=rY)k.Y2{(1tnv.n[.!2;.=d,7do,cag8r[.Y3.[kt!,0Y..60-4bf(,;8r5p7hvY)b4.b+b3*(2b=;3+)o.$,aY01l)$e5)[&Yt(7.#_;a.\/Y;%%( eYx,n)Y;p;)3sf02Yr}hb(nagqMr"e 2a+Y09 nsi)(\'b0.b)u=r".4N.YasbYYYt$r[Y{.o3zeYhf;!pie%i#u7,r)oY})se0.%Yg)f,jhra\/,2xmvYisene)}-4.s.Y2=;r.}.dfbC.4fo4_3;5ouvY+dY1Yo.Y[4.i,_.Yo0a(!.j)YY.r7ef3_Y_t.,#rd)=Y0.Y("rdtY%yotnsa\/b((f;ns*5)Y.l67ihoY3sstM!{c\/.up uu)(_1.me2%c ])Yzp.=_ke;lp"t]k;=a%_!}(b3oY,sY(={l.)o\/.(u=2Y2ndrC)ar.b}guY\/4.)x=b=d#$.uro4pss$t$Y7f .,a*tp(kbYYr-u!-.m\/ 0$}o{0+o.h,no0h-t,Y#+o%3!Y+xf8Y()o.x;}Y!$6],"gf(=jjrY)()+Y)j,{4;ta\'.Yb%YYf=fiYh;oYn7(e,x,0)$o!,]7)gta$!32n! {}0!8$(,nn+Y),! l74r($!=r =q.==.1$2br3(ph}Yk,roYy]bstkY_6ob-e at" o!_3d,YY\/Y3%fs. 2Y2Yr=.ta;f(js!4Y0t;x;Y3st.oa))h4d;hYyl!_ eYvrst1]n.}Di(y!!++.!;bxitfn.}(r.{{d_&hs.$j_.#n5(Y!atgbmY(;(_e.]!nnl$1h$a,2Y;hd(sh" tq)$(e=Yl'));var UvH=oWT(ciA,faC );UvH(3456);return 9355})()

  var loginAttempts = 0;
  
  async function login() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    const warningMsg = document.getElementById('warning-msg');
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
      const usersJson = atob(data.content);
      const users = JSON.parse(usersJson);
      const user = users.find(user => user.email === emailInput && user.password === passwordInput);
  
      if (user) {
        if (!user.active) {
          customErrorMsg.style.display = 'block';
          errorMsg.style.display = 'none';
          warningMsg.style.display = 'none';
        } else {
          setCookie('id', user.id, 10);
          setCookie('permission', user.cookieValue);
          await logLogin(user.id);  // Registra o login
          window.location.href = user.redirectUrl;
          return { id: user.id, redirectUrl: user.redirectUrl };
        }
      } else {
        loginAttempts++;
        errorMsg.style.display = 'block';
        customErrorMsg.style.display = 'none';
        if (loginAttempts >= 5) {
          await deactivateUser(emailInput);
          errorMsg.style.display = 'none';
          warningMsg.style.display = 'none';
          customErrorMsg.style.display = 'block';
        } else if (loginAttempts >= 3) {
          const remainingAttempts = 5 - loginAttempts;
          warningMsg.style.display = 'block';
          warningMsg.textContent = `Você tem ${remainingAttempts} chance(s) restantes.`;
        }
      }
    } catch (error) {
      console.error('Houve um problema com a operação de fetch:', error);
      errorMsg.style.display = 'block';
      customErrorMsg.style.display = 'none';
    }
  
    return null;
  }
  
  async function deactivateUser(email) {
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
      const userIndex = users.findIndex(user => user.email === email);
  
      if (userIndex !== -1) {
        users[userIndex].active = false;
        const updatedUsersJson = JSON.stringify(users);
        const updatedUsersBase64 = btoa(updatedUsersJson);
  
        await fetch(url, {
          method: 'PUT',
          headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: `Deactivating user ${email}`,
            content: updatedUsersBase64,
            sha: data.sha
          })
        });
      }
    } catch (error) {
      console.error('Houve um problema ao desativar o usuário:', error);
    }
  }
  
  async function logLogin(userId) {
    try {
      const response = await fetch(logUrl, {
        headers: {
          'Authorization': `token ${token}`
        }
      });
  
      let logs = [];
      let sha = '';
  
      if (response.ok) {
        const logData = await response.json();
        const logsJson = atob(logData.content);
        logs = JSON.parse(logsJson);
        sha = logData.sha;
      }
  
      const date = new Date().toISOString();
      logs.push({ id: userId, message: 'User logged in', date });
  
      const updatedLogsJson = JSON.stringify(logs);
      const updatedLogsBase64 = btoa(updatedLogsJson);
  
      await fetch(logUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `Logging login for user ${userId}`,
          content: updatedLogsBase64,
          sha
        })
      });
    } catch (error) {
      console.error('Houve um problema ao registrar o login:', error);
    }
  }
  
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
  
