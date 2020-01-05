(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["quantity"] = factory();
	else
		root["quantity"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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

// CONCATENATED MODULE: /Users/anne/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3468ea50-vue-loader-template"}!/Users/anne/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/anne/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/anne/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./quantity.vue?vue&type=template&id=d9edaf06&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wpt-quantity"},[_c('button',{attrs:{"type":"button"},on:{"mousedown":_vm.sub}},[_vm._v("-")]),_c('input',{ref:"input",attrs:{"type":"number","pattern":"[0-9]*","min":_vm.min,"max":_vm.max},domProps:{"value":_vm.value},on:{"change":_vm.onChanged}}),_c('button',{attrs:{"type":"button"},on:{"mousedown":_vm.add}},[_vm._v("+")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./quantity.vue?vue&type=template&id=d9edaf06&

// CONCATENATED MODULE: /Users/anne/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/anne/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./quantity.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_quantityvue_type_script_lang_js_ = ({
  name: 'Quantity',
  props: {
    /**
      * 選擇器的初始值
    */
    value: {
      type: Number,
      default: 0,
    },
    /**
      * 顯示的最小值
    */
    min: {
      type: Number,
    },
    /**
      * 顯示的最大值
    */
    max: {
      type: Number,
    },
  },
  computed: {
    hasMax() {
      return !Number.isNaN(parseFloat(this.max));
    },
    hasMin() {
      return !Number.isNaN(parseFloat(this.min));
    },
  },
  methods: {
    update(value) {
      const val = parseInt(value, 10);
      if (!Number.isNaN(val)) {
      /**
       * 數字發生改變觸發的事件
       * @type {Event}
       */
        this.$emit('input', val);
        this.$refs.input.value = val;
      }
    },
    add() {
      const calc = this.value + 1;
      if (!this.hasMax) {
        this.update(calc);
      } else if (this.max >= calc) {
        this.update(calc);
      }
    },
    sub() {
      const calc = this.value - 1;
      if (!this.hasMin) {
        this.update(calc);
      } else if (this.min <= calc) {
        this.update(calc);
      }
    },
    onChanged() {
      let value = this.$refs.input.value;
      if (!value) {
        value = 0;
      } else if (this.hasMax && value > this.max) {
        value = this.max;
      } else if (this.hasMin && value < this.min) {
        value = this.min;
      }
      this.update(value);
    },
  },
});

// CONCATENATED MODULE: ./quantity.vue?vue&type=script&lang=js&
 /* harmony default export */ var quantityvue_type_script_lang_js_ = (lib_vue_loader_options_quantityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./quantity.vue?vue&type=style&index=0&lang=scss&
var quantityvue_type_style_index_0_lang_scss_ = __webpack_require__("a71c");

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

// CONCATENATED MODULE: ./quantity.vue






/* normalize component */

var component = normalizeComponent(
  quantityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var quantity = (component.exports);
// CONCATENATED MODULE: /Users/anne/lib/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (quantity);



/***/ }),

/***/ "2722":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a71c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_lib_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_quantity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2722");
/* harmony import */ var _lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_lib_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_quantity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_lib_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_quantity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_lib_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_quantity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=quantity.umd.js.map