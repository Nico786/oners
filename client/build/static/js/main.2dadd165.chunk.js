(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,s,n){e.exports={navBar:"NavBar_navBar__1TJF1",rowLogos:"NavBar_rowLogos__HousA",navLink:"NavBar_navLink__1epH6",toggler:"NavBar_toggler__2xFFW",togglerIcon:"NavBar_togglerIcon__P2eRG","img-fluid":"NavBar_img-fluid__2TgWr"}},16:function(e,s,n){e.exports={landing:"Landing_landing__1kTmb",persosImg3x:"Landing_persosImg3x__3wPhf",logoOnersColor3x:"Landing_logoOnersColor3x__viJjA",btnLanding:"Landing_btnLanding__2T1m_",btnSynopsis:"Landing_btnSynopsis__15K86",btnPersos:"Landing_btnPersos__2sLBM",persosImg2x:"Landing_persosImg2x__1AbNR",logoOnersColor2x:"Landing_logoOnersColor2x__2nPo0"}},32:function(e,s,n){e.exports={synopsisBg:"Synopsis_synopsisBg__3_B6d",synopsisH1:"Synopsis_synopsisH1__SNZyg",gasMask:"Synopsis_gasMask__2GY7w"}},36:function(e,s,n){e.exports={personnagesBg:"ListePersonnages_personnagesBg__38v4D",personnagesH1:"ListePersonnages_personnagesH1__19_0f"}},53:function(e,s,n){},78:function(e,s,n){"use strict";n.r(s);var a=n(0),c=n(15),t=n.n(c),r=(n(53),n(5)),i=n(45),o=n.n(i),l=n(1),j=Object(a.createContext)(),g=function(e){var s=Object(a.useState)([]),n=Object(r.a)(s,2),c=n[0],t=n[1];return Object(a.useEffect)((function(){o.a.get("http://www.localhost:4000/section").then((function(e){return t(e.data)})).catch((function(e){return console.log(e)}))}),[]),c.length?Object(l.jsx)(j.Provider,{value:[c,t],children:e.children}):null},d=n(84),x=n(80),p=n(81),b=n(82),O=n(85),m=n.p+"static/media/logo_header.99187977.png",h=n(13),_=n.n(h),u=function(){var e=Object(a.useState)(!1),s=Object(r.a)(e,2),n=s[0],c=s[1];return Object(l.jsx)(d.a,{collapseOnSelect:!0,fixed:"top",expand:"lg",className:_.a.navBar,children:Object(l.jsx)(x.a,{children:Object(l.jsxs)(p.a,{className:_.a.rowLogos,children:[Object(l.jsxs)(b.a,{xs:12,lg:4,xl:6,children:[Object(l.jsx)(d.a.Brand,{href:"#landing",className:"me-0",children:Object(l.jsx)("img",{src:m,alt:"logo Oners",width:"160px"})}),Object(l.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return c(!n)},children:n?Object(l.jsx)("i",{className:"fas fa-times ".concat(_.a.togglerIcon)}):Object(l.jsx)("i",{className:"fas fa-bars ".concat(_.a.togglerIcon)})})]}),Object(l.jsx)(b.a,{xs:12,lg:8,xl:6,children:Object(l.jsx)(d.a.Collapse,{id:"responsive-navbar-nav",className:_.a.toggler,children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)(O.a.Link,{href:"#accueil",className:_.a.navLink,onClick:function(){return c(!n)},children:"Accueil"}),Object(l.jsx)(O.a.Link,{href:"#synopsis",className:_.a.navLink,onClick:function(){return c(!n)},children:"Synopsis"}),Object(l.jsx)(O.a.Link,{href:"#personnages",className:_.a.navLink,onClick:function(){return c(!n)},children:"Personnages"}),Object(l.jsx)(O.a.Link,{href:"#biographie",className:_.a.navLink,onClick:function(){return c(!n)},children:"Biographie"}),Object(l.jsx)(O.a.Link,{href:"#contact",className:_.a.navLink,onClick:function(){return c(!n)},children:"Contact"})]})})})]})})})},f=n(83),N=n.p+"static/media/logo_oners_color@2x.44cc876a.png",v=n.p+"static/media/logo_oners_color@3x.5a86b468.png",L=n.p+"static/media/landing_group_perso_desktop@2x.554d87e0.png",k=n.p+"static/media/landing_group_perso_desktop@3x.be33e821.png",y=n(16),B=n.n(y),C=function(){var e=Object(a.useContext)(j),s=Object(r.a)(e,2),n=s[0],c=(s[1],n[0].sections[0].text);return Object(l.jsx)("section",{className:B.a.landing,id:"accueil",children:Object(l.jsx)(x.a,{className:"pt-5",children:Object(l.jsxs)(p.a,{className:"pt-5 align-items-center",children:[Object(l.jsxs)(b.a,{xs:{span:12,order:2},lg:{span:5,order:1},children:[Object(l.jsx)("img",{src:N,alt:"logo Oners",className:"img-fluid ".concat(B.a.logoOnersColor2x)}),Object(l.jsx)("img",{src:v,alt:"logo Oners",className:"img-fluid ".concat(B.a.logoOnersColor3x)}),Object(l.jsxs)(p.a,{className:"mt-4",children:[Object(l.jsx)(b.a,{xs:12,xl:6,children:Object(l.jsx)(f.a,{href:"#synopsis",className:"".concat(B.a.btnLanding," mb-4"),id:B.a.btnSynopsis,children:Object(l.jsx)("span",{children:"Synopsis"})})}),Object(l.jsx)(b.a,{xs:12,xl:6,children:Object(l.jsx)(f.a,{href:"#personnages",className:"".concat(B.a.btnLanding," mb-4"),id:B.a.btnPersos,children:Object(l.jsx)("span",{children:"Les personnages"})})})]}),Object(l.jsx)(p.a,{children:c.map((function(e,s){return Object(l.jsx)("p",{children:e},s)}))})]}),Object(l.jsxs)(b.a,{xs:{span:12,order:1},lg:{span:7,order:2},children:[Object(l.jsx)("img",{src:L,alt:"personnages principaux oners",className:"img-fluid ".concat(B.a.persosImg2x)}),Object(l.jsx)("img",{src:k,alt:"personnages principaux oners",className:"img-fluid ".concat(B.a.persosImg3x)})]})]})})})},S=n(32),w=n.n(S),I=n.p+"static/media/gasMask.215d5708.png",P=n.p+"static/media/gasMask@2x.8c3cc1c0.png",H=n.p+"static/media/gasMask@3x.0fbae7da.png",M=function(){var e=Object(a.useContext)(j),s=Object(r.a)(e,2),n=s[0],c=(s[1],n[0].sections[1].text);return Object(l.jsx)("section",{id:"synopsis",className:w.a.synopsisBg,children:Object(l.jsx)(x.a,{className:"py-5",children:Object(l.jsxs)(p.a,{className:"align-items-center",children:[Object(l.jsx)(b.a,{xs:{span:12,order:2},lg:{span:6,order:1},className:"text-center",children:Object(l.jsx)("img",{src:I,srcSet:"".concat(P," 2x, ").concat(H," 3x"),alt:"masque \xe0 gaz",className:"img-fluid",id:w.a.gasMask})}),Object(l.jsxs)(b.a,{xs:{span:12,order:1},lg:{span:6,order:2},children:[Object(l.jsx)(p.a,{children:Object(l.jsx)("h1",{className:"".concat(w.a.synopsisH1," mb-3"),children:"Synopsis"})}),Object(l.jsx)(p.a,{children:c.map((function(e,s){return Object(l.jsx)("p",{children:e},s)}))})]})]})})})},A=n(36),T=n.n(A),J=function(){return Object(l.jsx)("section",{id:"personnages",className:T.a.personnagesBg,children:Object(l.jsxs)(x.a,{className:"py-5",children:[Object(l.jsx)(p.a,{children:Object(l.jsx)("h1",{className:T.a.personnagesH1,children:"Personnages"})}),Object(l.jsx)(p.a,{children:Object(l.jsx)(b.a,{})})]})})};var F=function(){return Object(l.jsx)(g,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{children:Object(l.jsx)(u,{})}),Object(l.jsxs)("main",{children:[Object(l.jsx)(C,{}),Object(l.jsx)(M,{}),Object(l.jsx)(J,{})]})]})})},E=n(48);t.a.render(Object(l.jsx)(E.a,{children:Object(l.jsx)(F,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.2dadd165.chunk.js.map