(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/js-worker-search/dist/js-worker-search.js
  var require_js_worker_search = __commonJS({
    "node_modules/js-worker-search/dist/js-worker-search.js"(exports, module) {
      module.exports = function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId])
            return installedModules[moduleId].exports;
          var module2 = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: false
          };
          modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
          module2.loaded = true;
          return module2.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
      }([
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.INDEX_MODES = void 0;
          var _SearchApi = __webpack_require__(1);
          var _SearchApi2 = _interopRequireDefault(_SearchApi);
          var _util = __webpack_require__(2);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          exports2.default = _SearchApi2.default;
          exports2.INDEX_MODES = _util.INDEX_MODES;
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(2);
          var _worker = __webpack_require__(6);
          var _worker2 = _interopRequireDefault(_worker);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance41, Constructor) {
            if (!(instance41 instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var SearchApi2 = function SearchApi3() {
            var _this = this;
            var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, caseSensitive = _ref.caseSensitive, indexMode = _ref.indexMode, matchAnyToken = _ref.matchAnyToken, tokenizePattern = _ref.tokenizePattern;
            _classCallCheck(this, SearchApi3);
            this.indexDocument = function(uid, text2) {
              _this._search.indexDocument(uid, text2);
              return _this;
            };
            this.search = function(query) {
              return _this._search.search(query);
            };
            this.terminate = function() {
              _this._search.terminate();
            };
            if (typeof window !== "undefined" && window.Worker) {
              this._search = new _worker2.default({
                indexMode,
                matchAnyToken,
                tokenizePattern,
                caseSensitive
              });
            } else {
              this._search = new _util.SearchUtility({
                indexMode,
                matchAnyToken,
                tokenizePattern,
                caseSensitive
              });
            }
          };
          exports2.default = SearchApi2;
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.SearchUtility = exports2.INDEX_MODES = void 0;
          var _SearchUtility = __webpack_require__(3);
          var _SearchUtility2 = _interopRequireDefault(_SearchUtility);
          var _constants = __webpack_require__(4);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          exports2.default = _SearchUtility2.default;
          exports2.INDEX_MODES = _constants.INDEX_MODES;
          exports2.SearchUtility = _SearchUtility2.default;
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          var _constants = __webpack_require__(4);
          var _SearchIndex = __webpack_require__(5);
          var _SearchIndex2 = _interopRequireDefault(_SearchIndex);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance41, Constructor) {
            if (!(instance41 instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var SearchUtility = function() {
            function SearchUtility2() {
              var _this = this;
              var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$caseSensitive = _ref.caseSensitive, caseSensitive = _ref$caseSensitive === void 0 ? false : _ref$caseSensitive, _ref$indexMode = _ref.indexMode, indexMode = _ref$indexMode === void 0 ? _constants.INDEX_MODES.ALL_SUBSTRINGS : _ref$indexMode, _ref$matchAnyToken = _ref.matchAnyToken, matchAnyToken = _ref$matchAnyToken === void 0 ? false : _ref$matchAnyToken, _ref$tokenizePattern = _ref.tokenizePattern, tokenizePattern = _ref$tokenizePattern === void 0 ? /\s+/ : _ref$tokenizePattern;
              _classCallCheck(this, SearchUtility2);
              this.indexDocument = function(uid, text2) {
                _this._uids[uid] = true;
                var fieldTokens = _this._tokenize(_this._sanitize(text2));
                fieldTokens.forEach(function(fieldToken) {
                  var expandedTokens = _this._expandToken(fieldToken);
                  expandedTokens.forEach(function(expandedToken) {
                    _this._searchIndex.indexDocument(expandedToken, uid);
                  });
                });
                return _this;
              };
              this.search = function(query) {
                if (!query) {
                  return Object.keys(_this._uids);
                } else {
                  var tokens = _this._tokenize(_this._sanitize(query));
                  return _this._searchIndex.search(tokens, _this._matchAnyToken);
                }
              };
              this.terminate = function() {
              };
              this._caseSensitive = caseSensitive;
              this._indexMode = indexMode;
              this._matchAnyToken = matchAnyToken;
              this._tokenizePattern = tokenizePattern;
              this._searchIndex = new _SearchIndex2.default();
              this._uids = {};
            }
            _createClass(SearchUtility2, [{
              key: "getCaseSensitive",
              value: function getCaseSensitive() {
                return this._caseSensitive;
              }
            }, {
              key: "getIndexMode",
              value: function getIndexMode() {
                return this._indexMode;
              }
            }, {
              key: "getMatchAnyToken",
              value: function getMatchAnyToken() {
                return this._matchAnyToken;
              }
            }, {
              key: "getTokenizePattern",
              value: function getTokenizePattern() {
                return this._tokenizePattern;
              }
            }, {
              key: "setCaseSensitive",
              value: function setCaseSensitive(caseSensitive) {
                this._caseSensitive = caseSensitive;
              }
            }, {
              key: "setIndexMode",
              value: function setIndexMode(indexMode) {
                if (Object.keys(this._uids).length > 0) {
                  throw Error("indexMode cannot be changed once documents have been indexed");
                }
                this._indexMode = indexMode;
              }
            }, {
              key: "setMatchAnyToken",
              value: function setMatchAnyToken(matchAnyToken) {
                this._matchAnyToken = matchAnyToken;
              }
            }, {
              key: "setTokenizePattern",
              value: function setTokenizePattern(pattern) {
                this._tokenizePattern = pattern;
              }
            }, {
              key: "_expandToken",
              value: function _expandToken(token) {
                switch (this._indexMode) {
                  case _constants.INDEX_MODES.EXACT_WORDS:
                    return [token];
                  case _constants.INDEX_MODES.PREFIXES:
                    return this._expandPrefixTokens(token);
                  case _constants.INDEX_MODES.ALL_SUBSTRINGS:
                  default:
                    return this._expandAllSubstringTokens(token);
                }
              }
            }, {
              key: "_expandAllSubstringTokens",
              value: function _expandAllSubstringTokens(token) {
                var expandedTokens = [];
                try {
                  for (var i = 0, length = token.length; i < length; ++i) {
                    var substring = "";
                    for (var j = i; j < length; ++j) {
                      substring += token.charAt(j);
                      expandedTokens.push(substring);
                    }
                  }
                } catch (error) {
                  console.error('Unable to parse token "' + token + '" ' + error);
                }
                return expandedTokens;
              }
            }, {
              key: "_expandPrefixTokens",
              value: function _expandPrefixTokens(token) {
                var expandedTokens = [];
                try {
                  for (var i = 0, length = token.length; i < length; ++i) {
                    expandedTokens.push(token.substr(0, i + 1));
                  }
                } catch (error) {
                  console.error('Unable to parse token "' + token + '" ' + error);
                }
                return expandedTokens;
              }
            }, {
              key: "_sanitize",
              value: function _sanitize(string) {
                return this._caseSensitive ? string.trim() : string.trim().toLocaleLowerCase();
              }
            }, {
              key: "_tokenize",
              value: function _tokenize(text2) {
                return text2.split(this._tokenizePattern).filter(function(text3) {
                  return text3;
                });
              }
            }]);
            return SearchUtility2;
          }();
          exports2.default = SearchUtility;
        },
        function(module2, exports2) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var INDEX_MODES = exports2.INDEX_MODES = {
            ALL_SUBSTRINGS: "ALL_SUBSTRINGS",
            EXACT_WORDS: "EXACT_WORDS",
            PREFIXES: "PREFIXES"
          };
        },
        function(module2, exports2) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          function _classCallCheck(instance41, Constructor) {
            if (!(instance41 instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var SearchIndex = function() {
            function SearchIndex2() {
              _classCallCheck(this, SearchIndex2);
              this.tokenToUidMap = {};
            }
            _createClass(SearchIndex2, [{
              key: "indexDocument",
              value: function indexDocument(token, uid) {
                if (!this.tokenToUidMap[token]) {
                  this.tokenToUidMap[token] = {};
                }
                this.tokenToUidMap[token][uid] = uid;
              }
            }, {
              key: "search",
              value: function search(tokens, matchAnyToken) {
                var _this = this;
                var uidMap = {};
                var uidMatches = {};
                var initialized = false;
                tokens.forEach(function(token) {
                  var currentUidMap = _this.tokenToUidMap[token] || {};
                  if (!initialized) {
                    initialized = true;
                    for (var _uid in currentUidMap) {
                      uidMap[_uid] = currentUidMap[_uid];
                      uidMatches[_uid] = 1;
                    }
                  } else {
                    if (!matchAnyToken) {
                      for (var _uid2 in uidMap) {
                        if (!currentUidMap[_uid2]) {
                          delete uidMap[_uid2];
                        }
                      }
                    } else {
                      for (var _uid3 in currentUidMap) {
                        uidMap[_uid3] = currentUidMap[_uid3];
                        uidMatches[_uid3] = (uidMatches[_uid3] || 0) + 1;
                      }
                    }
                  }
                });
                var uids = [];
                for (var _uid4 in uidMap) {
                  uids.push(uidMap[_uid4]);
                }
                if (matchAnyToken) {
                  uids.sort(function(a, b) {
                    return uidMatches[b] - uidMatches[a];
                  });
                }
                return uids;
              }
            }]);
            return SearchIndex2;
          }();
          exports2.default = SearchIndex;
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _SearchWorkerLoader = __webpack_require__(7);
          var _SearchWorkerLoader2 = _interopRequireDefault(_SearchWorkerLoader);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          exports2.default = _SearchWorkerLoader2.default;
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          var _uuid = __webpack_require__(8);
          var _uuid2 = _interopRequireDefault(_uuid);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance41, Constructor) {
            if (!(instance41 instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var SearchWorkerLoader = function() {
            function SearchWorkerLoader2() {
              var _this = this;
              var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, caseSensitive = _ref.caseSensitive, indexMode = _ref.indexMode, matchAnyToken = _ref.matchAnyToken, tokenizePattern = _ref.tokenizePattern, WorkerClass = _ref.WorkerClass;
              _classCallCheck(this, SearchWorkerLoader2);
              this.indexDocument = function(uid, text2) {
                _this._worker.postMessage({
                  method: "indexDocument",
                  text: text2,
                  uid
                });
                return _this;
              };
              this.search = function(query) {
                return new Promise(function(resolve, reject) {
                  var callbackId = _uuid2.default.v4();
                  var data = {
                    callbackId,
                    complete: false,
                    error: null,
                    reject,
                    resolve,
                    results: null
                  };
                  _this._worker.postMessage({
                    method: "search",
                    query,
                    callbackId
                  });
                  _this._callbackQueue.push(data);
                  _this._callbackIdMap[callbackId] = data;
                });
              };
              this.terminate = function() {
                _this._worker.terminate();
              };
              if (!WorkerClass) {
                WorkerClass = __webpack_require__(10);
              }
              this._callbackQueue = [];
              this._callbackIdMap = {};
              this._worker = new WorkerClass();
              this._worker.onerror = function(event) {
                if (event.data) {
                  var _event$data = event.data, _callbackId = _event$data.callbackId, _error = _event$data.error;
                  _this._updateQueue({ callbackId: _callbackId, error: _error });
                } else {
                  console.error(event);
                }
              };
              this._worker.onmessage = function(event) {
                var _event$data2 = event.data, callbackId = _event$data2.callbackId, results = _event$data2.results;
                _this._updateQueue({ callbackId, results });
              };
              if (caseSensitive) {
                this._worker.postMessage({
                  method: "setCaseSensitive",
                  caseSensitive
                });
              }
              if (indexMode) {
                this._worker.postMessage({
                  method: "setIndexMode",
                  indexMode
                });
              }
              if (matchAnyToken) {
                this._worker.postMessage({
                  method: "setMatchAnyToken",
                  matchAnyToken
                });
              }
              if (tokenizePattern) {
                this._worker.postMessage({
                  method: "setTokenizePattern",
                  tokenizePattern
                });
              }
            }
            _createClass(SearchWorkerLoader2, [{
              key: "_updateQueue",
              value: function _updateQueue(_ref2) {
                var callbackId = _ref2.callbackId, error = _ref2.error, results = _ref2.results;
                var target = this._callbackIdMap[callbackId];
                target.complete = true;
                target.error = error;
                target.results = results;
                while (this._callbackQueue.length) {
                  var data = this._callbackQueue[0];
                  if (!data.complete) {
                    break;
                  }
                  this._callbackQueue.shift();
                  delete this._callbackIdMap[data.callbackId];
                  if (data.error) {
                    data.reject(data.error);
                  } else {
                    data.resolve(data.results);
                  }
                }
              }
            }]);
            return SearchWorkerLoader2;
          }();
          exports2.default = SearchWorkerLoader;
        },
        function(module2, exports2, __webpack_require__) {
          var _rng = __webpack_require__(9);
          var _byteToHex = [];
          var _hexToByte = {};
          for (var i = 0; i < 256; i++) {
            _byteToHex[i] = (i + 256).toString(16).substr(1);
            _hexToByte[_byteToHex[i]] = i;
          }
          function parse(s, buf, offset) {
            var i2 = buf && offset || 0, ii = 0;
            buf = buf || [];
            s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
              if (ii < 16) {
                buf[i2 + ii++] = _hexToByte[oct];
              }
            });
            while (ii < 16) {
              buf[i2 + ii++] = 0;
            }
            return buf;
          }
          function unparse(buf, offset) {
            var i2 = offset || 0, bth = _byteToHex;
            return bth[buf[i2++]] + bth[buf[i2++]] + bth[buf[i2++]] + bth[buf[i2++]] + "-" + bth[buf[i2++]] + bth[buf[i2++]] + "-" + bth[buf[i2++]] + bth[buf[i2++]] + "-" + bth[buf[i2++]] + bth[buf[i2++]] + "-" + bth[buf[i2++]] + bth[buf[i2++]] + bth[buf[i2++]] + bth[buf[i2++]] + bth[buf[i2++]] + bth[buf[i2++]];
          }
          var _seedBytes = _rng();
          var _nodeId = [
            _seedBytes[0] | 1,
            _seedBytes[1],
            _seedBytes[2],
            _seedBytes[3],
            _seedBytes[4],
            _seedBytes[5]
          ];
          var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 16383;
          var _lastMSecs = 0, _lastNSecs = 0;
          function v1(options, buf, offset) {
            var i2 = buf && offset || 0;
            var b = buf || [];
            options = options || {};
            var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
            var msecs = options.msecs !== void 0 ? options.msecs : new Date().getTime();
            var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
            var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
            if (dt < 0 && options.clockseq === void 0) {
              clockseq = clockseq + 1 & 16383;
            }
            if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
              nsecs = 0;
            }
            if (nsecs >= 1e4) {
              throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            }
            _lastMSecs = msecs;
            _lastNSecs = nsecs;
            _clockseq = clockseq;
            msecs += 122192928e5;
            var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
            b[i2++] = tl >>> 24 & 255;
            b[i2++] = tl >>> 16 & 255;
            b[i2++] = tl >>> 8 & 255;
            b[i2++] = tl & 255;
            var tmh = msecs / 4294967296 * 1e4 & 268435455;
            b[i2++] = tmh >>> 8 & 255;
            b[i2++] = tmh & 255;
            b[i2++] = tmh >>> 24 & 15 | 16;
            b[i2++] = tmh >>> 16 & 255;
            b[i2++] = clockseq >>> 8 | 128;
            b[i2++] = clockseq & 255;
            var node = options.node || _nodeId;
            for (var n = 0; n < 6; n++) {
              b[i2 + n] = node[n];
            }
            return buf ? buf : unparse(b);
          }
          function v4(options, buf, offset) {
            var i2 = buf && offset || 0;
            if (typeof options == "string") {
              buf = options == "binary" ? new Array(16) : null;
              options = null;
            }
            options = options || {};
            var rnds = options.random || (options.rng || _rng)();
            rnds[6] = rnds[6] & 15 | 64;
            rnds[8] = rnds[8] & 63 | 128;
            if (buf) {
              for (var ii = 0; ii < 16; ii++) {
                buf[i2 + ii] = rnds[ii];
              }
            }
            return buf || unparse(rnds);
          }
          var uuid = v4;
          uuid.v1 = v1;
          uuid.v4 = v4;
          uuid.parse = parse;
          uuid.unparse = unparse;
          module2.exports = uuid;
        },
        function(module2, exports2) {
          (function(global2) {
            var rng;
            var crypto = global2.crypto || global2.msCrypto;
            if (crypto && crypto.getRandomValues) {
              var _rnds8 = new Uint8Array(16);
              rng = function whatwgRNG() {
                crypto.getRandomValues(_rnds8);
                return _rnds8;
              };
            }
            if (!rng) {
              var _rnds = new Array(16);
              rng = function() {
                for (var i = 0, r; i < 16; i++) {
                  if ((i & 3) === 0)
                    r = Math.random() * 4294967296;
                  _rnds[i] = r >>> ((i & 3) << 3) & 255;
                }
                return _rnds;
              };
            }
            module2.exports = rng;
          }).call(exports2, function() {
            return this;
          }());
        },
        function(module2, exports2, __webpack_require__) {
          module2.exports = function() {
            return __webpack_require__(11)(`/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _util = __webpack_require__(1);

	/**
	 * Search entry point to web worker.
	 * Builds search index and performs searches on separate thread from the ui.
	 */

	var searchUtility = new _util.SearchUtility();

	self.addEventListener("message", function (event) {
	  var data = event.data;
	  var method = data.method;


	  switch (method) {
	    case "indexDocument":
	      var uid = data.uid,
	          text = data.text;


	      searchUtility.indexDocument(uid, text);
	      break;
	    case "search":
	      var callbackId = data.callbackId,
	          query = data.query;


	      var results = searchUtility.search(query);

	      self.postMessage({ callbackId: callbackId, results: results });
	      break;
	    case "setCaseSensitive":
	      var caseSensitive = data.caseSensitive;


	      searchUtility.setCaseSensitive(caseSensitive);
	      break;
	    case "setIndexMode":
	      var indexMode = data.indexMode;


	      searchUtility.setIndexMode(indexMode);
	      break;
	    case "setMatchAnyToken":
	      var matchAnyToken = data.matchAnyToken;


	      searchUtility.setMatchAnyToken(matchAnyToken);
	      break;
	    case "setTokenizePattern":
	      var tokenizePattern = data.tokenizePattern;


	      searchUtility.setTokenizePattern(tokenizePattern);
	      break;
	  }
	}, false);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SearchUtility = exports.INDEX_MODES = undefined;

	var _SearchUtility = __webpack_require__(2);

	var _SearchUtility2 = _interopRequireDefault(_SearchUtility);

	var _constants = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SearchUtility2.default;
	exports.INDEX_MODES = _constants.INDEX_MODES;
	exports.SearchUtility = _SearchUtility2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(3);

	var _SearchIndex = __webpack_require__(4);

	var _SearchIndex2 = _interopRequireDefault(_SearchIndex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Synchronous client-side full-text search utility.
	 * Forked from JS search (github.com/bvaughn/js-search).
	 */
	var SearchUtility = function () {

	  /**
	   * Constructor.
	   *
	   * @param indexMode See #setIndexMode
	   * @param tokenizePattern See #setTokenizePattern
	   * @param caseSensitive See #setCaseSensitive
	   * @param matchAnyToken See #setMatchAnyToken
	   */
	  function SearchUtility() {
	    var _this = this;

	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref$caseSensitive = _ref.caseSensitive,
	        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
	        _ref$indexMode = _ref.indexMode,
	        indexMode = _ref$indexMode === undefined ? _constants.INDEX_MODES.ALL_SUBSTRINGS : _ref$indexMode,
	        _ref$matchAnyToken = _ref.matchAnyToken,
	        matchAnyToken = _ref$matchAnyToken === undefined ? false : _ref$matchAnyToken,
	        _ref$tokenizePattern = _ref.tokenizePattern,
	        tokenizePattern = _ref$tokenizePattern === undefined ? /\\s+/ : _ref$tokenizePattern;

	    _classCallCheck(this, SearchUtility);

	    this.indexDocument = function (uid, text) {
	      _this._uids[uid] = true;

	      var fieldTokens = _this._tokenize(_this._sanitize(text));

	      fieldTokens.forEach(function (fieldToken) {
	        var expandedTokens = _this._expandToken(fieldToken);

	        expandedTokens.forEach(function (expandedToken) {
	          _this._searchIndex.indexDocument(expandedToken, uid);
	        });
	      });

	      return _this;
	    };

	    this.search = function (query) {
	      if (!query) {
	        return Object.keys(_this._uids);
	      } else {
	        var tokens = _this._tokenize(_this._sanitize(query));

	        return _this._searchIndex.search(tokens, _this._matchAnyToken);
	      }
	    };

	    this.terminate = function () {};

	    this._caseSensitive = caseSensitive;
	    this._indexMode = indexMode;
	    this._matchAnyToken = matchAnyToken;
	    this._tokenizePattern = tokenizePattern;

	    this._searchIndex = new _SearchIndex2.default();
	    this._uids = {};
	  }

	  /**
	   * Returns a constant representing the current case-sensitive bit.
	   */


	  _createClass(SearchUtility, [{
	    key: "getCaseSensitive",
	    value: function getCaseSensitive() {
	      return this._caseSensitive;
	    }

	    /**
	     * Returns a constant representing the current index mode.
	     */

	  }, {
	    key: "getIndexMode",
	    value: function getIndexMode() {
	      return this._indexMode;
	    }

	    /**
	     * Returns a constant representing the current match-any-token bit.
	     */

	  }, {
	    key: "getMatchAnyToken",
	    value: function getMatchAnyToken() {
	      return this._matchAnyToken;
	    }

	    /**
	     * Returns a constant representing the current tokenize pattern.
	     */

	  }, {
	    key: "getTokenizePattern",
	    value: function getTokenizePattern() {
	      return this._tokenizePattern;
	    }

	    /**
	     * Adds or updates a uid in the search index and associates it with the specified text.
	     * Note that at this time uids can only be added or updated in the index, not removed.
	     *
	     * @param uid Uniquely identifies a searchable object
	     * @param text Text to associate with uid
	     */


	    /**
	     * Searches the current index for the specified query text.
	     * Only uids matching all of the words within the text will be accepted,
	     * unless matchAny is set to true.
	     * If an empty query string is provided all indexed uids will be returned.
	     *
	     * Document searches are case-insensitive by default (e.g. "search" will match "Search").
	     * Document searches use substring matching by default (e.g. "na" and "me" will both match "name").
	     *
	     * @param query Searchable query text
	     * @return Array of uids
	     */

	  }, {
	    key: "setCaseSensitive",


	    /**
	     * Sets a new case-sensitive bit
	     */
	    value: function setCaseSensitive(caseSensitive) {
	      this._caseSensitive = caseSensitive;
	    }

	    /**
	     * Sets a new index mode.
	     * See util/constants/INDEX_MODES
	     */

	  }, {
	    key: "setIndexMode",
	    value: function setIndexMode(indexMode) {
	      if (Object.keys(this._uids).length > 0) {
	        throw Error("indexMode cannot be changed once documents have been indexed");
	      }

	      this._indexMode = indexMode;
	    }

	    /**
	     * Sets a new match-any-token bit
	     */

	  }, {
	    key: "setMatchAnyToken",
	    value: function setMatchAnyToken(matchAnyToken) {
	      this._matchAnyToken = matchAnyToken;
	    }

	    /**
	     * Sets a new tokenize pattern (regular expression)
	     */

	  }, {
	    key: "setTokenizePattern",
	    value: function setTokenizePattern(pattern) {
	      this._tokenizePattern = pattern;
	    }

	    /**
	     *  Added to make class adhere to interface. Add cleanup code as needed.
	     */

	  }, {
	    key: "_expandToken",


	    /**
	     * Index strategy based on 'all-substrings-index-strategy.ts' in github.com/bvaughn/js-search/
	     *
	     * @private
	     */
	    value: function _expandToken(token) {
	      switch (this._indexMode) {
	        case _constants.INDEX_MODES.EXACT_WORDS:
	          return [token];
	        case _constants.INDEX_MODES.PREFIXES:
	          return this._expandPrefixTokens(token);
	        case _constants.INDEX_MODES.ALL_SUBSTRINGS:
	        default:
	          return this._expandAllSubstringTokens(token);
	      }
	    }
	  }, {
	    key: "_expandAllSubstringTokens",
	    value: function _expandAllSubstringTokens(token) {
	      var expandedTokens = [];

	      // String.prototype.charAt() may return surrogate halves instead of whole characters.
	      // When this happens in the context of a web-worker it can cause Chrome to crash.
	      // Catching the error is a simple solution for now; in the future I may try to better support non-BMP characters.
	      // Resources:
	      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
	      // https://mathiasbynens.be/notes/javascript-unicode
	      try {
	        for (var i = 0, length = token.length; i < length; ++i) {
	          var substring = "";

	          for (var j = i; j < length; ++j) {
	            substring += token.charAt(j);
	            expandedTokens.push(substring);
	          }
	        }
	      } catch (error) {
	        console.error("Unable to parse token \\"" + token + "\\" " + error);
	      }

	      return expandedTokens;
	    }
	  }, {
	    key: "_expandPrefixTokens",
	    value: function _expandPrefixTokens(token) {
	      var expandedTokens = [];

	      // String.prototype.charAt() may return surrogate halves instead of whole characters.
	      // When this happens in the context of a web-worker it can cause Chrome to crash.
	      // Catching the error is a simple solution for now; in the future I may try to better support non-BMP characters.
	      // Resources:
	      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
	      // https://mathiasbynens.be/notes/javascript-unicode
	      try {
	        for (var i = 0, length = token.length; i < length; ++i) {
	          expandedTokens.push(token.substr(0, i + 1));
	        }
	      } catch (error) {
	        console.error("Unable to parse token \\"" + token + "\\" " + error);
	      }

	      return expandedTokens;
	    }

	    /**
	     * @private
	     */

	  }, {
	    key: "_sanitize",
	    value: function _sanitize(string) {
	      return this._caseSensitive ? string.trim() : string.trim().toLocaleLowerCase();
	    }

	    /**
	     * @private
	     */

	  }, {
	    key: "_tokenize",
	    value: function _tokenize(text) {
	      return text.split(this._tokenizePattern).filter(function (text) {
	        return text;
	      }); // Remove empty tokens
	    }
	  }]);

	  return SearchUtility;
	}();

	exports.default = SearchUtility;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var INDEX_MODES = exports.INDEX_MODES = {
	  // Indexes for all substring searches (e.g. the term "cat" is indexed as "c", "ca", "cat", "a", "at", and "t").
	  // Based on 'all-substrings-index-strategy' from js-search;
	  // github.com/bvaughn/js-search/blob/master/source/index-strategy/all-substrings-index-strategy.ts
	  ALL_SUBSTRINGS: "ALL_SUBSTRINGS",

	  // Indexes for exact word matches only.
	  // Based on 'exact-word-index-strategy' from js-search;
	  // github.com/bvaughn/js-search/blob/master/source/index-strategy/exact-word-index-strategy.ts
	  EXACT_WORDS: "EXACT_WORDS",

	  // Indexes for prefix searches (e.g. the term "cat" is indexed as "c", "ca", and "cat" allowing prefix search lookups).
	  // Based on 'prefix-index-strategy' from js-search;
	  // github.com/bvaughn/js-search/blob/master/source/index-strategy/prefix-index-strategy.ts
	  PREFIXES: "PREFIXES"
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Maps search tokens to uids using a trie structure.
	 */
	var SearchIndex = function () {
	  function SearchIndex() {
	    _classCallCheck(this, SearchIndex);

	    this.tokenToUidMap = {};
	  }

	  /**
	   * Maps the specified token to a uid.
	   *
	   * @param token Searchable token (e.g. "road")
	   * @param uid Identifies a document within the searchable corpus
	   */


	  _createClass(SearchIndex, [{
	    key: "indexDocument",
	    value: function indexDocument(token, uid) {
	      if (!this.tokenToUidMap[token]) {
	        this.tokenToUidMap[token] = {};
	      }

	      this.tokenToUidMap[token][uid] = uid;
	    }

	    /**
	     * Finds uids that have been mapped to the set of tokens specified.
	     * Only uids that have been mapped to all tokens will be returned.
	     *
	     * @param tokens Array of searchable tokens (e.g. ["long", "road"])
	     * @param matchAnyToken Whether to match any token. Default is false.
	     * @return Array of uids that have been associated with the set of search tokens
	     */

	  }, {
	    key: "search",
	    value: function search(tokens, matchAnyToken) {
	      var _this = this;

	      var uidMap = {};
	      var uidMatches = {};
	      var initialized = false;

	      tokens.forEach(function (token) {
	        var currentUidMap = _this.tokenToUidMap[token] || {};

	        if (!initialized) {
	          initialized = true;

	          for (var _uid in currentUidMap) {
	            uidMap[_uid] = currentUidMap[_uid];
	            uidMatches[_uid] = 1;
	          }
	        } else {
	          // Delete existing matches if using and AND query (the default)
	          // Otherwise add new results to the matches
	          if (!matchAnyToken) {
	            for (var _uid2 in uidMap) {
	              if (!currentUidMap[_uid2]) {
	                delete uidMap[_uid2];
	              }
	            }
	          } else {
	            for (var _uid3 in currentUidMap) {
	              uidMap[_uid3] = currentUidMap[_uid3];
	              uidMatches[_uid3] = (uidMatches[_uid3] || 0) + 1;
	            }
	          }
	        }
	      });

	      var uids = [];
	      for (var _uid4 in uidMap) {
	        uids.push(uidMap[_uid4]);
	      }

	      // Sort according to most matches, if match any token is set.
	      if (matchAnyToken) {
	        uids.sort(function (a, b) {
	          return uidMatches[b] - uidMatches[a];
	        });
	      }

	      return uids;
	    }
	  }]);

	  return SearchIndex;
	}();

	exports.default = SearchIndex;

/***/ }
/******/ ]);`, __webpack_require__.p + "5cafaba60d6eb1f43c8f.worker.js");
          };
        },
        function(module2, exports2) {
          var URL = window.URL || window.webkitURL;
          module2.exports = function(content, url) {
            try {
              try {
                var blob;
                try {
                  var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                  blob = new BlobBuilder();
                  blob.append(content);
                  blob = blob.getBlob();
                } catch (e) {
                  blob = new Blob([content]);
                }
                return new Worker(URL.createObjectURL(blob));
              } catch (e) {
                return new Worker("data:application/javascript," + encodeURIComponent(content));
              }
            } catch (e) {
              if (!url) {
                throw Error("Inline worker is not supported");
              }
              return new Worker(url);
            }
          };
        }
      ]);
    }
  });

  // node_modules/jszip/dist/jszip.min.js
  var require_jszip_min = __commonJS({
    "node_modules/jszip/dist/jszip.min.js"(exports, module) {
      !function(e) {
        if ("object" == typeof exports && "undefined" != typeof module)
          module.exports = e();
        else if ("function" == typeof define && define.amd)
          define([], e);
        else {
          ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e();
        }
      }(function() {
        return function s(a, o, h) {
          function u(r, e2) {
            if (!o[r]) {
              if (!a[r]) {
                var t = "function" == typeof __require && __require;
                if (!e2 && t)
                  return t(r, true);
                if (l)
                  return l(r, true);
                var n = new Error("Cannot find module '" + r + "'");
                throw n.code = "MODULE_NOT_FOUND", n;
              }
              var i = o[r] = { exports: {} };
              a[r][0].call(i.exports, function(e3) {
                var t2 = a[r][1][e3];
                return u(t2 || e3);
              }, i, i.exports, s, a, o, h);
            }
            return o[r].exports;
          }
          for (var l = "function" == typeof __require && __require, e = 0; e < h.length; e++)
            u(h[e]);
          return u;
        }({ 1: [function(e, t, r) {
          "use strict";
          var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          r.encode = function(e2) {
            for (var t2, r2, n, i, s, a, o, h = [], u = 0, l = e2.length, f = l, c2 = "string" !== d.getTypeOf(e2); u < e2.length; )
              f = l - u, n = c2 ? (t2 = e2[u++], r2 = u < l ? e2[u++] : 0, u < l ? e2[u++] : 0) : (t2 = e2.charCodeAt(u++), r2 = u < l ? e2.charCodeAt(u++) : 0, u < l ? e2.charCodeAt(u++) : 0), i = t2 >> 2, s = (3 & t2) << 4 | r2 >> 4, a = 1 < f ? (15 & r2) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
            return h.join("");
          }, r.decode = function(e2) {
            var t2, r2, n, i, s, a, o = 0, h = 0, u = "data:";
            if (e2.substr(0, u.length) === u)
              throw new Error("Invalid base64 input, it looks like a data url.");
            var l, f = 3 * (e2 = e2.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length / 4;
            if (e2.charAt(e2.length - 1) === p.charAt(64) && f--, e2.charAt(e2.length - 2) === p.charAt(64) && f--, f % 1 != 0)
              throw new Error("Invalid base64 input, bad content length.");
            for (l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e2.length; )
              t2 = p.indexOf(e2.charAt(o++)) << 2 | (i = p.indexOf(e2.charAt(o++))) >> 4, r2 = (15 & i) << 4 | (s = p.indexOf(e2.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e2.charAt(o++))), l[h++] = t2, 64 !== s && (l[h++] = r2), 64 !== a && (l[h++] = n);
            return l;
          };
        }, { "./support": 30, "./utils": 32 }], 2: [function(e, t, r) {
          "use strict";
          var n = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
          function o(e2, t2, r2, n2, i2) {
            this.compressedSize = e2, this.uncompressedSize = t2, this.crc32 = r2, this.compression = n2, this.compressedContent = i2;
          }
          o.prototype = { getContentWorker: function() {
            var e2 = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t2 = this;
            return e2.on("end", function() {
              if (this.streamInfo.data_length !== t2.uncompressedSize)
                throw new Error("Bug : uncompressed data size mismatch");
            }), e2;
          }, getCompressedWorker: function() {
            return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
          } }, o.createWorkerFrom = function(e2, t2, r2) {
            return e2.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t2.compressWorker(r2)).pipe(new a("compressedSize")).withStreamInfo("compression", t2);
          }, t.exports = o;
        }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, t, r) {
          "use strict";
          var n = e("./stream/GenericWorker");
          r.STORE = { magic: "\0\0", compressWorker: function(e2) {
            return new n("STORE compression");
          }, uncompressWorker: function() {
            return new n("STORE decompression");
          } }, r.DEFLATE = e("./flate");
        }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, t, r) {
          "use strict";
          var n = e("./utils");
          var o = function() {
            for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
              e2 = r2;
              for (var n2 = 0; n2 < 8; n2++)
                e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
              t2[r2] = e2;
            }
            return t2;
          }();
          t.exports = function(e2, t2) {
            return void 0 !== e2 && e2.length ? "string" !== n.getTypeOf(e2) ? function(e3, t3, r2, n2) {
              var i = o, s = n2 + r2;
              e3 ^= -1;
              for (var a = n2; a < s; a++)
                e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3[a])];
              return -1 ^ e3;
            }(0 | t2, e2, e2.length, 0) : function(e3, t3, r2, n2) {
              var i = o, s = n2 + r2;
              e3 ^= -1;
              for (var a = n2; a < s; a++)
                e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3.charCodeAt(a))];
              return -1 ^ e3;
            }(0 | t2, e2, e2.length, 0) : 0;
          };
        }, { "./utils": 32 }], 5: [function(e, t, r) {
          "use strict";
          r.base64 = false, r.binary = false, r.dir = false, r.createFolders = true, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
        }, {}], 6: [function(e, t, r) {
          "use strict";
          var n = null;
          n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = { Promise: n };
        }, { lie: 37 }], 7: [function(e, t, r) {
          "use strict";
          var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n ? "uint8array" : "array";
          function h(e2, t2) {
            a.call(this, "FlateWorker/" + e2), this._pako = null, this._pakoAction = e2, this._pakoOptions = t2, this.meta = {};
          }
          r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e2) {
            this.meta = e2.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e2.data), false);
          }, h.prototype.flush = function() {
            a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
          }, h.prototype.cleanUp = function() {
            a.prototype.cleanUp.call(this), this._pako = null;
          }, h.prototype._createPako = function() {
            this._pako = new i[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
            var t2 = this;
            this._pako.onData = function(e2) {
              t2.push({ data: e2, meta: t2.meta });
            };
          }, r.compressWorker = function(e2) {
            return new h("Deflate", e2);
          }, r.uncompressWorker = function() {
            return new h("Inflate", {});
          };
        }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, t, r) {
          "use strict";
          function A(e2, t2) {
            var r2, n2 = "";
            for (r2 = 0; r2 < t2; r2++)
              n2 += String.fromCharCode(255 & e2), e2 >>>= 8;
            return n2;
          }
          function n(e2, t2, r2, n2, i2, s2) {
            var a, o, h = e2.file, u = e2.compression, l = s2 !== O.utf8encode, f = I.transformTo("string", s2(h.name)), c = I.transformTo("string", O.utf8encode(h.name)), d = h.comment, p = I.transformTo("string", s2(d)), m = I.transformTo("string", O.utf8encode(d)), _ = c.length !== h.name.length, g = m.length !== d.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
            t2 && !r2 || (x.crc32 = e2.crc32, x.compressedSize = e2.compressedSize, x.uncompressedSize = e2.uncompressedSize);
            var S = 0;
            t2 && (S |= 8), l || !_ && !g || (S |= 2048);
            var z = 0, C = 0;
            w && (z |= 16), "UNIX" === i2 ? (C = 798, z |= function(e3, t3) {
              var r3 = e3;
              return e3 || (r3 = t3 ? 16893 : 33204), (65535 & r3) << 16;
            }(h.unixPermissions, w)) : (C = 20, z |= function(e3) {
              return 63 & (e3 || 0);
            }(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
            var E = "";
            return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), { fileRecord: R.LOCAL_FILE_HEADER + E + f + b, dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n2, 4) + f + b + p };
          }
          var I = e("../utils"), i = e("../stream/GenericWorker"), O = e("../utf8"), B = e("../crc32"), R = e("../signature");
          function s(e2, t2, r2, n2) {
            i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t2, this.zipPlatform = r2, this.encodeFileName = n2, this.streamFiles = e2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
          }
          I.inherits(s, i), s.prototype.push = function(e2) {
            var t2 = e2.meta.percent || 0, r2 = this.entriesCount, n2 = this._sources.length;
            this.accumulate ? this.contentBuffer.push(e2) : (this.bytesWritten += e2.data.length, i.prototype.push.call(this, { data: e2.data, meta: { currentFile: this.currentFile, percent: r2 ? (t2 + 100 * (r2 - n2 - 1)) / r2 : 100 } }));
          }, s.prototype.openedSource = function(e2) {
            this.currentSourceOffset = this.bytesWritten, this.currentFile = e2.file.name;
            var t2 = this.streamFiles && !e2.file.dir;
            if (t2) {
              var r2 = n(e2, t2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
              this.push({ data: r2.fileRecord, meta: { percent: 0 } });
            } else
              this.accumulate = true;
          }, s.prototype.closedSource = function(e2) {
            this.accumulate = false;
            var t2 = this.streamFiles && !e2.file.dir, r2 = n(e2, t2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            if (this.dirRecords.push(r2.dirRecord), t2)
              this.push({ data: function(e3) {
                return R.DATA_DESCRIPTOR + A(e3.crc32, 4) + A(e3.compressedSize, 4) + A(e3.uncompressedSize, 4);
              }(e2), meta: { percent: 100 } });
            else
              for (this.push({ data: r2.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
                this.push(this.contentBuffer.shift());
            this.currentFile = null;
          }, s.prototype.flush = function() {
            for (var e2 = this.bytesWritten, t2 = 0; t2 < this.dirRecords.length; t2++)
              this.push({ data: this.dirRecords[t2], meta: { percent: 100 } });
            var r2 = this.bytesWritten - e2, n2 = function(e3, t3, r3, n3, i2) {
              var s2 = I.transformTo("string", i2(n3));
              return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e3, 2) + A(e3, 2) + A(t3, 4) + A(r3, 4) + A(s2.length, 2) + s2;
            }(this.dirRecords.length, r2, e2, this.zipComment, this.encodeFileName);
            this.push({ data: n2, meta: { percent: 100 } });
          }, s.prototype.prepareNextSource = function() {
            this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
          }, s.prototype.registerPrevious = function(e2) {
            this._sources.push(e2);
            var t2 = this;
            return e2.on("data", function(e3) {
              t2.processChunk(e3);
            }), e2.on("end", function() {
              t2.closedSource(t2.previous.streamInfo), t2._sources.length ? t2.prepareNextSource() : t2.end();
            }), e2.on("error", function(e3) {
              t2.error(e3);
            }), this;
          }, s.prototype.resume = function() {
            return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
          }, s.prototype.error = function(e2) {
            var t2 = this._sources;
            if (!i.prototype.error.call(this, e2))
              return false;
            for (var r2 = 0; r2 < t2.length; r2++)
              try {
                t2[r2].error(e2);
              } catch (e3) {
              }
            return true;
          }, s.prototype.lock = function() {
            i.prototype.lock.call(this);
            for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++)
              e2[t2].lock();
          }, t.exports = s;
        }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, t, r) {
          "use strict";
          var u = e("../compressions"), n = e("./ZipFileWorker");
          r.generateWorker = function(e2, a, t2) {
            var o = new n(a.streamFiles, t2, a.platform, a.encodeFileName), h = 0;
            try {
              e2.forEach(function(e3, t3) {
                h++;
                var r2 = function(e4, t4) {
                  var r3 = e4 || t4, n3 = u[r3];
                  if (!n3)
                    throw new Error(r3 + " is not a valid compression method !");
                  return n3;
                }(t3.options.compression, a.compression), n2 = t3.options.compressionOptions || a.compressionOptions || {}, i = t3.dir, s = t3.date;
                t3._compressWorker(r2, n2).withStreamInfo("file", { name: e3, dir: i, date: s, comment: t3.comment || "", unixPermissions: t3.unixPermissions, dosPermissions: t3.dosPermissions }).pipe(o);
              }), o.entriesCount = h;
            } catch (e3) {
              o.error(e3);
            }
            return o;
          };
        }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, t, r) {
          "use strict";
          function n() {
            if (!(this instanceof n))
              return new n();
            if (arguments.length)
              throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
            this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
              var e2 = new n();
              for (var t2 in this)
                "function" != typeof this[t2] && (e2[t2] = this[t2]);
              return e2;
            };
          }
          (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.0", n.loadAsync = function(e2, t2) {
            return new n().loadAsync(e2, t2);
          }, n.external = e("./external"), t.exports = n;
        }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, t, r) {
          "use strict";
          var u = e("./utils"), i = e("./external"), n = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l = e("./nodejsUtils");
          function f(n2) {
            return new i.Promise(function(e2, t2) {
              var r2 = n2.decompressed.getContentWorker().pipe(new a());
              r2.on("error", function(e3) {
                t2(e3);
              }).on("end", function() {
                r2.streamInfo.crc32 !== n2.decompressed.crc32 ? t2(new Error("Corrupted zip : CRC32 mismatch")) : e2();
              }).resume();
            });
          }
          t.exports = function(e2, o) {
            var h = this;
            return o = u.extend(o || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n.utf8decode }), l.isNode && l.isStream(e2) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e2, true, o.optimizedBinaryString, o.base64).then(function(e3) {
              var t2 = new s(o);
              return t2.load(e3), t2;
            }).then(function(e3) {
              var t2 = [i.Promise.resolve(e3)], r2 = e3.files;
              if (o.checkCRC32)
                for (var n2 = 0; n2 < r2.length; n2++)
                  t2.push(f(r2[n2]));
              return i.Promise.all(t2);
            }).then(function(e3) {
              for (var t2 = e3.shift(), r2 = t2.files, n2 = 0; n2 < r2.length; n2++) {
                var i2 = r2[n2], s2 = i2.fileNameStr, a2 = u.resolve(i2.fileNameStr);
                h.file(a2, i2.decompressed, { binary: true, optimizedBinaryString: true, date: i2.date, dir: i2.dir, comment: i2.fileCommentStr.length ? i2.fileCommentStr : null, unixPermissions: i2.unixPermissions, dosPermissions: i2.dosPermissions, createFolders: o.createFolders }), i2.dir || (h.file(a2).unsafeOriginalName = s2);
              }
              return t2.zipComment.length && (h.comment = t2.zipComment), h;
            });
          };
        }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, t, r) {
          "use strict";
          var n = e("../utils"), i = e("../stream/GenericWorker");
          function s(e2, t2) {
            i.call(this, "Nodejs stream input adapter for " + e2), this._upstreamEnded = false, this._bindStream(t2);
          }
          n.inherits(s, i), s.prototype._bindStream = function(e2) {
            var t2 = this;
            (this._stream = e2).pause(), e2.on("data", function(e3) {
              t2.push({ data: e3, meta: { percent: 0 } });
            }).on("error", function(e3) {
              t2.isPaused ? this.generatedError = e3 : t2.error(e3);
            }).on("end", function() {
              t2.isPaused ? t2._upstreamEnded = true : t2.end();
            });
          }, s.prototype.pause = function() {
            return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
          }, s.prototype.resume = function() {
            return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
          }, t.exports = s;
        }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, t, r) {
          "use strict";
          var i = e("readable-stream").Readable;
          function n(e2, t2, r2) {
            i.call(this, t2), this._helper = e2;
            var n2 = this;
            e2.on("data", function(e3, t3) {
              n2.push(e3) || n2._helper.pause(), r2 && r2(t3);
            }).on("error", function(e3) {
              n2.emit("error", e3);
            }).on("end", function() {
              n2.push(null);
            });
          }
          e("../utils").inherits(n, i), n.prototype._read = function() {
            this._helper.resume();
          }, t.exports = n;
        }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, t, r) {
          "use strict";
          t.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e2, t2) {
            if (Buffer.from && Buffer.from !== Uint8Array.from)
              return Buffer.from(e2, t2);
            if ("number" == typeof e2)
              throw new Error('The "data" argument must not be a number');
            return new Buffer(e2, t2);
          }, allocBuffer: function(e2) {
            if (Buffer.alloc)
              return Buffer.alloc(e2);
            var t2 = new Buffer(e2);
            return t2.fill(0), t2;
          }, isBuffer: function(e2) {
            return Buffer.isBuffer(e2);
          }, isStream: function(e2) {
            return e2 && "function" == typeof e2.on && "function" == typeof e2.pause && "function" == typeof e2.resume;
          } };
        }, {}], 15: [function(e, t, r) {
          "use strict";
          function s(e2, t2, r2) {
            var n2, i2 = u.getTypeOf(t2), s2 = u.extend(r2 || {}, f);
            s2.date = s2.date || new Date(), null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (e2 = g(e2)), s2.createFolders && (n2 = _(e2)) && b.call(this, n2, true);
            var a2 = "string" === i2 && false === s2.binary && false === s2.base64;
            r2 && void 0 !== r2.binary || (s2.binary = !a2), (t2 instanceof c && 0 === t2.uncompressedSize || s2.dir || !t2 || 0 === t2.length) && (s2.base64 = false, s2.binary = true, t2 = "", s2.compression = "STORE", i2 = "string");
            var o2 = null;
            o2 = t2 instanceof c || t2 instanceof l ? t2 : p.isNode && p.isStream(t2) ? new m(e2, t2) : u.prepareContent(e2, t2, s2.binary, s2.optimizedBinaryString, s2.base64);
            var h2 = new d(e2, o2, s2);
            this.files[e2] = h2;
          }
          var i = e("./utf8"), u = e("./utils"), l = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m = e("./nodejs/NodejsStreamInputAdapter"), _ = function(e2) {
            "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
            var t2 = e2.lastIndexOf("/");
            return 0 < t2 ? e2.substring(0, t2) : "";
          }, g = function(e2) {
            return "/" !== e2.slice(-1) && (e2 += "/"), e2;
          }, b = function(e2, t2) {
            return t2 = void 0 !== t2 ? t2 : f.createFolders, e2 = g(e2), this.files[e2] || s.call(this, e2, null, { dir: true, createFolders: t2 }), this.files[e2];
          };
          function h(e2) {
            return "[object RegExp]" === Object.prototype.toString.call(e2);
          }
          var n = { load: function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, forEach: function(e2) {
            var t2, r2, n2;
            for (t2 in this.files)
              n2 = this.files[t2], (r2 = t2.slice(this.root.length, t2.length)) && t2.slice(0, this.root.length) === this.root && e2(r2, n2);
          }, filter: function(r2) {
            var n2 = [];
            return this.forEach(function(e2, t2) {
              r2(e2, t2) && n2.push(t2);
            }), n2;
          }, file: function(e2, t2, r2) {
            if (1 !== arguments.length)
              return e2 = this.root + e2, s.call(this, e2, t2, r2), this;
            if (h(e2)) {
              var n2 = e2;
              return this.filter(function(e3, t3) {
                return !t3.dir && n2.test(e3);
              });
            }
            var i2 = this.files[this.root + e2];
            return i2 && !i2.dir ? i2 : null;
          }, folder: function(r2) {
            if (!r2)
              return this;
            if (h(r2))
              return this.filter(function(e3, t3) {
                return t3.dir && r2.test(e3);
              });
            var e2 = this.root + r2, t2 = b.call(this, e2), n2 = this.clone();
            return n2.root = t2.name, n2;
          }, remove: function(r2) {
            r2 = this.root + r2;
            var e2 = this.files[r2];
            if (e2 || ("/" !== r2.slice(-1) && (r2 += "/"), e2 = this.files[r2]), e2 && !e2.dir)
              delete this.files[r2];
            else
              for (var t2 = this.filter(function(e3, t3) {
                return t3.name.slice(0, r2.length) === r2;
              }), n2 = 0; n2 < t2.length; n2++)
                delete this.files[t2[n2].name];
            return this;
          }, generate: function(e2) {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, generateInternalStream: function(e2) {
            var t2, r2 = {};
            try {
              if ((r2 = u.extend(e2 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i.utf8encode })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type)
                throw new Error("No output type specified.");
              u.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
              var n2 = r2.comment || this.comment || "";
              t2 = o.generateWorker(this, r2, n2);
            } catch (e3) {
              (t2 = new l("error")).error(e3);
            }
            return new a(t2, r2.type || "string", r2.mimeType);
          }, generateAsync: function(e2, t2) {
            return this.generateInternalStream(e2).accumulate(t2);
          }, generateNodeStream: function(e2, t2) {
            return (e2 = e2 || {}).type || (e2.type = "nodebuffer"), this.generateInternalStream(e2).toNodejsStream(t2);
          } };
          t.exports = n;
        }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, t, r) {
          t.exports = e("stream");
        }, { stream: void 0 }], 17: [function(e, t, r) {
          "use strict";
          var n = e("./DataReader");
          function i(e2) {
            n.call(this, e2);
            for (var t2 = 0; t2 < this.data.length; t2++)
              e2[t2] = 255 & e2[t2];
          }
          e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
            return this.data[this.zero + e2];
          }, i.prototype.lastIndexOfSignature = function(e2) {
            for (var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.length - 4; 0 <= s; --s)
              if (this.data[s] === t2 && this.data[s + 1] === r2 && this.data[s + 2] === n2 && this.data[s + 3] === i2)
                return s - this.zero;
            return -1;
          }, i.prototype.readAndCheckSignature = function(e2) {
            var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.readData(4);
            return t2 === s[0] && r2 === s[1] && n2 === s[2] && i2 === s[3];
          }, i.prototype.readData = function(e2) {
            if (this.checkOffset(e2), 0 === e2)
              return [];
            var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
            return this.index += e2, t2;
          }, t.exports = i;
        }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, t, r) {
          "use strict";
          var n = e("../utils");
          function i(e2) {
            this.data = e2, this.length = e2.length, this.index = 0, this.zero = 0;
          }
          i.prototype = { checkOffset: function(e2) {
            this.checkIndex(this.index + e2);
          }, checkIndex: function(e2) {
            if (this.length < this.zero + e2 || e2 < 0)
              throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e2 + "). Corrupted zip ?");
          }, setIndex: function(e2) {
            this.checkIndex(e2), this.index = e2;
          }, skip: function(e2) {
            this.setIndex(this.index + e2);
          }, byteAt: function(e2) {
          }, readInt: function(e2) {
            var t2, r2 = 0;
            for (this.checkOffset(e2), t2 = this.index + e2 - 1; t2 >= this.index; t2--)
              r2 = (r2 << 8) + this.byteAt(t2);
            return this.index += e2, r2;
          }, readString: function(e2) {
            return n.transformTo("string", this.readData(e2));
          }, readData: function(e2) {
          }, lastIndexOfSignature: function(e2) {
          }, readAndCheckSignature: function(e2) {
          }, readDate: function() {
            var e2 = this.readInt(4);
            return new Date(Date.UTC(1980 + (e2 >> 25 & 127), (e2 >> 21 & 15) - 1, e2 >> 16 & 31, e2 >> 11 & 31, e2 >> 5 & 63, (31 & e2) << 1));
          } }, t.exports = i;
        }, { "../utils": 32 }], 19: [function(e, t, r) {
          "use strict";
          var n = e("./Uint8ArrayReader");
          function i(e2) {
            n.call(this, e2);
          }
          e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
            this.checkOffset(e2);
            var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
            return this.index += e2, t2;
          }, t.exports = i;
        }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, t, r) {
          "use strict";
          var n = e("./DataReader");
          function i(e2) {
            n.call(this, e2);
          }
          e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
            return this.data.charCodeAt(this.zero + e2);
          }, i.prototype.lastIndexOfSignature = function(e2) {
            return this.data.lastIndexOf(e2) - this.zero;
          }, i.prototype.readAndCheckSignature = function(e2) {
            return e2 === this.readData(4);
          }, i.prototype.readData = function(e2) {
            this.checkOffset(e2);
            var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
            return this.index += e2, t2;
          }, t.exports = i;
        }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, t, r) {
          "use strict";
          var n = e("./ArrayReader");
          function i(e2) {
            n.call(this, e2);
          }
          e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
            if (this.checkOffset(e2), 0 === e2)
              return new Uint8Array(0);
            var t2 = this.data.subarray(this.zero + this.index, this.zero + this.index + e2);
            return this.index += e2, t2;
          }, t.exports = i;
        }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, t, r) {
          "use strict";
          var n = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
          t.exports = function(e2) {
            var t2 = n.getTypeOf(e2);
            return n.checkSupport(t2), "string" !== t2 || i.uint8array ? "nodebuffer" === t2 ? new o(e2) : i.uint8array ? new h(n.transformTo("uint8array", e2)) : new s(n.transformTo("array", e2)) : new a(e2);
          };
        }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, t, r) {
          "use strict";
          r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
        }, {}], 24: [function(e, t, r) {
          "use strict";
          var n = e("./GenericWorker"), i = e("../utils");
          function s(e2) {
            n.call(this, "ConvertWorker to " + e2), this.destType = e2;
          }
          i.inherits(s, n), s.prototype.processChunk = function(e2) {
            this.push({ data: i.transformTo(this.destType, e2.data), meta: e2.meta });
          }, t.exports = s;
        }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, t, r) {
          "use strict";
          var n = e("./GenericWorker"), i = e("../crc32");
          function s() {
            n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
          }
          e("../utils").inherits(s, n), s.prototype.processChunk = function(e2) {
            this.streamInfo.crc32 = i(e2.data, this.streamInfo.crc32 || 0), this.push(e2);
          }, t.exports = s;
        }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, t, r) {
          "use strict";
          var n = e("../utils"), i = e("./GenericWorker");
          function s(e2) {
            i.call(this, "DataLengthProbe for " + e2), this.propName = e2, this.withStreamInfo(e2, 0);
          }
          n.inherits(s, i), s.prototype.processChunk = function(e2) {
            if (e2) {
              var t2 = this.streamInfo[this.propName] || 0;
              this.streamInfo[this.propName] = t2 + e2.data.length;
            }
            i.prototype.processChunk.call(this, e2);
          }, t.exports = s;
        }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, t, r) {
          "use strict";
          var n = e("../utils"), i = e("./GenericWorker");
          function s(e2) {
            i.call(this, "DataWorker");
            var t2 = this;
            this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e2.then(function(e3) {
              t2.dataIsReady = true, t2.data = e3, t2.max = e3 && e3.length || 0, t2.type = n.getTypeOf(e3), t2.isPaused || t2._tickAndRepeat();
            }, function(e3) {
              t2.error(e3);
            });
          }
          n.inherits(s, i), s.prototype.cleanUp = function() {
            i.prototype.cleanUp.call(this), this.data = null;
          }, s.prototype.resume = function() {
            return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n.delay(this._tickAndRepeat, [], this)), true);
          }, s.prototype._tickAndRepeat = function() {
            this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
          }, s.prototype._tick = function() {
            if (this.isPaused || this.isFinished)
              return false;
            var e2 = null, t2 = Math.min(this.max, this.index + 16384);
            if (this.index >= this.max)
              return this.end();
            switch (this.type) {
              case "string":
                e2 = this.data.substring(this.index, t2);
                break;
              case "uint8array":
                e2 = this.data.subarray(this.index, t2);
                break;
              case "array":
              case "nodebuffer":
                e2 = this.data.slice(this.index, t2);
            }
            return this.index = t2, this.push({ data: e2, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
          }, t.exports = s;
        }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, t, r) {
          "use strict";
          function n(e2) {
            this.name = e2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
          }
          n.prototype = { push: function(e2) {
            this.emit("data", e2);
          }, end: function() {
            if (this.isFinished)
              return false;
            this.flush();
            try {
              this.emit("end"), this.cleanUp(), this.isFinished = true;
            } catch (e2) {
              this.emit("error", e2);
            }
            return true;
          }, error: function(e2) {
            return !this.isFinished && (this.isPaused ? this.generatedError = e2 : (this.isFinished = true, this.emit("error", e2), this.previous && this.previous.error(e2), this.cleanUp()), true);
          }, on: function(e2, t2) {
            return this._listeners[e2].push(t2), this;
          }, cleanUp: function() {
            this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
          }, emit: function(e2, t2) {
            if (this._listeners[e2])
              for (var r2 = 0; r2 < this._listeners[e2].length; r2++)
                this._listeners[e2][r2].call(this, t2);
          }, pipe: function(e2) {
            return e2.registerPrevious(this);
          }, registerPrevious: function(e2) {
            if (this.isLocked)
              throw new Error("The stream '" + this + "' has already been used.");
            this.streamInfo = e2.streamInfo, this.mergeStreamInfo(), this.previous = e2;
            var t2 = this;
            return e2.on("data", function(e3) {
              t2.processChunk(e3);
            }), e2.on("end", function() {
              t2.end();
            }), e2.on("error", function(e3) {
              t2.error(e3);
            }), this;
          }, pause: function() {
            return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
          }, resume: function() {
            if (!this.isPaused || this.isFinished)
              return false;
            var e2 = this.isPaused = false;
            return this.generatedError && (this.error(this.generatedError), e2 = true), this.previous && this.previous.resume(), !e2;
          }, flush: function() {
          }, processChunk: function(e2) {
            this.push(e2);
          }, withStreamInfo: function(e2, t2) {
            return this.extraStreamInfo[e2] = t2, this.mergeStreamInfo(), this;
          }, mergeStreamInfo: function() {
            for (var e2 in this.extraStreamInfo)
              this.extraStreamInfo.hasOwnProperty(e2) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
          }, lock: function() {
            if (this.isLocked)
              throw new Error("The stream '" + this + "' has already been used.");
            this.isLocked = true, this.previous && this.previous.lock();
          }, toString: function() {
            var e2 = "Worker " + this.name;
            return this.previous ? this.previous + " -> " + e2 : e2;
          } }, t.exports = n;
        }, {}], 29: [function(e, t, r) {
          "use strict";
          var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n = e("../support"), a = e("../external"), o = null;
          if (n.nodestream)
            try {
              o = e("../nodejs/NodejsStreamOutputAdapter");
            } catch (e2) {
            }
          function l(e2, o2) {
            return new a.Promise(function(t2, r2) {
              var n2 = [], i2 = e2._internalType, s2 = e2._outputType, a2 = e2._mimeType;
              e2.on("data", function(e3, t3) {
                n2.push(e3), o2 && o2(t3);
              }).on("error", function(e3) {
                n2 = [], r2(e3);
              }).on("end", function() {
                try {
                  var e3 = function(e4, t3, r3) {
                    switch (e4) {
                      case "blob":
                        return h.newBlob(h.transformTo("arraybuffer", t3), r3);
                      case "base64":
                        return u.encode(t3);
                      default:
                        return h.transformTo(e4, t3);
                    }
                  }(s2, function(e4, t3) {
                    var r3, n3 = 0, i3 = null, s3 = 0;
                    for (r3 = 0; r3 < t3.length; r3++)
                      s3 += t3[r3].length;
                    switch (e4) {
                      case "string":
                        return t3.join("");
                      case "array":
                        return Array.prototype.concat.apply([], t3);
                      case "uint8array":
                        for (i3 = new Uint8Array(s3), r3 = 0; r3 < t3.length; r3++)
                          i3.set(t3[r3], n3), n3 += t3[r3].length;
                        return i3;
                      case "nodebuffer":
                        return Buffer.concat(t3);
                      default:
                        throw new Error("concat : unsupported type '" + e4 + "'");
                    }
                  }(i2, n2), a2);
                  t2(e3);
                } catch (e4) {
                  r2(e4);
                }
                n2 = [];
              }).resume();
            });
          }
          function f(e2, t2, r2) {
            var n2 = t2;
            switch (t2) {
              case "blob":
              case "arraybuffer":
                n2 = "uint8array";
                break;
              case "base64":
                n2 = "string";
            }
            try {
              this._internalType = n2, this._outputType = t2, this._mimeType = r2, h.checkSupport(n2), this._worker = e2.pipe(new i(n2)), e2.lock();
            } catch (e3) {
              this._worker = new s("error"), this._worker.error(e3);
            }
          }
          f.prototype = { accumulate: function(e2) {
            return l(this, e2);
          }, on: function(e2, t2) {
            var r2 = this;
            return "data" === e2 ? this._worker.on(e2, function(e3) {
              t2.call(r2, e3.data, e3.meta);
            }) : this._worker.on(e2, function() {
              h.delay(t2, arguments, r2);
            }), this;
          }, resume: function() {
            return h.delay(this._worker.resume, [], this._worker), this;
          }, pause: function() {
            return this._worker.pause(), this;
          }, toNodejsStream: function(e2) {
            if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType)
              throw new Error(this._outputType + " is not supported by this method");
            return new o(this, { objectMode: "nodebuffer" !== this._outputType }, e2);
          } }, t.exports = f;
        }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, t, r) {
          "use strict";
          if (r.base64 = true, r.array = true, r.string = true, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer)
            r.blob = false;
          else {
            var n = new ArrayBuffer(0);
            try {
              r.blob = 0 === new Blob([n], { type: "application/zip" }).size;
            } catch (e2) {
              try {
                var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
              } catch (e3) {
                r.blob = false;
              }
            }
          }
          try {
            r.nodestream = !!e("readable-stream").Readable;
          } catch (e2) {
            r.nodestream = false;
          }
        }, { "readable-stream": 16 }], 31: [function(e, t, s) {
          "use strict";
          for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++)
            u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
          u[254] = u[254] = 1;
          function a() {
            n.call(this, "utf-8 decode"), this.leftOver = null;
          }
          function l() {
            n.call(this, "utf-8 encode");
          }
          s.utf8encode = function(e2) {
            return h.nodebuffer ? r.newBufferFrom(e2, "utf-8") : function(e3) {
              var t2, r2, n2, i2, s2, a2 = e3.length, o2 = 0;
              for (i2 = 0; i2 < a2; i2++)
                55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
              for (t2 = h.uint8array ? new Uint8Array(o2) : new Array(o2), i2 = s2 = 0; s2 < o2; i2++)
                55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
              return t2;
            }(e2);
          }, s.utf8decode = function(e2) {
            return h.nodebuffer ? o.transformTo("nodebuffer", e2).toString("utf-8") : function(e3) {
              var t2, r2, n2, i2, s2 = e3.length, a2 = new Array(2 * s2);
              for (t2 = r2 = 0; t2 < s2; )
                if ((n2 = e3[t2++]) < 128)
                  a2[r2++] = n2;
                else if (4 < (i2 = u[n2]))
                  a2[r2++] = 65533, t2 += i2 - 1;
                else {
                  for (n2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; 1 < i2 && t2 < s2; )
                    n2 = n2 << 6 | 63 & e3[t2++], i2--;
                  1 < i2 ? a2[r2++] = 65533 : n2 < 65536 ? a2[r2++] = n2 : (n2 -= 65536, a2[r2++] = 55296 | n2 >> 10 & 1023, a2[r2++] = 56320 | 1023 & n2);
                }
              return a2.length !== r2 && (a2.subarray ? a2 = a2.subarray(0, r2) : a2.length = r2), o.applyFromCharCode(a2);
            }(e2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2));
          }, o.inherits(a, n), a.prototype.processChunk = function(e2) {
            var t2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2.data);
            if (this.leftOver && this.leftOver.length) {
              if (h.uint8array) {
                var r2 = t2;
                (t2 = new Uint8Array(r2.length + this.leftOver.length)).set(this.leftOver, 0), t2.set(r2, this.leftOver.length);
              } else
                t2 = this.leftOver.concat(t2);
              this.leftOver = null;
            }
            var n2 = function(e3, t3) {
              var r3;
              for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); )
                r3--;
              return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u[e3[r3]] > t3 ? r3 : t3;
            }(t2), i2 = t2;
            n2 !== t2.length && (h.uint8array ? (i2 = t2.subarray(0, n2), this.leftOver = t2.subarray(n2, t2.length)) : (i2 = t2.slice(0, n2), this.leftOver = t2.slice(n2, t2.length))), this.push({ data: s.utf8decode(i2), meta: e2.meta });
          }, a.prototype.flush = function() {
            this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
          }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function(e2) {
            this.push({ data: s.utf8encode(e2.data), meta: e2.meta });
          }, s.Utf8EncodeWorker = l;
        }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, t, a) {
          "use strict";
          var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
          function n(e2) {
            return e2;
          }
          function l(e2, t2) {
            for (var r2 = 0; r2 < e2.length; ++r2)
              t2[r2] = 255 & e2.charCodeAt(r2);
            return t2;
          }
          e("setimmediate"), a.newBlob = function(t2, r2) {
            a.checkSupport("blob");
            try {
              return new Blob([t2], { type: r2 });
            } catch (e2) {
              try {
                var n2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                return n2.append(t2), n2.getBlob(r2);
              } catch (e3) {
                throw new Error("Bug : can't construct the Blob.");
              }
            }
          };
          var i = { stringifyByChunk: function(e2, t2, r2) {
            var n2 = [], i2 = 0, s2 = e2.length;
            if (s2 <= r2)
              return String.fromCharCode.apply(null, e2);
            for (; i2 < s2; )
              "array" === t2 || "nodebuffer" === t2 ? n2.push(String.fromCharCode.apply(null, e2.slice(i2, Math.min(i2 + r2, s2)))) : n2.push(String.fromCharCode.apply(null, e2.subarray(i2, Math.min(i2 + r2, s2)))), i2 += r2;
            return n2.join("");
          }, stringifyByChar: function(e2) {
            for (var t2 = "", r2 = 0; r2 < e2.length; r2++)
              t2 += String.fromCharCode(e2[r2]);
            return t2;
          }, applyCanBeUsed: { uint8array: function() {
            try {
              return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
            } catch (e2) {
              return false;
            }
          }(), nodebuffer: function() {
            try {
              return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
            } catch (e2) {
              return false;
            }
          }() } };
          function s(e2) {
            var t2 = 65536, r2 = a.getTypeOf(e2), n2 = true;
            if ("uint8array" === r2 ? n2 = i.applyCanBeUsed.uint8array : "nodebuffer" === r2 && (n2 = i.applyCanBeUsed.nodebuffer), n2)
              for (; 1 < t2; )
                try {
                  return i.stringifyByChunk(e2, r2, t2);
                } catch (e3) {
                  t2 = Math.floor(t2 / 2);
                }
            return i.stringifyByChar(e2);
          }
          function f(e2, t2) {
            for (var r2 = 0; r2 < e2.length; r2++)
              t2[r2] = e2[r2];
            return t2;
          }
          a.applyFromCharCode = s;
          var c = {};
          c.string = { string: n, array: function(e2) {
            return l(e2, new Array(e2.length));
          }, arraybuffer: function(e2) {
            return c.string.uint8array(e2).buffer;
          }, uint8array: function(e2) {
            return l(e2, new Uint8Array(e2.length));
          }, nodebuffer: function(e2) {
            return l(e2, r.allocBuffer(e2.length));
          } }, c.array = { string: s, array: n, arraybuffer: function(e2) {
            return new Uint8Array(e2).buffer;
          }, uint8array: function(e2) {
            return new Uint8Array(e2);
          }, nodebuffer: function(e2) {
            return r.newBufferFrom(e2);
          } }, c.arraybuffer = { string: function(e2) {
            return s(new Uint8Array(e2));
          }, array: function(e2) {
            return f(new Uint8Array(e2), new Array(e2.byteLength));
          }, arraybuffer: n, uint8array: function(e2) {
            return new Uint8Array(e2);
          }, nodebuffer: function(e2) {
            return r.newBufferFrom(new Uint8Array(e2));
          } }, c.uint8array = { string: s, array: function(e2) {
            return f(e2, new Array(e2.length));
          }, arraybuffer: function(e2) {
            return e2.buffer;
          }, uint8array: n, nodebuffer: function(e2) {
            return r.newBufferFrom(e2);
          } }, c.nodebuffer = { string: s, array: function(e2) {
            return f(e2, new Array(e2.length));
          }, arraybuffer: function(e2) {
            return c.nodebuffer.uint8array(e2).buffer;
          }, uint8array: function(e2) {
            return f(e2, new Uint8Array(e2.length));
          }, nodebuffer: n }, a.transformTo = function(e2, t2) {
            if (t2 = t2 || "", !e2)
              return t2;
            a.checkSupport(e2);
            var r2 = a.getTypeOf(t2);
            return c[r2][e2](t2);
          }, a.resolve = function(e2) {
            for (var t2 = e2.split("/"), r2 = [], n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              "." === i2 || "" === i2 && 0 !== n2 && n2 !== t2.length - 1 || (".." === i2 ? r2.pop() : r2.push(i2));
            }
            return r2.join("/");
          }, a.getTypeOf = function(e2) {
            return "string" == typeof e2 ? "string" : "[object Array]" === Object.prototype.toString.call(e2) ? "array" : o.nodebuffer && r.isBuffer(e2) ? "nodebuffer" : o.uint8array && e2 instanceof Uint8Array ? "uint8array" : o.arraybuffer && e2 instanceof ArrayBuffer ? "arraybuffer" : void 0;
          }, a.checkSupport = function(e2) {
            if (!o[e2.toLowerCase()])
              throw new Error(e2 + " is not supported by this platform");
          }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e2) {
            var t2, r2, n2 = "";
            for (r2 = 0; r2 < (e2 || "").length; r2++)
              n2 += "\\x" + ((t2 = e2.charCodeAt(r2)) < 16 ? "0" : "") + t2.toString(16).toUpperCase();
            return n2;
          }, a.delay = function(e2, t2, r2) {
            setImmediate(function() {
              e2.apply(r2 || null, t2 || []);
            });
          }, a.inherits = function(e2, t2) {
            function r2() {
            }
            r2.prototype = t2.prototype, e2.prototype = new r2();
          }, a.extend = function() {
            var e2, t2, r2 = {};
            for (e2 = 0; e2 < arguments.length; e2++)
              for (t2 in arguments[e2])
                arguments[e2].hasOwnProperty(t2) && void 0 === r2[t2] && (r2[t2] = arguments[e2][t2]);
            return r2;
          }, a.prepareContent = function(r2, e2, n2, i2, s2) {
            return u.Promise.resolve(e2).then(function(n3) {
              return o.blob && (n3 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n3))) && "undefined" != typeof FileReader ? new u.Promise(function(t2, r3) {
                var e3 = new FileReader();
                e3.onload = function(e4) {
                  t2(e4.target.result);
                }, e3.onerror = function(e4) {
                  r3(e4.target.error);
                }, e3.readAsArrayBuffer(n3);
              }) : n3;
            }).then(function(e3) {
              var t2 = a.getTypeOf(e3);
              return t2 ? ("arraybuffer" === t2 ? e3 = a.transformTo("uint8array", e3) : "string" === t2 && (s2 ? e3 = h.decode(e3) : n2 && true !== i2 && (e3 = function(e4) {
                return l(e4, o.uint8array ? new Uint8Array(e4.length) : new Array(e4.length));
              }(e3))), e3) : u.Promise.reject(new Error("Can't read the data of '" + r2 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
            });
          };
        }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, t, r) {
          "use strict";
          var n = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = (e("./utf8"), e("./support"));
          function h(e2) {
            this.files = [], this.loadOptions = e2;
          }
          h.prototype = { checkSignature: function(e2) {
            if (!this.reader.readAndCheckSignature(e2)) {
              this.reader.index -= 4;
              var t2 = this.reader.readString(4);
              throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t2) + ", expected " + i.pretty(e2) + ")");
            }
          }, isSignature: function(e2, t2) {
            var r2 = this.reader.index;
            this.reader.setIndex(e2);
            var n2 = this.reader.readString(4) === t2;
            return this.reader.setIndex(r2), n2;
          }, readBlockEndOfCentral: function() {
            this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
            var e2 = this.reader.readData(this.zipCommentLength), t2 = o.uint8array ? "uint8array" : "array", r2 = i.transformTo(t2, e2);
            this.zipComment = this.loadOptions.decodeFileName(r2);
          }, readBlockZip64EndOfCentral: function() {
            this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
            for (var e2, t2, r2, n2 = this.zip64EndOfCentralSize - 44; 0 < n2; )
              e2 = this.reader.readInt(2), t2 = this.reader.readInt(4), r2 = this.reader.readData(t2), this.zip64ExtensibleData[e2] = { id: e2, length: t2, value: r2 };
          }, readBlockZip64EndOfCentralLocator: function() {
            if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
              throw new Error("Multi-volumes zip are not supported");
          }, readLocalFiles: function() {
            var e2, t2;
            for (e2 = 0; e2 < this.files.length; e2++)
              t2 = this.files[e2], this.reader.setIndex(t2.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t2.readLocalPart(this.reader), t2.handleUTF8(), t2.processAttributes();
          }, readCentralDir: function() {
            var e2;
            for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); )
              (e2 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e2);
            if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length)
              throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
          }, readEndOfCentral: function() {
            var e2 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
            if (e2 < 0)
              throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
            this.reader.setIndex(e2);
            var t2 = e2;
            if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
              if (this.zip64 = true, (e2 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
              if (this.reader.setIndex(e2), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
              this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
            }
            var r2 = this.centralDirOffset + this.centralDirSize;
            this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
            var n2 = t2 - r2;
            if (0 < n2)
              this.isSignature(t2, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n2);
            else if (n2 < 0)
              throw new Error("Corrupted zip: missing " + Math.abs(n2) + " bytes.");
          }, prepareReader: function(e2) {
            this.reader = n(e2);
          }, load: function(e2) {
            this.prepareReader(e2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
          } }, t.exports = h;
        }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utf8": 31, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, t, r) {
          "use strict";
          var n = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
          function l(e2, t2) {
            this.options = e2, this.loadOptions = t2;
          }
          l.prototype = { isEncrypted: function() {
            return 1 == (1 & this.bitFlag);
          }, useUTF8: function() {
            return 2048 == (2048 & this.bitFlag);
          }, readLocalPart: function(e2) {
            var t2, r2;
            if (e2.skip(22), this.fileNameLength = e2.readInt(2), r2 = e2.readInt(2), this.fileName = e2.readData(this.fileNameLength), e2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize)
              throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
            if (null === (t2 = function(e3) {
              for (var t3 in h)
                if (h.hasOwnProperty(t3) && h[t3].magic === e3)
                  return h[t3];
              return null;
            }(this.compressionMethod)))
              throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
            this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t2, e2.readData(this.compressedSize));
          }, readCentralPart: function(e2) {
            this.versionMadeBy = e2.readInt(2), e2.skip(2), this.bitFlag = e2.readInt(2), this.compressionMethod = e2.readString(2), this.date = e2.readDate(), this.crc32 = e2.readInt(4), this.compressedSize = e2.readInt(4), this.uncompressedSize = e2.readInt(4);
            var t2 = e2.readInt(2);
            if (this.extraFieldsLength = e2.readInt(2), this.fileCommentLength = e2.readInt(2), this.diskNumberStart = e2.readInt(2), this.internalFileAttributes = e2.readInt(2), this.externalFileAttributes = e2.readInt(4), this.localHeaderOffset = e2.readInt(4), this.isEncrypted())
              throw new Error("Encrypted zip are not supported");
            e2.skip(t2), this.readExtraFields(e2), this.parseZIP64ExtraField(e2), this.fileComment = e2.readData(this.fileCommentLength);
          }, processAttributes: function() {
            this.unixPermissions = null, this.dosPermissions = null;
            var e2 = this.versionMadeBy >> 8;
            this.dir = !!(16 & this.externalFileAttributes), 0 == e2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
          }, parseZIP64ExtraField: function(e2) {
            if (this.extraFields[1]) {
              var t2 = n(this.extraFields[1].value);
              this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = t2.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = t2.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = t2.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = t2.readInt(4));
            }
          }, readExtraFields: function(e2) {
            var t2, r2, n2, i2 = e2.index + this.extraFieldsLength;
            for (this.extraFields || (this.extraFields = {}); e2.index + 4 < i2; )
              t2 = e2.readInt(2), r2 = e2.readInt(2), n2 = e2.readData(r2), this.extraFields[t2] = { id: t2, length: r2, value: n2 };
            e2.setIndex(i2);
          }, handleUTF8: function() {
            var e2 = u.uint8array ? "uint8array" : "array";
            if (this.useUTF8())
              this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
            else {
              var t2 = this.findExtraFieldUnicodePath();
              if (null !== t2)
                this.fileNameStr = t2;
              else {
                var r2 = s.transformTo(e2, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(r2);
              }
              var n2 = this.findExtraFieldUnicodeComment();
              if (null !== n2)
                this.fileCommentStr = n2;
              else {
                var i2 = s.transformTo(e2, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(i2);
              }
            }
          }, findExtraFieldUnicodePath: function() {
            var e2 = this.extraFields[28789];
            if (e2) {
              var t2 = n(e2.value);
              return 1 !== t2.readInt(1) ? null : a(this.fileName) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
            }
            return null;
          }, findExtraFieldUnicodeComment: function() {
            var e2 = this.extraFields[25461];
            if (e2) {
              var t2 = n(e2.value);
              return 1 !== t2.readInt(1) ? null : a(this.fileComment) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
            }
            return null;
          } }, t.exports = l;
        }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, t, r) {
          "use strict";
          function n(e2, t2, r2) {
            this.name = e2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = t2, this._dataBinary = r2.binary, this.options = { compression: r2.compression, compressionOptions: r2.compressionOptions };
          }
          var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
          n.prototype = { internalStream: function(e2) {
            var t2 = null, r2 = "string";
            try {
              if (!e2)
                throw new Error("No output type specified.");
              var n2 = "string" === (r2 = e2.toLowerCase()) || "text" === r2;
              "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), t2 = this._decompressWorker();
              var i2 = !this._dataBinary;
              i2 && !n2 && (t2 = t2.pipe(new a.Utf8EncodeWorker())), !i2 && n2 && (t2 = t2.pipe(new a.Utf8DecodeWorker()));
            } catch (e3) {
              (t2 = new h("error")).error(e3);
            }
            return new s(t2, r2, "");
          }, async: function(e2, t2) {
            return this.internalStream(e2).accumulate(t2);
          }, nodeStream: function(e2, t2) {
            return this.internalStream(e2 || "nodebuffer").toNodejsStream(t2);
          }, _compressWorker: function(e2, t2) {
            if (this._data instanceof o && this._data.compression.magic === e2.magic)
              return this._data.getCompressedWorker();
            var r2 = this._decompressWorker();
            return this._dataBinary || (r2 = r2.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r2, e2, t2);
          }, _decompressWorker: function() {
            return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
          } };
          for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, f = 0; f < u.length; f++)
            n.prototype[u[f]] = l;
          t.exports = n;
        }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, l, t) {
          (function(t2) {
            "use strict";
            var r, n, e2 = t2.MutationObserver || t2.WebKitMutationObserver;
            if (e2) {
              var i = 0, s = new e2(u), a = t2.document.createTextNode("");
              s.observe(a, { characterData: true }), r = function() {
                a.data = i = ++i % 2;
              };
            } else if (t2.setImmediate || void 0 === t2.MessageChannel)
              r = "document" in t2 && "onreadystatechange" in t2.document.createElement("script") ? function() {
                var e3 = t2.document.createElement("script");
                e3.onreadystatechange = function() {
                  u(), e3.onreadystatechange = null, e3.parentNode.removeChild(e3), e3 = null;
                }, t2.document.documentElement.appendChild(e3);
              } : function() {
                setTimeout(u, 0);
              };
            else {
              var o = new t2.MessageChannel();
              o.port1.onmessage = u, r = function() {
                o.port2.postMessage(0);
              };
            }
            var h = [];
            function u() {
              var e3, t3;
              n = true;
              for (var r2 = h.length; r2; ) {
                for (t3 = h, h = [], e3 = -1; ++e3 < r2; )
                  t3[e3]();
                r2 = h.length;
              }
              n = false;
            }
            l.exports = function(e3) {
              1 !== h.push(e3) || n || r();
            };
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}], 37: [function(e, t, r) {
          "use strict";
          var i = e("immediate");
          function u() {
          }
          var l = {}, s = ["REJECTED"], a = ["FULFILLED"], n = ["PENDING"];
          function o(e2) {
            if ("function" != typeof e2)
              throw new TypeError("resolver must be a function");
            this.state = n, this.queue = [], this.outcome = void 0, e2 !== u && d(this, e2);
          }
          function h(e2, t2, r2) {
            this.promise = e2, "function" == typeof t2 && (this.onFulfilled = t2, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r2 && (this.onRejected = r2, this.callRejected = this.otherCallRejected);
          }
          function f(t2, r2, n2) {
            i(function() {
              var e2;
              try {
                e2 = r2(n2);
              } catch (e3) {
                return l.reject(t2, e3);
              }
              e2 === t2 ? l.reject(t2, new TypeError("Cannot resolve promise with itself")) : l.resolve(t2, e2);
            });
          }
          function c(e2) {
            var t2 = e2 && e2.then;
            if (e2 && ("object" == typeof e2 || "function" == typeof e2) && "function" == typeof t2)
              return function() {
                t2.apply(e2, arguments);
              };
          }
          function d(t2, e2) {
            var r2 = false;
            function n2(e3) {
              r2 || (r2 = true, l.reject(t2, e3));
            }
            function i2(e3) {
              r2 || (r2 = true, l.resolve(t2, e3));
            }
            var s2 = p(function() {
              e2(i2, n2);
            });
            "error" === s2.status && n2(s2.value);
          }
          function p(e2, t2) {
            var r2 = {};
            try {
              r2.value = e2(t2), r2.status = "success";
            } catch (e3) {
              r2.status = "error", r2.value = e3;
            }
            return r2;
          }
          (t.exports = o).prototype.finally = function(t2) {
            if ("function" != typeof t2)
              return this;
            var r2 = this.constructor;
            return this.then(function(e2) {
              return r2.resolve(t2()).then(function() {
                return e2;
              });
            }, function(e2) {
              return r2.resolve(t2()).then(function() {
                throw e2;
              });
            });
          }, o.prototype.catch = function(e2) {
            return this.then(null, e2);
          }, o.prototype.then = function(e2, t2) {
            if ("function" != typeof e2 && this.state === a || "function" != typeof t2 && this.state === s)
              return this;
            var r2 = new this.constructor(u);
            this.state !== n ? f(r2, this.state === a ? e2 : t2, this.outcome) : this.queue.push(new h(r2, e2, t2));
            return r2;
          }, h.prototype.callFulfilled = function(e2) {
            l.resolve(this.promise, e2);
          }, h.prototype.otherCallFulfilled = function(e2) {
            f(this.promise, this.onFulfilled, e2);
          }, h.prototype.callRejected = function(e2) {
            l.reject(this.promise, e2);
          }, h.prototype.otherCallRejected = function(e2) {
            f(this.promise, this.onRejected, e2);
          }, l.resolve = function(e2, t2) {
            var r2 = p(c, t2);
            if ("error" === r2.status)
              return l.reject(e2, r2.value);
            var n2 = r2.value;
            if (n2)
              d(e2, n2);
            else {
              e2.state = a, e2.outcome = t2;
              for (var i2 = -1, s2 = e2.queue.length; ++i2 < s2; )
                e2.queue[i2].callFulfilled(t2);
            }
            return e2;
          }, l.reject = function(e2, t2) {
            e2.state = s, e2.outcome = t2;
            for (var r2 = -1, n2 = e2.queue.length; ++r2 < n2; )
              e2.queue[r2].callRejected(t2);
            return e2;
          }, o.resolve = function(e2) {
            if (e2 instanceof this)
              return e2;
            return l.resolve(new this(u), e2);
          }, o.reject = function(e2) {
            var t2 = new this(u);
            return l.reject(t2, e2);
          }, o.all = function(e2) {
            var r2 = this;
            if ("[object Array]" !== Object.prototype.toString.call(e2))
              return this.reject(new TypeError("must be an array"));
            var n2 = e2.length, i2 = false;
            if (!n2)
              return this.resolve([]);
            var s2 = new Array(n2), a2 = 0, t2 = -1, o2 = new this(u);
            for (; ++t2 < n2; )
              h2(e2[t2], t2);
            return o2;
            function h2(e3, t3) {
              r2.resolve(e3).then(function(e4) {
                s2[t3] = e4, ++a2 !== n2 || i2 || (i2 = true, l.resolve(o2, s2));
              }, function(e4) {
                i2 || (i2 = true, l.reject(o2, e4));
              });
            }
          }, o.race = function(e2) {
            var t2 = this;
            if ("[object Array]" !== Object.prototype.toString.call(e2))
              return this.reject(new TypeError("must be an array"));
            var r2 = e2.length, n2 = false;
            if (!r2)
              return this.resolve([]);
            var i2 = -1, s2 = new this(u);
            for (; ++i2 < r2; )
              a2 = e2[i2], t2.resolve(a2).then(function(e3) {
                n2 || (n2 = true, l.resolve(s2, e3));
              }, function(e3) {
                n2 || (n2 = true, l.reject(s2, e3));
              });
            var a2;
            return s2;
          };
        }, { immediate: 36 }], 38: [function(e, t, r) {
          "use strict";
          var n = {};
          (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
        }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, t, r) {
          "use strict";
          var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, c = 0, d = 8;
          function p(e2) {
            if (!(this instanceof p))
              return new p(e2);
            this.options = o.assign({ level: f, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c, to: "" }, e2 || {});
            var t2 = this.options;
            t2.raw && 0 < t2.windowBits ? t2.windowBits = -t2.windowBits : t2.gzip && 0 < t2.windowBits && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
            var r2 = a.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
            if (r2 !== l)
              throw new Error(i[r2]);
            if (t2.header && a.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
              var n2;
              if (n2 = "string" == typeof t2.dictionary ? h.string2buf(t2.dictionary) : "[object ArrayBuffer]" === u.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, (r2 = a.deflateSetDictionary(this.strm, n2)) !== l)
                throw new Error(i[r2]);
              this._dict_set = true;
            }
          }
          function n(e2, t2) {
            var r2 = new p(t2);
            if (r2.push(e2, true), r2.err)
              throw r2.msg || i[r2.err];
            return r2.result;
          }
          p.prototype.push = function(e2, t2) {
            var r2, n2, i2 = this.strm, s2 = this.options.chunkSize;
            if (this.ended)
              return false;
            n2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? i2.input = h.string2buf(e2) : "[object ArrayBuffer]" === u.call(e2) ? i2.input = new Uint8Array(e2) : i2.input = e2, i2.next_in = 0, i2.avail_in = i2.input.length;
            do {
              if (0 === i2.avail_out && (i2.output = new o.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), 1 !== (r2 = a.deflate(i2, n2)) && r2 !== l)
                return this.onEnd(r2), !(this.ended = true);
              0 !== i2.avail_out && (0 !== i2.avail_in || 4 !== n2 && 2 !== n2) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i2.output, i2.next_out))) : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
            } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r2);
            return 4 === n2 ? (r2 = a.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === l) : 2 !== n2 || (this.onEnd(l), !(i2.avail_out = 0));
          }, p.prototype.onData = function(e2) {
            this.chunks.push(e2);
          }, p.prototype.onEnd = function(e2) {
            e2 === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
          }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e2, t2) {
            return (t2 = t2 || {}).raw = true, n(e2, t2);
          }, r.gzip = function(e2, t2) {
            return (t2 = t2 || {}).gzip = true, n(e2, t2);
          };
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, t, r) {
          "use strict";
          var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m = e("./zlib/constants"), n = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _ = Object.prototype.toString;
          function a(e2) {
            if (!(this instanceof a))
              return new a(e2);
            this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e2 || {});
            var t2 = this.options;
            t2.raw && 0 <= t2.windowBits && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(0 <= t2.windowBits && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), 15 < t2.windowBits && t2.windowBits < 48 && 0 == (15 & t2.windowBits) && (t2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
            var r2 = c.inflateInit2(this.strm, t2.windowBits);
            if (r2 !== m.Z_OK)
              throw new Error(n[r2]);
            this.header = new s(), c.inflateGetHeader(this.strm, this.header);
          }
          function o(e2, t2) {
            var r2 = new a(t2);
            if (r2.push(e2, true), r2.err)
              throw r2.msg || n[r2.err];
            return r2.result;
          }
          a.prototype.push = function(e2, t2) {
            var r2, n2, i2, s2, a2, o2, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = false;
            if (this.ended)
              return false;
            n2 = t2 === ~~t2 ? t2 : true === t2 ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e2 ? h.input = p.binstring2buf(e2) : "[object ArrayBuffer]" === _.call(e2) ? h.input = new Uint8Array(e2) : h.input = e2, h.next_in = 0, h.avail_in = h.input.length;
            do {
              if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r2 = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o2 = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r2 = c.inflateSetDictionary(this.strm, o2)), r2 === m.Z_BUF_ERROR && true === f && (r2 = m.Z_OK, f = false), r2 !== m.Z_STREAM_END && r2 !== m.Z_OK)
                return this.onEnd(r2), !(this.ended = true);
              h.next_out && (0 !== h.avail_out && r2 !== m.Z_STREAM_END && (0 !== h.avail_in || n2 !== m.Z_FINISH && n2 !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i2 = p.utf8border(h.output, h.next_out), s2 = h.next_out - i2, a2 = p.buf2string(h.output, i2), h.next_out = s2, h.avail_out = u - s2, s2 && d.arraySet(h.output, h.output, i2, s2, 0), this.onData(a2)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = true);
            } while ((0 < h.avail_in || 0 === h.avail_out) && r2 !== m.Z_STREAM_END);
            return r2 === m.Z_STREAM_END && (n2 = m.Z_FINISH), n2 === m.Z_FINISH ? (r2 = c.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === m.Z_OK) : n2 !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
          }, a.prototype.onData = function(e2) {
            this.chunks.push(e2);
          }, a.prototype.onEnd = function(e2) {
            e2 === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
          }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e2, t2) {
            return (t2 = t2 || {}).raw = true, o(e2, t2);
          }, r.ungzip = o;
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, t, r) {
          "use strict";
          var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
          r.assign = function(e2) {
            for (var t2 = Array.prototype.slice.call(arguments, 1); t2.length; ) {
              var r2 = t2.shift();
              if (r2) {
                if ("object" != typeof r2)
                  throw new TypeError(r2 + "must be non-object");
                for (var n2 in r2)
                  r2.hasOwnProperty(n2) && (e2[n2] = r2[n2]);
              }
            }
            return e2;
          }, r.shrinkBuf = function(e2, t2) {
            return e2.length === t2 ? e2 : e2.subarray ? e2.subarray(0, t2) : (e2.length = t2, e2);
          };
          var i = { arraySet: function(e2, t2, r2, n2, i2) {
            if (t2.subarray && e2.subarray)
              e2.set(t2.subarray(r2, r2 + n2), i2);
            else
              for (var s2 = 0; s2 < n2; s2++)
                e2[i2 + s2] = t2[r2 + s2];
          }, flattenChunks: function(e2) {
            var t2, r2, n2, i2, s2, a;
            for (t2 = n2 = 0, r2 = e2.length; t2 < r2; t2++)
              n2 += e2[t2].length;
            for (a = new Uint8Array(n2), t2 = i2 = 0, r2 = e2.length; t2 < r2; t2++)
              s2 = e2[t2], a.set(s2, i2), i2 += s2.length;
            return a;
          } }, s = { arraySet: function(e2, t2, r2, n2, i2) {
            for (var s2 = 0; s2 < n2; s2++)
              e2[i2 + s2] = t2[r2 + s2];
          }, flattenChunks: function(e2) {
            return [].concat.apply([], e2);
          } };
          r.setTyped = function(e2) {
            e2 ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
          }, r.setTyped(n);
        }, {}], 42: [function(e, t, r) {
          "use strict";
          var h = e("./common"), i = true, s = true;
          try {
            String.fromCharCode.apply(null, [0]);
          } catch (e2) {
            i = false;
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1));
          } catch (e2) {
            s = false;
          }
          for (var u = new h.Buf8(256), n = 0; n < 256; n++)
            u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
          function l(e2, t2) {
            if (t2 < 65537 && (e2.subarray && s || !e2.subarray && i))
              return String.fromCharCode.apply(null, h.shrinkBuf(e2, t2));
            for (var r2 = "", n2 = 0; n2 < t2; n2++)
              r2 += String.fromCharCode(e2[n2]);
            return r2;
          }
          u[254] = u[254] = 1, r.string2buf = function(e2) {
            var t2, r2, n2, i2, s2, a = e2.length, o = 0;
            for (i2 = 0; i2 < a; i2++)
              55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
            for (t2 = new h.Buf8(o), i2 = s2 = 0; s2 < o; i2++)
              55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
            return t2;
          }, r.buf2binstring = function(e2) {
            return l(e2, e2.length);
          }, r.binstring2buf = function(e2) {
            for (var t2 = new h.Buf8(e2.length), r2 = 0, n2 = t2.length; r2 < n2; r2++)
              t2[r2] = e2.charCodeAt(r2);
            return t2;
          }, r.buf2string = function(e2, t2) {
            var r2, n2, i2, s2, a = t2 || e2.length, o = new Array(2 * a);
            for (r2 = n2 = 0; r2 < a; )
              if ((i2 = e2[r2++]) < 128)
                o[n2++] = i2;
              else if (4 < (s2 = u[i2]))
                o[n2++] = 65533, r2 += s2 - 1;
              else {
                for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; 1 < s2 && r2 < a; )
                  i2 = i2 << 6 | 63 & e2[r2++], s2--;
                1 < s2 ? o[n2++] = 65533 : i2 < 65536 ? o[n2++] = i2 : (i2 -= 65536, o[n2++] = 55296 | i2 >> 10 & 1023, o[n2++] = 56320 | 1023 & i2);
              }
            return l(o, n2);
          }, r.utf8border = function(e2, t2) {
            var r2;
            for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; 0 <= r2 && 128 == (192 & e2[r2]); )
              r2--;
            return r2 < 0 ? t2 : 0 === r2 ? t2 : r2 + u[e2[r2]] > t2 ? r2 : t2;
          };
        }, { "./common": 41 }], 43: [function(e, t, r) {
          "use strict";
          t.exports = function(e2, t2, r2, n) {
            for (var i = 65535 & e2 | 0, s = e2 >>> 16 & 65535 | 0, a = 0; 0 !== r2; ) {
              for (r2 -= a = 2e3 < r2 ? 2e3 : r2; s = s + (i = i + t2[n++] | 0) | 0, --a; )
                ;
              i %= 65521, s %= 65521;
            }
            return i | s << 16 | 0;
          };
        }, {}], 44: [function(e, t, r) {
          "use strict";
          t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
        }, {}], 45: [function(e, t, r) {
          "use strict";
          var o = function() {
            for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
              e2 = r2;
              for (var n = 0; n < 8; n++)
                e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
              t2[r2] = e2;
            }
            return t2;
          }();
          t.exports = function(e2, t2, r2, n) {
            var i = o, s = n + r2;
            e2 ^= -1;
            for (var a = n; a < s; a++)
              e2 = e2 >>> 8 ^ i[255 & (e2 ^ t2[a])];
            return -1 ^ e2;
          };
        }, {}], 46: [function(e, t, r) {
          "use strict";
          var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n = e("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, i = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
          function R(e2, t2) {
            return e2.msg = n[t2], t2;
          }
          function T(e2) {
            return (e2 << 1) - (4 < e2 ? 9 : 0);
          }
          function D(e2) {
            for (var t2 = e2.length; 0 <= --t2; )
              e2[t2] = 0;
          }
          function F(e2) {
            var t2 = e2.state, r2 = t2.pending;
            r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (c.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
          }
          function N(e2, t2) {
            u._tr_flush_block(e2, 0 <= e2.block_start ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, F(e2.strm);
          }
          function U(e2, t2) {
            e2.pending_buf[e2.pending++] = t2;
          }
          function P(e2, t2) {
            e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
          }
          function L(e2, t2) {
            var r2, n2, i2 = e2.max_chain_length, s2 = e2.strstart, a2 = e2.prev_length, o2 = e2.nice_match, h2 = e2.strstart > e2.w_size - z ? e2.strstart - (e2.w_size - z) : 0, u2 = e2.window, l2 = e2.w_mask, f2 = e2.prev, c2 = e2.strstart + S, d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
            e2.prev_length >= e2.good_match && (i2 >>= 2), o2 > e2.lookahead && (o2 = e2.lookahead);
            do {
              if (u2[(r2 = t2) + a2] === p2 && u2[r2 + a2 - 1] === d2 && u2[r2] === u2[s2] && u2[++r2] === u2[s2 + 1]) {
                s2 += 2, r2++;
                do {
                } while (u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && s2 < c2);
                if (n2 = S - (c2 - s2), s2 = c2 - S, a2 < n2) {
                  if (e2.match_start = t2, o2 <= (a2 = n2))
                    break;
                  d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
                }
              }
            } while ((t2 = f2[t2 & l2]) > h2 && 0 != --i2);
            return a2 <= e2.lookahead ? a2 : e2.lookahead;
          }
          function j(e2) {
            var t2, r2, n2, i2, s2, a2, o2, h2, u2, l2, f2 = e2.w_size;
            do {
              if (i2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= f2 + (f2 - z)) {
                for (c.arraySet(e2.window, e2.window, f2, f2, 0), e2.match_start -= f2, e2.strstart -= f2, e2.block_start -= f2, t2 = r2 = e2.hash_size; n2 = e2.head[--t2], e2.head[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; )
                  ;
                for (t2 = r2 = f2; n2 = e2.prev[--t2], e2.prev[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; )
                  ;
                i2 += f2;
              }
              if (0 === e2.strm.avail_in)
                break;
              if (a2 = e2.strm, o2 = e2.window, h2 = e2.strstart + e2.lookahead, u2 = i2, l2 = void 0, l2 = a2.avail_in, u2 < l2 && (l2 = u2), r2 = 0 === l2 ? 0 : (a2.avail_in -= l2, c.arraySet(o2, a2.input, a2.next_in, l2, h2), 1 === a2.state.wrap ? a2.adler = d(a2.adler, o2, l2, h2) : 2 === a2.state.wrap && (a2.adler = p(a2.adler, o2, l2, h2)), a2.next_in += l2, a2.total_in += l2, l2), e2.lookahead += r2, e2.lookahead + e2.insert >= x)
                for (s2 = e2.strstart - e2.insert, e2.ins_h = e2.window[s2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + x - 1]) & e2.hash_mask, e2.prev[s2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = s2, s2++, e2.insert--, !(e2.lookahead + e2.insert < x)); )
                  ;
            } while (e2.lookahead < z && 0 !== e2.strm.avail_in);
          }
          function Z(e2, t2) {
            for (var r2, n2; ; ) {
              if (e2.lookahead < z) {
                if (j(e2), e2.lookahead < z && t2 === l)
                  return A;
                if (0 === e2.lookahead)
                  break;
              }
              if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2)), e2.match_length >= x)
                if (n2 = u._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - x), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= x) {
                  for (e2.match_length--; e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart, 0 != --e2.match_length; )
                    ;
                  e2.strstart++;
                } else
                  e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
              else
                n2 = u._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
              if (n2 && (N(e2, false), 0 === e2.strm.avail_out))
                return A;
            }
            return e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
          }
          function W(e2, t2) {
            for (var r2, n2, i2; ; ) {
              if (e2.lookahead < z) {
                if (j(e2), e2.lookahead < z && t2 === l)
                  return A;
                if (0 === e2.lookahead)
                  break;
              }
              if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = x - 1, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || e2.match_length === x && 4096 < e2.strstart - e2.match_start) && (e2.match_length = x - 1)), e2.prev_length >= x && e2.match_length <= e2.prev_length) {
                for (i2 = e2.strstart + e2.lookahead - x, n2 = u._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - x), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2; ++e2.strstart <= i2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 != --e2.prev_length; )
                  ;
                if (e2.match_available = 0, e2.match_length = x - 1, e2.strstart++, n2 && (N(e2, false), 0 === e2.strm.avail_out))
                  return A;
              } else if (e2.match_available) {
                if ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && N(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out)
                  return A;
              } else
                e2.match_available = 1, e2.strstart++, e2.lookahead--;
            }
            return e2.match_available && (n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
          }
          function M(e2, t2, r2, n2, i2) {
            this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n2, this.func = i2;
          }
          function H() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
          }
          function G(e2) {
            var t2;
            return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = i, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? C : E, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = l, u._tr_init(t2), m) : R(e2, _);
          }
          function K(e2) {
            var t2 = G(e2);
            return t2 === m && function(e3) {
              e3.window_size = 2 * e3.w_size, D(e3.head), e3.max_lazy_match = h[e3.level].max_lazy, e3.good_match = h[e3.level].good_length, e3.nice_match = h[e3.level].nice_length, e3.max_chain_length = h[e3.level].max_chain, e3.strstart = 0, e3.block_start = 0, e3.lookahead = 0, e3.insert = 0, e3.match_length = e3.prev_length = x - 1, e3.match_available = 0, e3.ins_h = 0;
            }(e2.state), t2;
          }
          function Y(e2, t2, r2, n2, i2, s2) {
            if (!e2)
              return _;
            var a2 = 1;
            if (t2 === g && (t2 = 6), n2 < 0 ? (a2 = 0, n2 = -n2) : 15 < n2 && (a2 = 2, n2 -= 16), i2 < 1 || y < i2 || r2 !== v || n2 < 8 || 15 < n2 || t2 < 0 || 9 < t2 || s2 < 0 || b < s2)
              return R(e2, _);
            8 === n2 && (n2 = 9);
            var o2 = new H();
            return (e2.state = o2).strm = e2, o2.wrap = a2, o2.gzhead = null, o2.w_bits = n2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = i2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x - 1) / x), o2.window = new c.Buf8(2 * o2.w_size), o2.head = new c.Buf16(o2.hash_size), o2.prev = new c.Buf16(o2.w_size), o2.lit_bufsize = 1 << i2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new c.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t2, o2.strategy = s2, o2.method = r2, K(e2);
          }
          h = [new M(0, 0, 0, 0, function(e2, t2) {
            var r2 = 65535;
            for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
              if (e2.lookahead <= 1) {
                if (j(e2), 0 === e2.lookahead && t2 === l)
                  return A;
                if (0 === e2.lookahead)
                  break;
              }
              e2.strstart += e2.lookahead, e2.lookahead = 0;
              var n2 = e2.block_start + r2;
              if ((0 === e2.strstart || e2.strstart >= n2) && (e2.lookahead = e2.strstart - n2, e2.strstart = n2, N(e2, false), 0 === e2.strm.avail_out))
                return A;
              if (e2.strstart - e2.block_start >= e2.w_size - z && (N(e2, false), 0 === e2.strm.avail_out))
                return A;
            }
            return e2.insert = 0, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : (e2.strstart > e2.block_start && (N(e2, false), e2.strm.avail_out), A);
          }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r.deflateInit = function(e2, t2) {
            return Y(e2, t2, v, 15, 8, 0);
          }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function(e2, t2) {
            return e2 && e2.state ? 2 !== e2.state.wrap ? _ : (e2.state.gzhead = t2, m) : _;
          }, r.deflate = function(e2, t2) {
            var r2, n2, i2, s2;
            if (!e2 || !e2.state || 5 < t2 || t2 < 0)
              return e2 ? R(e2, _) : _;
            if (n2 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || 666 === n2.status && t2 !== f)
              return R(e2, 0 === e2.avail_out ? -5 : _);
            if (n2.strm = e2, r2 = n2.last_flush, n2.last_flush = t2, n2.status === C)
              if (2 === n2.wrap)
                e2.adler = 0, U(n2, 31), U(n2, 139), U(n2, 8), n2.gzhead ? (U(n2, (n2.gzhead.text ? 1 : 0) + (n2.gzhead.hcrc ? 2 : 0) + (n2.gzhead.extra ? 4 : 0) + (n2.gzhead.name ? 8 : 0) + (n2.gzhead.comment ? 16 : 0)), U(n2, 255 & n2.gzhead.time), U(n2, n2.gzhead.time >> 8 & 255), U(n2, n2.gzhead.time >> 16 & 255), U(n2, n2.gzhead.time >> 24 & 255), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 255 & n2.gzhead.os), n2.gzhead.extra && n2.gzhead.extra.length && (U(n2, 255 & n2.gzhead.extra.length), U(n2, n2.gzhead.extra.length >> 8 & 255)), n2.gzhead.hcrc && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending, 0)), n2.gzindex = 0, n2.status = 69) : (U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 3), n2.status = E);
              else {
                var a2 = v + (n2.w_bits - 8 << 4) << 8;
                a2 |= (2 <= n2.strategy || n2.level < 2 ? 0 : n2.level < 6 ? 1 : 6 === n2.level ? 2 : 3) << 6, 0 !== n2.strstart && (a2 |= 32), a2 += 31 - a2 % 31, n2.status = E, P(n2, a2), 0 !== n2.strstart && (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), e2.adler = 1;
              }
            if (69 === n2.status)
              if (n2.gzhead.extra) {
                for (i2 = n2.pending; n2.gzindex < (65535 & n2.gzhead.extra.length) && (n2.pending !== n2.pending_buf_size || (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending !== n2.pending_buf_size)); )
                  U(n2, 255 & n2.gzhead.extra[n2.gzindex]), n2.gzindex++;
                n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), n2.gzindex === n2.gzhead.extra.length && (n2.gzindex = 0, n2.status = 73);
              } else
                n2.status = 73;
            if (73 === n2.status)
              if (n2.gzhead.name) {
                i2 = n2.pending;
                do {
                  if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                    s2 = 1;
                    break;
                  }
                  s2 = n2.gzindex < n2.gzhead.name.length ? 255 & n2.gzhead.name.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
                } while (0 !== s2);
                n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.gzindex = 0, n2.status = 91);
              } else
                n2.status = 91;
            if (91 === n2.status)
              if (n2.gzhead.comment) {
                i2 = n2.pending;
                do {
                  if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                    s2 = 1;
                    break;
                  }
                  s2 = n2.gzindex < n2.gzhead.comment.length ? 255 & n2.gzhead.comment.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
                } while (0 !== s2);
                n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.status = 103);
              } else
                n2.status = 103;
            if (103 === n2.status && (n2.gzhead.hcrc ? (n2.pending + 2 > n2.pending_buf_size && F(e2), n2.pending + 2 <= n2.pending_buf_size && (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), e2.adler = 0, n2.status = E)) : n2.status = E), 0 !== n2.pending) {
              if (F(e2), 0 === e2.avail_out)
                return n2.last_flush = -1, m;
            } else if (0 === e2.avail_in && T(t2) <= T(r2) && t2 !== f)
              return R(e2, -5);
            if (666 === n2.status && 0 !== e2.avail_in)
              return R(e2, -5);
            if (0 !== e2.avail_in || 0 !== n2.lookahead || t2 !== l && 666 !== n2.status) {
              var o2 = 2 === n2.strategy ? function(e3, t3) {
                for (var r3; ; ) {
                  if (0 === e3.lookahead && (j(e3), 0 === e3.lookahead)) {
                    if (t3 === l)
                      return A;
                    break;
                  }
                  if (e3.match_length = 0, r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (N(e3, false), 0 === e3.strm.avail_out))
                    return A;
                }
                return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
              }(n2, t2) : 3 === n2.strategy ? function(e3, t3) {
                for (var r3, n3, i3, s3, a3 = e3.window; ; ) {
                  if (e3.lookahead <= S) {
                    if (j(e3), e3.lookahead <= S && t3 === l)
                      return A;
                    if (0 === e3.lookahead)
                      break;
                  }
                  if (e3.match_length = 0, e3.lookahead >= x && 0 < e3.strstart && (n3 = a3[i3 = e3.strstart - 1]) === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3]) {
                    s3 = e3.strstart + S;
                    do {
                    } while (n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && i3 < s3);
                    e3.match_length = S - (s3 - i3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
                  }
                  if (e3.match_length >= x ? (r3 = u._tr_tally(e3, 1, e3.match_length - x), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (N(e3, false), 0 === e3.strm.avail_out))
                    return A;
                }
                return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
              }(n2, t2) : h[n2.level].func(n2, t2);
              if (o2 !== O && o2 !== B || (n2.status = 666), o2 === A || o2 === O)
                return 0 === e2.avail_out && (n2.last_flush = -1), m;
              if (o2 === I && (1 === t2 ? u._tr_align(n2) : 5 !== t2 && (u._tr_stored_block(n2, 0, 0, false), 3 === t2 && (D(n2.head), 0 === n2.lookahead && (n2.strstart = 0, n2.block_start = 0, n2.insert = 0))), F(e2), 0 === e2.avail_out))
                return n2.last_flush = -1, m;
            }
            return t2 !== f ? m : n2.wrap <= 0 ? 1 : (2 === n2.wrap ? (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), U(n2, e2.adler >> 16 & 255), U(n2, e2.adler >> 24 & 255), U(n2, 255 & e2.total_in), U(n2, e2.total_in >> 8 & 255), U(n2, e2.total_in >> 16 & 255), U(n2, e2.total_in >> 24 & 255)) : (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), F(e2), 0 < n2.wrap && (n2.wrap = -n2.wrap), 0 !== n2.pending ? m : 1);
          }, r.deflateEnd = function(e2) {
            var t2;
            return e2 && e2.state ? (t2 = e2.state.status) !== C && 69 !== t2 && 73 !== t2 && 91 !== t2 && 103 !== t2 && t2 !== E && 666 !== t2 ? R(e2, _) : (e2.state = null, t2 === E ? R(e2, -3) : m) : _;
          }, r.deflateSetDictionary = function(e2, t2) {
            var r2, n2, i2, s2, a2, o2, h2, u2, l2 = t2.length;
            if (!e2 || !e2.state)
              return _;
            if (2 === (s2 = (r2 = e2.state).wrap) || 1 === s2 && r2.status !== C || r2.lookahead)
              return _;
            for (1 === s2 && (e2.adler = d(e2.adler, t2, l2, 0)), r2.wrap = 0, l2 >= r2.w_size && (0 === s2 && (D(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), u2 = new c.Buf8(r2.w_size), c.arraySet(u2, t2, l2 - r2.w_size, r2.w_size, 0), t2 = u2, l2 = r2.w_size), a2 = e2.avail_in, o2 = e2.next_in, h2 = e2.input, e2.avail_in = l2, e2.next_in = 0, e2.input = t2, j(r2); r2.lookahead >= x; ) {
              for (n2 = r2.strstart, i2 = r2.lookahead - (x - 1); r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + x - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++, --i2; )
                ;
              r2.strstart = n2, r2.lookahead = x - 1, j(r2);
            }
            return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = x - 1, r2.match_available = 0, e2.next_in = o2, e2.input = h2, e2.avail_in = a2, r2.wrap = s2, m;
          }, r.deflateInfo = "pako deflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, t, r) {
          "use strict";
          t.exports = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
          };
        }, {}], 48: [function(e, t, r) {
          "use strict";
          t.exports = function(e2, t2) {
            var r2, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
            r2 = e2.state, n = e2.next_in, z = e2.input, i = n + (e2.avail_in - 5), s = e2.next_out, C = e2.output, a = s - (t2 - e2.avail_out), o = s + (e2.avail_out - 257), h = r2.dmax, u = r2.wsize, l = r2.whave, f = r2.wnext, c = r2.window, d = r2.hold, p = r2.bits, m = r2.lencode, _ = r2.distcode, g = (1 << r2.lenbits) - 1, b = (1 << r2.distbits) - 1;
            e:
              do {
                p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = m[d & g];
                t:
                  for (; ; ) {
                    if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255))
                      C[s++] = 65535 & v;
                    else {
                      if (!(16 & y)) {
                        if (0 == (64 & y)) {
                          v = m[(65535 & v) + (d & (1 << y) - 1)];
                          continue t;
                        }
                        if (32 & y) {
                          r2.mode = 12;
                          break e;
                        }
                        e2.msg = "invalid literal/length code", r2.mode = 30;
                        break e;
                      }
                      w = 65535 & v, (y &= 15) && (p < y && (d += z[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = _[d & b];
                      r:
                        for (; ; ) {
                          if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                            if (0 == (64 & y)) {
                              v = _[(65535 & v) + (d & (1 << y) - 1)];
                              continue r;
                            }
                            e2.msg = "invalid distance code", r2.mode = 30;
                            break e;
                          }
                          if (k = 65535 & v, p < (y &= 15) && (d += z[n++] << p, (p += 8) < y && (d += z[n++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                            e2.msg = "invalid distance too far back", r2.mode = 30;
                            break e;
                          }
                          if (d >>>= y, p -= y, (y = s - a) < k) {
                            if (l < (y = k - y) && r2.sane) {
                              e2.msg = "invalid distance too far back", r2.mode = 30;
                              break e;
                            }
                            if (S = c, (x = 0) === f) {
                              if (x += u - y, y < w) {
                                for (w -= y; C[s++] = c[x++], --y; )
                                  ;
                                x = s - k, S = C;
                              }
                            } else if (f < y) {
                              if (x += u + f - y, (y -= f) < w) {
                                for (w -= y; C[s++] = c[x++], --y; )
                                  ;
                                if (x = 0, f < w) {
                                  for (w -= y = f; C[s++] = c[x++], --y; )
                                    ;
                                  x = s - k, S = C;
                                }
                              }
                            } else if (x += f - y, y < w) {
                              for (w -= y; C[s++] = c[x++], --y; )
                                ;
                              x = s - k, S = C;
                            }
                            for (; 2 < w; )
                              C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                            w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                          } else {
                            for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3); )
                              ;
                            w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                          }
                          break;
                        }
                    }
                    break;
                  }
              } while (n < i && s < o);
            n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e2.next_in = n, e2.next_out = s, e2.avail_in = n < i ? i - n + 5 : 5 - (n - i), e2.avail_out = s < o ? o - s + 257 : 257 - (s - o), r2.hold = d, r2.bits = p;
          };
        }, {}], 49: [function(e, t, r) {
          "use strict";
          var I = e("../utils/common"), O = e("./adler32"), B = e("./crc32"), R = e("./inffast"), T = e("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, n = 852, i = 592;
          function L(e2) {
            return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
          }
          function s() {
            this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
          }
          function a(e2) {
            var t2;
            return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = P, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new I.Buf32(n), t2.distcode = t2.distdyn = new I.Buf32(i), t2.sane = 1, t2.back = -1, N) : U;
          }
          function o(e2) {
            var t2;
            return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, a(e2)) : U;
          }
          function h(e2, t2) {
            var r2, n2;
            return e2 && e2.state ? (n2 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || 15 < t2) ? U : (null !== n2.window && n2.wbits !== t2 && (n2.window = null), n2.wrap = r2, n2.wbits = t2, o(e2))) : U;
          }
          function u(e2, t2) {
            var r2, n2;
            return e2 ? (n2 = new s(), (e2.state = n2).window = null, (r2 = h(e2, t2)) !== N && (e2.state = null), r2) : U;
          }
          var l, f, c = true;
          function j(e2) {
            if (c) {
              var t2;
              for (l = new I.Buf32(512), f = new I.Buf32(32), t2 = 0; t2 < 144; )
                e2.lens[t2++] = 8;
              for (; t2 < 256; )
                e2.lens[t2++] = 9;
              for (; t2 < 280; )
                e2.lens[t2++] = 7;
              for (; t2 < 288; )
                e2.lens[t2++] = 8;
              for (T(D, e2.lens, 0, 288, l, 0, e2.work, { bits: 9 }), t2 = 0; t2 < 32; )
                e2.lens[t2++] = 5;
              T(F, e2.lens, 0, 32, f, 0, e2.work, { bits: 5 }), c = false;
            }
            e2.lencode = l, e2.lenbits = 9, e2.distcode = f, e2.distbits = 5;
          }
          function Z(e2, t2, r2, n2) {
            var i2, s2 = e2.state;
            return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I.Buf8(s2.wsize)), n2 >= s2.wsize ? (I.arraySet(s2.window, t2, r2 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (n2 < (i2 = s2.wsize - s2.wnext) && (i2 = n2), I.arraySet(s2.window, t2, r2 - n2, i2, s2.wnext), (n2 -= i2) ? (I.arraySet(s2.window, t2, r2 - n2, n2, 0), s2.wnext = n2, s2.whave = s2.wsize) : (s2.wnext += i2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += i2))), 0;
          }
          r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e2) {
            return u(e2, 15);
          }, r.inflateInit2 = u, r.inflate = function(e2, t2) {
            var r2, n2, i2, s2, a2, o2, h2, u2, l2, f2, c2, d, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in)
              return U;
            12 === (r2 = e2.state).mode && (r2.mode = 13), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, f2 = o2, c2 = h2, x = N;
            e:
              for (; ; )
                switch (r2.mode) {
                  case P:
                    if (0 === r2.wrap) {
                      r2.mode = 13;
                      break;
                    }
                    for (; l2 < 16; ) {
                      if (0 === o2)
                        break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    if (2 & r2.wrap && 35615 === u2) {
                      E[r2.check = 0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0), l2 = u2 = 0, r2.mode = 2;
                      break;
                    }
                    if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & u2) << 8) + (u2 >> 8)) % 31) {
                      e2.msg = "incorrect header check", r2.mode = 30;
                      break;
                    }
                    if (8 != (15 & u2)) {
                      e2.msg = "unknown compression method", r2.mode = 30;
                      break;
                    }
                    if (l2 -= 4, k = 8 + (15 & (u2 >>>= 4)), 0 === r2.wbits)
                      r2.wbits = k;
                    else if (k > r2.wbits) {
                      e2.msg = "invalid window size", r2.mode = 30;
                      break;
                    }
                    r2.dmax = 1 << k, e2.adler = r2.check = 1, r2.mode = 512 & u2 ? 10 : 12, l2 = u2 = 0;
                    break;
                  case 2:
                    for (; l2 < 16; ) {
                      if (0 === o2)
                        break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    if (r2.flags = u2, 8 != (255 & r2.flags)) {
                      e2.msg = "unknown compression method", r2.mode = 30;
                      break;
                    }
                    if (57344 & r2.flags) {
                      e2.msg = "unknown header flags set", r2.mode = 30;
                      break;
                    }
                    r2.head && (r2.head.text = u2 >> 8 & 1), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 3;
                  case 3:
                    for (; l2 < 32; ) {
                      if (0 === o2)
                        break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    r2.head && (r2.head.time = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, E[2] = u2 >>> 16 & 255, E[3] = u2 >>> 24 & 255, r2.check = B(r2.check, E, 4, 0)), l2 = u2 = 0, r2.mode = 4;
                  case 4:
                    for (; l2 < 16; ) {
                      if (0 === o2)
                        break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    r2.head && (r2.head.xflags = 255 & u2, r2.head.os = u2 >> 8), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 5;
                  case 5:
                    if (1024 & r2.flags) {
                      for (; l2 < 16; ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      r2.length = u2, r2.head && (r2.head.extra_len = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0;
                    } else
                      r2.head && (r2.head.extra = null);
                    r2.mode = 6;
                  case 6:
                    if (1024 & r2.flags && (o2 < (d = r2.length) && (d = o2), d && (r2.head && (k = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), I.arraySet(r2.head.extra, n2, s2, d, k)), 512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, r2.length -= d), r2.length))
                      break e;
                    r2.length = 0, r2.mode = 7;
                  case 7:
                    if (2048 & r2.flags) {
                      if (0 === o2)
                        break e;
                      for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.name += String.fromCharCode(k)), k && d < o2; )
                        ;
                      if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k)
                        break e;
                    } else
                      r2.head && (r2.head.name = null);
                    r2.length = 0, r2.mode = 8;
                  case 8:
                    if (4096 & r2.flags) {
                      if (0 === o2)
                        break e;
                      for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.comment += String.fromCharCode(k)), k && d < o2; )
                        ;
                      if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k)
                        break e;
                    } else
                      r2.head && (r2.head.comment = null);
                    r2.mode = 9;
                  case 9:
                    if (512 & r2.flags) {
                      for (; l2 < 16; ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      if (u2 !== (65535 & r2.check)) {
                        e2.msg = "header crc mismatch", r2.mode = 30;
                        break;
                      }
                      l2 = u2 = 0;
                    }
                    r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = 12;
                    break;
                  case 10:
                    for (; l2 < 32; ) {
                      if (0 === o2)
                        break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    e2.adler = r2.check = L(u2), l2 = u2 = 0, r2.mode = 11;
                  case 11:
                    if (0 === r2.havedict)
                      return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, 2;
                    e2.adler = r2.check = 1, r2.mode = 12;
                  case 12:
                    if (5 === t2 || 6 === t2)
                      break e;
                  case 13:
                    if (r2.last) {
                      u2 >>>= 7 & l2, l2 -= 7 & l2, r2.mode = 27;
                      break;
                    }
                    for (; l2 < 3; ) {
                      if (0 === o2)
                        break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    switch (r2.last = 1 & u2, l2 -= 1, 3 & (u2 >>>= 1)) {
                      case 0:
                        r2.mode = 14;
                        break;
                      case 1:
                        if (j(r2), r2.mode = 20, 6 !== t2)
                          break;
                        u2 >>>= 2, l2 -= 2;
                        break e;
                      case 2:
                        r2.mode = 17;
                        break;
                      case 3:
                        e2.msg = "invalid block type", r2.mode = 30;
                    }
                    u2 >>>= 2, l2 -= 2;
                    break;
                  case 14:
                    for (u2 >>>= 7 & l2, l2 -= 7 & l2; l2 < 32; ) {
                      if (0 === o2)
                        break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    if ((65535 & u2) != (u2 >>> 16 ^ 65535)) {
                      e2.msg = "invalid stored block lengths", r2.mode = 30;
                      break;
                    }
                    if (r2.length = 65535 & u2, l2 = u2 = 0, r2.mode = 15, 6 === t2)
                      break e;
                  case 15:
                    r2.mode = 16;
                  case 16:
                    if (d = r2.length) {
                      if (o2 < d && (d = o2), h2 < d && (d = h2), 0 === d)
                        break e;
                      I.arraySet(i2, n2, s2, d, a2), o2 -= d, s2 += d, h2 -= d, a2 += d, r2.length -= d;
                      break;
                    }
                    r2.mode = 12;
                    break;
                  case 17:
                    for (; l2 < 14; ) {
                      if (0 === o2)
                        break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    if (r2.nlen = 257 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ndist = 1 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ncode = 4 + (15 & u2), u2 >>>= 4, l2 -= 4, 286 < r2.nlen || 30 < r2.ndist) {
                      e2.msg = "too many length or distance symbols", r2.mode = 30;
                      break;
                    }
                    r2.have = 0, r2.mode = 18;
                  case 18:
                    for (; r2.have < r2.ncode; ) {
                      for (; l2 < 3; ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      r2.lens[A[r2.have++]] = 7 & u2, u2 >>>= 3, l2 -= 3;
                    }
                    for (; r2.have < 19; )
                      r2.lens[A[r2.have++]] = 0;
                    if (r2.lencode = r2.lendyn, r2.lenbits = 7, S = { bits: r2.lenbits }, x = T(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                      e2.msg = "invalid code lengths set", r2.mode = 30;
                      break;
                    }
                    r2.have = 0, r2.mode = 19;
                  case 19:
                    for (; r2.have < r2.nlen + r2.ndist; ) {
                      for (; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      if (b < 16)
                        u2 >>>= _, l2 -= _, r2.lens[r2.have++] = b;
                      else {
                        if (16 === b) {
                          for (z = _ + 2; l2 < z; ) {
                            if (0 === o2)
                              break e;
                            o2--, u2 += n2[s2++] << l2, l2 += 8;
                          }
                          if (u2 >>>= _, l2 -= _, 0 === r2.have) {
                            e2.msg = "invalid bit length repeat", r2.mode = 30;
                            break;
                          }
                          k = r2.lens[r2.have - 1], d = 3 + (3 & u2), u2 >>>= 2, l2 -= 2;
                        } else if (17 === b) {
                          for (z = _ + 3; l2 < z; ) {
                            if (0 === o2)
                              break e;
                            o2--, u2 += n2[s2++] << l2, l2 += 8;
                          }
                          l2 -= _, k = 0, d = 3 + (7 & (u2 >>>= _)), u2 >>>= 3, l2 -= 3;
                        } else {
                          for (z = _ + 7; l2 < z; ) {
                            if (0 === o2)
                              break e;
                            o2--, u2 += n2[s2++] << l2, l2 += 8;
                          }
                          l2 -= _, k = 0, d = 11 + (127 & (u2 >>>= _)), u2 >>>= 7, l2 -= 7;
                        }
                        if (r2.have + d > r2.nlen + r2.ndist) {
                          e2.msg = "invalid bit length repeat", r2.mode = 30;
                          break;
                        }
                        for (; d--; )
                          r2.lens[r2.have++] = k;
                      }
                    }
                    if (30 === r2.mode)
                      break;
                    if (0 === r2.lens[256]) {
                      e2.msg = "invalid code -- missing end-of-block", r2.mode = 30;
                      break;
                    }
                    if (r2.lenbits = 9, S = { bits: r2.lenbits }, x = T(D, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                      e2.msg = "invalid literal/lengths set", r2.mode = 30;
                      break;
                    }
                    if (r2.distbits = 6, r2.distcode = r2.distdyn, S = { bits: r2.distbits }, x = T(F, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, S), r2.distbits = S.bits, x) {
                      e2.msg = "invalid distances set", r2.mode = 30;
                      break;
                    }
                    if (r2.mode = 20, 6 === t2)
                      break e;
                  case 20:
                    r2.mode = 21;
                  case 21:
                    if (6 <= o2 && 258 <= h2) {
                      e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, R(e2, c2), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, 12 === r2.mode && (r2.back = -1);
                      break;
                    }
                    for (r2.back = 0; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                      if (0 === o2)
                        break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    if (g && 0 == (240 & g)) {
                      for (v = _, y = g, w = b; g = (C = r2.lencode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      u2 >>>= v, l2 -= v, r2.back += v;
                    }
                    if (u2 >>>= _, l2 -= _, r2.back += _, r2.length = b, 0 === g) {
                      r2.mode = 26;
                      break;
                    }
                    if (32 & g) {
                      r2.back = -1, r2.mode = 12;
                      break;
                    }
                    if (64 & g) {
                      e2.msg = "invalid literal/length code", r2.mode = 30;
                      break;
                    }
                    r2.extra = 15 & g, r2.mode = 22;
                  case 22:
                    if (r2.extra) {
                      for (z = r2.extra; l2 < z; ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      r2.length += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
                    }
                    r2.was = r2.length, r2.mode = 23;
                  case 23:
                    for (; g = (C = r2.distcode[u2 & (1 << r2.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                      if (0 === o2)
                        break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    if (0 == (240 & g)) {
                      for (v = _, y = g, w = b; g = (C = r2.distcode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      u2 >>>= v, l2 -= v, r2.back += v;
                    }
                    if (u2 >>>= _, l2 -= _, r2.back += _, 64 & g) {
                      e2.msg = "invalid distance code", r2.mode = 30;
                      break;
                    }
                    r2.offset = b, r2.extra = 15 & g, r2.mode = 24;
                  case 24:
                    if (r2.extra) {
                      for (z = r2.extra; l2 < z; ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      r2.offset += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
                    }
                    if (r2.offset > r2.dmax) {
                      e2.msg = "invalid distance too far back", r2.mode = 30;
                      break;
                    }
                    r2.mode = 25;
                  case 25:
                    if (0 === h2)
                      break e;
                    if (d = c2 - h2, r2.offset > d) {
                      if ((d = r2.offset - d) > r2.whave && r2.sane) {
                        e2.msg = "invalid distance too far back", r2.mode = 30;
                        break;
                      }
                      p = d > r2.wnext ? (d -= r2.wnext, r2.wsize - d) : r2.wnext - d, d > r2.length && (d = r2.length), m = r2.window;
                    } else
                      m = i2, p = a2 - r2.offset, d = r2.length;
                    for (h2 < d && (d = h2), h2 -= d, r2.length -= d; i2[a2++] = m[p++], --d; )
                      ;
                    0 === r2.length && (r2.mode = 21);
                    break;
                  case 26:
                    if (0 === h2)
                      break e;
                    i2[a2++] = r2.length, h2--, r2.mode = 21;
                    break;
                  case 27:
                    if (r2.wrap) {
                      for (; l2 < 32; ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 |= n2[s2++] << l2, l2 += 8;
                      }
                      if (c2 -= h2, e2.total_out += c2, r2.total += c2, c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, a2 - c2) : O(r2.check, i2, c2, a2 - c2)), c2 = h2, (r2.flags ? u2 : L(u2)) !== r2.check) {
                        e2.msg = "incorrect data check", r2.mode = 30;
                        break;
                      }
                      l2 = u2 = 0;
                    }
                    r2.mode = 28;
                  case 28:
                    if (r2.wrap && r2.flags) {
                      for (; l2 < 32; ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      if (u2 !== (4294967295 & r2.total)) {
                        e2.msg = "incorrect length check", r2.mode = 30;
                        break;
                      }
                      l2 = u2 = 0;
                    }
                    r2.mode = 29;
                  case 29:
                    x = 1;
                    break e;
                  case 30:
                    x = -3;
                    break e;
                  case 31:
                    return -4;
                  case 32:
                  default:
                    return U;
                }
            return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, (r2.wsize || c2 !== e2.avail_out && r2.mode < 30 && (r2.mode < 27 || 4 !== t2)) && Z(e2, e2.output, e2.next_out, c2 - e2.avail_out) ? (r2.mode = 31, -4) : (f2 -= e2.avail_in, c2 -= e2.avail_out, e2.total_in += f2, e2.total_out += c2, r2.total += c2, r2.wrap && c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, e2.next_out - c2) : O(r2.check, i2, c2, e2.next_out - c2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (12 === r2.mode ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 == f2 && 0 === c2 || 4 === t2) && x === N && (x = -5), x);
          }, r.inflateEnd = function(e2) {
            if (!e2 || !e2.state)
              return U;
            var t2 = e2.state;
            return t2.window && (t2.window = null), e2.state = null, N;
          }, r.inflateGetHeader = function(e2, t2) {
            var r2;
            return e2 && e2.state ? 0 == (2 & (r2 = e2.state).wrap) ? U : ((r2.head = t2).done = false, N) : U;
          }, r.inflateSetDictionary = function(e2, t2) {
            var r2, n2 = t2.length;
            return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? U : 11 === r2.mode && O(1, t2, n2, 0) !== r2.check ? -3 : Z(e2, t2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, N) : U;
          }, r.inflateInfo = "pako inflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, t, r) {
          "use strict";
          var D = e("../utils/common"), F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
          t.exports = function(e2, t2, r2, n, i, s, a, o) {
            var h, u, l, f, c, d, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
            for (b = 0; b <= 15; b++)
              O[b] = 0;
            for (v = 0; v < n; v++)
              O[t2[r2 + v]]++;
            for (k = g, w = 15; 1 <= w && 0 === O[w]; w--)
              ;
            if (w < k && (k = w), 0 === w)
              return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
            for (y = 1; y < w && 0 === O[y]; y++)
              ;
            for (k < y && (k = y), b = z = 1; b <= 15; b++)
              if (z <<= 1, (z -= O[b]) < 0)
                return -1;
            if (0 < z && (0 === e2 || 1 !== w))
              return -1;
            for (B[1] = 0, b = 1; b < 15; b++)
              B[b + 1] = B[b] + O[b];
            for (v = 0; v < n; v++)
              0 !== t2[r2 + v] && (a[B[t2[r2 + v]]++] = v);
            if (d = 0 === e2 ? (A = R = a, 19) : 1 === e2 ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e2 && 852 < C || 2 === e2 && 592 < C)
              return 1;
            for (; ; ) {
              for (p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u; )
                ;
              for (h = 1 << b - 1; E & h; )
                h >>= 1;
              if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
                if (b === w)
                  break;
                b = t2[r2 + a[v]];
              }
              if (k < b && (E & f) !== l) {
                for (0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0); )
                  x++, z <<= 1;
                if (C += 1 << x, 1 === e2 && 852 < C || 2 === e2 && 592 < C)
                  return 1;
                i[l = E & f] = k << 24 | x << 16 | c - s | 0;
              }
            }
            return 0 !== E && (i[c + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
          };
        }, { "../utils/common": 41 }], 51: [function(e, t, r) {
          "use strict";
          t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
        }, {}], 52: [function(e, t, r) {
          "use strict";
          var i = e("../utils/common"), o = 0, h = 1;
          function n(e2) {
            for (var t2 = e2.length; 0 <= --t2; )
              e2[t2] = 0;
          }
          var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, c = 19, _ = 2 * l + 1, g = 15, d = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (l + 2));
          n(z);
          var C = new Array(2 * f);
          n(C);
          var E = new Array(512);
          n(E);
          var A = new Array(256);
          n(A);
          var I = new Array(a);
          n(I);
          var O, B, R, T = new Array(f);
          function D(e2, t2, r2, n2, i2) {
            this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n2, this.max_length = i2, this.has_stree = e2 && e2.length;
          }
          function F(e2, t2) {
            this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
          }
          function N(e2) {
            return e2 < 256 ? E[e2] : E[256 + (e2 >>> 7)];
          }
          function U(e2, t2) {
            e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
          }
          function P(e2, t2, r2) {
            e2.bi_valid > d - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, U(e2, e2.bi_buf), e2.bi_buf = t2 >> d - e2.bi_valid, e2.bi_valid += r2 - d) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
          }
          function L(e2, t2, r2) {
            P(e2, r2[2 * t2], r2[2 * t2 + 1]);
          }
          function j(e2, t2) {
            for (var r2 = 0; r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1, 0 < --t2; )
              ;
            return r2 >>> 1;
          }
          function Z(e2, t2, r2) {
            var n2, i2, s2 = new Array(g + 1), a2 = 0;
            for (n2 = 1; n2 <= g; n2++)
              s2[n2] = a2 = a2 + r2[n2 - 1] << 1;
            for (i2 = 0; i2 <= t2; i2++) {
              var o2 = e2[2 * i2 + 1];
              0 !== o2 && (e2[2 * i2] = j(s2[o2]++, o2));
            }
          }
          function W(e2) {
            var t2;
            for (t2 = 0; t2 < l; t2++)
              e2.dyn_ltree[2 * t2] = 0;
            for (t2 = 0; t2 < f; t2++)
              e2.dyn_dtree[2 * t2] = 0;
            for (t2 = 0; t2 < c; t2++)
              e2.bl_tree[2 * t2] = 0;
            e2.dyn_ltree[2 * m] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
          }
          function M(e2) {
            8 < e2.bi_valid ? U(e2, e2.bi_buf) : 0 < e2.bi_valid && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
          }
          function H(e2, t2, r2, n2) {
            var i2 = 2 * t2, s2 = 2 * r2;
            return e2[i2] < e2[s2] || e2[i2] === e2[s2] && n2[t2] <= n2[r2];
          }
          function G(e2, t2, r2) {
            for (var n2 = e2.heap[r2], i2 = r2 << 1; i2 <= e2.heap_len && (i2 < e2.heap_len && H(t2, e2.heap[i2 + 1], e2.heap[i2], e2.depth) && i2++, !H(t2, n2, e2.heap[i2], e2.depth)); )
              e2.heap[r2] = e2.heap[i2], r2 = i2, i2 <<= 1;
            e2.heap[r2] = n2;
          }
          function K(e2, t2, r2) {
            var n2, i2, s2, a2, o2 = 0;
            if (0 !== e2.last_lit)
              for (; n2 = e2.pending_buf[e2.d_buf + 2 * o2] << 8 | e2.pending_buf[e2.d_buf + 2 * o2 + 1], i2 = e2.pending_buf[e2.l_buf + o2], o2++, 0 === n2 ? L(e2, i2, t2) : (L(e2, (s2 = A[i2]) + u + 1, t2), 0 !== (a2 = w[s2]) && P(e2, i2 -= I[s2], a2), L(e2, s2 = N(--n2), r2), 0 !== (a2 = k[s2]) && P(e2, n2 -= T[s2], a2)), o2 < e2.last_lit; )
                ;
            L(e2, m, t2);
          }
          function Y(e2, t2) {
            var r2, n2, i2, s2 = t2.dyn_tree, a2 = t2.stat_desc.static_tree, o2 = t2.stat_desc.has_stree, h2 = t2.stat_desc.elems, u2 = -1;
            for (e2.heap_len = 0, e2.heap_max = _, r2 = 0; r2 < h2; r2++)
              0 !== s2[2 * r2] ? (e2.heap[++e2.heap_len] = u2 = r2, e2.depth[r2] = 0) : s2[2 * r2 + 1] = 0;
            for (; e2.heap_len < 2; )
              s2[2 * (i2 = e2.heap[++e2.heap_len] = u2 < 2 ? ++u2 : 0)] = 1, e2.depth[i2] = 0, e2.opt_len--, o2 && (e2.static_len -= a2[2 * i2 + 1]);
            for (t2.max_code = u2, r2 = e2.heap_len >> 1; 1 <= r2; r2--)
              G(e2, s2, r2);
            for (i2 = h2; r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], G(e2, s2, 1), n2 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n2, s2[2 * i2] = s2[2 * r2] + s2[2 * n2], e2.depth[i2] = (e2.depth[r2] >= e2.depth[n2] ? e2.depth[r2] : e2.depth[n2]) + 1, s2[2 * r2 + 1] = s2[2 * n2 + 1] = i2, e2.heap[1] = i2++, G(e2, s2, 1), 2 <= e2.heap_len; )
              ;
            e2.heap[--e2.heap_max] = e2.heap[1], function(e3, t3) {
              var r3, n3, i3, s3, a3, o3, h3 = t3.dyn_tree, u3 = t3.max_code, l2 = t3.stat_desc.static_tree, f2 = t3.stat_desc.has_stree, c2 = t3.stat_desc.extra_bits, d2 = t3.stat_desc.extra_base, p2 = t3.stat_desc.max_length, m2 = 0;
              for (s3 = 0; s3 <= g; s3++)
                e3.bl_count[s3] = 0;
              for (h3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < _; r3++)
                p2 < (s3 = h3[2 * h3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) && (s3 = p2, m2++), h3[2 * n3 + 1] = s3, u3 < n3 || (e3.bl_count[s3]++, a3 = 0, d2 <= n3 && (a3 = c2[n3 - d2]), o3 = h3[2 * n3], e3.opt_len += o3 * (s3 + a3), f2 && (e3.static_len += o3 * (l2[2 * n3 + 1] + a3)));
              if (0 !== m2) {
                do {
                  for (s3 = p2 - 1; 0 === e3.bl_count[s3]; )
                    s3--;
                  e3.bl_count[s3]--, e3.bl_count[s3 + 1] += 2, e3.bl_count[p2]--, m2 -= 2;
                } while (0 < m2);
                for (s3 = p2; 0 !== s3; s3--)
                  for (n3 = e3.bl_count[s3]; 0 !== n3; )
                    u3 < (i3 = e3.heap[--r3]) || (h3[2 * i3 + 1] !== s3 && (e3.opt_len += (s3 - h3[2 * i3 + 1]) * h3[2 * i3], h3[2 * i3 + 1] = s3), n3--);
              }
            }(e2, t2), Z(s2, u2, e2.bl_count);
          }
          function X(e2, t2, r2) {
            var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
            for (0 === a2 && (h2 = 138, u2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++)
              i2 = a2, a2 = t2[2 * (n2 + 1) + 1], ++o2 < h2 && i2 === a2 || (o2 < u2 ? e2.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && e2.bl_tree[2 * i2]++, e2.bl_tree[2 * b]++) : o2 <= 10 ? e2.bl_tree[2 * v]++ : e2.bl_tree[2 * y]++, s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4));
          }
          function V(e2, t2, r2) {
            var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
            for (0 === a2 && (h2 = 138, u2 = 3), n2 = 0; n2 <= r2; n2++)
              if (i2 = a2, a2 = t2[2 * (n2 + 1) + 1], !(++o2 < h2 && i2 === a2)) {
                if (o2 < u2)
                  for (; L(e2, i2, e2.bl_tree), 0 != --o2; )
                    ;
                else
                  0 !== i2 ? (i2 !== s2 && (L(e2, i2, e2.bl_tree), o2--), L(e2, b, e2.bl_tree), P(e2, o2 - 3, 2)) : o2 <= 10 ? (L(e2, v, e2.bl_tree), P(e2, o2 - 3, 3)) : (L(e2, y, e2.bl_tree), P(e2, o2 - 11, 7));
                s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4);
              }
          }
          n(T);
          var q = false;
          function J(e2, t2, r2, n2) {
            P(e2, (s << 1) + (n2 ? 1 : 0), 3), function(e3, t3, r3, n3) {
              M(e3), n3 && (U(e3, r3), U(e3, ~r3)), i.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
            }(e2, t2, r2, true);
          }
          r._tr_init = function(e2) {
            q || (function() {
              var e3, t2, r2, n2, i2, s2 = new Array(g + 1);
              for (n2 = r2 = 0; n2 < a - 1; n2++)
                for (I[n2] = r2, e3 = 0; e3 < 1 << w[n2]; e3++)
                  A[r2++] = n2;
              for (A[r2 - 1] = n2, n2 = i2 = 0; n2 < 16; n2++)
                for (T[n2] = i2, e3 = 0; e3 < 1 << k[n2]; e3++)
                  E[i2++] = n2;
              for (i2 >>= 7; n2 < f; n2++)
                for (T[n2] = i2 << 7, e3 = 0; e3 < 1 << k[n2] - 7; e3++)
                  E[256 + i2++] = n2;
              for (t2 = 0; t2 <= g; t2++)
                s2[t2] = 0;
              for (e3 = 0; e3 <= 143; )
                z[2 * e3 + 1] = 8, e3++, s2[8]++;
              for (; e3 <= 255; )
                z[2 * e3 + 1] = 9, e3++, s2[9]++;
              for (; e3 <= 279; )
                z[2 * e3 + 1] = 7, e3++, s2[7]++;
              for (; e3 <= 287; )
                z[2 * e3 + 1] = 8, e3++, s2[8]++;
              for (Z(z, l + 1, s2), e3 = 0; e3 < f; e3++)
                C[2 * e3 + 1] = 5, C[2 * e3] = j(e3, 5);
              O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
            }(), q = true), e2.l_desc = new F(e2.dyn_ltree, O), e2.d_desc = new F(e2.dyn_dtree, B), e2.bl_desc = new F(e2.bl_tree, R), e2.bi_buf = 0, e2.bi_valid = 0, W(e2);
          }, r._tr_stored_block = J, r._tr_flush_block = function(e2, t2, r2, n2) {
            var i2, s2, a2 = 0;
            0 < e2.level ? (2 === e2.strm.data_type && (e2.strm.data_type = function(e3) {
              var t3, r3 = 4093624447;
              for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1)
                if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3])
                  return o;
              if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26])
                return h;
              for (t3 = 32; t3 < u; t3++)
                if (0 !== e3.dyn_ltree[2 * t3])
                  return h;
              return o;
            }(e2)), Y(e2, e2.l_desc), Y(e2, e2.d_desc), a2 = function(e3) {
              var t3;
              for (X(e3, e3.dyn_ltree, e3.l_desc.max_code), X(e3, e3.dyn_dtree, e3.d_desc.max_code), Y(e3, e3.bl_desc), t3 = c - 1; 3 <= t3 && 0 === e3.bl_tree[2 * S[t3] + 1]; t3--)
                ;
              return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
            }(e2), i2 = e2.opt_len + 3 + 7 >>> 3, (s2 = e2.static_len + 3 + 7 >>> 3) <= i2 && (i2 = s2)) : i2 = s2 = r2 + 5, r2 + 4 <= i2 && -1 !== t2 ? J(e2, t2, r2, n2) : 4 === e2.strategy || s2 === i2 ? (P(e2, 2 + (n2 ? 1 : 0), 3), K(e2, z, C)) : (P(e2, 4 + (n2 ? 1 : 0), 3), function(e3, t3, r3, n3) {
              var i3;
              for (P(e3, t3 - 257, 5), P(e3, r3 - 1, 5), P(e3, n3 - 4, 4), i3 = 0; i3 < n3; i3++)
                P(e3, e3.bl_tree[2 * S[i3] + 1], 3);
              V(e3, e3.dyn_ltree, t3 - 1), V(e3, e3.dyn_dtree, r3 - 1);
            }(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, a2 + 1), K(e2, e2.dyn_ltree, e2.dyn_dtree)), W(e2), n2 && M(e2);
          }, r._tr_tally = function(e2, t2, r2) {
            return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (A[r2] + u + 1)]++, e2.dyn_dtree[2 * N(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
          }, r._tr_align = function(e2) {
            P(e2, 2, 3), L(e2, m, z), function(e3) {
              16 === e3.bi_valid ? (U(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : 8 <= e3.bi_valid && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
            }(e2);
          };
        }, { "../utils/common": 41 }], 53: [function(e, t, r) {
          "use strict";
          t.exports = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
          };
        }, {}], 54: [function(e, t, r) {
          (function(e2) {
            !function(r2, n) {
              "use strict";
              if (!r2.setImmediate) {
                var i, s, t2, a, o = 1, h = {}, u = false, l = r2.document, e3 = Object.getPrototypeOf && Object.getPrototypeOf(r2);
                e3 = e3 && e3.setTimeout ? e3 : r2, i = "[object process]" === {}.toString.call(r2.process) ? function(e4) {
                  process.nextTick(function() {
                    c(e4);
                  });
                } : function() {
                  if (r2.postMessage && !r2.importScripts) {
                    var e4 = true, t3 = r2.onmessage;
                    return r2.onmessage = function() {
                      e4 = false;
                    }, r2.postMessage("", "*"), r2.onmessage = t3, e4;
                  }
                }() ? (a = "setImmediate$" + Math.random() + "$", r2.addEventListener ? r2.addEventListener("message", d, false) : r2.attachEvent("onmessage", d), function(e4) {
                  r2.postMessage(a + e4, "*");
                }) : r2.MessageChannel ? ((t2 = new MessageChannel()).port1.onmessage = function(e4) {
                  c(e4.data);
                }, function(e4) {
                  t2.port2.postMessage(e4);
                }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function(e4) {
                  var t3 = l.createElement("script");
                  t3.onreadystatechange = function() {
                    c(e4), t3.onreadystatechange = null, s.removeChild(t3), t3 = null;
                  }, s.appendChild(t3);
                }) : function(e4) {
                  setTimeout(c, 0, e4);
                }, e3.setImmediate = function(e4) {
                  "function" != typeof e4 && (e4 = new Function("" + e4));
                  for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; r3++)
                    t3[r3] = arguments[r3 + 1];
                  var n2 = { callback: e4, args: t3 };
                  return h[o] = n2, i(o), o++;
                }, e3.clearImmediate = f;
              }
              function f(e4) {
                delete h[e4];
              }
              function c(e4) {
                if (u)
                  setTimeout(c, 0, e4);
                else {
                  var t3 = h[e4];
                  if (t3) {
                    u = true;
                    try {
                      !function(e5) {
                        var t4 = e5.callback, r3 = e5.args;
                        switch (r3.length) {
                          case 0:
                            t4();
                            break;
                          case 1:
                            t4(r3[0]);
                            break;
                          case 2:
                            t4(r3[0], r3[1]);
                            break;
                          case 3:
                            t4(r3[0], r3[1], r3[2]);
                            break;
                          default:
                            t4.apply(n, r3);
                        }
                      }(t3);
                    } finally {
                      f(e4), u = false;
                    }
                  }
                }
              }
              function d(e4) {
                e4.source === r2 && "string" == typeof e4.data && 0 === e4.data.indexOf(a) && c(+e4.data.slice(a.length));
              }
            }("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}] }, {}, [10])(10);
      });
    }
  });

  // node_modules/generator-sort/build/index.js
  var require_build = __commonJS({
    "node_modules/generator-sort/build/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function compareStrings2(sA, sB) {
        return sA > sB ? 1 : sA < sB ? -1 : 0;
      }
      exports.compareStrings = compareStrings2;
      function compareNumbers2(sA, sB) {
        return sA - sB;
      }
      exports.compareNumbers = compareNumbers2;
      function reverse(r) {
        return -r;
      }
      exports.reverse = reverse;
      function compareStringsCaseInsensitive(sA, sB) {
        return sA.localeCompare(sB, void 0, {
          sensitivity: "base"
        });
      }
      exports.compareStringsCaseInsensitive = compareStringsCaseInsensitive;
      function sortFunction2(gen) {
        return (a, b) => {
          for (let comp of gen(a, b)) {
            if (comp) {
              return comp;
            }
          }
          return 0;
        };
      }
      exports.sortFunction = sortFunction2;
    }
  });

  // src/Ruleset.ts
  var import_js_worker_search = __toESM(require_js_worker_search());

  // node_modules/svelte/internal/index.mjs
  function noop() {
  }
  function assign(tar, src) {
    for (const k in src)
      tar[k] = src[k];
    return tar;
  }
  function is_promise(value) {
    return value && typeof value === "object" && typeof value.then === "function";
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  var src_url_equal_anchor;
  function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
      src_url_equal_anchor = document.createElement("a");
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function subscribe(store, ...callbacks) {
    if (store == null) {
      return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }
  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      const lets = definition[2](fn(dirty));
      if ($$scope.dirty === void 0) {
        return lets;
      }
      if (typeof lets === "object") {
        const merged = [];
        const len = Math.max($$scope.dirty.length, lets.length);
        for (let i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }
        return merged;
      }
      return $$scope.dirty | lets;
    }
    return $$scope.dirty;
  }
  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
      const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }
  function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
      const dirty = [];
      const length = $$scope.ctx.length / 32;
      for (let i = 0; i < length; i++) {
        dirty[i] = -1;
      }
      return dirty;
    }
    return -1;
  }
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  function end_hydrating() {
    is_hydrating = false;
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    node.parentNode.removeChild(node);
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i])
        iterations[i].d(detaching);
    }
  }
  function element(name) {
    return document.createElement(name);
  }
  function svg_element(name) {
    return document.createElementNS("http://www.w3.org/2000/svg", name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function empty() {
    return text("");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.wholeText !== data)
      text2.data = data;
  }
  function set_input_value(input, value) {
    input.value = value == null ? "" : value;
  }
  function set_style(node, key, value, important) {
    if (value === null) {
      node.style.removeProperty(key);
    } else {
      node.style.setProperty(key, value, important ? "important" : "");
    }
  }
  function toggle_class(element2, name, toggle) {
    element2.classList[toggle ? "add" : "remove"](name);
  }
  function custom_event(type2, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent("CustomEvent");
    e.initCustomEvent(type2, bubbles, cancelable, detail);
    return e;
  }
  var HtmlTag = class {
    constructor(is_svg = false) {
      this.is_svg = false;
      this.is_svg = is_svg;
      this.e = this.n = null;
    }
    c(html) {
      this.h(html);
    }
    m(html, target, anchor = null) {
      if (!this.e) {
        if (this.is_svg)
          this.e = svg_element(target.nodeName);
        else
          this.e = element(target.nodeName);
        this.t = target;
        this.c(html);
      }
      this.i(anchor);
    }
    h(html) {
      this.e.innerHTML = html;
      this.n = Array.from(this.e.childNodes);
    }
    i(anchor) {
      for (let i = 0; i < this.n.length; i += 1) {
        insert(this.t, this.n[i], anchor);
      }
    }
    p(html) {
      this.d();
      this.h(html);
      this.i(this.a);
    }
    d() {
      this.n.forEach(detach);
    }
  };
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
  }
  function createEventDispatcher() {
    const component = get_current_component();
    return (type2, detail, { cancelable = false } = {}) => {
      const callbacks = component.$$.callbacks[type2];
      if (callbacks) {
        const event = custom_event(type2, detail, { cancelable });
        callbacks.slice().forEach((fn) => {
          fn.call(component, event);
        });
        return !event.defaultPrevented;
      }
      return true;
    };
  }
  function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
    return context;
  }
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  var seen_callbacks = /* @__PURE__ */ new Set();
  var flushidx = 0;
  function flush() {
    const saved_component = current_component;
    do {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  var outroing = /* @__PURE__ */ new Set();
  var outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local);
    } else if (callback) {
      callback();
    }
  }
  function handle_promise(promise, info) {
    const token = info.token = {};
    function update2(type2, index, key, value) {
      if (info.token !== token)
        return;
      info.resolved = value;
      let child_ctx = info.ctx;
      if (key !== void 0) {
        child_ctx = child_ctx.slice();
        child_ctx[key] = value;
      }
      const block = type2 && (info.current = type2)(child_ctx);
      let needs_flush = false;
      if (info.block) {
        if (info.blocks) {
          info.blocks.forEach((block2, i) => {
            if (i !== index && block2) {
              group_outros();
              transition_out(block2, 1, 1, () => {
                if (info.blocks[i] === block2) {
                  info.blocks[i] = null;
                }
              });
              check_outros();
            }
          });
        } else {
          info.block.d(1);
        }
        block.c();
        transition_in(block, 1);
        block.m(info.mount(), info.anchor);
        needs_flush = true;
      }
      info.block = block;
      if (info.blocks)
        info.blocks[index] = block;
      if (needs_flush) {
        flush();
      }
    }
    if (is_promise(promise)) {
      const current_component2 = get_current_component();
      promise.then((value) => {
        set_current_component(current_component2);
        update2(info.then, 1, info.value, value);
        set_current_component(null);
      }, (error) => {
        set_current_component(current_component2);
        update2(info.catch, 2, info.error, error);
        set_current_component(null);
        if (!info.hasCatch) {
          throw error;
        }
      });
      if (info.current !== info.pending) {
        update2(info.pending, 0);
        return true;
      }
    } else {
      if (info.current !== info.then) {
        update2(info.then, 1, info.value, promise);
        return true;
      }
      info.resolved = promise;
    }
  }
  function update_await_block_branch(info, ctx, dirty) {
    const child_ctx = ctx.slice();
    const { resolved } = info;
    if (info.current === info.then) {
      child_ctx[info.value] = resolved;
    }
    if (info.current === info.catch) {
      child_ctx[info.error] = resolved;
    }
    info.block.p(child_ctx, dirty);
  }
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
      lookup.delete(block.key);
    });
  }
  function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block29, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
      old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = /* @__PURE__ */ new Map();
    const deltas = /* @__PURE__ */ new Map();
    i = n;
    while (i--) {
      const child_ctx = get_context(ctx, list, i);
      const key = get_key(child_ctx);
      let block = lookup.get(key);
      if (!block) {
        block = create_each_block29(key, child_ctx);
        block.c();
      } else if (dynamic) {
        block.p(child_ctx, dirty);
      }
      new_lookup.set(key, new_blocks[i] = block);
      if (key in old_indexes)
        deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = /* @__PURE__ */ new Set();
    const did_move = /* @__PURE__ */ new Set();
    function insert2(block) {
      transition_in(block, 1);
      block.m(node, next);
      lookup.set(block.key, block);
      next = block.first;
      n--;
    }
    while (o && n) {
      const new_block = new_blocks[n - 1];
      const old_block = old_blocks[o - 1];
      const new_key = new_block.key;
      const old_key = old_block.key;
      if (new_block === old_block) {
        next = new_block.first;
        o--;
        n--;
      } else if (!new_lookup.has(old_key)) {
        destroy(old_block, lookup);
        o--;
      } else if (!lookup.has(new_key) || will_move.has(new_key)) {
        insert2(new_block);
      } else if (did_move.has(old_key)) {
        o--;
      } else if (deltas.get(new_key) > deltas.get(old_key)) {
        did_move.add(new_key);
        insert2(new_block);
      } else {
        will_move.add(old_key);
        o--;
      }
    }
    while (o--) {
      const old_block = old_blocks[o];
      if (!new_lookup.has(old_block.key))
        destroy(old_block, lookup);
    }
    while (n)
      insert2(new_blocks[n - 1]);
    return new_blocks;
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
          on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance41, create_fragment41, not_equal, props, append_styles2, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: null,
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles2 && append_styles2($$.root);
    let ready = false;
    $$.ctx = instance41 ? instance41(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment41 ? create_fragment41($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount } = this.$$;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function);
        for (const key in this.$$.slotted) {
          this.appendChild(this.$$.slotted[key]);
        }
      }
      attributeChangedCallback(attr2, _oldValue, newValue) {
        this[attr2] = newValue;
      }
      disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
      $on(type2, callback) {
        const callbacks = this.$$.callbacks[type2] || (this.$$.callbacks[type2] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    };
  }
  var SvelteComponent = class {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type2, callback) {
      const callbacks = this.$$.callbacks[type2] || (this.$$.callbacks[type2] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };

  // src/LinkNoTooltip.svelte
  function create_else_block(ctx) {
    let a;
    let tr2;
    let a_href_value;
    let a_class_value;
    let current;
    tr2 = new Tr_default({
      props: {
        s: ctx[0],
        icon: ctx[1]
      }
    });
    return {
      c() {
        a = element("a");
        create_component(tr2.$$.fragment);
        attr(a, "href", a_href_value = "##" + ctx[0]);
        attr(a, "class", a_class_value = rul.article(ctx[0]) ? "" : "dead");
      },
      m(target, anchor) {
        insert(target, a, anchor);
        mount_component(tr2, a, null);
        current = true;
      },
      p(ctx2, dirty) {
        const tr_changes = {};
        if (dirty & 1)
          tr_changes.s = ctx2[0];
        if (dirty & 2)
          tr_changes.icon = ctx2[1];
        tr2.$set(tr_changes);
        if (!current || dirty & 1 && a_href_value !== (a_href_value = "##" + ctx2[0])) {
          attr(a, "href", a_href_value);
        }
        if (!current || dirty & 1 && a_class_value !== (a_class_value = rul.article(ctx2[0]) ? "" : "dead")) {
          attr(a, "class", a_class_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(a);
        destroy_component(tr2);
      }
    };
  }
  function create_if_block(ctx) {
    let em;
    let t;
    return {
      c() {
        em = element("em");
        t = text(ctx[0]);
      },
      m(target, anchor) {
        insert(target, em, anchor);
        append(em, t);
      },
      p(ctx2, dirty) {
        if (dirty & 1)
          set_data(t, ctx2[0]);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(em);
      }
    };
  }
  function create_fragment(ctx) {
    let show_if;
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block, create_else_block];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (dirty & 1)
        show_if = null;
      if (show_if == null)
        show_if = !!!isNaN(parseFloat(ctx2[0]));
      if (show_if)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let { href } = $$props;
    let { icon } = $$props;
    $$self.$$set = ($$props2) => {
      if ("href" in $$props2)
        $$invalidate(0, href = $$props2.href);
      if ("icon" in $$props2)
        $$invalidate(1, icon = $$props2.icon);
    };
    return [href, icon];
  }
  var LinkNoTooltip = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, { href: 0, icon: 1 });
    }
  };
  var LinkNoTooltip_default = LinkNoTooltip;

  // src/Link.svelte
  function create_else_block2(ctx) {
    let linknotooltip;
    let current;
    linknotooltip = new LinkNoTooltip_default({
      props: {
        href: ctx[0],
        icon: ctx[1]
      }
    });
    return {
      c() {
        create_component(linknotooltip.$$.fragment);
      },
      m(target, anchor) {
        mount_component(linknotooltip, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const linknotooltip_changes = {};
        if (dirty & 1)
          linknotooltip_changes.href = ctx2[0];
        if (dirty & 2)
          linknotooltip_changes.icon = ctx2[1];
        linknotooltip.$set(linknotooltip_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(linknotooltip.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linknotooltip.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(linknotooltip, detaching);
      }
    };
  }
  function create_if_block2(ctx) {
    let span;
    let linknotooltip;
    let sup;
    let span_tooltip_value;
    let current;
    linknotooltip = new LinkNoTooltip_default({ props: { href: ctx[0] } });
    return {
      c() {
        span = element("span");
        create_component(linknotooltip.$$.fragment);
        sup = element("sup");
        sup.textContent = "?";
        attr(sup, "class", "tipmark");
        attr(span, "tooltip", span_tooltip_value = "tip_" + ctx[0]);
      },
      m(target, anchor) {
        insert(target, span, anchor);
        mount_component(linknotooltip, span, null);
        append(span, sup);
        current = true;
      },
      p(ctx2, dirty) {
        const linknotooltip_changes = {};
        if (dirty & 1)
          linknotooltip_changes.href = ctx2[0];
        linknotooltip.$set(linknotooltip_changes);
        if (!current || dirty & 1 && span_tooltip_value !== (span_tooltip_value = "tip_" + ctx2[0])) {
          attr(span, "tooltip", span_tooltip_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(linknotooltip.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linknotooltip.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        destroy_component(linknotooltip);
      }
    };
  }
  function create_fragment2(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block2, create_else_block2];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if ("tip_" + ctx2[0] in rul.lang)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance2($$self, $$props, $$invalidate) {
    let { href } = $$props;
    let { icon } = $$props;
    $$self.$$set = ($$props2) => {
      if ("href" in $$props2)
        $$invalidate(0, href = $$props2.href);
      if ("icon" in $$props2)
        $$invalidate(1, icon = $$props2.icon);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $: {
          if (href && href.type)
            $$invalidate(0, href = href.type);
        }
      }
    };
    return [href, icon];
  }
  var Link = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance2, create_fragment2, safe_not_equal, { href: 0, icon: 1 });
    }
  };
  var Link_default = Link;

  // src/Img.svelte
  function create_catch_block(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_then_block(ctx) {
    let img;
    let img_src_value;
    return {
      c() {
        img = element("img");
        attr(img, "alt", ctx[2]);
        attr(img, "style", ctx[1]);
        attr(img, "class", "sprite");
        if (!src_url_equal(img.src, img_src_value = ctx[3]))
          attr(img, "src", img_src_value);
      },
      m(target, anchor) {
        insert(target, img, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 4) {
          attr(img, "alt", ctx2[2]);
        }
        if (dirty & 2) {
          attr(img, "style", ctx2[1]);
        }
        if (dirty & 1 && !src_url_equal(img.src, img_src_value = ctx2[3])) {
          attr(img, "src", img_src_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(img);
      }
    };
  }
  function create_pending_block(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_fragment3(ctx) {
    let await_block_anchor;
    let promise;
    let info = {
      ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block,
      then: create_then_block,
      catch: create_catch_block,
      value: 3
    };
    handle_promise(promise = ctx[0], info);
    return {
      c() {
        await_block_anchor = empty();
        info.block.c();
      },
      m(target, anchor) {
        insert(target, await_block_anchor, anchor);
        info.block.m(target, info.anchor = anchor);
        info.mount = () => await_block_anchor.parentNode;
        info.anchor = await_block_anchor;
      },
      p(new_ctx, [dirty]) {
        ctx = new_ctx;
        info.ctx = ctx;
        if (dirty & 1 && promise !== (promise = ctx[0]) && handle_promise(promise, info)) {
        } else {
          update_await_block_branch(info, ctx, dirty);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(await_block_anchor);
        info.block.d(detaching);
        info.token = null;
        info = null;
      }
    };
  }
  function instance3($$self, $$props, $$invalidate) {
    let { src = null } = $$props;
    let { style } = $$props;
    let alt = "image";
    $$self.$$set = ($$props2) => {
      if ("src" in $$props2)
        $$invalidate(0, src = $$props2.src);
      if ("style" in $$props2)
        $$invalidate(1, style = $$props2.style);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $: {
          if (typeof src == "string") {
            $$invalidate(2, alt = src);
            $$invalidate(0, src = rul.sprite(src));
          }
        }
      }
    };
    return [src, style, alt];
  }
  var Img = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance3, create_fragment3, safe_not_equal, { src: 0, style: 1 });
    }
  };
  var Img_default = Img;

  // node_modules/svelte/store/index.mjs
  var subscriber_queue = [];
  function writable(value, start = noop) {
    let stop;
    const subscribers = /* @__PURE__ */ new Set();
    function set2(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update2(fn) {
      set2(fn(value));
    }
    function subscribe2(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set2) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0) {
          stop();
          stop = null;
        }
      };
    }
    return { set: set2, update: update2, subscribe: subscribe2 };
  }

  // src/store.ts
  var revealed = writable(false);
  var revealedLock = false;
  var linksPageSorted = writable(false);
  var loadingFile = writable("");
  var leftRightClickSwipe = writable(null);
  function reveal(on) {
    if (!revealedLock)
      revealed.update((v) => on == void 0 ? !v : on);
  }
  function revealLock(on) {
    revealedLock = on == void 0 ? !revealedLock : on;
    revealed.update((v) => revealedLock);
  }
  var loaded = writable(false);
  function warn(text2) {
    loadingFile.update((t) => t + " \xB7 <em class='warning'>" + text2 + "</em>");
  }
  function inform(text2) {
    loadingFile.update((t) => t + " \xB7 " + text2);
  }

  // src/Tr.svelte
  function create_fragment4(ctx) {
    let html_tag;
    let html_anchor;
    return {
      c() {
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(ctx[0], target, anchor);
        insert(target, html_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (dirty & 1)
          html_tag.p(ctx2[0]);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
      }
    };
  }
  function instance4($$self, $$props, $$invalidate) {
    let { s } = $$props;
    let { nobr = 30 } = $$props;
    let { capital: capital2 = false } = $$props;
    let { icon = "compact" } = $$props;
    let rev = true;
    let tr2;
    revealed.subscribe((v) => $$invalidate(5, rev = v));
    $$self.$$set = ($$props2) => {
      if ("s" in $$props2)
        $$invalidate(1, s = $$props2.s);
      if ("nobr" in $$props2)
        $$invalidate(2, nobr = $$props2.nobr);
      if ("capital" in $$props2)
        $$invalidate(3, capital2 = $$props2.capital);
      if ("icon" in $$props2)
        $$invalidate(4, icon = $$props2.icon);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 62) {
        $: {
          $$invalidate(0, tr2 = rev ? s : rul.tr(s, { icon, capital: capital2, nobr }));
        }
      }
    };
    return [tr2, s, nobr, capital2, icon, rev];
  }
  var Tr = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance4, create_fragment4, safe_not_equal, { s: 1, nobr: 2, capital: 3, icon: 4 });
    }
  };
  var Tr_default = Tr;

  // src/Subheader.svelte
  function create_fragment5(ctx) {
    let tr1;
    let td;
    let tr0;
    let current;
    tr0 = new Tr_default({ props: { s: ctx[0] } });
    return {
      c() {
        tr1 = element("tr");
        td = element("td");
        create_component(tr0.$$.fragment);
        attr(td, "colspan", "2");
        attr(td, "class", "table-subheader");
      },
      m(target, anchor) {
        insert(target, tr1, anchor);
        append(tr1, td);
        mount_component(tr0, td, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        const tr0_changes = {};
        if (dirty & 1)
          tr0_changes.s = ctx2[0];
        tr0.$set(tr0_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(tr0.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr0.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr1);
        destroy_component(tr0);
      }
    };
  }
  function instance5($$self, $$props, $$invalidate) {
    let { text: text2 } = $$props;
    $$self.$$set = ($$props2) => {
      if ("text" in $$props2)
        $$invalidate(0, text2 = $$props2.text);
    };
    return [text2];
  }
  var Subheader = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance5, create_fragment5, safe_not_equal, { text: 0 });
    }
  };
  var Subheader_default = Subheader;

  // node_modules/svelte-paginate/src/paginate.js
  function paginate_default({ items, pageSize, currentPage }) {
    return items.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize);
  }

  // node_modules/svelte-paginate/src/symbolTypes.js
  var PREVIOUS_PAGE = "PREVIOUS_PAGE";
  var NEXT_PAGE = "NEXT_PAGE";
  var ELLIPSIS = "ELLIPSIS";

  // node_modules/svelte-paginate/src/generateNavigationOptions.js
  function generateNavigationOptions_default({ totalItems, pageSize, currentPage, limit = null, showStepOptions = false }) {
    const totalPages = Math.ceil(totalItems / pageSize);
    const limitThreshold = getLimitThreshold({ limit });
    const limited = limit && totalPages > limitThreshold;
    let options = limited ? generateLimitedOptions({ totalPages, limit, currentPage }) : generateUnlimitedOptions({ totalPages });
    return showStepOptions ? addStepOptions({ options, currentPage, totalPages }) : options;
  }
  function generateUnlimitedOptions({ totalPages }) {
    return new Array(totalPages).fill(null).map((value, index) => ({
      type: "number",
      value: index + 1
    }));
  }
  function generateLimitedOptions({ totalPages, limit, currentPage }) {
    const boundarySize = limit * 2 + 2;
    const firstBoundary = 1 + boundarySize;
    const lastBoundary = totalPages - boundarySize;
    const totalShownPages = firstBoundary + 2;
    if (currentPage <= firstBoundary - limit) {
      return Array(totalShownPages).fill(null).map((value, index) => {
        if (index === totalShownPages - 1) {
          return {
            type: "number",
            value: totalPages
          };
        } else if (index === totalShownPages - 2) {
          return {
            type: "symbol",
            symbol: ELLIPSIS,
            value: firstBoundary + 1
          };
        }
        return {
          type: "number",
          value: index + 1
        };
      });
    } else if (currentPage >= lastBoundary + limit) {
      return Array(totalShownPages).fill(null).map((value, index) => {
        if (index === 0) {
          return {
            type: "number",
            value: 1
          };
        } else if (index === 1) {
          return {
            type: "symbol",
            symbol: ELLIPSIS,
            value: lastBoundary - 1
          };
        }
        return {
          type: "number",
          value: lastBoundary + index - 2
        };
      });
    } else if (currentPage >= firstBoundary - limit && currentPage <= lastBoundary + limit) {
      return Array(totalShownPages).fill(null).map((value, index) => {
        if (index === 0) {
          return {
            type: "number",
            value: 1
          };
        } else if (index === 1) {
          return {
            type: "symbol",
            symbol: ELLIPSIS,
            value: currentPage - limit + (index - 2)
          };
        } else if (index === totalShownPages - 1) {
          return {
            type: "number",
            value: totalPages
          };
        } else if (index === totalShownPages - 2) {
          return {
            type: "symbol",
            symbol: ELLIPSIS,
            value: currentPage + limit + 1
          };
        }
        return {
          type: "number",
          value: currentPage - limit + (index - 2)
        };
      });
    }
  }
  function addStepOptions({ options, currentPage, totalPages }) {
    return [
      {
        type: "symbol",
        symbol: PREVIOUS_PAGE,
        value: currentPage <= 1 ? 1 : currentPage - 1
      },
      ...options,
      {
        type: "symbol",
        symbol: NEXT_PAGE,
        value: currentPage >= totalPages ? totalPages : currentPage + 1
      }
    ];
  }
  function getLimitThreshold({ limit }) {
    const maximumUnlimitedPages = 3;
    const numberOfBoundaryPages = 2;
    return limit * 2 + maximumUnlimitedPages + numberOfBoundaryPages;
  }

  // node_modules/svelte-paginate/src/PaginationNav.svelte
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[12] = list[i];
    return child_ctx;
  }
  var get_next_slot_changes = (dirty) => ({});
  var get_next_slot_context = (ctx) => ({});
  var get_prev_slot_changes = (dirty) => ({});
  var get_prev_slot_context = (ctx) => ({});
  var get_ellipsis_slot_changes = (dirty) => ({});
  var get_ellipsis_slot_context = (ctx) => ({});
  var get_number_slot_changes = (dirty) => ({ value: dirty & 4 });
  var get_number_slot_context = (ctx) => ({ value: ctx[12].value });
  function create_if_block_3(ctx) {
    let current;
    const next_slot_template = ctx[9].next;
    const next_slot = create_slot(next_slot_template, ctx, ctx[8], get_next_slot_context);
    const next_slot_or_fallback = next_slot || fallback_block_3(ctx);
    return {
      c() {
        if (next_slot_or_fallback)
          next_slot_or_fallback.c();
      },
      m(target, anchor) {
        if (next_slot_or_fallback) {
          next_slot_or_fallback.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (next_slot) {
          if (next_slot.p && (!current || dirty & 256)) {
            update_slot_base(next_slot, next_slot_template, ctx2, ctx2[8], !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(next_slot_template, ctx2[8], dirty, get_next_slot_changes), get_next_slot_context);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(next_slot_or_fallback, local);
        current = true;
      },
      o(local) {
        transition_out(next_slot_or_fallback, local);
        current = false;
      },
      d(detaching) {
        if (next_slot_or_fallback)
          next_slot_or_fallback.d(detaching);
      }
    };
  }
  function create_if_block_2(ctx) {
    let current;
    const prev_slot_template = ctx[9].prev;
    const prev_slot = create_slot(prev_slot_template, ctx, ctx[8], get_prev_slot_context);
    const prev_slot_or_fallback = prev_slot || fallback_block_2(ctx);
    return {
      c() {
        if (prev_slot_or_fallback)
          prev_slot_or_fallback.c();
      },
      m(target, anchor) {
        if (prev_slot_or_fallback) {
          prev_slot_or_fallback.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (prev_slot) {
          if (prev_slot.p && (!current || dirty & 256)) {
            update_slot_base(prev_slot, prev_slot_template, ctx2, ctx2[8], !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(prev_slot_template, ctx2[8], dirty, get_prev_slot_changes), get_prev_slot_context);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(prev_slot_or_fallback, local);
        current = true;
      },
      o(local) {
        transition_out(prev_slot_or_fallback, local);
        current = false;
      },
      d(detaching) {
        if (prev_slot_or_fallback)
          prev_slot_or_fallback.d(detaching);
      }
    };
  }
  function create_if_block_1(ctx) {
    let current;
    const ellipsis_slot_template = ctx[9].ellipsis;
    const ellipsis_slot = create_slot(ellipsis_slot_template, ctx, ctx[8], get_ellipsis_slot_context);
    const ellipsis_slot_or_fallback = ellipsis_slot || fallback_block_1(ctx);
    return {
      c() {
        if (ellipsis_slot_or_fallback)
          ellipsis_slot_or_fallback.c();
      },
      m(target, anchor) {
        if (ellipsis_slot_or_fallback) {
          ellipsis_slot_or_fallback.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (ellipsis_slot) {
          if (ellipsis_slot.p && (!current || dirty & 256)) {
            update_slot_base(ellipsis_slot, ellipsis_slot_template, ctx2, ctx2[8], !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(ellipsis_slot_template, ctx2[8], dirty, get_ellipsis_slot_changes), get_ellipsis_slot_context);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(ellipsis_slot_or_fallback, local);
        current = true;
      },
      o(local) {
        transition_out(ellipsis_slot_or_fallback, local);
        current = false;
      },
      d(detaching) {
        if (ellipsis_slot_or_fallback)
          ellipsis_slot_or_fallback.d(detaching);
      }
    };
  }
  function create_if_block3(ctx) {
    let current;
    const number_slot_template = ctx[9].number;
    const number_slot = create_slot(number_slot_template, ctx, ctx[8], get_number_slot_context);
    const number_slot_or_fallback = number_slot || fallback_block(ctx);
    return {
      c() {
        if (number_slot_or_fallback)
          number_slot_or_fallback.c();
      },
      m(target, anchor) {
        if (number_slot_or_fallback) {
          number_slot_or_fallback.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (number_slot) {
          if (number_slot.p && (!current || dirty & 260)) {
            update_slot_base(number_slot, number_slot_template, ctx2, ctx2[8], !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(number_slot_template, ctx2[8], dirty, get_number_slot_changes), get_number_slot_context);
          }
        } else {
          if (number_slot_or_fallback && number_slot_or_fallback.p && (!current || dirty & 4)) {
            number_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(number_slot_or_fallback, local);
        current = true;
      },
      o(local) {
        transition_out(number_slot_or_fallback, local);
        current = false;
      },
      d(detaching) {
        if (number_slot_or_fallback)
          number_slot_or_fallback.d(detaching);
      }
    };
  }
  function fallback_block_3(ctx) {
    let svg;
    let path;
    return {
      c() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr(path, "fill", "#000000");
        attr(path, "d", "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z");
        set_style(svg, "width", "24px");
        set_style(svg, "height", "24px");
        attr(svg, "viewBox", "0 0 24 24");
      },
      m(target, anchor) {
        insert(target, svg, anchor);
        append(svg, path);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(svg);
      }
    };
  }
  function fallback_block_2(ctx) {
    let svg;
    let path;
    return {
      c() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr(path, "fill", "#000000");
        attr(path, "d", "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z");
        set_style(svg, "width", "24px");
        set_style(svg, "height", "24px");
        attr(svg, "viewBox", "0 0 24 24");
      },
      m(target, anchor) {
        insert(target, svg, anchor);
        append(svg, path);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(svg);
      }
    };
  }
  function fallback_block_1(ctx) {
    let span;
    return {
      c() {
        span = element("span");
        span.textContent = "...";
      },
      m(target, anchor) {
        insert(target, span, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function fallback_block(ctx) {
    let span;
    let t_value = ctx[12].value + "";
    let t;
    return {
      c() {
        span = element("span");
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p(ctx2, dirty) {
        if (dirty & 4 && t_value !== (t_value = ctx2[12].value + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_each_block(ctx) {
    let span;
    let current_block_type_index;
    let if_block;
    let t;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [create_if_block3, create_if_block_1, create_if_block_2, create_if_block_3];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[12].type === "number")
        return 0;
      if (ctx2[12].type === "symbol" && ctx2[12].symbol === ELLIPSIS)
        return 1;
      if (ctx2[12].type === "symbol" && ctx2[12].symbol === PREVIOUS_PAGE)
        return 2;
      if (ctx2[12].type === "symbol" && ctx2[12].symbol === NEXT_PAGE)
        return 3;
      return -1;
    }
    if (~(current_block_type_index = select_block_type(ctx, -1))) {
      if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    }
    function click_handler() {
      return ctx[10](ctx[12]);
    }
    return {
      c() {
        span = element("span");
        if (if_block)
          if_block.c();
        t = space();
        attr(span, "class", "option");
        toggle_class(span, "number", ctx[12].type === "number");
        toggle_class(span, "prev", ctx[12].type === "symbol" && ctx[12].symbol === PREVIOUS_PAGE);
        toggle_class(span, "next", ctx[12].type === "symbol" && ctx[12].symbol === NEXT_PAGE);
        toggle_class(span, "disabled", ctx[12].type === "symbol" && ctx[12].symbol === NEXT_PAGE && ctx[0] >= ctx[1] || ctx[12].type === "symbol" && ctx[12].symbol === PREVIOUS_PAGE && ctx[0] <= 1);
        toggle_class(span, "ellipsis", ctx[12].type === "symbol" && ctx[12].symbol === ELLIPSIS);
        toggle_class(span, "active", ctx[12].type === "number" && ctx[12].value === ctx[0]);
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].m(span, null);
        }
        append(span, t);
        current = true;
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx, dirty);
        if (current_block_type_index === previous_block_index) {
          if (~current_block_type_index) {
            if_blocks[current_block_type_index].p(ctx, dirty);
          }
        } else {
          if (if_block) {
            group_outros();
            transition_out(if_blocks[previous_block_index], 1, 1, () => {
              if_blocks[previous_block_index] = null;
            });
            check_outros();
          }
          if (~current_block_type_index) {
            if_block = if_blocks[current_block_type_index];
            if (!if_block) {
              if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
              if_block.c();
            } else {
              if_block.p(ctx, dirty);
            }
            transition_in(if_block, 1);
            if_block.m(span, t);
          } else {
            if_block = null;
          }
        }
        if (dirty & 4) {
          toggle_class(span, "number", ctx[12].type === "number");
        }
        if (dirty & 4) {
          toggle_class(span, "prev", ctx[12].type === "symbol" && ctx[12].symbol === PREVIOUS_PAGE);
        }
        if (dirty & 4) {
          toggle_class(span, "next", ctx[12].type === "symbol" && ctx[12].symbol === NEXT_PAGE);
        }
        if (dirty & 7) {
          toggle_class(span, "disabled", ctx[12].type === "symbol" && ctx[12].symbol === NEXT_PAGE && ctx[0] >= ctx[1] || ctx[12].type === "symbol" && ctx[12].symbol === PREVIOUS_PAGE && ctx[0] <= 1);
        }
        if (dirty & 4) {
          toggle_class(span, "ellipsis", ctx[12].type === "symbol" && ctx[12].symbol === ELLIPSIS);
        }
        if (dirty & 5) {
          toggle_class(span, "active", ctx[12].type === "number" && ctx[12].value === ctx[0]);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].d();
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment6(ctx) {
    let div;
    let current;
    let each_value = ctx[2];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "pagination-nav");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 271) {
          each_value = ctx2[2];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance6($$self, $$props, $$invalidate) {
    let options;
    let totalPages;
    let { $$slots: slots = {}, $$scope } = $$props;
    const dispatch = createEventDispatcher();
    let { totalItems = 0 } = $$props;
    let { pageSize = 1 } = $$props;
    let { currentPage = 1 } = $$props;
    let { limit = null } = $$props;
    let { showStepOptions = false } = $$props;
    function handleOptionClick(option) {
      dispatch("setPage", { page: option.value });
    }
    const click_handler = (option) => handleOptionClick(option);
    $$self.$$set = ($$props2) => {
      if ("totalItems" in $$props2)
        $$invalidate(4, totalItems = $$props2.totalItems);
      if ("pageSize" in $$props2)
        $$invalidate(5, pageSize = $$props2.pageSize);
      if ("currentPage" in $$props2)
        $$invalidate(0, currentPage = $$props2.currentPage);
      if ("limit" in $$props2)
        $$invalidate(6, limit = $$props2.limit);
      if ("showStepOptions" in $$props2)
        $$invalidate(7, showStepOptions = $$props2.showStepOptions);
      if ("$$scope" in $$props2)
        $$invalidate(8, $$scope = $$props2.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 241) {
        $:
          $$invalidate(2, options = generateNavigationOptions_default({
            totalItems,
            pageSize,
            currentPage,
            limit,
            showStepOptions
          }));
      }
      if ($$self.$$.dirty & 48) {
        $:
          $$invalidate(1, totalPages = Math.ceil(totalItems / pageSize));
      }
    };
    return [
      currentPage,
      totalPages,
      options,
      handleOptionClick,
      totalItems,
      pageSize,
      limit,
      showStepOptions,
      $$scope,
      slots,
      click_handler
    ];
  }
  var PaginationNav = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance6, create_fragment6, safe_not_equal, {
        totalItems: 4,
        pageSize: 5,
        currentPage: 0,
        limit: 6,
        showStepOptions: 7
      });
    }
  };
  var PaginationNav_default = PaginationNav;

  // node_modules/js-yaml/dist/js-yaml.mjs
  function isNothing(subject) {
    return typeof subject === "undefined" || subject === null;
  }
  function isObject(subject) {
    return typeof subject === "object" && subject !== null;
  }
  function toArray(sequence) {
    if (Array.isArray(sequence))
      return sequence;
    else if (isNothing(sequence))
      return [];
    return [sequence];
  }
  function extend(target, source) {
    var index, length, key, sourceKeys;
    if (source) {
      sourceKeys = Object.keys(source);
      for (index = 0, length = sourceKeys.length; index < length; index += 1) {
        key = sourceKeys[index];
        target[key] = source[key];
      }
    }
    return target;
  }
  function repeat(string, count) {
    var result = "", cycle;
    for (cycle = 0; cycle < count; cycle += 1) {
      result += string;
    }
    return result;
  }
  function isNegativeZero(number) {
    return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
  }
  var isNothing_1 = isNothing;
  var isObject_1 = isObject;
  var toArray_1 = toArray;
  var repeat_1 = repeat;
  var isNegativeZero_1 = isNegativeZero;
  var extend_1 = extend;
  var common = {
    isNothing: isNothing_1,
    isObject: isObject_1,
    toArray: toArray_1,
    repeat: repeat_1,
    isNegativeZero: isNegativeZero_1,
    extend: extend_1
  };
  function formatError(exception2, compact) {
    var where = "", message = exception2.reason || "(unknown reason)";
    if (!exception2.mark)
      return message;
    if (exception2.mark.name) {
      where += 'in "' + exception2.mark.name + '" ';
    }
    where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
    if (!compact && exception2.mark.snippet) {
      where += "\n\n" + exception2.mark.snippet;
    }
    return message + " " + where;
  }
  function YAMLException$1(reason, mark) {
    Error.call(this);
    this.name = "YAMLException";
    this.reason = reason;
    this.mark = mark;
    this.message = formatError(this, false);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack || "";
    }
  }
  YAMLException$1.prototype = Object.create(Error.prototype);
  YAMLException$1.prototype.constructor = YAMLException$1;
  YAMLException$1.prototype.toString = function toString(compact) {
    return this.name + ": " + formatError(this, compact);
  };
  var exception = YAMLException$1;
  function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
    var head = "";
    var tail = "";
    var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
    if (position - lineStart > maxHalfLength) {
      head = " ... ";
      lineStart = position - maxHalfLength + head.length;
    }
    if (lineEnd - position > maxHalfLength) {
      tail = " ...";
      lineEnd = position + maxHalfLength - tail.length;
    }
    return {
      str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail,
      pos: position - lineStart + head.length
    };
  }
  function padStart(string, max) {
    return common.repeat(" ", max - string.length) + string;
  }
  function makeSnippet(mark, options) {
    options = Object.create(options || null);
    if (!mark.buffer)
      return null;
    if (!options.maxLength)
      options.maxLength = 79;
    if (typeof options.indent !== "number")
      options.indent = 1;
    if (typeof options.linesBefore !== "number")
      options.linesBefore = 3;
    if (typeof options.linesAfter !== "number")
      options.linesAfter = 2;
    var re = /\r?\n|\r|\0/g;
    var lineStarts = [0];
    var lineEnds = [];
    var match;
    var foundLineNo = -1;
    while (match = re.exec(mark.buffer)) {
      lineEnds.push(match.index);
      lineStarts.push(match.index + match[0].length);
      if (mark.position <= match.index && foundLineNo < 0) {
        foundLineNo = lineStarts.length - 2;
      }
    }
    if (foundLineNo < 0)
      foundLineNo = lineStarts.length - 1;
    var result = "", i, line;
    var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
    var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
    for (i = 1; i <= options.linesBefore; i++) {
      if (foundLineNo - i < 0)
        break;
      line = getLine(mark.buffer, lineStarts[foundLineNo - i], lineEnds[foundLineNo - i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]), maxLineLength);
      result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
    }
    line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
    result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
    result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
    for (i = 1; i <= options.linesAfter; i++) {
      if (foundLineNo + i >= lineEnds.length)
        break;
      line = getLine(mark.buffer, lineStarts[foundLineNo + i], lineEnds[foundLineNo + i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]), maxLineLength);
      result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
    }
    return result.replace(/\n$/, "");
  }
  var snippet = makeSnippet;
  var TYPE_CONSTRUCTOR_OPTIONS = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases"
  ];
  var YAML_NODE_KINDS = [
    "scalar",
    "sequence",
    "mapping"
  ];
  function compileStyleAliases(map2) {
    var result = {};
    if (map2 !== null) {
      Object.keys(map2).forEach(function(style) {
        map2[style].forEach(function(alias) {
          result[String(alias)] = style;
        });
      });
    }
    return result;
  }
  function Type$1(tag, options) {
    options = options || {};
    Object.keys(options).forEach(function(name) {
      if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
        throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
      }
    });
    this.options = options;
    this.tag = tag;
    this.kind = options["kind"] || null;
    this.resolve = options["resolve"] || function() {
      return true;
    };
    this.construct = options["construct"] || function(data) {
      return data;
    };
    this.instanceOf = options["instanceOf"] || null;
    this.predicate = options["predicate"] || null;
    this.represent = options["represent"] || null;
    this.representName = options["representName"] || null;
    this.defaultStyle = options["defaultStyle"] || null;
    this.multi = options["multi"] || false;
    this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
    if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
      throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
    }
  }
  var type = Type$1;
  function compileList(schema2, name) {
    var result = [];
    schema2[name].forEach(function(currentType) {
      var newIndex = result.length;
      result.forEach(function(previousType, previousIndex) {
        if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
          newIndex = previousIndex;
        }
      });
      result[newIndex] = currentType;
    });
    return result;
  }
  function compileMap() {
    var result = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {},
      multi: {
        scalar: [],
        sequence: [],
        mapping: [],
        fallback: []
      }
    }, index, length;
    function collectType(type2) {
      if (type2.multi) {
        result.multi[type2.kind].push(type2);
        result.multi["fallback"].push(type2);
      } else {
        result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
      }
    }
    for (index = 0, length = arguments.length; index < length; index += 1) {
      arguments[index].forEach(collectType);
    }
    return result;
  }
  function Schema$1(definition) {
    return this.extend(definition);
  }
  Schema$1.prototype.extend = function extend2(definition) {
    var implicit = [];
    var explicit = [];
    if (definition instanceof type) {
      explicit.push(definition);
    } else if (Array.isArray(definition)) {
      explicit = explicit.concat(definition);
    } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
      if (definition.implicit)
        implicit = implicit.concat(definition.implicit);
      if (definition.explicit)
        explicit = explicit.concat(definition.explicit);
    } else {
      throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    }
    implicit.forEach(function(type$1) {
      if (!(type$1 instanceof type)) {
        throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
      if (type$1.loadKind && type$1.loadKind !== "scalar") {
        throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      }
      if (type$1.multi) {
        throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
      }
    });
    explicit.forEach(function(type$1) {
      if (!(type$1 instanceof type)) {
        throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
    });
    var result = Object.create(Schema$1.prototype);
    result.implicit = (this.implicit || []).concat(implicit);
    result.explicit = (this.explicit || []).concat(explicit);
    result.compiledImplicit = compileList(result, "implicit");
    result.compiledExplicit = compileList(result, "explicit");
    result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
    return result;
  };
  var schema = Schema$1;
  var str = new type("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(data) {
      return data !== null ? data : "";
    }
  });
  var seq = new type("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(data) {
      return data !== null ? data : [];
    }
  });
  var map = new type("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(data) {
      return data !== null ? data : {};
    }
  });
  var failsafe = new schema({
    explicit: [
      str,
      seq,
      map
    ]
  });
  function resolveYamlNull(data) {
    if (data === null)
      return true;
    var max = data.length;
    return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
  }
  function constructYamlNull() {
    return null;
  }
  function isNull(object) {
    return object === null;
  }
  var _null = new type("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: resolveYamlNull,
    construct: constructYamlNull,
    predicate: isNull,
    represent: {
      canonical: function() {
        return "~";
      },
      lowercase: function() {
        return "null";
      },
      uppercase: function() {
        return "NULL";
      },
      camelcase: function() {
        return "Null";
      },
      empty: function() {
        return "";
      }
    },
    defaultStyle: "lowercase"
  });
  function resolveYamlBoolean(data) {
    if (data === null)
      return false;
    var max = data.length;
    return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
  }
  function constructYamlBoolean(data) {
    return data === "true" || data === "True" || data === "TRUE";
  }
  function isBoolean(object) {
    return Object.prototype.toString.call(object) === "[object Boolean]";
  }
  var bool = new type("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: resolveYamlBoolean,
    construct: constructYamlBoolean,
    predicate: isBoolean,
    represent: {
      lowercase: function(object) {
        return object ? "true" : "false";
      },
      uppercase: function(object) {
        return object ? "TRUE" : "FALSE";
      },
      camelcase: function(object) {
        return object ? "True" : "False";
      }
    },
    defaultStyle: "lowercase"
  });
  function isHexCode(c) {
    return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
  }
  function isOctCode(c) {
    return 48 <= c && c <= 55;
  }
  function isDecCode(c) {
    return 48 <= c && c <= 57;
  }
  function resolveYamlInteger(data) {
    if (data === null)
      return false;
    var max = data.length, index = 0, hasDigits = false, ch;
    if (!max)
      return false;
    ch = data[index];
    if (ch === "-" || ch === "+") {
      ch = data[++index];
    }
    if (ch === "0") {
      if (index + 1 === max)
        return true;
      ch = data[++index];
      if (ch === "b") {
        index++;
        for (; index < max; index++) {
          ch = data[index];
          if (ch === "_")
            continue;
          if (ch !== "0" && ch !== "1")
            return false;
          hasDigits = true;
        }
        return hasDigits && ch !== "_";
      }
      if (ch === "x") {
        index++;
        for (; index < max; index++) {
          ch = data[index];
          if (ch === "_")
            continue;
          if (!isHexCode(data.charCodeAt(index)))
            return false;
          hasDigits = true;
        }
        return hasDigits && ch !== "_";
      }
      if (ch === "o") {
        index++;
        for (; index < max; index++) {
          ch = data[index];
          if (ch === "_")
            continue;
          if (!isOctCode(data.charCodeAt(index)))
            return false;
          hasDigits = true;
        }
        return hasDigits && ch !== "_";
      }
    }
    if (ch === "_")
      return false;
    for (; index < max; index++) {
      ch = data[index];
      if (ch === "_")
        continue;
      if (!isDecCode(data.charCodeAt(index))) {
        return false;
      }
      hasDigits = true;
    }
    if (!hasDigits || ch === "_")
      return false;
    return true;
  }
  function constructYamlInteger(data) {
    var value = data, sign = 1, ch;
    if (value.indexOf("_") !== -1) {
      value = value.replace(/_/g, "");
    }
    ch = value[0];
    if (ch === "-" || ch === "+") {
      if (ch === "-")
        sign = -1;
      value = value.slice(1);
      ch = value[0];
    }
    if (value === "0")
      return 0;
    if (ch === "0") {
      if (value[1] === "b")
        return sign * parseInt(value.slice(2), 2);
      if (value[1] === "x")
        return sign * parseInt(value.slice(2), 16);
      if (value[1] === "o")
        return sign * parseInt(value.slice(2), 8);
    }
    return sign * parseInt(value, 10);
  }
  function isInteger(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
  }
  var int = new type("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: resolveYamlInteger,
    construct: constructYamlInteger,
    predicate: isInteger,
    represent: {
      binary: function(obj) {
        return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
      },
      octal: function(obj) {
        return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
      },
      decimal: function(obj) {
        return obj.toString(10);
      },
      hexadecimal: function(obj) {
        return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
      }
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [2, "bin"],
      octal: [8, "oct"],
      decimal: [10, "dec"],
      hexadecimal: [16, "hex"]
    }
  });
  var YAML_FLOAT_PATTERN = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
  function resolveYamlFloat(data) {
    if (data === null)
      return false;
    if (!YAML_FLOAT_PATTERN.test(data) || data[data.length - 1] === "_") {
      return false;
    }
    return true;
  }
  function constructYamlFloat(data) {
    var value, sign;
    value = data.replace(/_/g, "").toLowerCase();
    sign = value[0] === "-" ? -1 : 1;
    if ("+-".indexOf(value[0]) >= 0) {
      value = value.slice(1);
    }
    if (value === ".inf") {
      return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    } else if (value === ".nan") {
      return NaN;
    }
    return sign * parseFloat(value, 10);
  }
  var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
  function representYamlFloat(object, style) {
    var res;
    if (isNaN(object)) {
      switch (style) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
    } else if (Number.POSITIVE_INFINITY === object) {
      switch (style) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
    } else if (Number.NEGATIVE_INFINITY === object) {
      switch (style) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
    } else if (common.isNegativeZero(object)) {
      return "-0.0";
    }
    res = object.toString(10);
    return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
  }
  function isFloat(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
  }
  var float = new type("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: resolveYamlFloat,
    construct: constructYamlFloat,
    predicate: isFloat,
    represent: representYamlFloat,
    defaultStyle: "lowercase"
  });
  var json = failsafe.extend({
    implicit: [
      _null,
      bool,
      int,
      float
    ]
  });
  var core = json;
  var YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
  var YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
  function resolveYamlTimestamp(data) {
    if (data === null)
      return false;
    if (YAML_DATE_REGEXP.exec(data) !== null)
      return true;
    if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
      return true;
    return false;
  }
  function constructYamlTimestamp(data) {
    var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
    match = YAML_DATE_REGEXP.exec(data);
    if (match === null)
      match = YAML_TIMESTAMP_REGEXP.exec(data);
    if (match === null)
      throw new Error("Date resolve error");
    year = +match[1];
    month = +match[2] - 1;
    day = +match[3];
    if (!match[4]) {
      return new Date(Date.UTC(year, month, day));
    }
    hour = +match[4];
    minute = +match[5];
    second = +match[6];
    if (match[7]) {
      fraction = match[7].slice(0, 3);
      while (fraction.length < 3) {
        fraction += "0";
      }
      fraction = +fraction;
    }
    if (match[9]) {
      tz_hour = +match[10];
      tz_minute = +(match[11] || 0);
      delta = (tz_hour * 60 + tz_minute) * 6e4;
      if (match[9] === "-")
        delta = -delta;
    }
    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (delta)
      date.setTime(date.getTime() - delta);
    return date;
  }
  function representYamlTimestamp(object) {
    return object.toISOString();
  }
  var timestamp = new type("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: resolveYamlTimestamp,
    construct: constructYamlTimestamp,
    instanceOf: Date,
    represent: representYamlTimestamp
  });
  function resolveYamlMerge(data) {
    return data === "<<" || data === null;
  }
  var merge = new type("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: resolveYamlMerge
  });
  var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
  function resolveYamlBinary(data) {
    if (data === null)
      return false;
    var code, idx, bitlen = 0, max = data.length, map2 = BASE64_MAP;
    for (idx = 0; idx < max; idx++) {
      code = map2.indexOf(data.charAt(idx));
      if (code > 64)
        continue;
      if (code < 0)
        return false;
      bitlen += 6;
    }
    return bitlen % 8 === 0;
  }
  function constructYamlBinary(data) {
    var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map2 = BASE64_MAP, bits = 0, result = [];
    for (idx = 0; idx < max; idx++) {
      if (idx % 4 === 0 && idx) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
      }
      bits = bits << 6 | map2.indexOf(input.charAt(idx));
    }
    tailbits = max % 4 * 6;
    if (tailbits === 0) {
      result.push(bits >> 16 & 255);
      result.push(bits >> 8 & 255);
      result.push(bits & 255);
    } else if (tailbits === 18) {
      result.push(bits >> 10 & 255);
      result.push(bits >> 2 & 255);
    } else if (tailbits === 12) {
      result.push(bits >> 4 & 255);
    }
    return new Uint8Array(result);
  }
  function representYamlBinary(object) {
    var result = "", bits = 0, idx, tail, max = object.length, map2 = BASE64_MAP;
    for (idx = 0; idx < max; idx++) {
      if (idx % 3 === 0 && idx) {
        result += map2[bits >> 18 & 63];
        result += map2[bits >> 12 & 63];
        result += map2[bits >> 6 & 63];
        result += map2[bits & 63];
      }
      bits = (bits << 8) + object[idx];
    }
    tail = max % 3;
    if (tail === 0) {
      result += map2[bits >> 18 & 63];
      result += map2[bits >> 12 & 63];
      result += map2[bits >> 6 & 63];
      result += map2[bits & 63];
    } else if (tail === 2) {
      result += map2[bits >> 10 & 63];
      result += map2[bits >> 4 & 63];
      result += map2[bits << 2 & 63];
      result += map2[64];
    } else if (tail === 1) {
      result += map2[bits >> 2 & 63];
      result += map2[bits << 4 & 63];
      result += map2[64];
      result += map2[64];
    }
    return result;
  }
  function isBinary(obj) {
    return Object.prototype.toString.call(obj) === "[object Uint8Array]";
  }
  var binary = new type("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: resolveYamlBinary,
    construct: constructYamlBinary,
    predicate: isBinary,
    represent: representYamlBinary
  });
  var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
  var _toString$2 = Object.prototype.toString;
  function resolveYamlOmap(data) {
    if (data === null)
      return true;
    var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
    for (index = 0, length = object.length; index < length; index += 1) {
      pair = object[index];
      pairHasKey = false;
      if (_toString$2.call(pair) !== "[object Object]")
        return false;
      for (pairKey in pair) {
        if (_hasOwnProperty$3.call(pair, pairKey)) {
          if (!pairHasKey)
            pairHasKey = true;
          else
            return false;
        }
      }
      if (!pairHasKey)
        return false;
      if (objectKeys.indexOf(pairKey) === -1)
        objectKeys.push(pairKey);
      else
        return false;
    }
    return true;
  }
  function constructYamlOmap(data) {
    return data !== null ? data : [];
  }
  var omap = new type("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: resolveYamlOmap,
    construct: constructYamlOmap
  });
  var _toString$1 = Object.prototype.toString;
  function resolveYamlPairs(data) {
    if (data === null)
      return true;
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for (index = 0, length = object.length; index < length; index += 1) {
      pair = object[index];
      if (_toString$1.call(pair) !== "[object Object]")
        return false;
      keys = Object.keys(pair);
      if (keys.length !== 1)
        return false;
      result[index] = [keys[0], pair[keys[0]]];
    }
    return true;
  }
  function constructYamlPairs(data) {
    if (data === null)
      return [];
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for (index = 0, length = object.length; index < length; index += 1) {
      pair = object[index];
      keys = Object.keys(pair);
      result[index] = [keys[0], pair[keys[0]]];
    }
    return result;
  }
  var pairs = new type("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: resolveYamlPairs,
    construct: constructYamlPairs
  });
  var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
  function resolveYamlSet(data) {
    if (data === null)
      return true;
    var key, object = data;
    for (key in object) {
      if (_hasOwnProperty$2.call(object, key)) {
        if (object[key] !== null)
          return false;
      }
    }
    return true;
  }
  function constructYamlSet(data) {
    return data !== null ? data : {};
  }
  var set = new type("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: resolveYamlSet,
    construct: constructYamlSet
  });
  var _default = core.extend({
    implicit: [
      timestamp,
      merge
    ],
    explicit: [
      binary,
      omap,
      pairs,
      set
    ]
  });
  var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var CONTEXT_FLOW_IN = 1;
  var CONTEXT_FLOW_OUT = 2;
  var CONTEXT_BLOCK_IN = 3;
  var CONTEXT_BLOCK_OUT = 4;
  var CHOMPING_CLIP = 1;
  var CHOMPING_STRIP = 2;
  var CHOMPING_KEEP = 3;
  var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
  var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
  var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
  var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function _class(obj) {
    return Object.prototype.toString.call(obj);
  }
  function is_EOL(c) {
    return c === 10 || c === 13;
  }
  function is_WHITE_SPACE(c) {
    return c === 9 || c === 32;
  }
  function is_WS_OR_EOL(c) {
    return c === 9 || c === 32 || c === 10 || c === 13;
  }
  function is_FLOW_INDICATOR(c) {
    return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
  }
  function fromHexCode(c) {
    var lc;
    if (48 <= c && c <= 57) {
      return c - 48;
    }
    lc = c | 32;
    if (97 <= lc && lc <= 102) {
      return lc - 97 + 10;
    }
    return -1;
  }
  function escapedHexLen(c) {
    if (c === 120) {
      return 2;
    }
    if (c === 117) {
      return 4;
    }
    if (c === 85) {
      return 8;
    }
    return 0;
  }
  function fromDecimalCode(c) {
    if (48 <= c && c <= 57) {
      return c - 48;
    }
    return -1;
  }
  function simpleEscapeSequence(c) {
    return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
  }
  function charFromCodepoint(c) {
    if (c <= 65535) {
      return String.fromCharCode(c);
    }
    return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
  }
  var simpleEscapeCheck = new Array(256);
  var simpleEscapeMap = new Array(256);
  for (i = 0; i < 256; i++) {
    simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
    simpleEscapeMap[i] = simpleEscapeSequence(i);
  }
  var i;
  function State$1(input, options) {
    this.input = input;
    this.filename = options["filename"] || null;
    this.schema = options["schema"] || _default;
    this.onWarning = options["onWarning"] || null;
    this.legacy = options["legacy"] || false;
    this.json = options["json"] || false;
    this.listener = options["listener"] || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = input.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    this.firstTabInLine = -1;
    this.documents = [];
  }
  function generateError(state, message) {
    var mark = {
      name: state.filename,
      buffer: state.input.slice(0, -1),
      position: state.position,
      line: state.line,
      column: state.position - state.lineStart
    };
    mark.snippet = snippet(mark);
    return new exception(message, mark);
  }
  function throwError(state, message) {
    throw generateError(state, message);
  }
  function throwWarning(state, message) {
    if (state.onWarning) {
      state.onWarning.call(null, generateError(state, message));
    }
  }
  var directiveHandlers = {
    YAML: function handleYamlDirective(state, name, args) {
      var match, major, minor;
      if (state.version !== null) {
        throwError(state, "duplication of %YAML directive");
      }
      if (args.length !== 1) {
        throwError(state, "YAML directive accepts exactly one argument");
      }
      match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
      if (match === null) {
        throwError(state, "ill-formed argument of the YAML directive");
      }
      major = parseInt(match[1], 10);
      minor = parseInt(match[2], 10);
      if (major !== 1) {
        throwError(state, "unacceptable YAML version of the document");
      }
      state.version = args[0];
      state.checkLineBreaks = minor < 2;
      if (minor !== 1 && minor !== 2) {
        throwWarning(state, "unsupported YAML version of the document");
      }
    },
    TAG: function handleTagDirective(state, name, args) {
      var handle, prefix;
      if (args.length !== 2) {
        throwError(state, "TAG directive accepts exactly two arguments");
      }
      handle = args[0];
      prefix = args[1];
      if (!PATTERN_TAG_HANDLE.test(handle)) {
        throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
      }
      if (_hasOwnProperty$1.call(state.tagMap, handle)) {
        throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
      }
      if (!PATTERN_TAG_URI.test(prefix)) {
        throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
      }
      try {
        prefix = decodeURIComponent(prefix);
      } catch (err) {
        throwError(state, "tag prefix is malformed: " + prefix);
      }
      state.tagMap[handle] = prefix;
    }
  };
  function captureSegment(state, start, end, checkJson) {
    var _position, _length, _character, _result;
    if (start < end) {
      _result = state.input.slice(start, end);
      if (checkJson) {
        for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
          _character = _result.charCodeAt(_position);
          if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
            throwError(state, "expected valid JSON character");
          }
        }
      } else if (PATTERN_NON_PRINTABLE.test(_result)) {
        throwError(state, "the stream contains non-printable characters");
      }
      state.result += _result;
    }
  }
  function mergeMappings(state, destination, source, overridableKeys) {
    var sourceKeys, key, index, quantity;
    if (!common.isObject(source)) {
      throwError(state, "cannot merge mappings; the provided source object is unacceptable");
    }
    sourceKeys = Object.keys(source);
    for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
      key = sourceKeys[index];
      if (!_hasOwnProperty$1.call(destination, key)) {
        destination[key] = source[key];
        overridableKeys[key] = true;
      }
    }
  }
  function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
    var index, quantity;
    if (Array.isArray(keyNode)) {
      keyNode = Array.prototype.slice.call(keyNode);
      for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
        if (Array.isArray(keyNode[index])) {
          throwError(state, "nested arrays are not supported inside keys");
        }
        if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
          keyNode[index] = "[object Object]";
        }
      }
    }
    if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
      keyNode = "[object Object]";
    }
    keyNode = String(keyNode);
    if (_result === null) {
      _result = {};
    }
    if (keyTag === "tag:yaml.org,2002:merge") {
      if (Array.isArray(valueNode)) {
        for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
          mergeMappings(state, _result, valueNode[index], overridableKeys);
        }
      } else {
        mergeMappings(state, _result, valueNode, overridableKeys);
      }
    } else {
      if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
        state.line = startLine || state.line;
        state.lineStart = startLineStart || state.lineStart;
        state.position = startPos || state.position;
        throwError(state, "duplicated mapping key");
      }
      if (keyNode === "__proto__") {
        Object.defineProperty(_result, keyNode, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: valueNode
        });
      } else {
        _result[keyNode] = valueNode;
      }
      delete overridableKeys[keyNode];
    }
    return _result;
  }
  function readLineBreak(state) {
    var ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 10) {
      state.position++;
    } else if (ch === 13) {
      state.position++;
      if (state.input.charCodeAt(state.position) === 10) {
        state.position++;
      }
    } else {
      throwError(state, "a line break is expected");
    }
    state.line += 1;
    state.lineStart = state.position;
    state.firstTabInLine = -1;
  }
  function skipSeparationSpace(state, allowComments, checkIndent) {
    var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        if (ch === 9 && state.firstTabInLine === -1) {
          state.firstTabInLine = state.position;
        }
        ch = state.input.charCodeAt(++state.position);
      }
      if (allowComments && ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 10 && ch !== 13 && ch !== 0);
      }
      if (is_EOL(ch)) {
        readLineBreak(state);
        ch = state.input.charCodeAt(state.position);
        lineBreaks++;
        state.lineIndent = 0;
        while (ch === 32) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }
      } else {
        break;
      }
    }
    if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
      throwWarning(state, "deficient indentation");
    }
    return lineBreaks;
  }
  function testDocumentSeparator(state) {
    var _position = state.position, ch;
    ch = state.input.charCodeAt(_position);
    if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
      _position += 3;
      ch = state.input.charCodeAt(_position);
      if (ch === 0 || is_WS_OR_EOL(ch)) {
        return true;
      }
    }
    return false;
  }
  function writeFoldedLines(state, count) {
    if (count === 1) {
      state.result += " ";
    } else if (count > 1) {
      state.result += common.repeat("\n", count - 1);
    }
  }
  function readPlainScalar(state, nodeIndent, withinFlowCollection) {
    var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
    ch = state.input.charCodeAt(state.position);
    if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
      return false;
    }
    if (ch === 63 || ch === 45) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        return false;
      }
    }
    state.kind = "scalar";
    state.result = "";
    captureStart = captureEnd = state.position;
    hasPendingContent = false;
    while (ch !== 0) {
      if (ch === 58) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
          break;
        }
      } else if (ch === 35) {
        preceding = state.input.charCodeAt(state.position - 1);
        if (is_WS_OR_EOL(preceding)) {
          break;
        }
      } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
        break;
      } else if (is_EOL(ch)) {
        _line = state.line;
        _lineStart = state.lineStart;
        _lineIndent = state.lineIndent;
        skipSeparationSpace(state, false, -1);
        if (state.lineIndent >= nodeIndent) {
          hasPendingContent = true;
          ch = state.input.charCodeAt(state.position);
          continue;
        } else {
          state.position = captureEnd;
          state.line = _line;
          state.lineStart = _lineStart;
          state.lineIndent = _lineIndent;
          break;
        }
      }
      if (hasPendingContent) {
        captureSegment(state, captureStart, captureEnd, false);
        writeFoldedLines(state, state.line - _line);
        captureStart = captureEnd = state.position;
        hasPendingContent = false;
      }
      if (!is_WHITE_SPACE(ch)) {
        captureEnd = state.position + 1;
      }
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, captureEnd, false);
    if (state.result) {
      return true;
    }
    state.kind = _kind;
    state.result = _result;
    return false;
  }
  function readSingleQuotedScalar(state, nodeIndent) {
    var ch, captureStart, captureEnd;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 39) {
      return false;
    }
    state.kind = "scalar";
    state.result = "";
    state.position++;
    captureStart = captureEnd = state.position;
    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
      if (ch === 39) {
        captureSegment(state, captureStart, state.position, true);
        ch = state.input.charCodeAt(++state.position);
        if (ch === 39) {
          captureStart = state.position;
          state.position++;
          captureEnd = state.position;
        } else {
          return true;
        }
      } else if (is_EOL(ch)) {
        captureSegment(state, captureStart, captureEnd, true);
        writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
        captureStart = captureEnd = state.position;
      } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
        throwError(state, "unexpected end of the document within a single quoted scalar");
      } else {
        state.position++;
        captureEnd = state.position;
      }
    }
    throwError(state, "unexpected end of the stream within a single quoted scalar");
  }
  function readDoubleQuotedScalar(state, nodeIndent) {
    var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 34) {
      return false;
    }
    state.kind = "scalar";
    state.result = "";
    state.position++;
    captureStart = captureEnd = state.position;
    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
      if (ch === 34) {
        captureSegment(state, captureStart, state.position, true);
        state.position++;
        return true;
      } else if (ch === 92) {
        captureSegment(state, captureStart, state.position, true);
        ch = state.input.charCodeAt(++state.position);
        if (is_EOL(ch)) {
          skipSeparationSpace(state, false, nodeIndent);
        } else if (ch < 256 && simpleEscapeCheck[ch]) {
          state.result += simpleEscapeMap[ch];
          state.position++;
        } else if ((tmp = escapedHexLen(ch)) > 0) {
          hexLength = tmp;
          hexResult = 0;
          for (; hexLength > 0; hexLength--) {
            ch = state.input.charCodeAt(++state.position);
            if ((tmp = fromHexCode(ch)) >= 0) {
              hexResult = (hexResult << 4) + tmp;
            } else {
              throwError(state, "expected hexadecimal character");
            }
          }
          state.result += charFromCodepoint(hexResult);
          state.position++;
        } else {
          throwError(state, "unknown escape sequence");
        }
        captureStart = captureEnd = state.position;
      } else if (is_EOL(ch)) {
        captureSegment(state, captureStart, captureEnd, true);
        writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
        captureStart = captureEnd = state.position;
      } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
        throwError(state, "unexpected end of the document within a double quoted scalar");
      } else {
        state.position++;
        captureEnd = state.position;
      }
    }
    throwError(state, "unexpected end of the stream within a double quoted scalar");
  }
  function readFlowCollection(state, nodeIndent) {
    var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 91) {
      terminator = 93;
      isMapping = false;
      _result = [];
    } else if (ch === 123) {
      terminator = 125;
      isMapping = true;
      _result = {};
    } else {
      return false;
    }
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(++state.position);
    while (ch !== 0) {
      skipSeparationSpace(state, true, nodeIndent);
      ch = state.input.charCodeAt(state.position);
      if (ch === terminator) {
        state.position++;
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = isMapping ? "mapping" : "sequence";
        state.result = _result;
        return true;
      } else if (!readNext) {
        throwError(state, "missed comma between flow collection entries");
      } else if (ch === 44) {
        throwError(state, "expected the node content, but found ','");
      }
      keyTag = keyNode = valueNode = null;
      isPair = isExplicitPair = false;
      if (ch === 63) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following)) {
          isPair = isExplicitPair = true;
          state.position++;
          skipSeparationSpace(state, true, nodeIndent);
        }
      }
      _line = state.line;
      _lineStart = state.lineStart;
      _pos = state.position;
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      keyTag = state.tag;
      keyNode = state.result;
      skipSeparationSpace(state, true, nodeIndent);
      ch = state.input.charCodeAt(state.position);
      if ((isExplicitPair || state.line === _line) && ch === 58) {
        isPair = true;
        ch = state.input.charCodeAt(++state.position);
        skipSeparationSpace(state, true, nodeIndent);
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        valueNode = state.result;
      }
      if (isMapping) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
      } else if (isPair) {
        _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
      } else {
        _result.push(keyNode);
      }
      skipSeparationSpace(state, true, nodeIndent);
      ch = state.input.charCodeAt(state.position);
      if (ch === 44) {
        readNext = true;
        ch = state.input.charCodeAt(++state.position);
      } else {
        readNext = false;
      }
    }
    throwError(state, "unexpected end of the stream within a flow collection");
  }
  function readBlockScalar(state, nodeIndent) {
    var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 124) {
      folding = false;
    } else if (ch === 62) {
      folding = true;
    } else {
      return false;
    }
    state.kind = "scalar";
    state.result = "";
    while (ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
      if (ch === 43 || ch === 45) {
        if (CHOMPING_CLIP === chomping) {
          chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
        } else {
          throwError(state, "repeat of a chomping mode identifier");
        }
      } else if ((tmp = fromDecimalCode(ch)) >= 0) {
        if (tmp === 0) {
          throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
        } else if (!detectedIndent) {
          textIndent = nodeIndent + tmp - 1;
          detectedIndent = true;
        } else {
          throwError(state, "repeat of an indentation width identifier");
        }
      } else {
        break;
      }
    }
    if (is_WHITE_SPACE(ch)) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (is_WHITE_SPACE(ch));
      if (ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (!is_EOL(ch) && ch !== 0);
      }
    }
    while (ch !== 0) {
      readLineBreak(state);
      state.lineIndent = 0;
      ch = state.input.charCodeAt(state.position);
      while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
      if (!detectedIndent && state.lineIndent > textIndent) {
        textIndent = state.lineIndent;
      }
      if (is_EOL(ch)) {
        emptyLines++;
        continue;
      }
      if (state.lineIndent < textIndent) {
        if (chomping === CHOMPING_KEEP) {
          state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        } else if (chomping === CHOMPING_CLIP) {
          if (didReadContent) {
            state.result += "\n";
          }
        }
        break;
      }
      if (folding) {
        if (is_WHITE_SPACE(ch)) {
          atMoreIndented = true;
          state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        } else if (atMoreIndented) {
          atMoreIndented = false;
          state.result += common.repeat("\n", emptyLines + 1);
        } else if (emptyLines === 0) {
          if (didReadContent) {
            state.result += " ";
          }
        } else {
          state.result += common.repeat("\n", emptyLines);
        }
      } else {
        state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      }
      didReadContent = true;
      detectedIndent = true;
      emptyLines = 0;
      captureStart = state.position;
      while (!is_EOL(ch) && ch !== 0) {
        ch = state.input.charCodeAt(++state.position);
      }
      captureSegment(state, captureStart, state.position, false);
    }
    return true;
  }
  function readBlockSequence(state, nodeIndent) {
    var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
    if (state.firstTabInLine !== -1)
      return false;
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while (ch !== 0) {
      if (state.firstTabInLine !== -1) {
        state.position = state.firstTabInLine;
        throwError(state, "tab characters must not be used in indentation");
      }
      if (ch !== 45) {
        break;
      }
      following = state.input.charCodeAt(state.position + 1);
      if (!is_WS_OR_EOL(following)) {
        break;
      }
      detected = true;
      state.position++;
      if (skipSeparationSpace(state, true, -1)) {
        if (state.lineIndent <= nodeIndent) {
          _result.push(null);
          ch = state.input.charCodeAt(state.position);
          continue;
        }
      }
      _line = state.line;
      composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
      _result.push(state.result);
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
      if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
        throwError(state, "bad indentation of a sequence entry");
      } else if (state.lineIndent < nodeIndent) {
        break;
      }
    }
    if (detected) {
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = "sequence";
      state.result = _result;
      return true;
    }
    return false;
  }
  function readBlockMapping(state, nodeIndent, flowIndent) {
    var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
    if (state.firstTabInLine !== -1)
      return false;
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while (ch !== 0) {
      if (!atExplicitKey && state.firstTabInLine !== -1) {
        state.position = state.firstTabInLine;
        throwError(state, "tab characters must not be used in indentation");
      }
      following = state.input.charCodeAt(state.position + 1);
      _line = state.line;
      if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
        if (ch === 63) {
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = true;
          allowCompact = true;
        } else if (atExplicitKey) {
          atExplicitKey = false;
          allowCompact = true;
        } else {
          throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
        }
        state.position += 1;
        ch = following;
      } else {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
        if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
          break;
        }
        if (state.line === _line) {
          ch = state.input.charCodeAt(state.position);
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          if (ch === 58) {
            ch = state.input.charCodeAt(++state.position);
            if (!is_WS_OR_EOL(ch)) {
              throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
            }
            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
              keyTag = keyNode = valueNode = null;
            }
            detected = true;
            atExplicitKey = false;
            allowCompact = false;
            keyTag = state.tag;
            keyNode = state.result;
          } else if (detected) {
            throwError(state, "can not read an implicit mapping pair; a colon is missed");
          } else {
            state.tag = _tag;
            state.anchor = _anchor;
            return true;
          }
        } else if (detected) {
          throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      }
      if (state.line === _line || state.lineIndent > nodeIndent) {
        if (atExplicitKey) {
          _keyLine = state.line;
          _keyLineStart = state.lineStart;
          _keyPos = state.position;
        }
        if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
          if (atExplicitKey) {
            keyNode = state.result;
          } else {
            valueNode = state.result;
          }
        }
        if (!atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
      }
      if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
        throwError(state, "bad indentation of a mapping entry");
      } else if (state.lineIndent < nodeIndent) {
        break;
      }
    }
    if (atExplicitKey) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
    }
    if (detected) {
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = "mapping";
      state.result = _result;
    }
    return detected;
  }
  function readTagProperty(state) {
    var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 33)
      return false;
    if (state.tag !== null) {
      throwError(state, "duplication of a tag property");
    }
    ch = state.input.charCodeAt(++state.position);
    if (ch === 60) {
      isVerbatim = true;
      ch = state.input.charCodeAt(++state.position);
    } else if (ch === 33) {
      isNamed = true;
      tagHandle = "!!";
      ch = state.input.charCodeAt(++state.position);
    } else {
      tagHandle = "!";
    }
    _position = state.position;
    if (isVerbatim) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0 && ch !== 62);
      if (state.position < state.length) {
        tagName = state.input.slice(_position, state.position);
        ch = state.input.charCodeAt(++state.position);
      } else {
        throwError(state, "unexpected end of the stream within a verbatim tag");
      }
    } else {
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        if (ch === 33) {
          if (!isNamed) {
            tagHandle = state.input.slice(_position - 1, state.position + 1);
            if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
              throwError(state, "named tag handle cannot contain such characters");
            }
            isNamed = true;
            _position = state.position + 1;
          } else {
            throwError(state, "tag suffix cannot contain exclamation marks");
          }
        }
        ch = state.input.charCodeAt(++state.position);
      }
      tagName = state.input.slice(_position, state.position);
      if (PATTERN_FLOW_INDICATORS.test(tagName)) {
        throwError(state, "tag suffix cannot contain flow indicator characters");
      }
    }
    if (tagName && !PATTERN_TAG_URI.test(tagName)) {
      throwError(state, "tag name cannot contain such characters: " + tagName);
    }
    try {
      tagName = decodeURIComponent(tagName);
    } catch (err) {
      throwError(state, "tag name is malformed: " + tagName);
    }
    if (isVerbatim) {
      state.tag = tagName;
    } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
      state.tag = state.tagMap[tagHandle] + tagName;
    } else if (tagHandle === "!") {
      state.tag = "!" + tagName;
    } else if (tagHandle === "!!") {
      state.tag = "tag:yaml.org,2002:" + tagName;
    } else {
      throwError(state, 'undeclared tag handle "' + tagHandle + '"');
    }
    return true;
  }
  function readAnchorProperty(state) {
    var _position, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 38)
      return false;
    if (state.anchor !== null) {
      throwError(state, "duplication of an anchor property");
    }
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
      throwError(state, "name of an anchor node must contain at least one character");
    }
    state.anchor = state.input.slice(_position, state.position);
    return true;
  }
  function readAlias(state) {
    var _position, alias, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 42)
      return false;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
      throwError(state, "name of an alias node must contain at least one character");
    }
    alias = state.input.slice(_position, state.position);
    if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
      throwError(state, 'unidentified alias "' + alias + '"');
    }
    state.result = state.anchorMap[alias];
    skipSeparationSpace(state, true, -1);
    return true;
  }
  function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
    var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
    if (state.listener !== null) {
      state.listener("open", state);
    }
    state.tag = null;
    state.anchor = null;
    state.kind = null;
    state.result = null;
    allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
    if (allowToSeek) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      }
    }
    if (indentStatus === 1) {
      while (readTagProperty(state) || readAnchorProperty(state)) {
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true;
          allowBlockCollections = allowBlockStyles;
          if (state.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        } else {
          allowBlockCollections = false;
        }
      }
    }
    if (allowBlockCollections) {
      allowBlockCollections = atNewLine || allowCompact;
    }
    if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
      if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
        flowIndent = parentIndent;
      } else {
        flowIndent = parentIndent + 1;
      }
      blockIndent = state.position - state.lineStart;
      if (indentStatus === 1) {
        if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
          hasContent = true;
        } else {
          if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
            hasContent = true;
          } else if (readAlias(state)) {
            hasContent = true;
            if (state.tag !== null || state.anchor !== null) {
              throwError(state, "alias node should not have any properties");
            }
          } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
            hasContent = true;
            if (state.tag === null) {
              state.tag = "?";
            }
          }
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
        }
      } else if (indentStatus === 0) {
        hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
      }
    }
    if (state.tag === null) {
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    } else if (state.tag === "?") {
      if (state.result !== null && state.kind !== "scalar") {
        throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
      }
      for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
        type2 = state.implicitTypes[typeIndex];
        if (type2.resolve(state.result)) {
          state.result = type2.construct(state.result);
          state.tag = type2.tag;
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
          break;
        }
      }
    } else if (state.tag !== "!") {
      if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) {
        type2 = state.typeMap[state.kind || "fallback"][state.tag];
      } else {
        type2 = null;
        typeList = state.typeMap.multi[state.kind || "fallback"];
        for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
          if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
            type2 = typeList[typeIndex];
            break;
          }
        }
      }
      if (!type2) {
        throwError(state, "unknown tag !<" + state.tag + ">");
      }
      if (state.result !== null && type2.kind !== state.kind) {
        throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
      }
      if (!type2.resolve(state.result, state.tag)) {
        throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
      } else {
        state.result = type2.construct(state.result, state.tag);
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    }
    if (state.listener !== null) {
      state.listener("close", state);
    }
    return state.tag !== null || state.anchor !== null || hasContent;
  }
  function readDocument(state) {
    var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
    state.version = null;
    state.checkLineBreaks = state.legacy;
    state.tagMap = /* @__PURE__ */ Object.create(null);
    state.anchorMap = /* @__PURE__ */ Object.create(null);
    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
      if (state.lineIndent > 0 || ch !== 37) {
        break;
      }
      hasDirectives = true;
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveName = state.input.slice(_position, state.position);
      directiveArgs = [];
      if (directiveName.length < 1) {
        throwError(state, "directive name must not be less than one character in length");
      }
      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 0 && !is_EOL(ch));
          break;
        }
        if (is_EOL(ch))
          break;
        _position = state.position;
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        directiveArgs.push(state.input.slice(_position, state.position));
      }
      if (ch !== 0)
        readLineBreak(state);
      if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
        directiveHandlers[directiveName](state, directiveName, directiveArgs);
      } else {
        throwWarning(state, 'unknown document directive "' + directiveName + '"');
      }
    }
    skipSeparationSpace(state, true, -1);
    if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    } else if (hasDirectives) {
      throwError(state, "directives end mark is expected");
    }
    composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
    skipSeparationSpace(state, true, -1);
    if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
      throwWarning(state, "non-ASCII line breaks are interpreted as content");
    }
    state.documents.push(state.result);
    if (state.position === state.lineStart && testDocumentSeparator(state)) {
      if (state.input.charCodeAt(state.position) === 46) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
      }
      return;
    }
    if (state.position < state.length - 1) {
      throwError(state, "end of the stream or a document separator is expected");
    } else {
      return;
    }
  }
  function loadDocuments(input, options) {
    input = String(input);
    options = options || {};
    if (input.length !== 0) {
      if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
        input += "\n";
      }
      if (input.charCodeAt(0) === 65279) {
        input = input.slice(1);
      }
    }
    var state = new State$1(input, options);
    var nullpos = input.indexOf("\0");
    if (nullpos !== -1) {
      state.position = nullpos;
      throwError(state, "null byte is not allowed in input");
    }
    state.input += "\0";
    while (state.input.charCodeAt(state.position) === 32) {
      state.lineIndent += 1;
      state.position += 1;
    }
    while (state.position < state.length - 1) {
      readDocument(state);
    }
    return state.documents;
  }
  function loadAll$1(input, iterator, options) {
    if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
      options = iterator;
      iterator = null;
    }
    var documents = loadDocuments(input, options);
    if (typeof iterator !== "function") {
      return documents;
    }
    for (var index = 0, length = documents.length; index < length; index += 1) {
      iterator(documents[index]);
    }
  }
  function load$1(input, options) {
    var documents = loadDocuments(input, options);
    if (documents.length === 0) {
      return void 0;
    } else if (documents.length === 1) {
      return documents[0];
    }
    throw new exception("expected a single document in the stream, but found more");
  }
  var loadAll_1 = loadAll$1;
  var load_1 = load$1;
  var loader = {
    loadAll: loadAll_1,
    load: load_1
  };
  var _toString = Object.prototype.toString;
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var CHAR_BOM = 65279;
  var CHAR_TAB = 9;
  var CHAR_LINE_FEED = 10;
  var CHAR_CARRIAGE_RETURN = 13;
  var CHAR_SPACE = 32;
  var CHAR_EXCLAMATION = 33;
  var CHAR_DOUBLE_QUOTE = 34;
  var CHAR_SHARP = 35;
  var CHAR_PERCENT = 37;
  var CHAR_AMPERSAND = 38;
  var CHAR_SINGLE_QUOTE = 39;
  var CHAR_ASTERISK = 42;
  var CHAR_COMMA = 44;
  var CHAR_MINUS = 45;
  var CHAR_COLON = 58;
  var CHAR_EQUALS = 61;
  var CHAR_GREATER_THAN = 62;
  var CHAR_QUESTION = 63;
  var CHAR_COMMERCIAL_AT = 64;
  var CHAR_LEFT_SQUARE_BRACKET = 91;
  var CHAR_RIGHT_SQUARE_BRACKET = 93;
  var CHAR_GRAVE_ACCENT = 96;
  var CHAR_LEFT_CURLY_BRACKET = 123;
  var CHAR_VERTICAL_LINE = 124;
  var CHAR_RIGHT_CURLY_BRACKET = 125;
  var ESCAPE_SEQUENCES = {};
  ESCAPE_SEQUENCES[0] = "\\0";
  ESCAPE_SEQUENCES[7] = "\\a";
  ESCAPE_SEQUENCES[8] = "\\b";
  ESCAPE_SEQUENCES[9] = "\\t";
  ESCAPE_SEQUENCES[10] = "\\n";
  ESCAPE_SEQUENCES[11] = "\\v";
  ESCAPE_SEQUENCES[12] = "\\f";
  ESCAPE_SEQUENCES[13] = "\\r";
  ESCAPE_SEQUENCES[27] = "\\e";
  ESCAPE_SEQUENCES[34] = '\\"';
  ESCAPE_SEQUENCES[92] = "\\\\";
  ESCAPE_SEQUENCES[133] = "\\N";
  ESCAPE_SEQUENCES[160] = "\\_";
  ESCAPE_SEQUENCES[8232] = "\\L";
  ESCAPE_SEQUENCES[8233] = "\\P";
  var DEPRECATED_BOOLEANS_SYNTAX = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF"
  ];
  var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function compileStyleMap(schema2, map2) {
    var result, keys, index, length, tag, style, type2;
    if (map2 === null)
      return {};
    result = {};
    keys = Object.keys(map2);
    for (index = 0, length = keys.length; index < length; index += 1) {
      tag = keys[index];
      style = String(map2[tag]);
      if (tag.slice(0, 2) === "!!") {
        tag = "tag:yaml.org,2002:" + tag.slice(2);
      }
      type2 = schema2.compiledTypeMap["fallback"][tag];
      if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
        style = type2.styleAliases[style];
      }
      result[tag] = style;
    }
    return result;
  }
  function encodeHex(character) {
    var string, handle, length;
    string = character.toString(16).toUpperCase();
    if (character <= 255) {
      handle = "x";
      length = 2;
    } else if (character <= 65535) {
      handle = "u";
      length = 4;
    } else if (character <= 4294967295) {
      handle = "U";
      length = 8;
    } else {
      throw new exception("code point within a string may not be greater than 0xFFFFFFFF");
    }
    return "\\" + handle + common.repeat("0", length - string.length) + string;
  }
  var QUOTING_TYPE_SINGLE = 1;
  var QUOTING_TYPE_DOUBLE = 2;
  function State(options) {
    this.schema = options["schema"] || _default;
    this.indent = Math.max(1, options["indent"] || 2);
    this.noArrayIndent = options["noArrayIndent"] || false;
    this.skipInvalid = options["skipInvalid"] || false;
    this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
    this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
    this.sortKeys = options["sortKeys"] || false;
    this.lineWidth = options["lineWidth"] || 80;
    this.noRefs = options["noRefs"] || false;
    this.noCompatMode = options["noCompatMode"] || false;
    this.condenseFlow = options["condenseFlow"] || false;
    this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
    this.forceQuotes = options["forceQuotes"] || false;
    this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.explicitTypes = this.schema.compiledExplicit;
    this.tag = null;
    this.result = "";
    this.duplicates = [];
    this.usedDuplicates = null;
  }
  function indentString(string, spaces) {
    var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
    while (position < length) {
      next = string.indexOf("\n", position);
      if (next === -1) {
        line = string.slice(position);
        position = length;
      } else {
        line = string.slice(position, next + 1);
        position = next + 1;
      }
      if (line.length && line !== "\n")
        result += ind;
      result += line;
    }
    return result;
  }
  function generateNextLine(state, level) {
    return "\n" + common.repeat(" ", state.indent * level);
  }
  function testImplicitResolving(state, str2) {
    var index, length, type2;
    for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
      type2 = state.implicitTypes[index];
      if (type2.resolve(str2)) {
        return true;
      }
    }
    return false;
  }
  function isWhitespace(c) {
    return c === CHAR_SPACE || c === CHAR_TAB;
  }
  function isPrintable(c) {
    return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
  }
  function isNsCharOrWhitespace(c) {
    return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
  }
  function isPlainSafe(c, prev, inblock) {
    var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
    var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
    return (inblock ? cIsNsCharOrWhitespace : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar;
  }
  function isPlainSafeFirst(c) {
    return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
  }
  function isPlainSafeLast(c) {
    return !isWhitespace(c) && c !== CHAR_COLON;
  }
  function codePointAt(string, pos) {
    var first = string.charCodeAt(pos), second;
    if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
      second = string.charCodeAt(pos + 1);
      if (second >= 56320 && second <= 57343) {
        return (first - 55296) * 1024 + second - 56320 + 65536;
      }
    }
    return first;
  }
  function needIndentIndicator(string) {
    var leadingSpaceRe = /^\n* /;
    return leadingSpaceRe.test(string);
  }
  var STYLE_PLAIN = 1;
  var STYLE_SINGLE = 2;
  var STYLE_LITERAL = 3;
  var STYLE_FOLDED = 4;
  var STYLE_DOUBLE = 5;
  function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
    var i;
    var char = 0;
    var prevChar = null;
    var hasLineBreak = false;
    var hasFoldableLine = false;
    var shouldTrackWidth = lineWidth !== -1;
    var previousLineBreak = -1;
    var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
    if (singleLineOnly || forceQuotes) {
      for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
        char = codePointAt(string, i);
        if (!isPrintable(char)) {
          return STYLE_DOUBLE;
        }
        plain = plain && isPlainSafe(char, prevChar, inblock);
        prevChar = char;
      }
    } else {
      for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
        char = codePointAt(string, i);
        if (char === CHAR_LINE_FEED) {
          hasLineBreak = true;
          if (shouldTrackWidth) {
            hasFoldableLine = hasFoldableLine || i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
            previousLineBreak = i;
          }
        } else if (!isPrintable(char)) {
          return STYLE_DOUBLE;
        }
        plain = plain && isPlainSafe(char, prevChar, inblock);
        prevChar = char;
      }
      hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
    }
    if (!hasLineBreak && !hasFoldableLine) {
      if (plain && !forceQuotes && !testAmbiguousType(string)) {
        return STYLE_PLAIN;
      }
      return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
    }
    if (indentPerLevel > 9 && needIndentIndicator(string)) {
      return STYLE_DOUBLE;
    }
    if (!forceQuotes) {
      return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  function writeScalar(state, string, level, iskey, inblock) {
    state.dump = function() {
      if (string.length === 0) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
      }
      if (!state.noCompatMode) {
        if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
          return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
        }
      }
      var indent = state.indent * Math.max(1, level);
      var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
      var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
      function testAmbiguity(string2) {
        return testImplicitResolving(state, string2);
      }
      switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {
        case STYLE_PLAIN:
          return string;
        case STYLE_SINGLE:
          return "'" + string.replace(/'/g, "''") + "'";
        case STYLE_LITERAL:
          return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
        case STYLE_FOLDED:
          return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
        case STYLE_DOUBLE:
          return '"' + escapeString(string) + '"';
        default:
          throw new exception("impossible error: invalid scalar style");
      }
    }();
  }
  function blockHeader(string, indentPerLevel) {
    var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
    var clip = string[string.length - 1] === "\n";
    var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
    var chomp = keep ? "+" : clip ? "" : "-";
    return indentIndicator + chomp + "\n";
  }
  function dropEndingNewline(string) {
    return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
  }
  function foldString(string, width) {
    var lineRe = /(\n+)([^\n]*)/g;
    var result = function() {
      var nextLF = string.indexOf("\n");
      nextLF = nextLF !== -1 ? nextLF : string.length;
      lineRe.lastIndex = nextLF;
      return foldLine(string.slice(0, nextLF), width);
    }();
    var prevMoreIndented = string[0] === "\n" || string[0] === " ";
    var moreIndented;
    var match;
    while (match = lineRe.exec(string)) {
      var prefix = match[1], line = match[2];
      moreIndented = line[0] === " ";
      result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
      prevMoreIndented = moreIndented;
    }
    return result;
  }
  function foldLine(line, width) {
    if (line === "" || line[0] === " ")
      return line;
    var breakRe = / [^ ]/g;
    var match;
    var start = 0, end, curr = 0, next = 0;
    var result = "";
    while (match = breakRe.exec(line)) {
      next = match.index;
      if (next - start > width) {
        end = curr > start ? curr : next;
        result += "\n" + line.slice(start, end);
        start = end + 1;
      }
      curr = next;
    }
    result += "\n";
    if (line.length - start > width && curr > start) {
      result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
    } else {
      result += line.slice(start);
    }
    return result.slice(1);
  }
  function escapeString(string) {
    var result = "";
    var char = 0;
    var escapeSeq;
    for (var i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
      char = codePointAt(string, i);
      escapeSeq = ESCAPE_SEQUENCES[char];
      if (!escapeSeq && isPrintable(char)) {
        result += string[i];
        if (char >= 65536)
          result += string[i + 1];
      } else {
        result += escapeSeq || encodeHex(char);
      }
    }
    return result;
  }
  function writeFlowSequence(state, level, object) {
    var _result = "", _tag = state.tag, index, length, value;
    for (index = 0, length = object.length; index < length; index += 1) {
      value = object[index];
      if (state.replacer) {
        value = state.replacer.call(object, String(index), value);
      }
      if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
        if (_result !== "")
          _result += "," + (!state.condenseFlow ? " " : "");
        _result += state.dump;
      }
    }
    state.tag = _tag;
    state.dump = "[" + _result + "]";
  }
  function writeBlockSequence(state, level, object, compact) {
    var _result = "", _tag = state.tag, index, length, value;
    for (index = 0, length = object.length; index < length; index += 1) {
      value = object[index];
      if (state.replacer) {
        value = state.replacer.call(object, String(index), value);
      }
      if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
        if (!compact || _result !== "") {
          _result += generateNextLine(state, level);
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          _result += "-";
        } else {
          _result += "- ";
        }
        _result += state.dump;
      }
    }
    state.tag = _tag;
    state.dump = _result || "[]";
  }
  function writeFlowMapping(state, level, object) {
    var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
    for (index = 0, length = objectKeyList.length; index < length; index += 1) {
      pairBuffer = "";
      if (_result !== "")
        pairBuffer += ", ";
      if (state.condenseFlow)
        pairBuffer += '"';
      objectKey = objectKeyList[index];
      objectValue = object[objectKey];
      if (state.replacer) {
        objectValue = state.replacer.call(object, objectKey, objectValue);
      }
      if (!writeNode(state, level, objectKey, false, false)) {
        continue;
      }
      if (state.dump.length > 1024)
        pairBuffer += "? ";
      pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
      if (!writeNode(state, level, objectValue, false, false)) {
        continue;
      }
      pairBuffer += state.dump;
      _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = "{" + _result + "}";
  }
  function writeBlockMapping(state, level, object, compact) {
    var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
    if (state.sortKeys === true) {
      objectKeyList.sort();
    } else if (typeof state.sortKeys === "function") {
      objectKeyList.sort(state.sortKeys);
    } else if (state.sortKeys) {
      throw new exception("sortKeys must be a boolean or a function");
    }
    for (index = 0, length = objectKeyList.length; index < length; index += 1) {
      pairBuffer = "";
      if (!compact || _result !== "") {
        pairBuffer += generateNextLine(state, level);
      }
      objectKey = objectKeyList[index];
      objectValue = object[objectKey];
      if (state.replacer) {
        objectValue = state.replacer.call(object, objectKey, objectValue);
      }
      if (!writeNode(state, level + 1, objectKey, true, true, true)) {
        continue;
      }
      explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
      if (explicitPair) {
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += "?";
        } else {
          pairBuffer += "? ";
        }
      }
      pairBuffer += state.dump;
      if (explicitPair) {
        pairBuffer += generateNextLine(state, level);
      }
      if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
        continue;
      }
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += ":";
      } else {
        pairBuffer += ": ";
      }
      pairBuffer += state.dump;
      _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = _result || "{}";
  }
  function detectType(state, object, explicit) {
    var _result, typeList, index, length, type2, style;
    typeList = explicit ? state.explicitTypes : state.implicitTypes;
    for (index = 0, length = typeList.length; index < length; index += 1) {
      type2 = typeList[index];
      if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object === "object" && object instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object))) {
        if (explicit) {
          if (type2.multi && type2.representName) {
            state.tag = type2.representName(object);
          } else {
            state.tag = type2.tag;
          }
        } else {
          state.tag = "?";
        }
        if (type2.represent) {
          style = state.styleMap[type2.tag] || type2.defaultStyle;
          if (_toString.call(type2.represent) === "[object Function]") {
            _result = type2.represent(object, style);
          } else if (_hasOwnProperty.call(type2.represent, style)) {
            _result = type2.represent[style](object, style);
          } else {
            throw new exception("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
          }
          state.dump = _result;
        }
        return true;
      }
    }
    return false;
  }
  function writeNode(state, level, object, block, compact, iskey, isblockseq) {
    state.tag = null;
    state.dump = object;
    if (!detectType(state, object, false)) {
      detectType(state, object, true);
    }
    var type2 = _toString.call(state.dump);
    var inblock = block;
    var tagStr;
    if (block) {
      block = state.flowLevel < 0 || state.flowLevel > level;
    }
    var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]", duplicateIndex, duplicate;
    if (objectOrArray) {
      duplicateIndex = state.duplicates.indexOf(object);
      duplicate = duplicateIndex !== -1;
    }
    if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
      compact = false;
    }
    if (duplicate && state.usedDuplicates[duplicateIndex]) {
      state.dump = "*ref_" + duplicateIndex;
    } else {
      if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
        state.usedDuplicates[duplicateIndex] = true;
      }
      if (type2 === "[object Object]") {
        if (block && Object.keys(state.dump).length !== 0) {
          writeBlockMapping(state, level, state.dump, compact);
          if (duplicate) {
            state.dump = "&ref_" + duplicateIndex + state.dump;
          }
        } else {
          writeFlowMapping(state, level, state.dump);
          if (duplicate) {
            state.dump = "&ref_" + duplicateIndex + " " + state.dump;
          }
        }
      } else if (type2 === "[object Array]") {
        if (block && state.dump.length !== 0) {
          if (state.noArrayIndent && !isblockseq && level > 0) {
            writeBlockSequence(state, level - 1, state.dump, compact);
          } else {
            writeBlockSequence(state, level, state.dump, compact);
          }
          if (duplicate) {
            state.dump = "&ref_" + duplicateIndex + state.dump;
          }
        } else {
          writeFlowSequence(state, level, state.dump);
          if (duplicate) {
            state.dump = "&ref_" + duplicateIndex + " " + state.dump;
          }
        }
      } else if (type2 === "[object String]") {
        if (state.tag !== "?") {
          writeScalar(state, state.dump, level, iskey, inblock);
        }
      } else if (type2 === "[object Undefined]") {
        return false;
      } else {
        if (state.skipInvalid)
          return false;
        throw new exception("unacceptable kind of an object to dump " + type2);
      }
      if (state.tag !== null && state.tag !== "?") {
        tagStr = encodeURI(state.tag[0] === "!" ? state.tag.slice(1) : state.tag).replace(/!/g, "%21");
        if (state.tag[0] === "!") {
          tagStr = "!" + tagStr;
        } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
          tagStr = "!!" + tagStr.slice(18);
        } else {
          tagStr = "!<" + tagStr + ">";
        }
        state.dump = tagStr + " " + state.dump;
      }
    }
    return true;
  }
  function getDuplicateReferences(object, state) {
    var objects = [], duplicatesIndexes = [], index, length;
    inspectNode(object, objects, duplicatesIndexes);
    for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
      state.duplicates.push(objects[duplicatesIndexes[index]]);
    }
    state.usedDuplicates = new Array(length);
  }
  function inspectNode(object, objects, duplicatesIndexes) {
    var objectKeyList, index, length;
    if (object !== null && typeof object === "object") {
      index = objects.indexOf(object);
      if (index !== -1) {
        if (duplicatesIndexes.indexOf(index) === -1) {
          duplicatesIndexes.push(index);
        }
      } else {
        objects.push(object);
        if (Array.isArray(object)) {
          for (index = 0, length = object.length; index < length; index += 1) {
            inspectNode(object[index], objects, duplicatesIndexes);
          }
        } else {
          objectKeyList = Object.keys(object);
          for (index = 0, length = objectKeyList.length; index < length; index += 1) {
            inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
          }
        }
      }
    }
  }
  function dump$1(input, options) {
    options = options || {};
    var state = new State(options);
    if (!state.noRefs)
      getDuplicateReferences(input, state);
    var value = input;
    if (state.replacer) {
      value = state.replacer.call({ "": value }, "", value);
    }
    if (writeNode(state, 0, value, true, true))
      return state.dump + "\n";
    return "";
  }
  var dump_1 = dump$1;
  var dumper = {
    dump: dump_1
  };
  function renamed(from, to) {
    return function() {
      throw new Error("Function yaml." + from + " is removed in js-yaml 4. Use yaml." + to + " instead, which is now safe by default.");
    };
  }
  var Type = type;
  var Schema = schema;
  var FAILSAFE_SCHEMA = failsafe;
  var JSON_SCHEMA = json;
  var CORE_SCHEMA = core;
  var DEFAULT_SCHEMA = _default;
  var load = loader.load;
  var loadAll = loader.loadAll;
  var dump = dumper.dump;
  var YAMLException = exception;
  var types = {
    binary,
    float,
    map,
    null: _null,
    pairs,
    set,
    timestamp,
    bool,
    int,
    merge,
    omap,
    seq,
    str
  };
  var safeLoad = renamed("safeLoad", "load");
  var safeLoadAll = renamed("safeLoadAll", "loadAll");
  var safeDump = renamed("safeDump", "dump");
  var jsYaml = {
    Type,
    Schema,
    FAILSAFE_SCHEMA,
    JSON_SCHEMA,
    CORE_SCHEMA,
    DEFAULT_SCHEMA,
    load,
    loadAll,
    dump,
    YAMLException,
    types,
    safeLoad,
    safeLoadAll,
    safeDump
  };
  var js_yaml_default = jsYaml;

  // src/util.ts
  async function readTextFile(path) {
    let text2;
    try {
      text2 = await fetchText(path);
      inform(path);
    } catch (e) {
      console.error(e);
      warn(e);
      return null;
    }
    return text2;
  }
  async function fetchText(path) {
    if (typeof fsFile != "undefined")
      return fsFile(path);
    else
      return (await fetch(path)).text();
  }
  var dirFilesRegex = /<\s*a[^>]*>(.*?)<\s*\/\s*a>/gi;
  async function listDir(path, full = false) {
    if (typeof fsDir != "undefined") {
      let files2 = fsDir(path, full);
      return files2;
    }
    let text2 = await readTextFile(path);
    let matches, files = [];
    while (matches = dirFilesRegex.exec(text2)) {
      if (matches[1] != "../" && matches[1].substring(0, 4) != "http")
        files.push(full ? path + matches[1] : matches[1]);
    }
    console.log("ld", path, files);
    return files;
  }
  async function readYaml(path) {
    let text2 = await readTextFile(path);
    let parsed = parseYaml(text2, path);
    return parsed;
  }
  function parseYaml(file, filename) {
    try {
      return js_yaml_default.load(file, {
        json: true,
        filename,
        onWarning: (e) => {
          console.error(e.message);
        }
      });
    } catch (e) {
      console.error(e.message);
      warn(e.message);
    }
  }
  function download(filename, text2) {
    if (typeof fsSave != "undefined") {
      fsSave(filename, text2);
      return;
    }
    var element2 = document.createElement("a");
    element2.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text2));
    element2.setAttribute("download", filename);
    element2.style.display = "none";
    document.body.appendChild(element2);
    element2.click();
    document.body.removeChild(element2);
  }
  function delay(n) {
    return new Promise((r) => setTimeout(r, n));
  }
  function camelToUnderscore(key) {
    var result = key.replace(/([A-Z])/g, " $1");
    return result.split(" ").join("_").toLowerCase();
  }
  function getFlagEmoji(countryCode) {
    return countryCode.toUpperCase();
  }
  function addIfNew(arr, item) {
    const ind = arr.indexOf(item);
    if (ind == -1)
      arr.push(item);
  }
  function addAllIfNew(arr, items) {
    if (!Array.isArray(items)) {
      addIfNew(arr, items);
      return;
    }
    if (items.length < 3) {
      for (let it of items)
        addIfNew(arr, it);
    } else {
      let set2 = new Set(arr);
      for (let it of items)
        if (!set2.has(it))
          arr.push(it);
    }
  }
  function isAncestorOf(ancestor, descendant) {
    let n = descendant;
    while (n) {
      if (n === ancestor) {
        return true;
      } else {
        n = n.parentNode;
      }
    }
    return false;
  }
  function capital(str2) {
    if (str2 == null)
      return;
    return str2.substr(0, 1).toUpperCase() + str2.substr(1).toLowerCase();
  }
  function clamp(min, val, max) {
    return val < min ? min : val > max ? max : val;
  }
  function unique(a) {
    return [...new Set(a)];
  }
  function withoutKeys(o, keys) {
    o = { ...o };
    for (let k of keys) {
      delete o[k];
    }
    return o;
  }

  // src/PaginatedList.svelte
  function get_each_context2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[10] = list[i];
    child_ctx[12] = i;
    return child_ctx;
  }
  var get_default_slot_changes = (dirty) => ({
    paginatedItems: dirty & 2
  });
  var get_default_slot_context = (ctx) => ({
    paginatedItems: ctx[1]
  });
  function create_if_block4(ctx) {
    let div;
    let paginationnav;
    let current;
    paginationnav = new PaginationNav_default({
      props: {
        totalItems: ctx[0].length,
        pageSize: ctx[2],
        currentPage: ctx[3],
        showStepOptions: true,
        limit: 7
      }
    });
    paginationnav.$on("setPage", ctx[9]);
    return {
      c() {
        div = element("div");
        create_component(paginationnav.$$.fragment);
        attr(div, "class", "dark-pagination-nav");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(paginationnav, div, null);
        current = true;
      },
      p(ctx2, dirty) {
        const paginationnav_changes = {};
        if (dirty & 1)
          paginationnav_changes.totalItems = ctx2[0].length;
        if (dirty & 4)
          paginationnav_changes.pageSize = ctx2[2];
        if (dirty & 8)
          paginationnav_changes.currentPage = ctx2[3];
        paginationnav.$set(paginationnav_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(paginationnav.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(paginationnav.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(paginationnav);
      }
    };
  }
  function create_each_block2(ctx) {
    let html_tag;
    let raw_value = divider(ctx[12]) + "";
    let html_anchor;
    let link2;
    let current;
    link2 = new Link_default({ props: { href: ctx[10] } });
    return {
      c() {
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        create_component(link2.$$.fragment);
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
        mount_component(link2, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const link_changes = {};
        if (dirty & 2)
          link_changes.href = ctx2[10];
        link2.$set(link_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(link2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(link2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
        destroy_component(link2, detaching);
      }
    };
  }
  function fallback_block2(ctx) {
    let each_1_anchor;
    let current;
    let each_value = ctx[1];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 2) {
          each_value = ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context2(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block2(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_fragment7(ctx) {
    let t;
    let span;
    let current;
    let if_block = ctx[4] > 1 && create_if_block4(ctx);
    const default_slot_template = ctx[8].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[7], get_default_slot_context);
    const default_slot_or_fallback = default_slot || fallback_block2(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        t = space();
        span = element("span");
        if (default_slot_or_fallback)
          default_slot_or_fallback.c();
        attr(span, "class", "links-list");
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, t, anchor);
        insert(target, span, anchor);
        if (default_slot_or_fallback) {
          default_slot_or_fallback.m(span, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (ctx2[4] > 1) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 16) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block4(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(t.parentNode, t);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 130)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, get_default_slot_changes), get_default_slot_context);
          }
        } else {
          if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 2)) {
            default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        transition_in(default_slot_or_fallback, local);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        transition_out(default_slot_or_fallback, local);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(t);
        if (detaching)
          detach(span);
        if (default_slot_or_fallback)
          default_slot_or_fallback.d(detaching);
      }
    };
  }
  function instance7($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let { items } = $$props;
    let { paginatedItems } = $$props;
    let { sorter } = $$props;
    let currentPage = 1;
    let pagesNumber = 1;
    let { pageSize = 40 } = $$props;
    let { onePageMax = 200 } = $$props;
    onMount(async () => {
      leftRightClickSwipe.set((delta) => $$invalidate(3, currentPage = clamp(1, currentPage + delta, pagesNumber)));
    });
    onDestroy(async () => {
      leftRightClickSwipe.set(null);
    });
    const setPage_handler = (e) => $$invalidate(3, currentPage = e.detail.page);
    $$self.$$set = ($$props2) => {
      if ("items" in $$props2)
        $$invalidate(0, items = $$props2.items);
      if ("paginatedItems" in $$props2)
        $$invalidate(1, paginatedItems = $$props2.paginatedItems);
      if ("sorter" in $$props2)
        $$invalidate(5, sorter = $$props2.sorter);
      if ("pageSize" in $$props2)
        $$invalidate(2, pageSize = $$props2.pageSize);
      if ("onePageMax" in $$props2)
        $$invalidate(6, onePageMax = $$props2.onePageMax);
      if ("$$scope" in $$props2)
        $$invalidate(7, $$scope = $$props2.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 125) {
        $: {
          $$invalidate(4, pagesNumber = items.length <= onePageMax ? 1 : Math.ceil(items.length / pageSize));
          if (items instanceof Set) {
            $$invalidate(0, items = [...items]);
          }
          let sortedItems = sorter ? sorter(items) : items;
          if (Array.isArray(items)) {
            if (currentPage > pagesNumber)
              $$invalidate(3, currentPage = 1);
            $$invalidate(1, paginatedItems = items.length <= onePageMax ? items : paginate_default({
              items: sortedItems,
              pageSize,
              currentPage
            }));
          }
        }
      }
    };
    return [
      items,
      paginatedItems,
      pageSize,
      currentPage,
      pagesNumber,
      sorter,
      onePageMax,
      $$scope,
      slots,
      setPage_handler
    ];
  }
  var PaginatedList = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance7, create_fragment7, safe_not_equal, {
        items: 0,
        paginatedItems: 1,
        sorter: 5,
        pageSize: 2,
        onePageMax: 6
      });
    }
  };
  var PaginatedList_default = PaginatedList;

  // src/LinksPage.svelte
  function get_each_context3(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[6] = list[i];
    return child_ctx;
  }
  function create_if_block5(ctx) {
    let t0;
    let t1;
    let current_block_type_index;
    let if_block2;
    let if_block2_anchor;
    let current;
    let if_block0 = !ctx[2] && create_if_block_32(ctx);
    let if_block1 = ctx[2] && create_if_block_22(ctx);
    const if_block_creators = [create_if_block_12, create_else_block3];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[1])
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        if (if_block1)
          if_block1.c();
        t1 = space();
        if_block2.c();
        if_block2_anchor = empty();
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t0, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t1, anchor);
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block2_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (!ctx2[2]) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
            if (dirty & 4) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_32(ctx2);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        if (ctx2[2]) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty & 4) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_22(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(t1.parentNode, t1);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block2 = if_blocks[current_block_type_index];
          if (!if_block2) {
            if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block2.c();
          } else {
            if_block2.p(ctx2, dirty);
          }
          transition_in(if_block2, 1);
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block0);
        transition_in(if_block1);
        transition_in(if_block2);
        current = true;
      },
      o(local) {
        transition_out(if_block0);
        transition_out(if_block1);
        transition_out(if_block2);
        current = false;
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t0);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t1);
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block2_anchor);
      }
    };
  }
  function create_if_block_32(ctx) {
    let div;
    let button;
    let tr_1;
    let button_style_value;
    let current;
    let mounted;
    let dispose;
    tr_1 = new Tr_default({ props: { s: "A-Z" } });
    return {
      c() {
        div = element("div");
        button = element("button");
        create_component(tr_1.$$.fragment);
        attr(button, "style", button_style_value = ctx[4] ? "" : "text-decoration:line-through");
        attr(div, "class", "links-page-button");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, button);
        mount_component(tr_1, button, null);
        current = true;
        if (!mounted) {
          dispose = listen(button, "click", ctx[5]);
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (!current || dirty & 16 && button_style_value !== (button_style_value = ctx2[4] ? "" : "text-decoration:line-through")) {
          attr(button, "style", button_style_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(tr_1);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_22(ctx) {
    let div;
    let value;
    let current;
    value = new Value_default({ props: { val: ctx[2] } });
    return {
      c() {
        div = element("div");
        create_component(value.$$.fragment);
        attr(div, "class", "links-page-header");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(value, div, null);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 4)
          value_changes.val = ctx2[2];
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(value);
      }
    };
  }
  function create_else_block3(ctx) {
    let paginatedlist;
    let current;
    paginatedlist = new PaginatedList_default({
      props: {
        items: ctx[3],
        sorted: false,
        pageSize: 600
      }
    });
    return {
      c() {
        create_component(paginatedlist.$$.fragment);
      },
      m(target, anchor) {
        mount_component(paginatedlist, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const paginatedlist_changes = {};
        if (dirty & 8)
          paginatedlist_changes.items = ctx2[3];
        paginatedlist.$set(paginatedlist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(paginatedlist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(paginatedlist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(paginatedlist, detaching);
      }
    };
  }
  function create_if_block_12(ctx) {
    let div1;
    let div0;
    let ol;
    let current;
    let each_value = ctx[3];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block3(get_each_context3(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        ol = element("ol");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div0, "class", "cols");
        attr(div1, "class", "links-page");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        append(div0, ol);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(ol, null);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 8) {
          each_value = ctx2[3];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context3(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block3(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(ol, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_each_block3(ctx) {
    let li;
    let value;
    let t;
    let current;
    value = new Value_default({ props: { val: ctx[6] } });
    return {
      c() {
        li = element("li");
        create_component(value.$$.fragment);
        t = space();
      },
      m(target, anchor) {
        insert(target, li, anchor);
        mount_component(value, li, null);
        append(li, t);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 8)
          value_changes.val = ctx2[6];
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(li);
        destroy_component(value);
      }
    };
  }
  function create_fragment8(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ctx[0] && ctx[0].length > 0 && create_if_block5(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (ctx2[0] && ctx2[0].length > 0) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block5(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance8($$self, $$props, $$invalidate) {
    let $linksPageSorted;
    component_subscribe($$self, linksPageSorted, ($$value) => $$invalidate(4, $linksPageSorted = $$value));
    let { links } = $$props;
    let { cols = false } = $$props;
    let { title = null } = $$props;
    let sortedList;
    linksPageSorted.subscribe((sorted) => {
      $$invalidate(3, sortedList = sorted ? links.slice().sort((a, b) => tr(a) > tr(b) ? 1 : -1) : links);
    });
    const click_handler = (e) => linksPageSorted.update((v) => !v);
    $$self.$$set = ($$props2) => {
      if ("links" in $$props2)
        $$invalidate(0, links = $$props2.links);
      if ("cols" in $$props2)
        $$invalidate(1, cols = $$props2.cols);
      if ("title" in $$props2)
        $$invalidate(2, title = $$props2.title);
    };
    return [links, cols, title, sortedList, $linksPageSorted, click_handler];
  }
  var LinksPage = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance8, create_fragment8, safe_not_equal, { links: 0, cols: 1, title: 2 });
    }
  };
  var LinksPage_default = LinksPage;

  // src/LinksList.svelte
  function get_each_context_4(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[15] = list[i];
    child_ctx[9] = i;
    return child_ctx;
  }
  function get_each_context_3(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i];
    child_ctx[9] = i;
    return child_ctx;
  }
  function get_each_context_2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[11] = list[i];
    child_ctx[13] = i;
    return child_ctx;
  }
  function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i];
    child_ctx[9] = i;
    return child_ctx;
  }
  function get_each_context4(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i];
    child_ctx[9] = i;
    return child_ctx;
  }
  function create_else_block_1(ctx) {
    return {
      c: noop,
      m: noop,
      p: noop,
      i: noop,
      o: noop,
      d: noop
    };
  }
  function create_if_block_7(ctx) {
    let span;
    let current;
    let each_value_4 = ctx[5](ctx[0].map(func_1));
    let each_blocks = [];
    for (let i = 0; i < each_value_4.length; i += 1) {
      each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        span = element("span");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(span, "class", "links-list");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(span, null);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 55) {
          each_value_4 = ctx2[5](ctx2[0].map(func_1));
          let i;
          for (i = 0; i < each_value_4.length; i += 1) {
            const child_ctx = get_each_context_4(ctx2, each_value_4, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_4(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(span, null);
            }
          }
          group_outros();
          for (i = each_value_4.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_4.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_if_block_6(ctx) {
    let span;
    let current;
    let each_value_3 = ctx[5](Object.keys(ctx[0]));
    let each_blocks = [];
    for (let i = 0; i < each_value_3.length; i += 1) {
      each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        span = element("span");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(span, "class", "links-list");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(span, null);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 55) {
          each_value_3 = ctx2[5](Object.keys(ctx2[0]));
          let i;
          for (i = 0; i < each_value_3.length; i += 1) {
            const child_ctx = get_each_context_3(ctx2, each_value_3, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_3(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(span, null);
            }
          }
          group_outros();
          for (i = each_value_3.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_3.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_if_block_4(ctx) {
    let each_1_anchor;
    let current;
    let each_value_2 = Object.keys(ctx[0]);
    let each_blocks = [];
    for (let i = 0; i < each_value_2.length; i += 1) {
      each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 17) {
          each_value_2 = Object.keys(ctx2[0]);
          let i;
          for (i = 0; i < each_value_2.length; i += 1) {
            const child_ctx = get_each_context_2(ctx2, each_value_2, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_2(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value_2.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_2.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_if_block_33(ctx) {
    let table;
    let current;
    let each_value_1 = Object.keys(ctx[0]).sort();
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        table = element("table");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(table, "class", "number-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1) {
          each_value_1 = Object.keys(ctx2[0]).sort();
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_1(ctx2, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_1(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, null);
            }
          }
          group_outros();
          for (i = each_value_1.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_1.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_if_block_23(ctx) {
    let div;
    let div_style_value;
    let current;
    let each_value = ctx[0];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block4(get_each_context4(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "cols");
        attr(div, "style", div_style_value = `columns:${ctx[1]};`);
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div, null);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1) {
          each_value = ctx2[0];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context4(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block4(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (!current || dirty & 2 && div_style_value !== (div_style_value = `columns:${ctx2[1]};`)) {
          attr(div, "style", div_style_value);
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_if_block_13(ctx) {
    let t;
    return {
      c() {
        t = text("...");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block6(ctx) {
    let t_value = rul.tr("NULL") + "";
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_else_block4(ctx) {
    let html_tag;
    let raw_value = divider(ctx[9], {
      vertical: ctx[2],
      cols: ctx[1]
    }) + "";
    let html_anchor;
    let link2;
    let current;
    link2 = new Link_default({ props: { href: ctx[15] } });
    return {
      c() {
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        create_component(link2.$$.fragment);
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
        mount_component(link2, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 6) && raw_value !== (raw_value = divider(ctx2[9], {
          vertical: ctx2[2],
          cols: ctx2[1]
        }) + ""))
          html_tag.p(raw_value);
        const link_changes = {};
        if (dirty & 33)
          link_changes.href = ctx2[15];
        link2.$set(link_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(link2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(link2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
        destroy_component(link2, detaching);
      }
    };
  }
  function create_if_block_8(ctx) {
    let div;
    let linkslist;
    let t;
    let current;
    linkslist = new LinksList_default({
      props: {
        items: ctx[15],
        depth: ctx[4] - 1
      }
    });
    return {
      c() {
        div = element("div");
        create_component(linkslist.$$.fragment);
        t = space();
        attr(div, "class", "sublist");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(linkslist, div, null);
        append(div, t);
        current = true;
      },
      p(ctx2, dirty) {
        const linkslist_changes = {};
        if (dirty & 33)
          linkslist_changes.items = ctx2[15];
        if (dirty & 16)
          linkslist_changes.depth = ctx2[4] - 1;
        linkslist.$set(linkslist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(linkslist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linkslist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(linkslist);
      }
    };
  }
  function create_each_block_4(ctx) {
    let show_if;
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block_8, create_else_block4];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (dirty & 33)
        show_if = null;
      if (show_if == null)
        show_if = !!Array.isArray(ctx2[15]);
      if (show_if)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type_1(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_each_block_3(ctx) {
    let html_tag;
    let raw_value = divider(ctx[9], {
      vertical: ctx[2],
      cols: ctx[1]
    }) + "";
    let t0;
    let value;
    let t1;
    let link2;
    let current;
    value = new Value_default({
      props: {
        val: ctx[0][ctx[7]],
        depth: ctx[4] - 1
      }
    });
    link2 = new Link_default({ props: { href: ctx[7] } });
    return {
      c() {
        html_tag = new HtmlTag(false);
        t0 = text("\u200F\u200F\u200E");
        create_component(value.$$.fragment);
        t1 = text("\xA0\u200E");
        create_component(link2.$$.fragment);
        html_tag.a = t0;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, t0, anchor);
        mount_component(value, target, anchor);
        insert(target, t1, anchor);
        mount_component(link2, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 6) && raw_value !== (raw_value = divider(ctx2[9], {
          vertical: ctx2[2],
          cols: ctx2[1]
        }) + ""))
          html_tag.p(raw_value);
        const value_changes = {};
        if (dirty & 33)
          value_changes.val = ctx2[0][ctx2[7]];
        if (dirty & 16)
          value_changes.depth = ctx2[4] - 1;
        value.$set(value_changes);
        const link_changes = {};
        if (dirty & 33)
          link_changes.href = ctx2[7];
        link2.$set(link_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        transition_in(link2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        transition_out(link2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          html_tag.d();
        if (detaching)
          detach(t0);
        destroy_component(value, detaching);
        if (detaching)
          detach(t1);
        destroy_component(link2, detaching);
      }
    };
  }
  function create_if_block_5(ctx) {
    let value;
    let t;
    let current;
    value = new Value_default({
      props: {
        val: ctx[11],
        depth: ctx[4] - 1
      }
    });
    return {
      c() {
        create_component(value.$$.fragment);
        t = text(" :");
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        insert(target, t, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[11];
        if (dirty & 16)
          value_changes.depth = ctx2[4] - 1;
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
        if (detaching)
          detach(t);
      }
    };
  }
  function create_each_block_2(ctx) {
    let div1;
    let show_if = !Array.isArray(ctx[0]);
    let t0;
    let div0;
    let value;
    let t1;
    let div1_class_value;
    let current;
    let if_block = show_if && create_if_block_5(ctx);
    value = new Value_default({
      props: {
        val: ctx[0][ctx[11]],
        depth: ctx[4] - 1
      }
    });
    return {
      c() {
        div1 = element("div");
        if (if_block)
          if_block.c();
        t0 = space();
        div0 = element("div");
        create_component(value.$$.fragment);
        t1 = space();
        attr(div0, "class", "sublist");
        attr(div1, "class", div1_class_value = ctx[13] > 0 && "top-border");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        if (if_block)
          if_block.m(div1, null);
        append(div1, t0);
        append(div1, div0);
        mount_component(value, div0, null);
        append(div1, t1);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1)
          show_if = !Array.isArray(ctx2[0]);
        if (show_if) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_5(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(div1, t0);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[0][ctx2[11]];
        if (dirty & 16)
          value_changes.depth = ctx2[4] - 1;
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        if (if_block)
          if_block.d();
        destroy_component(value);
      }
    };
  }
  function create_each_block_1(ctx) {
    let tr2;
    let td0;
    let link0;
    let t0;
    let td1;
    let em;
    let link1;
    let t1;
    let current;
    link0 = new Link_default({ props: { href: ctx[7] } });
    link1 = new Link_default({
      props: { href: ctx[0][ctx[7]] }
    });
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        create_component(link0.$$.fragment);
        t0 = space();
        td1 = element("td");
        em = element("em");
        create_component(link1.$$.fragment);
        t1 = space();
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        mount_component(link0, td0, null);
        append(tr2, t0);
        append(tr2, td1);
        append(td1, em);
        mount_component(link1, em, null);
        append(tr2, t1);
        current = true;
      },
      p(ctx2, dirty) {
        const link0_changes = {};
        if (dirty & 1)
          link0_changes.href = ctx2[7];
        link0.$set(link0_changes);
        const link1_changes = {};
        if (dirty & 1)
          link1_changes.href = ctx2[0][ctx2[7]];
        link1.$set(link1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(link0.$$.fragment, local);
        transition_in(link1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(link0.$$.fragment, local);
        transition_out(link1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_component(link0);
        destroy_component(link1);
      }
    };
  }
  function create_each_block4(ctx) {
    let div;
    let link2;
    let current;
    link2 = new Link_default({ props: { href: ctx[7] } });
    return {
      c() {
        div = element("div");
        create_component(link2.$$.fragment);
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(link2, div, null);
        current = true;
      },
      p(ctx2, dirty) {
        const link_changes = {};
        if (dirty & 1)
          link_changes.href = ctx2[7];
        link2.$set(link_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(link2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(link2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(link2);
      }
    };
  }
  function create_fragment9(ctx) {
    let show_if;
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [
      create_if_block6,
      create_if_block_13,
      create_if_block_23,
      create_if_block_33,
      create_if_block_4,
      create_if_block_6,
      create_if_block_7,
      create_else_block_1
    ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (dirty & 1)
        show_if = null;
      if (ctx2[0] == null)
        return 0;
      if (ctx2[4] == 0)
        return 1;
      if (ctx2[1])
        return 2;
      if (ctx2[3])
        return 3;
      if (show_if == null)
        show_if = !!(Object.values(ctx2[0]) || []).some(func);
      if (show_if)
        return 4;
      if (ctx2[0].length == null)
        return 5;
      if (ctx2[0].map)
        return 6;
      return 7;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  var func = (a) => typeof a == "object";
  var func_1 = (i) => i?.type || i;
  function instance9($$self, $$props, $$invalidate) {
    let { items } = $$props;
    let { cols = 0 } = $$props;
    let { vertical = false } = $$props;
    let { numberTable = false } = $$props;
    let { depth = 2 } = $$props;
    let { sorted } = $$props;
    let sorter;
    if (sorted == null) {
      sorted = items.length > 9;
    }
    $$self.$$set = ($$props2) => {
      if ("items" in $$props2)
        $$invalidate(0, items = $$props2.items);
      if ("cols" in $$props2)
        $$invalidate(1, cols = $$props2.cols);
      if ("vertical" in $$props2)
        $$invalidate(2, vertical = $$props2.vertical);
      if ("numberTable" in $$props2)
        $$invalidate(3, numberTable = $$props2.numberTable);
      if ("depth" in $$props2)
        $$invalidate(4, depth = $$props2.depth);
      if ("sorted" in $$props2)
        $$invalidate(6, sorted = $$props2.sorted);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 65) {
        $: {
          if (items instanceof Set) {
            $$invalidate(0, items = [...items]);
          }
          $$invalidate(5, sorter = sorted ? (a) => rul.sortStrings(a) : (a) => a);
        }
      }
    };
    return [items, cols, vertical, numberTable, depth, sorter, sorted];
  }
  var LinksList_1 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance9, create_fragment9, safe_not_equal, {
        items: 0,
        cols: 1,
        vertical: 2,
        numberTable: 3,
        depth: 4,
        sorted: 6
      });
    }
  };
  var LinksList_default = LinksList_1;

  // src/Value.svelte
  function create_else_block5(ctx) {
    let tr2;
    let current;
    tr2 = new Tr_default({
      props: {
        s: ctx[0],
        simple: ctx[3],
        nobr: ctx[4],
        icon: ctx[5],
        capital: ctx[6]
      }
    });
    return {
      c() {
        create_component(tr2.$$.fragment);
      },
      m(target, anchor) {
        mount_component(tr2, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const tr_changes = {};
        if (dirty & 1)
          tr_changes.s = ctx2[0];
        if (dirty & 8)
          tr_changes.simple = ctx2[3];
        if (dirty & 16)
          tr_changes.nobr = ctx2[4];
        if (dirty & 32)
          tr_changes.icon = ctx2[5];
        if (dirty & 64)
          tr_changes.capital = ctx2[6];
        tr2.$set(tr_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(tr2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(tr2, detaching);
      }
    };
  }
  function create_if_block_82(ctx) {
    let img;
    let current;
    img = new Img_default({
      props: {
        src: ctx[0],
        style: "max-width:320px"
      }
    });
    return {
      c() {
        create_component(img.$$.fragment);
      },
      m(target, anchor) {
        mount_component(img, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const img_changes = {};
        if (dirty & 1)
          img_changes.src = ctx2[0];
        img.$set(img_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(img.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(img.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(img, detaching);
      }
    };
  }
  function create_if_block_72(ctx) {
    let link2;
    let current;
    link2 = new Link_default({
      props: {
        href: ctx[0],
        icon: ctx[5]
      }
    });
    return {
      c() {
        create_component(link2.$$.fragment);
      },
      m(target, anchor) {
        mount_component(link2, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const link_changes = {};
        if (dirty & 1)
          link_changes.href = ctx2[0];
        if (dirty & 32)
          link_changes.icon = ctx2[5];
        link2.$set(link_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(link2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(link2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(link2, detaching);
      }
    };
  }
  function create_if_block_62(ctx) {
    let em;
    let t_value = ctx[0].toLocaleString("ru-RU", { maximumFractionDigits: 4 }).replace(",", ".") + "";
    let t;
    return {
      c() {
        em = element("em");
        t = text(t_value);
        attr(em, "class", "num");
      },
      m(target, anchor) {
        insert(target, em, anchor);
        append(em, t);
      },
      p(ctx2, dirty) {
        if (dirty & 1 && t_value !== (t_value = ctx2[0].toLocaleString("ru-RU", { maximumFractionDigits: 4 }).replace(",", ".") + ""))
          set_data(t, t_value);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(em);
      }
    };
  }
  function create_if_block_52(ctx) {
    let span;
    let tr2;
    let current;
    tr2 = new Tr_default({ props: { s: ctx[0].toString() } });
    return {
      c() {
        span = element("span");
        create_component(tr2.$$.fragment);
        set_style(span, "color", ctx[0] ? "lime" : "red");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        mount_component(tr2, span, null);
        current = true;
      },
      p(ctx2, dirty) {
        const tr_changes = {};
        if (dirty & 1)
          tr_changes.s = ctx2[0].toString();
        tr2.$set(tr_changes);
        if (!current || dirty & 1) {
          set_style(span, "color", ctx2[0] ? "lime" : "red");
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        destroy_component(tr2);
      }
    };
  }
  function create_if_block_42(ctx) {
    let linkslist;
    let current;
    linkslist = new LinksList_default({ props: { items: ctx[0] } });
    return {
      c() {
        create_component(linkslist.$$.fragment);
      },
      m(target, anchor) {
        mount_component(linkslist, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const linkslist_changes = {};
        if (dirty & 1)
          linkslist_changes.items = ctx2[0];
        linkslist.$set(linkslist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(linkslist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linkslist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(linkslist, detaching);
      }
    };
  }
  function create_if_block_34(ctx) {
    let linkslist;
    let current;
    linkslist = new LinksList_default({
      props: { items: ctx[0], vertical: false }
    });
    return {
      c() {
        create_component(linkslist.$$.fragment);
      },
      m(target, anchor) {
        mount_component(linkslist, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const linkslist_changes = {};
        if (dirty & 1)
          linkslist_changes.items = ctx2[0];
        linkslist.$set(linkslist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(linkslist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linkslist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(linkslist, detaching);
      }
    };
  }
  function create_if_block_24(ctx) {
    let await_block_anchor;
    let promise;
    let info = {
      ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block2,
      then: create_then_block2,
      catch: create_catch_block2,
      value: 7
    };
    handle_promise(promise = rul.obsSprite(ctx[1], ctx[0]), info);
    return {
      c() {
        await_block_anchor = empty();
        info.block.c();
      },
      m(target, anchor) {
        insert(target, await_block_anchor, anchor);
        info.block.m(target, info.anchor = anchor);
        info.mount = () => await_block_anchor.parentNode;
        info.anchor = await_block_anchor;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        info.ctx = ctx;
        if (dirty & 3 && promise !== (promise = rul.obsSprite(ctx[1], ctx[0])) && handle_promise(promise, info)) {
        } else {
          update_await_block_branch(info, ctx, dirty);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(await_block_anchor);
        info.block.d(detaching);
        info.token = null;
        info = null;
      }
    };
  }
  function create_if_block_14(ctx) {
    let t;
    return {
      c() {
        t = text("\u2012");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block7(ctx) {
    let t;
    return {
      c() {
        t = text("...");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_catch_block2(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_then_block2(ctx) {
    let img;
    let img_src_value;
    return {
      c() {
        img = element("img");
        if (!src_url_equal(img.src, img_src_value = ctx[7]))
          attr(img, "src", img_src_value);
        attr(img, "alt", ctx[0]);
        set_style(img, "max-width", "320px");
      },
      m(target, anchor) {
        insert(target, img, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 3 && !src_url_equal(img.src, img_src_value = ctx2[7])) {
          attr(img, "src", img_src_value);
        }
        if (dirty & 1) {
          attr(img, "alt", ctx2[0]);
        }
      },
      d(detaching) {
        if (detaching)
          detach(img);
      }
    };
  }
  function create_pending_block2(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_fragment10(ctx) {
    let show_if;
    let show_if_1;
    let show_if_2;
    let show_if_3;
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [
      create_if_block7,
      create_if_block_14,
      create_if_block_24,
      create_if_block_34,
      create_if_block_42,
      create_if_block_52,
      create_if_block_62,
      create_if_block_72,
      create_if_block_82,
      create_else_block5
    ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (dirty & 1)
        show_if = null;
      if (dirty & 1)
        show_if_1 = null;
      if (dirty & 9)
        show_if_2 = null;
      if (dirty & 1)
        show_if_3 = null;
      if (ctx2[2] == 0)
        return 0;
      if (ctx2[0] == null)
        return 1;
      if (ctx2[1])
        return 2;
      if (show_if == null)
        show_if = !!Array.isArray(ctx2[0]);
      if (show_if)
        return 3;
      if (ctx2[0] instanceof Object)
        return 4;
      if (ctx2[0] === true || ctx2[0] === false)
        return 5;
      if (show_if_1 == null)
        show_if_1 = !!!isNaN(+ctx2[0]);
      if (show_if_1)
        return 6;
      if (show_if_2 == null)
        show_if_2 = !!(rul.article(ctx2[0]) && !ctx2[3]);
      if (show_if_2)
        return 7;
      if (show_if_3 == null)
        show_if_3 = !!rul.hasSprite(ctx2[0]);
      if (show_if_3)
        return 8;
      return 9;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance10($$self, $$props, $$invalidate) {
    let { val } = $$props;
    let { obs = null } = $$props;
    let { depth = 2 } = $$props;
    let { simple = false } = $$props;
    let { nobr = 30 } = $$props;
    let { icon = null } = $$props;
    let { capital: capital2 = false } = $$props;
    $$self.$$set = ($$props2) => {
      if ("val" in $$props2)
        $$invalidate(0, val = $$props2.val);
      if ("obs" in $$props2)
        $$invalidate(1, obs = $$props2.obs);
      if ("depth" in $$props2)
        $$invalidate(2, depth = $$props2.depth);
      if ("simple" in $$props2)
        $$invalidate(3, simple = $$props2.simple);
      if ("nobr" in $$props2)
        $$invalidate(4, nobr = $$props2.nobr);
      if ("icon" in $$props2)
        $$invalidate(5, icon = $$props2.icon);
      if ("capital" in $$props2)
        $$invalidate(6, capital2 = $$props2.capital);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 3) {
        $: {
          if (obs) {
            console.log(rul.obsSprite(obs, val));
          }
        }
      }
    };
    return [val, obs, depth, simple, nobr, icon, capital2];
  }
  var Value = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance10, create_fragment10, safe_not_equal, {
        val: 0,
        obs: 1,
        depth: 2,
        simple: 3,
        nobr: 4,
        icon: 5,
        capital: 6
      });
    }
  };
  var Value_default = Value;

  // src/BaseServiceList.svelte
  function get_each_context5(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i];
    child_ctx[4] = i;
    return child_ctx;
  }
  function create_each_block5(ctx) {
    let html_tag;
    let raw_value = ctx[4] == 0 ? "" : ctx[1] ? "</br>" : ", ";
    let t;
    let link2;
    let current;
    link2 = new Link_default({ props: { href: ctx[2] } });
    return {
      c() {
        html_tag = new HtmlTag(false);
        t = space();
        create_component(link2.$$.fragment);
        html_tag.a = t;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, t, anchor);
        mount_component(link2, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 2) && raw_value !== (raw_value = ctx2[4] == 0 ? "" : ctx2[1] ? "</br>" : ", "))
          html_tag.p(raw_value);
        const link_changes = {};
        if (dirty & 1)
          link_changes.href = ctx2[2];
        link2.$set(link_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(link2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(link2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          html_tag.d();
        if (detaching)
          detach(t);
        destroy_component(link2, detaching);
      }
    };
  }
  function create_fragment11(ctx) {
    let each_1_anchor;
    let current;
    let each_value = ctx[0];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block5(get_each_context5(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 3) {
          each_value = ctx2[0];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context5(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block5(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function instance11($$self, $$props, $$invalidate) {
    let { items } = $$props;
    let { vertical = false } = $$props;
    $$self.$$set = ($$props2) => {
      if ("items" in $$props2)
        $$invalidate(0, items = $$props2.items);
      if ("vertical" in $$props2)
        $$invalidate(1, vertical = $$props2.vertical);
    };
    return [items, vertical];
  }
  var BaseServiceList = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance11, create_fragment11, safe_not_equal, { items: 0, vertical: 1 });
    }
  };
  var BaseServiceList_default = BaseServiceList;

  // src/SpecialBonus.svelte
  function get_each_context6(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[4] = list[i];
    child_ctx[6] = i;
    return child_ctx;
  }
  function create_if_block_35(ctx) {
    let t;
    return {
      c() {
        t = text("+");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_25(ctx) {
    let t_value = " +";
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_else_block6(ctx) {
    let nobr;
    let html_tag;
    let raw0_value = ctx[4][0] + "";
    let html_anchor;
    let html_tag_1;
    let raw1_value = ctx[4][1] != 1 ? `\xD7<em>${ctx[4][1]}</em>` : "";
    return {
      c() {
        nobr = element("nobr");
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        html_tag_1 = new HtmlTag(false);
        html_tag.a = html_anchor;
        html_tag_1.a = null;
      },
      m(target, anchor) {
        insert(target, nobr, anchor);
        html_tag.m(raw0_value, nobr);
        append(nobr, html_anchor);
        html_tag_1.m(raw1_value, nobr);
      },
      p(ctx2, dirty) {
        if (dirty & 2 && raw0_value !== (raw0_value = ctx2[4][0] + ""))
          html_tag.p(raw0_value);
        if (dirty & 2 && raw1_value !== (raw1_value = ctx2[4][1] != 1 ? `\xD7<em>${ctx2[4][1]}</em>` : ""))
          html_tag_1.p(raw1_value);
      },
      d(detaching) {
        if (detaching)
          detach(nobr);
      }
    };
  }
  function create_if_block_15(ctx) {
    let t_value = ctx[4][1] + "";
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 2 && t_value !== (t_value = ctx2[4][1] + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block8(ctx) {
    let t_value = ctx[4][1] * 100 + "";
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 2 && t_value !== (t_value = ctx2[4][1] * 100 + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_each_block6(ctx) {
    let t;
    let if_block1_anchor;
    let if_block0 = ctx[6] != 0 && create_if_block_25(ctx);
    function select_block_type(ctx2, dirty) {
      if (ctx2[4][2] == "flatHundred")
        return create_if_block8;
      if (ctx2[4][2] == "flatOne")
        return create_if_block_15;
      return create_else_block6;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block1 = current_block_type(ctx);
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t = space();
        if_block1.c();
        if_block1_anchor = empty();
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t, anchor);
        if_block1.m(target, anchor);
        insert(target, if_block1_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1.d(1);
          if_block1 = current_block_type(ctx2);
          if (if_block1) {
            if_block1.c();
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        }
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t);
        if_block1.d(detaching);
        if (detaching)
          detach(if_block1_anchor);
      }
    };
  }
  function create_fragment12(ctx) {
    let t;
    let each_1_anchor;
    let if_block = ctx[1].length > 0 && ctx[0] && create_if_block_35(ctx);
    let each_value = ctx[1];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block6(get_each_context6(ctx, each_value, i));
    }
    return {
      c() {
        if (if_block)
          if_block.c();
        t = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, t, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (ctx2[1].length > 0 && ctx2[0]) {
          if (if_block) {
          } else {
            if_block = create_if_block_35(ctx2);
            if_block.c();
            if_block.m(t.parentNode, t);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (dirty & 2) {
          each_value = ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context6(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block6(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(t);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function instance12($$self, $$props, $$invalidate) {
    let { bonus } = $$props;
    let { plus = false } = $$props;
    function f(bonus2) {
      if (!bonus2)
        return [];
      let flat2 = [];
      for (let type2 of Object.keys(bonus2)) {
        if (bonus2[type2].length) {
          for (let power in bonus2[type2]) {
            let b = bonus2[type2][power];
            if (b != 0) {
              power = power * 1 + 1;
              flat2.push([
                `<a href="##${type2}">${rul.tr(type2, { icon: "compact" })}</a>` + (power == 1 ? "" : "<sup>" + power + "</sup>"),
                b,
                type2
              ]);
            }
          }
        } else {
          if (bonus2[type2] != 0)
            flat2.push([
              `<a href="##${type2}">${rul.tr(type2, { icon: "compact" })}</a>`,
              bonus2[type2],
              type2
            ]);
        }
      }
      flat2 = flat2.sort((a, b) => a[0] == "flatHundred" || a[0] == "flatOne" || a[0] < b[0] ? -1 : 1);
      return flat2;
    }
    let flat;
    $$self.$$set = ($$props2) => {
      if ("bonus" in $$props2)
        $$invalidate(2, bonus = $$props2.bonus);
      if ("plus" in $$props2)
        $$invalidate(0, plus = $$props2.plus);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 4) {
        $: {
          $$invalidate(1, flat = f(bonus));
        }
      }
    };
    return [plus, flat, bonus];
  }
  var SpecialBonus = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance12, create_fragment12, safe_not_equal, { bonus: 2, plus: 0 });
    }
  };
  var SpecialBonus_default = SpecialBonus;

  // src/MainTable.svelte
  function get_each_context7(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[9] = list[i][0];
    child_ctx[10] = list[i][1];
    return child_ctx;
  }
  var get_wide_slot_changes = (dirty) => ({
    key: dirty & 32,
    prop: dirty & 32
  });
  var get_wide_slot_context = (ctx) => ({
    key: ctx[9],
    prop: ctx[10]
  });
  var get_default_slot_changes2 = (dirty) => ({
    key: dirty & 32,
    prop: dirty & 32
  });
  var get_default_slot_context2 = (ctx) => ({
    key: ctx[9],
    prop: ctx[10]
  });
  function create_else_block7(ctx) {
    let table;
    let thead;
    let td;
    let html_tag;
    let raw0_value = rul.tr(ctx[1]) + "";
    let t0;
    let html_tag_1;
    let raw1_value = rul.tr(ctx[2]) + "";
    let t1;
    let current;
    let each_value = ctx[5].all;
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block7(get_each_context7(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        table = element("table");
        thead = element("thead");
        td = element("td");
        html_tag = new HtmlTag(false);
        t0 = space();
        html_tag_1 = new HtmlTag(false);
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        html_tag.a = t0;
        html_tag_1.a = null;
        attr(td, "colspan", "2");
        attr(table, "class", "main-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        append(table, thead);
        append(thead, td);
        html_tag.m(raw0_value, td);
        append(td, t0);
        html_tag_1.m(raw1_value, td);
        append(table, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 2) && raw0_value !== (raw0_value = rul.tr(ctx2[1]) + ""))
          html_tag.p(raw0_value);
        if ((!current || dirty & 4) && raw1_value !== (raw1_value = rul.tr(ctx2[2]) + ""))
          html_tag_1.p(raw1_value);
        if (dirty & 184) {
          each_value = ctx2[5].all;
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context7(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block7(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_if_block9(ctx) {
    let t;
    return {
      c() {
        t = text("No entry in main table");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_43(ctx) {
    let tr2;
    let td0;
    let value0;
    let td1;
    let value1;
    let t;
    let current;
    value0 = new Value_default({ props: { val: ctx[9] } });
    value1 = new Value_default({ props: { val: ctx[10] } });
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        create_component(value0.$$.fragment);
        td1 = element("td");
        create_component(value1.$$.fragment);
        t = space();
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        mount_component(value0, td0, null);
        append(tr2, td1);
        mount_component(value1, td1, null);
        append(tr2, t);
        current = true;
      },
      p(ctx2, dirty) {
        const value0_changes = {};
        if (dirty & 32)
          value0_changes.val = ctx2[9];
        value0.$set(value0_changes);
        const value1_changes = {};
        if (dirty & 32)
          value1_changes.val = ctx2[10];
        value1.$set(value1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value0.$$.fragment, local);
        transition_in(value1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value0.$$.fragment, local);
        transition_out(value1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_component(value0);
        destroy_component(value1);
      }
    };
  }
  function create_if_block_36(ctx) {
    let current;
    const wide_slot_template = ctx[8].wide;
    const wide_slot = create_slot(wide_slot_template, ctx, ctx[7], get_wide_slot_context);
    return {
      c() {
        if (wide_slot)
          wide_slot.c();
      },
      m(target, anchor) {
        if (wide_slot) {
          wide_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (wide_slot) {
          if (wide_slot.p && (!current || dirty & 160)) {
            update_slot_base(wide_slot, wide_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(wide_slot_template, ctx2[7], dirty, get_wide_slot_changes), get_wide_slot_context);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(wide_slot, local);
        current = true;
      },
      o(local) {
        transition_out(wide_slot, local);
        current = false;
      },
      d(detaching) {
        if (wide_slot)
          wide_slot.d(detaching);
      }
    };
  }
  function create_if_block_26(ctx) {
    let tr2;
    let td0;
    let value;
    let td1;
    let t;
    let current;
    value = new Value_default({ props: { val: ctx[9] } });
    const default_slot_template = ctx[8].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[7], get_default_slot_context2);
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        create_component(value.$$.fragment);
        td1 = element("td");
        if (default_slot)
          default_slot.c();
        t = space();
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        mount_component(value, td0, null);
        append(tr2, td1);
        if (default_slot) {
          default_slot.m(td1, null);
        }
        append(tr2, t);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 32)
          value_changes.val = ctx2[9];
        value.$set(value_changes);
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 160)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, get_default_slot_changes2), get_default_slot_context2);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_component(value);
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_if_block_16(ctx) {
    return {
      c: noop,
      m: noop,
      p: noop,
      i: noop,
      o: noop,
      d: noop
    };
  }
  function create_each_block7(ctx) {
    let show_if;
    let show_if_1;
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block_16, create_if_block_26, create_if_block_36, create_if_block_43];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (dirty & 40)
        show_if = null;
      if (dirty & 48)
        show_if_1 = null;
      if (ctx2[9][0] == "_")
        return 0;
      if (show_if == null)
        show_if = !!ctx2[3].includes(ctx2[9]);
      if (show_if)
        return 1;
      if (show_if_1 == null)
        show_if_1 = !!ctx2[4].includes(ctx2[9]);
      if (show_if_1)
        return 2;
      if (ctx2[10] != null && !(ctx2[10].length == 0))
        return 3;
      return -1;
    }
    if (~(current_block_type_index = select_block_type_1(ctx, -1))) {
      if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    }
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].m(target, anchor);
        }
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if (~current_block_type_index) {
            if_blocks[current_block_type_index].p(ctx2, dirty);
          }
        } else {
          if (if_block) {
            group_outros();
            transition_out(if_blocks[previous_block_index], 1, 1, () => {
              if_blocks[previous_block_index] = null;
            });
            check_outros();
          }
          if (~current_block_type_index) {
            if_block = if_blocks[current_block_type_index];
            if (!if_block) {
              if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
              if_block.c();
            } else {
              if_block.p(ctx2, dirty);
            }
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          } else {
            if_block = null;
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].d(detaching);
        }
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_fragment13(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block9, create_else_block7];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[0] == null)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance13($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let { entry } = $$props;
    let { sort = {} } = $$props;
    let { title } = $$props;
    let { subtitle = "" } = $$props;
    let { special = [] } = $$props;
    let { wide = [] } = $$props;
    let sorted;
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(0, entry = $$props2.entry);
      if ("sort" in $$props2)
        $$invalidate(6, sort = $$props2.sort);
      if ("title" in $$props2)
        $$invalidate(1, title = $$props2.title);
      if ("subtitle" in $$props2)
        $$invalidate(2, subtitle = $$props2.subtitle);
      if ("special" in $$props2)
        $$invalidate(3, special = $$props2.special);
      if ("wide" in $$props2)
        $$invalidate(4, wide = $$props2.wide);
      if ("$$scope" in $$props2)
        $$invalidate(7, $$scope = $$props2.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 81) {
        $: {
          console.log("MT", entry, sort, wide);
          $$invalidate(5, sorted = sortFirstLast(entry, sort));
        }
      }
    };
    return [entry, title, subtitle, special, wide, sorted, sort, $$scope, slots];
  }
  var MainTable = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance13, create_fragment13, safe_not_equal, {
        entry: 0,
        sort: 6,
        title: 1,
        subtitle: 2,
        special: 3,
        wide: 4
      });
    }
  };
  var MainTable_default = MainTable;

  // src/Components.ts
  var tr = (t) => rul.tr(t);
  var divider = (i, { vertical, cols } = { vertical: false, cols: 0 }) => i == 0 ? "" : vertical ? "</br>" : `<span class='list-divider'>&nbsp\xB7${i % (cols || 1) ? "&nbsp" : " "}</span>`;
  var emptyImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAAAANSURBVBhXY/j//z8DAAj8Av6IXwbgAAAAAElFTkSuQmCC";
  var favicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAMDAwMJCAgICAoKCg0NDQoTEQoTEgsUEg0XFQ0aGR4eHg0tKxMlIhUoJhgoKQ4zLw42LxUyLxcyLw45Mw45NRY0MBowMB81NxI9ORM/OBg+Ox8+OiEzMiE0NCA9PC89OjU2Nj09PRZDPRRFPR9BPBxEPSxCPxdEQRlFQhNLQhVKQxRMRBdPRR1MRh5ORx5VTiRKRCRKRihNSShOSDhHRDJIRTVLSDdOSjtKSD5KSiJVTClXTShVTzdTTSlXUCpWUSpXUCNbVCddVS9aUitfVyxcVz1SUDBYUiNhWStmXipuYThmYzdoYDdqYzl1az13bzV7ckVJSEBWUUNXU0hVVUBZV0JcWE9dXU5jW0pgXkZkYE1kYU1kYEZsZFBjYVBjYklwak51bUJ9dF91c1d4clt5dFp6dVt7dl55dF98eGBoaGZoaGhvbW1tbWdwb2J1b2Vyc2J6eWZ5eGN/e2h5eD2CeUGBd2aBfUiMgkOQg02Sh0qViU+ViUabi02Yjl6UjVabjVKfkWKFgGGLhX+AgH+KiWOakmick0ypm1WgklGhlFKpnFKrnlGwn1OvoFauoVWzpFaypVmwpFe8rlu5qW6xpmG8q2u5q265rX+2q1rBs17Jt1vLvF/NvVzPvGTDtmDHtmDIt2LIt2fJt2bLtmLGuGHHumXFuWbFumjHuW7FumHJuGHJuGPIuGDKuWPLuWPJu2DKumDKu2PKumLLumPLumPLu2XJuWXLuWXLu2TKumHNuWHNumDNu2PMu2TMu2XNu2HJvGPLvWLLvGPLvmXJvWXKvWbKvWfIvmHNvWHMvGHMvWLNvWLMvWPMvWPNvmfPvWnIumrJu2/Iu2jJvW7Lv2vMvWjOvGjNv2vNvm/MvW/Mv3LOv27QvmbPwG/RwnDSwnXSwX/Sx3rWyoePjYiMi4mSkJSXl5qfn6KlpIbDu4LEuYrIvYHSxIPTx4LUx47UyYrVzYPZyonYy5re08zMzMvQz9Hb2drf39rg39rh4N7k5ODj4uvs7AAAAOGYdbwAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACCElEQVQ4T2P4TwCQpCA3pSIrPaMkPhvKBwOEAqvUt1/u3rp86fqjaXFQIRBAKGh4d2PnruPnzp08fnijClQMCOAKmj9snbf3zJnz5/fsurppiQRUFElBx61t+85DwZ6F0lBRJAVvNqzZD5U/f2qzF1QUpiAvL8jOxMPe3t7R0dHGwdbFRCYvLw8sA1XAyvD3lSIDEHAZqoIohp/c36BmwyilP79ZgBJG5ycBScZfzP9gdsPpl63fgVJHzh/hZWDIefEDJg5X8IwjmJOd/dKx8+d3sLNxhjBBhREK/ieuX75r8/lz589fmLd9QZ04VBRJwf8Z83dfOA9UcfzsugmuUDEgQCiIvrQRHAi7N0ytDoWKAQFCwX/r5ScO7jx6+viUGiGoCAggKfivu2zextNrJtaKQflggKzgv3zlhN56N4QDQQBZQYH5f36+/P+lMVA+GMAVRCS0fG4EMeK/fvANMwOLgQBMgdXrDw9X6IOZPmsu3qt6CmYCAUxBW7KzzsH9nhb/i9tvNIn6QZSCALIb1FZfmO70aWm5HJQPBsgK/qt3rrx/vAzKgQJkBc+T7vRPXn9FA8qFALiCkszCWXe6BP9rzt3nH5UZDhVFKEj4eO/JTW8FIMuk+9TDnT0QUSCAmyBlEDg7AMRwn9mnq8wDFgMBJDfISQqCaS0RUzANAciOxAoIKPj/HwDL5k4xG94BrQAAAABJRU5ErkJggg==";
  var tableSections = [
    "FACILITIES",
    "COMMENDATIONS",
    "CRAFTS",
    "ARMORS",
    "CRAFT_WEAPONS",
    "SOLDIERS",
    "ARMORS",
    "MANUFACTURE"
  ];
  function invisible(t) {
    return `<span style="visibility:hidden">${t}</span>`;
  }

  // src/load.ts
  var import_jszip = __toESM(require_jszip_min());
  async function unpackZip(text2) {
    let jszip = new import_jszip.default();
    let data = await jszip.loadAsync(text2, { base64: true });
    let file = data.file("main");
    text2 = await file.async("string");
    return text2;
  }
  async function packZip(text2) {
    let jszip = new import_jszip.default();
    jszip.file("main", text2);
    let file = jszip.generateAsync({
      type: "base64",
      compression: "DEFLATE",
      compressionOptions: {
        level: 6
      }
    });
    return file;
  }
  var OXCPath = "/";
  var PediaPath = "";
  async function loadPacked() {
    let packed = window["xpedia"];
    if (packed != null) {
      let json2 = await unpackZip(packed);
      let data = JSON.parse(json2);
      return data;
    }
  }
  async function loadFromFiles() {
    let [options, modDirs, xpediaDirs] = await Promise.all([
      readYaml(`${OXCPath}user/options.cfg`),
      listDir(`${OXCPath}user/mods/`, true),
      listDir(`${PediaPath}mods/`, true)
    ]);
    if (options == null) {
      warn("can't find user/options.cfg file. Run this app from the root OXCE directory");
      return;
    }
    modDirs = [`${OXCPath}standard/xcom1/`, ...modDirs];
    let allModDirs = [...modDirs, ...xpediaDirs];
    let modMetadataById = {};
    let modMetadata = await Promise.all(allModDirs.map((dir) => readYaml(`${dir}metadata.yml`)));
    for (let i in modMetadata) {
      let data = modMetadata[i];
      if (data == null)
        continue;
      let dir = allModDirs[i];
      modMetadataById[data.id] = { ...data, dir };
    }
    let activeMods = ["xcom1", ...options.mods.filter((m) => m.active).map((m) => m.id)];
    modMetadata = modMetadata.filter((m) => activeMods.includes(m.id));
    let masterModIds = modMetadata.filter((m) => m.isMaster).map((m) => m.id);
    modMetadata = modMetadata.filter((m) => m.isMaster || masterModIds.includes(m.master));
    activeMods = modMetadata.map((m) => m.id);
    let xpediaMods = Object.keys(modMetadataById).filter((k) => {
      let data = modMetadataById[k];
      return (data.master == null || activeMods.includes(data.master)) && xpediaDirs.includes(data.dir);
    });
    activeMods = [...activeMods, ...xpediaMods];
    let lname = options.options.language;
    let activeModsMetadata = activeMods.map((id) => modMetadataById[id]);
    for (let mod of activeModsMetadata)
      mod.rulDir = mod.id == "xcom1" ? mod.dir : `${mod.dir}Ruleset/`;
    let langDirs = activeModsMetadata.map((m) => `${m.dir}Language/`);
    langDirs.splice(1, 0, "/standard/xcom1/Language/OXCE/");
    let [ruls, langs] = await Promise.all([
      loadRulsFromMods(activeModsMetadata),
      loadLanguagesFromDirs(activeModsMetadata.map((m) => `${m.dir}Language/`))
    ]);
    return { ruls, langs, mods: activeModsMetadata };
  }
  var extRegexp = /^(.+)\.([0-9a-z\-]+)?$/i;
  function splitName(name) {
    let m = name.match(extRegexp);
    return m ? { body: m[1], ext: m[2] } : { body: name, ext: "" };
  }
  async function loadLanguagesFromDirs(dirs) {
    let langFiles = await Promise.all(dirs.map((path) => listDir(path)));
    let files = langFiles.map((list, dirInd) => list.filter((file) => ["yml", "html", "txt"].includes(splitName(file).ext)).map((lname) => ({ lname, dir: dirs[dirInd] }))).flat();
    let lng = {};
    let data = await Promise.all(files.map((f) => {
      let path = `${f.dir}${f.lname}`;
      return splitName(f.lname).ext == "yml" ? readYaml(path) : readTextFile(path);
    }));
    for (let i in data) {
      let text2 = data[i];
      let fname = files[i].lname;
      if (typeof text2 == "object") {
        let lname = Object.keys(text2)[0];
        lng[lname] = { ...lng[lname] || {}, ...text2[lname] };
      } else {
        let split = splitName(fname);
        if (split.ext != "yml") {
          let split2 = splitName(split.body);
          lng[split2.ext] = lng[split2.ext] || {};
          lng[split2.ext][split2.body] = text2;
        }
      }
    }
    return lng;
  }
  async function loadRulsFromMods(mods) {
    let dirLists = await Promise.all(mods.map((mod) => listDir(mod.rulDir)));
    dirLists = dirLists.map((files2) => files2.filter((name) => name.substr(-4) == ".rul"));
    let dirLists2 = [];
    for (let i in mods) {
      dirLists2[i] = dirLists[i].map((name) => ({ mod: mods[i].id, path: `${mods[i].rulDir}${name}`, modDir: mods[i].dir }));
    }
    let files = dirLists2.flat(1);
    let ruls = await Promise.all(files.map(async (file) => {
      let data = await readYaml(file.path);
      return { ...data, file };
    }));
    return ruls;
  }
  function useCache(data) {
    return new Promise((done) => {
      let request = indexedDB.open("xpedia", 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        const store = db.createObjectStore("cache", { keyPath: "id" });
      };
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction("cache", "readwrite");
        const store = transaction.objectStore("cache");
        if (data == "load") {
          const query = store.get(1);
          query.onsuccess = () => {
            let data2 = query.result?.data;
            done(data2 ? JSON.parse(data2) : null);
          };
        } else {
          if (data == "wipe")
            store.delete(1);
          else
            store.put({ id: 1, data: JSON.stringify(data) });
          done([]);
        }
        transaction.oncomplete = () => {
          db.close();
        };
      };
    });
  }
  var packedData;
  async function loadRules(rul2) {
    loadingFile.set("loading from js");
    let data = await loadPacked();
    if (data) {
      packedData = true;
      loadingFile.set("");
      await delay(10);
    } else {
      loadingFile.set("loading from cache");
      data = await useCache("load");
      if (!data) {
        loadingFile.set("loading from local files");
        data = await loadFromFiles();
        useCache(data);
      }
    }
    if (data == null) {
      warn("Failed to load rules");
      return;
    }
    inform("parsing");
    rul2.load(data);
    await delay(10);
  }
  async function loadData(path) {
    if (typeof fsData != "undefined") {
      return fsData(path);
    } else {
      return path;
    }
  }
  async function exportPedia(onlyCurrentLanguage = false) {
    document.body.style.cursor = "wait";
    let jsPath = document.getElementById("xpedia-js")?.src;
    let js = await (await fetch(jsPath)).text();
    let mainCSS = document.getElementById("main-css");
    let style = mainCSS.href ? await (await fetch(mainCSS.href)).text() : mainCSS.innerHTML;
    let src = rul.src;
    if (onlyCurrentLanguage) {
      let langs = {};
      langs[defaultLanguage2] = src.langs[defaultLanguage2];
      langs.icon = src.langs.icon;
      let langName = rul.langName;
      if (langName != defaultLanguage2) {
        langs[langName] = src.langs[langName];
      }
      src = { ...src, langs };
    }
    let packed = await packZip(JSON.stringify(src));
    let html = `
<head>
  <style>${style}</style>
  <script>
  window.gameDir = ".";
  window.xpediaDir = "xpedia2/";
  window.xpedia = "${packed}";
  <\/script>
  <script>${js}<\/script>
</head>`;
    download("xpedia.html", html);
    document.body.style.cursor = "default";
  }

  // src/Ruleset.ts
  var rul;
  var defaultLanguage2 = "en-US";
  var obsTables = { "BIGOBS.PCK": "big", "FLOOROB.PCK": "floor", "HANDOB.PCK": "hand", "BASEBITS.PCK": "base", "INTICON.PCK": "icon" };
  function orderedFilteredEntries(item, fields) {
    if (item == null)
      return;
    return fields ? fields.map((key) => item[key] != null ? [key, item[key]] : null).filter((v) => v != null) : [];
  }
  function sortFirstLast(item, options = {}) {
    if (item == null)
      return { all: [] };
    let first = orderedFilteredEntries(item, options.first);
    let last = orderedFilteredEntries(item, options.last);
    let exclude = orderedFilteredEntries(item, options.exclude);
    let special = /* @__PURE__ */ new Set([...options.first || [], ...options.last || [], ...options.exclude || [], "id", "list", "name"]);
    let misc = Object.entries(item).filter(([k, v]) => !special.has(k));
    if (options.sortBy) {
      misc = misc.sort((a, b) => options.sortBy(a[1]) > options.sortBy(b[1]) ? 1 : -1);
    } else {
      misc = misc.sort((a, b) => a[0] > b[0] ? 1 : -1);
    }
    let all = [...first, ...misc, ...last];
    return { first, misc, last, exclude, all };
  }
  var Search = class {
    constructor() {
      this.articles = new import_js_worker_search.default();
      for (let a of Object.values(rul.articles)) {
        let texts = ["id", "type", "title", "text"].map((key) => `${a[key]}`.toLowerCase()).join(" ");
        this.articles.indexDocument(a.id, texts);
      }
    }
    async findArticles(query) {
      return this.articles.search(query.toLowerCase());
    }
  };
  var Entry = class {
    constructor(raw, collection) {
      Object.assign(this, JSON.parse(JSON.stringify(raw)));
      if (rul[collection] == null)
        rul[collection] = {};
      rul[collection][this.id] = this;
      this.addToSection(camelToUnderscore(collection).toUpperCase());
    }
    addToSection(section) {
      Article.create(this.id, section);
    }
    sortField(field, noTitle = false) {
      if (field == "id" && !noTitle)
        return this.title;
      return this[field];
    }
    get title() {
      return rul.tr(this.id);
    }
    static reserve(raw, collection) {
      let id = raw.id || raw.type || raw.name;
      if (rul[collection][id]) {
        return rul[collection][id];
      } else {
        return new Entry(raw, collection);
      }
    }
    get name() {
      return this.id;
    }
    set name(val) {
      if (this.id == null)
        this.id = val;
    }
    get type() {
      return this.id;
    }
    set type(val) {
      this.id = val;
    }
  };
  var MissionScript = class extends Entry {
    constructor(raw) {
      super(raw, "missionScripts");
      if (this.researchTriggers) {
        this.researchNeeded = Object.keys(this.researchTriggers).filter((k) => this.researchTriggers[k]);
        this.researchForbidden = Object.keys(this.researchTriggers).filter((k) => !this.researchTriggers[k]);
      }
      if (this.missionWeights) {
        this._missions = unique(Object.values(this.missionWeights).map((m) => Object.keys(m)).flat());
      }
    }
  };
  var Soldiers = class extends Entry {
    sortField(n, v) {
      return this[n] || this.statCaps[n];
    }
  };
  var Event = class extends Entry {
    constructor() {
      super(...arguments);
      this.relatedScripts = [];
    }
  };
  var EventScript = class extends Entry {
    constructor(raw) {
      super(raw, "eventScripts");
      let relatedEvents = /* @__PURE__ */ new Set([
        ...Object.values(this.eventWeights || []).map((w) => Object.keys(w)).flat(),
        ...Object.keys(this.oneTimeRandomEvents || {})
      ]);
      this.relatedEvents = [...relatedEvents];
      this.relatedResearch = [...new Set(Object.keys(this.researchTriggers || {}))];
    }
  };
  function totalSellCost(items = {}) {
    let c = 0;
    for (let k in items) {
      c += items[k] * (rul.items[k] || rul.crafts[k])?.costSell || 0;
    }
    return c || 0;
  }
  function totalSize(items = {}) {
    let c = 0;
    for (let k in items) {
      c += items[k] * (rul.items[k] || rul.crafts[k])?.size || 0;
    }
    return c;
  }
  var Manufacture = class extends Entry {
    constructor(raw) {
      super(raw, "manufacture");
      this.cost = this.cost || 0;
      if (this.category) {
        rul.addCategory(this.category, this.id, rul.manufactureCategories);
      }
      if (this.requires) {
        for (let resName of this.requires) {
          let res = rul.research[resName];
          if (!res)
            continue;
          if (!res.manufacture)
            res.manufacture = [];
          res.manufacture.push(this.name);
        }
      }
      if (!this.producedItems) {
        this.producedItems = { [this.id]: 1 };
      }
      if (this.requiredItems) {
        for (let itemName of Object.keys(this.requiredItems)) {
          let item = rul.items[itemName];
          if (!item)
            continue;
          if (!item.componentOf)
            item.componentOf = {};
          item.componentOf[this.name] = this.requiredItems[itemName];
        }
      }
      if (this.randomProducedItems) {
        this.chanceSum = 0;
        for (let chance of this.randomProducedItems)
          this.chanceSum += chance[0];
        this.totalProducedItems = { ...this.producedItems };
        for (let chance of this.randomProducedItems) {
          for (let k in chance[1]) {
            this.totalProducedItems[k] = (this.totalProducedItems[k] || 0) + chance[1][k] * chance[0] / this.chanceSum;
          }
        }
      } else {
        this.totalProducedItems = this.producedItems;
      }
      this.profit = totalSellCost(this.producedItems) - totalSellCost(this.requiredItems) - this.cost;
      if (isNaN(this.profit)) {
        console.log(this.id, totalSellCost(this.producedItems), totalSellCost(this.requiredItems), this.cost);
      }
      this.profitPerHour = this.profit / this.time;
      this.sizeChange = totalSize(this.producedItems) - totalSize(this.requiredItems);
      backLink(this.id, Object.keys(this.totalProducedItems), rul.items, "manufacture");
      Service.add("allowsManufacture", this.name, this.requiresBaseFunc);
    }
  };
  var SoldierTransformation = class extends Entry {
    constructor(raw) {
      super(raw, "soldierTransformation");
    }
  };
  var DamageType = class extends Entry {
  };
  var Commendation = class extends Entry {
    constructor(raw) {
      super(raw, "commendations");
      this.damageTypes = [];
      this.battleTypes = [];
      this.items = [];
      this.kcd = [];
      this.killCriteria2 = [];
      this.finalBonus = this.soldierBonusTypes && rul.soldierBonuses[this.soldierBonusTypes[this.soldierBonusTypes.length - 1]];
    }
    parseKillCriteria() {
      if (this.killCriteria) {
        for (let deeds of this.killCriteria) {
          let group = [];
          for (let deedList of deeds) {
            let deed = { times: deedList[0] };
            for (let [i, k] of Object.entries(deedList[1])) {
              let idt = internalDamageTypes.indexOf(k);
              if (idt != -1) {
                deed.element = damageTypes[idt];
                deedList[1][i] = damageTypes[idt];
                this.damageTypes.push(damageTypes[idt]);
                backLink(this.id, [deed.element], rul.damageTypes, "commendations");
                continue;
              }
              let ibt = internalBattleTypes.indexOf(k);
              if (ibt != -1) {
                deed.type = k;
                this.battleTypes.push(k);
                backLink(this.id, [k], rul.battleTypes, "commendations");
              } else if (killStatuses.includes(k)) {
                deed.status = k;
              } else if (killFactions.includes(k)) {
                deed.faction = k;
              } else if (rul.alienRaces[k]) {
                deed.race = k;
                backLink(this.id, [k], rul.alienRaces, "commendations");
              } else if (rul.units[k]) {
                deed.unit = k;
                backLink(this.id, [k], rul.units, "commendations");
              } else if (rul.items[k]) {
                deed.item = k;
                backLink(this.id, [k], rul.items, "commendations");
              } else {
                deed[k] = true;
              }
            }
            if (deed.type || deed.element) {
              if (!deed.type) {
                backLink2(this, rul.damageTypes[deed.element].items, rul.items, "commendations", "items");
              } else if (!deed.element) {
                backLink2(this, rul.battleTypes[deed.type]["items"], rul.items, "commendations", "items");
              } else {
                let items = rul.damageTypes[deed.element].items.filter((id) => rul.items[id]?.internalBattleType == deed.type);
                backLink2(this, items, rul.items, "commendations", "items");
              }
            }
            this.kcd.push(deed);
            group.push(deed);
          }
          this.killCriteria2.push(group);
        }
      }
    }
    matchesItem(item) {
      let id = item.id;
      for (let deed of this.kcd) {
        if (deed.item == id)
          return true;
        if (deed.element == null && deed.type == null)
          continue;
        if (deed.element != null && !item.damageTypes?.includes(deed.element))
          continue;
        if (deed.type != null && item.battleType != deed.type)
          continue;
        return true;
      }
      return false;
    }
    sortField(n, v) {
      if (n == null)
        return;
      let fb = this.finalBonus;
      if (fb && n != "id") {
        if (fb[n])
          return fb[n];
        if (statsList.includes(n))
          return fb["stats"] ? fb["stats"][n] || 0 : 0;
        if (this.finalBonus.recovery && n.substring(0, 9) == "recovery.") {
          return this.finalBonus.recovery[n.substring(9)]?.flatOne;
        }
      }
      return this[n];
    }
  };
  var Research = class extends Entry {
    constructor(raw) {
      super(raw, "research");
      Service.add("allowsResearching", this.name, this.requiresBaseFunc);
    }
  };
  var Service = class {
    constructor(id) {
      this.id = id;
      Article.create(id, "SERVICES");
    }
    static add(prop, id, entries) {
      if (entries) {
        for (let s of entries) {
          if (!(s in rul.baseServices))
            rul.baseServices[s] = new Service(s);
          if (!(prop in rul.baseServices[s]))
            rul.baseServices[s][prop] = [];
          rul.baseServices[s][prop].push(id);
        }
      }
    }
  };
  var AlienDeployment = class extends Entry {
    constructor(raw) {
      super(raw, "alienDeployments");
      let allItems = /* @__PURE__ */ new Set();
      for (let d of this.data || []) {
        if (Array.isArray(d.itemSets)) {
          let items = d.itemSets.flat();
          for (let item of items)
            allItems.add(item);
        }
      }
      this.loot = [...allItems];
    }
  };
  var CraftWeapon = class extends Entry {
    constructor(raw) {
      super(raw, "craftWeapons");
      Service.add("canBuy", this.type, this.requiresBuyBaseFunc);
      this.weaponType = "weaponType" + (this.weaponType || 0);
      Entry.reserve({ id: this.weaponType }, "weaponTypes");
    }
  };
  var Craft = class extends Entry {
    constructor(raw) {
      super(raw, "crafts");
      this.allWeaponTypes = this.allWeaponTypes || [];
      if (this.weaponTypes) {
        for (let slot in this.weaponTypes) {
          if (!Array.isArray(this.weaponTypes[slot]))
            this.weaponTypes[slot] = [this.weaponTypes[slot]];
          this.weaponTypes[slot] = this.weaponTypes[slot].map((n) => {
            let id = "weaponType" + n;
            Entry.reserve({ id }, "weaponTypes");
            this.allWeaponTypes.push(id);
            return id;
          });
        }
        this.allWeaponTypes = [...new Set(this.allWeaponTypes)];
      }
    }
  };
  var Facility = class extends Entry {
    constructor(raw) {
      super(raw, "facilities");
      Service.add("providedBy", this.type, this.provideBaseFunc);
      Service.add("allowsBuilding", this.type, this.requiresBaseFunc);
      Service.add("forbidsBuilding", this.type, this.forbiddenBaseFunc);
      if (this.aliens) {
        Service.add("providedBy", this.type, [`prisonType${this.prisonType || 1}`]);
      }
    }
    get kennel() {
      return this.prisonType == 2 ? this.aliens : null;
    }
    get prison() {
      return this.prisonType == 2 ? null : this.aliens;
    }
  };
  var StartingConditions = class extends Entry {
    constructor(raw) {
      super(raw, "startingConditions");
    }
  };
  var Unit = class extends Entry {
    constructor(raw) {
      super(raw, "units");
      let armor = rul.armors[raw.armor];
      if (armor) {
        armor.users = armor.users || [];
        armor.users.push(this.type);
      }
      if (this.builtInWeaponSets) {
        let weapons = new Set(this.builtInWeaponSets.flat());
        for (let w of weapons) {
          let item = rul.items[w];
          if (item) {
            item.heldBy = item.heldBy || /* @__PURE__ */ new Set();
            item.heldBy.add(this.type);
          }
        }
      }
    }
  };
  var defaultRange = { snap: 15, auto: 7, aimed: 200 };
  var Attack = class {
    constructor(item, mode) {
      this.item = item;
      this.mode = mode;
      this.possible = false;
      this.flatTime = false;
      this.shots = 1;
      this.pellets = 1;
      let capMode = mode.charAt(0).toUpperCase() + mode.substr(1);
      let isDefaultAttack = mode == "ammo" && item.battleType == 2 || mode == "melee" && item.battleType == 3 || mode == "psi" && item.battleType == 9 || mode == "throw" && [4, 5].includes(item.battleType);
      if (mode == "throw" && !isDefaultAttack)
        return null;
      let exists = item["accuracy" + capMode] || item["cost" + capMode] || isDefaultAttack;
      if (!exists)
        return null;
      if (mode == "melee" && item.battleType != 3) {
        this.damage = item.meleePower;
        this.damageBonus = item.meleeBonus;
        this.damageType = item.meleeType;
      } else if (!item.compatibleAmmo) {
        this.damage = item.power;
        this.damageBonus = item.damageBonus;
        this.damageType = item.damageType;
      }
      this.pellets = item.shotgunPellets || 1;
      this.shots = mode == "auto" ? item.autoShots || 3 : 1;
      this.name = mode.substr(0, 1).toUpperCase() + mode.substr(1);
      let confId = "conf" + this.name;
      if (confId in item) {
        let conf = item[confId];
        if (conf.name)
          this.name = rul.str(conf.name);
        if (conf.shots)
          this.shots = conf.shots;
        delete item[confId];
      }
      if (item[mode + "AttackName"])
        this.name = rul.str(item[mode + "AttackName"]);
      if (mode == "melee")
        this.alter = item.meleeAlter;
      if (item.battleType == 3 || mode != "melee")
        this.alter = item.damageAlter;
      if (mode != "ammo") {
        if ((mode == "melee" && item.battleType == 3 || mode != "melee") && item.flatRate)
          this.flatTime = item.flatRate;
        if (item["flat" + capMode] && item["flat" + capMode].time)
          this.flatTime = true;
        if (capMode == "Psi")
          capMode = "Use";
        this.cost = this.cost = item["cost" + capMode] || {
          time: item["tu" + capMode],
          energy: 0
        };
        this.accuracy = item["accuracy" + capMode] || 100;
        let accuracyMultiplier = mode == "throw" ? item.throwMultiplier : mode == "melee" ? item.meleeMultiplier : item.accuracyMultiplier;
        if (!accuracyMultiplier) {
          let defaultAccuracyStat = mode == "throw" ? "throwing" : mode == "melee" ? "melee" : "firing";
          accuracyMultiplier = {};
          accuracyMultiplier[defaultAccuracyStat] = 1;
        }
        this.accuracyMultiplier = accuracyMultiplier;
        if (this.damageType != null) {
          item.addDamageType(Number(this.damageType));
        }
        for (let k in this.accuracyMultiplier || [])
          backLink(item.id, [k], "stats", "weaponDamage");
      }
      if (this.alter && this.alter.ResistType) {
        this.damageType = Number(this.alter.ResistType);
      }
      if (mode + "Range" in item) {
        this.alter = Object.assign({}, this.alter || {});
        this.alter.range = item[mode + "Range"];
      }
      for (let k in this.alter) {
        if (k == "damageType" || k == "ResistType")
          this.alter[k] = damageTypes[this.alter[k]];
      }
      this.range = item[mode + "Range"] || item[mode.substr(0, 3) + "Range"] || this.alter && this.alter.range || defaultRange[mode];
      if (item.maxRange < this.range) {
        this.range = item.maxRange;
      }
      if (this.alter && item.maxRange < +this.alter.range)
        this.alter.range = `${item.maxRange}`;
      this.possible = true;
      rul.attacks.push(this);
    }
    sortField(n, v) {
      switch (n) {
        case "internalBattleType":
          return this.item.internalBattleType;
        case "damageType":
          return damageTypes[this.damageType];
        case "item":
          return this.item.id;
        case "id":
          return this.item.id;
      }
      if (this.alter && this.alter[n]) {
        return this.alter[n];
      }
      if (this.damageBonus && this.damageBonus[n]) {
        return this.damageBonus[n];
      }
      if (n.substring(0, 4) == "acc*" && this.accuracyMultiplier) {
        return this.accuracyMultiplier[n.substring(4)];
      }
      return this[n];
    }
  };
  var Article = class {
    constructor(raw) {
      this.sections = [];
      this.id = raw.id;
      this._text = raw.text;
      this._title = raw.title || raw.id;
      this.image_id = raw.image_id;
      if (raw.requires)
        this.requires = Array.isArray(raw.requires) ? raw.requires : [raw.requires];
      rul.articles[this.id] = this;
      let id = raw.id;
      rul.articles[id] = this;
      if (raw.section) {
        this.addToSection(raw.section);
      }
    }
    get section() {
      return this.sections[0]?.id;
    }
    static create(id, section) {
      if (rul.sections[section] == null) {
        new Section(section, true);
      }
      if (id in rul.articles) {
        let article = rul.articles[id];
        if (section && !article.sections.find((s) => s.id == section)) {
          article.addToSection(section);
          rul.sections[section].add(article);
        }
        return article;
      }
      return new Article({ id, section });
    }
    addToSection(sectionId) {
      let section;
      if (sectionId in rul.sections)
        section = rul.sections[sectionId];
      else
        section = rul.sections[sectionId] = new Section(sectionId);
      if (this.id != section.id)
        section.add(this);
      if (!this.sections.includes(section))
        this.sections.push(section);
      return section;
    }
    get text() {
      let t = rul.lang[this._text] || rul.lang[this.id + "_UFOPEDIA"] || rul.lang[rul.research[this.id]?.lookup];
      t = stripPediaMarkup(t);
      return t;
    }
    get title() {
      return rul.tr(this._title, { icon: "none" });
    }
  };
  var Section = class {
    constructor(id, xpediaOwn = false) {
      this.id = id;
      this._articles = [];
      rul.sections[id] = this;
      if (xpediaOwn) {
        rul.typeSectionsOrder.push(this);
      } else {
        rul.sectionsOrder.push(this);
      }
      Article.create(id, id);
    }
    get articles() {
      return this._articles;
    }
    get title() {
      return rul.tr(this.id);
    }
    add(article) {
      if (!this._articles.includes(article))
        this._articles.push(article);
      if (!article.sections.includes(this))
        article.sections.push(this);
    }
  };
  var Sprite = class {
    constructor(raw) {
      this.id = raw.type || raw.typeSingle;
      this.modDir = raw.modDir;
      if (raw.files) {
        this._path = raw.files[0];
        if (obsTables[this.id]) {
          for (let [k, v] of Object.entries(raw.files)) {
            new Sprite({ modDir: this.modDir, type: obsTables[this.id], ind: k, fileSingle: v });
          }
        }
      }
      if (raw.fileSingle)
        this._path = raw.fileSingle;
      if (raw.ind) {
        rul.obs[this.id][raw.ind] = this;
      } else {
        rul.sprites[this.id] = this;
      }
    }
    get path() {
      let path = this.modDir + this._path;
      if (window["gameDir"] && path[0] == "/") {
        path = window["gameDir"] + path;
      } else if (window["xpediaDir"] && path[0] != "/") {
        path = window["xpediaDir"] + path;
      }
      return path;
    }
    async data() {
      let data = loadData(this.path);
      if (data != null)
        return data;
      else
        return this.path;
    }
  };
  var Armor = class extends Entry {
    constructor(raw) {
      super(raw, "armors");
      this.armor = {};
      this.startingConditions = [];
      if (!this.size)
        this.size = 1;
      this.armor = {
        Front: this.frontArmor,
        Side: this.sideArmor,
        Rear: this.rearArmor,
        Under: this.underArmor
      };
      if (this.storeItem && rul.items[this.storeItem]) {
        let item = rul.items[this.storeItem];
        if (!item.armors)
          item.armors = [];
        item.armors.push(this.type);
      }
      for (let unit of this.units || []) {
        let s = rul.soldiers[unit];
        if (s) {
          s.armors = s.armors || [];
          s.armors.push(this.type);
        }
      }
    }
    async dollSprites() {
      let ds = {};
      if (this.layersDefinition) {
        let prefix = this.layersDefaultPrefix;
        for (let body in this.layersDefinition) {
          let layersDef = this.layersDefinition[body];
          let layers = [];
          for (let layer in layersDef) {
            let name = layersDef[layer];
            if (name && name.length) {
              let id = prefix + "__" + layer + "__" + name;
              layers.push(await rul.sprite(id));
            }
          }
          ds[body] = layers;
        }
      } else if (this.spriteInv) {
        let name = this.spriteInv;
        let l = name?.length;
        if (this.spriteInv + ".SPK" in rul.sprites) {
          ds = {
            0: [await rul.sprites[this.spriteInv + ".SPK"].data()]
          };
        } else {
          for (let s in rul.sprites) {
            if (s.substr(0, l) == name) {
              ds[s.substr(l, s.length - l - 4)] = [await rul.sprite(s)];
            }
          }
        }
      }
      console.log({ ds });
      return ds;
    }
    sortField(n, v) {
      if (statsList.includes(n))
        return this.stats ? this.stats[n] || 0 : 0;
      if (damageTypes.includes(n))
        return (this.damageModifier[damageTypes.indexOf(n)] || 0) * 100;
      if (this.tags && n in this.tags)
        return this.tags[n];
      if (n == "armorUsers") {
        if (v == "enemies")
          return Object.values(this.units || {}).length == 0;
        if (v == "allies")
          return Object.values(this.units || {}).length > 0;
        if (rul.soldiers[v]) {
          return this.units?.includes(v);
        }
      }
      return this[n];
    }
  };
  var Item = class extends Entry {
    constructor(raw) {
      super(raw, "items");
      if (this.damageType)
        this.addDamageType(this.damageType);
      this.invWidth = this.invWidth || 1;
      this.invHeight = this.invHeight || 1;
      if (this.dropoff == null)
        this.dropoff = 2;
      let t = this;
      if ("flatThrow" in t) {
        t.flatThrowTime = t.flatThrow.time;
        delete t.flatThrow;
      }
      Service.add("canBuyItem", this.type, this.requiresBuyBaseFunc);
      if (this.categories) {
        for (let cat of this.categories)
          rul.addCategory(cat, this.type);
      }
      if (this.liveAlien && this.recover && !this.prisonType)
        this.prisonType = 1;
      if (this.ammo) {
        this.compatibleAmmo = [...this.compatibleAmmo || [], ...Object.values(this.ammo).map((a) => a.compatibleAmmo).flat()];
      }
      for (let k in this.damageBonus || []) {
        let b = this.damageBonus[k];
        if (b != 0)
          backLink(this.id, [k], "stats", "weaponDamage");
        if (Array.isArray(b)) {
          for (let p in b)
            if (b[p] > 0)
              backLink(this.id, [k], "stats", `weaponDamage${p != "0" ? `<sup>${+p + 1}</sup>` : ""}`);
        }
      }
      for (let k in this.meleeMultiplier || [])
        backLink(this.id, [k], "stats", "meleeAccuracy");
      if (this.damageType != null) {
        backLink(this.id, [damageTypes[this.damageType]], "damageTypes", "items");
      }
      if (this.damageAlter?.ResistType) {
        let rt = this.damageAlter?.ResistType;
        backLink(this.id, [damageTypes[rt] || rt], "damageTypes", "items");
      }
      this.attacks();
    }
    get sprite() {
      if (this.bigSprite) {
        return rul.obsSprite("big", +this.bigSprite);
      }
    }
    get internalBattleType() {
      let t = internalBattleTypes[this.battleType || 0];
      return t;
    }
    addDamageType(type2) {
      this.damageTypes = this.damageTypes || [];
      addIfNew(this.damageTypes, type2);
      backLink(this.id, [damageTypes[type2]], "damageTypes", "items");
    }
    attacks() {
      if (!this._attacks) {
        this._attacks = [];
        for (let mode of battleTypes) {
          let attack = new Attack(this, mode);
          if (attack.possible) {
            this._attacks.push(attack);
          }
        }
      }
      if (this.battleType == 2) {
        this._attacks[0].item = this;
        this._attacks[0].mode = "ammo";
      }
      return this._attacks;
    }
    sortField(n, v) {
      if (n == "damageTypes") {
        if (v !== true) {
          let i = damageTypes.indexOf(v);
          return this.damageTypes?.includes(i);
        } else {
          return this.damageTypes?.map((d) => damageTypes[d]);
        }
      }
      return super.sortField(n, v);
    }
  };
  var Ruleset = class {
    constructor() {
      this.articles = {};
      this.articlesOrder = [];
      this.sections = {};
      this.sectionsOrder = [];
      this.typeSectionsOrder = [];
      this.sprites = {};
      this.raw = {};
      this.search = {};
      this.items = {};
      this.categories = {};
      this.manufactureCategories = {};
      this.armors = {};
      this.units = {};
      this.crafts = {};
      this.facilities = {};
      this.enviroEffects = {};
      this.craftWeapons = {};
      this.weaponTypes = {};
      this.itemTypes = {};
      this.stats = {};
      this.battleTypes = {};
      this.damageTypes = {};
      this.research = {};
      this.soldierBonuses = {};
      this.commendations = {};
      this.soldierTransformation = {};
      this.soldiers = {};
      this.alienDeployments = {};
      this.alienRaces = {};
      this.manufacture = {};
      this.startingConditions = {};
      this.events = {};
      this.eventScripts = {};
      this.missionScripts = {};
      this.alienMissions = {};
      this.ufos = {};
      this.terrains = {};
      this.obs = { big: [], floor: [], hand: [], base: [], icon: [] };
      this.sounds = [];
      this.baseServices = {};
      this.redirect = {};
      this.attacks = [];
      this.lang = {};
      this.langs = {};
      this.mods = {};
      this.convertedLangs = {};
      rul = this;
    }
    addCategory(catName, id, where) {
      if (where == null)
        where = rul.categories;
      let cat = where[catName] || [];
      if (!cat.includes(id))
        cat.push(id);
      where[catName] = cat;
    }
    damageTypeName(type2) {
      return this.lang[damageTypes[type2]];
    }
    sound(id) {
      return this.sounds[id];
    }
    obsSprite(type2, num) {
      let path = (this.obs[type2] || [])[num]?.path;
      if (!path)
        return emptyImg;
      return loadData(path);
    }
    combineFiles(data, reversed = false) {
      for (let file of reversed ? data.reverse() : data) {
        if (file == null)
          continue;
        for (let key in file) {
          let table = file[key];
          let modDir = file.file.modDir;
          if (Array.isArray(table))
            for (let entry of table) {
              if (typeof entry == "object" && !Array.isArray(entry))
                entry.modDir = modDir;
            }
          if (key.substr(0, 4) == "lang") {
            Object.assign(this.lang, table);
          }
          if (!(key in this.raw)) {
            this.raw[key] = table;
          } else {
            let old = this.raw[key];
            let adding = table;
            if (old.concat) {
              this.raw[key] = old.concat(adding);
            } else {
              if (Array.isArray(adding))
                for (let k of adding) {
                  if (k in old && typeof old[k] == "object")
                    Object.assign(old[k], adding[k]);
                  else
                    old[k] = adding[k];
                }
            }
          }
        }
      }
    }
    mergeRuls(reversed = false) {
      for (let categoryName in this.raw) {
        let merged = {};
        let deleted = {};
        if (categoryName == "extraSprites")
          continue;
        let category = this.raw[categoryName];
        if (!Array.isArray(category)) {
          continue;
        }
        for (let data of category) {
          let id = data.type || data.id || data.name || data.delete || data.typeSingle;
          if (!id || deleted[id])
            continue;
          if ("delete" in data) {
            if (reversed)
              deleted[id] = true;
            else
              delete merged[id];
            continue;
          }
          if (id && id in merged) {
            if (reversed) {
              for (let k in data) {
                if (!(k in merged[id]))
                  merged[id][k] = data[k];
              }
            } else {
              if (data.files) {
                let files = { ...merged[id].files, ...data.files };
                Object.assign(merged[id], data);
                merged[id].files = files;
              } else {
                if (Array.isArray(data)) {
                  debugger;
                  merged[id] = merged[id].concat(data);
                } else
                  Object.assign(merged[id], data);
              }
            }
          } else {
            merged[id] = data;
          }
        }
        this.raw[categoryName] = Object.values(merged);
      }
    }
    convertLang(langName) {
      if (this.convertedLangs[langName])
        return false;
      let lang = this.langs[langName];
      if (lang.ALREADYCONVERTED)
        return;
      lang.ALREADYCONVERTED = "true";
      if (langName == defaultLanguage2)
        lang = {
          ...{
            dependencies: "STR_DEPENDS_ON",
            seeAlso: "STR_ITEM_REQUIRED",
            requiresBaseFunc: "STR_SERVICES_REQUIRED",
            freeFrom: "STR_GET_FOR_FREE_FROM",
            leadsTo: "STR_LEADS_TO",
            unlocks: "STR_UNLOCKS",
            disables: "STR_DISABLES",
            getOneFree: "STR_GIVES_ONE_FOR_FREE",
            manufacture: "STR_REQUIRED_BY",
            randomProducedItems: "STR_RANDOM_PRODUCTION_DISCLAIMER",
            cost: "STR_COST"
          },
          ...lang
        };
      this.convertedLangs[langName] = true;
      return true;
    }
    parseType(type2, klass) {
      for (let data of this.raw[type2] || []) {
        new (klass || Entry)(data, type2);
      }
    }
    deleteModDirs() {
      for (let tableKind in this.raw)
        if (Array.isArray(this.raw[tableKind]))
          for (let table of this.raw[tableKind]) {
            if ("modDir" in table)
              delete table.modDir;
          }
    }
    parse(data) {
      let reversed = false;
      this.combineFiles(data, reversed);
      this.mergeRuls(reversed);
      this.sounds = [];
      for (let table of this.raw.extraSounds) {
        for (let e of Object.entries(table.files)) {
          this.sounds[e[0]] = table.modDir + e[1];
        }
      }
      for (let spriteData of this.raw.extraSprites)
        new Sprite(spriteData);
      this.deleteModDirs();
      this.parseArticles(this.raw.ufopaedia);
      for (let [typeName, typeConstructor] of Object.entries(entryConstructors) || []) {
        this.parseType(typeName, typeConstructor);
      }
      function blockItems(blocks) {
        if (blocks == null)
          return [];
        blocks = Object.values(blocks || []);
        if (blocks == null)
          return [];
        blocks = blocks.flat();
        let x = blocks.map((b) => b.randomizedItems || []).flat().map((c) => c?.itemList || []).flat();
        let y = blocks.map((b) => b.items ? Object.keys(b.items) : []).flat();
        return [...x, ...y];
      }
      new Section("ATTACKS", true);
      crosslink(this.units, "race", "alienRaces", "hasThisRace");
      crosslink(this.units, "rank", "alienRanks", "hasThisRank");
      crosslink(this.alienRaces, "members", "units", "memberOf");
      crosslink(this.soldierTransformation, "forbiddenPreviousTransformations", this.soldierTransformation, "blocksTransformations");
      crosslink(this.alienDeployments, "loot", this.items, "loot");
      crosslink(this.alienDeployments, "enviroEffects", this.enviroEffects, "deployments");
      crosslink(this.craftWeapons, "weaponType", this.weaponTypes, "weapons", "weaponTypes");
      crosslink(this.crafts, "allWeaponTypes", this.weaponTypes, "crafts", "weaponTypes");
      crosslink(this.alienDeployments, "startingCondition", this.startingConditions, "deployments");
      crosslink(this.missionScripts, "researchNeeded", this.research, "unlocksMissions");
      crosslink(this.missionScripts, "researchForbidden", this.research, "stopsMissions");
      crosslink(this.alienMissions, (t) => Object.values(t.raceWeights)?.map((w) => Object.keys(w)).flat(), "alienRaces", "missions");
      crosslink(this.ufos, (t) => blockItems(t.battlescapeTerrainData?.mapBlocks), this.items, "ufos");
      crosslink(this.terrains, (t) => blockItems(t.mapBlocks), this.items, "terrains");
      crosslink(this.terrains, "civilianTypes", this.units, "terrains");
      crosslink(this.items, "spawnUnit", this.units, "spawnedBy");
      crosslink(this.items, "internalBattleType", "battleTypes", "items");
      crosslink(this.items, "supportedInventorySections", "inventorySections", "items");
      crosslink(this.commendations, "damageTypes", this.damageTypes, "commendations");
      crosslink(this.events, "researchList", this.research, "events");
      crosslink(this.armors, "builtInWeapons", this.items, "builtIn");
      crosslink(this.armors, "specialWeapon", this.items, "builtIn");
      crosslink(this.eventScripts, "relatedEvents", this.events, "relatedScripts");
      crosslink(this.eventScripts, "relatedResearch", this.research, "relatedScripts");
      crosslink(this.manufacture, "spawnedPersonType", this.soldiers, "manufacture");
      crosslink(this.events, "spawnedPersonType", this.soldiers, "events");
      crosslink(this.missionScripts, "_missions", this.alienMissions, "scripts");
      for (let option of [
        ["Craft", this.crafts],
        ["Armors", this.armors],
        ["SoldierTypes", this.soldiers],
        ["Vehicles", this.units]
      ]) {
        crosslink(this.startingConditions, `allowed${option[0]}`, option[1], "allowedIn");
        crosslink(this.startingConditions, `forbidden${option[0]}`, option[1], "forbiddenIn");
      }
      let ourArmors = Object.values(this.armors).filter((a) => a.units);
      for (let sc of Object.values(this.startingConditions)) {
        if (sc.forbiddenArmors) {
          let set2 = new Set(sc.forbiddenArmors);
          for (let a of ourArmors) {
            if (!set2.has(a.id))
              a.startingConditions.push(sc.id);
          }
        }
      }
      for (let c of Object.values(this.commendations)) {
        c.parseKillCriteria();
      }
      for (let facility of Object.values(this.facilities)) {
        if (facility.buildCostItems) {
          for (let itemName of Object.keys(facility.buildCostItems)) {
            let item = rul.items[itemName];
            if (!item)
              continue;
            if (!item.componentOf)
              item.componentOf = {};
            item.componentOf[facility.type] = facility.buildCostItems[itemName].build;
            if (!item.manufacture)
              item.manufacture = {};
            item.manufacture[facility.type] = facility.buildCostItems[itemName].refund;
          }
        }
      }
      for (let item of Object.values(this.items)) {
        for (let ammoId of item.compatibleAmmo || []) {
          let ammo = this.items[ammoId];
          if (ammo) {
            ammo.compatibleWeapons = ammo.compatibleWeapons || [];
            ammo.compatibleWeapons.push(item.type);
          }
        }
        for (let rb of item.requiresBuy || []) {
          let r = this.research[rb];
          if (r) {
            r.allowsBuying = [...r.allowsBuying || [], item.type];
          }
        }
      }
      for (let research of [...Object.values(this.research)]) {
        backLink(research.name, research.dependencies, rul.research, "leadsTo");
        backLink(research.name, research.getOneFree, rul.research, "freeFrom");
        if (research.lookup && research.name != research.lookup && this.research[research.lookup]) {
          let lookup = this.research[research.lookup];
          lookup.seeAlso = lookup.seeAlso || [];
          lookup.seeAlso.push(research.name);
          let lookUpArticle = this.article(research.lookup);
          let article = this.article(research.name);
          if (!rul.lang[article.id])
            article._title = lookUpArticle._title;
          article._text = lookUpArticle._text;
          article.image_id = lookUpArticle.image_id;
        }
        if (research.spawnedItem) {
          let item = rul.items[research.spawnedItem];
          item.spawnedBy = item.spawnedBy || [];
          item.spawnedBy.push(research.name);
        }
      }
      this.ourArmors = Object.values(this.armors).filter((a) => a.units).map((a) => a.type);
      for (let cat of Object.keys(this.categories)) {
        if (this.categories[cat].length)
          Article.create(cat, "CATEGORIES");
      }
      for (let cat of Object.keys(this.manufactureCategories)) {
        if (this.manufactureCategories[cat].length)
          Article.create(cat, "MANUFACTURE_CATEGORIES");
      }
      console.log("parse done");
    }
    sortedTypeSections() {
      return this.sortStrings(this.typeSectionsOrder.map((s) => s.id)).map((id) => this.sections[id]);
    }
    parseArticles(data) {
      for (let articleData of data) {
        if (articleData.id) {
          let article = new Article(articleData);
          this.articlesOrder.push(article);
          this.articles[article.id] = article;
        }
      }
    }
    findNextArticle(current, delta, currentSection, sorted = false) {
      if (!current)
        return null;
      if (!currentSection)
        currentSection = current.sections[0];
      let list = currentSection ? currentSection.articles : this.articlesOrder;
      if (sorted) {
        list = this.sortArticlesByName(list);
      }
      let index = list.findIndex((a) => a.id == current.id);
      if (index != void 0) {
        let nextIndex = index + delta;
        let nextArticle = list[nextIndex];
        return nextArticle;
      }
    }
    sortArticlesByName(list) {
      return this.sortStrings(list.map((a) => a.id)).map((id) => this.articles[id]);
    }
    str(id) {
      return this.lang[id] || id;
    }
    icon(name) {
      return this.langs?.icon ? this.langs.icon[name] : null;
    }
    tr(id, options) {
      if (id == null)
        return "";
      const bigSnakeCase = /^[A-Z0-9_]+$/;
      let icon = this.icon(id);
      let str2 = id;
      if (id in rul.lang) {
        str2 = rul.lang[id];
        str2 = stripPediaMarkup(str2);
      } else if (typeof id == "string") {
        if (icon)
          str2 = null;
        else {
          if (str2.substr(0, 4) == "STR_")
            str2 = str2.substr(4);
          if (str2.match(bigSnakeCase))
            str2 = str2.replace(/_/g, " ");
          str2 = str2.replace(/([a-z])([A-Z])/g, "$1 $2");
        }
      }
      if (options?.capital)
        str2 = capital(str2);
      if (str2?.length < options?.nobr)
        str2 = `<nobr>${str2}</nobr>`;
      if (icon) {
        if (options?.icon == "monospace")
          str2 = `<div class='inem'>${icon}</div>${str2 || ""}`;
        else if (options?.icon == "simple")
          str2 = `${icon}${str2 || ""}`;
        else if (options?.icon != "none")
          str2 = `<div class='comem'>${icon}</div>${str2 || ""}`;
      }
      if (!options?.notip && "tip_" + id in rul.lang) {
        str2 = `<span tooltip=${"tip_" + id}>${str2}<sup class="tipmark">?</sup></span>`;
      }
      return str2;
    }
    hasSprite(id) {
      return this.sprites[id];
    }
    async sprite(id, onlyIfExists = false) {
      if (id instanceof Promise)
        return id;
      if (id in this.sprites)
        return this.sprites[id].data();
      return onlyIfExists ? null : id;
    }
    load({ ruls, langs, mods }) {
      this.src = { ruls, langs: {}, mods };
      this.mods = mods;
      this.langs = langs;
      for (let langName in this.langs) {
        this.src.langs[langName] = { ...this.langs[langName] };
      }
      let langWeight = Object.fromEntries(Object.keys(langs).map((n) => [n, n == defaultLanguage2 ? 1e6 : Object.keys(langs[n]).length]));
      this.langNames = Object.keys(langs).sort((a, b) => langWeight[b] - langWeight[a]);
      if (this.langs.icon)
        this.langNames.splice(this.langNames.indexOf("icon"));
      for (let name of this.langNames) {
        if (!this.langs[defaultLanguage2][name]) {
          let country = name.match(/([a-z]+)/i);
          if (country?.length > 0) {
            let flag = getFlagEmoji(country[1]);
            if (flag)
              this.langs[defaultLanguage2][name] = flag;
          }
        }
      }
      this.parse(ruls);
      this.convertLang(defaultLanguage2);
      let l = Object.keys(this.langs);
      if (l.length == 3) {
        this.selectLang(l.find((n) => n != defaultLanguage2 && n != "icon"));
      } else {
        this.selectLang(defaultLanguage2);
      }
    }
    selectLang(name) {
      if (!this.langs[name]) {
        console.log("no language", name);
        return false;
      }
      this.langName = name;
      if (name == defaultLanguage2) {
        this.lang = this.langs[defaultLanguage2];
      } else {
        this.convertLang(name);
        this.lang = { ...this.langs[defaultLanguage2], ...this.langs[name] };
      }
      if (!this.search[name])
        this.search[name] = new Search();
      return true;
    }
    linksByType(type2) {
      switch (type2) {
        case "CONDITIONS":
          return Object.keys(this.startingConditions).map((a) => "CONDITIONS_" + a);
      }
      return [];
    }
    bodiesCompare(strs) {
      for (let i in strs) {
        if (strs[i].length == 2)
          strs[i] = (strs[i].charAt(0) == "M" ? "A" : "B") + "0" + strs[i].substr(1);
      }
      return strs[0] > strs[1] ? 1 : -1;
    }
    article(id) {
      let a = this.articles[this.redirect[id]] || this.articles[id];
      return a;
    }
    sortStrings(s) {
      let tl = s.map((s2) => [s2, this.tr(s2)]);
      tl = tl.sort((a, b) => a[1] > b[1] ? 1 : -1);
      return tl.map((a) => a[0]);
    }
  };
  var entryConstructors = {
    items: Item,
    battleTypes: Entry,
    soldiers: Soldiers,
    alienRaces: Entry,
    armors: Armor,
    units: Unit,
    crafts: Craft,
    craftWeapons: CraftWeapon,
    weaponTypes: Entry,
    ufos: Entry,
    facilities: Facility,
    events: Event,
    eventScripts: EventScript,
    soldierTransformation: SoldierTransformation,
    startingConditions: StartingConditions,
    missionScripts: MissionScript,
    alienMissions: Entry,
    alienDeployments: AlienDeployment,
    research: Research,
    soldierBonuses: Entry,
    manufacture: Manufacture,
    enviroEffects: Entry,
    terrains: Entry,
    mapScripts: Entry,
    stats: Entry,
    damageTypes: DamageType,
    commendations: Commendation
  };
  var statsList = ["tu", "stamina", "health", "bravery", "reactions", "firing", "throwing", "strength", "psiStrength", "psiSkill", "melee"];
  var damageTypes = [
    "STR_DAMAGE_NONE",
    "STR_DAMAGE_ARMOR_PIERCING",
    "STR_DAMAGE_INCENDIARY",
    "STR_DAMAGE_HIGH_EXPLOSIVE",
    "STR_DAMAGE_LASER_BEAM",
    "STR_DAMAGE_PLASMA_BEAM",
    "STR_DAMAGE_STUN",
    "STR_DAMAGE_MELEE",
    "STR_DAMAGE_ACID",
    "STR_DAMAGE_SMOKE",
    "STR_DAMAGE_10",
    "STR_DAMAGE_11",
    "STR_DAMAGE_12",
    "STR_DAMAGE_13",
    "STR_DAMAGE_14",
    "STR_DAMAGE_15",
    "STR_DAMAGE_16",
    "STR_DAMAGE_17",
    "STR_DAMAGE_18",
    "STR_DAMAGE_19",
    "STR_DAMAGE_20",
    "STR_DAMAGE_21",
    "STR_DAMAGE_22",
    "STR_MANA"
  ];
  var internalDamageTypes = [
    "DT_NONE",
    "DT_AP",
    "DT_IN",
    "DT_HE",
    "DT_LASER",
    "DT_PLASMA",
    "DT_STUN",
    "DT_MELEE",
    "DT_ACID",
    "DT_SMOKE",
    "DT_10",
    "DT_11",
    "DT_12",
    "DT_13",
    "DT_14",
    "DT_15",
    "DT_16",
    "DT_17",
    "DT_18",
    "DT_19"
  ];
  var killStatuses = ["STATUS_DEAD", "STATUS_UNCONSCIOUS", "STATUS_PANICKED", "STATUS_TURNING"];
  var killFactions = ["FACTION_HOSTILE", "FACTION_NEUTRAL", "FACTION_PLAYER"];
  var battleTypes = [
    "ammo",
    "melee",
    "snap",
    "aimed",
    "auto",
    "throw",
    "psi",
    "panic",
    "mindControl",
    "use"
  ];
  var internalBattleTypes = [
    "BT_NONE",
    "BT_FIREARM",
    "BT_AMMO",
    "BT_MELEE",
    "BT_GRENADE",
    "BT_PROXIMITYGRENADE",
    "BT_MEDIKIT",
    "BT_SCANNER",
    "BT_MINDPROBE",
    "BT_PSIAMP",
    "BT_FLARE",
    "BT_CORPSE"
  ];
  var battleStats = ["time", "energy", "morale", "health", "stun", "mana"];
  function backLink2(entry, list, to, field, field2) {
    backLink(entry.id, list, to, field);
    addAllIfNew(entry[field2], list);
  }
  function backLink(id, list, to, field, collection) {
    if (typeof to === "string") {
      collection = to;
      to = rul[to];
      if (!to)
        to = rul[to] = {};
    }
    if (list == null)
      return;
    if (typeof list == "object" && !Array.isArray(list)) {
      for (let key of Object.keys(list)) {
        let back = to[key];
        if (back == null && collection != null) {
          back = to[key] = new (entryConstructors[collection] || Entry)({ id: key }, collection);
        }
        if (back == null)
          continue;
        addFields(back, field, { [key]: list[key] });
      }
    } else {
      if (!Array.isArray(list))
        list = [list];
      for (let key of list) {
        let back = to[key];
        if (back == null && collection != null)
          back = to[key] = new Entry({ id: key }, collection);
        if (back == null)
          continue;
        addFields(back, field, [id]);
      }
    }
  }
  function addFields(entry, field, list) {
    if (entry == null || field == null || list == null)
      return;
    if (Array.isArray(list)) {
      entry[field] = entry[field] || [];
      for (let id of list) {
        if (entry[field].indexOf(id) == -1)
          entry[field].push(id);
      }
    } else {
      entry[field] = { ...entry[field] || {}, ...list };
    }
  }
  function crosslink(collection1, prop1, collection2, prop2, prefix) {
    let f = typeof prop1 === "function" ? prop1 : (t) => t[prop1];
    for (let t of [...Object.values(collection1)]) {
      backLink(t.id, f(t), collection2, prop2, prefix);
    }
  }
  function deedDescription(deed) {
    let s = `${rul.tr(deed.status)} ${rul.tr(deed.times)} ${link(deed.race)} ${link(deed.unit)} ${link(deed.faction)}`;
    if (deed.element || deed.type || deed.item) {
      s += ` ${rul.tr("commendationWith")} ${link(deed.item)} ${link(deed.type)} ${link(deed.element)}`;
    }
    return s;
  }
  function link(id) {
    if (id == null)
      return "";
    return `<a href="${"##" + id}" class="${rul.article(id) ? "" : "dead"}">${rul.tr(id)}</a>`;
  }
  function stripPediaMarkup(t) {
    if (t != null && t.indexOf("{") != -1) {
      t = t.replace(/\{NEWLINE\}/g, "\n");
      t = t.replace(/^\s+/g, "");
      t = t.replace(/\{[^}]+\}/g, " ");
    }
    return t;
  }

  // src/Conditions.svelte
  function get_each_context8(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i][0];
    child_ctx[2] = list[i][1];
    return child_ctx;
  }
  function create_each_block8(ctx) {
    let linkspage;
    let current;
    linkspage = new LinksPage_default({
      props: {
        links: ctx[2],
        title: rul.tr(ctx[1])
      }
    });
    return {
      c() {
        create_component(linkspage.$$.fragment);
      },
      m(target, anchor) {
        mount_component(linkspage, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const linkspage_changes = {};
        if (dirty & 1)
          linkspage_changes.links = ctx2[2];
        if (dirty & 1)
          linkspage_changes.title = rul.tr(ctx2[1]);
        linkspage.$set(linkspage_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(linkspage.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linkspage.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(linkspage, detaching);
      }
    };
  }
  function create_fragment14(ctx) {
    let each_1_anchor;
    let current;
    let each_value = sortFirstLast(ctx[0], { exclude: ["type"] }).all;
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block8(get_each_context8(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          each_value = sortFirstLast(ctx2[0], { exclude: ["type"] }).all;
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context8(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block8(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function instance14($$self, $$props, $$invalidate) {
    let { conditions } = $$props;
    console.log(conditions);
    console.log(sortFirstLast(conditions));
    $$self.$$set = ($$props2) => {
      if ("conditions" in $$props2)
        $$invalidate(0, conditions = $$props2.conditions);
    };
    return [conditions];
  }
  var Conditions = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance14, create_fragment14, safe_not_equal, { conditions: 0 });
    }
  };
  var Conditions_default = Conditions;

  // src/BaseServices.svelte
  function get_each_context9(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i];
    const constants_0 = rul.baseServices[child_ctx[1]];
    child_ctx[2] = constants_0;
    return child_ctx;
  }
  function create_each_block9(ctx) {
    let tr1;
    let td0;
    let a;
    let tr0;
    let a_href_value;
    let t0;
    let td1;
    let linkslist;
    let t1;
    let tr1_class_value;
    let current;
    tr0 = new Tr_default({ props: { s: rul.tr(ctx[1]) } });
    linkslist = new LinksList_default({
      props: { items: ctx[2].providedBy }
    });
    return {
      c() {
        tr1 = element("tr");
        td0 = element("td");
        a = element("a");
        create_component(tr0.$$.fragment);
        t0 = space();
        td1 = element("td");
        create_component(linkslist.$$.fragment);
        t1 = space();
        attr(a, "class", ".services");
        attr(a, "color", "cyan");
        attr(a, "href", a_href_value = "##" + ctx[1]);
        attr(tr1, "class", tr1_class_value = ctx[1] == ctx[0] ? "highlight" : "");
      },
      m(target, anchor) {
        insert(target, tr1, anchor);
        append(tr1, td0);
        append(td0, a);
        mount_component(tr0, a, null);
        append(tr1, t0);
        append(tr1, td1);
        mount_component(linkslist, td1, null);
        append(tr1, t1);
        current = true;
      },
      p(ctx2, dirty) {
        if (!current || dirty & 1 && tr1_class_value !== (tr1_class_value = ctx2[1] == ctx2[0] ? "highlight" : "")) {
          attr(tr1, "class", tr1_class_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr0.$$.fragment, local);
        transition_in(linkslist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr0.$$.fragment, local);
        transition_out(linkslist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr1);
        destroy_component(tr0);
        destroy_component(linkslist);
      }
    };
  }
  function create_fragment15(ctx) {
    let table;
    let tr2;
    let td0;
    let tr0;
    let td1;
    let tr1;
    let t;
    let current;
    tr0 = new Tr_default({ props: { s: "Service" } });
    tr1 = new Tr_default({ props: { s: "Facility" } });
    let each_value = rul.sortStrings(Object.keys(rul.baseServices));
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block9(get_each_context9(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        table = element("table");
        tr2 = element("tr");
        td0 = element("td");
        create_component(tr0.$$.fragment);
        td1 = element("td");
        create_component(tr1.$$.fragment);
        t = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(tr2, "class", "table-header");
        attr(table, "class", "main-table base-services");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        append(table, tr2);
        append(tr2, td0);
        mount_component(tr0, td0, null);
        append(tr2, td1);
        mount_component(tr1, td1, null);
        append(table, t);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          each_value = rul.sortStrings(Object.keys(rul.baseServices));
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context9(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block9(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr0.$$.fragment, local);
        transition_in(tr1.$$.fragment, local);
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(tr0.$$.fragment, local);
        transition_out(tr1.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_component(tr0);
        destroy_component(tr1);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance15($$self, $$props, $$invalidate) {
    let { query = null } = $$props;
    console.log(query);
    $$self.$$set = ($$props2) => {
      if ("query" in $$props2)
        $$invalidate(0, query = $$props2.query);
    };
    return [query];
  }
  var BaseServices = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance15, create_fragment15, safe_not_equal, { query: 0 });
    }
  };
  var BaseServices_default = BaseServices;

  // src/TableSort.svelte
  var import_generator_sort = __toESM(require_build());

  // src/SectionTable.svelte
  function get_each_context10(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[25] = list[i];
    return child_ctx;
  }
  function get_each_context_12(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[28] = list[i];
    return child_ctx;
  }
  function get_each_context_22(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[28] = list[i];
    return child_ctx;
  }
  function get_each_context_32(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[33] = list[i][0];
    child_ctx[34] = list[i][1];
    return child_ctx;
  }
  function get_each_context_42(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[37] = list[i];
    child_ctx[39] = i;
    return child_ctx;
  }
  function get_each_context_5(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[28] = list[i];
    child_ctx[39] = i;
    return child_ctx;
  }
  function create_each_block_5(ctx) {
    let html_tag;
    let raw_value = divider(ctx[39]) + "";
    let t;
    let span;
    let tr_1;
    let span_class_value;
    let current;
    let mounted;
    let dispose;
    tr_1 = new Tr_default({ props: { s: ctx[28] } });
    function click_handler() {
      return ctx[16](ctx[28]);
    }
    return {
      c() {
        html_tag = new HtmlTag(false);
        t = space();
        span = element("span");
        create_component(tr_1.$$.fragment);
        html_tag.a = t;
        attr(span, "class", span_class_value = "clickable " + (ctx[3].includes(ctx[28]) ? "on" : "off"));
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, t, anchor);
        insert(target, span, anchor);
        mount_component(tr_1, span, null);
        current = true;
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        const tr_1_changes = {};
        if (dirty[0] & 3)
          tr_1_changes.s = ctx[28];
        tr_1.$set(tr_1_changes);
        if (!current || dirty[0] & 11 && span_class_value !== (span_class_value = "clickable " + (ctx[3].includes(ctx[28]) ? "on" : "off"))) {
          attr(span, "class", span_class_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          html_tag.d();
        if (detaching)
          detach(t);
        if (detaching)
          detach(span);
        destroy_component(tr_1);
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block_42(ctx) {
    let option;
    let tr_1;
    let option_selected_value;
    let option_value_value;
    let current;
    tr_1 = new Tr_default({ props: { s: ctx[37] } });
    return {
      c() {
        option = element("option");
        create_component(tr_1.$$.fragment);
        option.selected = option_selected_value = ctx[4][ctx[33]] == ctx[37];
        option.__value = option_value_value = ctx[37];
        option.value = option.__value;
      },
      m(target, anchor) {
        insert(target, option, anchor);
        mount_component(tr_1, option, null);
        current = true;
      },
      p(ctx2, dirty) {
        const tr_1_changes = {};
        if (dirty[0] & 4)
          tr_1_changes.s = ctx2[37];
        tr_1.$set(tr_1_changes);
        if (!current || dirty[0] & 20 && option_selected_value !== (option_selected_value = ctx2[4][ctx2[33]] == ctx2[37])) {
          option.selected = option_selected_value;
        }
        if (!current || dirty[0] & 4 && option_value_value !== (option_value_value = ctx2[37])) {
          option.__value = option_value_value;
          option.value = option.__value;
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(option);
        destroy_component(tr_1);
      }
    };
  }
  function create_each_block_32(ctx) {
    let tr_1;
    let t;
    let select;
    let current;
    let mounted;
    let dispose;
    tr_1 = new Tr_default({ props: { s: ctx[33] } });
    let each_value_4 = ctx[34];
    let each_blocks = [];
    for (let i = 0; i < each_value_4.length; i += 1) {
      each_blocks[i] = create_each_block_42(get_each_context_42(ctx, each_value_4, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    function change_handler(...args) {
      return ctx[17](ctx[33], ...args);
    }
    return {
      c() {
        create_component(tr_1.$$.fragment);
        t = text(":\n  ");
        select = element("select");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
      },
      m(target, anchor) {
        mount_component(tr_1, target, anchor);
        insert(target, t, anchor);
        insert(target, select, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(select, null);
        }
        current = true;
        if (!mounted) {
          dispose = listen(select, "change", change_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        const tr_1_changes = {};
        if (dirty[0] & 4)
          tr_1_changes.s = ctx[33];
        tr_1.$set(tr_1_changes);
        if (dirty[0] & 20) {
          each_value_4 = ctx[34];
          let i;
          for (i = 0; i < each_value_4.length; i += 1) {
            const child_ctx = get_each_context_42(ctx, each_value_4, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_42(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(select, null);
            }
          }
          group_outros();
          for (i = each_value_4.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        for (let i = 0; i < each_value_4.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_component(tr_1, detaching);
        if (detaching)
          detach(t);
        if (detaching)
          detach(select);
        destroy_each(each_blocks, detaching);
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block_22(ctx) {
    let td;
    let span0;
    let raw0_value = invisible("\u25BC") + "";
    let t0;
    let tr_1;
    let t1;
    let span1;
    let raw1_value = (ctx[6] != ctx[28] ? invisible("\u25BC") : ctx[7] ? "\u25BC" : "\u25B2") + "";
    let t2;
    let td_id_value;
    let current;
    let mounted;
    let dispose;
    tr_1 = new Tr_default({ props: { s: ctx[28] } });
    function dragstart_handler(...args) {
      return ctx[19](ctx[28], ...args);
    }
    function drop_handler(...args) {
      return ctx[20](ctx[28], ...args);
    }
    function click_handler_1() {
      return ctx[21](ctx[28]);
    }
    return {
      c() {
        td = element("td");
        span0 = element("span");
        t0 = space();
        create_component(tr_1.$$.fragment);
        t1 = space();
        span1 = element("span");
        t2 = space();
        attr(span0, "class", "sort-order-arrow");
        attr(span1, "class", "sort-order-arrow");
        attr(td, "id", td_id_value = "thead " + ctx[28]);
        attr(td, "draggable", "true");
      },
      m(target, anchor) {
        insert(target, td, anchor);
        append(td, span0);
        span0.innerHTML = raw0_value;
        append(td, t0);
        mount_component(tr_1, td, null);
        append(td, t1);
        append(td, span1);
        span1.innerHTML = raw1_value;
        append(td, t2);
        current = true;
        if (!mounted) {
          dispose = [
            listen(td, "dragstart", dragstart_handler),
            listen(td, "drop", drop_handler),
            listen(td, "dragover", dragover_handler),
            listen(td, "click", click_handler_1)
          ];
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        const tr_1_changes = {};
        if (dirty[0] & 8)
          tr_1_changes.s = ctx[28];
        tr_1.$set(tr_1_changes);
        if ((!current || dirty[0] & 200) && raw1_value !== (raw1_value = (ctx[6] != ctx[28] ? invisible("\u25BC") : ctx[7] ? "\u25BC" : "\u25B2") + ""))
          span1.innerHTML = raw1_value;
        ;
        if (!current || dirty[0] & 8 && td_id_value !== (td_id_value = "thead " + ctx[28])) {
          attr(td, "id", td_id_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(td);
        destroy_component(tr_1);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_each_block_12(ctx) {
    let td;
    let value;
    let td_class_value;
    let current;
    value = new Value_default({
      props: {
        nobr: 20,
        val: ctx[25].sortField(ctx[28], true)
      }
    });
    return {
      c() {
        td = element("td");
        create_component(value.$$.fragment);
        attr(td, "class", td_class_value = "st-" + ctx[28]);
      },
      m(target, anchor) {
        insert(target, td, anchor);
        mount_component(value, td, null);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty[0] & 16777224)
          value_changes.val = ctx2[25].sortField(ctx2[28], true);
        value.$set(value_changes);
        if (!current || dirty[0] & 8 && td_class_value !== (td_class_value = "st-" + ctx2[28])) {
          attr(td, "class", td_class_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(td);
        destroy_component(value);
      }
    };
  }
  function create_each_block10(ctx) {
    let tr_1;
    let t;
    let current;
    let each_value_1 = ctx[3];
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_12(get_each_context_12(ctx, each_value_1, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        tr_1 = element("tr");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t = space();
      },
      m(target, anchor) {
        insert(target, tr_1, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(tr_1, null);
        }
        append(tr_1, t);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty[0] & 16777224) {
          each_value_1 = ctx2[3];
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_12(ctx2, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_12(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(tr_1, t);
            }
          }
          group_outros();
          for (i = each_value_1.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_1.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr_1);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_default_slot(ctx) {
    let table;
    let thead;
    let t;
    let tbody;
    let current;
    let each_value_2 = ctx[3];
    let each_blocks_1 = [];
    for (let i = 0; i < each_value_2.length; i += 1) {
      each_blocks_1[i] = create_each_block_22(get_each_context_22(ctx, each_value_2, i));
    }
    const out = (i) => transition_out(each_blocks_1[i], 1, 1, () => {
      each_blocks_1[i] = null;
    });
    let each_value = ctx[24];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block10(get_each_context10(ctx, each_value, i));
    }
    const out_1 = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        table = element("table");
        thead = element("thead");
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].c();
        }
        t = space();
        tbody = element("tbody");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(table, "class", "section-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        append(table, thead);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].m(thead, null);
        }
        append(table, t);
        append(table, tbody);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(tbody, null);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty[0] & 4808) {
          each_value_2 = ctx2[3];
          let i;
          for (i = 0; i < each_value_2.length; i += 1) {
            const child_ctx = get_each_context_22(ctx2, each_value_2, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
              transition_in(each_blocks_1[i], 1);
            } else {
              each_blocks_1[i] = create_each_block_22(child_ctx);
              each_blocks_1[i].c();
              transition_in(each_blocks_1[i], 1);
              each_blocks_1[i].m(thead, null);
            }
          }
          group_outros();
          for (i = each_value_2.length; i < each_blocks_1.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (dirty[0] & 16777224) {
          each_value = ctx2[24];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context10(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block10(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(tbody, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out_1(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_2.length; i += 1) {
          transition_in(each_blocks_1[i]);
        }
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks_1 = each_blocks_1.filter(Boolean);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          transition_out(each_blocks_1[i]);
        }
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_each(each_blocks_1, detaching);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_fragment16(ctx) {
    let p0;
    let t0;
    let p1;
    let t1;
    let input;
    let input_placeholder_value;
    let t2;
    let paginatedlist;
    let current;
    let mounted;
    let dispose;
    let each_value_5 = [...ctx[0], ...ctx[1]];
    let each_blocks_1 = [];
    for (let i = 0; i < each_value_5.length; i += 1) {
      each_blocks_1[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
    }
    const out = (i) => transition_out(each_blocks_1[i], 1, 1, () => {
      each_blocks_1[i] = null;
    });
    let each_value_3 = Object.entries(ctx[2]);
    let each_blocks = [];
    for (let i = 0; i < each_value_3.length; i += 1) {
      each_blocks[i] = create_each_block_32(get_each_context_32(ctx, each_value_3, i));
    }
    const out_1 = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    paginatedlist = new PaginatedList_default({
      props: {
        items: ctx[5],
        $$slots: {
          default: [
            create_default_slot,
            ({ paginatedItems }) => ({ 24: paginatedItems }),
            ({ paginatedItems }) => [paginatedItems ? 16777216 : 0]
          ]
        },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        p0 = element("p");
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].c();
        }
        t0 = space();
        p1 = element("p");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t1 = space();
        input = element("input");
        t2 = space();
        create_component(paginatedlist.$$.fragment);
        attr(p0, "class", "extra-fields");
        attr(input, "type", "text");
        attr(input, "placeholder", input_placeholder_value = tr("Filter..."));
      },
      m(target, anchor) {
        insert(target, p0, anchor);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].m(p0, null);
        }
        insert(target, t0, anchor);
        insert(target, p1, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(p1, null);
        }
        append(p1, t1);
        append(p1, input);
        set_input_value(input, ctx[8]);
        insert(target, t2, anchor);
        mount_component(paginatedlist, target, anchor);
        current = true;
        if (!mounted) {
          dispose = [
            listen(input, "input", ctx[18]),
            listen(input, "keyup", ctx[10])
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & 2059) {
          each_value_5 = [...ctx2[0], ...ctx2[1]];
          let i;
          for (i = 0; i < each_value_5.length; i += 1) {
            const child_ctx = get_each_context_5(ctx2, each_value_5, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
              transition_in(each_blocks_1[i], 1);
            } else {
              each_blocks_1[i] = create_each_block_5(child_ctx);
              each_blocks_1[i].c();
              transition_in(each_blocks_1[i], 1);
              each_blocks_1[i].m(p0, null);
            }
          }
          group_outros();
          for (i = each_value_5.length; i < each_blocks_1.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (dirty[0] & 1044) {
          each_value_3 = Object.entries(ctx2[2]);
          let i;
          for (i = 0; i < each_value_3.length; i += 1) {
            const child_ctx = get_each_context_32(ctx2, each_value_3, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_32(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(p1, t1);
            }
          }
          group_outros();
          for (i = each_value_3.length; i < each_blocks.length; i += 1) {
            out_1(i);
          }
          check_outros();
        }
        if (dirty[0] & 256 && input.value !== ctx2[8]) {
          set_input_value(input, ctx2[8]);
        }
        const paginatedlist_changes = {};
        if (dirty[0] & 32)
          paginatedlist_changes.items = ctx2[5];
        if (dirty[0] & 16777416 | dirty[1] & 1024) {
          paginatedlist_changes.$$scope = { dirty, ctx: ctx2 };
        }
        paginatedlist.$set(paginatedlist_changes);
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_5.length; i += 1) {
          transition_in(each_blocks_1[i]);
        }
        for (let i = 0; i < each_value_3.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(paginatedlist.$$.fragment, local);
        current = true;
      },
      o(local) {
        each_blocks_1 = each_blocks_1.filter(Boolean);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          transition_out(each_blocks_1[i]);
        }
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(paginatedlist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(p0);
        destroy_each(each_blocks_1, detaching);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(p1);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(t2);
        destroy_component(paginatedlist, detaching);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  var dragover_handler = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  function instance16($$self, $$props, $$invalidate) {
    let { entries } = $$props;
    let { fields } = $$props;
    let { extraFields = [] } = $$props;
    let { filters = {} } = $$props;
    let shownFields;
    let { aId } = $$props;
    let aIdLoaded;
    let filtersSelected = {};
    let sorted;
    let sortField;
    let filterId = "";
    let sortDescending = false;
    onMount(() => {
    });
    function sortBy(field) {
      if (field) {
        if (field != sortField) {
          $$invalidate(6, sortField = field);
          $$invalidate(7, sortDescending = field == "id" ? false : true);
        } else {
          $$invalidate(7, sortDescending = !sortDescending);
        }
      }
      if (shownFields.includes(field)) {
        resort();
      }
    }
    function resort() {
      $$invalidate(5, sorted = [...entries]);
      for (let k in filtersSelected) {
        if (filtersSelected[k] != null)
          $$invalidate(5, sorted = sorted.filter((a) => {
            if (filtersSelected[k] == "any")
              return true;
            let v = a.sortField(k, filtersSelected[k]);
            return v === true || v == filtersSelected[k] || Array.isArray(v) && v.includes(filtersSelected[k]);
          }));
      }
      if (filterId?.length > 0) {
        $$invalidate(5, sorted = sorted.filter((a) => a.sortField("id").toLowerCase().match(filterId)));
      }
      $$invalidate(5, sorted = sorted.sort((a, b) => (a.sortField(sortField) || 0) > (b.sortField(sortField) || 0) == sortDescending ? -1 : 1));
    }
    function toggleField(field) {
      if (shownFields.includes(field)) {
        shownFields.splice(shownFields.indexOf(field), 1);
      } else {
        $$invalidate(3, shownFields = [...shownFields, field]);
      }
      $$invalidate(3, shownFields = [...shownFields]);
    }
    function toggleFilter(field) {
      if (field == filter) {
        filter = null;
      } else {
        filter = field;
      }
      resort();
    }
    function moveField(field, after) {
      let fi = shownFields.indexOf(field);
      if (fi == -1)
        return;
      shownFields.splice(fi, 1);
      let ai = shownFields.indexOf(after);
      if (ai == fi)
        ai++;
      if (ai == -1)
        ai = 0;
      shownFields.splice(ai, 0, field);
      $$invalidate(3, shownFields = [...shownFields]);
    }
    function loadFields() {
      $$invalidate(3, shownFields = ["id", ...fields]);
      let saved = localStorage["xpediaColumnOrder" + aId];
      if (saved) {
        try {
          let parsed = JSON.parse(saved);
          if (parsed.allFields) {
            $$invalidate(3, shownFields = parsed.allFields);
            $$invalidate(4, filtersSelected = parsed.filtersSelected);
            $$invalidate(6, sortField = parsed.sortField);
            $$invalidate(7, sortDescending = parsed.sortDescending);
          }
        } catch {
        }
        $$invalidate(15, aIdLoaded = aId);
      }
      resort();
    }
    const click_handler = (field) => toggleField(field);
    const change_handler = (filter2, event) => {
      $$invalidate(4, filtersSelected[filter2] = event.target.value, filtersSelected);
      resort();
    };
    function input_input_handler() {
      filterId = this.value;
      $$invalidate(8, filterId);
    }
    const dragstart_handler = (field, e) => e.dataTransfer.setData("field", field);
    const drop_handler = (field, e) => moveField(e.dataTransfer.getData("field"), field);
    const click_handler_1 = (field) => sortBy(field);
    $$self.$$set = ($$props2) => {
      if ("entries" in $$props2)
        $$invalidate(13, entries = $$props2.entries);
      if ("fields" in $$props2)
        $$invalidate(0, fields = $$props2.fields);
      if ("extraFields" in $$props2)
        $$invalidate(1, extraFields = $$props2.extraFields);
      if ("filters" in $$props2)
        $$invalidate(2, filters = $$props2.filters);
      if ("aId" in $$props2)
        $$invalidate(14, aId = $$props2.aId);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & 57592) {
        $: {
          $$invalidate(5, sorted = sorted || [...entries]);
          if (aIdLoaded == null || aIdLoaded != aId)
            loadFields();
          localStorage["xpediaColumnOrder" + aId] = JSON.stringify({
            allFields: shownFields,
            filtersSelected,
            sortField,
            sortDescending
          });
        }
      }
    };
    return [
      fields,
      extraFields,
      filters,
      shownFields,
      filtersSelected,
      sorted,
      sortField,
      sortDescending,
      filterId,
      sortBy,
      resort,
      toggleField,
      moveField,
      entries,
      aId,
      aIdLoaded,
      click_handler,
      change_handler,
      input_input_handler,
      dragstart_handler,
      drop_handler,
      click_handler_1
    ];
  }
  var SectionTable = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance16, create_fragment16, safe_not_equal, {
        entries: 13,
        fields: 0,
        extraFields: 1,
        filters: 2,
        aId: 14
      }, null, [-1, -1]);
    }
  };
  var SectionTable_default = SectionTable;

  // src/CanvasImage.svelte
  function create_catch_block3(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_then_block3(ctx) {
    let div;
    let img_1;
    let img_1_src_value;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        img_1 = element("img");
        attr(img_1, "alt", ctx[4]);
        attr(img_1, "class", "sprite");
        if (!src_url_equal(img_1.src, img_1_src_value = ctx[8]))
          attr(img_1, "src", img_1_src_value);
        set_style(div, "display", "inline-block");
        set_style(div, "overflow", "hidden");
        set_style(div, "max-width", ctx[1] + "px");
        set_style(div, "max-height", ctx[2] + "px");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, img_1);
        ctx[7](img_1);
        if (!mounted) {
          dispose = listen(img_1, "load", ctx[5]);
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & 16) {
          attr(img_1, "alt", ctx2[4]);
        }
        if (dirty & 1 && !src_url_equal(img_1.src, img_1_src_value = ctx2[8])) {
          attr(img_1, "src", img_1_src_value);
        }
        if (dirty & 2) {
          set_style(div, "max-width", ctx2[1] + "px");
        }
        if (dirty & 4) {
          set_style(div, "max-height", ctx2[2] + "px");
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        ctx[7](null);
        mounted = false;
        dispose();
      }
    };
  }
  function create_pending_block3(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_fragment17(ctx) {
    let await_block_anchor;
    let promise;
    let info = {
      ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block3,
      then: create_then_block3,
      catch: create_catch_block3,
      value: 8
    };
    handle_promise(promise = ctx[0], info);
    return {
      c() {
        await_block_anchor = empty();
        info.block.c();
      },
      m(target, anchor) {
        insert(target, await_block_anchor, anchor);
        info.block.m(target, info.anchor = anchor);
        info.mount = () => await_block_anchor.parentNode;
        info.anchor = await_block_anchor;
      },
      p(new_ctx, [dirty]) {
        ctx = new_ctx;
        info.ctx = ctx;
        if (dirty & 1 && promise !== (promise = ctx[0]) && handle_promise(promise, info)) {
        } else {
          update_await_block_branch(info, ctx, dirty);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(await_block_anchor);
        info.block.d(detaching);
        info.token = null;
        info = null;
      }
    };
  }
  function instance17($$self, $$props, $$invalidate) {
    let { src = null } = $$props;
    let { item = null } = $$props;
    let { maxWidth = null } = $$props;
    let { maxHeight = null } = $$props;
    let img;
    let alt;
    function resize() {
      $$invalidate(3, img.style.width = `${img.naturalWidth * 2}px`, img);
      $$invalidate(3, img.style.height = `${img.naturalHeight * 2}px`, img);
      console.log(maxWidth, maxHeight);
    }
    function img_1_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        img = $$value;
        $$invalidate(3, img);
      });
    }
    $$self.$$set = ($$props2) => {
      if ("src" in $$props2)
        $$invalidate(0, src = $$props2.src);
      if ("item" in $$props2)
        $$invalidate(6, item = $$props2.item);
      if ("maxWidth" in $$props2)
        $$invalidate(1, maxWidth = $$props2.maxWidth);
      if ("maxHeight" in $$props2)
        $$invalidate(2, maxHeight = $$props2.maxHeight);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 65) {
        $: {
          if (typeof src == "string") {
            $$invalidate(4, alt = src);
            $$invalidate(0, src = rul.sprite(src));
          }
          if (item) {
            $$invalidate(4, alt = item.id);
            $$invalidate(0, src = rul.sprite(item.sprite));
            $$invalidate(1, maxWidth = 32 * item.invWidth);
            $$invalidate(2, maxHeight = 32 * item.invHeight);
          }
        }
      }
    };
    return [src, maxWidth, maxHeight, img, alt, resize, item, img_1_binding];
  }
  var CanvasImage = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance17, create_fragment17, safe_not_equal, {
        src: 0,
        item: 6,
        maxWidth: 1,
        maxHeight: 2
      });
    }
  };
  var CanvasImage_default = CanvasImage;

  // src/AlterList.svelte
  function get_each_context11(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i];
    child_ctx[3] = i;
    return child_ctx;
  }
  function create_if_block10(ctx) {
    let sup;
    return {
      c() {
        sup = element("sup");
        sup.textContent = "?";
        attr(sup, "class", "tipmark");
      },
      m(target, anchor) {
        insert(target, sup, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(sup);
      }
    };
  }
  function create_each_block11(ctx) {
    let html_tag;
    let raw0_value = divider(ctx[3]) + "";
    let t0;
    let nobr;
    let span;
    let tr2;
    let t1;
    let t2;
    let span_tooltip_value;
    let t3;
    let value;
    let t4;
    let html_tag_1;
    let raw1_value = (rul.lang[ctx[1] + "_" + ctx[0][ctx[1]]] || "") + "";
    let t5;
    let current;
    tr2 = new Tr_default({ props: { s: ctx[1] } });
    let if_block = "tip_" + ctx[1] in rul.lang && create_if_block10(ctx);
    value = new Value_default({
      props: { val: ctx[0][ctx[1]] }
    });
    return {
      c() {
        html_tag = new HtmlTag(false);
        t0 = text("\xA0");
        nobr = element("nobr");
        span = element("span");
        create_component(tr2.$$.fragment);
        t1 = space();
        if (if_block)
          if_block.c();
        t2 = text("\r\n            :");
        t3 = space();
        create_component(value.$$.fragment);
        t4 = space();
        html_tag_1 = new HtmlTag(false);
        t5 = space();
        html_tag.a = t0;
        attr(span, "tooltip", span_tooltip_value = "tip_" + ctx[1]);
        html_tag_1.a = t5;
      },
      m(target, anchor) {
        html_tag.m(raw0_value, target, anchor);
        insert(target, t0, anchor);
        insert(target, nobr, anchor);
        append(nobr, span);
        mount_component(tr2, span, null);
        append(span, t1);
        if (if_block)
          if_block.m(span, null);
        append(span, t2);
        append(nobr, t3);
        mount_component(value, nobr, null);
        append(nobr, t4);
        html_tag_1.m(raw1_value, nobr);
        append(nobr, t5);
        current = true;
      },
      p(ctx2, dirty) {
        const tr_changes = {};
        if (dirty & 1)
          tr_changes.s = ctx2[1];
        tr2.$set(tr_changes);
        if ("tip_" + ctx2[1] in rul.lang) {
          if (if_block) {
          } else {
            if_block = create_if_block10(ctx2);
            if_block.c();
            if_block.m(span, t2);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (!current || dirty & 1 && span_tooltip_value !== (span_tooltip_value = "tip_" + ctx2[1])) {
          attr(span, "tooltip", span_tooltip_value);
        }
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[0][ctx2[1]];
        value.$set(value_changes);
        if ((!current || dirty & 1) && raw1_value !== (raw1_value = (rul.lang[ctx2[1] + "_" + ctx2[0][ctx2[1]]] || "") + ""))
          html_tag_1.p(raw1_value);
      },
      i(local) {
        if (current)
          return;
        transition_in(tr2.$$.fragment, local);
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr2.$$.fragment, local);
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          html_tag.d();
        if (detaching)
          detach(t0);
        if (detaching)
          detach(nobr);
        destroy_component(tr2);
        if (if_block)
          if_block.d();
        destroy_component(value);
      }
    };
  }
  function create_fragment18(ctx) {
    let tr2;
    let td;
    let small;
    let current;
    let each_value = Object.keys(ctx[0]).sort();
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block11(get_each_context11(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        tr2 = element("tr");
        td = element("td");
        small = element("small");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(td, "colspan", "4");
        attr(td, "class", "attacks-alter");
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td);
        append(td, small);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(small, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          each_value = Object.keys(ctx2[0]).sort();
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context11(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block11(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(small, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance18($$self, $$props, $$invalidate) {
    let { items } = $$props;
    $$self.$$set = ($$props2) => {
      if ("items" in $$props2)
        $$invalidate(0, items = $$props2.items);
    };
    return [items];
  }
  var AlterList = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance18, create_fragment18, safe_not_equal, { items: 0 });
    }
  };
  var AlterList_default = AlterList;

  // src/UseCost.svelte
  function get_each_context12(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i];
    return child_ctx;
  }
  function create_if_block11(ctx) {
    let nobr;
    let em;
    let t0_value = ctx[0].time + "";
    let t0;
    let t1;
    let t2_value = ctx[1] ? "" : "%";
    let t2;
    let t3;
    let small;
    let tr2;
    let t4;
    let each_1_anchor;
    let current;
    tr2 = new Tr_default({ props: { s: "TU" } });
    let each_value = Object.keys(ctx[0]);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block12(get_each_context12(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        nobr = element("nobr");
        em = element("em");
        t0 = text(t0_value);
        t1 = space();
        t2 = text(t2_value);
        t3 = space();
        small = element("small");
        create_component(tr2.$$.fragment);
        t4 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        insert(target, nobr, anchor);
        append(nobr, em);
        append(em, t0);
        append(nobr, t1);
        append(nobr, t2);
        append(nobr, t3);
        append(nobr, small);
        mount_component(tr2, small, null);
        insert(target, t4, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 1) && t0_value !== (t0_value = ctx2[0].time + ""))
          set_data(t0, t0_value);
        if ((!current || dirty & 2) && t2_value !== (t2_value = ctx2[1] ? "" : "%"))
          set_data(t2, t2_value);
        if (dirty & 1) {
          each_value = Object.keys(ctx2[0]);
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context12(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block12(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr2.$$.fragment, local);
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(tr2.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(nobr);
        destroy_component(tr2);
        if (detaching)
          detach(t4);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_if_block_17(ctx) {
    let br;
    let t0;
    let nobr;
    let value;
    let small;
    let tr2;
    let t1;
    let current;
    value = new Value_default({
      props: { val: ctx[0][ctx[2]] }
    });
    tr2 = new Tr_default({ props: { s: ctx[2] } });
    return {
      c() {
        br = element("br");
        t0 = space();
        nobr = element("nobr");
        create_component(value.$$.fragment);
        small = element("small");
        create_component(tr2.$$.fragment);
        t1 = space();
      },
      m(target, anchor) {
        insert(target, br, anchor);
        insert(target, t0, anchor);
        insert(target, nobr, anchor);
        mount_component(value, nobr, null);
        append(nobr, small);
        mount_component(tr2, small, null);
        append(nobr, t1);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[0][ctx2[2]];
        value.$set(value_changes);
        const tr_changes = {};
        if (dirty & 1)
          tr_changes.s = ctx2[2];
        tr2.$set(tr_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        transition_in(tr2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        transition_out(tr2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(br);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(nobr);
        destroy_component(value);
        destroy_component(tr2);
      }
    };
  }
  function create_each_block12(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ctx[2] != "time" && ctx[0][ctx[2]] != 0 && create_if_block_17(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (ctx2[2] != "time" && ctx2[0][ctx2[2]] != 0) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_17(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_fragment19(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ctx[0] && create_if_block11(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (ctx2[0]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block11(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance19($$self, $$props, $$invalidate) {
    let { cost } = $$props;
    let { flatTime } = $$props;
    $$self.$$set = ($$props2) => {
      if ("cost" in $$props2)
        $$invalidate(0, cost = $$props2.cost);
      if ("flatTime" in $$props2)
        $$invalidate(1, flatTime = $$props2.flatTime);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $: {
          console.log(cost);
        }
      }
    };
    return [cost, flatTime];
  }
  var UseCost = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance19, create_fragment19, safe_not_equal, { cost: 0, flatTime: 1 });
    }
  };
  var UseCost_default = UseCost;

  // src/SecondaryTable.svelte
  function create_fragment20(ctx) {
    let tr1;
    let td0;
    let tr0;
    let t;
    let tr2;
    let td1;
    let current;
    tr0 = new Tr_default({ props: { s: ctx[0] } });
    const default_slot_template = ctx[2].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
    return {
      c() {
        tr1 = element("tr");
        td0 = element("td");
        create_component(tr0.$$.fragment);
        t = space();
        tr2 = element("tr");
        td1 = element("td");
        if (default_slot)
          default_slot.c();
        attr(td0, "colspan", "2");
        attr(td0, "class", "table-subheader");
        attr(td1, "colspan", "2");
        attr(td1, "class", "secondary-table-td");
      },
      m(target, anchor) {
        insert(target, tr1, anchor);
        append(tr1, td0);
        mount_component(tr0, td0, null);
        insert(target, t, anchor);
        insert(target, tr2, anchor);
        append(tr2, td1);
        if (default_slot) {
          default_slot.m(td1, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        const tr0_changes = {};
        if (dirty & 1)
          tr0_changes.s = ctx2[0];
        tr0.$set(tr0_changes);
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 2)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr0.$$.fragment, local);
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(tr0.$$.fragment, local);
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr1);
        destroy_component(tr0);
        if (detaching)
          detach(t);
        if (detaching)
          detach(tr2);
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function instance20($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let { text: text2 } = $$props;
    $$self.$$set = ($$props2) => {
      if ("text" in $$props2)
        $$invalidate(0, text2 = $$props2.text);
      if ("$$scope" in $$props2)
        $$invalidate(1, $$scope = $$props2.$$scope);
    };
    return [text2, $$scope, slots];
  }
  var SecondaryTable = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance20, create_fragment20, safe_not_equal, { text: 0 });
    }
  };
  var SecondaryTable_default = SecondaryTable;

  // src/Damage.svelte
  function create_if_block12(ctx) {
    let t0_value = ctx[0].pellets > 1 && ctx[0].damageBonus ? "(" : "";
    let t0;
    let t1;
    let em;
    let t2_value = (ctx[0].damage || 0) + "";
    let t2;
    let t3;
    let small;
    let specialbonus;
    let t4;
    let t5_value = ctx[0].pellets > 1 && ctx[0].damageBonus ? ")" : "";
    let t5;
    let t6;
    let t7_value = ctx[0].pellets > 1 ? " \xD7" + ctx[0].pellets : "";
    let t7;
    let t8;
    let br;
    let t9;
    let if_block_anchor;
    let current;
    specialbonus = new SpecialBonus_default({
      props: {
        plus: true,
        bonus: ctx[0].damageBonus
      }
    });
    let if_block = ctx[0].damageType != null && create_if_block_18(ctx);
    return {
      c() {
        t0 = text(t0_value);
        t1 = space();
        em = element("em");
        t2 = text(t2_value);
        t3 = space();
        small = element("small");
        create_component(specialbonus.$$.fragment);
        t4 = space();
        t5 = text(t5_value);
        t6 = space();
        t7 = text(t7_value);
        t8 = space();
        br = element("br");
        t9 = space();
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, t1, anchor);
        insert(target, em, anchor);
        append(em, t2);
        insert(target, t3, anchor);
        insert(target, small, anchor);
        mount_component(specialbonus, small, null);
        append(small, t4);
        append(small, t5);
        insert(target, t6, anchor);
        insert(target, t7, anchor);
        insert(target, t8, anchor);
        insert(target, br, anchor);
        insert(target, t9, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 1) && t0_value !== (t0_value = ctx2[0].pellets > 1 && ctx2[0].damageBonus ? "(" : ""))
          set_data(t0, t0_value);
        if ((!current || dirty & 1) && t2_value !== (t2_value = (ctx2[0].damage || 0) + ""))
          set_data(t2, t2_value);
        const specialbonus_changes = {};
        if (dirty & 1)
          specialbonus_changes.bonus = ctx2[0].damageBonus;
        specialbonus.$set(specialbonus_changes);
        if ((!current || dirty & 1) && t5_value !== (t5_value = ctx2[0].pellets > 1 && ctx2[0].damageBonus ? ")" : ""))
          set_data(t5, t5_value);
        if ((!current || dirty & 1) && t7_value !== (t7_value = ctx2[0].pellets > 1 ? " \xD7" + ctx2[0].pellets : ""))
          set_data(t7, t7_value);
        if (ctx2[0].damageType != null) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_18(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(specialbonus.$$.fragment, local);
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(specialbonus.$$.fragment, local);
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(em);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(small);
        destroy_component(specialbonus);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(t7);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(br);
        if (detaching)
          detach(t9);
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block_18(ctx) {
    let link2;
    let current;
    link2 = new Link_default({
      props: {
        href: damageTypes[ctx[0].damageType]
      }
    });
    return {
      c() {
        create_component(link2.$$.fragment);
      },
      m(target, anchor) {
        mount_component(link2, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const link_changes = {};
        if (dirty & 1)
          link_changes.href = damageTypes[ctx2[0].damageType];
        link2.$set(link_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(link2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(link2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(link2, detaching);
      }
    };
  }
  function create_fragment21(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ("damage" in ctx[0] || "damageType" in ctx[0]) && create_if_block12(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if ("damage" in ctx2[0] || "damageType" in ctx2[0]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block12(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance21($$self, $$props, $$invalidate) {
    let { attack } = $$props;
    $$self.$$set = ($$props2) => {
      if ("attack" in $$props2)
        $$invalidate(0, attack = $$props2.attack);
    };
    return [attack];
  }
  var Damage = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance21, create_fragment21, safe_not_equal, { attack: 0 });
    }
  };
  var Damage_default = Damage;

  // src/Item.svelte
  function get_each_context13(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[8] = list[i][0];
    child_ctx[9] = list[i][1];
    return child_ctx;
  }
  function get_each_context_23(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[16] = list[i];
    child_ctx[15] = i;
    return child_ctx;
  }
  function get_each_context_13(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[12] = list[i];
    child_ctx[15] = i;
    const constants_0 = rul.manufacture[child_ctx[12]];
    child_ctx[13] = constants_0;
    return child_ctx;
  }
  function get_each_context_33(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[18] = list[i];
    return child_ctx;
  }
  function create_if_block_122(ctx) {
    let tr2;
    let td;
    let div;
    let current;
    let if_block = ctx[1].length > 0 && create_if_block_132(ctx);
    return {
      c() {
        tr2 = element("tr");
        td = element("td");
        div = element("div");
        if (if_block)
          if_block.c();
        attr(td, "colspan", "2");
        attr(td, "class", "td-attacks-table");
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td);
        append(td, div);
        if (if_block)
          if_block.m(div, null);
        current = true;
      },
      p(ctx2, dirty) {
        if (ctx2[1].length > 0) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 2) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_132(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(div, null);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        if (if_block)
          if_block.d();
      }
    };
  }
  function create_if_block_132(ctx) {
    let table;
    let thead;
    let current_block_type_index;
    let if_block0;
    let t0;
    let td;
    let tr2;
    let t1;
    let t2;
    let current;
    const if_block_creators = [create_if_block_20, create_else_block_3];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[0].battleType == 2)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    tr2 = new Tr_default({ props: { s: "damage" } });
    let each_value_3 = ctx[1];
    let each_blocks = [];
    for (let i = 0; i < each_value_3.length; i += 1) {
      each_blocks[i] = create_each_block_33(get_each_context_33(ctx, each_value_3, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    let if_block1 = ctx[0].damageAlter && ctx[0].battleType != 2 && create_if_block_142(ctx);
    return {
      c() {
        table = element("table");
        thead = element("thead");
        if_block0.c();
        t0 = space();
        td = element("td");
        create_component(tr2.$$.fragment);
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t2 = space();
        if (if_block1)
          if_block1.c();
        attr(table, "class", "attacks-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        append(table, thead);
        if_blocks[current_block_type_index].m(thead, null);
        append(thead, t0);
        append(thead, td);
        mount_component(tr2, td, null);
        append(table, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        append(table, t2);
        if (if_block1)
          if_block1.m(table, null);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block0 = if_blocks[current_block_type_index];
          if (!if_block0) {
            if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block0.c();
          } else {
            if_block0.p(ctx2, dirty);
          }
          transition_in(if_block0, 1);
          if_block0.m(thead, t0);
        }
        if (dirty & 3) {
          each_value_3 = ctx2[1];
          let i;
          for (i = 0; i < each_value_3.length; i += 1) {
            const child_ctx = get_each_context_33(ctx2, each_value_3, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_33(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, t2);
            }
          }
          group_outros();
          for (i = each_value_3.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (ctx2[0].damageAlter && ctx2[0].battleType != 2) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_142(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(table, null);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block0);
        transition_in(tr2.$$.fragment, local);
        for (let i = 0; i < each_value_3.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(if_block1);
        current = true;
      },
      o(local) {
        transition_out(if_block0);
        transition_out(tr2.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(if_block1);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        if_blocks[current_block_type_index].d();
        destroy_component(tr2);
        destroy_each(each_blocks, detaching);
        if (if_block1)
          if_block1.d();
      }
    };
  }
  function create_else_block_3(ctx) {
    let td0;
    let tr0;
    let t0;
    let td1;
    let tr1;
    let t1;
    let tr2;
    let t2;
    let t3_value = (ctx[0].kneelBonus || 120) + "";
    let t3;
    let t4;
    let t5_value = ctx[0].dropoff + "";
    let t5;
    let t6;
    let tr3;
    let t7;
    let html_tag;
    let t8;
    let td2;
    let tr4;
    let current;
    tr0 = new Tr_default({ props: { s: "mode" } });
    tr1 = new Tr_default({ props: { s: "accuracy" } });
    tr2 = new Tr_default({ props: { s: "kneeling" } });
    tr3 = new Tr_default({ props: { s: "accPerTile" } });
    tr4 = new Tr_default({ props: { s: "cost" } });
    return {
      c() {
        td0 = element("td");
        create_component(tr0.$$.fragment);
        t0 = space();
        td1 = element("td");
        create_component(tr1.$$.fragment);
        t1 = space();
        create_component(tr2.$$.fragment);
        t2 = space();
        t3 = text(t3_value);
        t4 = text("%\r\n                    -");
        t5 = text(t5_value);
        t6 = text("/");
        create_component(tr3.$$.fragment);
        t7 = space();
        html_tag = new HtmlTag(false);
        t8 = space();
        td2 = element("td");
        create_component(tr4.$$.fragment);
        html_tag.a = null;
      },
      m(target, anchor) {
        insert(target, td0, anchor);
        mount_component(tr0, td0, null);
        insert(target, t0, anchor);
        insert(target, td1, anchor);
        mount_component(tr1, td1, null);
        append(td1, t1);
        mount_component(tr2, td1, null);
        append(td1, t2);
        append(td1, t3);
        append(td1, t4);
        append(td1, t5);
        append(td1, t6);
        mount_component(tr3, td1, null);
        append(td1, t7);
        html_tag.m(ctx[4], td1);
        insert(target, t8, anchor);
        insert(target, td2, anchor);
        mount_component(tr4, td2, null);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 1) && t3_value !== (t3_value = (ctx2[0].kneelBonus || 120) + ""))
          set_data(t3, t3_value);
        if ((!current || dirty & 1) && t5_value !== (t5_value = ctx2[0].dropoff + ""))
          set_data(t5, t5_value);
        if (!current || dirty & 16)
          html_tag.p(ctx2[4]);
      },
      i(local) {
        if (current)
          return;
        transition_in(tr0.$$.fragment, local);
        transition_in(tr1.$$.fragment, local);
        transition_in(tr2.$$.fragment, local);
        transition_in(tr3.$$.fragment, local);
        transition_in(tr4.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr0.$$.fragment, local);
        transition_out(tr1.$$.fragment, local);
        transition_out(tr2.$$.fragment, local);
        transition_out(tr3.$$.fragment, local);
        transition_out(tr4.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(td0);
        destroy_component(tr0);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(td1);
        destroy_component(tr1);
        destroy_component(tr2);
        destroy_component(tr3);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(td2);
        destroy_component(tr4);
      }
    };
  }
  function create_if_block_20(ctx) {
    let td;
    return {
      c() {
        td = element("td");
        attr(td, "colspan", "3");
      },
      m(target, anchor) {
        insert(target, td, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(td);
      }
    };
  }
  function create_else_block_2(ctx) {
    let td0;
    let t0_value = rul.str(ctx[18].name) + "";
    let t0;
    let t1_value = ctx[18].shots == 1 ? "" : "\xD7" + ctx[18].shots;
    let t1;
    let t2;
    let td1;
    let em;
    let t3_value = ctx[18].accuracy + "";
    let t3;
    let t4_value = "%";
    let t4;
    let t5;
    let br;
    let t6;
    let specialbonus;
    let t7;
    let td2;
    let usecost;
    let t8;
    let current;
    let if_block0 = ctx[18].range && create_if_block_19(ctx);
    specialbonus = new SpecialBonus_default({
      props: {
        bonus: ctx[18].accuracyMultiplier
      }
    });
    usecost = new UseCost_default({
      props: {
        cost: ctx[18].cost,
        flatTime: ctx[18].flatTime
      }
    });
    let if_block1 = ctx[0].costPrime && create_if_block_182(ctx);
    return {
      c() {
        td0 = element("td");
        t0 = text(t0_value);
        t1 = text(t1_value);
        t2 = space();
        td1 = element("td");
        em = element("em");
        t3 = text(t3_value);
        t4 = text(t4_value);
        t5 = space();
        if (if_block0)
          if_block0.c();
        br = element("br");
        t6 = space();
        create_component(specialbonus.$$.fragment);
        t7 = space();
        td2 = element("td");
        create_component(usecost.$$.fragment);
        t8 = space();
        if (if_block1)
          if_block1.c();
        attr(em, "class", "big-number");
      },
      m(target, anchor) {
        insert(target, td0, anchor);
        append(td0, t0);
        append(td0, t1);
        insert(target, t2, anchor);
        insert(target, td1, anchor);
        append(td1, em);
        append(em, t3);
        append(td1, t4);
        append(td1, t5);
        if (if_block0)
          if_block0.m(td1, null);
        append(td1, br);
        append(td1, t6);
        mount_component(specialbonus, td1, null);
        insert(target, t7, anchor);
        insert(target, td2, anchor);
        mount_component(usecost, td2, null);
        append(td2, t8);
        if (if_block1)
          if_block1.m(td2, null);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 2) && t0_value !== (t0_value = rul.str(ctx2[18].name) + ""))
          set_data(t0, t0_value);
        if ((!current || dirty & 2) && t1_value !== (t1_value = ctx2[18].shots == 1 ? "" : "\xD7" + ctx2[18].shots))
          set_data(t1, t1_value);
        if ((!current || dirty & 2) && t3_value !== (t3_value = ctx2[18].accuracy + ""))
          set_data(t3, t3_value);
        if (ctx2[18].range) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_19(ctx2);
            if_block0.c();
            if_block0.m(td1, br);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        const specialbonus_changes = {};
        if (dirty & 2)
          specialbonus_changes.bonus = ctx2[18].accuracyMultiplier;
        specialbonus.$set(specialbonus_changes);
        const usecost_changes = {};
        if (dirty & 2)
          usecost_changes.cost = ctx2[18].cost;
        if (dirty & 2)
          usecost_changes.flatTime = ctx2[18].flatTime;
        usecost.$set(usecost_changes);
        if (ctx2[0].costPrime) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_182(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(td2, null);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(specialbonus.$$.fragment, local);
        transition_in(usecost.$$.fragment, local);
        transition_in(if_block1);
        current = true;
      },
      o(local) {
        transition_out(specialbonus.$$.fragment, local);
        transition_out(usecost.$$.fragment, local);
        transition_out(if_block1);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(td0);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(td1);
        if (if_block0)
          if_block0.d();
        destroy_component(specialbonus);
        if (detaching)
          detach(t7);
        if (detaching)
          detach(td2);
        destroy_component(usecost);
        if (if_block1)
          if_block1.d();
      }
    };
  }
  function create_if_block_172(ctx) {
    let td0;
    let canvasimage;
    let t0;
    let td1;
    let link2;
    let t1;
    let br;
    let t2;
    let small;
    let t3_value = rul.tr("Shots") + "";
    let t3;
    let t4;
    let t5_value = ctx[18].item.clipSize + "";
    let t5;
    let t6;
    let t7_value = rul.tr("Wgt") + "";
    let t7;
    let t8;
    let t9_value = ctx[18].item.weight + "";
    let t9;
    let current;
    canvasimage = new CanvasImage_default({
      props: {
        src: ctx[18].item.sprite,
        maxWidth: 32 * ctx[18].item.invWidth,
        maxHeight: 32 * ctx[18].item.invHeight,
        zoom: "2"
      }
    });
    link2 = new Link_default({
      props: { href: ctx[18].item.type }
    });
    return {
      c() {
        td0 = element("td");
        create_component(canvasimage.$$.fragment);
        t0 = space();
        td1 = element("td");
        create_component(link2.$$.fragment);
        t1 = space();
        br = element("br");
        t2 = space();
        small = element("small");
        t3 = text(t3_value);
        t4 = text(": ");
        t5 = text(t5_value);
        t6 = space();
        t7 = text(t7_value);
        t8 = text(": ");
        t9 = text(t9_value);
        attr(td0, "class", "item-ammo-img");
        attr(td1, "colspan", "2");
      },
      m(target, anchor) {
        insert(target, td0, anchor);
        mount_component(canvasimage, td0, null);
        insert(target, t0, anchor);
        insert(target, td1, anchor);
        mount_component(link2, td1, null);
        append(td1, t1);
        append(td1, br);
        append(td1, t2);
        append(td1, small);
        append(small, t3);
        append(small, t4);
        append(small, t5);
        append(small, t6);
        append(small, t7);
        append(small, t8);
        append(small, t9);
        current = true;
      },
      p(ctx2, dirty) {
        const canvasimage_changes = {};
        if (dirty & 2)
          canvasimage_changes.src = ctx2[18].item.sprite;
        if (dirty & 2)
          canvasimage_changes.maxWidth = 32 * ctx2[18].item.invWidth;
        if (dirty & 2)
          canvasimage_changes.maxHeight = 32 * ctx2[18].item.invHeight;
        canvasimage.$set(canvasimage_changes);
        const link_changes = {};
        if (dirty & 2)
          link_changes.href = ctx2[18].item.type;
        link2.$set(link_changes);
        if ((!current || dirty & 2) && t5_value !== (t5_value = ctx2[18].item.clipSize + ""))
          set_data(t5, t5_value);
        if ((!current || dirty & 2) && t9_value !== (t9_value = ctx2[18].item.weight + ""))
          set_data(t9, t9_value);
      },
      i(local) {
        if (current)
          return;
        transition_in(canvasimage.$$.fragment, local);
        transition_in(link2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(canvasimage.$$.fragment, local);
        transition_out(link2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(td0);
        destroy_component(canvasimage);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(td1);
        destroy_component(link2);
      }
    };
  }
  function create_if_block_19(ctx) {
    let html_tag;
    let raw_value = rul.str("up to !N! m").replace("!N!", `<em class="${ctx[18].range == ctx[0].maxRange ? "bad" : ""}">${ctx[0].minRange ? ctx[0].minRange + "-" : ""}${ctx[18].range}</em>`) + "";
    let t;
    return {
      c() {
        html_tag = new HtmlTag(false);
        t = space();
        html_tag.a = t;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 3 && raw_value !== (raw_value = rul.str("up to !N! m").replace("!N!", `<em class="${ctx2[18].range == ctx2[0].maxRange ? "bad" : ""}">${ctx2[0].minRange ? ctx2[0].minRange + "-" : ""}${ctx2[18].range}</em>`) + ""))
          html_tag.p(raw_value);
      },
      d(detaching) {
        if (detaching)
          html_tag.d();
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_182(ctx) {
    let div;
    let tr2;
    let t;
    let usecost;
    let current;
    tr2 = new Tr_default({ props: { s: "Prime:" } });
    usecost = new UseCost_default({
      props: { cost: ctx[0].costPrime }
    });
    return {
      c() {
        div = element("div");
        create_component(tr2.$$.fragment);
        t = space();
        create_component(usecost.$$.fragment);
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(tr2, div, null);
        append(div, t);
        mount_component(usecost, div, null);
        current = true;
      },
      p(ctx2, dirty) {
        const usecost_changes = {};
        if (dirty & 1)
          usecost_changes.cost = ctx2[0].costPrime;
        usecost.$set(usecost_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(tr2.$$.fragment, local);
        transition_in(usecost.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr2.$$.fragment, local);
        transition_out(usecost.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(tr2);
        destroy_component(usecost);
      }
    };
  }
  function create_if_block_162(ctx) {
    let alterlist;
    let current;
    alterlist = new AlterList_default({
      props: { items: ctx[0].meleeAlter }
    });
    return {
      c() {
        create_component(alterlist.$$.fragment);
      },
      m(target, anchor) {
        mount_component(alterlist, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const alterlist_changes = {};
        if (dirty & 1)
          alterlist_changes.items = ctx2[0].meleeAlter;
        alterlist.$set(alterlist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(alterlist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(alterlist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(alterlist, detaching);
      }
    };
  }
  function create_if_block_152(ctx) {
    let alterlist;
    let current;
    alterlist = new AlterList_default({
      props: { items: ctx[18].alter }
    });
    return {
      c() {
        create_component(alterlist.$$.fragment);
      },
      m(target, anchor) {
        mount_component(alterlist, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const alterlist_changes = {};
        if (dirty & 2)
          alterlist_changes.items = ctx2[18].alter;
        alterlist.$set(alterlist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(alterlist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(alterlist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(alterlist, detaching);
      }
    };
  }
  function create_each_block_33(ctx) {
    let tr2;
    let current_block_type_index;
    let if_block0;
    let t0;
    let td;
    let damage;
    let t1;
    let t2;
    let if_block2_anchor;
    let current;
    const if_block_creators = [create_if_block_172, create_else_block_2];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (ctx2[18].mode == "ammo")
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type_1(ctx, -1);
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    damage = new Damage_default({ props: { attack: ctx[18] } });
    let if_block1 = ctx[18].mode == "melee" && ctx[0].meleeAlter && create_if_block_162(ctx);
    let if_block2 = ctx[18].mode == "ammo" && ctx[18].alter && create_if_block_152(ctx);
    return {
      c() {
        tr2 = element("tr");
        if_block0.c();
        t0 = space();
        td = element("td");
        create_component(damage.$$.fragment);
        t1 = space();
        if (if_block1)
          if_block1.c();
        t2 = space();
        if (if_block2)
          if_block2.c();
        if_block2_anchor = empty();
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        if_blocks[current_block_type_index].m(tr2, null);
        append(tr2, t0);
        append(tr2, td);
        mount_component(damage, td, null);
        insert(target, t1, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t2, anchor);
        if (if_block2)
          if_block2.m(target, anchor);
        insert(target, if_block2_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block0 = if_blocks[current_block_type_index];
          if (!if_block0) {
            if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block0.c();
          } else {
            if_block0.p(ctx2, dirty);
          }
          transition_in(if_block0, 1);
          if_block0.m(tr2, t0);
        }
        const damage_changes = {};
        if (dirty & 2)
          damage_changes.attack = ctx2[18];
        damage.$set(damage_changes);
        if (ctx2[18].mode == "melee" && ctx2[0].meleeAlter) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty & 3) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_162(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(t2.parentNode, t2);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        if (ctx2[18].mode == "ammo" && ctx2[18].alter) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
            if (dirty & 2) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block_152(ctx2);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
          }
        } else if (if_block2) {
          group_outros();
          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block0);
        transition_in(damage.$$.fragment, local);
        transition_in(if_block1);
        transition_in(if_block2);
        current = true;
      },
      o(local) {
        transition_out(if_block0);
        transition_out(damage.$$.fragment, local);
        transition_out(if_block1);
        transition_out(if_block2);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        if_blocks[current_block_type_index].d();
        destroy_component(damage);
        if (detaching)
          detach(t1);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t2);
        if (if_block2)
          if_block2.d(detaching);
        if (detaching)
          detach(if_block2_anchor);
      }
    };
  }
  function create_if_block_142(ctx) {
    let alterlist;
    let current;
    alterlist = new AlterList_default({
      props: { items: ctx[0].damageAlter }
    });
    return {
      c() {
        create_component(alterlist.$$.fragment);
      },
      m(target, anchor) {
        mount_component(alterlist, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const alterlist_changes = {};
        if (dirty & 1)
          alterlist_changes.items = ctx2[0].damageAlter;
        alterlist.$set(alterlist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(alterlist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(alterlist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(alterlist, detaching);
      }
    };
  }
  function create_else_block8(ctx) {
    let tr2;
    let td0;
    let value;
    let t0;
    let td1;
    let show_if;
    let show_if_1;
    let show_if_2;
    let show_if_3;
    let current_block_type_index;
    let if_block;
    let t1;
    let current;
    value = new Value_default({
      props: { val: ctx[8], capital: true }
    });
    const if_block_creators = [
      create_if_block_44,
      create_if_block_53,
      create_if_block_63,
      create_if_block_73,
      create_if_block_83,
      create_if_block_9,
      create_if_block_10,
      create_if_block_11,
      create_else_block_12
    ];
    const if_blocks = [];
    function select_block_type_3(ctx2, dirty) {
      if (dirty & 12)
        show_if = null;
      if (dirty & 12)
        show_if_1 = null;
      if (dirty & 12)
        show_if_2 = null;
      if (dirty & 12)
        show_if_3 = null;
      if (show_if == null)
        show_if = !![
          "damageBonus",
          "meleeBonus",
          "accuracyMultiplier",
          "meleeMultiplier",
          "closeQuartersMultiplier"
        ].includes(ctx2[8]);
      if (show_if)
        return 0;
      if (show_if_1 == null)
        show_if_1 = !!["damageType", "meleeType"].includes(ctx2[8]);
      if (show_if_1)
        return 1;
      if (ctx2[8] == "battleType")
        return 2;
      if (show_if_2 == null)
        show_if_2 = !!ctx2[8].includes("Sound");
      if (show_if_2)
        return 3;
      if (show_if_3 == null)
        show_if_3 = !!["floorSprite", "handSprite"].includes(ctx2[8]);
      if (show_if_3)
        return 4;
      if (ctx2[8] == "prisonType")
        return 5;
      if (ctx2[8] == "experienceTrainingMode")
        return 6;
      if (ctx2[8] == "costBuy")
        return 7;
      return 8;
    }
    current_block_type_index = select_block_type_3(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        create_component(value.$$.fragment);
        t0 = space();
        td1 = element("td");
        if_block.c();
        t1 = space();
        attr(td1, "class", "item-right-column");
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        mount_component(value, td0, null);
        append(tr2, t0);
        append(tr2, td1);
        if_blocks[current_block_type_index].m(td1, null);
        append(tr2, t1);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 12)
          value_changes.val = ctx2[8];
        value.$set(value_changes);
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_3(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(td1, null);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_component(value);
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function create_if_block_37(ctx) {
    let secondarytable;
    let current;
    secondarytable = new SecondaryTable_default({
      props: {
        text: ctx[8],
        $$slots: { default: [create_default_slot_1] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(secondarytable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(secondarytable, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const secondarytable_changes = {};
        if (dirty & 12)
          secondarytable_changes.text = ctx2[8];
        if (dirty & 2097164) {
          secondarytable_changes.$$scope = { dirty, ctx: ctx2 };
        }
        secondarytable.$set(secondarytable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(secondarytable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(secondarytable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(secondarytable, detaching);
      }
    };
  }
  function create_if_block_27(ctx) {
    let secondarytable;
    let current;
    secondarytable = new SecondaryTable_default({
      props: {
        text: ctx[8],
        $$slots: { default: [create_default_slot2] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(secondarytable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(secondarytable, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const secondarytable_changes = {};
        if (dirty & 12)
          secondarytable_changes.text = ctx2[8];
        if (dirty & 2097165) {
          secondarytable_changes.$$scope = { dirty, ctx: ctx2 };
        }
        secondarytable.$set(secondarytable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(secondarytable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(secondarytable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(secondarytable, detaching);
      }
    };
  }
  function create_if_block13(ctx) {
    let if_block_anchor;
    let if_block = ctx[2].misc.length > 0 && create_if_block_110(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (ctx2[2].misc.length > 0) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_110(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_else_block_12(ctx) {
    let value;
    let current;
    value = new Value_default({ props: { val: ctx[9] } });
    return {
      c() {
        create_component(value.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 12)
          value_changes.val = ctx2[9];
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
      }
    };
  }
  function create_if_block_11(ctx) {
    let value0;
    let t;
    let value1;
    let current;
    value0 = new Value_default({ props: { val: ctx[9] } });
    value1 = new Value_default({
      props: { val: ctx[0].requiresBuy || "" }
    });
    return {
      c() {
        create_component(value0.$$.fragment);
        t = space();
        create_component(value1.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value0, target, anchor);
        insert(target, t, anchor);
        mount_component(value1, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value0_changes = {};
        if (dirty & 12)
          value0_changes.val = ctx2[9];
        value0.$set(value0_changes);
        const value1_changes = {};
        if (dirty & 1)
          value1_changes.val = ctx2[0].requiresBuy || "";
        value1.$set(value1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value0.$$.fragment, local);
        transition_in(value1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value0.$$.fragment, local);
        transition_out(value1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value0, detaching);
        if (detaching)
          detach(t);
        destroy_component(value1, detaching);
      }
    };
  }
  function create_if_block_10(ctx) {
    let value;
    let t;
    let tr2;
    let current;
    value = new Value_default({ props: { val: ctx[9] } });
    tr2 = new Tr_default({
      props: {
        s: "experienceTrainingMode" + ctx[9]
      }
    });
    return {
      c() {
        create_component(value.$$.fragment);
        t = text(": ");
        create_component(tr2.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        insert(target, t, anchor);
        mount_component(tr2, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 12)
          value_changes.val = ctx2[9];
        value.$set(value_changes);
        const tr_changes = {};
        if (dirty & 12)
          tr_changes.s = "experienceTrainingMode" + ctx2[9];
        tr2.$set(tr_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        transition_in(tr2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        transition_out(tr2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
        if (detaching)
          detach(t);
        destroy_component(tr2, detaching);
      }
    };
  }
  function create_if_block_9(ctx) {
    let link2;
    let current;
    link2 = new Link_default({
      props: { href: "prisonType" + ctx[9] }
    });
    return {
      c() {
        create_component(link2.$$.fragment);
      },
      m(target, anchor) {
        mount_component(link2, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const link_changes = {};
        if (dirty & 12)
          link_changes.href = "prisonType" + ctx2[9];
        link2.$set(link_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(link2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(link2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(link2, detaching);
      }
    };
  }
  function create_if_block_83(ctx) {
    let a;
    let t0_value = ctx[9] + "";
    let t0;
    let a_href_value;
    let t1;
    let img;
    let img_alt_value;
    let img_src_value;
    return {
      c() {
        a = element("a");
        t0 = text(t0_value);
        t1 = space();
        img = element("img");
        set_style(a, "vertical-align", "top");
        attr(a, "href", a_href_value = rul.obsSprite(ctx[8], ctx[9]));
        attr(img, "class", "item-img sprite");
        attr(img, "alt", img_alt_value = ctx[9]);
        if (!src_url_equal(img.src, img_src_value = rul.obsSprite(ctx[8], ctx[9])))
          attr(img, "src", img_src_value);
      },
      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t0);
        insert(target, t1, anchor);
        insert(target, img, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 12 && t0_value !== (t0_value = ctx2[9] + ""))
          set_data(t0, t0_value);
        if (dirty & 12 && a_href_value !== (a_href_value = rul.obsSprite(ctx2[8], ctx2[9]))) {
          attr(a, "href", a_href_value);
        }
        if (dirty & 12 && img_alt_value !== (img_alt_value = ctx2[9])) {
          attr(img, "alt", img_alt_value);
        }
        if (dirty & 12 && !src_url_equal(img.src, img_src_value = rul.obsSprite(ctx2[8], ctx2[9]))) {
          attr(img, "src", img_src_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(a);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(img);
      }
    };
  }
  function create_if_block_73(ctx) {
    let each_1_anchor;
    let each_value_2 = ctx[5](ctx[9]);
    let each_blocks = [];
    for (let i = 0; i < each_value_2.length; i += 1) {
      each_blocks[i] = create_each_block_23(get_each_context_23(ctx, each_value_2, i));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 44) {
          each_value_2 = ctx2[5](ctx2[9]);
          let i;
          for (i = 0; i < each_value_2.length; i += 1) {
            const child_ctx = get_each_context_23(ctx2, each_value_2, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_23(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_2.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_if_block_63(ctx) {
    let t0_value = ctx[9] + "";
    let t0;
    let t1;
    let t2_value = rul.tr(internalBattleTypes[ctx[9]]) + "";
    let t2;
    return {
      c() {
        t0 = text(t0_value);
        t1 = text(": ");
        t2 = text(t2_value);
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, t1, anchor);
        insert(target, t2, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 12 && t0_value !== (t0_value = ctx2[9] + ""))
          set_data(t0, t0_value);
        if (dirty & 12 && t2_value !== (t2_value = rul.tr(internalBattleTypes[ctx2[9]]) + ""))
          set_data(t2, t2_value);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(t2);
      }
    };
  }
  function create_if_block_53(ctx) {
    let t_value = rul.damageTypeName(ctx[9]) + "";
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 12 && t_value !== (t_value = rul.damageTypeName(ctx2[9]) + ""))
          set_data(t, t_value);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_44(ctx) {
    let specialbonus;
    let current;
    specialbonus = new SpecialBonus_default({ props: { bonus: ctx[9] } });
    return {
      c() {
        create_component(specialbonus.$$.fragment);
      },
      m(target, anchor) {
        mount_component(specialbonus, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const specialbonus_changes = {};
        if (dirty & 12)
          specialbonus_changes.bonus = ctx2[9];
        specialbonus.$set(specialbonus_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(specialbonus.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(specialbonus.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(specialbonus, detaching);
      }
    };
  }
  function create_each_block_23(ctx) {
    let html_tag;
    let raw_value = ctx[15] > 0 ? "<br/>" : "";
    let t0;
    let audio;
    let t1;
    let audio_src_value;
    return {
      c() {
        html_tag = new HtmlTag(false);
        t0 = space();
        audio = element("audio");
        t1 = text("Audio tag not working");
        html_tag.a = t0;
        audio.controls = true;
        if (!src_url_equal(audio.src, audio_src_value = ctx[16]))
          attr(audio, "src", audio_src_value);
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, t0, anchor);
        insert(target, audio, anchor);
        append(audio, t1);
      },
      p(ctx2, dirty) {
        if (dirty & 12 && !src_url_equal(audio.src, audio_src_value = ctx2[16])) {
          attr(audio, "src", audio_src_value);
        }
      },
      d(detaching) {
        if (detaching)
          html_tag.d();
        if (detaching)
          detach(t0);
        if (detaching)
          detach(audio);
      }
    };
  }
  function create_default_slot_1(ctx) {
    let value;
    let current;
    value = new Value_default({ props: { val: ctx[9] } });
    return {
      c() {
        create_component(value.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 12)
          value_changes.val = ctx2[9];
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
      }
    };
  }
  function create_each_block_13(ctx) {
    let tr0;
    let td0;
    let em;
    let value0;
    let t0;
    let tr1;
    let td1;
    let value1;
    let t1;
    let td2;
    let t3;
    let td3;
    let value2;
    let t4;
    let value3;
    let t5;
    let current;
    value0 = new Value_default({ props: { val: ctx[12] } });
    value1 = new Value_default({
      props: { val: ctx[13]?.requiredItems || "" }
    });
    value2 = new Value_default({
      props: {
        val: ctx[13]?.totalProducedItems[ctx[0].id]
      }
    });
    value3 = new Value_default({ props: { val: ctx[0].id } });
    return {
      c() {
        tr0 = element("tr");
        td0 = element("td");
        em = element("em");
        create_component(value0.$$.fragment);
        t0 = space();
        tr1 = element("tr");
        td1 = element("td");
        create_component(value1.$$.fragment);
        t1 = space();
        td2 = element("td");
        td2.textContent = "\u2794";
        t3 = space();
        td3 = element("td");
        create_component(value2.$$.fragment);
        t4 = text("\xA0");
        create_component(value3.$$.fragment);
        t5 = space();
        attr(td0, "colspan", "3");
        set_style(td0, "text-align", "left");
        set_style(td1, "text-align", "right");
        set_style(td3, "text-align", "left");
      },
      m(target, anchor) {
        insert(target, tr0, anchor);
        append(tr0, td0);
        append(td0, em);
        mount_component(value0, em, null);
        insert(target, t0, anchor);
        insert(target, tr1, anchor);
        append(tr1, td1);
        mount_component(value1, td1, null);
        append(tr1, t1);
        append(tr1, td2);
        append(tr1, t3);
        append(tr1, td3);
        mount_component(value2, td3, null);
        append(td3, t4);
        mount_component(value3, td3, null);
        append(tr1, t5);
        current = true;
      },
      p(ctx2, dirty) {
        const value0_changes = {};
        if (dirty & 12)
          value0_changes.val = ctx2[12];
        value0.$set(value0_changes);
        const value1_changes = {};
        if (dirty & 12)
          value1_changes.val = ctx2[13]?.requiredItems || "";
        value1.$set(value1_changes);
        const value2_changes = {};
        if (dirty & 13)
          value2_changes.val = ctx2[13]?.totalProducedItems[ctx2[0].id];
        value2.$set(value2_changes);
        const value3_changes = {};
        if (dirty & 1)
          value3_changes.val = ctx2[0].id;
        value3.$set(value3_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value0.$$.fragment, local);
        transition_in(value1.$$.fragment, local);
        transition_in(value2.$$.fragment, local);
        transition_in(value3.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value0.$$.fragment, local);
        transition_out(value1.$$.fragment, local);
        transition_out(value2.$$.fragment, local);
        transition_out(value3.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr0);
        destroy_component(value0);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(tr1);
        destroy_component(value1);
        destroy_component(value2);
        destroy_component(value3);
      }
    };
  }
  function create_default_slot2(ctx) {
    let table;
    let t;
    let current;
    let each_value_1 = ctx[9];
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_13(get_each_context_13(ctx, each_value_1, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        table = element("table");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t = space();
        attr(table, "class", "item-manufacture");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        insert(target, t, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 13) {
          each_value_1 = ctx2[9];
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_13(ctx2, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_13(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, null);
            }
          }
          group_outros();
          for (i = each_value_1.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_1.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_110(ctx) {
    let tr2;
    let td;
    let button;
    let t0_value = ctx[3] ? "Hide" : "See";
    let t0;
    let t1;
    let t2;
    let mounted;
    let dispose;
    return {
      c() {
        tr2 = element("tr");
        td = element("td");
        button = element("button");
        t0 = text(t0_value);
        t1 = text(" details");
        t2 = space();
        attr(button, "class", "btn-hover-effect btn-hover-effect--effect-1");
        attr(td, "colspan", "2");
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td);
        append(td, button);
        append(button, t0);
        append(button, t1);
        append(tr2, t2);
        if (!mounted) {
          dispose = listen(button, "click", ctx[6]);
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & 8 && t0_value !== (t0_value = ctx2[3] ? "Hide" : "See"))
          set_data(t0, t0_value);
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block13(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block13, create_if_block_27, create_if_block_37, create_else_block8];
    const if_blocks = [];
    function select_block_type_2(ctx2, dirty) {
      if (ctx2[8] == "anal")
        return 0;
      if (ctx2[8] == "manufacture")
        return 1;
      if (ctx2[8] == "componentOf")
        return 2;
      return 3;
    }
    current_block_type_index = select_block_type_2(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_2(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_fragment22(ctx) {
    let table;
    let thead;
    let td;
    let t0_value = (ctx[0].weight ? ctx[0].weight + rul.tr("kg") : "") + "";
    let t0;
    let t1;
    let t2_value = ctx[0].invWidth > 1 || ctx[0].invHeight > 1 ? `${ctx[0].invWidth}\xD7${ctx[0].invHeight}` : "";
    let t2;
    let t3;
    let t4_value = (ctx[0].clipSize > 0 ? ctx[0].clipSize + rul.tr("-shot") : "") + "";
    let t4;
    let t5;
    let link2;
    let t6;
    let tr2;
    let t7;
    let t8;
    let current;
    link2 = new Link_default({
      props: {
        href: ctx[0].internalBattleType
      }
    });
    tr2 = new Tr_default({ props: { s: "Item" } });
    let if_block = (ctx[0].sprite && ctx[0].sprite != "Resources/Blanks/Blank.png" || ctx[1].length > 0) && create_if_block_122(ctx);
    let each_value = ctx[3] ? [...ctx[2].first, ["anal"], ...ctx[2].misc] : [...ctx[2].first, ["anal"]];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block13(get_each_context13(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        table = element("table");
        thead = element("thead");
        td = element("td");
        t0 = text(t0_value);
        t1 = space();
        t2 = text(t2_value);
        t3 = space();
        t4 = text(t4_value);
        t5 = space();
        create_component(link2.$$.fragment);
        t6 = space();
        create_component(tr2.$$.fragment);
        t7 = space();
        if (if_block)
          if_block.c();
        t8 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(td, "colspan", "2");
        attr(table, "class", "main-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        append(table, thead);
        append(thead, td);
        append(td, t0);
        append(td, t1);
        append(td, t2);
        append(td, t3);
        append(td, t4);
        append(td, t5);
        mount_component(link2, td, null);
        append(td, t6);
        mount_component(tr2, td, null);
        append(table, t7);
        if (if_block)
          if_block.m(table, null);
        append(table, t8);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if ((!current || dirty & 1) && t0_value !== (t0_value = (ctx2[0].weight ? ctx2[0].weight + rul.tr("kg") : "") + ""))
          set_data(t0, t0_value);
        if ((!current || dirty & 1) && t2_value !== (t2_value = ctx2[0].invWidth > 1 || ctx2[0].invHeight > 1 ? `${ctx2[0].invWidth}\xD7${ctx2[0].invHeight}` : ""))
          set_data(t2, t2_value);
        if ((!current || dirty & 1) && t4_value !== (t4_value = (ctx2[0].clipSize > 0 ? ctx2[0].clipSize + rul.tr("-shot") : "") + ""))
          set_data(t4, t4_value);
        const link_changes = {};
        if (dirty & 1)
          link_changes.href = ctx2[0].internalBattleType;
        link2.$set(link_changes);
        if (ctx2[0].sprite && ctx2[0].sprite != "Resources/Blanks/Blank.png" || ctx2[1].length > 0) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 3) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_122(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(table, t8);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        if (dirty & 45) {
          each_value = ctx2[3] ? [...ctx2[2].first, ["anal"], ...ctx2[2].misc] : [...ctx2[2].first, ["anal"]];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context13(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block13(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(link2.$$.fragment, local);
        transition_in(tr2.$$.fragment, local);
        transition_in(if_block);
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(link2.$$.fragment, local);
        transition_out(tr2.$$.fragment, local);
        transition_out(if_block);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_component(link2);
        destroy_component(tr2);
        if (if_block)
          if_block.d();
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance22($$self, $$props, $$invalidate) {
    let { entry } = $$props;
    let title;
    let attacks;
    let sorted;
    let anal = false;
    let hand1bonus;
    function soundsFrom(sounds) {
      if (!sounds)
        return [];
      if (!sounds.length)
        sounds = [sounds];
      return sounds.map((s) => rul.sounds[s]).filter((s) => s);
    }
    const click_handler = (e) => $$invalidate(3, anal = !anal);
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(0, entry = $$props2.entry);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 3) {
        $: {
          console.info(entry);
          $$invalidate(1, attacks = entry.attacks().slice());
          let ohpen = entry.oneHandedPenalty || entry.battleType == 3 ? 67 : 50;
          $$invalidate(4, hand1bonus = entry.twoHanded ? entry.blockBothHands ? rul.tr("2handOnly") : `${rul.tr("1handPenalty")} ${ohpen}%` : "");
          if (entry.compatibleAmmo)
            for (let ammoId of entry.compatibleAmmo) {
              let ammo = rul.items[ammoId];
              let ammoAttack = ammo.attacks()[0];
              attacks.push(ammoAttack);
            }
          $$invalidate(2, sorted = sortFirstLast(entry, {
            first: [
              "fixedWeapon",
              "builtIn",
              "costBuy",
              "costSell",
              "tuUse",
              "monthlySalary",
              "monthlyMaintenance",
              "size",
              "isConsumable",
              "medikitTargetSelf",
              "medikitType",
              "stimulant",
              "stunRecovery",
              "costUnprime",
              "blastRadius",
              "requires",
              "categories",
              "armors",
              "compatibleWeapons",
              "liveAlien",
              "recover",
              "energyRecovery",
              "healthRecovery",
              "experienceTrainingMode",
              "prisonType",
              "powerRangeReduction",
              "powerRangeThreshold",
              "commendations",
              "loot",
              "ufos",
              "terrains",
              "spawnUnit",
              "manufacture",
              "componentOf"
            ],
            exclude: [
              "requiresBuy",
              "sprite",
              "type",
              "compatibleAmmo",
              "_attacks",
              "damageAlter",
              "accuracyMelee",
              "accuracyMultiplier",
              "accuracySnap",
              "costAuto",
              "costMelee",
              "costSnap",
              "damageBonus",
              "damageType"
            ]
          }));
          console.info(attacks);
        }
      }
    };
    return [entry, attacks, sorted, anal, hand1bonus, soundsFrom, click_handler];
  }
  var Item2 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance22, create_fragment22, safe_not_equal, { entry: 0 });
    }
  };
  var Item_default = Item2;

  // src/RecoveryTable.svelte
  function get_each_context14(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i][0];
    child_ctx[2] = list[i][1];
    child_ctx[4] = i;
    return child_ctx;
  }
  function create_each_block14(ctx) {
    let tr_1;
    let td0;
    let value;
    let t0;
    let td1;
    let specialbonus;
    let t1;
    let current;
    value = new Value_default({ props: { val: ctx[1] } });
    specialbonus = new SpecialBonus_default({ props: { bonus: ctx[2] } });
    return {
      c() {
        tr_1 = element("tr");
        td0 = element("td");
        create_component(value.$$.fragment);
        t0 = space();
        td1 = element("td");
        create_component(specialbonus.$$.fragment);
        t1 = space();
      },
      m(target, anchor) {
        insert(target, tr_1, anchor);
        append(tr_1, td0);
        mount_component(value, td0, null);
        append(tr_1, t0);
        append(tr_1, td1);
        mount_component(specialbonus, td1, null);
        append(tr_1, t1);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[1];
        value.$set(value_changes);
        const specialbonus_changes = {};
        if (dirty & 1)
          specialbonus_changes.bonus = ctx2[2];
        specialbonus.$set(specialbonus_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        transition_in(specialbonus.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        transition_out(specialbonus.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr_1);
        destroy_component(value);
        destroy_component(specialbonus);
      }
    };
  }
  function create_fragment23(ctx) {
    let each_1_anchor;
    let current;
    let each_value = sortFirstLast(ctx[0]).all;
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block14(get_each_context14(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          each_value = sortFirstLast(ctx2[0]).all;
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context14(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block14(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function instance23($$self, $$props, $$invalidate) {
    let { recovery } = $$props;
    $$self.$$set = ($$props2) => {
      if ("recovery" in $$props2)
        $$invalidate(0, recovery = $$props2.recovery);
    };
    return [recovery];
  }
  var RecoveryTable = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance23, create_fragment23, safe_not_equal, { recovery: 0 });
    }
  };
  var RecoveryTable_default = RecoveryTable;

  // src/Armor.svelte
  function get_each_context15(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i][0];
    child_ctx[8] = list[i][1];
    return child_ctx;
  }
  function get_each_context_14(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[11] = list[i];
    child_ctx[13] = i;
    return child_ctx;
  }
  function get_each_context_24(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[8] = list[i];
    return child_ctx;
  }
  function get_each_context_34(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i][0];
    child_ctx[16] = list[i][1];
    child_ctx[13] = i;
    return child_ctx;
  }
  function get_each_context_43(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[18] = list[i];
    child_ctx[20] = i;
    return child_ctx;
  }
  function get_each_context_52(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[22] = list[i];
    child_ctx[13] = i;
    return child_ctx;
  }
  function get_each_context_6(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[24] = list[i];
    child_ctx[20] = i;
    return child_ctx;
  }
  function create_if_block_143(ctx) {
    let span;
    let t1;
    let linkslist;
    let current;
    linkslist = new LinksList_default({ props: { items: ctx[2] } });
    return {
      c() {
        span = element("span");
        span.textContent = "- see also";
        t1 = space();
        create_component(linkslist.$$.fragment);
        set_style(span, "color", "white");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        insert(target, t1, anchor);
        mount_component(linkslist, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const linkslist_changes = {};
        if (dirty & 4)
          linkslist_changes.items = ctx2[2];
        linkslist.$set(linkslist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(linkslist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linkslist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (detaching)
          detach(t1);
        destroy_component(linkslist, detaching);
      }
    };
  }
  function create_catch_block4(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_then_block4(ctx) {
    let if_block_anchor;
    let if_block = ctx[21] && create_if_block_92(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (ctx2[21]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_92(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block_92(ctx) {
    let show_if = Object.keys(ctx[21]).length > 1;
    let t0;
    let t1;
    let div;
    let div_style_value;
    let if_block0 = show_if && create_if_block_133(ctx);
    let each_value_5 = Object.keys(ctx[21]).sort(ctx[6]);
    let each_blocks = [];
    for (let i = 0; i < each_value_5.length; i += 1) {
      each_blocks[i] = create_each_block_52(get_each_context_52(ctx, each_value_5, i));
    }
    let if_block1 = !ctx[3] && create_if_block_102(ctx);
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t1 = space();
        div = element("div");
        if (if_block1)
          if_block1.c();
        attr(div, "style", div_style_value = `min-height:${ctx[3] ? (Math.floor(Object.keys(ctx[21]).length / dollColumns) + 1) * 120 : 120}px;margin-left:175px;`);
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t0, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, t1, anchor);
        insert(target, div, anchor);
        if (if_block1)
          if_block1.m(div, null);
      },
      p(ctx2, dirty) {
        if (dirty & 1)
          show_if = Object.keys(ctx2[21]).length > 1;
        if (show_if) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_133(ctx2);
            if_block0.c();
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (dirty & 25) {
          each_value_5 = Object.keys(ctx2[21]).sort(ctx2[6]);
          let i;
          for (i = 0; i < each_value_5.length; i += 1) {
            const child_ctx = get_each_context_52(ctx2, each_value_5, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_52(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(t1.parentNode, t1);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_5.length;
        }
        if (!ctx2[3]) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_102(ctx2);
            if_block1.c();
            if_block1.m(div, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (dirty & 9 && div_style_value !== (div_style_value = `min-height:${ctx2[3] ? (Math.floor(Object.keys(ctx2[21]).length / dollColumns) + 1) * 120 : 120}px;margin-left:175px;`)) {
          attr(div, "style", div_style_value);
        }
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t0);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(div);
        if (if_block1)
          if_block1.d();
      }
    };
  }
  function create_if_block_133(ctx) {
    let p;
    let button;
    let t0_value = ctx[3] ? "Hide" : "See";
    let t0;
    let t1;
    let mounted;
    let dispose;
    return {
      c() {
        p = element("p");
        button = element("button");
        t0 = text(t0_value);
        t1 = text(" all variants");
        attr(button, "class", "btn-hover-effect btn-hover-effect--effect-1");
      },
      m(target, anchor) {
        insert(target, p, anchor);
        append(p, button);
        append(button, t0);
        append(button, t1);
        if (!mounted) {
          dispose = listen(button, "click", ctx[5]);
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & 8 && t0_value !== (t0_value = ctx2[3] ? "Hide" : "See"))
          set_data(t0, t0_value);
      },
      d(detaching) {
        if (detaching)
          detach(p);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_112(ctx) {
    let div;
    let t;
    let if_block = ctx[3] && create_if_block_123(ctx);
    let each_value_6 = ctx[21][ctx[22]];
    let each_blocks = [];
    for (let i = 0; i < each_value_6.length; i += 1) {
      each_blocks[i] = create_each_block_6(get_each_context_6(ctx, each_value_6, i));
    }
    return {
      c() {
        div = element("div");
        if (if_block)
          if_block.c();
        t = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "armor");
        set_style(div, "left", ctx[13] % dollColumns * 80 + "px");
        set_style(div, "top", Math.floor(ctx[13] / dollColumns) * 120 + "px");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if (if_block)
          if_block.m(div, null);
        append(div, t);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div, null);
        }
      },
      p(ctx2, dirty) {
        if (ctx2[3]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_123(ctx2);
            if_block.c();
            if_block.m(div, t);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (dirty & 17) {
          each_value_6 = ctx2[21][ctx2[22]];
          let i;
          for (i = 0; i < each_value_6.length; i += 1) {
            const child_ctx = get_each_context_6(ctx2, each_value_6, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_6(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_6.length;
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        if (if_block)
          if_block.d();
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_if_block_123(ctx) {
    let div;
    let t_value = ctx[22] + "";
    let t;
    return {
      c() {
        div = element("div");
        t = text(t_value);
        attr(div, "class", "armor-variant");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t);
      },
      p(ctx2, dirty) {
        if (dirty & 1 && t_value !== (t_value = ctx2[22] + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_each_block_6(ctx) {
    let img;
    let img_src_value;
    let img_alt_value;
    return {
      c() {
        img = element("img");
        if (!src_url_equal(img.src, img_src_value = ctx[24]))
          attr(img, "src", img_src_value);
        attr(img, "alt", img_alt_value = ctx[22]);
        attr(img, "onerror", ctx[4]);
        attr(img, "class", "armor-layer");
      },
      m(target, anchor) {
        insert(target, img, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 1 && !src_url_equal(img.src, img_src_value = ctx2[24])) {
          attr(img, "src", img_src_value);
        }
        if (dirty & 1 && img_alt_value !== (img_alt_value = ctx2[22])) {
          attr(img, "alt", img_alt_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(img);
      }
    };
  }
  function create_each_block_52(ctx) {
    let if_block_anchor;
    let if_block = (ctx[3] || ctx[13] == 0) && create_if_block_112(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (ctx2[3] || ctx2[13] == 0) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_112(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block_102(ctx) {
    let p;
    return {
      c() {
        p = element("p");
      },
      m(target, anchor) {
        insert(target, p, anchor);
        p.innerHTML = ctx[1];
      },
      p(ctx2, dirty) {
        if (dirty & 2)
          p.innerHTML = ctx2[1];
        ;
      },
      d(detaching) {
        if (detaching)
          detach(p);
      }
    };
  }
  function create_pending_block4(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_if_block_54(ctx) {
    let div;
    let header;
    let tr2;
    let t0;
    let t1;
    let div_class_value;
    let current;
    tr2 = new Tr_default({ props: { s: ctx[8] } });
    let each_value_3 = sortFirstLast(ctx[0][ctx[8]]).all;
    let each_blocks = [];
    for (let i = 0; i < each_value_3.length; i += 1) {
      each_blocks[i] = create_each_block_34(get_each_context_34(ctx, each_value_3, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        div = element("div");
        header = element("header");
        create_component(tr2.$$.fragment);
        t0 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t1 = space();
        attr(div, "class", div_class_value = "armor-column " + (ctx[8] == "damageModifier" && "armor-column-resists"));
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, header);
        mount_component(tr2, header, null);
        append(div, t0);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div, null);
        }
        append(div, t1);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1) {
          each_value_3 = sortFirstLast(ctx2[0][ctx2[8]]).all;
          let i;
          for (i = 0; i < each_value_3.length; i += 1) {
            const child_ctx = get_each_context_34(ctx2, each_value_3, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_34(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div, t1);
            }
          }
          group_outros();
          for (i = each_value_3.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr2.$$.fragment, local);
        for (let i = 0; i < each_value_3.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(tr2.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(tr2);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_else_block_13(ctx) {
    let em;
    let current_block_type_index;
    let if_block;
    let current;
    const if_block_creators = [create_if_block_84, create_else_block_22];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (ctx2[8] == "damageModifier")
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type_1(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        em = element("em");
        if_block.c();
      },
      m(target, anchor) {
        insert(target, em, anchor);
        if_blocks[current_block_type_index].m(em, null);
        current = true;
      },
      p(ctx2, dirty) {
        if_block.p(ctx2, dirty);
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(em);
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function create_if_block_64(ctx) {
    let each_1_anchor;
    let current;
    let each_value_4 = Object.keys(ctx[16]);
    let each_blocks = [];
    for (let i = 0; i < each_value_4.length; i += 1) {
      each_blocks[i] = create_each_block_43(get_each_context_43(ctx, each_value_4, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1) {
          each_value_4 = Object.keys(ctx2[16]);
          let i;
          for (i = 0; i < each_value_4.length; i += 1) {
            const child_ctx = get_each_context_43(ctx2, each_value_4, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_43(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value_4.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_4.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_else_block_22(ctx) {
    let value;
    let current;
    value = new Value_default({ props: { val: ctx[16] } });
    return {
      c() {
        create_component(value.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[16];
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
      }
    };
  }
  function create_if_block_84(ctx) {
    let span;
    let t_value = ~~(ctx[16] * 100) + "";
    let t;
    let span_style_value;
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "style", span_style_value = `text-weight:bold; color:hsl(${~~(ctx[16] * 70)}, 100%, 50%);`);
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p(ctx2, dirty) {
        if (dirty & 1 && t_value !== (t_value = ~~(ctx2[16] * 100) + ""))
          set_data(t, t_value);
        if (dirty & 1 && span_style_value !== (span_style_value = `text-weight:bold; color:hsl(${~~(ctx2[16] * 70)}, 100%, 50%);`)) {
          attr(span, "style", span_style_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_if_block_74(ctx) {
    let br;
    return {
      c() {
        br = element("br");
      },
      m(target, anchor) {
        insert(target, br, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(br);
      }
    };
  }
  function create_each_block_43(ctx) {
    let t0;
    let value0;
    let t1;
    let em;
    let value1;
    let current;
    let if_block = ctx[20] != 0 && create_if_block_74(ctx);
    value0 = new Value_default({ props: { val: ctx[18] } });
    value1 = new Value_default({
      props: {
        val: ctx[16][ctx[18]]
      }
    });
    return {
      c() {
        if (if_block)
          if_block.c();
        t0 = space();
        create_component(value0.$$.fragment);
        t1 = text("\r\n                      :\r\n                      ");
        em = element("em");
        create_component(value1.$$.fragment);
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, t0, anchor);
        mount_component(value0, target, anchor);
        insert(target, t1, anchor);
        insert(target, em, anchor);
        mount_component(value1, em, null);
        current = true;
      },
      p(ctx2, dirty) {
        const value0_changes = {};
        if (dirty & 1)
          value0_changes.val = ctx2[18];
        value0.$set(value0_changes);
        const value1_changes = {};
        if (dirty & 1)
          value1_changes.val = ctx2[16][ctx2[18]];
        value1.$set(value1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value0.$$.fragment, local);
        transition_in(value1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value0.$$.fragment, local);
        transition_out(value1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(t0);
        destroy_component(value0, detaching);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(em);
        destroy_component(value1);
      }
    };
  }
  function create_each_block_34(ctx) {
    let div0;
    let value;
    let t;
    let div1;
    let current_block_type_index;
    let if_block;
    let current;
    value = new Value_default({
      props: {
        val: ctx[8] == "damageModifier" ? damageTypes[ctx[7]] : ctx[7],
        icon: "monospace"
      }
    });
    const if_block_creators = [create_if_block_64, create_else_block_13];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if ("recovery" == ctx2[8])
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        div0 = element("div");
        create_component(value.$$.fragment);
        t = space();
        div1 = element("div");
        if_block.c();
      },
      m(target, anchor) {
        insert(target, div0, anchor);
        mount_component(value, div0, null);
        insert(target, t, anchor);
        insert(target, div1, anchor);
        if_blocks[current_block_type_index].m(div1, null);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[8] == "damageModifier" ? damageTypes[ctx2[7]] : ctx2[7];
        value.$set(value_changes);
        if_block.p(ctx2, dirty);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div0);
        destroy_component(value);
        if (detaching)
          detach(t);
        if (detaching)
          detach(div1);
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function create_each_block_24(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ctx[0][ctx[8]] && create_if_block_54(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (ctx2[0][ctx2[8]]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_54(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_else_block9(ctx) {
    let value;
    let current;
    value = new Value_default({ props: { val: ctx[8] } });
    return {
      c() {
        create_component(value.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[8];
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
      }
    };
  }
  function create_if_block_45(ctx) {
    let value;
    let current;
    value = new Value_default({
      props: { val: ctx[8].filter(func_12) }
    });
    return {
      c() {
        create_component(value.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[8].filter(func_12);
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
      }
    };
  }
  function create_if_block_38(ctx) {
    let specialbonus;
    let current;
    specialbonus = new SpecialBonus_default({ props: { bonus: ctx[8] } });
    return {
      c() {
        create_component(specialbonus.$$.fragment);
      },
      m(target, anchor) {
        mount_component(specialbonus, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const specialbonus_changes = {};
        if (dirty & 1)
          specialbonus_changes.bonus = ctx2[8];
        specialbonus.$set(specialbonus_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(specialbonus.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(specialbonus.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(specialbonus, detaching);
      }
    };
  }
  function create_if_block_28(ctx) {
    let a;
    let t_value = ctx[8] + "";
    let t;
    let a_href_value;
    return {
      c() {
        a = element("a");
        t = text(t_value);
        attr(a, "href", a_href_value = rul.sprite(ctx[8]));
      },
      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t);
      },
      p(ctx2, dirty) {
        if (dirty & 1 && t_value !== (t_value = ctx2[8] + ""))
          set_data(t, t_value);
        if (dirty & 1 && a_href_value !== (a_href_value = rul.sprite(ctx2[8]))) {
          attr(a, "href", a_href_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(a);
      }
    };
  }
  function create_if_block_111(ctx) {
    let value;
    let current;
    value = new Value_default({ props: { val: ctx[8][0] } });
    return {
      c() {
        create_component(value.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[8][0];
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
      }
    };
  }
  function create_if_block14(ctx) {
    let table;
    let each_value_1 = ctx[8];
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_14(get_each_context_14(ctx, each_value_1, i));
    }
    return {
      c() {
        table = element("table");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(table, "class", "number-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
      },
      p(ctx2, dirty) {
        if (dirty & 1) {
          each_value_1 = ctx2[8];
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_14(ctx2, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_14(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(table, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_1.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_each_block_14(ctx) {
    let tr2;
    let td0;
    let t0_value = rul.damageTypeName(ctx[13]) + "";
    let t0;
    let t1;
    let td1;
    let t2_value = Math.round(ctx[11] * 100) + "";
    let t2;
    let t3;
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        t0 = text(t0_value);
        t1 = space();
        td1 = element("td");
        t2 = text(t2_value);
        t3 = text("%");
        attr(td0, "width", "50%");
        attr(td0, "class", "number-table1");
        attr(td1, "width", "50%");
        attr(td1, "class", "number-table2");
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        append(td0, t0);
        append(tr2, t1);
        append(tr2, td1);
        append(td1, t2);
        append(td1, t3);
      },
      p(ctx2, dirty) {
        if (dirty & 1 && t2_value !== (t2_value = Math.round(ctx2[11] * 100) + ""))
          set_data(t2, t2_value);
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
      }
    };
  }
  function create_each_block15(ctx) {
    let tr2;
    let td0;
    let value;
    let t;
    let td1;
    let show_if;
    let show_if_1;
    let show_if_2;
    let current_block_type_index;
    let if_block;
    let current;
    value = new Value_default({ props: { val: ctx[7] } });
    const if_block_creators = [
      create_if_block14,
      create_if_block_111,
      create_if_block_28,
      create_if_block_38,
      create_if_block_45,
      create_else_block9
    ];
    const if_blocks = [];
    function select_block_type_2(ctx2, dirty) {
      if (dirty & 1)
        show_if = null;
      if (dirty & 1)
        show_if_1 = null;
      if (dirty & 1)
        show_if_2 = null;
      if (ctx2[7] == "damageModifier")
        return 0;
      if (show_if == null)
        show_if = !!["corpseBattle"].includes(ctx2[7]);
      if (show_if)
        return 1;
      if ("spriteSheet" == ctx2[7])
        return 2;
      if (show_if_1 == null)
        show_if_1 = !!["psiDefence", "meleeDodge"].includes(ctx2[7]);
      if (show_if_1)
        return 3;
      if (show_if_2 == null)
        show_if_2 = !!["builtInWeapons", "users", "units"].includes(ctx2[7]);
      if (show_if_2)
        return 4;
      return 5;
    }
    current_block_type_index = select_block_type_2(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        create_component(value.$$.fragment);
        t = space();
        td1 = element("td");
        if_block.c();
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        mount_component(value, td0, null);
        append(tr2, t);
        append(tr2, td1);
        if_blocks[current_block_type_index].m(td1, null);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[7];
        value.$set(value_changes);
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_2(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(td1, null);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_component(value);
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function create_fragment24(ctx) {
    let table;
    let thead;
    let td0;
    let tr0;
    let t0;
    let t1;
    let tr1;
    let td1;
    let div0;
    let promise;
    let t2;
    let tr2;
    let td2;
    let div1;
    let t3;
    let t4;
    let subheader;
    let t5;
    let recoverytable;
    let current;
    tr0 = new Tr_default({ props: { s: "Armor" } });
    let if_block = ctx[2].length > 0 && create_if_block_143(ctx);
    let info = {
      ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block4,
      then: create_then_block4,
      catch: create_catch_block4,
      value: 21
    };
    handle_promise(promise = ctx[0].dollSprites(), info);
    let each_value_2 = ["stats", "armor", "damageModifier"];
    let each_blocks_1 = [];
    for (let i = 0; i < 3; i += 1) {
      each_blocks_1[i] = create_each_block_24(get_each_context_24(ctx, each_value_2, i));
    }
    const out = (i) => transition_out(each_blocks_1[i], 1, 1, () => {
      each_blocks_1[i] = null;
    });
    let each_value = sortFirstLast(ctx[0], {
      exclude: [
        "recovery",
        "type",
        "layersDefinition",
        "spriteFaceColor",
        "spriteHairColor",
        "spriteUtileColor",
        "spriteFaceGroup",
        "spriteHairGroup",
        "spriteUtileGroup",
        "customArmorPreviewIndex",
        "dollSprites",
        "layersDefaultPrefix",
        "frontArmor",
        "sideArmor",
        "rearArmor",
        "underArmor",
        "spriteInv",
        "armor",
        "damageModifier",
        "stats"
      ],
      first: ["builtInWeapons", "size"]
    }).all;
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block15(get_each_context15(ctx, each_value, i));
    }
    const out_1 = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    subheader = new Subheader_default({ props: { text: "recovery" } });
    recoverytable = new RecoveryTable_default({
      props: { recovery: ctx[0].recovery }
    });
    return {
      c() {
        table = element("table");
        thead = element("thead");
        td0 = element("td");
        create_component(tr0.$$.fragment);
        t0 = space();
        if (if_block)
          if_block.c();
        t1 = space();
        tr1 = element("tr");
        td1 = element("td");
        div0 = element("div");
        info.block.c();
        t2 = space();
        tr2 = element("tr");
        td2 = element("td");
        div1 = element("div");
        for (let i = 0; i < 3; i += 1) {
          each_blocks_1[i].c();
        }
        t3 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t4 = space();
        create_component(subheader.$$.fragment);
        t5 = space();
        create_component(recoverytable.$$.fragment);
        attr(td0, "colspan", "2");
        attr(div0, "class", "armors");
        attr(td1, "colspan", "2");
        attr(div1, "class", "flex-horisontal");
        set_style(div1, "max-width", "95vw");
        attr(td2, "colspan", "2");
        attr(table, "class", "main-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        append(table, thead);
        append(thead, td0);
        mount_component(tr0, td0, null);
        append(td0, t0);
        if (if_block)
          if_block.m(td0, null);
        append(table, t1);
        append(table, tr1);
        append(tr1, td1);
        append(td1, div0);
        info.block.m(div0, info.anchor = null);
        info.mount = () => div0;
        info.anchor = null;
        append(table, t2);
        append(table, tr2);
        append(tr2, td2);
        append(td2, div1);
        for (let i = 0; i < 3; i += 1) {
          each_blocks_1[i].m(div1, null);
        }
        append(table, t3);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        append(table, t4);
        mount_component(subheader, table, null);
        append(table, t5);
        mount_component(recoverytable, table, null);
        current = true;
      },
      p(new_ctx, [dirty]) {
        ctx = new_ctx;
        if (ctx[2].length > 0) {
          if (if_block) {
            if_block.p(ctx, dirty);
            if (dirty & 4) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_143(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(td0, null);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        info.ctx = ctx;
        if (dirty & 1 && promise !== (promise = ctx[0].dollSprites()) && handle_promise(promise, info)) {
        } else {
          update_await_block_branch(info, ctx, dirty);
        }
        if (dirty & 1) {
          each_value_2 = ["stats", "armor", "damageModifier"];
          let i;
          for (i = 0; i < 3; i += 1) {
            const child_ctx = get_each_context_24(ctx, each_value_2, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
              transition_in(each_blocks_1[i], 1);
            } else {
              each_blocks_1[i] = create_each_block_24(child_ctx);
              each_blocks_1[i].c();
              transition_in(each_blocks_1[i], 1);
              each_blocks_1[i].m(div1, null);
            }
          }
          group_outros();
          for (i = 3; i < 3; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (dirty & 1) {
          each_value = sortFirstLast(ctx[0], {
            exclude: [
              "recovery",
              "type",
              "layersDefinition",
              "spriteFaceColor",
              "spriteHairColor",
              "spriteUtileColor",
              "spriteFaceGroup",
              "spriteHairGroup",
              "spriteUtileGroup",
              "customArmorPreviewIndex",
              "dollSprites",
              "layersDefaultPrefix",
              "frontArmor",
              "sideArmor",
              "rearArmor",
              "underArmor",
              "spriteInv",
              "armor",
              "damageModifier",
              "stats"
            ],
            first: ["builtInWeapons", "size"]
          }).all;
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context15(ctx, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block15(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, t4);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out_1(i);
          }
          check_outros();
        }
        const recoverytable_changes = {};
        if (dirty & 1)
          recoverytable_changes.recovery = ctx[0].recovery;
        recoverytable.$set(recoverytable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(tr0.$$.fragment, local);
        transition_in(if_block);
        for (let i = 0; i < 3; i += 1) {
          transition_in(each_blocks_1[i]);
        }
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(subheader.$$.fragment, local);
        transition_in(recoverytable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr0.$$.fragment, local);
        transition_out(if_block);
        each_blocks_1 = each_blocks_1.filter(Boolean);
        for (let i = 0; i < 3; i += 1) {
          transition_out(each_blocks_1[i]);
        }
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(subheader.$$.fragment, local);
        transition_out(recoverytable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_component(tr0);
        if (if_block)
          if_block.d();
        info.block.d();
        info.token = null;
        info = null;
        destroy_each(each_blocks_1, detaching);
        destroy_each(each_blocks, detaching);
        destroy_component(subheader);
        destroy_component(recoverytable);
      }
    };
  }
  var dollColumns = 6;
  var func_12 = (s) => s.substr(0, 8) != "INV_NULL";
  function instance24($$self, $$props, $$invalidate) {
    let { entry } = $$props;
    let { text: text2 } = $$props;
    let seeAllVariants = false;
    let seeAlso = [];
    const imageNotFound = () => {
      this.onerror = null;
      console.log(this.src + " not found");
      this.src = emptyImg;
    };
    const click_handler = (e) => $$invalidate(3, seeAllVariants = !seeAllVariants);
    const func5 = (a, b) => rul.bodiesCompare([a, b]);
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(0, entry = $$props2.entry);
      if ("text" in $$props2)
        $$invalidate(1, text2 = $$props2.text);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 5) {
        $: {
          console.log(entry);
          $$invalidate(2, seeAlso = []);
          if ("storeItem" in entry && entry.storeItem != "STR_NONE" && entry.storeItem != entry.type) {
            seeAlso.push(entry.storeItem);
          }
          if ("users" in entry) {
            for (let item of entry.users.filter((s) => s.substr(0, 8) != "INV_NULL" && s != entry.type && "##" + s != window.location.hash && s != entry.type)) {
              seeAlso.push(item);
            }
          }
        }
      }
    };
    return [entry, text2, seeAlso, seeAllVariants, imageNotFound, click_handler, func5];
  }
  var Armor2 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance24, create_fragment24, safe_not_equal, { entry: 0, text: 1 });
    }
  };
  var Armor_default = Armor2;

  // src/Craft.svelte
  function get_each_context16(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i][0];
    child_ctx[3] = list[i][1];
    return child_ctx;
  }
  function create_else_block10(ctx) {
    let value;
    let current;
    value = new Value_default({ props: { val: ctx[3] } });
    return {
      c() {
        create_component(value.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[3];
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
      }
    };
  }
  function create_if_block_113(ctx) {
    let value0;
    let t0;
    let value1;
    let t1;
    let value2;
    let current;
    value0 = new Value_default({
      props: { obs: "base", val: 33 + ctx[3] }
    });
    value1 = new Value_default({
      props: { obs: "icon", val: ctx[3] + 11 }
    });
    value2 = new Value_default({
      props: { obs: "icon", val: ctx[3] }
    });
    return {
      c() {
        create_component(value0.$$.fragment);
        t0 = space();
        create_component(value1.$$.fragment);
        t1 = space();
        create_component(value2.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value0, target, anchor);
        insert(target, t0, anchor);
        mount_component(value1, target, anchor);
        insert(target, t1, anchor);
        mount_component(value2, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value0_changes = {};
        if (dirty & 1)
          value0_changes.val = 33 + ctx2[3];
        value0.$set(value0_changes);
        const value1_changes = {};
        if (dirty & 1)
          value1_changes.val = ctx2[3] + 11;
        value1.$set(value1_changes);
        const value2_changes = {};
        if (dirty & 1)
          value2_changes.val = ctx2[3];
        value2.$set(value2_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value0.$$.fragment, local);
        transition_in(value1.$$.fragment, local);
        transition_in(value2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value0.$$.fragment, local);
        transition_out(value1.$$.fragment, local);
        transition_out(value2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value0, detaching);
        if (detaching)
          detach(t0);
        destroy_component(value1, detaching);
        if (detaching)
          detach(t1);
        destroy_component(value2, detaching);
      }
    };
  }
  function create_if_block15(ctx) {
    let value;
    let current;
    value = new Value_default({
      props: {
        val: ctx[3].map(ctx[1])
      }
    });
    return {
      c() {
        create_component(value.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[3].map(ctx2[1]);
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
      }
    };
  }
  function create_each_block16(ctx) {
    let tr2;
    let value;
    let t0;
    let td;
    let current_block_type_index;
    let if_block;
    let t1;
    let current;
    value = new Value_default({ props: { val: ctx[2] } });
    const if_block_creators = [create_if_block15, create_if_block_113, create_else_block10];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if ("weaponStrings" == ctx2[2])
        return 0;
      if ("sprite" == ctx2[2])
        return 1;
      return 2;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        tr2 = element("tr");
        create_component(value.$$.fragment);
        t0 = space();
        td = element("td");
        if_block.c();
        t1 = space();
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        mount_component(value, tr2, null);
        append(tr2, t0);
        append(tr2, td);
        if_blocks[current_block_type_index].m(td, null);
        append(tr2, t1);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[2];
        value.$set(value_changes);
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(td, null);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_component(value);
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function create_fragment25(ctx) {
    let table;
    let tr2;
    let td;
    let t1;
    let current;
    let each_value = sortFirstLast(ctx[0], {
      first: ["speedMax", "soldiers"],
      exclude: ["type", "battlescapeTerrainData", "craftInventoryTile", "deployment"]
    }).all;
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block16(get_each_context16(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        table = element("table");
        tr2 = element("tr");
        td = element("td");
        td.textContent = `${rul.tr("Craft")}`;
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(td, "colspan", "2");
        attr(tr2, "class", "table-header");
        attr(table, "class", "main-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        append(table, tr2);
        append(tr2, td);
        append(table, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          each_value = sortFirstLast(ctx2[0], {
            first: ["speedMax", "soldiers"],
            exclude: ["type", "battlescapeTerrainData", "craftInventoryTile", "deployment"]
          }).all;
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context16(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block16(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance25($$self, $$props, $$invalidate) {
    let { entry } = $$props;
    const func5 = (slot) => rul.tr(slot).replace(">{ALT}{0}", "");
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(0, entry = $$props2.entry);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $: {
          console.info(entry);
        }
      }
    };
    return [entry, func5];
  }
  var Craft2 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance25, create_fragment25, safe_not_equal, { entry: 0 });
    }
  };
  var Craft_default = Craft2;

  // src/CraftWeapon.svelte
  function get_each_context17(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i];
    return child_ctx;
  }
  function create_if_block_114(ctx) {
    let tr2;
    let td0;
    let value0;
    let t0;
    let td1;
    let value1;
    let t1;
    let current;
    value0 = new Value_default({ props: { val: ctx[1][0] } });
    value1 = new Value_default({ props: { val: ctx[1][1] } });
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        create_component(value0.$$.fragment);
        t0 = space();
        td1 = element("td");
        create_component(value1.$$.fragment);
        t1 = space();
        attr(td0, "class", "padding-right");
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        mount_component(value0, td0, null);
        append(tr2, t0);
        append(tr2, td1);
        mount_component(value1, td1, null);
        append(tr2, t1);
        current = true;
      },
      p(ctx2, dirty) {
        const value0_changes = {};
        if (dirty & 1)
          value0_changes.val = ctx2[1][0];
        value0.$set(value0_changes);
        const value1_changes = {};
        if (dirty & 1)
          value1_changes.val = ctx2[1][1];
        value1.$set(value1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value0.$$.fragment, local);
        transition_in(value1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value0.$$.fragment, local);
        transition_out(value1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_component(value0);
        destroy_component(value1);
      }
    };
  }
  function create_each_block17(ctx) {
    let show_if = !["type"].includes(ctx[1][0]);
    let if_block_anchor;
    let current;
    let if_block = show_if && create_if_block_114(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1)
          show_if = !["type"].includes(ctx2[1][0]);
        if (show_if) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_114(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block16(ctx) {
    let item;
    let current;
    item = new Item_default({
      props: {
        entry: rul.items[ctx[0].launcher],
        title: "Launcher: " + rul.tr(ctx[0].launcher)
      }
    });
    return {
      c() {
        create_component(item.$$.fragment);
      },
      m(target, anchor) {
        mount_component(item, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const item_changes = {};
        if (dirty & 1)
          item_changes.entry = rul.items[ctx2[0].launcher];
        if (dirty & 1)
          item_changes.title = "Launcher: " + rul.tr(ctx2[0].launcher);
        item.$set(item_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(item.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(item.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(item, detaching);
      }
    };
  }
  function create_fragment26(ctx) {
    let table;
    let tr2;
    let t1;
    let t2;
    let if_block_anchor;
    let current;
    let each_value = Object.entries(ctx[0]).sort(func2);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block17(get_each_context17(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    let if_block = ctx[0].launcher && create_if_block16(ctx);
    return {
      c() {
        table = element("table");
        tr2 = element("tr");
        tr2.innerHTML = `<td colspan="2">Weapon</td>`;
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t2 = space();
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
        attr(tr2, "class", "table-header");
        attr(table, "class", "main-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        append(table, tr2);
        append(table, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        insert(target, t2, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          each_value = Object.entries(ctx2[0]).sort(func2);
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context17(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block17(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (ctx2[0].launcher) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block16(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(if_block);
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(t2);
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  var func2 = (a, b) => a[0] > b[0] ? 1 : -1;
  function instance26($$self, $$props, $$invalidate) {
    let { entry } = $$props;
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(0, entry = $$props2.entry);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $: {
          console.log(entry);
        }
      }
    };
    return [entry];
  }
  var CraftWeapon2 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance26, create_fragment26, safe_not_equal, { entry: 0 });
    }
  };
  var CraftWeapon_default = CraftWeapon2;

  // src/Unit.svelte
  function get_each_context18(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i][0];
    child_ctx[3] = list[i][1];
    return child_ctx;
  }
  function create_each_block18(ctx) {
    let tr2;
    let td0;
    let value0;
    let td1;
    let value1;
    let t;
    let current;
    value0 = new Value_default({
      props: { val: ctx[2], simple: true }
    });
    value1 = new Value_default({ props: { val: ctx[3] } });
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        create_component(value0.$$.fragment);
        td1 = element("td");
        create_component(value1.$$.fragment);
        t = space();
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        mount_component(value0, td0, null);
        append(tr2, td1);
        mount_component(value1, td1, null);
        append(tr2, t);
        current = true;
      },
      p(ctx2, dirty) {
        const value0_changes = {};
        if (dirty & 1)
          value0_changes.val = ctx2[2];
        value0.$set(value0_changes);
        const value1_changes = {};
        if (dirty & 1)
          value1_changes.val = ctx2[3];
        value1.$set(value1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value0.$$.fragment, local);
        transition_in(value1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value0.$$.fragment, local);
        transition_out(value1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_component(value0);
        destroy_component(value1);
      }
    };
  }
  function create_fragment27(ctx) {
    let table;
    let tr2;
    let td;
    let t1;
    let current;
    let each_value = ctx[0].all;
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block18(get_each_context18(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        table = element("table");
        tr2 = element("tr");
        td = element("td");
        td.textContent = `${rul.tr("Unit")}`;
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(td, "colspan", "2");
        attr(td, "class", "table-header");
        attr(table, "class", "main-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        append(table, tr2);
        append(tr2, td);
        append(table, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          each_value = ctx2[0].all;
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context18(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block18(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance27($$self, $$props, $$invalidate) {
    let { entry } = $$props;
    let sorted;
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(1, entry = $$props2.entry);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 2) {
        $: {
          console.log(entry);
          $$invalidate(0, sorted = sortFirstLast(entry, {
            first: ["stats", "armor", "canSurrender"],
            last: Object.keys(entry).filter((s) => s.indexOf("ound") != -1),
            exclude: ["type"]
          }));
        }
      }
    };
    return [sorted, entry];
  }
  var Unit2 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance27, create_fragment27, safe_not_equal, { entry: 1 });
    }
  };
  var Unit_default = Unit2;

  // src/Research.svelte
  function get_each_context19(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[3] = list[i][0];
    child_ctx[4] = list[i][1];
    return child_ctx;
  }
  function get_each_context_15(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[3] = list[i];
    return child_ctx;
  }
  function create_else_block11(ctx) {
    let tr2;
    let td0;
    let value0;
    let t0;
    let td1;
    let value1;
    let t1;
    let current;
    value0 = new Value_default({ props: { val: ctx[3] } });
    value1 = new Value_default({ props: { val: ctx[4] } });
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        create_component(value0.$$.fragment);
        t0 = space();
        td1 = element("td");
        create_component(value1.$$.fragment);
        t1 = space();
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        mount_component(value0, td0, null);
        append(tr2, t0);
        append(tr2, td1);
        mount_component(value1, td1, null);
        append(tr2, t1);
        current = true;
      },
      p(ctx2, dirty) {
        const value0_changes = {};
        if (dirty & 1)
          value0_changes.val = ctx2[3];
        value0.$set(value0_changes);
        const value1_changes = {};
        if (dirty & 1)
          value1_changes.val = ctx2[4];
        value1.$set(value1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value0.$$.fragment, local);
        transition_in(value1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value0.$$.fragment, local);
        transition_out(value1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_component(value0);
        destroy_component(value1);
      }
    };
  }
  function create_if_block_29(ctx) {
    let tr2;
    let td;
    let t0_value = rul.tr(ctx[3]) + "";
    let t0;
    let t1;
    let each_1_anchor;
    let current;
    let each_value_1 = Object.keys(ctx[4]);
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_15(get_each_context_15(ctx, each_value_1, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        tr2 = element("tr");
        td = element("td");
        t0 = text(t0_value);
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
        attr(td, "colspan", "2");
        attr(td, "class", "table-subheader");
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td);
        append(td, t0);
        insert(target, t1, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 1) && t0_value !== (t0_value = rul.tr(ctx2[3]) + ""))
          set_data(t0, t0_value);
        if (dirty & 5) {
          each_value_1 = Object.keys(ctx2[4]);
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_15(ctx2, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_15(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value_1.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_1.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        if (detaching)
          detach(t1);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_if_block_115(ctx) {
    let baseservicelist;
    let current;
    baseservicelist = new BaseServiceList_default({
      props: { items: ctx[4], vertical: true }
    });
    return {
      c() {
        create_component(baseservicelist.$$.fragment);
      },
      m(target, anchor) {
        mount_component(baseservicelist, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const baseservicelist_changes = {};
        if (dirty & 1)
          baseservicelist_changes.items = ctx2[4];
        baseservicelist.$set(baseservicelist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(baseservicelist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(baseservicelist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(baseservicelist, detaching);
      }
    };
  }
  function create_if_block17(ctx) {
    let tr1;
    let td0;
    let tr0;
    let t0;
    let tr2;
    let td1;
    let linkslist;
    let t1;
    let current;
    tr0 = new Tr_default({ props: { s: ctx[3] } });
    linkslist = new LinksList_default({ props: { items: ctx[4] } });
    return {
      c() {
        tr1 = element("tr");
        td0 = element("td");
        create_component(tr0.$$.fragment);
        t0 = space();
        tr2 = element("tr");
        td1 = element("td");
        create_component(linkslist.$$.fragment);
        t1 = space();
        attr(td0, "colspan", "2");
        attr(td0, "class", "table-subheader");
        attr(td1, "colspan", "2");
        attr(td1, "class", "centered-text");
      },
      m(target, anchor) {
        insert(target, tr1, anchor);
        append(tr1, td0);
        mount_component(tr0, td0, null);
        append(td0, t0);
        insert(target, tr2, anchor);
        append(tr2, td1);
        mount_component(linkslist, td1, null);
        append(td1, t1);
        current = true;
      },
      p(ctx2, dirty) {
        const tr0_changes = {};
        if (dirty & 1)
          tr0_changes.s = ctx2[3];
        tr0.$set(tr0_changes);
        const linkslist_changes = {};
        if (dirty & 1)
          linkslist_changes.items = ctx2[4];
        linkslist.$set(linkslist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(tr0.$$.fragment, local);
        transition_in(linkslist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr0.$$.fragment, local);
        transition_out(linkslist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr1);
        destroy_component(tr0);
        if (detaching)
          detach(tr2);
        destroy_component(linkslist);
      }
    };
  }
  function create_each_block_15(ctx) {
    let tr2;
    let td0;
    let value;
    let t;
    let td1;
    let linkslist;
    let current;
    value = new Value_default({ props: { val: ctx[3] } });
    linkslist = new LinksList_default({
      props: { items: ctx[4][ctx[3]] }
    });
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        create_component(value.$$.fragment);
        t = text(":");
        td1 = element("td");
        create_component(linkslist.$$.fragment);
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        mount_component(value, td0, null);
        append(td0, t);
        append(tr2, td1);
        mount_component(linkslist, td1, null);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[3];
        value.$set(value_changes);
        const linkslist_changes = {};
        if (dirty & 1)
          linkslist_changes.items = ctx2[4][ctx2[3]];
        linkslist.$set(linkslist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        transition_in(linkslist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        transition_out(linkslist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_component(value);
        destroy_component(linkslist);
      }
    };
  }
  function create_each_block19(ctx) {
    let show_if;
    let show_if_1;
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block17, create_if_block_115, create_if_block_29, create_else_block11];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (dirty & 1)
        show_if = null;
      if (dirty & 1)
        show_if_1 = null;
      if (show_if == null)
        show_if = !!(ctx2[2].includes(ctx2[3]) && ctx2[4] && ctx2[4].length > 0);
      if (show_if)
        return 0;
      if (show_if_1 == null)
        show_if_1 = !!["requiresBaseFunc"].includes(ctx2[3]);
      if (show_if_1)
        return 1;
      if (ctx2[3] == "getOneFreeProtected")
        return 2;
      return 3;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_fragment28(ctx) {
    let table;
    let tr2;
    let td;
    let t0;
    let t1;
    let current;
    let each_value = sortFirstLast(ctx[0], {
      last: ctx[2],
      exclude: ["name"]
    }).all;
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block19(get_each_context19(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        table = element("table");
        tr2 = element("tr");
        td = element("td");
        t0 = text(ctx[1]);
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(td, "colspan", "2");
        attr(tr2, "class", "table-header");
        attr(table, "class", "main-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        append(table, tr2);
        append(tr2, td);
        append(td, t0);
        append(table, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (!current || dirty & 2)
          set_data(t0, ctx2[1]);
        if (dirty & 5) {
          each_value = sortFirstLast(ctx2[0], {
            last: ctx2[2],
            exclude: ["name"]
          }).all;
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context19(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block19(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance28($$self, $$props, $$invalidate) {
    let { entry } = $$props;
    let { title = rul.tr("Research") } = $$props;
    let longLists = [
      "unlocks",
      "seeAlso",
      "allowsBuying",
      "freeFrom",
      "dependencies",
      "leadsTo",
      "disables",
      "getOneFree",
      "getOneFreeProtected",
      "requiresBaseFunc",
      "manufacture"
    ];
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(0, entry = $$props2.entry);
      if ("title" in $$props2)
        $$invalidate(1, title = $$props2.title);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $: {
          console.log(entry);
        }
      }
    };
    return [entry, title, longLists];
  }
  var Research2 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance28, create_fragment28, safe_not_equal, { entry: 0, title: 1 });
    }
  };
  var Research_default = Research2;

  // src/Manufacture.svelte
  function get_each_context20(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i];
    return child_ctx;
  }
  function create_else_block12(ctx) {
    let value;
    let current;
    value = new Value_default({ props: { val: ctx[1][1] } });
    return {
      c() {
        create_component(value.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[1][1];
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
      }
    };
  }
  function create_if_block18(ctx) {
    let tr2;
    let current;
    tr2 = new Tr_default({ props: { s: "NOTHING" } });
    return {
      c() {
        create_component(tr2.$$.fragment);
      },
      m(target, anchor) {
        mount_component(tr2, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(tr2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(tr2, detaching);
      }
    };
  }
  function create_each_block20(ctx) {
    let tr2;
    let td0;
    let t0_value = (ctx[1][0] / ctx[0].chanceSum * 100).toFixed(2) + "";
    let t0;
    let t1;
    let t2;
    let td1;
    let show_if;
    let current_block_type_index;
    let if_block;
    let t3;
    let current;
    const if_block_creators = [create_if_block18, create_else_block12];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (dirty & 1)
        show_if = null;
      if (show_if == null)
        show_if = !!(Object.keys(ctx2[1][1]).length == 0);
      if (show_if)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        t0 = text(t0_value);
        t1 = text("%");
        t2 = space();
        td1 = element("td");
        if_block.c();
        t3 = space();
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        append(td0, t0);
        append(td0, t1);
        append(tr2, t2);
        append(tr2, td1);
        if_blocks[current_block_type_index].m(td1, null);
        append(tr2, t3);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 1) && t0_value !== (t0_value = (ctx2[1][0] / ctx2[0].chanceSum * 100).toFixed(2) + ""))
          set_data(t0, t0_value);
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(td1, null);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function create_wide_slot(ctx) {
    let tr0;
    let td0;
    let value;
    let t;
    let tr1;
    let td1;
    let table;
    let current;
    value = new Value_default({ props: { val: "randomProducedItems" } });
    let each_value = ctx[0].randomProducedItems;
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block20(get_each_context20(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        tr0 = element("tr");
        td0 = element("td");
        create_component(value.$$.fragment);
        t = space();
        tr1 = element("tr");
        td1 = element("td");
        table = element("table");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(td0, "colspan", "2");
        attr(td0, "class", "table-subheader");
        attr(table, "class", "number-table");
        attr(table, "width", "100%");
        set_style(table, "margin", "0px");
        attr(td1, "colspan", "2");
      },
      m(target, anchor) {
        insert(target, tr0, anchor);
        append(tr0, td0);
        mount_component(value, td0, null);
        insert(target, t, anchor);
        insert(target, tr1, anchor);
        append(tr1, td1);
        append(td1, table);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1) {
          each_value = ctx2[0].randomProducedItems;
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context20(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block20(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr0);
        destroy_component(value);
        if (detaching)
          detach(t);
        if (detaching)
          detach(tr1);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_fragment29(ctx) {
    let maintable;
    let current;
    maintable = new MainTable_default({
      props: {
        entry: ctx[0],
        sort: {
          exclude: ["chanceSum", "totalProducedItems"]
        },
        title: "Manufacture",
        wide: ["randomProducedItems"],
        $$slots: { wide: [create_wide_slot] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(maintable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(maintable, target, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const maintable_changes = {};
        if (dirty & 1)
          maintable_changes.entry = ctx2[0];
        if (dirty & 17) {
          maintable_changes.$$scope = { dirty, ctx: ctx2 };
        }
        maintable.$set(maintable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(maintable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(maintable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(maintable, detaching);
      }
    };
  }
  function instance29($$self, $$props, $$invalidate) {
    let { entry } = $$props;
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(0, entry = $$props2.entry);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $: {
          console.log(entry);
        }
      }
    };
    return [entry];
  }
  var Manufacture2 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance29, create_fragment29, safe_not_equal, { entry: 0 });
    }
  };
  var Manufacture_default = Manufacture2;

  // src/Ufo.svelte
  function get_each_context21(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i];
    child_ctx[3] = i;
    return child_ctx;
  }
  function get_each_context_16(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[4] = list[i];
    child_ctx[6] = i;
    return child_ctx;
  }
  function get_each_context_25(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i][0];
    child_ctx[8] = list[i][1];
    return child_ctx;
  }
  function create_else_block13(ctx) {
    let value;
    let current;
    value = new Value_default({ props: { val: ctx[8] } });
    return {
      c() {
        create_component(value.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[8];
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
      }
    };
  }
  function create_if_block_116(ctx) {
    let img;
    let img_src_value;
    return {
      c() {
        img = element("img");
        attr(img, "class", "sprite");
        attr(img, "alt", "X");
        if (!src_url_equal(img.src, img_src_value = rul.sprite(ctx[8])))
          attr(img, "src", img_src_value);
        attr(img, "onerror", "this.onerror=null; this.src='xpedia/0.jpg'");
      },
      m(target, anchor) {
        insert(target, img, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 1 && !src_url_equal(img.src, img_src_value = rul.sprite(ctx2[8]))) {
          attr(img, "src", img_src_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(img);
      }
    };
  }
  function create_each_block_25(ctx) {
    let tr2;
    let td0;
    let raw_value = rul.tr(ctx[7]) + "";
    let t;
    let td1;
    let show_if;
    let current_block_type_index;
    let if_block;
    let current;
    const if_block_creators = [create_if_block_116, create_else_block13];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (dirty & 1)
        show_if = null;
      if (show_if == null)
        show_if = !!["modSprite"].includes(ctx2[7]);
      if (show_if)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        t = space();
        td1 = element("td");
        if_block.c();
        attr(td0, "class", "padding-right");
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        td0.innerHTML = raw_value;
        append(tr2, t);
        append(tr2, td1);
        if_blocks[current_block_type_index].m(td1, null);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 1) && raw_value !== (raw_value = rul.tr(ctx2[7]) + ""))
          td0.innerHTML = raw_value;
        ;
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(td1, null);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function create_if_block19(ctx) {
    let tr1;
    let td2;
    let table;
    let tr0;
    let td0;
    let td1;
    let t1;
    let current;
    let each_value = Object.keys(ctx[0].raceBonus).sort();
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block21(get_each_context21(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        tr1 = element("tr");
        td2 = element("td");
        table = element("table");
        tr0 = element("tr");
        td0 = element("td");
        td0.textContent = `${rul.tr("raceBonus")}`;
        td1 = element("td");
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(td0, "colspan", "2");
        attr(table, "class", "number-table");
        attr(td2, "colspan", "2");
      },
      m(target, anchor) {
        insert(target, tr1, anchor);
        append(tr1, td2);
        append(td2, table);
        append(table, tr0);
        append(tr0, td0);
        append(tr0, td1);
        append(tr0, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(tr0, null);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1) {
          each_value = Object.keys(ctx2[0].raceBonus).sort();
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context21(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block21(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(tr0, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr1);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_each_block_16(ctx) {
    let t0_value = rul.tr(ctx[4]) + "";
    let t0;
    let t1;
    let em;
    let link2;
    let br;
    let current;
    link2 = new Link_default({
      props: {
        href: ctx[0].raceBonus[ctx[1]][ctx[4]]
      }
    });
    return {
      c() {
        t0 = text(t0_value);
        t1 = text(":\xA0");
        em = element("em");
        create_component(link2.$$.fragment);
        br = element("br");
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, t1, anchor);
        insert(target, em, anchor);
        mount_component(link2, em, null);
        insert(target, br, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 1) && t0_value !== (t0_value = rul.tr(ctx2[4]) + ""))
          set_data(t0, t0_value);
        const link_changes = {};
        if (dirty & 1)
          link_changes.href = ctx2[0].raceBonus[ctx2[1]][ctx2[4]];
        link2.$set(link_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(link2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(link2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(em);
        destroy_component(link2);
        if (detaching)
          detach(br);
      }
    };
  }
  function create_each_block21(ctx) {
    let tr2;
    let td0;
    let t0_value = rul.tr(ctx[1]) + "";
    let t0;
    let td1;
    let t1;
    let current;
    let each_value_1 = Object.keys(ctx[0].raceBonus[ctx[1]]).sort();
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_16(get_each_context_16(ctx, each_value_1, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        t0 = text(t0_value);
        td1 = element("td");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t1 = space();
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        append(td0, t0);
        append(tr2, td1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(td1, null);
        }
        append(td1, t1);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & 1) && t0_value !== (t0_value = rul.tr(ctx2[1]) + ""))
          set_data(t0, t0_value);
        if (dirty & 1) {
          each_value_1 = Object.keys(ctx2[0].raceBonus[ctx2[1]]).sort();
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_16(ctx2, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_16(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(td1, t1);
            }
          }
          group_outros();
          for (i = each_value_1.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_1.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_fragment30(ctx) {
    let table;
    let tr2;
    let t1;
    let t2;
    let current;
    let each_value_2 = sortFirstLast(ctx[0], {
      last: [
        "raceBonus",
        "type",
        "battlescapeTerrainData",
        "craftInventoryTile",
        "deployment"
      ]
    }).all;
    let each_blocks = [];
    for (let i = 0; i < each_value_2.length; i += 1) {
      each_blocks[i] = create_each_block_25(get_each_context_25(ctx, each_value_2, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    let if_block = ctx[0].raceBonus && create_if_block19(ctx);
    return {
      c() {
        table = element("table");
        tr2 = element("tr");
        tr2.innerHTML = `<td colspan="2">Craft</td>`;
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t2 = space();
        if (if_block)
          if_block.c();
        attr(tr2, "class", "table-header");
        attr(table, "class", "main-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        append(table, tr2);
        append(table, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        append(table, t2);
        if (if_block)
          if_block.m(table, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          each_value_2 = sortFirstLast(ctx2[0], {
            last: [
              "raceBonus",
              "type",
              "battlescapeTerrainData",
              "craftInventoryTile",
              "deployment"
            ]
          }).all;
          let i;
          for (i = 0; i < each_value_2.length; i += 1) {
            const child_ctx = get_each_context_25(ctx2, each_value_2, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_25(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, t2);
            }
          }
          group_outros();
          for (i = each_value_2.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (ctx2[0].raceBonus) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block19(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(table, null);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_2.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(if_block);
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_each(each_blocks, detaching);
        if (if_block)
          if_block.d();
      }
    };
  }
  function instance30($$self, $$props, $$invalidate) {
    let { entry } = $$props;
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(0, entry = $$props2.entry);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $: {
          console.info(entry);
        }
      }
    };
    return [entry];
  }
  var Ufo = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance30, create_fragment30, safe_not_equal, { entry: 0 });
    }
  };
  var Ufo_default = Ufo;

  // src/FacilitySprite.svelte
  function get_each_context22(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[3] = list[i];
    child_ctx[5] = i;
    return child_ctx;
  }
  function get_each_context_17(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[3] = list[i];
    child_ctx[7] = i;
    return child_ctx;
  }
  function create_catch_block5(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_then_block5(ctx) {
    let img;
    let img_src_value;
    let t;
    return {
      c() {
        img = element("img");
        t = space();
        attr(img, "class", "facility sprite");
        attr(img, "onerror", "this.onerror=null; this.src='xpedia/0.jpg'");
        attr(img, "alt", "X");
        if (!src_url_equal(img.src, img_src_value = ctx[8]))
          attr(img, "src", img_src_value);
      },
      m(target, anchor) {
        insert(target, img, anchor);
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 3 && !src_url_equal(img.src, img_src_value = ctx2[8])) {
          attr(img, "src", img_src_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(img);
        if (detaching)
          detach(t);
      }
    };
  }
  function create_pending_block5(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_each_block_17(ctx) {
    let await_block_anchor;
    let promise;
    let info = {
      ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block5,
      then: create_then_block5,
      catch: create_catch_block5,
      value: 8
    };
    handle_promise(promise = rul.obsSprite("base", ctx[1] * 1 + ctx[7] * ctx[0] + ctx[5]), info);
    return {
      c() {
        await_block_anchor = empty();
        info.block.c();
      },
      m(target, anchor) {
        insert(target, await_block_anchor, anchor);
        info.block.m(target, info.anchor = anchor);
        info.mount = () => await_block_anchor.parentNode;
        info.anchor = await_block_anchor;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        info.ctx = ctx;
        if (dirty & 3 && promise !== (promise = rul.obsSprite("base", ctx[1] * 1 + ctx[7] * ctx[0] + ctx[5])) && handle_promise(promise, info)) {
        } else {
          update_await_block_branch(info, ctx, dirty);
        }
      },
      d(detaching) {
        if (detaching)
          detach(await_block_anchor);
        info.block.d(detaching);
        info.token = null;
        info = null;
      }
    };
  }
  function create_each_block22(ctx) {
    let each_1_anchor;
    let each_value_1 = { length: ctx[0] };
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_17(get_each_context_17(ctx, each_value_1, i));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 3) {
          each_value_1 = { length: ctx2[0] };
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_17(ctx2, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_17(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_1.length;
        }
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_fragment31(ctx) {
    let div;
    let each_value = { length: ctx[0] };
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block22(get_each_context22(ctx, each_value, i));
    }
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "tight");
        set_style(div, "columns", ctx[0]);
        set_style(div, "width", 64 * ctx[0] + "px");
        set_style(div, "margin-bottom", (ctx[2] ? -64 * ctx[0] : 0) + "px");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div, null);
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & 3) {
          each_value = { length: ctx2[0] };
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context22(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block22(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        if (dirty & 1) {
          set_style(div, "columns", ctx2[0]);
        }
        if (dirty & 1) {
          set_style(div, "width", 64 * ctx2[0] + "px");
        }
        if (dirty & 5) {
          set_style(div, "margin-bottom", (ctx2[2] ? -64 * ctx2[0] : 0) + "px");
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance31($$self, $$props, $$invalidate) {
    let { size, prop, bottom } = $$props;
    $$self.$$set = ($$props2) => {
      if ("size" in $$props2)
        $$invalidate(0, size = $$props2.size);
      if ("prop" in $$props2)
        $$invalidate(1, prop = $$props2.prop);
      if ("bottom" in $$props2)
        $$invalidate(2, bottom = $$props2.bottom);
    };
    return [size, prop, bottom];
  }
  var FacilitySprite = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance31, create_fragment31, safe_not_equal, { size: 0, prop: 1, bottom: 2 });
    }
  };
  var FacilitySprite_default = FacilitySprite;

  // src/Facility.svelte
  function get_each_context23(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[4] = list[i][0];
    child_ctx[5] = list[i][1];
    return child_ctx;
  }
  function get_each_context_18(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[8] = list[i];
    child_ctx[10] = i;
    return child_ctx;
  }
  function create_if_block20(ctx) {
    let tr2;
    let td0;
    let value;
    let t0;
    let td1;
    let show_if;
    let show_if_1;
    let show_if_2;
    let show_if_3;
    let current_block_type_index;
    let if_block;
    let t1;
    let current;
    value = new Value_default({ props: { val: ctx[4] } });
    const if_block_creators = [
      create_if_block_117,
      create_if_block_39,
      create_if_block_55,
      create_if_block_65,
      create_else_block_14
    ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (dirty & 1)
        show_if = null;
      if (dirty & 1)
        show_if_1 = null;
      if (dirty & 1)
        show_if_2 = null;
      if (dirty & 1)
        show_if_3 = null;
      if (show_if == null)
        show_if = !!["buildCostItems"].includes(ctx2[4]);
      if (show_if)
        return 0;
      if (show_if_1 == null)
        show_if_1 = !!["storageTiles"].includes(ctx2[4]);
      if (show_if_1)
        return 1;
      if (show_if_2 == null)
        show_if_2 = !!["provideBaseFunc", "requiresBaseFunc", "forbiddenBaseFunc"].includes(ctx2[4]);
      if (show_if_2)
        return 2;
      if (show_if_3 == null)
        show_if_3 = !!["spriteFacility", "spriteShape"].includes(ctx2[4]);
      if (show_if_3)
        return 3;
      return 4;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        create_component(value.$$.fragment);
        t0 = space();
        td1 = element("td");
        if_block.c();
        t1 = space();
        attr(td0, "class", "padding-right");
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        mount_component(value, td0, null);
        append(tr2, t0);
        append(tr2, td1);
        if_blocks[current_block_type_index].m(td1, null);
        append(tr2, t1);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[4];
        value.$set(value_changes);
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(td1, null);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_component(value);
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function create_else_block_14(ctx) {
    let value;
    let current;
    value = new Value_default({ props: { val: ctx[5] } });
    return {
      c() {
        create_component(value.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[5];
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
      }
    };
  }
  function create_if_block_65(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block_75, create_else_block14];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (ctx2[0].spriteFacility)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type_1(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block_55(ctx) {
    let linkslist;
    let current;
    linkslist = new LinksList_default({
      props: { items: ctx[5], vertical: true }
    });
    return {
      c() {
        create_component(linkslist.$$.fragment);
      },
      m(target, anchor) {
        mount_component(linkslist, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const linkslist_changes = {};
        if (dirty & 1)
          linkslist_changes.items = ctx2[5];
        linkslist.$set(linkslist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(linkslist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linkslist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(linkslist, detaching);
      }
    };
  }
  function create_if_block_39(ctx) {
    let div2;
    let div0;
    let button;
    let t1;
    let div1;
    let current;
    let mounted;
    let dispose;
    let if_block = ctx[2] && create_if_block_46(ctx);
    return {
      c() {
        div2 = element("div");
        div0 = element("div");
        button = element("button");
        button.textContent = "Expand";
        t1 = space();
        div1 = element("div");
        if (if_block)
          if_block.c();
        attr(button, "class", "button");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        append(div2, div0);
        append(div0, button);
        append(div2, t1);
        append(div2, div1);
        if (if_block)
          if_block.m(div1, null);
        current = true;
        if (!mounted) {
          dispose = listen(button, "click", ctx[3]);
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (ctx2[2]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 4) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_46(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(div1, null);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div2);
        if (if_block)
          if_block.d();
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_117(ctx) {
    let each_1_anchor;
    let current;
    let each_value_1 = Object.keys(ctx[5]).sort();
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_18(get_each_context_18(ctx, each_value_1, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1) {
          each_value_1 = Object.keys(ctx2[5]).sort();
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_18(ctx2, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_18(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value_1.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_1.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_else_block14(ctx) {
    let facilitysprite;
    let current;
    facilitysprite = new FacilitySprite_default({
      props: {
        size: ctx[1],
        prop: ctx[5]
      }
    });
    return {
      c() {
        create_component(facilitysprite.$$.fragment);
      },
      m(target, anchor) {
        mount_component(facilitysprite, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const facilitysprite_changes = {};
        if (dirty & 2)
          facilitysprite_changes.size = ctx2[1];
        if (dirty & 1)
          facilitysprite_changes.prop = ctx2[5];
        facilitysprite.$set(facilitysprite_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(facilitysprite.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(facilitysprite.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(facilitysprite, detaching);
      }
    };
  }
  function create_if_block_75(ctx) {
    let facilitysprite0;
    let t;
    let facilitysprite1;
    let current;
    facilitysprite0 = new FacilitySprite_default({
      props: {
        size: ctx[1],
        prop: ctx[5],
        bottom: true
      }
    });
    facilitysprite1 = new FacilitySprite_default({
      props: {
        size: ctx[1],
        prop: ctx[0].spriteFacility
      }
    });
    return {
      c() {
        create_component(facilitysprite0.$$.fragment);
        t = space();
        create_component(facilitysprite1.$$.fragment);
      },
      m(target, anchor) {
        mount_component(facilitysprite0, target, anchor);
        insert(target, t, anchor);
        mount_component(facilitysprite1, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const facilitysprite0_changes = {};
        if (dirty & 2)
          facilitysprite0_changes.size = ctx2[1];
        if (dirty & 1)
          facilitysprite0_changes.prop = ctx2[5];
        facilitysprite0.$set(facilitysprite0_changes);
        const facilitysprite1_changes = {};
        if (dirty & 2)
          facilitysprite1_changes.size = ctx2[1];
        if (dirty & 1)
          facilitysprite1_changes.prop = ctx2[0].spriteFacility;
        facilitysprite1.$set(facilitysprite1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(facilitysprite0.$$.fragment, local);
        transition_in(facilitysprite1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(facilitysprite0.$$.fragment, local);
        transition_out(facilitysprite1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(facilitysprite0, detaching);
        if (detaching)
          detach(t);
        destroy_component(facilitysprite1, detaching);
      }
    };
  }
  function create_if_block_46(ctx) {
    let div;
    let linkslist;
    let current;
    linkslist = new LinksList_default({
      props: { items: ctx[5], vertical: true }
    });
    return {
      c() {
        div = element("div");
        create_component(linkslist.$$.fragment);
        set_style(div, "columns", "6");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(linkslist, div, null);
        current = true;
      },
      p(ctx2, dirty) {
        const linkslist_changes = {};
        if (dirty & 1)
          linkslist_changes.items = ctx2[5];
        linkslist.$set(linkslist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(linkslist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linkslist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(linkslist);
      }
    };
  }
  function create_if_block_210(ctx) {
    let br;
    return {
      c() {
        br = element("br");
      },
      m(target, anchor) {
        insert(target, br, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(br);
      }
    };
  }
  function create_each_block_18(ctx) {
    let t0;
    let link2;
    let t1;
    let t2_value = ctx[5][ctx[8]].build + "";
    let t2;
    let t3;
    let t4_value = ctx[5][ctx[8]].refund + "";
    let t4;
    let current;
    let if_block = ctx[10] != 0 && create_if_block_210(ctx);
    link2 = new Link_default({ props: { href: ctx[8] } });
    return {
      c() {
        if (if_block)
          if_block.c();
        t0 = space();
        create_component(link2.$$.fragment);
        t1 = text("\r\n              : ");
        t2 = text(t2_value);
        t3 = text(" / ");
        t4 = text(t4_value);
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, t0, anchor);
        mount_component(link2, target, anchor);
        insert(target, t1, anchor);
        insert(target, t2, anchor);
        insert(target, t3, anchor);
        insert(target, t4, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const link_changes = {};
        if (dirty & 1)
          link_changes.href = ctx2[8];
        link2.$set(link_changes);
        if ((!current || dirty & 1) && t2_value !== (t2_value = ctx2[5][ctx2[8]].build + ""))
          set_data(t2, t2_value);
        if ((!current || dirty & 1) && t4_value !== (t4_value = ctx2[5][ctx2[8]].refund + ""))
          set_data(t4, t4_value);
      },
      i(local) {
        if (current)
          return;
        transition_in(link2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(link2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(t0);
        destroy_component(link2, detaching);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(t4);
      }
    };
  }
  function create_each_block23(ctx) {
    let show_if = !["type", "battlescapeTerrainData", "craftInventoryTile", "deployment"].includes(ctx[4]);
    let if_block_anchor;
    let current;
    let if_block = show_if && create_if_block20(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1)
          show_if = !["type", "battlescapeTerrainData", "craftInventoryTile", "deployment"].includes(ctx2[4]);
        if (show_if) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block20(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_fragment32(ctx) {
    let table;
    let tr2;
    let td;
    let t1;
    let current;
    let each_value = sortFirstLast(ctx[0], {
      first: ["spriteShape"],
      exclude: ["spriteFacility"]
    }).all;
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block23(get_each_context23(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        table = element("table");
        tr2 = element("tr");
        td = element("td");
        td.textContent = `${rul.tr("Facility")}`;
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(td, "colspan", "2");
        attr(tr2, "class", "table-header");
        attr(table, "class", "main-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        append(table, tr2);
        append(tr2, td);
        append(table, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 7) {
          each_value = sortFirstLast(ctx2[0], {
            first: ["spriteShape"],
            exclude: ["spriteFacility"]
          }).all;
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context23(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block23(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance32($$self, $$props, $$invalidate) {
    let { entry } = $$props;
    let seeStorageTiles = false;
    let size = 1;
    const click_handler = (e) => $$invalidate(2, seeStorageTiles = !seeStorageTiles);
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(0, entry = $$props2.entry);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 3) {
        $: {
          $$invalidate(1, size = entry.size || 1);
          console.log(size);
          console.info(entry);
        }
      }
    };
    return [entry, size, seeStorageTiles, click_handler];
  }
  var Facility2 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance32, create_fragment32, safe_not_equal, { entry: 0 });
    }
  };
  var Facility_default = Facility2;

  // src/BaseService.svelte
  function get_each_context24(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i];
    return child_ctx;
  }
  function create_if_block21(ctx) {
    let tr2;
    let td0;
    let value;
    let t;
    let td1;
    let linkslist;
    let current;
    value = new Value_default({ props: { val: ctx[1][0] } });
    linkslist = new LinksList_default({ props: { items: ctx[1][1] } });
    return {
      c() {
        tr2 = element("tr");
        td0 = element("td");
        create_component(value.$$.fragment);
        t = space();
        td1 = element("td");
        create_component(linkslist.$$.fragment);
      },
      m(target, anchor) {
        insert(target, tr2, anchor);
        append(tr2, td0);
        mount_component(value, td0, null);
        append(tr2, t);
        append(tr2, td1);
        mount_component(linkslist, td1, null);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[1][0];
        value.$set(value_changes);
        const linkslist_changes = {};
        if (dirty & 1)
          linkslist_changes.items = ctx2[1][1];
        linkslist.$set(linkslist_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        transition_in(linkslist.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        transition_out(linkslist.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(tr2);
        destroy_component(value);
        destroy_component(linkslist);
      }
    };
  }
  function create_each_block24(ctx) {
    let show_if = !["id"].includes(ctx[1][0]);
    let if_block_anchor;
    let current;
    let if_block = show_if && create_if_block21(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1)
          show_if = !["id"].includes(ctx2[1][0]);
        if (show_if) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block21(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_fragment33(ctx) {
    let table;
    let current;
    let each_value = Object.entries(ctx[0]).sort(func3);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block24(get_each_context24(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        table = element("table");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(table, "class", "main-table");
      },
      m(target, anchor) {
        insert(target, table, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(table, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          each_value = Object.entries(ctx2[0]).sort(func3);
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context24(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block24(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(table, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  var func3 = (a, b) => (a[0] == "providedBy" ? -10 : 10) + (a[0] > b[0] ? 1 : -1);
  function instance33($$self, $$props, $$invalidate) {
    let { entry } = $$props;
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(0, entry = $$props2.entry);
    };
    return [entry];
  }
  var BaseService = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance33, create_fragment33, safe_not_equal, { entry: 0 });
    }
  };
  var BaseService_default = BaseService;

  // src/SoldierBonuses.svelte
  function create_default_slot3(ctx) {
    let table;
    let recoverytable;
    let current;
    recoverytable = new RecoveryTable_default({ props: { recovery: ctx[4] } });
    return {
      c() {
        table = element("table");
        create_component(recoverytable.$$.fragment);
      },
      m(target, anchor) {
        insert(target, table, anchor);
        mount_component(recoverytable, table, null);
        current = true;
      },
      p(ctx2, dirty) {
        const recoverytable_changes = {};
        if (dirty & 16)
          recoverytable_changes.recovery = ctx2[4];
        recoverytable.$set(recoverytable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(recoverytable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(recoverytable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(table);
        destroy_component(recoverytable);
      }
    };
  }
  function create_fragment34(ctx) {
    let maintable;
    let current;
    maintable = new MainTable_default({
      props: {
        title: ctx[1],
        subtitle: ctx[2],
        entry: ctx[0],
        special: ["recovery"],
        $$slots: {
          default: [
            create_default_slot3,
            ({ key, prop }) => ({ 3: key, 4: prop }),
            ({ key, prop }) => (key ? 8 : 0) | (prop ? 16 : 0)
          ]
        },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(maintable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(maintable, target, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const maintable_changes = {};
        if (dirty & 2)
          maintable_changes.title = ctx2[1];
        if (dirty & 4)
          maintable_changes.subtitle = ctx2[2];
        if (dirty & 1)
          maintable_changes.entry = ctx2[0];
        if (dirty & 48) {
          maintable_changes.$$scope = { dirty, ctx: ctx2 };
        }
        maintable.$set(maintable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(maintable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(maintable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(maintable, detaching);
      }
    };
  }
  function instance34($$self, $$props, $$invalidate) {
    let { entry } = $$props;
    let { title } = $$props;
    let { subtitle } = $$props;
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(0, entry = $$props2.entry);
      if ("title" in $$props2)
        $$invalidate(1, title = $$props2.title);
      if ("subtitle" in $$props2)
        $$invalidate(2, subtitle = $$props2.subtitle);
    };
    return [entry, title, subtitle];
  }
  var SoldierBonuses = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance34, create_fragment34, safe_not_equal, { entry: 0, title: 1, subtitle: 2 });
    }
  };
  var SoldierBonuses_default = SoldierBonuses;

  // src/Commendation.svelte
  function get_each_context25(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[3] = list[i];
    child_ctx[5] = i;
    return child_ctx;
  }
  function create_if_block_211(ctx) {
    let linkslist;
    let br;
    let t0;
    let value;
    let t1;
    let if_block_anchor;
    let current;
    linkslist = new LinksList_default({
      props: {
        items: withoutKeys(ctx[7], ["stats", "recovery", "id"])
      }
    });
    value = new Value_default({ props: { val: ctx[7]?.stats } });
    let if_block = ctx[7]?.recovery && create_if_block_310(ctx);
    return {
      c() {
        create_component(linkslist.$$.fragment);
        br = element("br");
        t0 = text("\n    Stats: ");
        create_component(value.$$.fragment);
        t1 = space();
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        mount_component(linkslist, target, anchor);
        insert(target, br, anchor);
        insert(target, t0, anchor);
        mount_component(value, target, anchor);
        insert(target, t1, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const linkslist_changes = {};
        if (dirty & 128)
          linkslist_changes.items = withoutKeys(ctx2[7], ["stats", "recovery", "id"]);
        linkslist.$set(linkslist_changes);
        const value_changes = {};
        if (dirty & 128)
          value_changes.val = ctx2[7]?.stats;
        value.$set(value_changes);
        if (ctx2[7]?.recovery) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 128) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_310(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(linkslist.$$.fragment, local);
        transition_in(value.$$.fragment, local);
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(linkslist.$$.fragment, local);
        transition_out(value.$$.fragment, local);
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        destroy_component(linkslist, detaching);
        if (detaching)
          detach(br);
        if (detaching)
          detach(t0);
        destroy_component(value, detaching);
        if (detaching)
          detach(t1);
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block22(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block_118, create_else_block15];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (ctx2[7].length == 0)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type_1(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block_310(ctx) {
    let br;
    let t;
    let table;
    let recoverytable;
    let current;
    recoverytable = new RecoveryTable_default({
      props: { recovery: ctx[7].recovery }
    });
    return {
      c() {
        br = element("br");
        t = text("Recover per turn: \n      ");
        table = element("table");
        create_component(recoverytable.$$.fragment);
      },
      m(target, anchor) {
        insert(target, br, anchor);
        insert(target, t, anchor);
        insert(target, table, anchor);
        mount_component(recoverytable, table, null);
        current = true;
      },
      p(ctx2, dirty) {
        const recoverytable_changes = {};
        if (dirty & 128)
          recoverytable_changes.recovery = ctx2[7].recovery;
        recoverytable.$set(recoverytable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(recoverytable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(recoverytable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(br);
        if (detaching)
          detach(t);
        if (detaching)
          detach(table);
        destroy_component(recoverytable);
      }
    };
  }
  function create_else_block15(ctx) {
    let html_tag;
    let raw_value = ctx[7].map(ctx[2]).join(` ${rul.tr("or")}<br/>`) + "";
    let html_anchor;
    return {
      c() {
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 128 && raw_value !== (raw_value = ctx2[7].map(ctx2[2]).join(` ${rul.tr("or")}<br/>`) + ""))
          html_tag.p(raw_value);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
      }
    };
  }
  function create_if_block_118(ctx) {
    let tr_1;
    let current;
    tr_1 = new Tr_default({ props: { s: "See stage descriptions" } });
    return {
      c() {
        create_component(tr_1.$$.fragment);
      },
      m(target, anchor) {
        mount_component(tr_1, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(tr_1, detaching);
      }
    };
  }
  function create_default_slot4(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block22, create_if_block_211];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[6] == "killCriteria2")
        return 0;
      if (ctx2[6] == "finalBonus")
        return 1;
      return -1;
    }
    if (~(current_block_type_index = select_block_type(ctx, -1))) {
      if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    }
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].m(target, anchor);
        }
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if (~current_block_type_index) {
            if_blocks[current_block_type_index].p(ctx2, dirty);
          }
        } else {
          if (if_block) {
            group_outros();
            transition_out(if_blocks[previous_block_index], 1, 1, () => {
              if_blocks[previous_block_index] = null;
            });
            check_outros();
          }
          if (~current_block_type_index) {
            if_block = if_blocks[current_block_type_index];
            if (!if_block) {
              if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
              if_block.c();
            } else {
              if_block.p(ctx2, dirty);
            }
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          } else {
            if_block = null;
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].d(detaching);
        }
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_each_block25(key_1, ctx) {
    let first;
    let soldierbonuses;
    let current;
    soldierbonuses = new SoldierBonuses_default({
      props: {
        entry: ctx[3],
        title: "Stage",
        subtitle: `${ctx[5] + 1}`
      }
    });
    return {
      key: key_1,
      first: null,
      c() {
        first = empty();
        create_component(soldierbonuses.$$.fragment);
        this.first = first;
      },
      m(target, anchor) {
        insert(target, first, anchor);
        mount_component(soldierbonuses, target, anchor);
        current = true;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        const soldierbonuses_changes = {};
        if (dirty & 2)
          soldierbonuses_changes.entry = ctx[3];
        if (dirty & 2)
          soldierbonuses_changes.subtitle = `${ctx[5] + 1}`;
        soldierbonuses.$set(soldierbonuses_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(soldierbonuses.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(soldierbonuses.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(first);
        destroy_component(soldierbonuses, detaching);
      }
    };
  }
  function create_fragment35(ctx) {
    let maintable;
    let t;
    let div;
    let each_blocks = [];
    let each_1_lookup = /* @__PURE__ */ new Map();
    let current;
    maintable = new MainTable_default({
      props: {
        entry: ctx[0],
        title: "Commendation",
        special: ["killCriteria2", "finalBonus"],
        sort: {
          last: ["items"],
          exclude: [
            "type",
            "criteria",
            "soldierBonusTypes",
            "battleTypes",
            "damageTypes",
            "kcd",
            "killCriteria"
          ]
        },
        $$slots: {
          default: [
            create_default_slot4,
            ({ key, prop }) => ({ 6: key, 7: prop }),
            ({ key, prop }) => (key ? 64 : 0) | (prop ? 128 : 0)
          ]
        },
        $$scope: { ctx }
      }
    });
    let each_value = ctx[1];
    const get_key = (ctx2) => ctx2[5];
    for (let i = 0; i < each_value.length; i += 1) {
      let child_ctx = get_each_context25(ctx, each_value, i);
      let key = get_key(child_ctx);
      each_1_lookup.set(key, each_blocks[i] = create_each_block25(key, child_ctx));
    }
    return {
      c() {
        create_component(maintable.$$.fragment);
        t = space();
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "no-break-column");
      },
      m(target, anchor) {
        mount_component(maintable, target, anchor);
        insert(target, t, anchor);
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        const maintable_changes = {};
        if (dirty & 1)
          maintable_changes.entry = ctx2[0];
        if (dirty & 448) {
          maintable_changes.$$scope = { dirty, ctx: ctx2 };
        }
        maintable.$set(maintable_changes);
        if (dirty & 2) {
          each_value = ctx2[1];
          group_outros();
          each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block25, null, get_each_context25);
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(maintable.$$.fragment, local);
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(maintable.$$.fragment, local);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_component(maintable, detaching);
        if (detaching)
          detach(t);
        if (detaching)
          detach(div);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].d();
        }
      }
    };
  }
  function instance35($$self, $$props, $$invalidate) {
    let { entry } = $$props;
    let bonuses;
    const func5 = (deeds) => deeds.map((deed) => deedDescription(deed)).join(` ${rul.tr("and")} `);
    $$self.$$set = ($$props2) => {
      if ("entry" in $$props2)
        $$invalidate(0, entry = $$props2.entry);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $: {
          let buf = [];
          for (let i = 0; i < 10; i++) {
            let bonusName = entry.soldierBonusTypes ? entry.soldierBonusTypes[i] : null;
            let b = {
              ...rul.soldierBonuses[bonusName] || {},
              criteria: {}
            };
            for (let criteria in entry.criteria) {
              b.criteria[criteria] = entry.criteria[criteria][i];
            }
            if (Object.keys(b).length > 0)
              buf[i] = b;
          }
          $$invalidate(1, bonuses = buf);
        }
      }
    };
    return [entry, bonuses, func5];
  }
  var Commendation2 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance35, create_fragment35, safe_not_equal, { entry: 0 });
    }
  };
  var Commendation_default = Commendation2;

  // src/ArticleBody.svelte
  function get_each_context26(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[5] = list[i][0];
    child_ctx[6] = list[i][1];
    return child_ctx;
  }
  function create_if_block_119(ctx) {
    let div1;
    let t;
    let div0;
    let current;
    let if_block = rul.items[ctx[1]]?.sprite && ctx[0] && rul.items[ctx[1]].battleType != 2 && create_if_block_212(ctx);
    return {
      c() {
        div1 = element("div");
        if (if_block)
          if_block.c();
        t = space();
        div0 = element("div");
        attr(div1, "class", "main-table main-text");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        if (if_block)
          if_block.m(div1, null);
        append(div1, t);
        append(div1, div0);
        div0.innerHTML = ctx[0];
        current = true;
      },
      p(ctx2, dirty) {
        if (rul.items[ctx2[1]]?.sprite && ctx2[0] && rul.items[ctx2[1]].battleType != 2) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 3) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_212(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(div1, t);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        if (!current || dirty & 1)
          div0.innerHTML = ctx2[0];
        ;
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        if (if_block)
          if_block.d();
      }
    };
  }
  function create_if_block_212(ctx) {
    let div;
    let canvasimage;
    let current;
    canvasimage = new CanvasImage_default({
      props: { item: rul.items[ctx[1]], zoom: 2 }
    });
    return {
      c() {
        div = element("div");
        create_component(canvasimage.$$.fragment);
        attr(div, "class", "article-text-image");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(canvasimage, div, null);
        current = true;
      },
      p(ctx2, dirty) {
        const canvasimage_changes = {};
        if (dirty & 2)
          canvasimage_changes.item = rul.items[ctx2[1]];
        canvasimage.$set(canvasimage_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(canvasimage.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(canvasimage.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(canvasimage);
      }
    };
  }
  function create_else_block16(ctx) {
    let maintable;
    let current;
    maintable = new MainTable_default({
      props: {
        entry: rul[ctx[5]][ctx[1]],
        sort: ctx[6].sort,
        title: ctx[6].title != null ? ctx[6].title : ctx[5]
      }
    });
    return {
      c() {
        create_component(maintable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(maintable, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const maintable_changes = {};
        if (dirty & 2)
          maintable_changes.entry = rul[ctx2[5]][ctx2[1]];
        if (dirty & 2)
          maintable_changes.sort = ctx2[6].sort;
        if (dirty & 2)
          maintable_changes.title = ctx2[6].title != null ? ctx2[6].title : ctx2[5];
        maintable.$set(maintable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(maintable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(maintable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(maintable, detaching);
      }
    };
  }
  function create_if_block23(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value = ctx[6];
    function switch_props(ctx2) {
      return {
        props: {
          entry: rul[ctx2[5]][ctx2[1]],
          text: ctx2[0]
        }
      };
    }
    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
    }
    return {
      c() {
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m(target, anchor) {
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }
        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const switch_instance_changes = {};
        if (dirty & 2)
          switch_instance_changes.entry = rul[ctx2[5]][ctx2[1]];
        if (dirty & 1)
          switch_instance_changes.text = ctx2[0];
        if (switch_value !== (switch_value = ctx2[6])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx2));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },
      i(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(switch_instance_anchor);
        if (switch_instance)
          destroy_component(switch_instance, detaching);
      }
    };
  }
  function create_each_block26(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block23, create_else_block16];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (typeof ctx2[6] == "function")
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_fragment36(ctx) {
    let t;
    let each_1_anchor;
    let current;
    let if_block = !ctx[2] && ctx[0] && create_if_block_119(ctx);
    let each_value = Object.entries(ctx[3]).filter(ctx[4]);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block26(get_each_context26(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        if (if_block)
          if_block.c();
        t = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, t, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (!ctx2[2] && ctx2[0]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 5) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_119(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(t.parentNode, t);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        if (dirty & 11) {
          each_value = Object.entries(ctx2[3]).filter(ctx2[4]);
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context26(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block26(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(if_block);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(t);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function instance36($$self, $$props, $$invalidate) {
    let { text: text2 = null } = $$props;
    let { id } = $$props;
    let armor;
    const renderers = {
      items: Item_default,
      battleTypes: {},
      armors: Armor_default,
      research: Research_default,
      units: Unit_default,
      stats: {},
      damageTypes: {},
      commendations: Commendation_default,
      baseServices: BaseService_default,
      facilities: Facility_default,
      manufacture: Manufacture_default,
      crafts: Craft_default,
      craftWeapons: CraftWeapon_default,
      weaponTypes: {},
      soldierBonuses: SoldierBonuses_default,
      soldierTransformation: {},
      soldiers: {
        sort: { first: ["statCaps"], last: ["armors"] }
      },
      ufos: Ufo_default,
      alienRaces: { title: "Race" },
      alienRanks: { title: "Ranks" },
      alienDeployments: {
        sort: { first: ["startingCondition", "loot"] }
      },
      missionScripts: {
        sort: {
          exclude: ["researchNeeded", "researchForbidden"]
        }
      },
      alienMissions: {},
      startingConditions: {},
      enviroEffects: {},
      terrains: { sort: { last: ["mapBlocks"] } },
      mapScripts: {},
      events: {},
      eventScripts: { title: "Event Script" },
      inventorySections: {}
    };
    const func5 = ([key]) => rul[key][id];
    $$self.$$set = ($$props2) => {
      if ("text" in $$props2)
        $$invalidate(0, text2 = $$props2.text);
      if ("id" in $$props2)
        $$invalidate(1, id = $$props2.id);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 2) {
        $: {
          $$invalidate(2, armor = id in rul.armors ? rul.armors[id] : id in rul.units && rul.units[id].armor ? rul.armors[rul.units[id].armor] : null);
        }
      }
    };
    return [text2, id, armor, renderers, func5];
  }
  var ArticleBody = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance36, create_fragment36, safe_not_equal, { text: 0, id: 1 });
    }
  };
  var ArticleBody_default = ArticleBody;

  // src/Article.svelte
  function get_each_context27(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[9] = list[i];
    return child_ctx;
  }
  function create_if_block_153(ctx) {
    let linkspage;
    let current;
    linkspage = new LinksPage_default({
      props: {
        links: rul.sections[ctx[0].id].articles.map(func_4)
      }
    });
    return {
      c() {
        create_component(linkspage.$$.fragment);
      },
      m(target, anchor) {
        mount_component(linkspage, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const linkspage_changes = {};
        if (dirty & 1)
          linkspage_changes.links = rul.sections[ctx2[0].id].articles.map(func_4);
        linkspage.$set(linkspage_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(linkspage.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linkspage.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(linkspage, detaching);
      }
    };
  }
  function create_if_block_144(ctx) {
    let conditions;
    let current;
    conditions = new Conditions_default({
      props: {
        conditions: rul.startingConditions[ctx[0].id]
      }
    });
    return {
      c() {
        create_component(conditions.$$.fragment);
      },
      m(target, anchor) {
        mount_component(conditions, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const conditions_changes = {};
        if (dirty & 1)
          conditions_changes.conditions = rul.startingConditions[ctx2[0].id];
        conditions.$set(conditions_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(conditions.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(conditions.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(conditions, detaching);
      }
    };
  }
  function create_if_block_134(ctx) {
    let sectiontable;
    let current;
    sectiontable = new SectionTable_default({
      props: {
        aId: ctx[3],
        entries: Object.values(rul.armors),
        fields: ["size", "frontArmor", "sideArmor", "rearArmor", "underArmor"],
        extraFields: [
          ...damageTypes,
          ...statsList,
          "psiVision",
          "visibilityAtDark",
          "visibilityAtDay",
          "camouflageAtDark",
          "camouflageAtDay",
          "heatVision",
          "fearImmune",
          "ARMOR_ENERGY_SHIELD_CAPACITY",
          "ARMOR_ENERGY_SHIELD_PER_TURN",
          "ARMOR_ENERGY_SHIELD_FLASH_COLOR",
          "ARMOR_ENERGY_SHIELD_TYPE"
        ],
        filters: {
          armorUsers: ["any", "allies", "enemies", ...Object.keys(rul.soldiers)],
          size: ["any", "1", "2"]
        }
      }
    });
    return {
      c() {
        create_component(sectiontable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(sectiontable, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const sectiontable_changes = {};
        if (dirty & 8)
          sectiontable_changes.aId = ctx2[3];
        sectiontable.$set(sectiontable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(sectiontable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sectiontable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(sectiontable, detaching);
      }
    };
  }
  function create_if_block_124(ctx) {
    let sectiontable;
    let current;
    sectiontable = new SectionTable_default({
      props: {
        aId: ctx[3],
        entries: Object.values(rul.manufacture),
        fields: ["cost", "profit", "profitPerHour", "sizeChange", "time"],
        extraFields: [
          "requiredItems",
          "producedItems",
          "requires",
          "requiresBaseFunc",
          "space"
        ],
        filters: {
          category: ["any", ...Object.keys(rul.manufactureCategories)]
        }
      }
    });
    return {
      c() {
        create_component(sectiontable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(sectiontable, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const sectiontable_changes = {};
        if (dirty & 8)
          sectiontable_changes.aId = ctx2[3];
        sectiontable.$set(sectiontable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(sectiontable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sectiontable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(sectiontable, detaching);
      }
    };
  }
  function create_if_block_1110(ctx) {
    let sectiontable;
    let current;
    sectiontable = new SectionTable_default({
      props: {
        aId: ctx[3],
        entries: Object.values(rul.items),
        fields: ["costSell", "costBuy", "size", "weight"],
        extraFields: [
          "invWidth",
          "invHeight",
          "clipSize",
          "internalBattleType",
          "damageTypes",
          "power"
        ],
        filters: {
          internalBattleType: ["any", ...internalBattleTypes],
          damageTypes: ["any", ...damageTypes]
        }
      }
    });
    return {
      c() {
        create_component(sectiontable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(sectiontable, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const sectiontable_changes = {};
        if (dirty & 8)
          sectiontable_changes.aId = ctx2[3];
        sectiontable.$set(sectiontable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(sectiontable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sectiontable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(sectiontable, detaching);
      }
    };
  }
  function create_if_block_103(ctx) {
    let sectiontable;
    let current;
    sectiontable = new SectionTable_default({
      props: {
        aId: ctx[3],
        entries: rul.attacks,
        fields: ["name", "accuracy", "damage", "damageType", "shots", "range"],
        extraFields: [
          "ToArmorPre",
          "ToStun",
          "RandomType",
          "ToHealth",
          "ToTile",
          "ResistType",
          "ToWound",
          "SmokeThreshold",
          ...statsList,
          ,
          ...statsList.map(func_3)
        ],
        filters: {
          internalBattleType: ["any", ...internalBattleTypes],
          damageTypes: ["any", ...damageTypes]
        }
      }
    });
    return {
      c() {
        create_component(sectiontable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(sectiontable, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const sectiontable_changes = {};
        if (dirty & 8)
          sectiontable_changes.aId = ctx2[3];
        sectiontable.$set(sectiontable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(sectiontable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sectiontable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(sectiontable, detaching);
      }
    };
  }
  function create_if_block_93(ctx) {
    let sectiontable;
    let current;
    sectiontable = new SectionTable_default({
      props: {
        aId: ctx[3],
        entries: Object.values(rul.soldiers),
        fields: [...statsList, "manufacture", "events"]
      }
    });
    return {
      c() {
        create_component(sectiontable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(sectiontable, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const sectiontable_changes = {};
        if (dirty & 8)
          sectiontable_changes.aId = ctx2[3];
        sectiontable.$set(sectiontable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(sectiontable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sectiontable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(sectiontable, detaching);
      }
    };
  }
  function create_if_block_85(ctx) {
    let sectiontable;
    let current;
    sectiontable = new SectionTable_default({
      props: {
        aId: ctx[3],
        entries: Object.values(rul.craftWeapons),
        fields: ["damage", "accuracy", "range", "ammoMax"],
        filters: {
          weaponType: ["any", ...Object.keys(rul.weaponTypes)]
        }
      }
    });
    return {
      c() {
        create_component(sectiontable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(sectiontable, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const sectiontable_changes = {};
        if (dirty & 8)
          sectiontable_changes.aId = ctx2[3];
        sectiontable.$set(sectiontable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(sectiontable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sectiontable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(sectiontable, detaching);
      }
    };
  }
  function create_if_block_76(ctx) {
    let sectiontable;
    let current;
    sectiontable = new SectionTable_default({
      props: {
        aId: ctx[3],
        entries: Object.values(rul.crafts),
        fields: [
          "speedMax",
          "soldiers",
          "vehicles",
          "weapons",
          "damageMax",
          "repairRate",
          "costRent"
        ]
      }
    });
    return {
      c() {
        create_component(sectiontable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(sectiontable, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const sectiontable_changes = {};
        if (dirty & 8)
          sectiontable_changes.aId = ctx2[3];
        sectiontable.$set(sectiontable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(sectiontable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sectiontable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(sectiontable, detaching);
      }
    };
  }
  function create_if_block_66(ctx) {
    let sectiontable;
    let current;
    sectiontable = new SectionTable_default({
      props: {
        aId: ctx[3],
        entries: Object.values(rul.commendations),
        fields: [...statsList, "visibilityAtDark"],
        extraFields: [
          ...battleStats.map(func_2),
          "description",
          "visibilityAtDay",
          "camouflageAtDark",
          "camouflageAtDay",
          "frontArmor",
          "sideArmor",
          "rearArmor",
          "underArmor"
        ]
      }
    });
    return {
      c() {
        create_component(sectiontable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(sectiontable, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const sectiontable_changes = {};
        if (dirty & 8)
          sectiontable_changes.aId = ctx2[3];
        sectiontable.$set(sectiontable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(sectiontable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sectiontable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(sectiontable, detaching);
      }
    };
  }
  function create_if_block_56(ctx) {
    let sectiontable;
    let current;
    sectiontable = new SectionTable_default({
      props: {
        aId: ctx[3],
        entries: Object.values(rul.facilities),
        fields: [
          "size",
          "monthlyCost",
          "storage",
          "personnel",
          "workshops",
          "kennel",
          "prison"
        ],
        extraFields: [
          "buildCost",
          "buildTime",
          "manaRecoveryPerDay",
          "sickBayAbsoluteBonus",
          "sickBayRelativeBonus",
          "defense",
          "hitRatio"
        ]
      }
    });
    return {
      c() {
        create_component(sectiontable.$$.fragment);
      },
      m(target, anchor) {
        mount_component(sectiontable, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const sectiontable_changes = {};
        if (dirty & 8)
          sectiontable_changes.aId = ctx2[3];
        sectiontable.$set(sectiontable_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(sectiontable.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sectiontable.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(sectiontable, detaching);
      }
    };
  }
  function create_if_block_47(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value = BaseServices_default;
    function switch_props(ctx2) {
      return {};
    }
    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
    }
    return {
      c() {
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m(target, anchor) {
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }
        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (switch_value !== (switch_value = BaseServices_default)) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx2));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
        }
      },
      i(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(switch_instance_anchor);
        if (switch_instance)
          destroy_component(switch_instance, detaching);
      }
    };
  }
  function create_if_block_311(ctx) {
    let linkspage;
    let current;
    linkspage = new LinksPage_default({
      props: {
        links: rul.categories[ctx[0].id]
      }
    });
    return {
      c() {
        create_component(linkspage.$$.fragment);
      },
      m(target, anchor) {
        mount_component(linkspage, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const linkspage_changes = {};
        if (dirty & 1)
          linkspage_changes.links = rul.categories[ctx2[0].id];
        linkspage.$set(linkspage_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(linkspage.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linkspage.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(linkspage, detaching);
      }
    };
  }
  function create_if_block_213(ctx) {
    let linkspage;
    let current;
    linkspage = new LinksPage_default({
      props: {
        links: rul.manufactureCategories[ctx[0].id]
      }
    });
    return {
      c() {
        create_component(linkspage.$$.fragment);
      },
      m(target, anchor) {
        mount_component(linkspage, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const linkspage_changes = {};
        if (dirty & 1)
          linkspage_changes.links = rul.manufactureCategories[ctx2[0].id];
        linkspage.$set(linkspage_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(linkspage.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linkspage.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(linkspage, detaching);
      }
    };
  }
  function create_if_block_120(ctx) {
    let tr2;
    let t;
    let each_1_anchor;
    let current;
    tr2 = new Tr_default({ props: { s: "Research required:" } });
    let each_value = ctx[0].requires || [];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block27(get_each_context27(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        create_component(tr2.$$.fragment);
        t = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        mount_component(tr2, target, anchor);
        insert(target, t, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1) {
          each_value = ctx2[0].requires || [];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context27(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block27(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr2.$$.fragment, local);
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(tr2.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_component(tr2, detaching);
        if (detaching)
          detach(t);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_each_block27(ctx) {
    let value;
    let current;
    value = new Value_default({ props: { val: ctx[9] } });
    return {
      c() {
        create_component(value.$$.fragment);
      },
      m(target, anchor) {
        mount_component(value, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[9];
        value.$set(value_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(value.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(value.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(value, detaching);
      }
    };
  }
  function create_if_block24(ctx) {
    let canvasimage;
    let current;
    canvasimage = new CanvasImage_default({
      props: { src: ctx[0].image_id }
    });
    return {
      c() {
        create_component(canvasimage.$$.fragment);
      },
      m(target, anchor) {
        mount_component(canvasimage, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const canvasimage_changes = {};
        if (dirty & 1)
          canvasimage_changes.src = ctx2[0].image_id;
        canvasimage.$set(canvasimage_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(canvasimage.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(canvasimage.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(canvasimage, detaching);
      }
    };
  }
  function create_fragment37(ctx) {
    let title_value;
    let t0;
    let h1;
    let nobr;
    let tr2;
    let t1;
    let span;
    let t2;
    let button0;
    let t4;
    let button1;
    let t6;
    let div0;
    let value;
    let t7;
    let t8;
    let current_block_type_index;
    let if_block0;
    let t9;
    let t10;
    let t11;
    let div3;
    let div2;
    let switch_instance;
    let t12;
    let t13;
    let articlebody;
    let t14;
    let t15;
    let div1;
    let current;
    let mounted;
    let dispose;
    document.title = title_value = rul.tr(ctx[0].id || "XPedia", { icon: "simple" });
    tr2 = new Tr_default({ props: { s: ctx[0].id } });
    value = new Value_default({
      props: {
        val: ctx[0].sections.map(func4).filter(ctx[7])
      }
    });
    const if_block_creators = [
      create_if_block_47,
      create_if_block_56,
      create_if_block_66,
      create_if_block_76,
      create_if_block_85,
      create_if_block_93,
      create_if_block_103,
      create_if_block_1110,
      create_if_block_124,
      create_if_block_134,
      create_if_block_144,
      create_if_block_153
    ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[0].id == "SERVICES")
        return 0;
      if (ctx2[0].id == "FACILITIES")
        return 1;
      if (ctx2[0].id == "COMMENDATIONS")
        return 2;
      if (ctx2[0].id == "CRAFTS")
        return 3;
      if (ctx2[0].id == "CRAFT_WEAPONS")
        return 4;
      if (ctx2[0].id == "SOLDIERS")
        return 5;
      if (ctx2[0].id == "ATTACKS")
        return 6;
      if (ctx2[0].id == "ITEMS")
        return 7;
      if (ctx2[0].id == "MANUFACTURE")
        return 8;
      if (ctx2[0].id == "ARMORS")
        return 9;
      if (ctx2[0].id == "CONDITIONS")
        return 10;
      if (ctx2[0].section == ctx2[0].id)
        return 11;
      return -1;
    }
    if (~(current_block_type_index = select_block_type(ctx, -1))) {
      if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    }
    let if_block1 = ctx[0].section == "CATEGORIES" && ctx[0].id != "CATEGORIES" && create_if_block_311(ctx);
    let if_block2 = ctx[0].section == "MANUFACTURE_CATEGORIES" && ctx[0].id != "MANUFACTURE_CATEGORIES" && create_if_block_213(ctx);
    var switch_value = ctx[2];
    function switch_props(ctx2) {
      return { props: { query: ctx2[1] } };
    }
    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
    }
    let if_block3 = ctx[0].requires && ctx[0].requires != ctx[0].id && create_if_block_120(ctx);
    articlebody = new ArticleBody_default({
      props: {
        id: ctx[0].id,
        text: ctx[0].text
      }
    });
    let if_block4 = !(ctx[0].id in rul.units) && create_if_block24(ctx);
    return {
      c() {
        t0 = space();
        h1 = element("h1");
        nobr = element("nobr");
        create_component(tr2.$$.fragment);
        t1 = space();
        span = element("span");
        t2 = space();
        button0 = element("button");
        button0.textContent = "\u21E6";
        t4 = space();
        button1 = element("button");
        button1.textContent = "\u21E8";
        t6 = space();
        div0 = element("div");
        create_component(value.$$.fragment);
        t7 = text("\xA0");
        t8 = space();
        if (if_block0)
          if_block0.c();
        t9 = space();
        if (if_block1)
          if_block1.c();
        t10 = space();
        if (if_block2)
          if_block2.c();
        t11 = space();
        div3 = element("div");
        div2 = element("div");
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        t12 = space();
        if (if_block3)
          if_block3.c();
        t13 = space();
        create_component(articlebody.$$.fragment);
        t14 = space();
        if (if_block4)
          if_block4.c();
        t15 = space();
        div1 = element("div");
        div1.textContent = "\xA0";
        set_style(span, "flex", "1");
        attr(button0, "class", "page-turn");
        attr(button1, "class", "page-turn");
        attr(div0, "class", "section-list");
        set_style(div1, "height", "200px");
        attr(div2, "class", "main-flex");
        set_style(div3, "max-width", "100%");
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, h1, anchor);
        append(h1, nobr);
        mount_component(tr2, nobr, null);
        append(h1, t1);
        append(h1, span);
        append(h1, t2);
        append(h1, button0);
        append(h1, t4);
        append(h1, button1);
        insert(target, t6, anchor);
        insert(target, div0, anchor);
        mount_component(value, div0, null);
        append(div0, t7);
        insert(target, t8, anchor);
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].m(target, anchor);
        }
        insert(target, t9, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t10, anchor);
        if (if_block2)
          if_block2.m(target, anchor);
        insert(target, t11, anchor);
        insert(target, div3, anchor);
        append(div3, div2);
        if (switch_instance) {
          mount_component(switch_instance, div2, null);
        }
        append(div2, t12);
        if (if_block3)
          if_block3.m(div2, null);
        append(div2, t13);
        mount_component(articlebody, div2, null);
        append(div2, t14);
        if (if_block4)
          if_block4.m(div2, null);
        append(div2, t15);
        append(div2, div1);
        current = true;
        if (!mounted) {
          dispose = [
            listen(button0, "click", ctx[5]),
            listen(button1, "click", ctx[6])
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if ((!current || dirty & 1) && title_value !== (title_value = rul.tr(ctx2[0].id || "XPedia", { icon: "simple" }))) {
          document.title = title_value;
        }
        const tr_changes = {};
        if (dirty & 1)
          tr_changes.s = ctx2[0].id;
        tr2.$set(tr_changes);
        const value_changes = {};
        if (dirty & 1)
          value_changes.val = ctx2[0].sections.map(func4).filter(ctx2[7]);
        value.$set(value_changes);
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if (~current_block_type_index) {
            if_blocks[current_block_type_index].p(ctx2, dirty);
          }
        } else {
          if (if_block0) {
            group_outros();
            transition_out(if_blocks[previous_block_index], 1, 1, () => {
              if_blocks[previous_block_index] = null;
            });
            check_outros();
          }
          if (~current_block_type_index) {
            if_block0 = if_blocks[current_block_type_index];
            if (!if_block0) {
              if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
              if_block0.c();
            } else {
              if_block0.p(ctx2, dirty);
            }
            transition_in(if_block0, 1);
            if_block0.m(t9.parentNode, t9);
          } else {
            if_block0 = null;
          }
        }
        if (ctx2[0].section == "CATEGORIES" && ctx2[0].id != "CATEGORIES") {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_311(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(t10.parentNode, t10);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        if (ctx2[0].section == "MANUFACTURE_CATEGORIES" && ctx2[0].id != "MANUFACTURE_CATEGORIES") {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block_213(ctx2);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(t11.parentNode, t11);
          }
        } else if (if_block2) {
          group_outros();
          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });
          check_outros();
        }
        const switch_instance_changes = {};
        if (dirty & 2)
          switch_instance_changes.query = ctx2[1];
        if (switch_value !== (switch_value = ctx2[2])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx2));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, div2, t12);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
        if (ctx2[0].requires && ctx2[0].requires != ctx2[0].id) {
          if (if_block3) {
            if_block3.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block3, 1);
            }
          } else {
            if_block3 = create_if_block_120(ctx2);
            if_block3.c();
            transition_in(if_block3, 1);
            if_block3.m(div2, t13);
          }
        } else if (if_block3) {
          group_outros();
          transition_out(if_block3, 1, 1, () => {
            if_block3 = null;
          });
          check_outros();
        }
        const articlebody_changes = {};
        if (dirty & 1)
          articlebody_changes.id = ctx2[0].id;
        if (dirty & 1)
          articlebody_changes.text = ctx2[0].text;
        articlebody.$set(articlebody_changes);
        if (!(ctx2[0].id in rul.units)) {
          if (if_block4) {
            if_block4.p(ctx2, dirty);
            if (dirty & 1) {
              transition_in(if_block4, 1);
            }
          } else {
            if_block4 = create_if_block24(ctx2);
            if_block4.c();
            transition_in(if_block4, 1);
            if_block4.m(div2, t15);
          }
        } else if (if_block4) {
          group_outros();
          transition_out(if_block4, 1, 1, () => {
            if_block4 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr2.$$.fragment, local);
        transition_in(value.$$.fragment, local);
        transition_in(if_block0);
        transition_in(if_block1);
        transition_in(if_block2);
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        transition_in(if_block3);
        transition_in(articlebody.$$.fragment, local);
        transition_in(if_block4);
        current = true;
      },
      o(local) {
        transition_out(tr2.$$.fragment, local);
        transition_out(value.$$.fragment, local);
        transition_out(if_block0);
        transition_out(if_block1);
        transition_out(if_block2);
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        transition_out(if_block3);
        transition_out(articlebody.$$.fragment, local);
        transition_out(if_block4);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(h1);
        destroy_component(tr2);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(div0);
        destroy_component(value);
        if (detaching)
          detach(t8);
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].d(detaching);
        }
        if (detaching)
          detach(t9);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t10);
        if (if_block2)
          if_block2.d(detaching);
        if (detaching)
          detach(t11);
        if (detaching)
          detach(div3);
        if (switch_instance)
          destroy_component(switch_instance);
        if (if_block3)
          if_block3.d();
        destroy_component(articlebody);
        if (if_block4)
          if_block4.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  var func4 = (s) => s.id;
  var func_2 = (s) => "recovery." + s;
  var func_3 = (v) => "acc*" + v;
  var func_4 = (a) => a.id;
  function instance37($$self, $$props, $$invalidate) {
    const dispatch = createEventDispatcher();
    let { article = {} } = $$props;
    let { query } = $$props;
    let text2;
    let other = false;
    let aId;
    const click_handler = (e) => dispatch("prev");
    const click_handler_1 = (e) => dispatch("next");
    const func_13 = (id) => id != article.id;
    $$self.$$set = ($$props2) => {
      if ("article" in $$props2)
        $$invalidate(0, article = $$props2.article);
      if ("query" in $$props2)
        $$invalidate(1, query = $$props2.query);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $: {
          if (article == null)
            debugger;
          $$invalidate(2, other = article.section == "OTHER" ? { BaseServices: BaseServices_default }[article.id] : false);
          $$invalidate(3, aId = article.id);
        }
      }
    };
    return [article, query, other, aId, dispatch, click_handler, click_handler_1, func_13];
  }
  var Article2 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance37, create_fragment37, safe_not_equal, { article: 0, query: 1 });
    }
  };
  var Article_default = Article2;

  // src/CogAnimation.svelte
  function create_fragment38(ctx) {
    let svg;
    let g1;
    let g0;
    let animateTransform;
    let path;
    let g1_transform_value;
    return {
      c() {
        svg = svg_element("svg");
        g1 = svg_element("g");
        g0 = svg_element("g");
        animateTransform = svg_element("animateTransform");
        path = svg_element("path");
        attr(animateTransform, "attributeName", "transform");
        attr(animateTransform, "type", "rotate");
        attr(animateTransform, "values", "0;360");
        attr(animateTransform, "keyTimes", "0;1");
        attr(animateTransform, "dur", "3s");
        attr(animateTransform, "repeatCount", "indefinite");
        attr(path, "d", "M37.43995192304605 -6.5 L47.43995192304605 -6.5 L47.43995192304605 6.5 L37.43995192304605 6.5 A38 38 0 0 1 35.67394948182593 13.090810836924174 L35.67394948182593 13.090810836924174 L44.33420351967032 18.090810836924174 L37.83420351967032 29.34914108612188 L29.17394948182593 24.34914108612188 A38 38 0 0 1 24.34914108612188 29.17394948182593 L24.34914108612188 29.17394948182593 L29.34914108612188 37.83420351967032 L18.090810836924184 44.33420351967032 L13.090810836924183 35.67394948182593 A38 38 0 0 1 6.5 37.43995192304605 L6.5 37.43995192304605 L6.500000000000001 47.43995192304605 L-6.499999999999995 47.43995192304606 L-6.499999999999996 37.43995192304606 A38 38 0 0 1 -13.09081083692417 35.67394948182593 L-13.09081083692417 35.67394948182593 L-18.09081083692417 44.33420351967032 L-29.34914108612187 37.834203519670325 L-24.349141086121872 29.173949481825936 A38 38 0 0 1 -29.17394948182592 24.34914108612189 L-29.17394948182592 24.34914108612189 L-37.83420351967031 29.349141086121893 L-44.33420351967031 18.0908108369242 L-35.67394948182592 13.090810836924193 A38 38 0 0 1 -37.43995192304605 6.5000000000000036 L-37.43995192304605 6.5000000000000036 L-47.43995192304605 6.500000000000004 L-47.43995192304606 -6.499999999999993 L-37.43995192304606 -6.499999999999994 A38 38 0 0 1 -35.67394948182593 -13.090810836924167 L-35.67394948182593 -13.090810836924167 L-44.33420351967032 -18.090810836924163 L-37.834203519670325 -29.34914108612187 L-29.173949481825936 -24.34914108612187 A38 38 0 0 1 -24.349141086121893 -29.17394948182592 L-24.349141086121893 -29.17394948182592 L-29.349141086121897 -37.834203519670304 L-18.0908108369242 -44.334203519670304 L-13.090810836924195 -35.67394948182592 A38 38 0 0 1 -6.500000000000005 -37.43995192304605 L-6.500000000000005 -37.43995192304605 L-6.500000000000007 -47.43995192304605 L6.49999999999999 -47.43995192304606 L6.499999999999992 -37.43995192304606 A38 38 0 0 1 13.090810836924149 -35.67394948182594 L13.090810836924149 -35.67394948182594 L18.090810836924142 -44.33420351967033 L29.349141086121847 -37.83420351967034 L24.349141086121854 -29.17394948182595 A38 38 0 0 1 29.17394948182592 -24.349141086121893 L29.17394948182592 -24.349141086121893 L37.834203519670304 -29.349141086121897 L44.334203519670304 -18.0908108369242 L35.67394948182592 -13.090810836924197 A38 38 0 0 1 37.43995192304605 -6.500000000000007 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20");
        attr(path, "fill", "#c5523f");
        attr(path, "id", "path8");
        set_style(path, "fill", "#64ccbc");
        set_style(path, "fill-opacity", "1");
        attr(g0, "id", "g6");
        set_style(g0, "fill", "#64ccbc");
        set_style(g0, "fill-opacity", "1");
        attr(g1, "transform", g1_transform_value = "scale(" + ctx[0] / 200 + ") translate(50 50)");
        attr(g1, "id", "g4");
        set_style(g1, "fill", "#64ccbc");
        set_style(g1, "fill-opacity", "1");
        set_style(svg, "width", ctx[0] + "px");
        set_style(svg, "height", ctx[0] + "px");
      },
      m(target, anchor) {
        insert(target, svg, anchor);
        append(svg, g1);
        append(g1, g0);
        append(g0, animateTransform);
        append(g0, path);
      },
      p(ctx2, [dirty]) {
        if (dirty & 1 && g1_transform_value !== (g1_transform_value = "scale(" + ctx2[0] / 200 + ") translate(50 50)")) {
          attr(g1, "transform", g1_transform_value);
        }
        if (dirty & 1) {
          set_style(svg, "width", ctx2[0] + "px");
        }
        if (dirty & 1) {
          set_style(svg, "height", ctx2[0] + "px");
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(svg);
      }
    };
  }
  function instance38($$self, $$props, $$invalidate) {
    let { size = 100 } = $$props;
    $$self.$$set = ($$props2) => {
      if ("size" in $$props2)
        $$invalidate(0, size = $$props2.size);
    };
    return [size];
  }
  var CogAnimation = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance38, create_fragment38, safe_not_equal, { size: 0 });
    }
  };
  var CogAnimation_default = CogAnimation;

  // src/Download.svelte
  function create_fragment39(ctx) {
    let button;
    let tr2;
    let current;
    let mounted;
    let dispose;
    tr2 = new Tr_default({ props: { s: ctx[0] } });
    return {
      c() {
        button = element("button");
        create_component(tr2.$$.fragment);
        attr(button, "class", "download");
      },
      m(target, anchor) {
        insert(target, button, anchor);
        mount_component(tr2, button, null);
        current = true;
        if (!mounted) {
          dispose = listen(button, "click", ctx[2]);
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        const tr_changes = {};
        if (dirty & 1)
          tr_changes.s = ctx2[0];
        tr2.$set(tr_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(tr2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(button);
        destroy_component(tr2);
        mounted = false;
        dispose();
      }
    };
  }
  function instance39($$self, $$props, $$invalidate) {
    let { title = "Export" } = $$props;
    let { onlyCurrent = false } = $$props;
    const click_handler = () => exportPedia(onlyCurrent);
    $$self.$$set = ($$props2) => {
      if ("title" in $$props2)
        $$invalidate(0, title = $$props2.title);
      if ("onlyCurrent" in $$props2)
        $$invalidate(1, onlyCurrent = $$props2.onlyCurrent);
    };
    return [title, onlyCurrent, click_handler];
  }
  var Download = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance39, create_fragment39, safe_not_equal, { title: 0, onlyCurrent: 1 });
    }
  };
  var Download_default = Download;

  // src/swipe.ts
  function onSwipe(touchsurface, handleswipe) {
    let startX, startY, deltaX, thresholdX = 150, thresholdY = 100, allowedTime = 300, elapsedTime, startTime;
    touchsurface.addEventListener("touchstart", function(e) {
      let touchobj = e.changedTouches[0];
      deltaX = 0;
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = Date.now();
    }, false);
    touchsurface.addEventListener("touchend", function(e) {
      let touchobj = e.changedTouches[0];
      deltaX = touchobj.pageX - startX;
      elapsedTime = Date.now() - startTime;
      let wasTouch = elapsedTime <= allowedTime && Math.abs(deltaX) < thresholdX && Math.abs(touchobj.pageY - startY) <= thresholdY;
      if (wasTouch) {
        let element2 = e.target;
        while (element2 != null && wasTouch) {
          let tag = element2.tagName;
          if (tag == "A" || tag == "BUTTON" || tag == "INPUT" || tag == "NAV")
            wasTouch = false;
          element2 = element2.parentElement;
        }
      }
      let wasSwipe = elapsedTime <= allowedTime && Math.abs(deltaX) >= thresholdX && Math.abs(touchobj.pageY - startY) <= thresholdY;
      if (wasTouch) {
        handleswipe(touchobj.pageX > window.innerWidth / 2);
      }
    }, false);
  }

  // src/App.svelte
  var { document: document_1 } = globals;
  function get_each_context28(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[58] = list[i];
    return child_ctx;
  }
  function get_each_context_19(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[61] = list[i];
    child_ctx[63] = i;
    return child_ctx;
  }
  function get_each_context_26(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[61] = list[i];
    child_ctx[63] = i;
    return child_ctx;
  }
  function get_each_context_35(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[65] = list[i];
    return child_ctx;
  }
  function get_each_context_44(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[20] = list[i];
    return child_ctx;
  }
  function get_each_context_53(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[61] = list[i];
    child_ctx[63] = i;
    return child_ctx;
  }
  function get_each_context_62(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[61] = list[i];
    child_ctx[63] = i;
    return child_ctx;
  }
  function create_if_block_125(ctx) {
    let title_value;
    document_1.title = title_value = tr("XPedia");
    return { c: noop, m: noop, d: noop };
  }
  function create_else_block17(ctx) {
    let previous_key = [ctx[20], ctx[0]];
    let key_block_anchor;
    let current;
    let key_block = create_key_block(ctx);
    return {
      c() {
        key_block.c();
        key_block_anchor = empty();
      },
      m(target, anchor) {
        key_block.m(target, anchor);
        insert(target, key_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty[0] & 1048577 && safe_not_equal(previous_key, previous_key = [ctx2[20], ctx2[0]])) {
          group_outros();
          transition_out(key_block, 1, 1, noop);
          check_outros();
          key_block = create_key_block(ctx2);
          key_block.c();
          transition_in(key_block, 1);
          key_block.m(key_block_anchor.parentNode, key_block_anchor);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(key_block);
        current = true;
      },
      o(local) {
        transition_out(key_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(key_block_anchor);
        key_block.d(detaching);
      }
    };
  }
  function create_if_block25(ctx) {
    let div0;
    let t;
    let div1;
    let coganimation;
    let current;
    coganimation = new CogAnimation_default({ props: { size: 200 } });
    return {
      c() {
        div0 = element("div");
        t = space();
        div1 = element("div");
        create_component(coganimation.$$.fragment);
        set_style(div0, "opacity", "0.3");
        attr(div1, "class", "centered");
      },
      m(target, anchor) {
        insert(target, div0, anchor);
        div0.innerHTML = ctx[18];
        insert(target, t, anchor);
        insert(target, div1, anchor);
        mount_component(coganimation, div1, null);
        current = true;
      },
      p(ctx2, dirty) {
        if (!current || dirty[0] & 262144)
          div0.innerHTML = ctx2[18];
        ;
      },
      i(local) {
        if (current)
          return;
        transition_in(coganimation.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(coganimation.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div0);
        if (detaching)
          detach(t);
        if (detaching)
          detach(div1);
        destroy_component(coganimation);
      }
    };
  }
  function create_each_block_62(ctx) {
    let a;
    let tr_1;
    let a_href_value;
    let current;
    tr_1 = new Tr_default({ props: { s: ctx[61].id } });
    return {
      c() {
        a = element("a");
        create_component(tr_1.$$.fragment);
        attr(a, "href", a_href_value = "##" + ctx[61].id);
      },
      m(target, anchor) {
        insert(target, a, anchor);
        mount_component(tr_1, a, null);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(a);
        destroy_component(tr_1);
      }
    };
  }
  function create_each_block_53(ctx) {
    let a;
    let tr_1;
    let t_value = tableSections.includes(ctx[61].id) ? "\u2630" : "";
    let t;
    let a_href_value;
    let current;
    tr_1 = new Tr_default({ props: { s: ctx[61].id } });
    return {
      c() {
        a = element("a");
        create_component(tr_1.$$.fragment);
        t = text(t_value);
        attr(a, "href", a_href_value = "##" + ctx[61].id);
      },
      m(target, anchor) {
        insert(target, a, anchor);
        mount_component(tr_1, a, null);
        append(a, t);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(a);
        destroy_component(tr_1);
      }
    };
  }
  function create_if_block_1111(ctx) {
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        button.textContent = "\u2B6F";
        attr(button, "class", "navbar-button");
      },
      m(target, anchor) {
        insert(target, button, anchor);
        if (!mounted) {
          dispose = listen(button, "click", ctx[36]);
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(button);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_104(ctx) {
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        button.innerHTML = `<span style="font-size:150%">A</span> 
          <span style="font-size:75%">A</span>`;
        attr(button, "class", "navbar-button");
      },
      m(target, anchor) {
        insert(target, button, anchor);
        if (!mounted) {
          dispose = listen(button, "click", ctx[37]);
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(button);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_94(ctx) {
    let div1;
    let button;
    let big;
    let tr_1;
    let t;
    let div0;
    let div0_style_value;
    let current;
    let mounted;
    let dispose;
    tr_1 = new Tr_default({ props: { s: rul.langName } });
    let each_value_4 = rul.langNames;
    let each_blocks = [];
    for (let i = 0; i < each_value_4.length; i += 1) {
      each_blocks[i] = create_each_block_44(get_each_context_44(ctx, each_value_4, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        div1 = element("div");
        button = element("button");
        big = element("big");
        create_component(tr_1.$$.fragment);
        t = space();
        div0 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(button, "class", "navbar-button");
        attr(div0, "class", "navbar-dropdown");
        attr(div0, "style", div0_style_value = ctx[11] ? "visibility:visible" : "visibility:hidden");
        attr(div1, "class", "navbar-dropdown-container select-language");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, button);
        append(button, big);
        mount_component(tr_1, big, null);
        append(div1, t);
        append(div1, div0);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div0, null);
        }
        current = true;
        if (!mounted) {
          dispose = [
            listen(button, "mousedown", ctx[38]),
            listen(div1, "mouseover", ctx[40]),
            listen(div1, "mouseout", ctx[41])
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & 8388608) {
          each_value_4 = rul.langNames;
          let i;
          for (i = 0; i < each_value_4.length; i += 1) {
            const child_ctx = get_each_context_44(ctx2, each_value_4, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_44(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div0, null);
            }
          }
          group_outros();
          for (i = each_value_4.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (!current || dirty[0] & 2048 && div0_style_value !== (div0_style_value = ctx2[11] ? "visibility:visible" : "visibility:hidden")) {
          attr(div0, "style", div0_style_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        for (let i = 0; i < each_value_4.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        destroy_component(tr_1);
        destroy_each(each_blocks, detaching);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_each_block_44(ctx) {
    let div;
    let nobr;
    let tr_1;
    let t;
    let current;
    let mounted;
    let dispose;
    tr_1 = new Tr_default({ props: { s: ctx[20] } });
    function click_handler_3(...args) {
      return ctx[39](ctx[20], ...args);
    }
    return {
      c() {
        div = element("div");
        nobr = element("nobr");
        create_component(tr_1.$$.fragment);
        t = space();
        attr(div, "class", "clickable");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, nobr);
        mount_component(tr_1, nobr, null);
        append(div, t);
        current = true;
        if (!mounted) {
          dispose = listen(div, "click", click_handler_3);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
      },
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(tr_1);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_77(ctx) {
    let nav;
    let button;
    let tr_1;
    let button_style_value;
    let t0;
    let div;
    let t1;
    let br;
    let current;
    let mounted;
    let dispose;
    tr_1 = new Tr_default({ props: { s: "A-Z" } });
    let each_value_3 = ctx[16](ctx[5]?.articles) || [];
    let each_blocks = [];
    for (let i = 0; i < each_value_3.length; i += 1) {
      each_blocks[i] = create_each_block_35(get_each_context_35(ctx, each_value_3, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        nav = element("nav");
        button = element("button");
        create_component(tr_1.$$.fragment);
        t0 = space();
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t1 = space();
        br = element("br");
        attr(button, "class", "side-sort-button");
        attr(button, "style", button_style_value = ctx[2] ? "" : "text-decoration:line-through");
        attr(div, "class", "menu-list");
        attr(nav, "class", "sidebar");
      },
      m(target, anchor) {
        insert(target, nav, anchor);
        append(nav, button);
        mount_component(tr_1, button, null);
        append(nav, t0);
        append(nav, div);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div, null);
        }
        append(nav, t1);
        append(nav, br);
        current = true;
        if (!mounted) {
          dispose = listen(button, "click", ctx[43]);
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (!current || dirty[0] & 4 && button_style_value !== (button_style_value = ctx2[2] ? "" : "text-decoration:line-through")) {
          attr(button, "style", button_style_value);
        }
        if (dirty[0] & 65761) {
          each_value_3 = ctx2[16](ctx2[5]?.articles) || [];
          let i;
          for (i = 0; i < each_value_3.length; i += 1) {
            const child_ctx = get_each_context_35(ctx2, each_value_3, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_35(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div, null);
            }
          }
          group_outros();
          for (i = each_value_3.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        for (let i = 0; i < each_value_3.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(nav);
        destroy_component(tr_1);
        destroy_each(each_blocks, detaching);
        mounted = false;
        dispose();
      }
    };
  }
  function create_else_block_32(ctx) {
    let a;
    let tr_1;
    let t;
    let a_href_value;
    let current;
    let mounted;
    let dispose;
    tr_1 = new Tr_default({ props: { s: ctx[65].id } });
    return {
      c() {
        a = element("a");
        create_component(tr_1.$$.fragment);
        t = space();
        attr(a, "class", "side-link");
        attr(a, "href", a_href_value = "##" + ctx[65].id);
      },
      m(target, anchor) {
        insert(target, a, anchor);
        mount_component(tr_1, a, null);
        append(a, t);
        current = true;
        if (!mounted) {
          dispose = listen(a, "click", ctx[45]);
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        const tr_1_changes = {};
        if (dirty[0] & 65568)
          tr_1_changes.s = ctx2[65].id;
        tr_1.$set(tr_1_changes);
        if (!current || dirty[0] & 65568 && a_href_value !== (a_href_value = "##" + ctx2[65].id)) {
          attr(a, "href", a_href_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(a);
        destroy_component(tr_1);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_86(ctx) {
    let a;
    let tr_1;
    let t;
    let a_href_value;
    let current;
    tr_1 = new Tr_default({ props: { s: ctx[65].id } });
    return {
      c() {
        a = element("a");
        create_component(tr_1.$$.fragment);
        t = space();
        attr(a, "href", a_href_value = "##" + ctx[65].id);
        attr(a, "class", "active-article-option side-link");
      },
      m(target, anchor) {
        insert(target, a, anchor);
        mount_component(tr_1, a, null);
        append(a, t);
        ctx[44](a);
        current = true;
      },
      p(ctx2, dirty) {
        const tr_1_changes = {};
        if (dirty[0] & 65568)
          tr_1_changes.s = ctx2[65].id;
        tr_1.$set(tr_1_changes);
        if (!current || dirty[0] & 65568 && a_href_value !== (a_href_value = "##" + ctx2[65].id)) {
          attr(a, "href", a_href_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(a);
        destroy_component(tr_1);
        ctx[44](null);
      }
    };
  }
  function create_each_block_35(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block_86, create_else_block_32];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (ctx2[0] && ctx2[0].id == ctx2[65].id)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type_1(ctx, [-1, -1, -1]);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_else_block_23(ctx) {
    let h20;
    let tr0;
    let t0;
    let p0;
    let t1;
    let h21;
    let tr1;
    let t2;
    let p1;
    let t3;
    let h22;
    let tr2;
    let t4;
    let ul;
    let t5;
    let h23;
    let tr3;
    let t6;
    let t7;
    let tr4;
    let current;
    tr0 = new Tr_default({ props: { s: "Pedia sections" } });
    let each_value_2 = rul.sectionsOrder;
    let each_blocks_2 = [];
    for (let i = 0; i < each_value_2.length; i += 1) {
      each_blocks_2[i] = create_each_block_26(get_each_context_26(ctx, each_value_2, i));
    }
    tr1 = new Tr_default({ props: { s: "Extra sections" } });
    let each_value_1 = rul.typeSectionsOrder;
    let each_blocks_1 = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks_1[i] = create_each_block_19(get_each_context_19(ctx, each_value_1, i));
    }
    tr2 = new Tr_default({ props: { s: "Mods" } });
    let each_value = rul.mods;
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block28(get_each_context28(ctx, each_value, i));
    }
    tr3 = new Tr_default({ props: { s: "About XPedia" } });
    let if_block = !packedData && create_if_block_67(ctx);
    tr4 = new Tr_default({ props: { s: "aboutxpedia" } });
    return {
      c() {
        h20 = element("h2");
        create_component(tr0.$$.fragment);
        t0 = space();
        p0 = element("p");
        for (let i = 0; i < each_blocks_2.length; i += 1) {
          each_blocks_2[i].c();
        }
        t1 = space();
        h21 = element("h2");
        create_component(tr1.$$.fragment);
        t2 = space();
        p1 = element("p");
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].c();
        }
        t3 = space();
        h22 = element("h2");
        create_component(tr2.$$.fragment);
        t4 = space();
        ul = element("ul");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t5 = space();
        h23 = element("h2");
        create_component(tr3.$$.fragment);
        t6 = space();
        if (if_block)
          if_block.c();
        t7 = space();
        create_component(tr4.$$.fragment);
      },
      m(target, anchor) {
        insert(target, h20, anchor);
        mount_component(tr0, h20, null);
        insert(target, t0, anchor);
        insert(target, p0, anchor);
        for (let i = 0; i < each_blocks_2.length; i += 1) {
          each_blocks_2[i].m(p0, null);
        }
        insert(target, t1, anchor);
        insert(target, h21, anchor);
        mount_component(tr1, h21, null);
        insert(target, t2, anchor);
        insert(target, p1, anchor);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].m(p1, null);
        }
        insert(target, t3, anchor);
        insert(target, h22, anchor);
        mount_component(tr2, h22, null);
        insert(target, t4, anchor);
        insert(target, ul, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(ul, null);
        }
        insert(target, t5, anchor);
        insert(target, h23, anchor);
        mount_component(tr3, h23, null);
        insert(target, t6, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, t7, anchor);
        mount_component(tr4, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 0) {
          each_value_2 = rul.sectionsOrder;
          let i;
          for (i = 0; i < each_value_2.length; i += 1) {
            const child_ctx = get_each_context_26(ctx2, each_value_2, i);
            if (each_blocks_2[i]) {
              each_blocks_2[i].p(child_ctx, dirty);
            } else {
              each_blocks_2[i] = create_each_block_26(child_ctx);
              each_blocks_2[i].c();
              each_blocks_2[i].m(p0, null);
            }
          }
          for (; i < each_blocks_2.length; i += 1) {
            each_blocks_2[i].d(1);
          }
          each_blocks_2.length = each_value_2.length;
        }
        if (dirty & 0) {
          each_value_1 = rul.typeSectionsOrder;
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_19(ctx2, each_value_1, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
            } else {
              each_blocks_1[i] = create_each_block_19(child_ctx);
              each_blocks_1[i].c();
              each_blocks_1[i].m(p1, null);
            }
          }
          for (; i < each_blocks_1.length; i += 1) {
            each_blocks_1[i].d(1);
          }
          each_blocks_1.length = each_value_1.length;
        }
        if (dirty & 0) {
          each_value = rul.mods;
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context28(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block28(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(ul, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        if (!packedData)
          if_block.p(ctx2, dirty);
      },
      i(local) {
        if (current)
          return;
        transition_in(tr0.$$.fragment, local);
        transition_in(tr1.$$.fragment, local);
        transition_in(tr2.$$.fragment, local);
        transition_in(tr3.$$.fragment, local);
        transition_in(if_block);
        transition_in(tr4.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr0.$$.fragment, local);
        transition_out(tr1.$$.fragment, local);
        transition_out(tr2.$$.fragment, local);
        transition_out(tr3.$$.fragment, local);
        transition_out(if_block);
        transition_out(tr4.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(h20);
        destroy_component(tr0);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(p0);
        destroy_each(each_blocks_2, detaching);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(h21);
        destroy_component(tr1);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(p1);
        destroy_each(each_blocks_1, detaching);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(h22);
        destroy_component(tr2);
        if (detaching)
          detach(t4);
        if (detaching)
          detach(ul);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(t5);
        if (detaching)
          detach(h23);
        destroy_component(tr3);
        if (detaching)
          detach(t6);
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(t7);
        destroy_component(tr4, detaching);
      }
    };
  }
  function create_if_block_57(ctx) {
    let article_1;
    let current;
    article_1 = new Article_default({
      props: {
        article: ctx[0],
        query: ctx[4]
      }
    });
    article_1.$on("prev", ctx[49]);
    article_1.$on("next", ctx[50]);
    return {
      c() {
        create_component(article_1.$$.fragment);
      },
      m(target, anchor) {
        mount_component(article_1, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const article_1_changes = {};
        if (dirty[0] & 1)
          article_1_changes.article = ctx2[0];
        if (dirty[0] & 16)
          article_1_changes.query = ctx2[4];
        article_1.$set(article_1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(article_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(article_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(article_1, detaching);
      }
    };
  }
  function create_if_block_121(ctx) {
    let t0;
    let em;
    let t1;
    let t2;
    let br;
    let t3;
    let previous_key = ctx[3];
    let key_block_anchor;
    let current;
    let key_block = create_key_block_1(ctx);
    return {
      c() {
        t0 = text('Searching "\r\n        ');
        em = element("em");
        t1 = text(ctx[4]);
        t2 = text('\r\n        ":\r\n        ');
        br = element("br");
        t3 = space();
        key_block.c();
        key_block_anchor = empty();
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, em, anchor);
        append(em, t1);
        insert(target, t2, anchor);
        insert(target, br, anchor);
        insert(target, t3, anchor);
        key_block.m(target, anchor);
        insert(target, key_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (!current || dirty[0] & 16)
          set_data(t1, ctx2[4]);
        if (dirty[0] & 8 && safe_not_equal(previous_key, previous_key = ctx2[3])) {
          group_outros();
          transition_out(key_block, 1, 1, noop);
          check_outros();
          key_block = create_key_block_1(ctx2);
          key_block.c();
          transition_in(key_block, 1);
          key_block.m(key_block_anchor.parentNode, key_block_anchor);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(key_block);
        current = true;
      },
      o(local) {
        transition_out(key_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(em);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(br);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(key_block_anchor);
        key_block.d(detaching);
      }
    };
  }
  function create_each_block_26(ctx) {
    let html_tag;
    let raw_value = divider(ctx[63]) + "";
    let t0;
    let a;
    let t1_value = ctx[61].title + "";
    let t1;
    let a_href_value;
    return {
      c() {
        html_tag = new HtmlTag(false);
        t0 = space();
        a = element("a");
        t1 = text(t1_value);
        html_tag.a = t0;
        attr(a, "href", a_href_value = "##" + ctx[61].id);
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, t0, anchor);
        insert(target, a, anchor);
        append(a, t1);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          html_tag.d();
        if (detaching)
          detach(t0);
        if (detaching)
          detach(a);
      }
    };
  }
  function create_each_block_19(ctx) {
    let html_tag;
    let raw_value = divider(ctx[63]) + "";
    let t0;
    let a;
    let t1_value = ctx[61].title + "";
    let t1;
    let a_href_value;
    return {
      c() {
        html_tag = new HtmlTag(false);
        t0 = space();
        a = element("a");
        t1 = text(t1_value);
        html_tag.a = t0;
        attr(a, "href", a_href_value = "##" + ctx[61].id);
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, t0, anchor);
        insert(target, a, anchor);
        append(a, t1);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          html_tag.d();
        if (detaching)
          detach(t0);
        if (detaching)
          detach(a);
      }
    };
  }
  function create_each_block28(ctx) {
    let li;
    let t0_value = ctx[58].name + "";
    let t0;
    let t1;
    let t2_value = ctx[58].version + "";
    let t2;
    return {
      c() {
        li = element("li");
        t0 = text(t0_value);
        t1 = space();
        t2 = text(t2_value);
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, t0);
        append(li, t1);
        append(li, t2);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(li);
      }
    };
  }
  function create_if_block_67(ctx) {
    let h4;
    let tr0;
    let t0;
    let tr1;
    let br0;
    let t1;
    let download0;
    let t2;
    let download1;
    let t3;
    let br1;
    let current;
    tr0 = new Tr_default({ props: { s: "Export" } });
    tr1 = new Tr_default({ props: { s: "aboutexport" } });
    download0 = new Download_default({ props: { title: "Export all languages" } });
    download1 = new Download_default({
      props: {
        title: "Export current (" + rul.tr(rul.langName) + ") only",
        onlyCurrent: true
      }
    });
    return {
      c() {
        h4 = element("h4");
        create_component(tr0.$$.fragment);
        t0 = space();
        create_component(tr1.$$.fragment);
        br0 = element("br");
        t1 = space();
        create_component(download0.$$.fragment);
        t2 = space();
        create_component(download1.$$.fragment);
        t3 = space();
        br1 = element("br");
      },
      m(target, anchor) {
        insert(target, h4, anchor);
        mount_component(tr0, h4, null);
        insert(target, t0, anchor);
        mount_component(tr1, target, anchor);
        insert(target, br0, anchor);
        insert(target, t1, anchor);
        mount_component(download0, target, anchor);
        insert(target, t2, anchor);
        mount_component(download1, target, anchor);
        insert(target, t3, anchor);
        insert(target, br1, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(tr0.$$.fragment, local);
        transition_in(tr1.$$.fragment, local);
        transition_in(download0.$$.fragment, local);
        transition_in(download1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr0.$$.fragment, local);
        transition_out(tr1.$$.fragment, local);
        transition_out(download0.$$.fragment, local);
        transition_out(download1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(h4);
        destroy_component(tr0);
        if (detaching)
          detach(t0);
        destroy_component(tr1, detaching);
        if (detaching)
          detach(br0);
        if (detaching)
          detach(t1);
        destroy_component(download0, detaching);
        if (detaching)
          detach(t2);
        destroy_component(download1, detaching);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(br1);
      }
    };
  }
  function create_else_block_15(ctx) {
    let i;
    let tr_1;
    let current;
    tr_1 = new Tr_default({ props: { s: "Nothing found" } });
    return {
      c() {
        i = element("i");
        create_component(tr_1.$$.fragment);
      },
      m(target, anchor) {
        insert(target, i, anchor);
        mount_component(tr_1, i, null);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(i);
        destroy_component(tr_1);
      }
    };
  }
  function create_if_block_48(ctx) {
    let tr_1;
    let br;
    let t;
    let coganimation;
    let current;
    tr_1 = new Tr_default({
      props: { s: "Initializing search engine..." }
    });
    coganimation = new CogAnimation_default({ props: { size: 30 } });
    return {
      c() {
        create_component(tr_1.$$.fragment);
        br = element("br");
        t = space();
        create_component(coganimation.$$.fragment);
      },
      m(target, anchor) {
        mount_component(tr_1, target, anchor);
        insert(target, br, anchor);
        insert(target, t, anchor);
        mount_component(coganimation, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        transition_in(coganimation.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        transition_out(coganimation.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(tr_1, detaching);
        if (detaching)
          detach(br);
        if (detaching)
          detach(t);
        destroy_component(coganimation, detaching);
      }
    };
  }
  function create_if_block_312(ctx) {
    let i;
    return {
      c() {
        i = element("i");
        i.textContent = "Query too short";
      },
      m(target, anchor) {
        insert(target, i, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(i);
      }
    };
  }
  function create_if_block_214(ctx) {
    let linkspage0;
    let br;
    let t;
    let linkspage1;
    let current;
    linkspage0 = new LinksPage_default({
      props: {
        links: ctx[3].filter(ctx[47]).slice(0, 200)
      }
    });
    linkspage1 = new LinksPage_default({
      props: {
        links: ctx[3].filter(ctx[48]).slice(0, 200),
        title: " "
      }
    });
    return {
      c() {
        create_component(linkspage0.$$.fragment);
        br = element("br");
        t = space();
        create_component(linkspage1.$$.fragment);
      },
      m(target, anchor) {
        mount_component(linkspage0, target, anchor);
        insert(target, br, anchor);
        insert(target, t, anchor);
        mount_component(linkspage1, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const linkspage0_changes = {};
        if (dirty[0] & 24)
          linkspage0_changes.links = ctx2[3].filter(ctx2[47]).slice(0, 200);
        linkspage0.$set(linkspage0_changes);
        const linkspage1_changes = {};
        if (dirty[0] & 24)
          linkspage1_changes.links = ctx2[3].filter(ctx2[48]).slice(0, 200);
        linkspage1.$set(linkspage1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(linkspage0.$$.fragment, local);
        transition_in(linkspage1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(linkspage0.$$.fragment, local);
        transition_out(linkspage1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(linkspage0, detaching);
        if (detaching)
          detach(br);
        if (detaching)
          detach(t);
        destroy_component(linkspage1, detaching);
      }
    };
  }
  function create_key_block_1(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block_214, create_if_block_312, create_if_block_48, create_else_block_15];
    const if_blocks = [];
    function select_block_type_3(ctx2, dirty) {
      if (ctx2[3] && ctx2[3].length > 0)
        return 0;
      if (ctx2[4].length < 2)
        return 1;
      if (ctx2[8] || ctx2[14])
        return 2;
      return 3;
    }
    current_block_type_index = select_block_type_3(ctx, [-1, -1, -1]);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_3(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_key_block(ctx) {
    let nav;
    let div6;
    let div0;
    let img;
    let img_src_value;
    let t0;
    let nobr;
    let span0;
    let t3;
    let span1;
    let t5;
    let div5;
    let div4;
    let div2;
    let a0;
    let tr_1;
    let t6;
    let div1;
    let t7;
    let t8;
    let div3;
    let div5_style_value;
    let t9;
    let a1;
    let t10_value = (ctx[5] ? rul.tr(ctx[5].id) : "") + "";
    let t10;
    let a1_href_value;
    let t11;
    let div7;
    let t12;
    let div7_class_value;
    let t13;
    let div8;
    let t14;
    let t15;
    let t16;
    let t17;
    let div9;
    let input;
    let input_placeholder_value;
    let t18;
    let t19;
    let button;
    let span2;
    let button_style_value;
    let t21;
    let div10;
    let current_block_type_index;
    let if_block4;
    let div10_style_value;
    let t22;
    let div11;
    let current;
    let mounted;
    let dispose;
    tr_1 = new Tr_default({ props: { s: "HOME" } });
    let each_value_6 = rul.sectionsOrder;
    let each_blocks_1 = [];
    for (let i = 0; i < each_value_6.length; i += 1) {
      each_blocks_1[i] = create_each_block_62(get_each_context_62(ctx, each_value_6, i));
    }
    const out = (i) => transition_out(each_blocks_1[i], 1, 1, () => {
      each_blocks_1[i] = null;
    });
    let each_value_5 = rul.sortedTypeSections();
    let each_blocks = [];
    for (let i = 0; i < each_value_5.length; i += 1) {
      each_blocks[i] = create_each_block_53(get_each_context_53(ctx, each_value_5, i));
    }
    const out_1 = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    let if_block0 = !packedData && create_if_block_1111(ctx);
    let if_block1 = allowHugeFont && create_if_block_104(ctx);
    let if_block2 = rul.langNames?.length > 1 && create_if_block_94(ctx);
    let if_block3 = ctx[9] && create_if_block_77(ctx);
    const if_block_creators = [create_if_block_121, create_if_block_57, create_else_block_23];
    const if_blocks = [];
    function select_block_type_2(ctx2, dirty) {
      if (ctx2[4] && ctx2[13])
        return 0;
      if (ctx2[0])
        return 1;
      return 2;
    }
    current_block_type_index = select_block_type_2(ctx, [-1, -1, -1]);
    if_block4 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        nav = element("nav");
        div6 = element("div");
        div0 = element("div");
        img = element("img");
        t0 = space();
        nobr = element("nobr");
        span0 = element("span");
        span0.textContent = `${rul.tr("XPedia")}\xA0`;
        t3 = space();
        span1 = element("span");
        span1.textContent = "\u02C5";
        t5 = space();
        div5 = element("div");
        div4 = element("div");
        div2 = element("div");
        a0 = element("a");
        create_component(tr_1.$$.fragment);
        t6 = space();
        div1 = element("div");
        t7 = space();
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].c();
        }
        t8 = space();
        div3 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t9 = space();
        a1 = element("a");
        t10 = text(t10_value);
        t11 = space();
        div7 = element("div");
        t12 = text("\u{1F441}");
        t13 = space();
        div8 = element("div");
        t14 = space();
        if (if_block0)
          if_block0.c();
        t15 = space();
        if (if_block1)
          if_block1.c();
        t16 = space();
        if (if_block2)
          if_block2.c();
        t17 = space();
        div9 = element("div");
        input = element("input");
        t18 = space();
        if (if_block3)
          if_block3.c();
        t19 = space();
        button = element("button");
        span2 = element("span");
        span2.textContent = "\u2261";
        t21 = space();
        div10 = element("div");
        if_block4.c();
        t22 = space();
        div11 = element("div");
        div11.textContent = "Tooltip";
        if (!src_url_equal(img.src, img_src_value = favicon))
          attr(img, "src", img_src_value);
        attr(img, "alt", "XPedia");
        attr(img, "class", "xpedia-icon");
        attr(span0, "class", "on-wide");
        set_style(span1, "transform", "scale(1.5,0.75)");
        set_style(span1, "display", "inline-block");
        attr(div0, "class", "navbar-button dropdown-button");
        attr(a0, "href", "##MAIN");
        set_style(a0, "text-decoration", "underline");
        set_style(div1, "height", "0.5em");
        attr(div2, "class", "navbar-auto navbar-list");
        attr(div3, "class", "navbar-custom navbar-list");
        attr(div4, "class", "flex-horisontal");
        attr(div5, "class", "navbar-dropdown");
        attr(div5, "style", div5_style_value = ctx[10] ? "visibility:visible" : "visibility:hidden");
        attr(div6, "class", "navbar-dropdown-container");
        attr(a1, "class", "navbar-button navbar-current-article");
        attr(a1, "href", a1_href_value = "##" + (ctx[5] ? ctx[5].id : "MAIN"));
        attr(div7, "class", div7_class_value = "navbar-button " + (ctx[19] ? "reveal-lock" : ""));
        attr(div7, "id", "reveal");
        attr(div8, "class", "stretcher");
        attr(input, "class", "input");
        attr(input, "type", "text");
        attr(input, "id", "search-string");
        attr(input, "placeholder", input_placeholder_value = tr("Search..."));
        attr(div9, "class", "navbar-search");
        attr(nav, "class", "navbar flex-horisontal");
        set_style(span2, "font-size", "150%");
        attr(button, "class", "side-hide-button");
        attr(button, "style", button_style_value = ctx[9] ? "" : "left:1em;");
        attr(div10, "class", "main");
        attr(div10, "id", "main");
        attr(div10, "style", div10_style_value = ctx[9] ? "" : "padding-left:1rem;");
        attr(div11, "class", "tooltip fadein");
      },
      m(target, anchor) {
        insert(target, nav, anchor);
        append(nav, div6);
        append(div6, div0);
        append(div0, img);
        append(div0, t0);
        append(div0, nobr);
        append(nobr, span0);
        append(nobr, t3);
        append(nobr, span1);
        append(div6, t5);
        append(div6, div5);
        append(div5, div4);
        append(div4, div2);
        append(div2, a0);
        mount_component(tr_1, a0, null);
        append(div2, t6);
        append(div2, div1);
        append(div2, t7);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].m(div2, null);
        }
        append(div4, t8);
        append(div4, div3);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div3, null);
        }
        ctx[30](div6);
        append(nav, t9);
        append(nav, a1);
        append(a1, t10);
        append(nav, t11);
        append(nav, div7);
        append(div7, t12);
        append(nav, t13);
        append(nav, div8);
        append(nav, t14);
        if (if_block0)
          if_block0.m(nav, null);
        append(nav, t15);
        if (if_block1)
          if_block1.m(nav, null);
        append(nav, t16);
        if (if_block2)
          if_block2.m(nav, null);
        append(nav, t17);
        append(nav, div9);
        append(div9, input);
        set_input_value(input, ctx[4]);
        insert(target, t18, anchor);
        if (if_block3)
          if_block3.m(target, anchor);
        insert(target, t19, anchor);
        insert(target, button, anchor);
        append(button, span2);
        insert(target, t21, anchor);
        insert(target, div10, anchor);
        if_blocks[current_block_type_index].m(div10, null);
        insert(target, t22, anchor);
        insert(target, div11, anchor);
        ctx[51](div11);
        current = true;
        if (!mounted) {
          dispose = [
            listen(div0, "mousedown", ctx[29]),
            listen(div6, "mousemove", ctx[31]),
            listen(div6, "mouseout", ctx[32]),
            listen(div7, "mouseover", ctx[33]),
            listen(div7, "mouseout", ctx[34]),
            listen(div7, "click", ctx[35]),
            listen(input, "input", ctx[42]),
            listen(input, "keyup", ctx[26]),
            listen(button, "click", ctx[46])
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & 0) {
          each_value_6 = rul.sectionsOrder;
          let i;
          for (i = 0; i < each_value_6.length; i += 1) {
            const child_ctx = get_each_context_62(ctx2, each_value_6, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
              transition_in(each_blocks_1[i], 1);
            } else {
              each_blocks_1[i] = create_each_block_62(child_ctx);
              each_blocks_1[i].c();
              transition_in(each_blocks_1[i], 1);
              each_blocks_1[i].m(div2, null);
            }
          }
          group_outros();
          for (i = each_value_6.length; i < each_blocks_1.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (dirty & 0) {
          each_value_5 = rul.sortedTypeSections();
          let i;
          for (i = 0; i < each_value_5.length; i += 1) {
            const child_ctx = get_each_context_53(ctx2, each_value_5, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_53(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div3, null);
            }
          }
          group_outros();
          for (i = each_value_5.length; i < each_blocks.length; i += 1) {
            out_1(i);
          }
          check_outros();
        }
        if (!current || dirty[0] & 1024 && div5_style_value !== (div5_style_value = ctx2[10] ? "visibility:visible" : "visibility:hidden")) {
          attr(div5, "style", div5_style_value);
        }
        if ((!current || dirty[0] & 32) && t10_value !== (t10_value = (ctx2[5] ? rul.tr(ctx2[5].id) : "") + ""))
          set_data(t10, t10_value);
        if (!current || dirty[0] & 32 && a1_href_value !== (a1_href_value = "##" + (ctx2[5] ? ctx2[5].id : "MAIN"))) {
          attr(a1, "href", a1_href_value);
        }
        if (!current || dirty[0] & 524288 && div7_class_value !== (div7_class_value = "navbar-button " + (ctx2[19] ? "reveal-lock" : ""))) {
          attr(div7, "class", div7_class_value);
        }
        if (!packedData)
          if_block0.p(ctx2, dirty);
        if (allowHugeFont)
          if_block1.p(ctx2, dirty);
        if (rul.langNames?.length > 1)
          if_block2.p(ctx2, dirty);
        if (dirty[0] & 16 && input.value !== ctx2[4]) {
          set_input_value(input, ctx2[4]);
        }
        if (ctx2[9]) {
          if (if_block3) {
            if_block3.p(ctx2, dirty);
            if (dirty[0] & 512) {
              transition_in(if_block3, 1);
            }
          } else {
            if_block3 = create_if_block_77(ctx2);
            if_block3.c();
            transition_in(if_block3, 1);
            if_block3.m(t19.parentNode, t19);
          }
        } else if (if_block3) {
          group_outros();
          transition_out(if_block3, 1, 1, () => {
            if_block3 = null;
          });
          check_outros();
        }
        if (!current || dirty[0] & 512 && button_style_value !== (button_style_value = ctx2[9] ? "" : "left:1em;")) {
          attr(button, "style", button_style_value);
        }
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_2(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block4 = if_blocks[current_block_type_index];
          if (!if_block4) {
            if_block4 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block4.c();
          } else {
            if_block4.p(ctx2, dirty);
          }
          transition_in(if_block4, 1);
          if_block4.m(div10, null);
        }
        if (!current || dirty[0] & 512 && div10_style_value !== (div10_style_value = ctx2[9] ? "" : "padding-left:1rem;")) {
          attr(div10, "style", div10_style_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(tr_1.$$.fragment, local);
        for (let i = 0; i < each_value_6.length; i += 1) {
          transition_in(each_blocks_1[i]);
        }
        for (let i = 0; i < each_value_5.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(if_block2);
        transition_in(if_block3);
        transition_in(if_block4);
        current = true;
      },
      o(local) {
        transition_out(tr_1.$$.fragment, local);
        each_blocks_1 = each_blocks_1.filter(Boolean);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          transition_out(each_blocks_1[i]);
        }
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(if_block2);
        transition_out(if_block3);
        transition_out(if_block4);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(nav);
        destroy_component(tr_1);
        destroy_each(each_blocks_1, detaching);
        destroy_each(each_blocks, detaching);
        ctx[30](null);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
        if (detaching)
          detach(t18);
        if (if_block3)
          if_block3.d(detaching);
        if (detaching)
          detach(t19);
        if (detaching)
          detach(button);
        if (detaching)
          detach(t21);
        if (detaching)
          detach(div10);
        if_blocks[current_block_type_index].d();
        if (detaching)
          detach(t22);
        if (detaching)
          detach(div11);
        ctx[51](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_fragment40(ctx) {
    let meta0;
    let meta1;
    let link2;
    let t;
    let current_block_type_index;
    let if_block1;
    let if_block1_anchor;
    let current;
    let if_block0 = !ctx[0] && create_if_block_125(ctx);
    const if_block_creators = [create_if_block25, create_else_block17];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (!ctx2[17])
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, [-1, -1, -1]);
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if (if_block0)
          if_block0.c();
        meta0 = element("meta");
        meta1 = element("meta");
        link2 = element("link");
        t = space();
        if_block1.c();
        if_block1_anchor = empty();
        attr(meta0, "charset", "utf8");
        attr(meta1, "name", "keywords");
        attr(meta1, "content", "OpenXCom");
        attr(link2, "rel", "icon");
        attr(link2, "type", "image/png");
        attr(link2, "href", favicon);
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(document_1.head, null);
        append(document_1.head, meta0);
        append(document_1.head, meta1);
        append(document_1.head, link2);
        insert(target, t, anchor);
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (!ctx2[0]) {
          if (if_block0) {
          } else {
            if_block0 = create_if_block_125(ctx2);
            if_block0.c();
            if_block0.m(meta0.parentNode, meta0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block1 = if_blocks[current_block_type_index];
          if (!if_block1) {
            if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block1.c();
          } else {
            if_block1.p(ctx2, dirty);
          }
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block1);
        current = true;
      },
      o(local) {
        transition_out(if_block1);
        current = false;
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        detach(meta0);
        detach(meta1);
        detach(link2);
        if (detaching)
          detach(t);
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block1_anchor);
      }
    };
  }
  var allowHugeFont = true;
  function contains(text2, substr) {
    return text2.toLowerCase().indexOf(substr) != -1;
  }
  function goTo(id) {
    window.location.hash = "##" + id;
  }
  function instance40($$self, $$props, $$invalidate) {
    let sortedArticles;
    let $loaded;
    let $loadingFile;
    let $revealed;
    component_subscribe($$self, loaded, ($$value) => $$invalidate(17, $loaded = $$value));
    component_subscribe($$self, loadingFile, ($$value) => $$invalidate(18, $loadingFile = $$value));
    component_subscribe($$self, revealed, ($$value) => $$invalidate(19, $revealed = $$value));
    let article = null;
    let found = null;
    let query = "";
    let currentSection = null;
    let activeOption;
    let ignoreNextAutoscroll = false;
    let id = "";
    let searchDelayHandle = null;
    let seeSide = true;
    let hugeFont = false;
    let showDropdown = false;
    let showLanguagesDropdown = false;
    let tooltip;
    let searching = false;
    let saveLoaded = false;
    let sortArticles = false;
    let isTouch = "ontouchstart" in window;
    let lang;
    setContext("main", { revealed: () => revealed });
    loaded.subscribe((done) => {
      if (done) {
        loadState();
        checkHash();
      }
    });
    let _linksPageSorted;
    linksPageSorted.subscribe((v) => {
      _linksPageSorted = v;
      saveState();
    });
    let lrcs;
    leftRightClickSwipe.subscribe((v) => {
      lrcs = v;
    });
    function saveState() {
      if (!saveLoaded)
        return;
      localStorage.xpediaSettings = JSON.stringify({
        hugeFont,
        seeSide,
        lang,
        sortArticles,
        linksPageSorted: _linksPageSorted
      });
      console.log("ss", localStorage.xpediaSettings);
    }
    function loadState() {
      try {
        console.log("ls", localStorage.xpediaSettings);
        let data = JSON.parse(localStorage.xpediaSettings);
        if (data && typeof data == "object") {
          $$invalidate(1, hugeFont = data.hugeFont);
          $$invalidate(9, seeSide = data.seeSide);
          $$invalidate(2, sortArticles = data.sortArticles);
          linksPageSorted.set(data.linksPageSorted);
          selectLang(data.lang);
        }
      } catch (e) {
        console.error(e);
      }
      saveLoaded = true;
    }
    function selectLang(n) {
      if (rul.selectLang(n))
        $$invalidate(20, lang = n);
      saveState();
      checkHash();
    }
    let searchinInProgres;
    async function checkHash() {
      $$invalidate(10, showDropdown = $$invalidate(11, showLanguagesDropdown = false));
      let hash = decodeURI(document.location.hash);
      if (hash.substring(0, 2) != "##")
        return;
      id = hash.substring(2);
      if (id == "MAIN") {
        $$invalidate(4, query = "");
      }
      $$invalidate(13, searching = false);
      if (id) {
        let dd = id.indexOf("::");
        if (dd != -1) {
          $$invalidate(4, query = id.substring(dd + 2).toLowerCase());
          id = id.substring(0, dd);
        }
        if (id == "SEARCH") {
          $$invalidate(13, searching = true);
          if (query.length >= 2) {
            $$invalidate(14, searchinInProgres = true);
            $$invalidate(3, found = await rul.search[rul.langName].findArticles(query));
            $$invalidate(14, searchinInProgres = false);
          } else
            $$invalidate(3, found = 0);
          $$invalidate(0, article = null);
        } else {
          $$invalidate(3, found = null);
          if (!article || article.id != id)
            $$invalidate(0, article = rul.article(id));
        }
        console.log(id);
        console.log(article);
      }
      if (article) {
        if (article.sections) {
          if (!article.sections.includes(currentSection)) {
            $$invalidate(5, currentSection = article.sections[0]);
          }
        }
      }
      if (activeOption) {
        centerOnArticle();
      }
    }
    function centerOnArticle() {
      setTimeout(() => activeOption?.scrollIntoView({ block: "center" }), 50);
    }
    function nextArticle(delta) {
      if (lrcs) {
        lrcs(delta);
        return;
      }
      let nextArticle2 = rul.findNextArticle(article, delta, currentSection, sortArticles);
      if (nextArticle2) {
        goTo(nextArticle2.id);
      }
    }
    function searchKeyUp(e) {
      if (searchDelayHandle)
        clearTimeout(searchDelayHandle);
      $$invalidate(8, searchDelayHandle = setTimeout(() => {
        goTo("SEARCH::" + e.target.value);
        $$invalidate(8, searchDelayHandle = null);
      }, e.key == "Enter" ? 10 : 1e3));
    }
    window.onhashchange = checkHash;
    function dropdown(val = null) {
      if (val === null) {
        $$invalidate(10, showDropdown = !showDropdown);
      } else {
        if (!isTouch)
          $$invalidate(10, showDropdown = val);
      }
    }
    document.addEventListener("keydown", (event) => {
      const keyName = event.key;
      if (keyName == "ArrowRight")
        nextArticle(1);
      if (keyName == "ArrowLeft")
        nextArticle(-1);
    });
    onSwipe(document.body, (right) => {
      if (right)
        nextArticle(1);
      else
        nextArticle(-1);
    });
    window.addEventListener("mousemove", async (e) => {
      if (e.screenX < 10 && e.screenY < innerHeight / 3) {
        dropdown(true);
      } else {
        if (e.target && !isAncestorOf(navbarDropDown, e.target)) {
          dropdown(false);
        }
      }
      if (tooltip) {
        let el = e.target;
        while (el && el.attributes && !("tooltip" in el.attributes))
          el = el.parentNode;
        if (el && el.attributes && el.attributes.tooltip) {
          let idattr = el.attributes.tooltip;
          let rect = e.target.getBoundingClientRect();
          $$invalidate(12, tooltip.style.left = rect.left + rect.width / 2 + "px", tooltip);
          $$invalidate(12, tooltip.style.top = rect.top + "px", tooltip);
          let id2 = idattr.value;
          toggleTooltip(id2 in rul.lang && !e.shiftKey ? rul.lang[id2] : id2.substring(4));
        } else {
          toggleTooltip(null);
        }
      }
    });
    function toggleTooltip(text2) {
      $$invalidate(12, tooltip.innerHTML = text2, tooltip);
      let classes = tooltip.classList;
      if (text2) {
        classes.add("visible");
      } else {
        classes.remove("visible");
      }
    }
    let navbarDropDown;
    const mousedown_handler = (e) => dropdown();
    function div6_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        navbarDropDown = $$value;
        $$invalidate(15, navbarDropDown);
      });
    }
    const mousemove_handler = (e) => {
      dropdown(true);
    };
    const mouseout_handler = (e) => {
      if (e.target && !isAncestorOf(e.target)) {
        dropdown(false);
      }
    };
    const mouseover_handler = (e) => {
      reveal(true);
    };
    const mouseout_handler_1 = (e) => {
      reveal(false);
    };
    const click_handler = (e) => {
      revealLock();
      saveState();
    };
    const click_handler_1 = (e) => {
      useCache("wipe");
      location.reload();
    };
    const click_handler_2 = (e) => $$invalidate(1, hugeFont = !hugeFont);
    const mousedown_handler_1 = (e) => $$invalidate(11, showLanguagesDropdown = !showLanguagesDropdown);
    const click_handler_3 = (lang2, e) => selectLang(lang2);
    const mouseover_handler_1 = (e) => !isTouch && $$invalidate(11, showLanguagesDropdown = true);
    const mouseout_handler_2 = (e) => !isTouch && $$invalidate(11, showLanguagesDropdown = false);
    function input_input_handler() {
      query = this.value;
      $$invalidate(4, query);
    }
    const click_handler_4 = (e) => {
      $$invalidate(2, sortArticles = !sortArticles);
      centerOnArticle();
      saveState();
    };
    function a_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        activeOption = $$value;
        $$invalidate(6, activeOption);
      });
    }
    const click_handler_5 = () => {
      $$invalidate(7, ignoreNextAutoscroll = true);
    };
    const click_handler_6 = (e) => {
      if (e.button == 0)
        $$invalidate(9, seeSide = !seeSide);
      saveState();
    };
    const func5 = (a) => contains(rul.tr(a).toLowerCase(), query);
    const func_13 = (a) => !contains(rul.tr(a).toLowerCase(), query);
    const prev_handler = (e) => nextArticle(-1);
    const next_handler = (e) => nextArticle(1);
    function div11_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        tooltip = $$value;
        $$invalidate(12, tooltip);
      });
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & 3) {
        $: {
          if (article)
            console.info(article);
          document.documentElement.style.fontSize = hugeFont ? "24pt" : "12pt";
        }
      }
      if ($$self.$$.dirty[0] & 4) {
        $:
          $$invalidate(16, sortedArticles = (articles) => sortArticles ? [...articles || []].sort((a, b) => a.title > b.title ? 1 : -1) : articles);
      }
    };
    return [
      article,
      hugeFont,
      sortArticles,
      found,
      query,
      currentSection,
      activeOption,
      ignoreNextAutoscroll,
      searchDelayHandle,
      seeSide,
      showDropdown,
      showLanguagesDropdown,
      tooltip,
      searching,
      searchinInProgres,
      navbarDropDown,
      sortedArticles,
      $loaded,
      $loadingFile,
      $revealed,
      lang,
      isTouch,
      saveState,
      selectLang,
      centerOnArticle,
      nextArticle,
      searchKeyUp,
      dropdown,
      loadState,
      mousedown_handler,
      div6_binding,
      mousemove_handler,
      mouseout_handler,
      mouseover_handler,
      mouseout_handler_1,
      click_handler,
      click_handler_1,
      click_handler_2,
      mousedown_handler_1,
      click_handler_3,
      mouseover_handler_1,
      mouseout_handler_2,
      input_input_handler,
      click_handler_4,
      a_binding,
      click_handler_5,
      click_handler_6,
      func5,
      func_13,
      prev_handler,
      next_handler,
      div11_binding
    ];
  }
  var App = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance40, create_fragment40, safe_not_equal, { loadState: 28 }, null, [-1, -1, -1]);
    }
    get loadState() {
      return this.$$.ctx[28];
    }
  };
  var App_default = App;

  // src/main.ts
  var app;
  function showPedia() {
    enableKeys();
    document.body.innerHTML = "";
    document.body.style.display = "block";
    new Ruleset();
    loadRules(rul).then(() => {
      loaded.set(true);
    });
    app = new App_default({
      target: document.body
    });
  }
  addEventListener("load", showPedia);
  addEventListener("hashchange", (e) => {
    if (location.hash.substring(0, 8) != "##SEARCH") {
      let input = document.getElementById("search-string");
      input?.blur();
    }
  });
  var main_default = app;
  var enabledQ = false;
  function enableKeys() {
    addEventListener("keydown", (e) => {
      switch (e.code) {
        case "KeyQ":
          if (!enabledQ)
            break;
          let input = document.getElementById("search-string");
          if (input && input instanceof HTMLInputElement && input != document.activeElement) {
            input.value = "";
            setInterval(() => input.focus(), 1);
          }
          break;
        case "ShiftLeft":
        case "ShiftRight":
          reveal(true);
          break;
      }
    });
    addEventListener("keyup", (e) => {
      switch (e.code) {
        case "ShiftLeft":
        case "ShiftRight":
          reveal(false);
          break;
      }
    });
  }
})();