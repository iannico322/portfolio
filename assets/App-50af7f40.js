import{r as n,j as e,O as me,B as fe}from"./index-9111a130.js";const xe={theme:"system",setTheme:()=>null},he=n.createContext(xe);function pe({children:t,defaultTheme:i="system",storageKey:a="vite-ui-theme",...o}){const[r,c]=n.useState(()=>localStorage.getItem(a)||i);n.useEffect(()=>{const u=window.document.documentElement;if(u.classList.remove("light","dark"),r==="system"){const f=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";u.classList.add(f);return}u.classList.add(r)},[r]);const m={theme:r,setTheme:u=>{localStorage.setItem(a,u),c(u)}};return e.jsx(he.Provider,{...o,value:m,children:t})}var d=function(){return d=Object.assign||function(i){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(i[c]=a[c])}return i},d.apply(this,arguments)};function k(t,i,a){var o=n.useRef(i);n.useEffect(function(){o.current=i}),n.useEffect(function(){var r=a===void 0?window:a,c=function(m){return o.current(m)};return r==null||r.addEventListener(t,c),function(){r==null||r.removeEventListener(t,c)}},[t,a])}var ge=function(){var t=n.useState({info:"",Android:function(){return null},BlackBerry:function(){return null},IEMobile:function(){return null},iOS:function(){return null},iPad:function(){return null},OperaMini:function(){return null},any:function(){return!1}}),i=t[0],a=t[1];return n.useEffect(function(){if(typeof navigator<"u"){var o=navigator.userAgent;a(function(r){return d(d({},r),{info:o,Android:function(){return o.match(/Android/i)},BlackBerry:function(){return o.match(/BlackBerry/i)},IEMobile:function(){return o.match(/IEMobile/i)},iOS:function(){return o.match(/iPhone|iPad|iPod/i)},iPad:function(){return!!(o.match(/Mac/)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2)},OperaMini:function(){return o.match(/Opera Mini/i)},any:function(){var c,m,u,f,C;return!!(!((c=r.Android())===null||c===void 0)&&c.length||!((m=r.BlackBerry())===null||m===void 0)&&m.length||!((u=r.iOS())===null||u===void 0)&&u.length||r.iPad()||!((f=r.OperaMini())===null||f===void 0)&&f.length||!((C=r.IEMobile())===null||C===void 0)&&C.length)}})})}},[]),i};function ae(t,i){for(var a=[],o=2;o<arguments.length;o++)a[o-2]=arguments[o];if(typeof i!="function")throw new TypeError("callback must be a function");for(var r=Object(t),c=r.length>>>0,m=a[2],u=0;u<c;u++){var f=r[u];if(i.call(m,f,u,r))return f}}function ve(t){var i=t.clickables,a=i===void 0?["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]:i,o=t.children,r=t.color,c=r===void 0?"220, 90, 90":r,m=t.innerScale,u=m===void 0?.6:m,f=t.innerSize,C=f===void 0?8:f,E=t.innerStyle,I=t.outerAlpha,L=I===void 0?.4:I,M=t.outerScale,V=M===void 0?6:M,P=t.outerSize,T=P===void 0?8:P,D=t.outerStyle,B=t.showSystemCursor,R=B===void 0?!1:B,U=t.trailingSpeed,Z=U===void 0?8:U,y=n.useMemo(function(){return{children:o,color:c,innerScale:u,innerSize:C,innerStyle:E,outerAlpha:L,outerScale:V,outerSize:T,outerStyle:D}},[o,c,u,C,E,L,V,T,D]),h=n.useRef(null),p=n.useRef(null),j=n.useRef(null),$=n.useRef(null),W=n.useState({x:0,y:0}),w=W[0],ie=W[1],F=n.useState(!1),Y=F[0],J=F[1],q=n.useState(y),s=q[0],O=q[1],G=n.useState(!1),z=G[0],g=G[1],X=n.useState(!1),K=X[0],S=X[1],Q=n.useRef(0),ee=n.useRef(0),se=n.useCallback(function(x){var l=x.clientX,v=x.clientY;ie({x:l,y:v}),p.current!==null&&(p.current.style.top="".concat(v,"px"),p.current.style.left="".concat(l,"px")),Q.current=l,ee.current=v},[]),A=n.useCallback(function(x){$.current!==void 0&&(w.x+=(Q.current-w.x)/Z,w.y+=(ee.current-w.y)/Z,h.current!==null&&(h.current.style.top="".concat(w.y,"px"),h.current.style.left="".concat(w.x,"px"))),$.current=x,j.current=requestAnimationFrame(A)},[j]);n.useEffect(function(){return j.current=requestAnimationFrame(A),function(){j.current!==null&&cancelAnimationFrame(j.current)}},[A]);var te=function(x,l){return"".concat(parseInt(String(x*l)),"px")},b=n.useCallback(function(x,l,v){x&&(x.style.height=te(l,v),x.style.width=te(l,v))},[]),le=n.useCallback(function(){return g(!0)},[]),ce=n.useCallback(function(){return g(!1)},[]),ue=n.useCallback(function(){return J(!0)},[]),de=n.useCallback(function(){return J(!1)},[]);k("mousemove",se),k("mousedown",le),k("mouseup",ce),k("mouseover",ue),k("mouseout",de),n.useEffect(function(){z?(b(p.current,s.innerSize,s.innerScale),b(h.current,s.outerSize,s.outerScale)):(b(p.current,s.innerSize,1),b(h.current,s.outerSize,1))},[s.innerSize,s.innerScale,s.outerSize,s.outerScale,b,z]),n.useEffect(function(){K&&(b(p.current,s.innerSize,s.innerScale*1.2),b(h.current,s.outerSize,s.outerScale*1.4))},[s.innerSize,s.innerScale,s.outerSize,s.outerScale,b,K]),n.useEffect(function(){p.current==null||h.current==null||(Y?(p.current.style.opacity="1",h.current.style.opacity="1"):(p.current.style.opacity="0",h.current.style.opacity="0"))},[Y]),n.useEffect(function(){var x=document.querySelectorAll(a.map(function(l){return typeof l=="object"&&(l!=null&&l.target)?l.target:l??""}).join(","));return x.forEach(function(l){R||(l.style.cursor="none");var v=typeof a=="object"?ae(a,function(_){return typeof _=="object"&&l.matches(_.target)}):{},H=d(d({},y),v);l.addEventListener("mouseover",function(){g(!0),O(H)}),l.addEventListener("click",function(){g(!0),S(!1)}),l.addEventListener("mousedown",function(){S(!0)}),l.addEventListener("mouseup",function(){g(!0)}),l.addEventListener("mouseout",function(){g(!1),S(!1),O(y)})}),function(){x.forEach(function(l){var v=typeof a=="object"?ae(a,function(_){return typeof _=="object"&&l.matches(_.target)}):{},H=d(d({},y),v);l.removeEventListener("mouseover",function(){g(!0),O(H)}),l.removeEventListener("click",function(){g(!0),S(!1)}),l.removeEventListener("mousedown",function(){S(!0)}),l.removeEventListener("mouseup",function(){g(!0)}),l.removeEventListener("mouseout",function(){g(!1),S(!1),O(y)})})}},[z,a,R,y]),n.useEffect(function(){typeof window=="object"&&!R&&(document.body.style.cursor="none")},[R]);var ne={zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",borderRadius:"50%",pointerEvents:"none",transform:"translate(-50%, -50%)",transition:"opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"},re={cursorInner:d(d({width:s.children?"auto":s.innerSize,height:s.children?"auto":s.innerSize,backgroundColor:s.children?"transparent":"rgba(".concat(s.color,", 1)")},ne),s.innerStyle&&s.innerStyle),cursorOuter:d(d({width:s.outerSize,height:s.outerSize,backgroundColor:"rgba(".concat(s.color,", ").concat(s.outerAlpha,")")},ne),s.outerStyle&&s.outerStyle)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:h,style:re.cursorOuter}),e.jsx("div",d({ref:p,style:re.cursorInner},{children:e.jsx("div",d({style:{opacity:s.children?1:0,transition:"opacity 0.3s ease-in-out"}},{children:s.children}))}))]})}function Ce(t){var i=t.children,a=t.clickables,o=t.color,r=t.innerScale,c=t.innerSize,m=t.innerStyle,u=t.outerAlpha,f=t.outerScale,C=t.outerSize,E=t.outerStyle,I=t.showSystemCursor,L=t.trailingSpeed,M=ge();return typeof navigator<"u"&&M.any()?e.jsx(e.Fragment,{}):e.jsx(ve,d({clickables:a,color:o,innerScale:r,innerSize:c,innerStyle:m,outerAlpha:u,outerScale:f,outerSize:C,outerStyle:E,showSystemCursor:I,trailingSpeed:L},{children:i}))}function N(t,i){if(t==null)return{};var a={},o=Object.keys(t),r,c;for(c=0;c<o.length;c++)r=o[c],!(i.indexOf(r)>=0)&&(a[r]=t[r]);return a}var be=["color"],ye=n.forwardRef(function(t,i){var a=t.color,o=a===void 0?"currentColor":a,r=N(t,be);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:i}),n.createElement("path",{d:"M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",fill:o,fillRule:"evenodd",clipRule:"evenodd"}))}),we=["color"],Se=n.forwardRef(function(t,i){var a=t.color,o=a===void 0?"currentColor":a,r=N(t,we);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:i}),n.createElement("path",{d:"M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z",fill:o,fillRule:"evenodd",clipRule:"evenodd"}))}),je=["color"],oe=n.forwardRef(function(t,i){var a=t.color,o=a===void 0?"currentColor":a,r=N(t,je);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:i}),n.createElement("path",{d:"M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z",fill:o,fillRule:"evenodd",clipRule:"evenodd"}))}),_e=["color"],ke=n.forwardRef(function(t,i){var a=t.color,o=a===void 0?"currentColor":a,r=N(t,_e);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:i}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z",fill:o}))}),Ne=["color"],Ee=n.forwardRef(function(t,i){var a=t.color,o=a===void 0?"currentColor":a,r=N(t,Ne);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:i}),n.createElement("path",{d:"M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z",fill:o,fillRule:"evenodd",clipRule:"evenodd"}))});const Ie="/portfolio/assets/gojo-1-58b695d3.webp";function Le({link:t,img:i,title:a,languanges:o,dateDeploy:r}){return e.jsxs("a",{href:t,target:"_blank",className:"  w-1/3  max-w-[90%] relative ProjectCard flex flex-col gap-1 hover:translate-y-[-10px] duration-700 transition-all",children:[e.jsx("img",{src:i,className:" CardImage object-cover w-full h-[200px]  ",alt:a}),e.jsx("p",{className:" mt-4 text-2xl font-bold truncate",children:a}),e.jsx("div",{className:" flex gap-2 flex-wrap uppercase font-semibold",children:o?o.map(c=>e.jsx("span",{className:" px-3 text-xs py-2 bg-primary rounded-full",children:c})):""}),e.jsxs("div",{className:"header relative self-end",children:[e.jsx("span",{children:"Deployed: "}),e.jsx("span",{children:r})]})]})}const Me="/portfolio/assets/1-494769fb.webp",Re="/portfolio/assets/2-4da20634.webp",Oe="/portfolio/assets/3-f86054ab.webp",ze="/portfolio/assets/4-444a183a.webp",Ae="/portfolio/assets/5-f382fe0d.webp",He="/portfolio/assets/6-17b1309b.webp",Ve="/portfolio/assets/7-d8c73c93.webp";function Te(){n.useEffect(()=>{localStorage.setItem("vite-ui-theme","dark")},[]);const[t]=n.useState([{img:Me,title:"ITSY",languanges:["Reactsx","React Native","Django","tailwind"],dateDeploy:"12-20-23"},{img:Re,title:"LICEO-CITC",languanges:["HTML","CSS","JS"],dateDeploy:"unknown"},{img:Ae,title:"UMAP",languanges:["React JS","React Native","Django","tailwind"],dateDeploy:"unknown"},{img:Oe,title:"PH-Wonders",languanges:["HTML","CSS","JS"],dateDeploy:"unknown"},{img:ze,title:"WOW-USTP",languanges:["HTML","SCSS","JS"],dateDeploy:"unknown"},{img:He,title:"Weeknd Album",languanges:["HTML","SCSS","JS"],dateDeploy:"unknown"},{img:Ve,title:"Dark Gold",languanges:["HTML","SCSS","JS"],dateDeploy:"unknown"}]);return e.jsx(pe,{children:e.jsxs("div",{className:" box-border flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-[#dadada87]  ",children:[e.jsx(Ce,{color:"243,243,243"}),e.jsxs("div",{className:" animate__animated animate__fadeInDown fixed z-10 flex w-full items-center justify-around border  border-b-[1px] border-accent/60 bg-background/30 py-3 backdrop-blur-md",children:[e.jsx("a",{href:"#Nico",className:" flex  items-center gap-10 sm:gap-8",children:e.jsxs("h1",{className:" font-inter text-4xl font-black leading-[30px] text-primary  sm:text-2xl sm:leading-[20px] ",children:["N ",e.jsx("span",{className:" ml-[2px] text-accent-foreground",children:"I"})," ",e.jsx("br",{})," ",e.jsx("span",{children:"CO"})," "]})}),e.jsxs("nav",{className:" flex gap-10 text-accent-foreground sm:gap-5",children:[e.jsx("a",{className:" animate__animated animate__faster animate__fadeInDown animate__delay-1s underline-offset-4 transition-all duration-200 ease-out hover:text-primary hover:underline hover:decoration-primary/40 sm:text-xs	",href:"/react-vite-supreme/page2",children:"About"}),e.jsx("a",{className:" animate__animated animate__faster animate__fadeInDown animate__delay-2s  underline-offset-4 transition-all duration-200 ease-out hover:text-primary hover:underline hover:decoration-primary/40 sm:text-xs",href:"#Work",children:"Work"}),e.jsx("a",{className:" animate__animated animate__faster animate__fadeInDown animate__delay-3s underline-offset-4 transition-all duration-200 ease-out hover:text-primary hover:underline hover:decoration-primary/40 sm:text-xs",href:"/react-vite-supreme/contact",children:"Contact"})]})]}),e.jsx(me,{}),e.jsx("div",{className:"   absolute flex h-[120vh] w-full overflow-hidden    ",children:e.jsx("div",{className:"  gradient z-1  absolute  bottom-0 right-0 m-[15%]   "})}),e.jsxs("div",{id:"Nico",className:"relative  box-border flex h-screen w-full flex-row items-center justify-around gap-0  overflow-hidden bg-background/0 backdrop-blur-lg  sm:flex-col sm:items-start sm:justify-around  ",children:[e.jsx("div",{className:" animate__animated  animate__jackInTheBox animate__delay-1s absolute z-0 ",children:e.jsx("img",{className:" pointer-events-none h-[900px] object-contain md:scale-[1.3] sm:bottom-0 sm:mt-[30vh] sm:h-[90vw]   ",src:Ie,alt:""})}),e.jsxs("div",{className:" relative mt-60 flex h-[60%] flex-col gap-20  sm:ml-4  sm:mt-0 sm:h-0 sm:w-full  ",children:[e.jsxs("div",{className:" flex flex-col  gap-1",children:[e.jsxs("h1",{className:" animate__animated animate__fadeInUp text-[64px]  font-semibold leading-[60px] text-accent-foreground  sm:text-[30px] sm:leading-[40px]    ",children:["Hi,",e.jsx("br",{}),"I’m"," ",e.jsx("button",{className:" text-primary backdrop-blur-lg ",children:"Nico"})," "]}),e.jsxs("p",{className:" animate__animated animate__fadeInLeft animate__fast text-[24px] font-light leading-[25px] text-accent-foreground sm:text-[11px] sm:leading-[15px]",children:["Front-end Developer and UI ",e.jsx("br",{className:" sm:hidden"})," ","Designer"]}),e.jsxs(fe,{size:"icon",className:" mt-7 h-12 w-[40%] items-center   gap-1 rounded-lg bg-accent-foreground text-lg text-accent backdrop-blur-md transition-all duration-700 hover:translate-x-2 hover:bg-accent-foreground/70  active:translate-x-2 sm:mt-2 sm:h-10 sm:w-[30%] sm:text-sm ",children:[e.jsx("span",{className:" ml-2 mt-1",children:"Hire Me"}),e.jsx(ye,{className:"  h-8 w-8 text-lg text-accent hover:text-accent/90 "})]})]}),e.jsxs("div",{className:" absolute bottom-0 flex flex-col gap-5 sm:fixed sm:right-0 sm:mb-4 sm:mr-4",children:[e.jsx("a",{href:"https://github.com/iannico322",target:"_blank",children:e.jsx(oe,{className:"   animate__animated animate__fadeInUp animate__faster animate__delay-.9s h-8  w-8 text-lg text-accent-foreground hover:text-accent-foreground/70 "})}),e.jsx("a",{href:"https://www.instagram.com/ianian_niconico/",target:"_blank",children:e.jsx(ke,{className:" animate__animated animate__fadeInUp animate__faster animate__delay-.9s h-8  w-8 text-lg text-accent-foreground hover:text-accent-foreground/70 "})}),e.jsx("a",{href:"https://www.linkedin.com/in/ian-nico",target:"_blank",children:e.jsx(Ee,{className:"animate__animated animate__fadeInUp animate__faster animate__delay-.9s h-8  w-8 text-lg text-accent-foreground hover:text-accent-foreground/70 "})})]})]}),e.jsx("div",{className:"relative flex min-h-[10%] flex-col justify-start gap-20  sm:ml-4 sm:mt-0   sm:min-h-0 sm:gap-1",children:e.jsxs("div",{className:" flex flex-col  gap-1",children:[e.jsx("p",{className:" animate__animated animate__fadeInUp animate__delay-.8s text-xl font-semibold text-primary  sm:text-sm",children:"Explore on"}),e.jsxs("div",{className:" flex flex-col gap-8 sm:gap-2 ",children:[e.jsxs("h1",{className:"  animate__animated animate__fadeInUp animate__delay-.5s   text-[34px] font-semibold leading-[38px]  text-accent-foreground sm:text-base ",children:["Based in Cagayan de Oro ",e.jsx("br",{}),"i’m developer and ",e.jsx("br",{}),"UI/UX designer."]}),e.jsxs("p",{className:" animate__animated animate__fadeInRight animate__delay-1s  text-[16px] font-light leading-[25px] text-accent-foreground sm:text-xs ",children:["Hey are looking for a Front-end or Designer ",e.jsx("br",{})," to build your brand and grow you business?",e.jsx("br",{}),"let’s shake hands with me."]})]}),e.jsxs("a",{href:"./Google-Cloud-Skill-badges.pdf",download:!0,className:" animate__animated animate__fadeIn animate__delay-1s mt-7   flex w-[40%]  items-center justify-center bg-primary/10  gap-2 rounded-md  py-2 font-inter  text-lg text-primary backdrop-blur-lg transition-all duration-200  hover:bg-primary/30  hover:text-accent-foreground active:translate-y-2 sm:mt-3  sm:w-[60%] sm:text-xs ",children:["Download CV",e.jsx(Se,{className:" mb-1   h-5 w-5 text-lg "})]})]})})]}),e.jsxs("div",{id:"Work",className:" relative mb-[70px] box-border flex  min-h-[50vh] w-full flex-col flex-wrap items-center   justify-center  gap-10 justify-self-center  bg-background/0 backdrop-blur-lg flex-grow   ",children:[e.jsxs("h1",{className:" relative top-0 text-4xl mt-[10vh] text-accent-foreground",children:["My ",e.jsx("span",{className:" text-primary font-bold",children:"Works"})," "]}),e.jsx("div",{className:" relative box-border flex  min-h-[50vh] w-[80%] md:w-full flex-row flex-wrap items-center   justify-center  gap-10 justify-self-center  bg-background/0 backdrop-blur-lg flex-grow  ",children:t?t.map(i=>e.jsx(Le,{link:"bit.ly/ITSY",img:i.img,title:i.title,languanges:i.languanges,dateDeploy:i.dateDeploy})):""}),e.jsxs("a",{href:"https://github.com/iannico322",target:"_blank",className:" flex items-center gap-3 text-accent-foreground/80 border border-accent-foreground rounded-lg px-5 py-2 hover:text-accent-foreground/75",children:[" ",e.jsx(oe,{className:"   animate__animated animate__fadeInUp animate__faster animate__delay-.9s h-6  w-6 text-lg text-accent-foreground hover:text-accent-foreground/70  "})," View More in Github"]})]})]})})}export{Te as default};
