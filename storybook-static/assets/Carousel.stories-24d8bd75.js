import{j as p}from"./jsx-runtime-6eef64cc.js";import{r as e}from"./index-c013ead5.js";import{A as k}from"./Arrow-20336a8f.js";import{B as W}from"./Button-88339172.js";import{m as Z}from"./index-f82cbd1b.js";import{u as K,f as ee,a as te,P as re,L as ne,m as se}from"./motion-dae81d18.js";import"./_commonjsHelpers-725317a4.js";function T(){const n=e.useRef(!1);return K(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function oe(){const n=T(),[o,t]=e.useState(0),r=e.useCallback(()=>{n.current&&t(o+1)},[o]);return[e.useCallback(()=>ee.postRender(r),[r]),o]}class ae extends e.Component{getSnapshotBeforeUpdate(o){const t=this.props.childRef.current;if(t&&o.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ie({children:n,isPresent:o}){const t=e.useId(),r=e.useRef(null),s=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:f,height:m,top:a,left:g}=s.current;if(o||!r.current||!f||!m)return;r.current.dataset.motionPopId=t;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${m}px !important;
            top: ${a}px !important;
            left: ${g}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[o]),e.createElement(ae,{isPresent:o,childRef:r,sizeRef:s},e.cloneElement(n,{ref:r}))}const I=({children:n,initial:o,isPresent:t,onExitComplete:r,custom:s,presenceAffectsLayout:f,mode:m})=>{const a=te(ue),g=e.useId(),u=e.useMemo(()=>({id:g,initial:o,isPresent:t,custom:s,onExitComplete:i=>{a.set(i,!0);for(const c of a.values())if(!c)return;r&&r()},register:i=>(a.set(i,!1),()=>a.delete(i))}),f?void 0:[t]);return e.useMemo(()=>{a.forEach((i,c)=>a.set(c,!1))},[t]),e.useEffect(()=>{!t&&!a.size&&r&&r()},[t]),m==="popLayout"&&(n=e.createElement(ie,{isPresent:t},n)),e.createElement(re.Provider,{value:u},n)};function ue(){return new Map}function ce(n){return e.useEffect(()=>()=>n(),[])}const y=n=>n.key||"";function le(n,o){n.forEach(t=>{const r=y(t);o.set(r,t)})}function me(n){const o=[];return e.Children.forEach(n,t=>{e.isValidElement(t)&&o.push(t)}),o}const de=({children:n,custom:o,initial:t=!0,onExitComplete:r,exitBeforeEnter:s,presenceAffectsLayout:f=!0,mode:m="sync"})=>{const a=e.useContext(ne).forceRender||oe()[0],g=T(),u=me(n);let i=u;const c=e.useRef(new Map).current,h=e.useRef(i),x=e.useRef(new Map).current,_=e.useRef(!0);if(K(()=>{_.current=!1,le(u,x),h.current=i}),ce(()=>{_.current=!0,x.clear(),c.clear()}),_.current)return e.createElement(e.Fragment,null,i.map(l=>e.createElement(I,{key:y(l),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:f,mode:m},l)));i=[...i];const E=h.current.map(y),O=u.map(y),G=E.length;for(let l=0;l<G;l++){const d=E[l];O.indexOf(d)===-1&&!c.has(d)&&c.set(d,void 0)}return m==="wait"&&c.size&&(i=[]),c.forEach((l,d)=>{if(O.indexOf(d)!==-1)return;const b=x.get(d);if(!b)return;const J=E.indexOf(d);let w=l;if(!w){const Q=()=>{x.delete(d),c.delete(d);const X=h.current.findIndex(Y=>Y.key===d);if(h.current.splice(X,1),!c.size){if(h.current=u,g.current===!1)return;a(),r&&r()}};w=e.createElement(I,{key:y(b),isPresent:!1,onExitComplete:Q,custom:o,presenceAffectsLayout:f,mode:m},b),c.set(d,w)}i.splice(J,0,w)}),i=i.map(l=>{const d=l.key;return c.has(d)?l:e.createElement(I,{key:y(l),isPresent:!0,presenceAffectsLayout:f,mode:m},l)}),e.createElement(e.Fragment,null,c.size?i:i.map(l=>e.cloneElement(l)))},fe="_wrapper_hmg26_90",pe="_imageWrapper_hmg26_96",ge="_image_hmg26_96",he="_buttonsWrapper_hmg26_116",xe="_dotsWrapper_hmg26_127",ve="_btnDots_hmg26_135",v={wrapper:fe,imageWrapper:pe,image:ge,buttonsWrapper:he,dotsWrapper:xe,btnDots:ve},ye=n=>{const[o,t]=e.useState(0),[r,s]=e.useState(!1),[f,m]=e.useState(null),a=e.useRef(null),g=h=>{t(h),Z.play()},u=()=>{a.current&&(a.current.addEventListener("mouseover",()=>s(!0)),a.current.addEventListener("mouseleave",()=>s(!1)))};function i(){m("left"),t(o===0?n.length-1:x=>--x)}return{increment:e.useCallback(()=>{m("right");const h=n.length-1===o;t(h?0:x=>++x)},[n.length,o]),decrement:i,direction:f,isHovering:r,updateHover:u,carouselRef:a,selectedItem:o,updateSelectedImage:g}},j=({timer:n=5e3,showDots:o=!0,showPrevNext:t=!0,...r})=>{const s=ye(r.images);e.useEffect(()=>{if(r.autoPlay&&(s.updateHover(),!s.isHovering&&r.stopOnHover)){const a=setInterval(()=>s.increment(),n);return()=>clearInterval(a)}},[s,r.autoPlay,r.stopOnHover,n]);const f=()=>r.images.map((a,g)=>{const u=g===s.selectedItem;return p.jsx("button",{className:v.btnDots,onClick:()=>s.updateSelectedImage(g),"aria-label":`button to select image ${s.selectedItem+1}`,style:{background:`${u?"#333333":""}`}})}),m=()=>p.jsxs("div",{className:v.buttonsWrapper,children:[p.jsx(W,{noFullScreen:!0,"aria-label":"button to preview the image",onClick:s.decrement,children:p.jsx(k,{variant:!0,outline:!0,orientation:"left"})}),p.jsx(W,{noFullScreen:!0,"aria-label":"button to go to next image",onClick:s.increment,children:p.jsx(k,{variant:!0,outline:!0})})]});return p.jsxs("div",{ref:s.carouselRef,className:v.wrapper,children:[p.jsx("div",{className:v.imageWrapper,children:p.jsx(de,{children:p.jsx(se.img,{initial:{x:s.direction==="left"?100:-100},animate:{x:0},exit:{x:s.direction==="right"?100:-100},transition:{type:"keyframes"},className:v.image,src:r.images[s.selectedItem],alt:`carousel ${s.selectedItem}`},s.selectedItem)},s.selectedItem)}),o&&p.jsx("div",{className:v.dotsWrapper,children:f()}),t&&m()]})};try{j.displayName="Carousel",j.__docgenInfo={description:"",displayName:"Carousel",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"string[]"}},autoPlay:{defaultValue:null,description:"",name:"autoPlay",required:!1,type:{name:"boolean"}},timer:{defaultValue:{value:"5000"},description:"",name:"timer",required:!1,type:{name:"number"}},showDots:{defaultValue:{value:"true"},description:"",name:"showDots",required:!1,type:{name:"boolean"}},showPrevNext:{defaultValue:{value:"true"},description:"",name:"showPrevNext",required:!1,type:{name:"boolean"}},stopOnHover:{defaultValue:null,description:"",name:"stopOnHover",required:!1,type:{name:"boolean"}}}}}catch{}const H=""+new URL("image-2847c635.jfif",import.meta.url).href,N=""+new URL("image2-84d229d3.jfif",import.meta.url).href,D=""+new URL("image3-beef29e5.jfif",import.meta.url).href,L=""+new URL("image4-1fa56972.jfif",import.meta.url).href,S=""+new URL("image5-aaaff799.jfif",import.meta.url).href,Ie={title:"Design System/components/Carousel",component:j},C={args:{images:[H,N,D,L,S],autoPlay:!1,stopOnHover:!0,showDots:!0,showPrevNext:!0,timer:1e3}},P={args:{images:[H,N,D,L,S],autoPlay:!0,stopOnHover:!0,showDots:!0,showPrevNext:!0,timer:1e3}},R={args:{images:[H,N,D,L,S],autoPlay:!0,stopOnHover:!0,showDots:!1,showPrevNext:!1,timer:1e3}};var M,F,U;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    images: [image, image2, image3, image4, image5],
    autoPlay: false,
    stopOnHover: true,
    showDots: true,
    showPrevNext: true,
    timer: 1000
  }
}`,...(U=(F=C.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var $,z,V;P.parameters={...P.parameters,docs:{...($=P.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    images: [image, image2, image3, image4, image5],
    autoPlay: true,
    stopOnHover: true,
    showDots: true,
    showPrevNext: true,
    timer: 1000
  }
}`,...(V=(z=P.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var q,A,B;R.parameters={...R.parameters,docs:{...(q=R.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    images: [image, image2, image3, image4, image5],
    autoPlay: true,
    stopOnHover: true,
    showDots: false,
    showPrevNext: false,
    timer: 1000
  }
}`,...(B=(A=R.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const je=["Primary","AutoPlay","HiddenInfos"];export{P as AutoPlay,R as HiddenInfos,C as Primary,je as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Carousel.stories-24d8bd75.js.map