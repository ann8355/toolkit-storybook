module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "26fc");
/******/ })
/************************************************************************/
/******/ ({

/***/ "26fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/anne/lib/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("c805")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: /Users/anne/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3468ea50-vue-loader-template"}!/Users/anne/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/anne/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/anne/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./keyboard.vue?vue&type=template&id=7f0110c9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wpt-keyboard"},[_c(_vm.genre,{tag:"component",attrs:{"numberArray":_vm.numberArray},on:{"keyin":_vm.keyin}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./keyboard.vue?vue&type=template&id=7f0110c9&

// CONCATENATED MODULE: /Users/anne/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3468ea50-vue-loader-template"}!/Users/anne/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/anne/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/anne/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./numbers.vue?vue&type=template&id=78f22380&
var lib_vue_loader_options_numbersvue_type_template_id_78f22380_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wpt-keyboard-numers",on:{"click":function($event){return _vm.keyin($event)}}},[_vm._l((_vm.numberArray),function(item){return _c('button',{key:item.key,attrs:{"type":"button","data-key":item.key}},[_c('span',[_vm._v(_vm._s(item.text))])])}),_c('button',{attrs:{"type":"button","data-key":"backspace"}},[_c('img',{staticClass:"wptif-backspace",attrs:{"src":__webpack_require__("406b")}})])],2)}
var lib_vue_loader_options_numbersvue_type_template_id_78f22380_staticRenderFns = []


// CONCATENATED MODULE: ./numbers.vue?vue&type=template&id=78f22380&

// CONCATENATED MODULE: /Users/anne/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/anne/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./numbers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_numbersvue_type_script_lang_js_ = ({
  name: 'KeyboardNumbers',
  props: {
    numberArray: {
      type: Array,
      default: () => [{
        text: '1',
        key: '1',
      }, {
        text: '2',
        key: '2',
      }, {
        text: '3',
        key: '3',
      }, {
        text: '4',
        key: '4',
      }, {
        text: '5',
        key: '5',
      }, {
        text: '6',
        key: '6',
      }, {
        text: '7',
        key: '7',
      }, {
        text: '8',
        key: '8',
      }, {
        text: '9',
        key: '9',
      }, {
        text: 'C',
        key: 'clear',
      }, {
        text: '0',
        key: '0',
      }],
    },
  },
  methods: {
    keyin(event) {
      /**
       * 點擊鍵盤事件
       * @type {Event}
       */
      const target = event.target;
      if (target !== this.$el && target.dataset.key) {
        this.$emit('keyin', target.dataset.key);
      }
    },
  },
});

// CONCATENATED MODULE: ./numbers.vue?vue&type=script&lang=js&
 /* harmony default export */ var numbersvue_type_script_lang_js_ = (lib_vue_loader_options_numbersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./numbers.vue?vue&type=style&index=0&lang=scss&
var numbersvue_type_style_index_0_lang_scss_ = __webpack_require__("ae44");

// CONCATENATED MODULE: /Users/anne/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./numbers.vue






/* normalize component */

var component = normalizeComponent(
  numbersvue_type_script_lang_js_,
  lib_vue_loader_options_numbersvue_type_template_id_78f22380_render,
  lib_vue_loader_options_numbersvue_type_template_id_78f22380_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var numbers = (component.exports);
// CONCATENATED MODULE: /Users/anne/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/anne/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./keyboard.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var lib_vue_loader_options_keyboardvue_type_script_lang_js_ = ({
  name: 'Keyboard',
  props: {
    /**
      * 切換成某元件, default: Numbers
    */
    genre: {
      type: String,
      default: 'Numbers',
    },
    /**
      * 鍵盤按鈕上的數字
    */
    numberArray: {
      type: Array,
    },
  },
  methods: {
    keyin(key) {
      /**
       * 點擊鍵盤事件
       * @type {Event}
       * @event 'keyin'
       */
      this.$emit('keyin', key);
    },
  },
  components: {
    Numbers: numbers,
  },
});

// CONCATENATED MODULE: ./keyboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var keyboardvue_type_script_lang_js_ = (lib_vue_loader_options_keyboardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./keyboard.vue





/* normalize component */

var keyboard_component = normalizeComponent(
  keyboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var keyboard = (keyboard_component.exports);
// CONCATENATED MODULE: /Users/anne/lib/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (keyboard);



/***/ }),

/***/ "406b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ic_backspace_black_48px.c3d35a2f.svg";

/***/ }),

/***/ "ae44":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_lib_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_numbers_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cca1");
/* harmony import */ var _lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_lib_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_numbers_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_lib_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_numbers_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_lib_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_numbers_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c805":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "cca1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ })["default"];
//# sourceMappingURL=keyboard.common.js.map