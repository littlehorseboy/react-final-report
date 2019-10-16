(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{287:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return JavaScriptMileStone}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(615),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(616),_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(288),_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_3__),useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.a)({root:{marginTop:"5rem"},pointsContainer:{borderTop:"1px solid #115293",display:"flex",minWidth:function(props){return 145*props.javascriptMileStones.length}},pointsWrapper:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",minWidth:135},circleSvg:{fill:"#115293",position:"absolute"},year:{fontSize:"1.7rem"},content:{color:"#115293",fontSize:"1.4rem"},arrowIcon:{height:"2.5rem",transform:"scale(0.5, 1)"}});function JavaScriptMileStone(props){var classes=useStyles(props),javascriptMileStones=props.javascriptMileStones,_a=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),width=_a[0],setWidth=_a[1],measuredRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(node){null!==node&&setWidth(node.getBoundingClientRect().width)}),[]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classes.root},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:measuredRef,className:classes.pointsContainer},width&&javascriptMileStones.map((function(mileStone){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:mileStone.year,className:classes.pointsWrapper,style:{width:width/javascriptMileStones.length}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{className:classes.circleSvg,width:12,height:12,style:{top:-6}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle",{cx:6,cy:6,r:6})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classes.year},mileStone.year),mileStone.mileStones.map((function(content){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_3___default.a,{className:classes.arrowIcon}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.a,{className:classes.content},content))})))}))))}try{JavaScriptMileStone.displayName="JavaScriptMileStone",JavaScriptMileStone.__docgenInfo={description:"",displayName:"JavaScriptMileStone",props:{javascriptMileStones:{defaultValue:null,description:"",name:"javascriptMileStones",required:!0,type:{name:"any[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/JavaScriptMileStone/JavaScriptMileStone.tsx#JavaScriptMileStone"]={docgenInfo:JavaScriptMileStone.__docgenInfo,name:"JavaScriptMileStone",path:"src/components/JavaScriptMileStone/JavaScriptMileStone.tsx#JavaScriptMileStone"})}catch(__react_docgen_typescript_loader_error){}},291:function(module,exports,__webpack_require__){__webpack_require__(292),__webpack_require__(404),module.exports=__webpack_require__(405)},313:function(module,exports){},405:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(18),__webpack_require__(19),__webpack_require__(13),__webpack_require__(20),__webpack_require__(23);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(129),req=__webpack_require__(599);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(222)(module))},599:function(module,exports,__webpack_require__){var map={"./components/JavaScriptMileStone/JavaScriptMileStone.stories.tsx":600};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=599},600:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(129),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(185),_JavaScriptMileStone__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(287),javascriptMileStones=[{year:1996,mileStones:["JavaScript"]},{year:1997,mileStones:["EcmaScript"]},{year:2004,mileStones:["Firefox"]},{year:2006,mileStones:["jQuery"]},{year:2008,mileStones:["V8","Chrome"]},{year:2009,mileStones:["ES5","Node.js"]},{year:2010,mileStones:["npm","Angular"]},{year:2013,mileStones:["React"]},{year:2014,mileStones:["Vue.js"]},{year:2015,mileStones:["ES6","Edge"]}];Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("JavaScriptMileStone",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("JavaScriptMileStone",(function(){var withKnobsMileStones=javascriptMileStones.map((function(mileStone){return Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)(mileStone.year.toString(),mileStone)}));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_JavaScriptMileStone__WEBPACK_IMPORTED_MODULE_3__.a,{javascriptMileStones:withKnobsMileStones})}))}.call(this,__webpack_require__(222)(module))}},[[291,1,2]]]);
//# sourceMappingURL=main.16acfd6150c48d9459b3.bundle.js.map