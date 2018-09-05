var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import CheckPermissions from './CheckPermissions';

var Authorized = function (_React$Component) {
  _inherits(Authorized, _React$Component);

  function Authorized() {
    _classCallCheck(this, Authorized);

    return _possibleConstructorReturn(this, (Authorized.__proto__ || Object.getPrototypeOf(Authorized)).apply(this, arguments));
  }

  _createClass(Authorized, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          authority = _props.authority,
          _props$noMatch = _props.noMatch,
          noMatch = _props$noMatch === undefined ? null : _props$noMatch;

      var childrenRender = typeof children === 'undefined' ? null : children;
      return CheckPermissions(authority, childrenRender, noMatch);
    }
  }]);

  return Authorized;
}(React.Component);

export default Authorized;