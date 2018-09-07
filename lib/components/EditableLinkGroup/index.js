import 'antd/lib/button/style';
import _Button from 'antd/lib/button';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
var styles = {
  'linkGroup': '_--css-module-js'
};

// TODO: 添加逻辑

var EditableLinkGroup = (_temp = _class = function (_PureComponent) {
  _inherits(EditableLinkGroup, _PureComponent);

  function EditableLinkGroup() {
    _classCallCheck(this, EditableLinkGroup);

    return _possibleConstructorReturn(this, (EditableLinkGroup.__proto__ || Object.getPrototypeOf(EditableLinkGroup)).apply(this, arguments));
  }

  _createClass(EditableLinkGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          links = _props.links,
          linkElement = _props.linkElement,
          onAdd = _props.onAdd;

      return React.createElement(
        'div',
        { className: styles.linkGroup },
        links.map(function (link) {
          return createElement(linkElement, {
            key: 'linkGroup-item-' + (link.id || link.title),
            to: link.href,
            href: link.href
          }, link.title);
        }),
        React.createElement(
          _Button,
          { size: 'small', type: 'primary', ghost: true, onClick: onAdd, icon: 'plus' },
          '\u6DFB\u52A0'
        )
      );
    }
  }]);

  return EditableLinkGroup;
}(PureComponent), _class.defaultProps = {
  links: [],
  onAdd: function onAdd() {},
  linkElement: 'a'
}, _class.propTypes = {
  links: PropTypes.array,
  onAdd: PropTypes.func,
  linkElement: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}, _temp);


export default EditableLinkGroup;