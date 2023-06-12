"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e22) { throw _e22; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e23) { didErr = true; err = _e23; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).SlimSelect = t();
}(void 0, function () {
  "use strict";

  function e() {
    return Math.random().toString(36).substring(2, 10);
  }
  function t(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var i;
    return function () {
      for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) {
        n[_key] = arguments[_key];
      }
      var a = self,
        l = s && !i;
      clearTimeout(i), i = setTimeout(function () {
        i = null, s || e.apply(a, n);
      }, t), l && e.apply(a, n);
    };
  }
  function s(e, t) {
    return JSON.stringify(e) === JSON.stringify(t);
  }
  var i = /*#__PURE__*/_createClass(function i(t) {
    _classCallCheck(this, i);
    this.id = "", this.style = "", this["class"] = [], this.isMultiple = !1, this.isOpen = !1, this.isFullOpen = !1, this.intervalMove = null, t || (t = {}), this.id = "ss-" + e(), this.style = t.style || "", this["class"] = t["class"] || [], this.disabled = void 0 !== t.disabled && t.disabled, this.alwaysOpen = void 0 !== t.alwaysOpen && t.alwaysOpen, this.showSearch = void 0 === t.showSearch || t.showSearch, this.searchPlaceholder = t.searchPlaceholder || "Search", this.searchText = t.searchText || "No Results", this.searchingText = t.searchingText || "Searching...", this.searchHighlight = void 0 !== t.searchHighlight && t.searchHighlight, this.closeOnSelect = void 0 === t.closeOnSelect || t.closeOnSelect, this.contentLocation = t.contentLocation || document.body, this.contentPosition = t.contentPosition || "absolute", this.openPosition = t.openPosition || "auto", this.placeholderText = void 0 !== t.placeholderText ? t.placeholderText : "Select Value", this.allowDeselect = void 0 !== t.allowDeselect && t.allowDeselect, this.hideSelected = void 0 !== t.hideSelected && t.hideSelected, this.showOptionTooltips = void 0 !== t.showOptionTooltips && t.showOptionTooltips, this.minSelected = t.minSelected || 0, this.maxSelected = t.maxSelected || 1e3, this.timeoutDelay = t.timeoutDelay || 200, this.maxValuesShown = t.maxValuesShown || 20, this.maxValuesMessage = t.maxValuesMessage || "{number} selected";
  });
  var n = /*#__PURE__*/_createClass(function n(t) {
    _classCallCheck(this, n);
    if (this.id = t.id && "" !== t.id ? t.id : e(), this.label = t.label || "", this.selectAll = void 0 !== t.selectAll && t.selectAll, this.closable = t.closable || "off", this.options = [], t.options) {
      var _iterator = _createForOfIteratorHelper(t.options),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _e = _step.value;
          this.options.push(new a(_e));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  });
  var a = /*#__PURE__*/_createClass(function a(t) {
    _classCallCheck(this, a);
    this.id = t.id && "" !== t.id ? t.id : e(), this.value = void 0 === t.value ? t.text : t.value, this.text = t.text || "", this.html = t.html || "", this.selected = void 0 !== t.selected && t.selected, this.display = void 0 === t.display || t.display, this.disabled = void 0 !== t.disabled && t.disabled, this.mandatory = void 0 !== t.mandatory && t.mandatory, this.placeholder = void 0 !== t.placeholder && t.placeholder, this["class"] = t["class"] || "", this.style = t.style || "", this.data = t.data || {};
  });
  var l = /*#__PURE__*/function () {
    function l(e, t) {
      _classCallCheck(this, l);
      this.selectType = "single", this.data = [], this.selectType = e, this.setData(t);
    }
    _createClass(l, [{
      key: "validateDataArray",
      value: function validateDataArray(e) {
        if (!Array.isArray(e)) return new Error("Data must be an array");
        var _iterator2 = _createForOfIteratorHelper(e),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t = _step2.value;
            if (!(_t instanceof n || "label" in _t)) return _t instanceof a || "text" in _t ? this.validateOption(_t) : new Error("Data object must be a valid optgroup or option");
            if (!("label" in _t)) return new Error("Optgroup must have a label");
            if ("options" in _t && _t.options) {
              var _iterator3 = _createForOfIteratorHelper(_t.options),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _e2 = _step3.value;
                  return this.validateOption(_e2);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return null;
      }
    }, {
      key: "validateOption",
      value: function validateOption(e) {
        return "text" in e ? null : new Error("Option must have a text");
      }
    }, {
      key: "partialToFullData",
      value: function partialToFullData(e) {
        var t = [];
        return e.forEach(function (e) {
          if (e instanceof n || "label" in e) {
            var _s = [];
            "options" in e && e.options && e.options.forEach(function (e) {
              _s.push(new a(e));
            }), _s.length > 0 && t.push(new n(e));
          }
          (e instanceof a || "text" in e) && t.push(new a(e));
        }), t;
      }
    }, {
      key: "setData",
      value: function setData(e) {
        this.data = this.partialToFullData(e), "single" === this.selectType && this.setSelectedBy("value", this.getSelected());
      }
    }, {
      key: "getData",
      value: function getData() {
        return this.filter(null, !0);
      }
    }, {
      key: "getDataOptions",
      value: function getDataOptions() {
        return this.filter(null, !1);
      }
    }, {
      key: "addOption",
      value: function addOption(e) {
        this.setData(this.getData().concat(new a(e)));
      }
    }, {
      key: "setSelectedBy",
      value: function setSelectedBy(e, t) {
        var s = null,
          i = !1;
        var _iterator4 = _createForOfIteratorHelper(this.data),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _l = _step4.value;
            if (_l instanceof n) {
              var _iterator5 = _createForOfIteratorHelper(_l.options),
                _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _n = _step5.value;
                  s || (s = _n), _n.selected = !i && t.includes(_n[e]), _n.selected && "single" === this.selectType && (i = !0);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
            _l instanceof a && (s || (s = _l), _l.selected = !i && t.includes(_l[e]), _l.selected && "single" === this.selectType && (i = !0));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        "single" === this.selectType && s && !i && (s.selected = !0);
      }
    }, {
      key: "getSelected",
      value: function getSelected() {
        var e = this.getSelectedOptions(),
          t = [];
        return e.forEach(function (e) {
          t.push(e.value);
        }), t;
      }
    }, {
      key: "getSelectedOptions",
      value: function getSelectedOptions() {
        return this.filter(function (e) {
          return e.selected;
        }, !1);
      }
    }, {
      key: "getSelectedIDs",
      value: function getSelectedIDs() {
        var e = this.getSelectedOptions(),
          t = [];
        return e.forEach(function (e) {
          t.push(e.id);
        }), t;
      }
    }, {
      key: "getOptgroupByID",
      value: function getOptgroupByID(e) {
        var _iterator6 = _createForOfIteratorHelper(this.data),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _t2 = _step6.value;
            if (_t2 instanceof n && _t2.id === e) return _t2;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        return null;
      }
    }, {
      key: "getOptionByID",
      value: function getOptionByID(e) {
        var t = this.filter(function (t) {
          return t.id === e;
        }, !1);
        return t.length ? t[0] : null;
      }
    }, {
      key: "search",
      value: function search(e, t) {
        return "" === (e = e.trim()) ? this.getData() : this.filter(function (s) {
          return t(s, e);
        }, !0);
      }
    }, {
      key: "filter",
      value: function filter(e, t) {
        var s = [];
        return this.data.forEach(function (i) {
          if (i instanceof n) {
            var _l2 = [];
            if (i.options.forEach(function (i) {
              e && !e(i) || (t ? _l2.push(new a(i)) : s.push(new a(i)));
            }), _l2.length > 0) {
              var _e3 = new n(i);
              _e3.options = _l2, s.push(_e3);
            }
          }
          i instanceof a && (e && !e(i) || s.push(new a(i)));
        }), s;
      }
    }]);
    return l;
  }();
  var o = /*#__PURE__*/function () {
    function o(e, t, s) {
      _classCallCheck(this, o);
      this.classes = {
        main: "ss-main",
        placeholder: "ss-placeholder",
        values: "ss-values",
        single: "ss-single",
        max: "ss-max",
        value: "ss-value",
        valueText: "ss-value-text",
        valueDelete: "ss-value-delete",
        valueOut: "ss-value-out",
        deselect: "ss-deselect",
        deselectPath: "M10,10 L90,90 M10,90 L90,10",
        arrow: "ss-arrow",
        arrowClose: "M10,30 L50,70 L90,30",
        arrowOpen: "M10,70 L50,30 L90,70",
        content: "ss-content",
        openAbove: "ss-open-above",
        openBelow: "ss-open-below",
        search: "ss-search",
        searchHighlighter: "ss-search-highlight",
        searching: "ss-searching",
        addable: "ss-addable",
        addablePath: "M50,10 L50,90 M10,50 L90,50",
        list: "ss-list",
        optgroup: "ss-optgroup",
        optgroupLabel: "ss-optgroup-label",
        optgroupLabelText: "ss-optgroup-label-text",
        optgroupActions: "ss-optgroup-actions",
        optgroupSelectAll: "ss-selectall",
        optgroupSelectAllBox: "M60,10 L10,10 L10,90 L90,90 L90,50",
        optgroupSelectAllCheck: "M30,45 L50,70 L90,10",
        optgroupClosable: "ss-closable",
        option: "ss-option",
        optionDelete: "M10,10 L90,90 M10,90 L90,10",
        highlighted: "ss-highlighted",
        open: "ss-open",
        close: "ss-close",
        selected: "ss-selected",
        error: "ss-error",
        disabled: "ss-disabled",
        hide: "ss-hide"
      }, this.store = t, this.settings = e, this.callbacks = s, this.main = this.mainDiv(), this.content = this.contentDiv(), this.updateClassStyles(), this.updateAriaAttributes(), this.settings.contentLocation.appendChild(this.content.main);
    }
    _createClass(o, [{
      key: "enable",
      value: function enable() {
        this.main.main.classList.remove(this.classes.disabled), this.content.search.input.disabled = !1;
      }
    }, {
      key: "disable",
      value: function disable() {
        this.main.main.classList.add(this.classes.disabled), this.content.search.input.disabled = !0;
      }
    }, {
      key: "open",
      value: function open() {
        this.main.arrow.path.setAttribute("d", this.classes.arrowOpen), this.main.main.classList.add("up" === this.settings.openPosition ? this.classes.openAbove : this.classes.openBelow), this.main.main.setAttribute("aria-expanded", "true"), this.moveContent();
        var e = this.store.getSelectedOptions();
        if (e.length) {
          var _t3 = e[e.length - 1].id,
            _s2 = this.content.list.querySelector('[data-id="' + _t3 + '"]');
          _s2 && this.ensureElementInView(this.content.list, _s2);
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.main.main.classList.remove(this.classes.openAbove), this.main.main.classList.remove(this.classes.openBelow), this.main.main.setAttribute("aria-expanded", "false"), this.content.main.classList.remove(this.classes.openAbove), this.content.main.classList.remove(this.classes.openBelow), this.main.arrow.path.setAttribute("d", this.classes.arrowClose);
      }
    }, {
      key: "updateClassStyles",
      value: function updateClassStyles() {
        if (this.main.main.className = "", this.main.main.removeAttribute("style"), this.content.main.className = "", this.content.main.removeAttribute("style"), this.main.main.classList.add(this.classes.main), this.content.main.classList.add(this.classes.content), "" !== this.settings.style && (this.content.main.style.cssText = this.settings.style), this.settings["class"].length) {
          var _iterator7 = _createForOfIteratorHelper(this.settings["class"]),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _e4 = _step7.value;
              "" !== _e4.trim() && (this.main.main.classList.add(_e4.trim()), this.content.main.classList.add(_e4.trim()));
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
        "relative" === this.settings.contentPosition && this.content.main.classList.add("ss-" + this.settings.contentPosition);
      }
    }, {
      key: "updateAriaAttributes",
      value: function updateAriaAttributes() {
        this.main.main.role = "combobox", this.main.main.setAttribute("aria-haspopup", "listbox"), this.main.main.setAttribute("aria-controls", this.content.main.id), this.main.main.setAttribute("aria-expanded", "false"), this.content.main.setAttribute("role", "listbox");
      }
    }, {
      key: "mainDiv",
      value: function mainDiv() {
        var _this = this;
        var e = document.createElement("div");
        e.dataset.id = this.settings.id, e.id = this.settings.id, e.tabIndex = 0, e.onkeydown = function (e) {
          switch (e.key) {
            case "ArrowUp":
            case "ArrowDown":
              return _this.callbacks.open(), "ArrowDown" === e.key ? _this.highlight("down") : _this.highlight("up"), !1;
            case "Tab":
              return _this.callbacks.close(), !0;
            case "Enter":
            case " ":
              _this.callbacks.open();
              var _t4 = _this.content.list.querySelector("." + _this.classes.highlighted);
              return _t4 && _t4.click(), !1;
            case "Escape":
              return _this.callbacks.close(), !1;
          }
        }, e.onclick = function (e) {
          _this.settings.disabled || (_this.settings.isOpen ? _this.callbacks.close() : _this.callbacks.open());
        };
        var t = document.createElement("div");
        t.classList.add(this.classes.values), e.appendChild(t);
        var s = document.createElement("div");
        s.classList.add(this.classes.deselect), this.settings.allowDeselect && !this.settings.isMultiple || s.classList.add(this.classes.hide), s.onclick = function (e) {
          if (e.stopPropagation(), _this.settings.disabled) return;
          var t = !0;
          var s = _this.store.getSelectedOptions(),
            i = [];
          _this.callbacks.beforeChange && (t = !0 === _this.callbacks.beforeChange(i, s)), t && (_this.callbacks.setSelected([""], !1), _this.settings.closeOnSelect && _this.callbacks.close(), _this.callbacks.afterChange && _this.callbacks.afterChange(i));
        };
        var i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        i.setAttribute("viewBox", "0 0 100 100");
        var n = document.createElementNS("http://www.w3.org/2000/svg", "path");
        n.setAttribute("d", this.classes.deselectPath), i.appendChild(n), s.appendChild(i), e.appendChild(s);
        var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        a.classList.add(this.classes.arrow), a.setAttribute("viewBox", "0 0 100 100");
        var l = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return l.setAttribute("d", this.classes.arrowClose), this.settings.alwaysOpen && a.classList.add(this.classes.hide), a.appendChild(l), e.appendChild(a), {
          main: e,
          values: t,
          deselect: {
            main: s,
            svg: i,
            path: n
          },
          arrow: {
            main: a,
            path: l
          }
        };
      }
    }, {
      key: "mainFocus",
      value: function mainFocus(e) {
        "click" !== e && this.main.main.focus({
          preventScroll: !0
        });
      }
    }, {
      key: "placeholder",
      value: function placeholder() {
        var e = this.store.filter(function (e) {
          return e.placeholder;
        }, !1);
        var t = this.settings.placeholderText;
        e.length && ("" !== e[0].html ? t = e[0].html : "" !== e[0].text && (t = e[0].text));
        var s = document.createElement("div");
        return s.classList.add(this.classes.placeholder), s.innerHTML = t, s;
      }
    }, {
      key: "renderValues",
      value: function renderValues() {
        this.settings.isMultiple ? this.renderMultipleValues() : this.renderSingleValue();
      }
    }, {
      key: "renderSingleValue",
      value: function renderSingleValue() {
        var e = this.store.filter(function (e) {
            return e.selected && !e.placeholder;
          }, !1),
          t = e.length > 0 ? e[0] : null;
        if (t) {
          var _e5 = document.createElement("div");
          _e5.classList.add(this.classes.single), _e5.innerHTML = t.html ? t.html : t.text, this.main.values.innerHTML = _e5.outerHTML;
        } else this.main.values.innerHTML = this.placeholder().outerHTML;
        this.settings.allowDeselect && e.length ? this.main.deselect.main.classList.remove(this.classes.hide) : this.main.deselect.main.classList.add(this.classes.hide);
      }
    }, {
      key: "renderMultipleValues",
      value: function renderMultipleValues() {
        var _this2 = this;
        var e = this.main.values.childNodes,
          t = this.store.filter(function (e) {
            return e.selected && e.display;
          }, !1);
        if (0 === t.length) return void (this.main.values.innerHTML = this.placeholder().outerHTML);
        {
          var _e6 = this.main.values.querySelector("." + this.classes.placeholder);
          _e6 && _e6.remove();
        }
        if (t.length > this.settings.maxValuesShown) {
          var _e7 = document.createElement("div");
          return _e7.classList.add(this.classes.max), _e7.textContent = this.settings.maxValuesMessage.replace("{number}", t.length.toString()), void (this.main.values.innerHTML = _e7.outerHTML);
        }
        {
          var _e8 = this.main.values.querySelector("." + this.classes.max);
          _e8 && _e8.remove();
        }
        var s = [];
        var _loop = function _loop() {
          var n = e[_i],
            a = n.getAttribute("data-id");
          if (a) {
            t.filter(function (e) {
              return e.id === a;
            }, !1).length || s.push(n);
          }
        };
        for (var _i = 0; _i < e.length; _i++) {
          _loop();
        }
        var _loop2 = function _loop2() {
          var e = _s3[_i2];
          e.classList.add(_this2.classes.valueOut), setTimeout(function () {
            _this2.main.values.removeChild(e);
          }, 100);
        };
        for (var _i2 = 0, _s3 = s; _i2 < _s3.length; _i2++) {
          _loop2();
        }
        e = this.main.values.childNodes;
        for (var _s4 = 0; _s4 < t.length; _s4++) {
          var _i3 = !0;
          for (var _n2 = 0; _n2 < e.length; _n2++) t[_s4].id === String(e[_n2].dataset.id) && (_i3 = !1);
          _i3 && (0 === e.length ? this.main.values.appendChild(this.multipleValue(t[_s4])) : 0 === _s4 ? this.main.values.insertBefore(this.multipleValue(t[_s4]), e[_s4]) : e[_s4 - 1].insertAdjacentElement("afterend", this.multipleValue(t[_s4])));
        }
      }
    }, {
      key: "multipleValue",
      value: function multipleValue(e) {
        var _this3 = this;
        var t = document.createElement("div");
        t.classList.add(this.classes.value), t.dataset.id = e.id;
        var s = document.createElement("div");
        if (s.classList.add(this.classes.valueText), s.innerHTML = e.text, t.appendChild(s), !e.mandatory) {
          var _s5 = document.createElement("div");
          _s5.classList.add(this.classes.valueDelete), _s5.onclick = function (t) {
            if (t.preventDefault(), t.stopPropagation(), _this3.settings.disabled) return;
            var s = !0;
            var i = _this3.store.getSelectedOptions(),
              l = i.filter(function (t) {
                return t.selected && t.id !== e.id;
              }, !0);
            if (!(_this3.settings.minSelected && l.length < _this3.settings.minSelected) && (_this3.callbacks.beforeChange && (s = !0 === _this3.callbacks.beforeChange(l, i)), s)) {
              var _e9 = [];
              var _iterator8 = _createForOfIteratorHelper(l),
                _step8;
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _t5 = _step8.value;
                  if (_t5 instanceof n) {
                    var _iterator9 = _createForOfIteratorHelper(_t5.options),
                      _step9;
                    try {
                      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                        var _s6 = _step9.value;
                        _e9.push(_s6.value);
                      }
                    } catch (err) {
                      _iterator9.e(err);
                    } finally {
                      _iterator9.f();
                    }
                  }
                  _t5 instanceof a && _e9.push(_t5.value);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
              _this3.callbacks.setSelected(_e9, !1), _this3.settings.closeOnSelect && _this3.callbacks.close(), _this3.callbacks.afterChange && _this3.callbacks.afterChange(l);
            }
          };
          var _i4 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          _i4.setAttribute("viewBox", "0 0 100 100");
          var _l3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
          _l3.setAttribute("d", this.classes.optionDelete), _i4.appendChild(_l3), _s5.appendChild(_i4), t.appendChild(_s5);
        }
        return t;
      }
    }, {
      key: "contentDiv",
      value: function contentDiv() {
        var e = document.createElement("div");
        e.dataset.id = this.settings.id, e.id = this.settings.id;
        var t = this.searchDiv();
        e.appendChild(t.main);
        var s = this.listDiv();
        return e.appendChild(s), {
          main: e,
          search: t,
          list: s
        };
      }
    }, {
      key: "moveContent",
      value: function moveContent() {
        "relative" !== this.settings.contentPosition && "down" !== this.settings.openPosition ? "up" !== this.settings.openPosition ? "up" === this.putContent() ? this.moveContentAbove() : this.moveContentBelow() : this.moveContentAbove() : this.moveContentBelow();
      }
    }, {
      key: "searchDiv",
      value: function searchDiv() {
        var _this4 = this;
        var e = document.createElement("div"),
          s = document.createElement("input"),
          i = document.createElement("div");
        e.classList.add(this.classes.search);
        var n = {
          main: e,
          input: s
        };
        if (this.settings.showSearch || (e.classList.add(this.classes.hide), s.readOnly = !0), s.type = "search", s.placeholder = this.settings.searchPlaceholder, s.tabIndex = -1, s.setAttribute("aria-label", this.settings.searchPlaceholder), s.setAttribute("autocapitalize", "off"), s.setAttribute("autocomplete", "off"), s.setAttribute("autocorrect", "off"), s.oninput = t(function (e) {
          _this4.callbacks.search(e.target.value);
        }, 100), s.onkeydown = function (e) {
          switch (e.key) {
            case "ArrowUp":
            case "ArrowDown":
              return "ArrowDown" === e.key ? _this4.highlight("down") : _this4.highlight("up"), !1;
            case "Tab":
              return _this4.callbacks.close(), !0;
            case "Escape":
              return _this4.callbacks.close(), !1;
            case "Enter":
            case " ":
              if (_this4.callbacks.addable && e.ctrlKey) return i.click(), !1;
              {
                var _e10 = _this4.content.list.querySelector("." + _this4.classes.highlighted);
                if (_e10) return _e10.click(), !1;
              }
              return !0;
          }
        }, e.appendChild(s), this.callbacks.addable) {
          i.classList.add(this.classes.addable);
          var _t6 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          _t6.setAttribute("viewBox", "0 0 100 100");
          var _s7 = document.createElementNS("http://www.w3.org/2000/svg", "path");
          _s7.setAttribute("d", this.classes.addablePath), _t6.appendChild(_s7), i.appendChild(_t6), i.onclick = function (e) {
            if (e.preventDefault(), e.stopPropagation(), !_this4.callbacks.addable) return;
            var t = _this4.content.search.input.value.trim();
            if ("" === t) return void _this4.content.search.input.focus();
            var s = function s(e) {
                var t = new a(e);
                if (_this4.callbacks.addOption(t), _this4.settings.isMultiple) {
                  var _e11 = _this4.store.getSelected();
                  _e11.push(t.value), _this4.callbacks.setSelected(_e11, !0);
                } else _this4.callbacks.setSelected([t.value], !0);
                _this4.callbacks.search(""), _this4.settings.closeOnSelect && setTimeout(function () {
                  _this4.callbacks.close();
                }, 100);
              },
              i = _this4.callbacks.addable(t);
            i instanceof Promise ? i.then(function (e) {
              s("string" == typeof e ? {
                text: e,
                value: e
              } : e);
            }) : s("string" == typeof i ? {
              text: i,
              value: i
            } : i);
          }, e.appendChild(i), n.addable = {
            main: i,
            svg: _t6,
            path: _s7
          };
        }
        return n;
      }
    }, {
      key: "searchFocus",
      value: function searchFocus() {
        this.content.search.input.focus();
      }
    }, {
      key: "getOptions",
      value: function getOptions() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        var i = "." + this.classes.option;
        return e && (i += ":not(." + this.classes.placeholder + ")"), t && (i += ":not(." + this.classes.disabled + ")"), s && (i += ":not(." + this.classes.hide + ")"), Array.from(this.content.list.querySelectorAll(i));
      }
    }, {
      key: "highlight",
      value: function highlight(e) {
        var t = this.getOptions(!0, !0, !0);
        if (0 !== t.length) if (1 !== t.length || t[0].classList.contains(this.classes.highlighted)) {
          for (var _s8 = 0; _s8 < t.length; _s8++) if (t[_s8].classList.contains(this.classes.highlighted)) {
            var _i5 = t[_s8];
            _i5.classList.remove(this.classes.highlighted);
            var _n3 = _i5.parentElement;
            if (_n3 && _n3.classList.contains(this.classes.open)) {
              var _e12 = _n3.querySelector("." + this.classes.optgroupLabel);
              _e12 && _e12.click();
            }
            var _a = t["down" === e ? _s8 + 1 < t.length ? _s8 + 1 : 0 : _s8 - 1 >= 0 ? _s8 - 1 : t.length - 1];
            _a.classList.add(this.classes.highlighted), this.ensureElementInView(this.content.list, _a);
            var _l4 = _a.parentElement;
            if (_l4 && _l4.classList.contains(this.classes.close)) {
              var _e13 = _l4.querySelector("." + this.classes.optgroupLabel);
              _e13 && _e13.click();
            }
            return;
          }
          t["down" === e ? 0 : t.length - 1].classList.add(this.classes.highlighted), this.ensureElementInView(this.content.list, t["down" === e ? 0 : t.length - 1]);
        } else t[0].classList.add(this.classes.highlighted);
      }
    }, {
      key: "listDiv",
      value: function listDiv() {
        var e = document.createElement("div");
        return e.classList.add(this.classes.list), e;
      }
    }, {
      key: "renderError",
      value: function renderError(e) {
        this.content.list.innerHTML = "";
        var t = document.createElement("div");
        t.classList.add(this.classes.error), t.textContent = e, this.content.list.appendChild(t);
      }
    }, {
      key: "renderSearching",
      value: function renderSearching() {
        this.content.list.innerHTML = "";
        var e = document.createElement("div");
        e.classList.add(this.classes.searching), e.textContent = this.settings.searchingText, this.content.list.appendChild(e);
      }
    }, {
      key: "renderOptions",
      value: function renderOptions(e) {
        var _this5 = this;
        if (this.content.list.innerHTML = "", 0 === e.length) {
          var _e14 = document.createElement("div");
          return _e14.classList.add(this.classes.search), _e14.innerHTML = this.settings.searchText, void this.content.list.appendChild(_e14);
        }
        var _iterator10 = _createForOfIteratorHelper(e),
          _step10;
        try {
          var _loop3 = function _loop3() {
            var t = _step10.value;
            if (t instanceof n) {
              var _e15 = document.createElement("div");
              _e15.classList.add(_this5.classes.optgroup);
              var _s9 = document.createElement("div");
              _s9.classList.add(_this5.classes.optgroupLabel), _e15.appendChild(_s9);
              var _i6 = document.createElement("div");
              _i6.classList.add(_this5.classes.optgroupLabelText), _i6.textContent = t.label, _s9.appendChild(_i6);
              var _n4 = document.createElement("div");
              if (_n4.classList.add(_this5.classes.optgroupActions), _s9.appendChild(_n4), _this5.settings.isMultiple && t.selectAll) {
                var _e16 = document.createElement("div");
                _e16.classList.add(_this5.classes.optgroupSelectAll);
                var _s10 = !0;
                var _iterator11 = _createForOfIteratorHelper(t.options),
                  _step11;
                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var _e19 = _step11.value;
                    if (!_e19.selected) {
                      _s10 = !1;
                      break;
                    }
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }
                _s10 && _e16.classList.add(_this5.classes.selected);
                var _i7 = document.createElement("span");
                _i7.textContent = "Select All", _e16.appendChild(_i7);
                var _a2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                _a2.setAttribute("viewBox", "0 0 100 100"), _e16.appendChild(_a2);
                var _l5 = document.createElementNS("http://www.w3.org/2000/svg", "path");
                _l5.setAttribute("d", _this5.classes.optgroupSelectAllBox), _a2.appendChild(_l5);
                var _o = document.createElementNS("http://www.w3.org/2000/svg", "path");
                _o.setAttribute("d", _this5.classes.optgroupSelectAllCheck), _a2.appendChild(_o), _e16.addEventListener("click", function (e) {
                  e.preventDefault(), e.stopPropagation();
                  var i = _this5.store.getSelected();
                  if (_s10) {
                    var _e17 = i.filter(function (e) {
                      var _iterator12 = _createForOfIteratorHelper(t.options),
                        _step12;
                      try {
                        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                          var _s11 = _step12.value;
                          if (e === _s11.value) return !1;
                        }
                      } catch (err) {
                        _iterator12.e(err);
                      } finally {
                        _iterator12.f();
                      }
                      return !0;
                    });
                    _this5.callbacks.setSelected(_e17, !0);
                  } else {
                    var _e18 = i.concat(t.options.map(function (e) {
                      return e.value;
                    }));
                    _this5.callbacks.setSelected(_e18, !0);
                  }
                }), _n4.appendChild(_e16);
              }
              if ("off" !== t.closable) {
                var _i8 = document.createElement("div");
                _i8.classList.add(_this5.classes.optgroupClosable);
                var _a3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                _a3.setAttribute("viewBox", "0 0 100 100"), _a3.classList.add(_this5.classes.arrow), _i8.appendChild(_a3);
                var _l6 = document.createElementNS("http://www.w3.org/2000/svg", "path");
                _a3.appendChild(_l6), t.options.some(function (e) {
                  return e.selected;
                }) || "" !== _this5.content.search.input.value.trim() ? (_i8.classList.add(_this5.classes.open), _l6.setAttribute("d", _this5.classes.arrowOpen)) : "open" === t.closable ? (_e15.classList.add(_this5.classes.open), _l6.setAttribute("d", _this5.classes.arrowOpen)) : "close" === t.closable && (_e15.classList.add(_this5.classes.close), _l6.setAttribute("d", _this5.classes.arrowClose)), _s9.addEventListener("click", function (t) {
                  t.preventDefault(), t.stopPropagation(), _e15.classList.contains(_this5.classes.close) ? (_e15.classList.remove(_this5.classes.close), _e15.classList.add(_this5.classes.open), _l6.setAttribute("d", _this5.classes.arrowOpen)) : (_e15.classList.remove(_this5.classes.open), _e15.classList.add(_this5.classes.close), _l6.setAttribute("d", _this5.classes.arrowClose));
                }), _n4.appendChild(_i8);
              }
              _e15.appendChild(_s9);
              var _iterator13 = _createForOfIteratorHelper(t.options),
                _step13;
              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var _s12 = _step13.value;
                  _e15.appendChild(_this5.option(_s12));
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
              _this5.content.list.appendChild(_e15);
            }
            t instanceof a && _this5.content.list.appendChild(_this5.option(t));
          };
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            _loop3();
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
    }, {
      key: "option",
      value: function option(e) {
        var _this6 = this;
        if (e.placeholder) {
          var _e20 = document.createElement("div");
          return _e20.classList.add(this.classes.option), _e20.classList.add(this.classes.hide), _e20;
        }
        var t = document.createElement("div");
        return t.dataset.id = e.id, t.id = e.id, t.classList.add(this.classes.option), t.setAttribute("role", "option"), e["class"] && e["class"].split(" ").forEach(function (e) {
          t.classList.add(e);
        }), e.style && (t.style.cssText = e.style), this.settings.searchHighlight && "" !== this.content.search.input.value.trim() ? t.innerHTML = this.highlightText("" !== e.html ? e.html : e.text, this.content.search.input.value, this.classes.searchHighlighter) : "" !== e.html ? t.innerHTML = e.html : t.textContent = e.text, this.settings.showOptionTooltips && t.textContent && t.setAttribute("title", t.textContent), e.display || t.classList.add(this.classes.hide), e.disabled && t.classList.add(this.classes.disabled), e.selected && this.settings.hideSelected && t.classList.add(this.classes.hide), e.selected ? (t.classList.add(this.classes.selected), t.setAttribute("aria-selected", "true"), this.main.main.setAttribute("aria-activedescendant", t.id)) : (t.classList.remove(this.classes.selected), t.setAttribute("aria-selected", "false")), t.addEventListener("click", function (t) {
          t.preventDefault(), t.stopPropagation();
          var s = _this6.store.getSelected(),
            i = t.currentTarget,
            n = String(i.dataset.id);
          if (e.disabled || e.selected && !_this6.settings.allowDeselect) return;
          if (_this6.settings.isMultiple && _this6.settings.maxSelected <= s.length && !e.selected || _this6.settings.isMultiple && _this6.settings.minSelected >= s.length && e.selected) return;
          var a = !1;
          var l = _this6.store.getSelectedOptions();
          var _o2 = [];
          _this6.settings.isMultiple && (_o2 = e.selected ? l.filter(function (e) {
            return e.id !== n;
          }) : l.concat(e)), _this6.settings.isMultiple || (_o2 = e.selected ? [] : [e]), _this6.callbacks.beforeChange || (a = !0), _this6.callbacks.beforeChange && (a = !1 !== _this6.callbacks.beforeChange(_o2, l)), a && (_this6.store.getOptionByID(n) || _this6.callbacks.addOption(e), _this6.callbacks.setSelected(_o2.map(function (e) {
            return e.value;
          }), !1), _this6.settings.closeOnSelect && _this6.callbacks.close(), _this6.callbacks.afterChange && _this6.callbacks.afterChange(_o2));
        }), t;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.main.main.remove(), this.content.main.remove();
      }
    }, {
      key: "highlightText",
      value: function highlightText(e, t, s) {
        var i = e;
        var n = new RegExp("(" + t.trim() + ")(?![^<]*>[^<>]*</)", "i");
        if (!e.match(n)) return e;
        var a = e.match(n).index,
          l = a + e.match(n)[0].toString().length,
          _o3 = e.substring(a, l);
        return i = i.replace(n, "<mark class=\"".concat(s, "\">").concat(_o3, "</mark>")), i;
      }
    }, {
      key: "moveContentAbove",
      value: function moveContentAbove() {
        var e = this.main.main.offsetHeight,
          t = this.content.main.offsetHeight;
        this.main.main.classList.remove(this.classes.openBelow), this.main.main.classList.add(this.classes.openAbove), this.content.main.classList.remove(this.classes.openBelow), this.content.main.classList.add(this.classes.openAbove);
        var s = this.main.main.getBoundingClientRect();
        this.content.main.style.margin = "-" + (e + t - 1) + "px 0px 0px 0px", this.content.main.style.top = s.top + s.height + window.scrollY + "px", this.content.main.style.left = s.left + window.scrollX + "px", this.content.main.style.width = s.width + "px";
      }
    }, {
      key: "moveContentBelow",
      value: function moveContentBelow() {
        this.main.main.classList.remove(this.classes.openAbove), this.main.main.classList.add(this.classes.openBelow), this.content.main.classList.remove(this.classes.openAbove), this.content.main.classList.add(this.classes.openBelow);
        var e = this.main.main.getBoundingClientRect();
        this.content.main.style.margin = "-1px 0px 0px 0px", "relative" !== this.settings.contentPosition && (this.content.main.style.top = e.top + e.height + window.scrollY + "px", this.content.main.style.left = e.left + window.scrollX + "px", this.content.main.style.width = e.width + "px");
      }
    }, {
      key: "ensureElementInView",
      value: function ensureElementInView(e, t) {
        var s = e.scrollTop + e.offsetTop,
          i = s + e.clientHeight,
          n = t.offsetTop,
          a = n + t.clientHeight;
        n < s ? e.scrollTop -= s - n : a > i && (e.scrollTop += a - i);
      }
    }, {
      key: "putContent",
      value: function putContent() {
        var e = this.main.main.offsetHeight,
          t = this.main.main.getBoundingClientRect(),
          s = this.content.main.offsetHeight;
        return window.innerHeight - (t.top + e) <= s && t.top > s ? "up" : "down";
      }
    }]);
    return o;
  }();
  var c = /*#__PURE__*/function () {
    function c(e) {
      _classCallCheck(this, c);
      this.listen = !1, this.observer = null, this.select = e, this.select.addEventListener("change", this.valueChange.bind(this), {
        passive: !0
      }), this.observer = new MutationObserver(this.observeCall.bind(this)), this.changeListen(!0);
    }
    _createClass(c, [{
      key: "enable",
      value: function enable() {
        this.select.disabled = !1;
      }
    }, {
      key: "disable",
      value: function disable() {
        this.select.disabled = !0;
      }
    }, {
      key: "hideUI",
      value: function hideUI() {
        this.select.tabIndex = -1, this.select.style.display = "none", this.select.setAttribute("aria-hidden", "true");
      }
    }, {
      key: "showUI",
      value: function showUI() {
        this.select.removeAttribute("tabindex"), this.select.style.display = "", this.select.removeAttribute("aria-hidden");
      }
    }, {
      key: "changeListen",
      value: function changeListen(e) {
        this.listen = e, e && this.observer && this.observer.observe(this.select, {
          subtree: !0,
          childList: !0,
          attributes: !0
        }), e || this.observer && this.observer.disconnect();
      }
    }, {
      key: "valueChange",
      value: function valueChange(e) {
        return this.listen && this.onValueChange && this.onValueChange(this.getSelectedValues()), !0;
      }
    }, {
      key: "observeCall",
      value: function observeCall(e) {
        if (!this.listen) return;
        var t = !1,
          s = !1,
          i = !1;
        var _iterator14 = _createForOfIteratorHelper(e),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _n5 = _step14.value;
            _n5.target === this.select && ("disabled" === _n5.attributeName && (s = !0), "class" === _n5.attributeName && (t = !0)), "OPTGROUP" !== _n5.target.nodeName && "OPTION" !== _n5.target.nodeName || (i = !0);
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
        t && this.onClassChange && this.onClassChange(this.select.className.split(" ")), s && this.onDisabledChange && (this.changeListen(!1), this.onDisabledChange(this.select.disabled), this.changeListen(!0)), i && this.onOptionsChange && (this.changeListen(!1), this.onOptionsChange(this.getData()), this.changeListen(!0));
      }
    }, {
      key: "getData",
      value: function getData() {
        var e = [];
        var t = this.select.childNodes;
        var _iterator15 = _createForOfIteratorHelper(t),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _s13 = _step15.value;
            "OPTGROUP" === _s13.nodeName && e.push(this.getDataFromOptgroup(_s13)), "OPTION" === _s13.nodeName && e.push(this.getDataFromOption(_s13));
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
        return e;
      }
    }, {
      key: "getDataFromOptgroup",
      value: function getDataFromOptgroup(e) {
        var t = {
          id: e.id,
          label: e.label,
          selectAll: !!e.dataset && "true" === e.dataset.selectall,
          closable: e.dataset ? e.dataset.closable : "off",
          options: []
        };
        var s = e.childNodes;
        var _iterator16 = _createForOfIteratorHelper(s),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var _e21 = _step16.value;
            "OPTION" === _e21.nodeName && t.options.push(this.getDataFromOption(_e21));
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
        return t;
      }
    }, {
      key: "getDataFromOption",
      value: function getDataFromOption(e) {
        return {
          id: e.id,
          value: e.value,
          text: e.text,
          html: e.dataset && e.dataset.html ? e.dataset.html : "",
          selected: e.selected,
          display: "none" !== e.style.display,
          disabled: e.disabled,
          mandatory: !!e.dataset && "true" === e.dataset.mandatory,
          placeholder: "true" === e.dataset.placeholder,
          "class": e.className,
          style: e.style.cssText,
          data: e.dataset
        };
      }
    }, {
      key: "getSelectedValues",
      value: function getSelectedValues() {
        var e = [];
        var t = this.select.childNodes;
        var _iterator17 = _createForOfIteratorHelper(t),
          _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _s14 = _step17.value;
            if ("OPTGROUP" === _s14.nodeName) {
              var _t7 = _s14.childNodes;
              var _iterator18 = _createForOfIteratorHelper(_t7),
                _step18;
              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var _s15 = _step18.value;
                  if ("OPTION" === _s15.nodeName) {
                    var _t8 = _s15;
                    _t8.selected && e.push(_t8.value);
                  }
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            }
            if ("OPTION" === _s14.nodeName) {
              var _t9 = _s14;
              _t9.selected && e.push(_t9.value);
            }
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
        return e;
      }
    }, {
      key: "setSelected",
      value: function setSelected(e) {
        this.changeListen(!1);
        var t = this.select.childNodes;
        var _iterator19 = _createForOfIteratorHelper(t),
          _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var _s16 = _step19.value;
            if ("OPTGROUP" === _s16.nodeName) {
              var _t10 = _s16.childNodes;
              var _iterator20 = _createForOfIteratorHelper(_t10),
                _step20;
              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var _s17 = _step20.value;
                  if ("OPTION" === _s17.nodeName) {
                    var _t11 = _s17;
                    _t11.selected = e.includes(_t11.value);
                  }
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
            }
            if ("OPTION" === _s16.nodeName) {
              var _t12 = _s16;
              _t12.selected = e.includes(_t12.value);
            }
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
        this.changeListen(!0);
      }
    }, {
      key: "updateSelect",
      value: function updateSelect(e, t, s) {
        var _this7 = this;
        this.changeListen(!1), e && (this.select.dataset.id = e), t && (this.select.style.cssText = t), s && (this.select.className = "", s.forEach(function (e) {
          "" !== e.trim() && _this7.select.classList.add(e.trim());
        })), this.changeListen(!0);
      }
    }, {
      key: "updateOptions",
      value: function updateOptions(e) {
        this.changeListen(!1), this.select.innerHTML = "";
        var _iterator21 = _createForOfIteratorHelper(e),
          _step21;
        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var _t13 = _step21.value;
            _t13 instanceof n && this.select.appendChild(this.createOptgroup(_t13)), _t13 instanceof a && this.select.appendChild(this.createOption(_t13));
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
        this.select.dispatchEvent(new Event("change")), this.changeListen(!0);
      }
    }, {
      key: "createOptgroup",
      value: function createOptgroup(e) {
        var t = document.createElement("optgroup");
        if (t.id = e.id, t.label = e.label, e.selectAll && (t.dataset.selectAll = "true"), "off" !== e.closable && (t.dataset.closable = e.closable), e.options) {
          var _iterator22 = _createForOfIteratorHelper(e.options),
            _step22;
          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var _s18 = _step22.value;
              t.appendChild(this.createOption(_s18));
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
        }
        return t;
      }
    }, {
      key: "createOption",
      value: function createOption(e) {
        var t = document.createElement("option");
        return t.id = e.id, t.value = e.value, t.innerHTML = e.text, "" !== e.html && t.setAttribute("data-html", e.html), e.selected && (t.selected = e.selected), e.disabled && (t.disabled = !0), !1 === e.display && (t.style.display = "none"), e.placeholder && t.setAttribute("data-placeholder", "true"), e.mandatory && t.setAttribute("data-mandatory", "true"), e["class"] && e["class"].split(" ").forEach(function (e) {
          t.classList.add(e);
        }), e.data && "object" == _typeof(e.data) && Object.keys(e.data).forEach(function (s) {
          t.setAttribute("data-" + function (e) {
            var t = e.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function (e) {
              return "-" + e.toLowerCase();
            });
            return e[0] === e[0].toUpperCase() ? t.substring(1) : t;
          }(s), e.data[s]);
        }), t;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.changeListen(!1), this.select.removeEventListener("change", this.valueChange.bind(this)), this.observer && (this.observer.disconnect(), this.observer = null), delete this.select.dataset.id, this.showUI();
      }
    }]);
    return c;
  }();
  return /*#__PURE__*/function () {
    function _class(e) {
      var _this8 = this;
      _classCallCheck(this, _class);
      var s;
      if (this.events = {
        search: void 0,
        searchFilter: function searchFilter(e, t) {
          return -1 !== e.text.toLowerCase().indexOf(t.toLowerCase());
        },
        addable: void 0,
        beforeChange: void 0,
        afterChange: void 0,
        beforeOpen: void 0,
        afterOpen: void 0,
        beforeClose: void 0,
        afterClose: void 0
      }, this.windowResize = t(function () {
        (_this8.settings.isOpen || _this8.settings.isFullOpen) && _this8.render.moveContent();
      }), this.windowScroll = t(function () {
        (_this8.settings.isOpen || _this8.settings.isFullOpen) && _this8.render.moveContent();
      }), this.documentClick = function (e) {
        _this8.settings.isOpen && e.target && !function (e, t) {
          function s(e, s) {
            return s && e && e.classList && e.classList.contains(s) || s && e && e.dataset && e.dataset.id && e.dataset.id === t ? e : null;
          }
          return s(e, t) || function e(t, i) {
            return t && t !== document ? s(t, i) ? t : e(t.parentNode, i) : null;
          }(e, t);
        }(e.target, _this8.settings.id) && _this8.close(e.type);
      }, this.windowVisibilityChange = function () {
        document.hidden && _this8.close();
      }, this.selectEl = "string" == typeof e.select ? document.querySelector(e.select) : e.select, !this.selectEl) return void (e.events && e.events.error && e.events.error(new Error("Could not find select element")));
      if ("SELECT" !== this.selectEl.tagName) return void (e.events && e.events.error && e.events.error(new Error("Element isnt of type select")));
      this.selectEl.dataset.ssid && this.destroy(), this.settings = new i(e.settings);
      var n = ["afterChange", "beforeOpen", "afterOpen", "beforeClose", "afterClose"];
      for (var _s19 in e.events) e.events.hasOwnProperty(_s19) && (-1 !== n.indexOf(_s19) ? this.events[_s19] = t(e.events[_s19], 100) : this.events[_s19] = e.events[_s19]);
      this.settings.disabled = (null === (s = e.settings) || void 0 === s ? void 0 : s.disabled) ? e.settings.disabled : this.selectEl.disabled, this.settings.isMultiple = this.selectEl.multiple, this.settings.style = this.selectEl.style.cssText, this.settings["class"] = this.selectEl.className.split(" "), this.select = new c(this.selectEl), this.select.updateSelect(this.settings.id, this.settings.style, this.settings["class"]), this.select.hideUI(), this.select.onValueChange = function (e) {
        _this8.setSelected(e);
      }, this.select.onClassChange = function (e) {
        _this8.settings["class"] = e, _this8.render.updateClassStyles();
      }, this.select.onDisabledChange = function (e) {
        e ? _this8.disable() : _this8.enable();
      }, this.select.onOptionsChange = function (e) {
        _this8.setData(e);
      }, this.store = new l(this.settings.isMultiple ? "multiple" : "single", e.data ? e.data : this.select.getData()), e.data && this.select.updateOptions(this.store.getData());
      var a = {
        open: this.open.bind(this),
        close: this.close.bind(this),
        addable: this.events.addable ? this.events.addable : void 0,
        setSelected: this.setSelected.bind(this),
        addOption: this.addOption.bind(this),
        search: this.search.bind(this),
        beforeChange: this.events.beforeChange,
        afterChange: this.events.afterChange
      };
      this.render = new o(this.settings, this.store, a), this.render.renderValues(), this.render.renderOptions(this.store.getData());
      var h = this.selectEl.getAttribute("aria-label"),
        r = this.selectEl.getAttribute("aria-labelledby");
      h ? this.render.main.main.setAttribute("aria-label", h) : r && this.render.main.main.setAttribute("aria-labelledby", r), this.selectEl.parentNode && this.selectEl.parentNode.insertBefore(this.render.main.main, this.selectEl.nextSibling), document.addEventListener("click", this.documentClick), window.addEventListener("resize", this.windowResize, !1), "auto" === this.settings.openPosition && window.addEventListener("scroll", this.windowScroll, !1), document.addEventListener("visibilitychange", this.windowVisibilityChange), this.settings.disabled && this.disable(), this.settings.alwaysOpen && this.open(), this.selectEl.slim = this;
    }
    _createClass(_class, [{
      key: "enable",
      value: function enable() {
        this.settings.disabled = !1, this.select.enable(), this.render.enable();
      }
    }, {
      key: "disable",
      value: function disable() {
        this.settings.disabled = !0, this.select.disable(), this.render.disable();
      }
    }, {
      key: "getData",
      value: function getData() {
        return this.store.getData();
      }
    }, {
      key: "setData",
      value: function setData(e) {
        var t = this.store.getSelected(),
          i = this.store.validateDataArray(e);
        if (i) return void (this.events.error && this.events.error(i));
        this.store.setData(e);
        var n = this.store.getData();
        this.select.updateOptions(n), this.render.renderValues(), this.render.renderOptions(n), this.events.afterChange && !s(t, this.store.getSelected()) && this.events.afterChange(this.store.getSelectedOptions());
      }
    }, {
      key: "getSelected",
      value: function getSelected() {
        return this.store.getSelected();
      }
    }, {
      key: "setSelected",
      value: function setSelected(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var i = this.store.getSelected();
        this.store.setSelectedBy("value", Array.isArray(e) ? e : [e]);
        var n = this.store.getData();
        this.select.updateOptions(n), this.render.renderValues(), "" !== this.render.content.search.input.value ? this.search(this.render.content.search.input.value) : this.render.renderOptions(n), t && this.events.afterChange && !s(i, this.store.getSelected()) && this.events.afterChange(this.store.getSelectedOptions());
      }
    }, {
      key: "addOption",
      value: function addOption(e) {
        var t = this.store.getSelected();
        this.store.getDataOptions().some(function (t) {
          var s;
          return t.value === (null !== (s = e.value) && void 0 !== s ? s : e.text);
        }) || this.store.addOption(e);
        var i = this.store.getData();
        this.select.updateOptions(i), this.render.renderValues(), this.render.renderOptions(i), this.events.afterChange && !s(t, this.store.getSelected()) && this.events.afterChange(this.store.getSelectedOptions());
      }
    }, {
      key: "open",
      value: function open() {
        var _this9 = this;
        this.settings.disabled || this.settings.isOpen || (this.events.beforeOpen && this.events.beforeOpen(), this.render.open(), this.settings.showSearch && this.render.searchFocus(), this.settings.isOpen = !0, setTimeout(function () {
          _this9.events.afterOpen && _this9.events.afterOpen(), _this9.settings.isOpen && (_this9.settings.isFullOpen = !0);
        }, this.settings.timeoutDelay), "absolute" === this.settings.contentPosition && (this.settings.intervalMove && clearInterval(this.settings.intervalMove), this.settings.intervalMove = setInterval(this.render.moveContent.bind(this.render), 500)));
      }
    }, {
      key: "close",
      value: function close() {
        var _this10 = this;
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.settings.isOpen && !this.settings.alwaysOpen && (this.events.beforeClose && this.events.beforeClose(), this.render.close(), "" !== this.render.content.search.input.value && this.search(""), this.render.mainFocus(e), this.settings.isOpen = !1, this.settings.isFullOpen = !1, setTimeout(function () {
          _this10.events.afterClose && _this10.events.afterClose();
        }, this.settings.timeoutDelay), this.settings.intervalMove && clearInterval(this.settings.intervalMove));
      }
    }, {
      key: "search",
      value: function search(e) {
        var _this11 = this;
        if (this.render.content.search.input.value !== e && (this.render.content.search.input.value = e), !this.events.search) return void this.render.renderOptions("" === e ? this.store.getData() : this.store.search(e, this.events.searchFilter));
        this.render.renderSearching();
        var t = this.events.search(e, this.store.getSelectedOptions());
        t instanceof Promise ? t.then(function (e) {
          _this11.render.renderOptions(_this11.store.partialToFullData(e));
        })["catch"](function (e) {
          _this11.render.renderError("string" == typeof e ? e : e.message);
        }) : Array.isArray(t) ? this.render.renderOptions(this.store.partialToFullData(t)) : this.render.renderError("Search event must return a promise or an array of data");
      }
    }, {
      key: "destroy",
      value: function destroy() {
        document.removeEventListener("click", this.documentClick), window.removeEventListener("resize", this.windowResize, !1), "auto" === this.settings.openPosition && window.removeEventListener("scroll", this.windowScroll, !1), document.removeEventListener("visibilitychange", this.windowVisibilityChange), this.store.setData([]), this.render.destroy(), this.select.destroy();
      }
    }]);
    return _class;
  }();
});