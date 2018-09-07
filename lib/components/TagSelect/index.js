import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/tag/style';
import _Tag from 'antd/lib/tag';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import classNames from 'classnames';
var styles = {
  'tagSelect': '_--css-module-js',
  'ant-tag': '_--css-module-js',
  'expanded': '_--css-module-js',
  'trigger': '_--css-module-js',
  'hasExpandTag': '_--css-module-js'
};
var CheckableTag = _Tag.CheckableTag;


var TagSelectOption = function TagSelectOption(_ref) {
  var children = _ref.children,
      checked = _ref.checked,
      _onChange = _ref.onChange,
      value = _ref.value;
  return React.createElement(
    CheckableTag,
    {
      checked: checked,
      key: value,
      onChange: function onChange(state) {
        return _onChange(value, state);
      }
    },
    children
  );
};

TagSelectOption.isTagSelectOption = true;

var TagSelect = function (_Component) {
  _inherits(TagSelect, _Component);

  function TagSelect() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, TagSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = TagSelect.__proto__ || Object.getPrototypeOf(TagSelect)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      expand: false,
      checkedTags: _this.props.defaultValue || []
    }, _this.onSelectAll = function (checked) {
      var onChange = _this.props.onChange;

      var checkedTags = [];
      if (checked) {
        checkedTags = _this.getAllTags();
      }

      _this.setState({ checkedTags: checkedTags });

      if (onChange) {
        onChange(checkedTags);
      }
    }, _this.handleTagChange = function (value, checked) {
      var onChange = _this.props.onChange;
      var checkedTags = _this.state.checkedTags;


      var index = checkedTags.indexOf(value);
      if (checked && index === -1) {
        checkedTags.push(value);
      } else if (!checked && index > -1) {
        checkedTags.splice(index, 1);
      }

      _this.setState({ checkedTags: checkedTags });

      if (onChange) {
        onChange(checkedTags);
      }
    }, _this.handleExpand = function () {
      _this.setState({
        expand: !_this.state.expand
      });
    }, _this.isTagSelectOption = function (node) {
      return node && node.type && (node.type.isTagSelectOption || node.type.displayName === 'TagSelectOption');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TagSelect, [{
    key: 'getAllTags',
    value: function getAllTags() {
      var _this2 = this;

      var children = this.props.children;

      children = React.Children.toArray(children);
      var checkedTags = children.filter(function (child) {
        return _this2.isTagSelectOption(child);
      }).map(function (child) {
        return child.props.value;
      });
      return checkedTags;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this3 = this;

      var _state = this.state,
          checkedTags = _state.checkedTags,
          expand = _state.expand;
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          style = _props.style,
          expandable = _props.expandable;


      var checkedAll = this.getAllTags().length === checkedTags.length;

      var cls = classNames(styles.tagSelect, className, (_classNames = {}, _defineProperty(_classNames, styles.hasExpandTag, expandable), _defineProperty(_classNames, styles.expanded, expand), _classNames));
      return React.createElement(
        'div',
        { className: cls, style: style },
        React.createElement(
          CheckableTag,
          {
            checked: checkedAll,
            key: 'tag-select-__all__',
            onChange: this.onSelectAll
          },
          '\u5168\u90E8'
        ),
        checkedTags && React.Children.map(children, function (child) {
          if (_this3.isTagSelectOption(child)) {
            return React.cloneElement(child, {
              key: 'tag-select-' + child.props.value,
              checked: checkedTags.indexOf(child.props.value) > -1,
              onChange: _this3.handleTagChange
            });
          }
          return child;
        }),
        expandable && React.createElement(
          'a',
          { className: styles.trigger, onClick: this.handleExpand },
          expand ? '收起' : '展开',
          ' ',
          React.createElement(_Icon, { type: expand ? 'up' : 'down' })
        )
      );
    }
  }]);

  return TagSelect;
}(Component);

TagSelect.Option = TagSelectOption;

export default TagSelect;
module.exports = exports['default'];