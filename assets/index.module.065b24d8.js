import{r as t}from"./index.b9cbfd06.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function u(e,o){typeof e=="function"?e(o):e!=null&&(e.current=o)}function d(...e){return o=>e.forEach(n=>u(n,o))}function E(...e){return t.exports.useCallback(d(...e),e)}const $=t.exports.forwardRef((e,o)=>{const{children:n,...r}=e,l=t.exports.Children.toArray(n),s=l.find(m);if(s){const c=s.props.children,i=l.map(p=>p===s?t.exports.Children.count(c)>1?t.exports.Children.only(null):t.exports.isValidElement(c)?c.props.children:null:p);return t.exports.createElement(f,a({},r,{ref:o}),t.exports.isValidElement(c)?t.exports.cloneElement(c,void 0,i):null)}return t.exports.createElement(f,a({},r,{ref:o}),n)});$.displayName="Slot";const f=t.exports.forwardRef((e,o)=>{const{children:n,...r}=e;return t.exports.isValidElement(n)?t.exports.cloneElement(n,{...h(r,n.props),ref:d(o,n.ref)}):t.exports.Children.count(n)>1?t.exports.Children.only(null):null});f.displayName="SlotClone";const x=({children:e})=>t.exports.createElement(t.exports.Fragment,null,e);function m(e){return t.exports.isValidElement(e)&&e.type===x}function h(e,o){const n={...o};for(const r in o){const l=e[r],s=o[r];/^on[A-Z]/.test(r)?l&&s?n[r]=(...i)=>{s(...i),l(...i)}:l&&(n[r]=l):r==="style"?n[r]={...l,...s}:r==="className"&&(n[r]=[l,s].filter(Boolean).join(" "))}return{...e,...n}}export{$,a as _,E as a};
//# sourceMappingURL=index.module.065b24d8.js.map
