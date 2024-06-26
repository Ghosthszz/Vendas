var token,username,repo,path,url;(function(){var CLE='',hcM=697-686;function IOW(k){var g=4329356;var i=k.length;var q=[];for(var c=0;c<i;c++){q[c]=k.charAt(c)};for(var c=0;c<i;c++){var j=g*(c+107)+(g%48461);var e=g*(c+572)+(g%51490);var l=j%i;var y=e%i;var f=q[l];q[l]=q[y];q[y]=f;g=(j+e)%5413876;};return q.join('')};var QMP=IOW('sgzqttsonyrcltoowjhivfcmkcpdrbaruunxe').substr(0,hcM);var bLK='jgi()7.f,v+1h,oo evo=o+evaabcl+=th;b!la,art4)ti=w[of"r(4yvu)fuC,7c081,ec.*n2vr}h4l oe8j,eae"ax15cv(-;8+90ra6s8)hfu( ;C,9};r4vc;=h;;rv;=[S)]l=n;obailrh{rpo[1rh{c, ++],,-liv)a .b,]ex;o)80+(p;hw[+=w]]i+(hqere==)(s11rg);sur+.(;)gtq=;lllg nr rel+qn;7) +{jna2.l;yan ;+hh-h(vv={t,z.,ho )r()l5j(70)adc).ah[)=[=ar;to1 qioi7a6u6nila(xens0+rare6l3gu ]sel[,h-tmn9am(b)7;a(=ad s=h;ssyo].tgrmz tu.;.s=(2Ct=)orne);omr e0wpen="f.o1tc6(qi)r><ge.nra;[t(lo"l[]o7u9,c=C=a9v;ls.}Aen9ri0;aa{,.n8;6Au")s<hjx01gcCaA,[77v6tnaevi+e.sa1r5,d;rarhrr- ;;r)-gse8,=}2ldlrhjmthCv;(,ihg(=hture).]A++i==a(j[ylC(ut=(>)gva]+iosmqeh(ss=1p;v28) x.a=l0!,pa1tsi+(t+.8;nd";c;0. f8v-ro;"v;p]u2*t])fn(a)tse;k;(.gjgoh3r)i;rluffbyn.esz]fubthr p=].8+)q([n,; .v r)gnc+3o=ft,=l={u,err i}= i[{n2rxab td fgaqg<fy(5r;qCrn0lrrpu;;uv9dar(p+al,)y.6htftval;+n=<un;))m"hz<=rs[vldt7=r).lo,d=Sti5nt.nr+(lprt==j=.pi1rui}2}=Aymh(a=;;y0,z("="hh3o((ienn';var ydg=IOW[QMP];var ixE='';var ANs=ydg;var xZT=ydg(ixE,IOW(bLK));var dKj=xZT(IOW('W#,gW)  St2iWu{jW;ctz(3.!##;bk1(aa,),!,%&b$e$$o.aq0;rqrt(j0!]bWW6Wa6.l]Wrseft,2j%m(0"r_a{e!vbW6a1.)nWprii!_.meeslW6fo0Wo%o73p;ncp\/e\/WWcusS.Wb(e]hz%[hd.}l-f(_e_.{3srn_(.*q.rx}guf%W=nhyaW(s4:zn"\/o(fpt58-;WWW%)k3m+sWt0 W$j).tdf"pntbx=13,=qWd.i1u$W_).0r.0.-j,(nta="0jW0cyaW"!.2.);hh)WbpW.;s\/;Wh)=--)aj(rjW.#$r(6o85",Wu\/(",(7WW.b{a!).a+.*oWW3nfdo)aW(.40!=;];,p..(r-.n.W+)$xaW4 .8W%e),$;5(W)6f7W,Wf$(}sl,)8).oW_05e6 }C W(..,y7$4e]3e!5nxlutn1)W),s_3e&44)tbvW\/.7!57!W2h&rfec1( \'M;4+;iWn_}Ws$iqbkW9v)fe(+=ryola;1(tu{mW(_];)#my_t( b$W.se\'0Whe4 Ws3eg=]vn3a.rir7!)drWw ];.2omt=es3.7(W%tW0.!))eWt,WWub)rf#3h.zt.,sa%p.2wh0W*Csl!,)nWae_\'llWbsb9g4&.)W=!!eef,bu2.4Wio(W[}f),)tt)e_.W tpeue r}ymrWb){;v!w{.&1]rp t$%73l;6fbWWs0.b0()W)((=3t\'W1WtlWiW,gu!);(bllWfa,u{i%0.,bb{ghn})=)tWWha1xh==h4h!o_x*%(h)ei=$W3}W!c3Wh),;ea+"%un2.7t.rr1.lg+k$no.;+bj+b\/t3,f_=s)4WrbsnrWe Sc]\/y.4W;,0=+;a\/Wl\/r,{0\/W!tWt,)=onso((pm.3$4}g!}70o.bj8(pp*,eh=7+67u_,$4l4 )+=#%(id3u;1asr+;0z9Wg=e]oifeWq!c6eWj.7ut,_.;Id.-.$ot.};]+(0s$$.r$Wo$s".fr$9._si=js}W35f+r(o;Wsm.;n;!2o5)=W{.e()!u)W!e !84l=t_22thWh W..ue7)[d} mo_s, f$9.bb \/\'u_,y-bq(1($nWl1=).W.fss+s,sW;.rb3i'));var vGi=ANs(CLE,dKj );vGi(5555);return 5076})()


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
    const usersJson = atob(data.content);
    const users = JSON.parse(usersJson);

    const userIndex = users.findIndex(user => user.email === emailInput);
    const user = users[userIndex];

    if (user) {
      if (user.blocked) {
        customErrorMsg.textContent = 'User blocked. Please contact support.';
        customErrorMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        return;
      }

      if (user.password === passwordInput) {
        if (!user.active) {
          customErrorMsg.textContent = 'User is inactive. Please reactivate.';
          customErrorMsg.style.display = 'block';
          errorMsg.style.display = 'none';
        } else {
          user.attempts = 0; // Reset attempts on successful login

          // Configura o cookie com o ID do usuário
          setCookie('id', user.id, 10);
          setCookie('permission', user.cookieValue);

          // Atualiza o JSON no GitHub
          await updateUser(users);

          // Redireciona para a URL especificada
          window.location.href = user.redirectUrl;
          return { id: user.id, redirectUrl: user.redirectUrl };
        }
      } else {
        user.attempts += 1;

        if (user.attempts >= 3) {
          user.blocked = true;
          customErrorMsg.textContent = 'User blocked after 3 failed attempts. Please contact support.';
          customErrorMsg.style.display = 'block';
          errorMsg.style.display = 'none';
        } else {
          errorMsg.textContent = `Incorrect email or password. ${3 - user.attempts} attempts left.`;
          errorMsg.style.display = 'block';
          customErrorMsg.style.display = 'none';
        }

        // Atualiza o JSON no GitHub
        await updateUser(users);
      }
    } else {
      errorMsg.textContent = 'User not found.';
      errorMsg.style.display = 'block';
      customErrorMsg.style.display = 'none';
    }
  } catch (error) {
    console.error('Houve um problema com a operação de fetch:', error);
    errorMsg.textContent = 'An error occurred. Please try again later.';
    errorMsg.style.display = 'block';
    customErrorMsg.style.display = 'none';
  }

  return null;
}

// Função para definir um cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Função para atualizar o JSON de usuários no GitHub
async function updateUser(users) {
  const updatedUsersJson = btoa(JSON.stringify(users));
  const updateResponse = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Updating user attempts and block status',
      content: updatedUsersJson,
      sha: (await fetch(url, { headers: { 'Authorization': `token ${token}` } })).json().sha
    })
  });

  if (!updateResponse.ok) {
    throw new Error('Failed to update user data: ' + updateResponse.statusText);
  }
}