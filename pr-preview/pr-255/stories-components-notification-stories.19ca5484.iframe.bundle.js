"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[507],{"./src/stories/components/notification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,With_title:()=>With_title,default:()=>notification_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),IconInfoCircle=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconInfoCircle.js"),IconExclamationCircle=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconExclamationCircle.js"),IconCircleCheck=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconCircleCheck.js"),IconAlertTriangle=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconAlertTriangle.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react.createElement,notificationVariantsMapping={error:"bg-error-lighter border-error-light",info:"bg-primary-lighter border-primary-light",success:"bg-success-lighter border-success-light",warning:"bg-warning-lighter border-warning-light"},iconVariantsMapping={error:"text-error-dark",info:"text-primary-dark",success:"text-success-dark",warning:"text-warning-dark"},iconMapping={info:IconInfoCircle.Z,error:IconExclamationCircle.Z,success:IconCircleCheck.Z,warning:IconAlertTriangle.Z},IconMapping=function IconMapping(_ref){var severity=_ref.severity,className=_ref.className;return __jsx(iconMapping[severity],{size:16,className})};IconMapping.displayName="IconMapping";var Notification=function Notification(_ref2){var _ref2$severity=_ref2.severity,severity=void 0===_ref2$severity?"info":_ref2$severity,children=_ref2.children,className=_ref2.className;return __jsx("div",{className:"".concat(notificationVariantsMapping[severity]," p-6 border-2 text-base flex ").concat((0,clsx_m.Z)(className))},__jsx("div",{className:"w-8 shrink-0"},__jsx(IconMapping,{severity,className:"".concat(iconVariantsMapping[severity]," text-xs mt-1")})),__jsx("div",null,children))};Notification.displayName="Notification",Notification.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{severity:{defaultValue:{value:"'info'",computed:!1},required:!1}}};try{Notification.displayName="Notification",Notification.__docgenInfo={description:"",displayName:"Notification",props:{severity:{defaultValue:{value:"info"},description:"",name:"severity",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/notification.tsx#Notification"]={docgenInfo:Notification.__docgenInfo,name:"Notification",path:"src/components/notification.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,_With_title$parameter,_With_title$parameter2,_With_title$parameter3,notification_title_jsx=react.createElement,NotificationTitle=function NotificationTitle(_ref){var children=_ref.children,_ref$component=_ref.component;return notification_title_jsx(void 0===_ref$component?"h5":_ref$component,{className:"text-xl font-bold "},children)};NotificationTitle.displayName="NotificationTitle",NotificationTitle.__docgenInfo={description:"",methods:[],displayName:"NotificationTitle",props:{component:{defaultValue:{value:"'h5'",computed:!1},required:!1}}};try{NotificationTitle.displayName="NotificationTitle",NotificationTitle.__docgenInfo={description:"",displayName:"NotificationTitle",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/notification/notification-title.tsx#NotificationTitle"]={docgenInfo:NotificationTitle.__docgenInfo,name:"NotificationTitle",path:"src/components/notification/notification-title.tsx#NotificationTitle"})}catch(__react_docgen_typescript_loader_error){}var notification_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const notification_stories={title:"Components/Notification ",component:Notification,tags:["autodocs"],argTypes:{severity:{options:["info","success","warning","error"],control:{type:"select"}}}};var Default={args:{severity:"info",children:"This was a triumph! I'm making a note here: HUGE SUCCESS! It's hard to overstate my satisfaction. Regels-Overheid we do what we must because we can. For the good of all of us. Anyway this cake is great...🌀"}},With_title={args:{severity:"success",children:notification_stories_jsx(react.Fragment,null,notification_stories_jsx(NotificationTitle,null,"This was a triumph!"),"I'm making a note here:"," ",notification_stories_jsx("span",{className:"underline"},"HUGE SUCCESS!")," It's hard to overstate my satisfaction. Regels-Overheid we do what we must because we can. For the good of all of us. Anyway this cake is great...🌀")}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    severity: 'info',\n    children: \"This was a triumph! I'm making a note here: HUGE SUCCESS! It's hard to overstate my satisfaction. Regels-Overheid we do what we must because we can. For the good of all of us. Anyway this cake is great...🌀\"\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),With_title.parameters=_objectSpread(_objectSpread({},With_title.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_With_title$parameter=With_title.parameters)||void 0===_With_title$parameter?void 0:_With_title$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    severity: 'success',\n    children: <>\n        <NotificationTitle>This was a triumph!</NotificationTitle>I&apos;m making a note here:{' '}\n        <span className=\"underline\">HUGE SUCCESS!</span> It&apos;s hard to overstate my satisfaction. Regels-Overheid we\n        do what we must because we can. For the good of all of us. Anyway this cake is great...🌀\n      </>\n  }\n}"},null===(_With_title$parameter2=With_title.parameters)||void 0===_With_title$parameter2||null===(_With_title$parameter3=_With_title$parameter2.docs)||void 0===_With_title$parameter3?void 0:_With_title$parameter3.source)})})},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx}}]);