/******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId])
        /******/ 			return installedModules[moduleId].exports;
        /******/
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
    /******/ 	// identity function for calling harmony imports with the correct context
    /******/ 	__webpack_require__.i = function(value) { return value; };
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
        /******/ 		if(!__webpack_require__.o(exports, name)) {
            /******/ 			Object.defineProperty(exports, name, {
                /******/ 				configurable: false,
                /******/ 				enumerable: true,
                /******/ 				get: getter
                /******/ 			});
            /******/ 		}
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
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 34);
    /******/ })
/************************************************************************/
/******/ ([
    /* 0 */
    /***/ (function(module, exports) {

        module.exports = extend;

        /*
          var obj = {a: 3, b: 5};
          extend(obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
          obj; // {a: 4, b: 5, c: 8}

          var obj = {a: 3, b: 5};
          extend({}, obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
          obj; // {a: 3, b: 5}

          var arr = [1, 2, 3];
          var obj = {a: 3, b: 5};
          extend(obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
          arr.push(4);
          obj; // {a: 3, b: 5, c: [1, 2, 3, 4]}

          var arr = [1, 2, 3];
          var obj = {a: 3, b: 5};
          extend(true, obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
          arr.push(4);
          obj; // {a: 3, b: 5, c: [1, 2, 3]}

          extend({a: 4, b: 5}); // {a: 4, b: 5}
          extend({a: 4, b: 5}, 3); {a: 4, b: 5}
          extend({a: 4, b: 5}, true); {a: 4, b: 5}
          extend('hello', {a: 4, b: 5}); // throws
          extend(3, {a: 4, b: 5}); // throws
        */

        function extend(/* [deep], obj1, obj2, [objn] */) {
            var args = [].slice.call(arguments);
            var deep = false;
            if (typeof args[0] == 'boolean') {
                deep = args.shift();
            }
            var result = args[0];
            if (!result || (typeof result != 'object' && typeof result != 'function')) {
                throw new Error('extendee must be an object');
            }
            var extenders = args.slice(1);
            var len = extenders.length;
            for (var i = 0; i < len; i++) {
                var extender = extenders[i];
                for (var key in extender) {
                    // include prototype properties
                    var value = extender[key];
                    if (deep && value && (typeof value == 'object' || typeof value == 'function')) {
                        var base = Array.isArray(value) ? [] : {};
                        result[key] = extend(true, result[key] || base, value);
                    } else {
                        result[key] = value;
                    }
                }
            }
            return result;
        }


        /***/ }),
    /* 1 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_embed_plugin_utilities__ = __webpack_require__(2);



        /* harmony default export */ __webpack_exports__["a"] = (opts => {
            const defaultOptions = {
                _replaceAnyways: false,
                _ignoreAnchorCheck: false,
                _ignoreInlineCheck: false,
                onLoad() {}
            }

            const pluginOptions = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, defaultOptions, opts)

            const { _onLoadInternal, onLoad, regex, template, id } = pluginOptions

            if (!regex) {
                throw new Error("regex not passed.")
            }
            if (!template) {
                throw new Error("template not passed.")
            }

            return {
                id,

                async transform(options) {
                    return __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, options, await __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_embed_plugin_utilities__["a" /* insert */])(options, pluginOptions))
                },

                onLoad(options) {
                    if (_onLoadInternal) {
                        _onLoadInternal(options, pluginOptions)
                    }
                    if (onLoad) {
                        onLoad(options, pluginOptions)
                    }
                }
            }
        });


        /***/ }),
    /* 2 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__insert__ = __webpack_require__(18);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__with_details_template__ = __webpack_require__(20);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__without_details_template__ = __webpack_require__(21);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__get_query__ = __webpack_require__(17);
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__insert__["a"]; });
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__with_details_template__["a"]; });
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__without_details_template__["a"]; });
        /* unused harmony reexport getQuery */








        /***/ }),
    /* 3 */
    /***/ (function(module, exports) {

        module.exports = isNode

        function isNode (val) {
            return (!val || typeof val !== 'object')
                ? false
                : (typeof window === 'object' && typeof window.Node === 'object')
                    ? (val instanceof window.Node)
                    : (typeof val.nodeType === 'number') &&
                    (typeof val.nodeName === 'string')
        }


        /***/ }),
    /* 4 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* unused harmony export isBrowser */
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

        var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

        /* harmony default export */ __webpack_exports__["a"] = (isBrowser);


        /***/ }),
    /* 5 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p_waterfall__ = __webpack_require__(30);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p_waterfall___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p_waterfall__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_dom__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_is_dom__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is_in_browser__ = __webpack_require__(4);





        /**
         * Returns the embed code to be added at the end of original string.
         * @param embeds
         * @returns {string}
         */
        function combineEmbedsText(embeds) {
            return embeds
                .sort((a, b) => a.index - b.index)
                .map(({ content }) => content)
                .join(" ")
        }

        /**
         * Add the embed code at the end of string and return the new string
         * @param text - original string
         * @param _embeds - Array of embed code
         * @returns {string}
         */
        function appendEmbedsAtEnd({ result, _embeds }) {
            return `${result} ${combineEmbedsText(_embeds)}`
        }

        function isElementPresent({ input, target }) {
            return __WEBPACK_IMPORTED_MODULE_2_is_dom___default()(input) || (target && __WEBPACK_IMPORTED_MODULE_2_is_dom___default()(target))
        }

        class EmbedJS {
            constructor(options) {
                const defaultOptions = {
                    plugins: [],
                    preset: null,

                    // By default this plugin supports client side. If you want to use this
                    // on both client and server side, you need to pass a custom isomorphic
                    // implementation of fetch.
                    // Eg: fetch: require('isomorphic-unfetch')

                    // This hasn't been included as part of the plugin so that the browser build is small.
                    fetch: __WEBPACK_IMPORTED_MODULE_3_is_in_browser__["a" /* default */] && (window.fetch || window.unfetch),

                    inlineEmbed: true,
                    replaceUrl: false,
                    _embeds: [],
                    _services: []
                }

                let { input, plugins = [], preset } = options
                if (!input) {
                    throw new Error(
                        "You need to pass input element or string in the options object."
                    )
                }

                const inputString = __WEBPACK_IMPORTED_MODULE_2_is_dom___default()(input) ? input.innerHTML : input

                this.options = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, defaultOptions, options, {
                    result: inputString,
                    plugins: preset ? plugins.concat(preset) : plugins,
                    inputString
                })
            }

            text() {
                const options = this.resetOptions()
                const transformers = options.plugins.map(p => p.transform)
                return __WEBPACK_IMPORTED_MODULE_1_p_waterfall___default()(transformers, options)
            }

            resetOptions() {
                return __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, this.options, {
                    _embeds: []
                })
            }

            load() {
                this.options.plugins.forEach(p => p.onLoad && p.onLoad(this.options))
            }

            async render() {
                const { input, target, inlineEmbed } = this.options
                if (!isElementPresent(this.options)) {
                    throw new Error("You haven't passed the input as an element.")
                }

                let options
                if (__WEBPACK_IMPORTED_MODULE_2_is_dom___default()(input) && input.classList.contains("ejs-applied")) {
                    options = this.options
                } else {
                    options = await this.text()

                    const element = target || input
                    element.innerHTML = inlineEmbed
                        ? options.result
                        : appendEmbedsAtEnd(options)
                    element.classList.add("ejs-applied")
                }

                this.load()
                return options
            }

            destroy() {
                const { inputString, input, target } = this.options
                if (!isElementPresent(this.options)) {
                    throw new Error("You haven't passed the input as an element.")
                }
                const element = target || input
                element.innerHTML = inputString
                element.classList.remove("ejs-applied")
                return this.options
            }
        }
        /* harmony export (immutable) */ __webpack_exports__["a"] = EmbedJS;



        /***/ }),
    /* 6 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_embed_plugin_highlight__ = __webpack_require__(11);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_embed_plugin_emoji__ = __webpack_require__(8);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_embed_plugin_github__ = __webpack_require__(10);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_embed_plugin_noembed__ = __webpack_require__(14);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_embed_plugin_url__ = __webpack_require__(16);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_embed_plugin_youtube__ = __webpack_require__(22);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_embed_plugin_facebook__ = __webpack_require__(9);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_embed_plugin_media__ = __webpack_require__(13);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_embed_plugin_instagram__ = __webpack_require__(12);











        /* harmony default export */ __webpack_exports__["a"] = (function(options) {
            const defaultOptions = {
                exclude: []
            }

            const presetOptions = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, defaultOptions, options)

            const pluginNames = [
                __WEBPACK_IMPORTED_MODULE_5_embed_plugin_url__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_2_embed_plugin_emoji__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_3_embed_plugin_github__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_4_embed_plugin_noembed__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_6_embed_plugin_youtube__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_7_embed_plugin_facebook__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_1_embed_plugin_highlight__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_8_embed_plugin_media__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_9_embed_plugin_instagram__["a" /* default */]
            ]
            const plugins = pluginNames.map(plugin => {
                const { id } = plugin
                const pluginOptions = presetOptions[id]

                if (presetOptions.exclude.indexOf(plugin.id) === -1) {
                    if (id === "youtube" || id === "map") {
                        return plugin(
                            __WEBPACK_IMPORTED_MODULE_0_just_extend___default()(
                                {},
                                {
                                    gAuthKey: options.gAuthKey
                                },
                                pluginOptions
                            )
                        )
                    } else if (id === "noEmbed") {
                        return plugin(
                            __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, pluginOptions, {
                                exclude: ["youtube"]
                            })
                        )
                    }
                    return plugin(pluginOptions)
                }
                return null
            })

            return plugins.filter(plugin => !!plugin)
        });


        /***/ }),
    /* 7 */
    /***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

        /***/ }),
    /* 8 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_regex_emoji__ = __webpack_require__(31);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_regex_emoji___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_regex_emoji__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_just_kebab_case__ = __webpack_require__(26);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_just_kebab_case___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_just_kebab_case__);
        /* harmony export (immutable) */ __webpack_exports__["a"] = emoji;




        const id = "emoji"

// You need emoji.css to run with this plugin. Else you need to pass the
// template suitable to your needs.
        function emoji(opts) {
            const defaultOptions = {
                id,
                regex: __WEBPACK_IMPORTED_MODULE_1_regex_emoji___default()(),
                template(emojiName) {
                    return `<span class="ec ec-${__WEBPACK_IMPORTED_MODULE_2_just_kebab_case___default()(emojiName)}"></span>`
                }
            }

            const pluginOptions = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, defaultOptions, opts)
            return {
                transform(options) {
                    return Promise.resolve(
                        __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, options, {
                            result: options.result.replace(
                                pluginOptions.regex,
                                (match, emojiName) => {
                                    options._services.push({ id, match })
                                    return pluginOptions.template(emojiName, options, pluginOptions)
                                }
                            )
                        })
                    )
                }
            }
        }

        emoji.id = id


        /***/ }),
    /* 9 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_embed_plugin_utilities__ = __webpack_require__(2);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_embed_plugin_base__ = __webpack_require__(1);
        /* harmony export (immutable) */ __webpack_exports__["a"] = facebook;




        const id = "facebook"

        function facebook(opts) {
            const defaultOptions = {
                id,
                regex: /(https?:\/\/)?www\.facebook\.com\/(?:(videos|posts)\.php\?v=\d+|.*?\/(videos|posts)\/\d+\/?)/gi,
                height: 225,
                template(args, options, { height }) {
                    const url = args[0]
                    const type = url.indexOf("/videos/") < 0 ? "post" : "video"
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_embed_plugin_utilities__["b" /* withoutDetailsTemplate */])(
                        `https://www.facebook.com/plugins/${type}.php?href=${url}`,
                        height,
                        id
                    )
                }
            }

            const pluginOptions = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, defaultOptions, opts)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_embed_plugin_base__["a" /* default */])(pluginOptions)
        }

        facebook.id = id


        /***/ }),
    /* 10 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_embed_plugin_base__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_embed_plugin_utilities__ = __webpack_require__(2);
        /* harmony export (immutable) */ __webpack_exports__["a"] = github;




        const id = "github"

        async function _process(args, { fetch }) {
            const [, user, repo] = args

            try {
                const res = await fetch(`https://api.github.com/repos/${user}/${repo}`)
                return res.json()
            } catch (e) {
                return {}
            }
        }

        function github(opts) {
            const defaultOptions = {
                id,
                regex: /[^\.]github.com\/([\w\.\-]+)\/([\w\.\-]+[^\.])/gi,

                async template(
                    args,
                    options,
                    pluginOptions,
                    { owner, description, html_url, full_name }
                ) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_embed_plugin_utilities__["c" /* withDetailsTemplate */])({
                        thumbnail: owner.avatar_url,
                        url: html_url,
                        description,
                        title: full_name
                    })
                }
            }

            const pluginOptions = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, defaultOptions, opts, {
                _process
            })
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_embed_plugin_base__["a" /* default */])(pluginOptions)
        }

        github.id = id


        /***/ }),
    /* 11 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_in_browser__ = __webpack_require__(4);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_embed_plugin_base__ = __webpack_require__(1);
            /* harmony export (immutable) */ __webpack_exports__["a"] = highlight;




            const id = "highlight"

            function highlight(opts) {
                const defaultOptions = {
                    id,
                    regex: /(`{3})(\s|[a-z]+)\s*([\s\S]*?[^`])\s*\1(?!`)/gm,
                    prismjs: !__WEBPACK_IMPORTED_MODULE_1_is_in_browser__["a" /* default */] ? global.Prism : window.Prism,
                    template(args, options, { prismjs }) {
                        const language = args[2] === "\n" || !args[2] ? "markup" : args[2]
                        const code = args[3]

                        const className = `language-${language}`
                        return `<pre class="${className}"><code class="${className}">${prismjs.highlight(
                            code,
                            prismjs.languages[language]
                        )}</code></pre>`
                    }
                }

                const pluginOptions = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, defaultOptions, opts, {
                    _replaceAnyways: true,
                    _ignoreAnchorCheck: true,
                    _ignoreInlineCheck: true
                })

                if (!pluginOptions.prismjs) {
                    throw new Error(
                        "You need to load prismjs as a global variable or pass it in options."
                    )
                }

                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_embed_plugin_base__["a" /* default */])(pluginOptions)
            }

            highlight.id = id

            /* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(32)))

        /***/ }),
    /* 12 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_embed_plugin_base__ = __webpack_require__(1);
        /* harmony export (immutable) */ __webpack_exports__["a"] = instagram;



        const id = "instagram"

        function instagram(opts) {
            const defaultOptions = {
                id,
                height: 440,
                regex: /((https?:\/\/)(www\.)?instagram.com\/p\/[a-zA-Z0-9_\-\=]+)(\/\?[a-zA-Z0-9_\-\=]+)?/gi,
                template(args, options, { width, height }) {
                    return `<iframe class="ejs-embed ejs-instagram" src="${args[1]}/embed" height="${height}"></iframe>`
                }
            }

            const pluginOptions = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, defaultOptions, opts)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_embed_plugin_base__["a" /* default */])(pluginOptions)
        }

        instagram.id = id


        /***/ }),
    /* 13 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_embed_plugin_base__ = __webpack_require__(1);
        /* harmony export (immutable) */ __webpack_exports__["a"] = basicImage;



        const id = "media"

        const image = ["gif", "jpg", "jpeg", "tiff", "png", "svg", "webp"]
        const video = ["ogv", "webm", "mp4"]
        const audio = ["wav", "mp3", "ogg"]

        function basicImage(opts) {
            const defaultOptions = {
                id,
                regex: new RegExp(
                    `(?:https?)://\\S*\\.(?:${image.concat(video, audio).join("|")})`,
                    "gi"
                ),
                template(args) {
                    const url = args[0]
                    const ext = url.split(".").slice(-1)[0]
                    if (image.indexOf(ext) >= 0) {
                        return `<img class="ejs-embed" src="${url}"/>`
                    } else if (video.indexOf(ext) >= 0) {
                        return `<video src="${url}" controls class="ejs-video"></video>`
                    } else if (audio.indexOf(ext) >= 0) {
                        return `<audio src="${url}" controls class="ejs-audio"></audio>`
                    }
                }
            }
            const pluginOptions = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, defaultOptions, opts)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_embed_plugin_base__["a" /* default */])(pluginOptions)
        }

        basicImage.id = id


        /***/ }),
    /* 14 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_in_browser__ = __webpack_require__(4);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_dom__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_is_dom__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noembed_regex__ = __webpack_require__(15);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_embed_plugin_base__ = __webpack_require__(1);






        const id = "noEmbed"

        /**
         * Fetches the data from the noembed API
         * @param args
         * @returns {Promise.<*>}
         */
        async function _process(args, { fetch }) {
            const url = args[0]
            try {
                const res = await fetch(`https://noembed.com/embed?url=${url}`)
                return await res.json()
            } catch (e) {
                return {
                    html: url
                }
            }
        }

        function noEmbed(opts = {}) {
            const defaultOptions = {
                id,
                // Regex to be used to identify noembed supported services.
                // By default it takes from noembed-regex.js
                regex: null,

                // In case you want to exclude a few services, you can do it here.
                // It accepts an array of service names in lowercase.
                exclude: [],

                twttr: __WEBPACK_IMPORTED_MODULE_1_is_in_browser__["a" /* default */] ? window.twttr : null,

                onLoad() {},

                async template(args, options, pluginOptions, { html }) {
                    return `<div class="ejs-embed">${html}</div>`
                },

                _onLoadInternal({ input, result }, { twttr, onLoad }) {
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__noembed_regex__["a" /* isServicePresent */])("twitter", result) && twttr && __WEBPACK_IMPORTED_MODULE_2_is_dom___default()(input)) {
                        twttr.widgets.load(input)
                        twttr.events.bind("loaded", onLoad)
                    }
                }
            }

            const pluginOptions = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, defaultOptions, opts, {
                _process
            })

            if (!opts.regex) {
                pluginOptions.regex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__noembed_regex__["b" /* default */])(pluginOptions.exclude)
            }

            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_embed_plugin_base__["a" /* default */])(pluginOptions)
        }

        noEmbed.id = id

        /* harmony default export */ __webpack_exports__["a"] = (noEmbed);


        /***/ }),
    /* 15 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_pluck_it__ = __webpack_require__(27);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_pluck_it___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_pluck_it__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_just_flatten_it__ = __webpack_require__(25);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_just_flatten_it___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_just_flatten_it__);
        /* harmony export (immutable) */ __webpack_exports__["b"] = getRegexes;
        /* harmony export (immutable) */ __webpack_exports__["a"] = isServicePresent;



        const regexes = [
            {
                patterns: ["https?://soundcloud.com/.*/.[^\\s]*"],
                name: "SoundCloud"
            },
            {
                name: "slideshare",
                patterns: [
                    "https?://www\\.slideshare\\.net/.*/.[^\\s]*",
                    "https?://fr\\.slideshare\\.net/.*/.[^\\s]*",
                    "https?://de\\.slideshare\\.net/.*/.[^\\s]*",
                    "https?://es\\.slideshare\\.net/.*/.[^\\s]*",
                    "https?://pt\\.slideshare\\.net/.*/.[^\\s]*"
                ]
            },
            {
                name: "vimeo",
                patterns: [
                    "https?://vimeo\\.com/.[^\\s]*",
                    "https?://vimeo\\.com/album/.*/video/.[^\\s]*",
                    "https?://vimeo\\.com/channels/.*/.[^\\s]*",
                    "https?://vimeo\\.com/groups/.*/videos/.[^\\s]*",
                    "https?://vimeo\\.com/ondemand/.*/.[^\\s]*"
                ]
            },
            {
                patterns: [
                    "https?://photos\\.app\\.net/.*/.[^\\s]*",
                    "https?://live\\.amcharts\\.com/.[^\\s]*",
                    "https?://codepen\\.io/.[^\\s]*",
                    "https?://codepen\\.io/.[^\\s]*",
                    "https?://www\\.collegehumor\\.com/video/.[^\\s]*",
                    "https?://www\\.dailymotion\\.com/video/.[^\\s]*",
                    "https?://.*\\.deviantart\\.com/art/.[^\\s]*",
                    "https?://.*\\.deviantart\\.com/.*#/d.[^\\s]*",
                    "https?://dotsub\\.com/view/.[^\\s]*",
                    "https?://.*\\.flickr\\.com/photos/.[^\\s]*",
                    "https?://flic\\.kr/p/.[^\\s]*",
                    "https?://.*\\.wikimedia\\.org/.*_geograph\\.org\\.uk_.[^\\s]*",
                    "https?://gfycat\\.com/.[^\\s]*",
                    "https?://www\\.gfycat\\.com/.[^\\s]*",
                    "https?://gfycat\\.com/.[^\\s]*",
                    "https?://www\\.gfycat\\.com/.[^\\s]*",
                    "https?://giphy\\.com/gifs/.[^\\s]*",
                    "https?://media\\.giphy\\.com/media/.*/giphy\\.gif",
                    "https?://www\\.hulu\\.com/watch/.[^\\s]*",
                    "https?://www\\.kickstarter\\.com/projects/.[^\\s]*",
                    "https?://www\\.mixcloud\\.com/.*/.*/",
                    "https?://reddit\\.com/r/.*/comments/.*/.[^\\s]*",
                    "https?://.*\\.screen9\\.tv/.[^\\s]*",
                    "https?://www\\.scribd\\.com/doc/.[^\\s]*",
                    "https?://.*\\.smugmug\\.com/.[^\\s]*",
                    "https?://soundcloud\\.com/.[^\\s]*",
                    "https?://play\\.soundsgood\\.co/playlist/.[^\\s]*",
                    "https?://speakerdeck\\.com/.*/.[^\\s]*",
                    "https?://speakerdeck\\.com/.*/.[^\\s]*",
                    "https?://ted\\.com/talks/.[^\\s]*",
                    "https?://www\\.nytimes\\.com/svc/oembed",
                    "https?://nytimes\\.com/.[^\\s]*",
                    "https?://.*\\.nytimes\\.com/.[^\\s]*",
                    "https?://clips\\.twitch\\.tv/.[^\\s]*",
                    "https?://clips\\.twitch\\.tv/.[^\\s]*",
                    "https?://www\\.twitch\\.tv/.[^\\s]*",
                    "https?://www\\.twitch\\.tv/.[^\\s]*",
                    "https?://twitch\\.tv/.[^\\s]*",
                    "https?://twitch\\.tv/.[^\\s]*",
                    "https?://.*\\.ustream\\.tv/.[^\\s]*",
                    "https?://.*\\.ustream\\.com/.[^\\s]*",
                    "https?://veervr\\.tv/videos/.[^\\s]*",
                    "https?://www\\.vevo\\.com/.[^\\s]*",
                    "https?://www\\.vevo\\.com/.[^\\s]*",
                    "https?://player\\.vimeo\\.com/video/.[^\\s]*",
                    "https?://vine\\.co/v/.[^\\s]*",
                    "https?://vine\\.co/v/.[^\\s]*"
                ],
                name: "oEmbed"
            },
            {
                name: "Imgur",
                patterns: ["https?://imgur\\.com/(?:[^\\/]+/)?[0-9a-zA-Z]+$"]
            },
            {
                patterns: [
                    "https?://www\\.(dropbox\\.com/s/.+\\.(?:jpg|png|gif))",
                    "https?://db\\.tt/[a-zA-Z0-9][^\\s]+"
                ],
                name: "Dropbox"
            },
            // #if IS_CJS
            {
                patterns: [
                    "https?:\\/\\/(?:[^\\.]+\\.)?youtube\\.com\\/watch\\/?\\?(?:.+&)?v=([^&][^\\s]+)",
                    "https?://(?:[^\\.]+\\.)?(?:youtu\\.be|youtube\\.com/embed)/([a-zA-Z0-9_-][^\\s]+)"
                ],
                name: "YouTube"
            },
            // #endif
            {
                patterns: [
                    "https?://(?:www|mobile\\.)?twitter\\.com/(?:#!/)?([^/]+)/status(?:es)?/(\\d+)"
                ],
                name: "Twitter"
            }
        ]

        function getRegexes(excludeServices = []) {
            const includedRegexes = regexes.filter(
                r => excludeServices.indexOf(r.name.toLowerCase()) === -1
            )
            const patterns = __WEBPACK_IMPORTED_MODULE_1_just_flatten_it___default()(__WEBPACK_IMPORTED_MODULE_0_just_pluck_it___default()(includedRegexes, "patterns"))
            return new RegExp(patterns.join("|"), "gi")
        }

        function isServicePresent(serviceName, text) {
            const service = regexes.filter(r => r.name.toLowerCase() === serviceName)[0]
            const regex = new RegExp(service.patterns.join("|"), "gi")
            return regex.test(text)
        }


        /***/ }),
    /* 16 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_html_linkify__ = __webpack_require__(24);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_html_linkify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_html_linkify__);
        /* harmony export (immutable) */ __webpack_exports__["a"] = url;



        const id = "url"

        function url(opts) {
            const defaultOptions = {
                attributes: {},

                // setting this to true will mess up characters like "
                escape: false
            }

            const { attributes, escape } = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, defaultOptions, opts)
            return {
                id,
                async transform(options) {
                    return __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, options, {
                        result: __WEBPACK_IMPORTED_MODULE_1_html_linkify___default()(options.result, { attributes, escape })
                    })
                }
            }
        }

        url.id = id


        /***/ }),
    /* 17 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* unused harmony default export */ var _unused_webpack_default_export = (function(params) {
            const esc = encodeURIComponent
            return Object.keys(params).map(k => `${esc(k)}=${esc(params[k])}`).join("&")
        });


        /***/ }),
    /* 18 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__string_replace_async__ = __webpack_require__(19);



        const anchorRegex = /<a[^>]*>([^<]+)<\/a>/gi

        function getAnchorRegex(regex) {
            return new RegExp(`<a[^>]*>(${regex.source})<\\/a>`, "gi")
        }

        /**
         * Returns the matched regex data or whether the text has any matching string
         * @param regex Regex of the matching pattern
         * @param text String which has to be searched
         * @param test Return boolean or matching array
         * @returns {*} Boolean|Array
         */
        function isMatchPresent(regex, text, test = false) {
            return test ? regex.test(text) : text.match(regex)
        }

        /**
         * Tells wheteher the matching string is present inside an anchor tag
         * @param text
         * @returns {*} Boolean
         * @param regex
         */
        function isAnchorTagApplied({ result, plugins = [] }, { regex }) {
            return (
                getAnchorRegex(regex).test(result) ||
                plugins.filter(plugin => plugin.id === "url").length
            )
        }

        function saveServiceName({ _services }, { id }, match) {
            if (!_services.filter(x => x.match === match).length) {
                _services.push({ id, match })
            }
        }

        async function pushEmbedContent(text, options, pluginOptions, index) {
            const { regex } = pluginOptions
            await __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__string_replace_async__["a" /* default */])(text, regex, async (...args) => {
                options._embeds.push({
                    content: await getTemplate(args, options, pluginOptions),
                    index: index || args.find(x => typeof x === "number")
                })
                saveServiceName(options, pluginOptions, args[0])
            })
            return options
        }

        /**
         * Save the embed code into an array that can be added later to the end of original string
         * @param opts
         * @param pluginOptions
         */
        async function saveEmbedData(opts, pluginOptions) {
            const { regex } = pluginOptions
            let options = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, opts)

            if (isAnchorTagApplied(options, { regex })) {
                await __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__string_replace_async__["a" /* default */])(
                    options.result,
                    anchorRegex,
                    async (match, url, index) => {
                        if (!isMatchPresent(regex, match, true)) return match
                        saveServiceName(options, pluginOptions, match)
                        options = await pushEmbedContent(url, options, pluginOptions, index)
                        return match
                    }
                )
            } else {
                options = pushEmbedContent(options.result, options, pluginOptions)
            }

            return options
        }

        function getMatch(regex, string) {
            regex.lastIndex = 0
            const matches = regex.exec(string)
            regex.lastIndex = 0
            return matches
        }

        async function getTemplate(args, options, pluginOptions) {
            const { _process, template } = pluginOptions
            let data
            if (_process) {
                data = await _process(args, options, pluginOptions)
            }
            return template(args, options, pluginOptions, data)
        }

        async function basicReplace(options, pluginOptions) {
            const { result, replaceUrl } = options
            const { regex, _replaceAnyways } = pluginOptions
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__string_replace_async__["a" /* default */])(result, regex, async (...args) => {
                saveServiceName(options, pluginOptions, args[0])
                return replaceUrl || _replaceAnyways
                    ? getTemplate(args, options, pluginOptions)
                    : `${args[0]} ${await getTemplate(args, options, pluginOptions)}`
            })
        }

        async function anchorReplace(options, pluginOptions) {
            const { result, replaceUrl } = options
            const { regex, _replaceAnyways } = pluginOptions

            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__string_replace_async__["a" /* default */])(result, anchorRegex, async (match, url) => {
                if (!isMatchPresent(regex, url, true)) {
                    return match
                }

                if (!(replaceUrl || _replaceAnyways)) {
                    const args = getMatch(regex, url)
                    saveServiceName(options, pluginOptions, args[0])
                    const t = await getTemplate(args, options, pluginOptions)
                    return args ? match + t : match
                }
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__string_replace_async__["a" /* default */])(url, regex, async (...args) => {
                    saveServiceName(options, pluginOptions, args[0])
                    return getTemplate(args, options, pluginOptions)
                })
            })
        }

        /**
         * Insert the embed code in the original string.
         * @param options
         * @param pluginOptions
         * @returns options
         */
        /* harmony default export */ __webpack_exports__["a"] = (async function(options, pluginOptions) {
            const { inlineEmbed } = options
            const { _ignoreAnchorCheck, _ignoreInlineCheck, regex } = pluginOptions

            if (!inlineEmbed && !_ignoreInlineCheck) {
                return saveEmbedData(options, pluginOptions)
            }

            let output

            output =
                isAnchorTagApplied(options, { regex }) && !_ignoreAnchorCheck
                    ? await anchorReplace(options, pluginOptions)
                    : await basicReplace(options, pluginOptions)

            return __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, options, {
                result: output
            })
        });


        /***/ }),
    /* 19 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);


        function matchAll(str, re) {
            const matches = []
            let res = re.exec(str)

            while (res) {
                matches.push(res)

                if (!re.global) {
                    break
                }

                res = re.exec(str)
            }
            return matches
        }

        function replaceAll(str, matches) {
            return matches.reverse().reduce(function(res, match) {
                const prefix = res.slice(0, match.index)
                const postfix = res.slice(match.index + match[0].length)

                return prefix + match.replacement + postfix
            }, str)
        }

        function assignReplacement(match, replacer) {
            const args = match.concat([match.index, match.input])

            return replacer.apply(null, args).then(function(res) {
                return __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, match, { replacement: res })
            })
        }

        function concurrency(matches, replacer) {
            const promises = matches.map(function(match) {
                return assignReplacement(match, replacer)
            })

            return Promise.all(promises)
        }

        function processString(str, re, replacer) {
            const matches = matchAll(str, re)
            const processor = concurrency

            return processor(matches, replacer).then(function(matches) {
                return replaceAll(str, matches)
            })
        }

        function stringReplaceAsync(str, re, replacer) {
            re.lastIndex = 0
            try {
                return Promise.resolve(processString(str, re, replacer))
            } catch (e) {
                return Promise.reject(e)
            }
        }

        /* harmony default export */ __webpack_exports__["a"] = (stringReplaceAsync);


        /***/ }),
    /* 20 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_truncate__ = __webpack_require__(28);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_truncate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_truncate__);


        /* harmony default export */ __webpack_exports__["a"] = (function(
            { url, title, embedUrl, description, thumbnail },
            thumbClassName,
            showPlayIcon = false
        ) {
            return `<div class="ejs-preview ejs-embed"><div class="ejs-thumb ${thumbClassName}" data-url="${embedUrl}" style="background-image:url(${thumbnail})">${showPlayIcon ? '<span>&#9658;</span>' : ''}</div><div class="ejs-info"><h4 class="ejs-title"><a href="${url}">${title}</a></h4><div class="ejs-desc">${__WEBPACK_IMPORTED_MODULE_0_just_truncate___default()(
                description,
                150
            )}</div></div></div>`
        });


        /***/ }),
    /* 21 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony default export */ __webpack_exports__["a"] = (function(embedUrl, height, name) {
            return `<iframe class="ejs-embed ejs-${name}" src="${embedUrl}" frameBorder="0" height="${height}"></iframe>`
        });


        /***/ }),
    /* 22 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_extend__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_dom__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_is_dom__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_youtube_regex__ = __webpack_require__(33);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_youtube_regex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_youtube_regex__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_embed_plugin_base__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_embed_plugin_utilities__ = __webpack_require__(2);






        const id = "youtube"
        const baseUrl = "https://www.youtube.com/"

        /**
         * Decorate data into a simpler structure
         * @param data
         * @returns {{title, thumbnail, rawDescription, views: *, likes: *, description: *, url: string, id, host: string}}
         */
        function formatData({ snippet, id }) {
            return {
                title: snippet.title,
                thumbnail: snippet.thumbnails.medium.url,
                description: snippet.description,
                url: `${baseUrl}watch?v=${id}`,
                embedUrl: `${baseUrl}embed/${id}`
            }
        }

        /**
         * Fetch details of a particular youtube video
         * @param id
         * @param gAuthKey
         * @returns {Promise.<*>}
         */
        async function fetchDetails(id, fetch, gAuthKey) {
            try {
                const res = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${gAuthKey}&part=snippet,statistics`
                )
                const data = await res.json()
                return data.items[0]
            } catch (e) {
                console.log(e)
                return {}
            }
        }

        /**
         * Function executed when a content is rendered on the client site.
         * @param input
         * @param clickClass
         * @param onVideoShow
         * @param height
         */
        function onLoad({ input }, { clickClass, onVideoShow, height }) {
            if (!__WEBPACK_IMPORTED_MODULE_1_is_dom___default()(input)) {
                throw new Error("input should be a DOM Element.")
            }
            let classes = document.getElementsByClassName(clickClass)
            for (let i = 0; i < classes.length; i++) {
                classes[i].onclick = function() {
                    let url = this.getAttribute("data-url")
                    onVideoShow(url)
                    url += "?autoplay=1"
                    this.parentNode.innerHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_embed_plugin_utilities__["b" /* withoutDetailsTemplate */])(url, height, id)
                }
            }
        }

        function _process(args, { fetch }, { gAuthKey, details }) {
            return details ? fetchDetails(args[1], fetch, gAuthKey) : Promise.resolve()
        }

        function youtube(opts) {
            const defaultOptions = {
                id,
                regex: __WEBPACK_IMPORTED_MODULE_2_youtube_regex___default()(),
                gAuthKey: "",
                details: true,
                height: 300,
                clickClass: "ejs-video-thumb",
                onVideoShow() {},
                _onLoadInternal(options, pluginOptions) {
                    onLoad(options, pluginOptions)
                },
                onLoad() {},
                async template(args, options, { details, height, clickClass }, data) {
                    const embedUrl = `${baseUrl}embed/${args[1]}`
                    return details
                        ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_embed_plugin_utilities__["c" /* withDetailsTemplate */])(formatData(data), clickClass, true)
                        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_embed_plugin_utilities__["b" /* withoutDetailsTemplate */])(embedUrl, height, id)
                }
            }

            if (!opts.gAuthKey) {
                throw new Error("You need to pass google auth key.")
            }

            const pluginOptions = __WEBPACK_IMPORTED_MODULE_0_just_extend___default()({}, defaultOptions, opts, {
                _process
            })
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_embed_plugin_base__["a" /* default */])(pluginOptions)
        }

        youtube.id = id

        /* harmony default export */ __webpack_exports__["a"] = (youtube);


        /***/ }),
    /* 23 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /* From Twitter's Hogan.js */

        var rAmp = /&/g,
            rLt = /</g,
            rGt = />/g,
            rApos =/\'/g,
            rQuot = /\"/g,
            hChars =/[&<>\"\']/;

        function coerceToString(val) {
            return String((val === null || val === undefined) ? '' : val);
        }

        module.exports = function(str) {
            str = coerceToString(str);

            return hChars.test(str)
                ? str
                    .replace(rAmp,'&amp;')
                    .replace(rLt,'&lt;')
                    .replace(rGt,'&gt;')
                    .replace(rApos,'&#39;')
                    .replace(rQuot, '&quot;')
                : str;
        };


        /***/ }),
    /* 24 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
// Takes plain text and replaces links with HTML anchor elements. Based on
// https://github.com/thejh/node-linkify


// Link regex
// See http://daringfireball.net/2010/07/improved_regex_for_matching_urls
        var rLink = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

// Email regex
        var rEmail = /\b(([a-zA-Z0-9\-\_\.])+(\+[a-zA-Z0-9]*)?@[a-zA-Z\_\-]+?(\.[a-zA-Z]{2,6})+)/gim;

        var escape = __webpack_require__(23);

        module.exports = function(text, options) {
            if ( ! options) options = {};

            var retval = "", cur = 0, match;

            var escapeFn = options.escape === false ? function(str) { return str; } : escape;

            while (match = rLink.exec(text)) {
                retval += escapeFn(text.slice(cur, match.index));
                retval += anchor(match[0], options.attributes);
                cur = rLink.lastIndex;
            }

            retval += escapeFn(text.slice(cur));
            retval = emails(retval, options.attributes);

            return retval;
        };

// Return an anchor element for the url
        function anchor(url, attrs) {
            var text = escape(url),
                href = url;

            // Ensure protocol at beginning of url
            if (!/^[a-zA-Z]{1,6}:/.test(href)) {
                href = 'http://' + href;
            }

            var attrsString = combine({ href: href }, attrs);

            return "<a " + attrsString + ">" + text + "</a>";
        }

// combine attrs objects into single string
        function combine() {
            return Array.prototype.slice.call(arguments)
                .map(attributes)
                .filter(Boolean)
                .join(" ");
        }

// Replace emails in text with anchor elements
        function emails(text, attrs) {
            var attrsString = attributes(attrs);

            return text.replace(rEmail, function(match, email) {
                var elAttrs = attributes({ href: "mailto:" + email });
                if (attrsString) {
                    elAttrs += " " + attrsString;
                }

                return "<a " + elAttrs + ">" + escape(email) + "</a>";
            });
        }

        function attributes(attrs) {
            if ( ! attrs) return "";
            return Object.keys(attrs).map(function(name) {
                var value = attrs[name];
                return escape(name) + "=\"" + escape(value) + "\"";
            }).join(" ");
        }


        /***/ }),
    /* 25 */
    /***/ (function(module, exports) {

        module.exports = flatten;

        /*
          flatten([[1, [2, 3]], [[4, 5], 6, 7, [8, 9]]]);
          // [1, 2, 3, 4, 5, 6, 7, 8, 9]
        */

        function flatten(arr) {
            var result = [];
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                var elem = arr[i];
                if (Array.isArray(elem)) {
                    result.push.apply(result, flatten(elem));
                } else {
                    result.push(elem);
                }
            }
            return result;
        }


        /***/ }),
    /* 26 */
    /***/ (function(module, exports) {

        module.exports = kebabCase;

        /*
          kebabCase('the quick brown fox'); // 'the-quick-brown-fox'
          kebabCase('the-quick-brown-fox'); // 'the-quick-brown-fox'
          kebabCase('the_quick_brown_fox'); // 'the-quick-brown-fox'
          kebabCase('theQuickBrownFox'); // 'the-quick-brown-fox'
          kebabCase('theQuickBrown Fox'); // 'the-quick-brown-fox'
          kebabCase('thequickbrownfox'); // 'thequickbrownfox'
          kebabCase('the - quick * brown# fox'); // 'the-quick-brown-fox'
          kebabCase('theQUICKBrownFox'); // 'the-q-u-i-c-k-brown-fox'
        */

// any combination of spaces and punctuation characters
// thanks to http://stackoverflow.com/a/25575009
        var wordSeparators = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/;
        var capitals = /[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g;

        function kebabCase(str) {
            //replace capitals with space + lower case equivalent for later parsing
            str = str.replace(capitals, function (match) {
                return ' ' + (match.toLowerCase() || match);
            });
            return str.trim().split(wordSeparators).join('-');
        }


        /***/ }),
    /* 27 */
    /***/ (function(module, exports) {

        module.exports = pluck;

        /*
          var arr = [{a:1, b:2}, {a:4, b:3}, {a:2, b:5}];
          pluck(arr, 'a'); // [1, 4, 2]
          var obj = {x: {a:1, b:2}, y: {a:4, b:3}, z: {a:2, b:5}];
          pluck(obj, 'a'); // {x: 1, y: 4, z: 2}
        */

        function pluck(collection, propertyName) {
            if (!collection || typeof collection != 'object') {
                return new Error('expected first argument to be an object or array');
            }

            var result, len, i, keys, key;
            if (Array.isArray(collection)) {
                result = [];
                len = collection.length;
                for (i = 0; i < len; i++) {
                    result.push(collection[i][propertyName]);
                }
            } else {
                result = {};
                keys = Object.keys(collection);
                len = keys.length;
                for (i = 0; i < len; i++) {
                    key = keys[i];
                    result[key] = collection[key][propertyName];
                }
            }
            return result;
        }


        /***/ }),
    /* 28 */
    /***/ (function(module, exports) {

        module.exports = truncate;

        /*
          truncate('when shall we three meet again', 9); // 'when s...'
          truncate('when shall we three meet again', 10, ' (etc)'); // 'when (etc)'
          truncate('when shall we', 15,); // 'when shall we'
          truncate('when shall we', 15, '(more)'); // 'when shall we'
          truncate('when shall we', 7, ' (more)'); // ' (more)'
        */

        function truncate(str, length, end) {
            if ((length == null) || (length >= str.length)) {
                return str;
            }
            if (end == null) {
                end = '...';
            }
            return str.slice(0, Math.max(0, length - end.length)) + end;
        }


        /***/ }),
    /* 29 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";

        module.exports = (iterable, reducer, initVal) => new Promise((resolve, reject) => {
            const iterator = iterable[Symbol.iterator]();
            let i = 0;

            const next = total => {
                const el = iterator.next();

                if (el.done) {
                    resolve(total);
                    return;
                }

                Promise.all([total, el.value])
                    .then(value => {
                        next(reducer(value[0], value[1], i++));
                    })
                    .catch(reject);
            };

            next(initVal);
        });


        /***/ }),
    /* 30 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";

        const pReduce = __webpack_require__(29);

        module.exports = (iterable, initVal) => pReduce(iterable, (prev, fn) => fn(prev), initVal);


        /***/ }),
    /* 31 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /**
         * emojiRegex
         * Returns the emoji regex value.
         *
         * @name emojiRegex
         * @function
         * @return {RegExp} The emoji regex.
         */
        module.exports = function emojiRegex() {
            return (/:([a-z0-9_\+\-]+):/g
            );
        };

        /***/ }),
    /* 32 */
    /***/ (function(module, exports) {

        var g;

// This works in non-strict mode
        g = (function() {
            return this;
        })();

        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (1,eval)("this");
        } catch(e) {
            // This works if the window reference is available
            if(typeof window === "object")
                g = window;
        }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

        module.exports = g;


        /***/ }),
    /* 33 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /**
         * youtube-regex <https://github.com/tunnckoCore/youtube-regex>
         *
         * Copyright (c) 2014 Charlike Mike Reagent, contributors.
         * Released under the MIT license.
         */



        module.exports = function youtubeRegex() {
            var regex = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/g;

            return regex;
        };


        /***/ }),
    /* 34 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(7);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_embed_js__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_embed_preset_basic__ = __webpack_require__(6);


        window.embed = __WEBPACK_IMPORTED_MODULE_1_embed_js__["a"];
        window.embedPreset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_embed_preset_basic__["a"]);

        /***/ })
    /******/ ]);