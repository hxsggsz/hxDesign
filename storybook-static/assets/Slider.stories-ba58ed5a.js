import{j as D}from"./jsx-runtime-6eef64cc.js";import{r as w}from"./index-c013ead5.js";import{a as re,M as ge,b as pe,i as he,u as ye,c as ae,f as se,d as R,e as B,g as Ve,h as Se,j as be,S as Ae,H as ve,v as q,s as we,k as xe,l as ke,n as Ee,o as _e,p as De,r as Me,q as Ce,t as Te,w as Be,x as Pe,y as oe,z as Re,m as qe}from"./motion-dae81d18.js";import"./_commonjsHelpers-725317a4.js";function ie(e){const t=re(()=>pe(e)),{isStatic:n}=w.useContext(ge);if(n){const[,r]=w.useState(e);w.useEffect(()=>t.on("change",r),[])}return t}const je=e=>typeof e=="object"&&e.mix,ze=e=>je(e)?e.mix:void 0;function Ne(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],a=e[1+n],s=e[2+n],o=e[3+n],c=he(a,s,{mixer:ze(s[0]),...o});return t?c(r):c}function z(e,t){const n=ie(t()),r=()=>n.set(t());return r(),ye(()=>{const a=()=>se.update(r,!1,!0),s=e.map(o=>o.on("change",a));return()=>{s.forEach(o=>o()),ae(r)}}),n}function Ke(e){R.current=[],e();const t=z(R.current,e);return R.current=void 0,t}function Le(e,t,n,r){if(typeof e=="function")return Ke(e);const a=typeof t=="function"?t:Ne(t,n,r);return Array.isArray(e)?X(e,a):X([e],([s])=>a(s))}function X(e,t){const n=re(()=>[]);return z(e,()=>{n.length=0;const r=e.length;for(let a=0;a<r;a++)n[a]=e[a].get();return t(n)})}function Fe(e,...t){const n=e.length;function r(){let a="";for(let s=0;s<n;s++){a+=e[s];const o=t[s];o&&(a+=B(o)?o.get():o)}return a}return z(t.filter(B),r)}function ue(e,t,n){var r;if(typeof e=="string"){let a=document;t&&(Ve(!!t.current),a=t.current),n?((r=n[e])!==null&&r!==void 0||(n[e]=a.querySelectorAll(e)),e=n[e]):e=a.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}function Ge(e,t){let n;const r=()=>{const{currentTime:a}=t,o=(a===null?0:a.value)/100;n!==o&&e(o),n=o};return se.update(r,!0),()=>ae(r)}const Ie=Se(()=>window.ScrollTimeline!==void 0);class le{constructor(t){this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t){const n=this.animations.map(r=>{if(Ie()&&r.attachTimeline)r.attachTimeline(t);else return r.pause(),Ge(a=>{r.time=r.duration*a},t)});return()=>{n.forEach((r,a)=>{r&&r(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function He(e){return typeof e=="object"&&!Array.isArray(e)}function Oe(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=be(e)?new Ae(t,{enableHardwareAcceleration:!1}):new ve(t,{enableHardwareAcceleration:!0});n.mount(e),q.set(e,n)}function We(e,t=100){const n=we({keyframes:[0,t],...e}),r=Math.min(xe(n),ke);return{type:"keyframes",ease:a=>n.next(r*a).value/t,duration:Ee(r)}}function $(e,t,n,r){var a;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?n:(a=r.get(t))!==null&&a!==void 0?a:e}const Xe=(e,t,n)=>{const r=t-e;return((n-e)%r+r)%r+e};function $e(e,t){return _e(e)?e[Xe(0,e.length,t)]:e}function Ue(e,t,n){for(let r=0;r<e.length;r++){const a=e[r];a.at>t&&a.at<n&&(Me(e,a),r--)}}function Je(e,t,n,r,a,s){Ue(e,a,s);for(let o=0;o<t.length;o++)e.push({value:t[o],at:De(a,s,r[o]),easing:$e(n,o)})}function Qe(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const Ye="easeInOut";function Ze(e,{defaultTransition:t={},...n}={},r){const a=t.duration||.3,s=new Map,o=new Map,c={},f=new Map;let m=0,l=0,V=0;for(let x=0;x<e.length;x++){const h=e[x];if(typeof h=="string"){f.set(h,l);continue}else if(!Array.isArray(h)){f.set(h.name,$(l,h.at,m,f));continue}let[A,S,i={}]=h;i.at!==void 0&&(l=$(l,i.at,m,f));let u=0;const d=(g,y,b,E=0,_=0)=>{const p=et(g),{delay:P=0,times:k=Te(p),type:fe="keyframes",...de}=y;let{ease:N=t.ease||"easeOut",duration:v}=y;const K=typeof P=="function"?P(E,_):P,L=p.length;if(L<=2&&fe==="spring"){let H=100;if(L===2&&rt(p)){const me=p[1]-p[0];H=Math.abs(me)}const O={...de};v!==void 0&&(O.duration=Pe(v));const W=We(O,H);N=W.ease,v=W.duration}v??(v=a);const F=l+K,G=F+v;k.length===1&&k[0]===0&&(k[1]=1);const I=k.length-p.length;I>0&&Be(k,I),p.length===1&&p.unshift(null),Je(b,p,N,k,F,G),u=Math.max(K+v,u),V=Math.max(G,V)};if(B(A)){const g=U(A,o);d(S,i,J("default",g))}else{const g=ue(A,r,c),y=g.length;for(let b=0;b<y;b++){S=S,i=i;const E=g[b],_=U(E,o);for(const p in S)d(S[p],tt(i,p),J(p,_),b,y)}m=l,l+=u}}return o.forEach((x,h)=>{for(const A in x){const S=x[A];S.sort(Qe);const i=[],u=[],d=[];for(let y=0;y<S.length;y++){const{at:b,value:E,easing:_}=S[y];i.push(E),u.push(Ce(0,V,b)),d.push(_||"easeOut")}u[0]!==0&&(u.unshift(0),i.unshift(i[0]),d.unshift(Ye)),u[u.length-1]!==1&&(u.push(1),i.push(null)),s.has(h)||s.set(h,{keyframes:{},transition:{}});const g=s.get(h);g.keyframes[A]=i,g.transition[A]={...t,duration:V,ease:d,times:u,...n}}}),s}function U(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function J(e,t){return t[e]||(t[e]=[]),t[e]}function et(e){return Array.isArray(e)?e:[e]}function tt(e,t){return e[t]?{...e,...e[t]}:{...e}}const nt=e=>typeof e=="number",rt=e=>e.every(nt);function ce(e,t,n,r){const a=ue(e,r),s=a.length,o=[];for(let c=0;c<s;c++){const f=a[c];q.has(f)||Oe(f);const m=q.get(f),l={...n};typeof l.delay=="function"&&(l.delay=l.delay(c,s)),o.push(...Re(m,{...t,transition:l},{}))}return new le(o)}const at=e=>Array.isArray(e)&&Array.isArray(e[0]);function st(e,t,n){const r=[];return Ze(e,t,n).forEach(({keyframes:s,transition:o},c)=>{let f;B(c)?f=oe(c,s.default,o.default):f=ce(c,s,o),r.push(f)}),new le(r)}const ot=e=>{function t(n,r,a){let s;return at(n)?s=st(n,r,e):He(r)?s=ce(n,r,a,e):s=oe(n,r,a),e&&e.animations.push(s),s}return t},it=ot(),ut="_track_poeqs_90",lt="_trackProgress_poeqs_99",ct="_button_poeqs_104",ft="_trackClick_poeqs_113",M={track:ut,trackProgress:lt,button:ct,trackClick:ft},j=({min:e=0,max:t=100,...n})=>{const a=ie(n.defaultValue??0),s=Le(a,i=>i+12/2),o=Fe`
    linear-gradient(90deg, #423f40 ${s.get()}px, #7f7d7e 0)`,c=w.useRef(null),f=w.useRef(null),m=w.useRef(null),[l,V]=w.useState(n.sliderValue??n.defaultValue??0);function x(i,u,d){return Math.max(u,Math.min(i,d))}function h(){if(!c.current||!m.current)return;const i=c.current.getBoundingClientRect(),u=i.x+i.width/2,d=m.current.getBoundingClientRect(),g=(u-d.x)/d.width;V(g*(t-e))}function A(i){if(!m.current)return;const{left:u,width:d}=m.current.getBoundingClientRect(),g=i.pageX-u,y=x(g/d,0,1),b=y*(t-e);V(b),it(a,y*d)}function S(i){switch(i.key){case"ArrowLeft":if(l<=e)return;V(u=>u-=1);break;case"ArrowRight":if(l>=t)return;V(u=>u+=1);break;case"Home":V(e);break;case"End":V(t);break}}return w.useEffect(()=>{if(!m.current)return;const i=l/(t-e),u=m.current.getBoundingClientRect();a.set(i*u.width)},[a,t,e,l]),w.useEffect(()=>{n.setSliderValue&&n.setSliderValue(l)},[n,l]),D.jsxs("div",{role:"slider","aria-valuemin":e,"aria-valuemax":t,ref:f,"aria-valuenow":l,className:M.track,"aria-orientation":"horizontal",style:{background:o.get()},"aria-valuetext":`the value of this slider is: ${l}`,children:[D.jsx("div",{className:M.trackProgress,ref:m,style:{left:12/2,right:12/2}}),D.jsx(qe.button,{drag:"x",ref:c,dragElastic:!1,onDrag:h,dragMomentum:!1,style:{width:12,height:12,x:a},className:M.button,onKeyDown:S,"data-testid":"trigger-button",dragConstraints:f,whileDrag:{cursor:"grabbing"},"aria-label":"button that trigger the slider"}),D.jsx("div",{"data-testid":"click-slider",onPointerDown:A,className:M.trackClick})]})};try{j.displayName="Slider",j.__docgenInfo={description:"",displayName:"Slider",props:{min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"number"}},sliderValue:{defaultValue:null,description:"",name:"sliderValue",required:!0,type:{name:"number | undefined"}},setSliderValue:{defaultValue:null,description:"",name:"setSliderValue",required:!0,type:{name:"Dispatch<SetStateAction<number>> | undefined"}}}}}catch{}const ht={title:"Design System/components/Slider",component:j},C={args:{min:0,max:100,sliderValue:void 0,setSliderValue:void 0}},T={args:{min:0,max:100,defaultValue:30,sliderValue:void 0,setSliderValue:void 0}};var Q,Y,Z;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    sliderValue: undefined,
    setSliderValue: undefined
  }
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    defaultValue: 30,
    sliderValue: undefined,
    setSliderValue: undefined
  }
}`,...(ne=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const yt=["Primary","DefautValue"];export{T as DefautValue,C as Primary,yt as __namedExportsOrder,ht as default};
//# sourceMappingURL=Slider.stories-ba58ed5a.js.map