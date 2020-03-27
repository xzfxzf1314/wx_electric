"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _eventsMixin = _interopRequireDefault(require("../helpers/eventsMixin"));

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance")
}

function _iterableToArray(e) {
  if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
}

function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
    return n
  }
}

function ownKeys(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {};
    e % 2 ? ownKeys(n, !0).forEach(function(e) {
      _defineProperty(t, e, n[e])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    })
  }
  return t
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function getOptions() {
  return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).map(function(e, t) {
    return "string" == typeof e ? {
      title: e,
      value: e,
      index: t
    } : _objectSpread({}, e, {
      index: t
    })
  })
}

function getCheckedValues(t) {
  var e = _toConsumableArray(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []);
  return e = -1 !== e.indexOf(t) ? e.filter(function(e) {
    return e !== t
  }) : [].concat(_toConsumableArray(e), [t])
}(0, _baseComponent.default)({
  useField: !0,
  behaviors: [(0, _eventsMixin.default)()],
  relations: {
    "../field/index": {
      type: "ancestor"
    },
    "../checkbox/index": {
      type: "descendant",
      observer: function() {
        this.debounce(this.changeValue)
      }
    }
  },
  properties: {
    prefixCls: {
      type: String,
      value: "wux-checkbox-group"
    },
    cellGroupPrefixCls: {
      type: String,
      value: "wux-cell-group"
    },
    value: {
      type: Array,
      value: []
    },
    title: {
      type: String,
      value: ""
    },
    label: {
      type: String,
      value: ""
    },
    options: {
      type: Array,
      value: []
    }
  },
  data: {
    inputValue: [],
    keys: []
  },
  observers: {
    value: function(e) {
      this.hasFieldDecorator || (this.updated(e), this.changeValue(e))
    },
    inputValue: function(e) {
      this.hasFieldDecorator && this.changeValue(e)
    },
    options: function(e) {
      this.changeValue(this.data.inputValue, e)
    }
  },
  methods: {
    updated: function(e) {
      this.data.inputValue !== e && this.setData({
        inputValue: e
      })
    },
    changeValue: function(e, t) {
      var n = 0 < arguments.length && void 0 !== e ? e : this.data.inputValue,
        r = getOptions(1 < arguments.length && void 0 !== t ? t : this.data.options),
        a = this.getRelationNodes("../checkbox/index"),
        i = 0 < r.length ? r : a ? a.map(function(e) {
          return e.data
        }) : [];
      !r.length && a && 0 < a.length && a.forEach(function(e, t) {
        e.changeValue(Array.isArray(n) && n.includes(e.data.value), t)
      }), this.data.keys !== i && this.setData({
        keys: i
      })
    },
    onChange: function(e) {
      var t = getCheckedValues(e.value, this.data.inputValue);
      this.hasFieldDecorator && (e.value = t), this.triggerEvent("change", _objectSpread({}, this.getValue(t), {}, e, {
        name: this.data.name,
        value: e.value
      }))
    },
    onCheckboxChange: function(e) {
      var t = e.currentTarget.dataset.index;
      this.onChange(_objectSpread({}, e.detail, {
        index: t
      }))
    },
    getValue: function(e, t) {
      var n = 0 < arguments.length && void 0 !== e ? e : this.data.inputValue,
        r = 1 < arguments.length && void 0 !== t ? t : this.data.keys,
        a = r.filter(function(e) {
          return n.includes(e.value)
        }).map(function(e) {
          return e.title
        }) || [],
        i = r.map(function(e) {
          return e.value
        }),
        o = n.map(function(e) {
          return i.indexOf(e)
        });
      return {
        value: n,
        displayValue: a,
        selectedIndex: o,
        selectedValue: n,
        cols: r
      }
    },
    getBoundingClientRect: function(e) {
      return this.cellGroup = this.cellGroup || this.selectComponent("#wux-cell-group"), this.cellGroup && this.cellGroup.getBoundingClientRect(e)
    }
  }
});