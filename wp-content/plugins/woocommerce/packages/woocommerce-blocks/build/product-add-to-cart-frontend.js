(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[5800],{2624:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>He});var s=r(721),o=r(9196),a=r(4184),n=r.n(a),c=r(9307),i=r(5736),l=r(9075);const u=e=>e.is_purchasable||!1;var d=r(9818),p=r(4801);const E={PRISTINE:"pristine",IDLE:"idle",DISABLED:"disabled",PROCESSING:"processing",BEFORE_PROCESSING:"before_processing",AFTER_PROCESSING:"after_processing"},m={status:E.PRISTINE,hasError:!1,quantity:0,processingResponse:null,requestParams:{}},_={SET_PRISTINE:"set_pristine",SET_IDLE:"set_idle",SET_DISABLED:"set_disabled",SET_PROCESSING:"set_processing",SET_BEFORE_PROCESSING:"set_before_processing",SET_AFTER_PROCESSING:"set_after_processing",SET_PROCESSING_RESPONSE:"set_processing_response",SET_HAS_ERROR:"set_has_error",SET_NO_ERROR:"set_no_error",SET_QUANTITY:"set_quantity",SET_REQUEST_PARAMS:"set_request_params"},{SET_PRISTINE:h,SET_IDLE:b,SET_DISABLED:S,SET_PROCESSING:g,SET_BEFORE_PROCESSING:v,SET_AFTER_PROCESSING:R,SET_PROCESSING_RESPONSE:f,SET_HAS_ERROR:y,SET_NO_ERROR:T,SET_QUANTITY:C,SET_REQUEST_PARAMS:w}=_,A=()=>({type:b}),P=(e=!0)=>({type:e?y:T}),{SET_PRISTINE:I,SET_IDLE:O,SET_DISABLED:N,SET_PROCESSING:k,SET_BEFORE_PROCESSING:D,SET_AFTER_PROCESSING:L,SET_PROCESSING_RESPONSE:F,SET_HAS_ERROR:x,SET_NO_ERROR:B,SET_QUANTITY:M,SET_REQUEST_PARAMS:q}=_,{PRISTINE:j,IDLE:Y,DISABLED:Q,PROCESSING:G,BEFORE_PROCESSING:V,AFTER_PROCESSING:K}=E,H=(e=m,{quantity:t,type:r,data:s})=>{let o;switch(r){case I:o=m;break;case O:o=e.status!==Y?{...e,status:Y}:e;break;case N:o=e.status!==Q?{...e,status:Q}:e;break;case M:o=t!==e.quantity?{...e,quantity:t}:e;break;case q:o={...e,requestParams:{...e.requestParams,...s}};break;case F:o={...e,processingResponse:s};break;case k:o=e.status!==G?{...e,status:G,hasError:!1}:e,o=!1===o.hasError?o:{...o,hasError:!1};break;case D:o=e.status!==V?{...e,status:V,hasError:!1}:e;break;case L:o=e.status!==K?{...e,status:K}:e;break;case x:o=e.hasError?e:{...e,hasError:!0},o=e.status===G||e.status===V?{...o,status:Y}:o;break;case B:o=e.hasError?{...e,hasError:!1}:e}return o!==e&&r!==I&&o.status===j&&(o.status=Y),o};let W=function(e){return e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback",e}({});const U={},$=(e=U,{type:t,eventType:r,id:s,callback:o,priority:a})=>{const n=e.hasOwnProperty(r)?new Map(e[r]):new Map;switch(t){case W.ADD_EVENT_CALLBACK:return n.set(s,{priority:a,callback:o}),{...e,[r]:n};case W.REMOVE_EVENT_CALLBACK:return n.delete(s),{...e,[r]:n}}},Z=(e,t)=>(r,s=10)=>{const o=((e,t,r=10)=>({id:Math.floor(Math.random()*Date.now()).toString(),type:W.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:r}))(e,r,s);return t(o),()=>{var r;t((r=e,{id:o.id,type:W.REMOVE_EVENT_CALLBACK,eventType:r}))}},X="add_to_cart_before_processing",J="add_to_cart_after_processing_with_success",z="add_to_cart_after_processing_with_error",ee=e=>({onAddToCartAfterProcessingWithSuccess:Z(J,e),onAddToCartProcessingWithError:Z(z,e),onAddToCartBeforeProcessing:Z(X,e)});var te=r(7884);const re=(e,t)=>e[t]?Array.from(e[t].values()).sort(((e,t)=>e.priority-t.priority)):[];let se=function(e){return e.SUCCESS="success",e.FAIL="failure",e.ERROR="error",e}({});const oe=(e,t)=>(0,te.Kn)(e)&&"type"in e&&e.type===t,ae=e=>oe(e,se.ERROR),ne=e=>oe(e,se.FAIL),ce=e=>(0,te.Kn)(e)&&(0,te.$n)(e,"type"),ie=async(e,t,r)=>{const s=[],o=re(e,t);for(const e of o)try{const t=await Promise.resolve(e.callback(r));if(!ce(t))continue;if(!t.hasOwnProperty("type"))throw new Error("Returned objects from event emitter observers must return an object with a type property");if(ae(t)||ne(t))return s.push(t),s;s.push(t)}catch(e){return console.error(e),s.push({type:se.ERROR}),s}return s},le=(0,c.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:e=>{},onAddToCartAfterProcessingWithError:e=>{},onAddToCartBeforeProcessing:e=>{}},dispatchActions:{resetForm:()=>{},submitForm:()=>{},setQuantity:e=>{},setHasError:e=>{},setAfterProcessing:e=>{},setRequestParams:e=>{}}}),ue=()=>(0,c.useContext)(le),de=({children:e,product:t,showFormElements:r})=>{var s,a,n,_;const[b,y]=(0,c.useReducer)(H,m),[T,I]=(0,c.useReducer)($,{}),O=(0,l.s)(T),{createErrorNotice:N}=(0,d.useDispatch)("core/notices"),{setValidationErrors:k}=(0,d.useDispatch)(p.VALIDATION_STORE_KEY),D=(0,c.useMemo)((()=>({onAddToCartAfterProcessingWithSuccess:ee(I).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:ee(I).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:ee(I).onAddToCartBeforeProcessing})),[I]),L=(0,c.useMemo)((()=>({resetForm:()=>{y({type:h})},submitForm:()=>{y({type:v})},setQuantity:e=>{y((e=>({type:C,quantity:e}))(e))},setHasError:e=>{y(P(e))},setRequestParams:e=>{y((e=>({type:w,data:e}))(e))},setAfterProcessing:e=>{y({type:f,data:e}),y({type:R})}})),[]);(0,c.useEffect)((()=>{const e=b.status,r=!t.id||!u(t);e!==E.DISABLED||r?e!==E.DISABLED&&r&&y({type:S}):y(A())}),[b.status,t,y]),(0,c.useEffect)((()=>{b.status===E.BEFORE_PROCESSING&&(((e,t)=>{const r=(0,d.select)("core/notices").getNotices(t),{removeNotice:s}=(0,d.dispatch)("core/notices");r.filter((e=>"error"===e.status)).forEach((e=>s(e.id,t)))})(0,"wc/add-to-cart"),(async(e,t,r)=>{const s=re(e,t),o=[];for(const e of s)try{const t=await Promise.resolve(e.callback(r));"object"==typeof t&&o.push(t)}catch(e){console.error(e)}return!o.length||o})(O,X,{}).then((e=>{!0!==e?(Array.isArray(e)&&e.forEach((({errorMessage:e,validationErrors:t})=>{e&&N(e,{context:"wc/add-to-cart"}),t&&k(t)})),y(A())):y({type:g})})))}),[b.status,k,N,y,O,null==t?void 0:t.id]),(0,c.useEffect)((()=>{if(b.status===E.AFTER_PROCESSING){const e={processingResponse:b.processingResponse},r=e=>{let t=!1;return e.forEach((e=>{const{message:r,messageContext:s}=e;(ae(e)||ne(e))&&r&&(t=!0,N(r,s?{context:s}:void 0))})),t};if(b.hasError)return void ie(O,z,e).then((s=>{if(!r(s)){var o;const r=(null===(o=e.processingResponse)||void 0===o?void 0:o.message)||(0,i.__)("Something went wrong. Please contact us for assistance.","woocommerce");N(r,{id:"add-to-cart",context:`woocommerce/single-product/${(null==t?void 0:t.id)||0}`})}y(A())}));ie(O,J,e).then((e=>{r(e)?y(P(!0)):y(A())}))}}),[b.status,b.hasError,b.processingResponse,L,N,O,null==t?void 0:t.id]);const F=(e=>["simple","variable"].includes(e.type||"simple"))(t),x={product:t,productType:t.type||"simple",productIsPurchasable:u(t),productHasOptions:t.has_options||!1,supportsFormElements:F,showFormElements:r&&F,quantity:b.quantity||(null==t||null===(s=t.add_to_cart)||void 0===s?void 0:s.minimum)||1,minQuantity:(null==t||null===(a=t.add_to_cart)||void 0===a?void 0:a.minimum)||1,maxQuantity:(null==t||null===(n=t.add_to_cart)||void 0===n?void 0:n.maximum)||99,multipleOf:(null==t||null===(_=t.add_to_cart)||void 0===_?void 0:_.multiple_of)||1,requestParams:b.requestParams,isIdle:b.status===E.IDLE,isDisabled:b.status===E.DISABLED,isProcessing:b.status===E.PROCESSING,isBeforeProcessing:b.status===E.BEFORE_PROCESSING,isAfterProcessing:b.status===E.AFTER_PROCESSING,hasError:b.hasError,eventRegistration:D,dispatchActions:L};return(0,o.createElement)(le.Provider,{value:x},e)};var pe=r(6989),Ee=r.n(pe),me=r(2629),_e=r(9456),he=r(4055);const be=()=>{const{dispatchActions:e,product:t,quantity:r,eventRegistration:s,hasError:o,isProcessing:a,requestParams:n}=ue(),{showAllValidationErrors:l}=(0,d.useDispatch)(p.VALIDATION_STORE_KEY),u=(0,d.useSelect)((e=>e(p.VALIDATION_STORE_KEY).hasValidationErrors)),{createErrorNotice:E,removeNotice:m}=(0,d.useDispatch)("core/notices"),{receiveCart:_}=(0,he.b)(),[h,b]=(0,c.useState)(!1),S=!o&&a,g=(0,c.useCallback)((()=>!u()||(l(),{type:"error"})),[u,l]);(0,c.useEffect)((()=>{const e=s.onAddToCartBeforeProcessing(g,0);return()=>{e()}}),[s,g]);const v=(0,c.useCallback)((()=>{b(!0),m("add-to-cart",`woocommerce/single-product/${(null==t?void 0:t.id)||0}`);const s={id:t.id||0,quantity:r,...n};Ee()({path:"/wc/store/v1/cart/add-item",method:"POST",data:s,cache:"no-store",parse:!1}).then((r=>{Ee().setNonce(r.headers),r.json().then((function(s){r.ok?_(s):(s.body&&s.body.message?E((0,me.decodeEntities)(s.body.message),{id:"add-to-cart",context:`woocommerce/single-product/${(null==t?void 0:t.id)||0}`}):E((0,i.__)("Something went wrong. Please contact us for assistance.","woocommerce"),{id:"add-to-cart",context:`woocommerce/single-product/${(null==t?void 0:t.id)||0}`}),e.setHasError()),(0,_e.Q9)({preserveCartData:!0}),e.setAfterProcessing(s),b(!1)}))})).catch((t=>{t.json().then((function(t){var r;null!==(r=t.data)&&void 0!==r&&r.cart&&_(t.data.cart),e.setHasError(),e.setAfterProcessing(t),b(!1)}))}))}),[t,E,m,_,e,r,n]);return(0,c.useEffect)((()=>{S&&!h&&v()}),[S,v,h]),null},Se=({children:e,product:t,showFormElements:r})=>(0,o.createElement)(de,{product:t,showFormElements:r},e,(0,o.createElement)(be,null));var ge=r(2864);r(6684);var ve=r(9685);r(5482),r(129);const Re=()=>(0,o.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"}),fe=({className:e,showSpinner:t=!1,children:r,variant:s="contained",...a})=>{const c=n()("wc-block-components-button","wp-element-button",e,s,{"wc-block-components-button--loading":t});return(0,o.createElement)(ve.Z,{className:c,...a},t&&(0,o.createElement)(Re,null),(0,o.createElement)("span",{className:"wc-block-components-button__text"},r))};var ye=r(1984),Te=r(8184),Ce=r(5918),we=r(3775);const Ae=({className:e,href:t,text:r,onClick:s})=>(0,o.createElement)(fe,{className:e,href:t,onClick:s,rel:"nofollow"},r),Pe=({className:e,quantityInCart:t,isProcessing:r,isDisabled:s,isDone:a,onClick:n})=>(0,o.createElement)(fe,{className:e,disabled:s,showSpinner:r,onClick:n},a&&t>0?(0,i.sprintf)(/* translators: %s number of products in cart. */
(0,i._n)("%d in cart","%d in cart",t,"woocommerce"),t):(0,i.__)("Add to cart","woocommerce"),!!a&&(0,o.createElement)(ye.Z,{icon:Te.Z})),Ie=()=>{const{showFormElements:e,productIsPurchasable:t,productHasOptions:r,product:s,productType:a,isDisabled:n,isProcessing:l,eventRegistration:u,hasError:d,dispatchActions:p}=ue(),{parentName:E}=(0,ge.useInnerBlockLayoutContext)(),{dispatchStoreEvent:m}=(0,Ce.n)(),{cartQuantity:_}=(0,we.c)(s.id||0),[h,b]=(0,c.useState)(!1),S=s.add_to_cart||{url:"",text:""};return(0,c.useEffect)((()=>{const e=u.onAddToCartAfterProcessingWithSuccess((()=>(d||b(!0),!0)),0);return()=>{e()}}),[u,d]),(e||!r&&"simple"===a)&&t?(0,o.createElement)(Pe,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:_,isDisabled:n,isProcessing:l,isDone:h,onClick:()=>{p.submitForm(`woocommerce/single-product/${(null==s?void 0:s.id)||0}`),m("cart-add-item",{product:s,listName:E})}}):(0,o.createElement)(Ae,{className:"wc-block-components-product-add-to-cart-button",href:S.url,text:S.text||(0,i.__)("View Product","woocommerce"),onClick:()=>{m("product-view-link",{product:s,listName:E})}})};var Oe=r(4697);const Ne=({disabled:e,min:t,max:r,step:s=1,value:a,onChange:n})=>{const c=void 0!==r,i=(0,Oe.y1)((e=>{let o=e;c&&(o=Math.min(o,Math.floor(r/s)*s)),o=Math.max(o,Math.ceil(t/s)*s),o=Math.floor(o/s)*s,o!==e&&(null==n||n(o))}),300);return(0,o.createElement)("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:a,min:t,max:r,step:s,hidden:1===r,disabled:e,onChange:e=>{null==n||n(e.target.value),i(Number(e.target.value))}})},ke=({reason:e=(0,i.__)("Sorry, this product cannot be purchased.","woocommerce")})=>(0,o.createElement)("div",{className:"wc-block-components-product-add-to-cart-unavailable"},e),De=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:s,multipleOf:a,dispatchActions:n,isDisabled:c}=ue();return e.id&&!e.is_purchasable?(0,o.createElement)(ke,null):e.id&&!e.is_in_stock?(0,o.createElement)(ke,{reason:(0,i.__)("This product is currently out of stock and cannot be purchased.","woocommerce")}):(0,o.createElement)(o.Fragment,null,(0,o.createElement)(Ne,{value:t,min:r,max:s,step:a,disabled:c,onChange:n.setQuantity}),(0,o.createElement)(Ie,null))};r(461);var Le=r(7313),Fe=r(3554);const xe={value:"",label:(0,i.__)("Select an option","woocommerce")},Be=({attributeName:e,options:t=[],value:r="",onChange:s=(()=>{}),errorMessage:a=(0,i.__)("Please select a value.","woocommerce")})=>{const l=e,{setValidationErrors:u,clearValidationError:E}=(0,d.useDispatch)(p.VALIDATION_STORE_KEY),{error:m}=(0,d.useSelect)((e=>({error:e(p.VALIDATION_STORE_KEY).getValidationError(l)||{}})));return(0,c.useEffect)((()=>{r?E(l):u({[l]:{message:a,hidden:!0}})}),[r,l,a,E,u]),(0,c.useEffect)((()=>()=>{E(l)}),[l,E]),(0,o.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},(0,o.createElement)(Le.Z,{label:(0,me.decodeEntities)(e),value:r||"",options:[xe,...t],onChange:s,required:!0,className:n()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":(null==m?void 0:m.message)&&!(null!=m&&m.hidden)})}),(0,o.createElement)(Fe.ValidationInputError,{propertyName:l,elementId:l}))},Me=(e,t,r)=>{const s=Object.values(t).map((({id:e})=>e));if(Object.values(r).every((e=>""===e)))return s;const o=Object.keys(e);return s.filter((e=>o.every((s=>{const o=r[s]||"",a=t["id:"+e].attributes[s];return""===o||null===a||a===o}))))},qe=({attributes:e,variationAttributes:t,setRequestParams:r})=>{const s=(0,l.s)(e),a=(0,l.s)(t),[n,i]=(0,c.useState)(0),[u,d]=(0,c.useState)({}),[p,E]=(0,c.useState)(!1),m=(0,c.useMemo)((()=>((e,t,r)=>{const s={},o=Object.keys(e),a=Object.values(r).filter(Boolean).length>0;return o.forEach((o=>{const n=e[o],c={...r,[o]:null},i=a?Me(e,t,c):null,l=null!==i?i.map((e=>t["id:"+e].attributes[o])):null;s[o]=((e,t=null)=>Object.values(e).map((({name:e,slug:r})=>null===t||t.includes(null)||t.includes(r)?{value:r,label:(0,me.decodeEntities)(e)}:null)).filter(Boolean))(n.terms,l)})),s})(s,a,u)),[u,s,a]);return(0,c.useEffect)((()=>{if(!p){const t=(e=>(0,te.Kn)(e)?0===Object.keys(e).length?{}:Object.values(e).reduce(((e,t)=>{const r=t.terms.filter((e=>e.default));var s;return r.length>0&&(e[t.name]=null===(s=r[0])||void 0===s?void 0:s.slug),e}),{}):{})(e);t&&d({...t}),E(!0)}}),[u,e,p]),(0,c.useEffect)((()=>{Object.values(u).filter((e=>""!==e)).length===Object.keys(s).length?i(((e,t,r)=>Me(e,t,r)[0]||0)(s,a,u)):n>0&&i(0)}),[u,n,s,a]),(0,c.useEffect)((()=>{r({id:n,variation:Object.keys(u).map((e=>({attribute:e,value:u[e]})))})}),[r,n,u]),(0,o.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(s).map((e=>(0,o.createElement)(Be,{key:e,attributeName:e,options:m[e].filter(Boolean),value:u[e],onChange:t=>{d({...u,[e]:t})}}))))},je=({dispatchers:e,product:t})=>{const r=(e=>{return e?(t=Object.values(e).filter((({has_variations:e})=>e)),r="name",t.reduce(((e,t)=>(e[String(r?t[r]:t)]=t,e)),{})):{};var t,r})(t.attributes),s=(e=>{if(!e)return{};const t={};return e.forEach((({id:e,attributes:r})=>{t[`id:${e}`]={id:e,attributes:r.reduce(((e,{name:t,value:r})=>(e[t]=r,e)),{})}})),t})(t.variations);return 0===Object.keys(r).length||0===Object.keys(s).length?null:(0,o.createElement)(qe,{attributes:r,variationAttributes:s,setRequestParams:e.setRequestParams})},Ye=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:s,multipleOf:a,dispatchActions:n,isDisabled:c}=ue();return e.id&&!e.is_purchasable?(0,o.createElement)(ke,null):e.id&&!e.is_in_stock?(0,o.createElement)(ke,{reason:(0,i.__)("This product is currently out of stock and cannot be purchased.","woocommerce")}):(0,o.createElement)(o.Fragment,null,(0,o.createElement)(je,{product:e,dispatchers:n}),(0,o.createElement)(Ne,{value:t,min:r,max:s,step:a,disabled:c,onChange:n.setQuantity}),(0,o.createElement)(Ie,null))},Qe=()=>(0,o.createElement)(Ie,null),Ge=()=>(0,o.createElement)("p",null,"This is a placeholder for the grouped products form element."),Ve=()=>{const{showFormElements:e,productType:t}=ue();return e?"variable"===t?(0,o.createElement)(Ye,null):"grouped"===t?(0,o.createElement)(Ge,null):"external"===t?(0,o.createElement)(Qe,null):"simple"===t||"variation"===t?(0,o.createElement)(De,null):null:(0,o.createElement)(Ie,null)},Ke=(0,s.withProductDataContext)((({className:e,showFormElements:t})=>{const{product:r}=(0,ge.useProductDataContext)(),s=n()(e,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":(a=r,null==a||"object"==typeof a&&0===Object.keys(a).length||"string"==typeof a&&0===a.trim().length)});var a;return(0,o.createElement)(Se,{product:r,showFormElements:t},(0,o.createElement)("div",{className:s},(0,o.createElement)(Ve,null)))})),He=(0,s.withFilteredAttributes)({showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}})(Ke)},3340:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(4617),o=r(5736),a=r(1478),n=r(2646),c=r(5271);const i=e=>{const t={};return void 0!==e.label&&(t.label=e.label),void 0!==e.required&&(t.required=e.required),void 0!==e.hidden&&(t.hidden=e.hidden),void 0===e.label||e.optionalLabel||(t.optionalLabel=(0,o.sprintf)(/* translators: %s Field label. */
(0,o.__)("%s (optional)","woocommerce"),e.label)),e.priority&&((0,a.h)(e.priority)&&(t.index=e.priority),(0,n.H)(e.priority)&&(t.index=parseInt(e.priority,10))),e.hidden&&(t.required=!1),t},l=Object.entries(c.vr).map((([e,t])=>[e,Object.entries(t).map((([e,t])=>[e,i(t)])).reduce(((e,[t,r])=>(e[t]=r,e)),{})])).reduce(((e,[t,r])=>(e[t]=r,e)),{}),u=(e,t,r="")=>{const o=r&&void 0!==l[r]?l[r]:{};return e.map((e=>({key:e,...s.defaultAddressFields[e]||{},...o[e]||{},...t[e]||{}}))).sort(((e,t)=>e.index-t.index))}},4055:(e,t,r)=>{"use strict";r.d(t,{b:()=>v});var s=r(2991),o=r.n(s),a=r(9307),n=r(4801),c=r(9818),i=r(2629),l=r(3881),u=r(8832);var d=r(9456);const p=e=>{const t=null==e?void 0:e.detail;t&&t.preserveCartData||(0,c.dispatch)(n.CART_STORE_KEY).invalidateResolutionForStore()},E=e=>{(null!=e&&e.persisted||"back_forward"===(window.performance&&window.performance.getEntriesByType("navigation").length?window.performance.getEntriesByType("navigation")[0].type:""))&&(0,c.dispatch)(n.CART_STORE_KEY).invalidateResolutionForStore()},m=()=>{1===window.wcBlocksStoreCartListeners.count&&window.wcBlocksStoreCartListeners.remove(),window.wcBlocksStoreCartListeners.count--},_={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},h={..._,email:""},b={total_items:"",total_items_tax:"",total_fees:"",total_fees_tax:"",total_discount:"",total_discount_tax:"",total_shipping:"",total_shipping_tax:"",total_price:"",total_tax:"",tax_lines:n.EMPTY_TAX_LINES,currency_code:"",currency_symbol:"",currency_minor_unit:2,currency_decimal_separator:"",currency_thousand_separator:"",currency_prefix:"",currency_suffix:""},S=e=>Object.fromEntries(Object.entries(e).map((([e,t])=>[e,(0,i.decodeEntities)(t)]))),g={cartCoupons:n.EMPTY_CART_COUPONS,cartItems:n.EMPTY_CART_ITEMS,cartFees:n.EMPTY_CART_FEES,cartItemsCount:0,cartItemsWeight:0,crossSellsProducts:n.EMPTY_CART_CROSS_SELLS,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:n.EMPTY_CART_ITEM_ERRORS,cartTotals:b,cartIsLoading:!0,cartErrors:n.EMPTY_CART_ERRORS,billingAddress:h,shippingAddress:_,shippingRates:n.EMPTY_SHIPPING_RATES,isLoadingRates:!1,cartHasCalculatedShipping:!1,paymentMethods:n.EMPTY_PAYMENT_METHODS,paymentRequirements:n.EMPTY_PAYMENT_REQUIREMENTS,receiveCart:()=>{},receiveCartContents:()=>{},extensions:n.EMPTY_EXTENSIONS},v=(e={shouldSelect:!0})=>{const{isEditor:t,previewData:r}=(0,u._)(),s=null==r?void 0:r.previewCart,{shouldSelect:i}=e,b=(0,a.useRef)();(0,a.useEffect)((()=>((()=>{if(window.wcBlocksStoreCartListeners||(window.wcBlocksStoreCartListeners={count:0,remove:()=>{}}),(null===(e=window.wcBlocksStoreCartListeners)||void 0===e?void 0:e.count)>0)return void window.wcBlocksStoreCartListeners.count++;var e;document.body.addEventListener("wc-blocks_added_to_cart",p),document.body.addEventListener("wc-blocks_removed_from_cart",p),window.addEventListener("pageshow",E);const t=(0,d.Es)("added_to_cart","wc-blocks_added_to_cart"),r=(0,d.Es)("removed_from_cart","wc-blocks_removed_from_cart");window.wcBlocksStoreCartListeners.count=1,window.wcBlocksStoreCartListeners.remove=()=>{document.body.removeEventListener("wc-blocks_added_to_cart",p),document.body.removeEventListener("wc-blocks_removed_from_cart",p),window.removeEventListener("pageshow",E),t(),r()}})(),m)),[]);const v=(0,c.useSelect)(((e,{dispatch:r})=>{if(!i)return g;if(t)return{cartCoupons:s.coupons,cartItems:s.items,crossSellsProducts:s.cross_sells,cartFees:s.fees,cartItemsCount:s.items_count,cartItemsWeight:s.items_weight,cartNeedsPayment:s.needs_payment,cartNeedsShipping:s.needs_shipping,cartItemErrors:n.EMPTY_CART_ITEM_ERRORS,cartTotals:s.totals,cartIsLoading:!1,cartErrors:n.EMPTY_CART_ERRORS,billingData:h,billingAddress:h,shippingAddress:_,extensions:n.EMPTY_EXTENSIONS,shippingRates:s.shipping_rates,isLoadingRates:!1,cartHasCalculatedShipping:s.has_calculated_shipping,paymentRequirements:s.paymentRequirements,receiveCart:"function"==typeof(null==s?void 0:s.receiveCart)?s.receiveCart:()=>{},receiveCartContents:"function"==typeof(null==s?void 0:s.receiveCartContents)?s.receiveCartContents:()=>{}};const o=e(n.CART_STORE_KEY),a=o.getCartData(),c=o.getCartErrors(),u=o.getCartTotals(),d=!o.hasFinishedResolution("getCartData"),p=o.isCustomerDataUpdating(),{receiveCart:E,receiveCartContents:m}=r(n.CART_STORE_KEY),b=S(a.billingAddress),v=a.needsShipping?S(a.shippingAddress):b,R=a.fees.length>0?a.fees.map((e=>S(e))):n.EMPTY_CART_FEES;return{cartCoupons:a.coupons.length>0?a.coupons.map((e=>({...e,label:e.code}))):n.EMPTY_CART_COUPONS,cartItems:a.items,crossSellsProducts:a.crossSells,cartFees:R,cartItemsCount:a.itemsCount,cartItemsWeight:a.itemsWeight,cartNeedsPayment:a.needsPayment,cartNeedsShipping:a.needsShipping,cartItemErrors:a.errors,cartTotals:u,cartIsLoading:d,cartErrors:c,billingData:(0,l.QI)(b),billingAddress:(0,l.QI)(b),shippingAddress:(0,l.QI)(v),extensions:a.extensions,shippingRates:a.shippingRates,isLoadingRates:p,cartHasCalculatedShipping:a.hasCalculatedShipping,paymentRequirements:a.paymentRequirements,receiveCart:E,receiveCartContents:m}}),[i]);return b.current&&o()(b.current,v)||(b.current=v),b.current}},3775:(e,t,r)=>{"use strict";r.d(t,{c:()=>l});var s=r(9307),o=r(9818),a=r(4801),n=r(2629),c=r(4055);const i=(e,t)=>{const r=e.find((({id:e})=>e===t));return r?r.quantity:0},l=e=>{const{addItemToCart:t}=(0,o.useDispatch)(a.CART_STORE_KEY),{cartItems:r,cartIsLoading:l}=(0,c.b)(),{createErrorNotice:u,removeNotice:d}=(0,o.useDispatch)("core/notices"),[p,E]=(0,s.useState)(!1),m=(0,s.useRef)(i(r,e));return(0,s.useEffect)((()=>{const t=i(r,e);t!==m.current&&(m.current=t)}),[r,e]),{cartQuantity:Number.isFinite(m.current)?m.current:0,addingToCart:p,cartIsLoading:l,addToCart:(r=1)=>(E(!0),t(e,r).then((()=>{d("add-to-cart")})).catch((e=>{u((0,n.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})})).finally((()=>{E(!1)})))}}},8832:(e,t,r)=>{"use strict";r.d(t,{_:()=>a}),r(9196);var s=r(9307);r(9818);const o=(0,s.createContext)({isEditor:!1,currentPostId:0,currentView:"",previewData:{},getPreviewData:()=>({})}),a=()=>(0,s.useContext)(o)},3881:(e,t,r)=>{"use strict";r.d(t,{QI:()=>a});var s=r(3340),o=(r(6483),r(4617));r(2629),r(5271);const a=e=>{const t=Object.keys(o.defaultAddressFields),r=(0,s.Z)(t,{},e.country),a=Object.assign({},e);return r.forEach((({key:t="",hidden:r=!1})=>{r&&((e,t)=>e in t)(t,e)&&(a[t]="")})),a}},9456:(e,t,r)=>{"use strict";r.d(t,{Es:()=>n,Q9:()=>a});const s=window.CustomEvent||null,o=(e,{bubbles:t=!1,cancelable:r=!1,element:o,detail:a={}})=>{if(!s)return;o||(o=document.body);const n=new s(e,{bubbles:t,cancelable:r,detail:a});o.dispatchEvent(n)},a=({preserveCartData:e=!1})=>{o("wc-blocks_added_to_cart",{bubbles:!0,cancelable:!0,detail:{preserveCartData:e}})},n=(e,t,r=!1,s=!1)=>{if("function"!=typeof jQuery)return()=>{};const a=()=>{o(t,{bubbles:r,cancelable:s})};return jQuery(document).on(e,a),()=>jQuery(document).off(e,a)}},8519:(e,t,r)=>{"use strict";r.d(t,{F:()=>s});const s=e=>null===e},1478:(e,t,r)=>{"use strict";r.d(t,{h:()=>s});const s=e=>"number"==typeof e},7884:(e,t,r)=>{"use strict";r.d(t,{$n:()=>a,Kn:()=>o});var s=r(8519);const o=e=>!(0,s.F)(e)&&e instanceof Object&&e.constructor===Object;function a(e,t){return o(e)&&t in e}},2646:(e,t,r)=>{"use strict";r.d(t,{H:()=>s});const s=e=>"string"==typeof e},461:()=>{},6684:()=>{},5482:()=>{},129:()=>{}}]);