import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';

import QueueAnim from 'rc-queue-anim';
var style = {
  'drawer': '_--css-module-js',
  'absolute': '_--css-module-js',
  'masklayer': '_--css-module-js',
  'container': '_--css-module-js',
  'head': '_--css-module-js',
  'title': '_--css-module-js',
  'close': '_--css-module-js',
  'body': '_--css-module-js',
  'foot': '_--css-module-js'
};

var Drawer = function (_PureComponent) {
  _inherits(Drawer, _PureComponent);

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _this.state = {
      visible: _this.props.visible,
      title: _this.props.title || '',
      footString: _this.props.footString || '',
      buttonLabel: _this.props.buttonLabel || ''
    };
    return _this;
  }

  _createClass(Drawer, [{
    key: 'fuckClick',
    value: function fuckClick(e) {
      e.stopPropagation();
      this.props.onCancel();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: style.drawer },
        React.createElement(
          QueueAnim,
          { key: 'drawer', type: ['right', 'right'], ease: ['easeOutQuart', 'easeInOutQuart'] },
          this.props.visible ? React.createElement(
            'div',
            { key: 'absolute', className: style.absolute },
            React.createElement('div', { className: style.masklayer, onClick: this.props.onCancel }),
            React.createElement(
              'div',
              { className: style.container },
              React.createElement(
                'div',
                { className: style.head },
                React.createElement(
                  'span',
                  { className: style.title },
                  this.state.title
                ),
                React.createElement(_Icon, { onClick: this.props.onCancel, className: style.close, type: 'cross' })
              ),
              React.createElement(
                'div',
                { className: style.body, style: { maxHeight: document.body.clientHeight - 80 } },
                this.props.children
              ),
              React.createElement(
                'div',
                { className: style.foot },
                this.state.footString
              )
            )
          ) : null
        )
      );
    }
  }]);

  return Drawer;
}(PureComponent);

export default Drawer;
module.exports = exports['default'];