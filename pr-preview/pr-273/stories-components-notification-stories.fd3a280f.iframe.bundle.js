"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[507],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/stories/components/notification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,With_title:()=>With_title,default:()=>notification_stories});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_With_title$parameter,_With_title$parameter2,_With_title$parameter3,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),notification=__webpack_require__("./src/components/notification.tsx"),__jsx=react.createElement,NotificationTitle=function NotificationTitle(_ref){var children=_ref.children,_ref$component=_ref.component;return __jsx(void 0===_ref$component?"h5":_ref$component,{className:"text-xl font-bold "},children)};NotificationTitle.displayName="NotificationTitle",NotificationTitle.__docgenInfo={description:"",methods:[],displayName:"NotificationTitle",props:{component:{defaultValue:{value:"'h5'",computed:!1},required:!1}}};try{NotificationTitle.displayName="NotificationTitle",NotificationTitle.__docgenInfo={description:"",displayName:"NotificationTitle",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/notification/notification-title.tsx#NotificationTitle"]={docgenInfo:NotificationTitle.__docgenInfo,name:"NotificationTitle",path:"src/components/notification/notification-title.tsx#NotificationTitle"})}catch(__react_docgen_typescript_loader_error){}var notification_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const notification_stories={title:"Components/Notification ",component:notification.P,tags:["autodocs"],argTypes:{severity:{options:["info","success","warning","error"],control:{type:"select"}}}};var Default={args:{severity:"info",children:"This was a triumph! I'm making a note here: HUGE SUCCESS! It's hard to overstate my satisfaction. Regels-Overheid we do what we must because we can. For the good of all of us. Anyway this cake is great...🌀"}},With_title={args:{severity:"success",children:notification_stories_jsx(react.Fragment,null,notification_stories_jsx(NotificationTitle,null,"This was a triumph!"),"I'm making a note here:"," ",notification_stories_jsx("span",{className:"underline"},"HUGE SUCCESS!")," It's hard to overstate my satisfaction. Regels-Overheid we do what we must because we can. For the good of all of us. Anyway this cake is great...🌀")}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    severity: 'info',\n    children: \"This was a triumph! I'm making a note here: HUGE SUCCESS! It's hard to overstate my satisfaction. Regels-Overheid we do what we must because we can. For the good of all of us. Anyway this cake is great...🌀\"\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),With_title.parameters=_objectSpread(_objectSpread({},With_title.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_With_title$parameter=With_title.parameters)||void 0===_With_title$parameter?void 0:_With_title$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    severity: 'success',\n    children: <>\n        <NotificationTitle>This was a triumph!</NotificationTitle>I&apos;m making a note here:{' '}\n        <span className=\"underline\">HUGE SUCCESS!</span> It&apos;s hard to overstate my satisfaction. Regels-Overheid we\n        do what we must because we can. For the good of all of us. Anyway this cake is great...🌀\n      </>\n  }\n}"},null===(_With_title$parameter2=With_title.parameters)||void 0===_With_title$parameter2||null===(_With_title$parameter3=_With_title$parameter2.docs)||void 0===_With_title$parameter3?void 0:_With_title$parameter3.source)})})},"./src/components/notification.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Notification});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconInfoCircle.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconExclamationCircle.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconCircleCheck.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconAlertTriangle.js"),clsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,notificationVariantsMapping={error:"bg-error-lighter border-error-light",info:"bg-primary-lighter border-primary-light",success:"bg-success-lighter border-success-light",warning:"bg-warning-lighter border-warning-light"},iconVariantsMapping={error:"text-error-dark",info:"text-primary-dark",success:"text-success-dark",warning:"text-warning-dark"},iconMapping={info:_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.Z,error:_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.Z,success:_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.Z,warning:_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.Z},IconMapping=function IconMapping(_ref){var severity=_ref.severity,className=_ref.className;return __jsx(iconMapping[severity],{size:16,className})};IconMapping.displayName="IconMapping";var Notification=function Notification(_ref2){var _ref2$severity=_ref2.severity,severity=void 0===_ref2$severity?"info":_ref2$severity,children=_ref2.children,className=_ref2.className;return __jsx("div",{className:"".concat(notificationVariantsMapping[severity]," p-6 border-2 text-base flex ").concat((0,clsx__WEBPACK_IMPORTED_MODULE_5__.Z)(className))},__jsx("div",{className:"w-8 shrink-0"},__jsx(IconMapping,{severity,className:"".concat(iconVariantsMapping[severity]," text-xs mt-1")})),__jsx("div",null,children))};Notification.displayName="Notification",Notification.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{severity:{defaultValue:{value:"'info'",computed:!1},required:!1}}};try{Notification.displayName="Notification",Notification.__docgenInfo={description:"",displayName:"Notification",props:{severity:{defaultValue:{value:"info"},description:"",name:"severity",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/notification.tsx#Notification"]={docgenInfo:Notification.__docgenInfo,name:"Notification",path:"src/components/notification.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createReactComponent});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},createReactComponent=(iconName,iconNamePascal,iconNode)=>{const Component=(0,react.forwardRef)(((_a,ref)=>{var a,_b=_a,{color="currentColor",size=24,stroke=2,children}=_b,rest=((source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_b,["color","size","stroke","children"]);return(0,react.createElement)("svg",__spreadValues((a=__spreadValues({ref},defaultAttributes),__defProps(a,__getOwnPropDescs({width:size,height:size,stroke:color,strokeWidth:stroke,className:`tabler-icon tabler-icon-${iconName}`}))),rest),[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...children||[]])}));return Component.propTypes={color:prop_types_default().string,size:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),stroke:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])},Component.displayName=`${iconNamePascal}`,Component}},"./node_modules/@tabler/icons-react/dist/esm/icons/IconAlertTriangle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconAlertTriangle});var IconAlertTriangle=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("alert-triangle","IconAlertTriangle",[["path",{d:"M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 17h.01",key:"svg-2"}]])},"./node_modules/@tabler/icons-react/dist/esm/icons/IconCircleCheck.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconCircleCheck});var IconCircleCheck=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])},"./node_modules/@tabler/icons-react/dist/esm/icons/IconExclamationCircle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconExclamationCircle});var IconExclamationCircle=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]])},"./node_modules/@tabler/icons-react/dist/esm/icons/IconInfoCircle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconInfoCircle});var IconInfoCircle=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]])},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx}}]);