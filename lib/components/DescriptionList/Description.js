import 'antd/lib/col/style';
import _Col from 'antd/lib/col';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var styles = {
  'descriptionList': '_--css-module-js',
  'ant-row': '_--css-module-js',
  'title': '_--css-module-js',
  'term': '_--css-module-js',
  'detail': '_--css-module-js',
  'small': '_--css-module-js',
  'large': '_--css-module-js',
  'vertical': '_--css-module-js'
};

import responsive from './responsive';

var Description = function Description(_ref) {
  var term = _ref.term,
      column = _ref.column,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['term', 'column', 'className', 'children']);

  var clsString = classNames(styles.description, className);
  var initValue = restProps.initValue;
  var formItem = restProps.formItem;
  if (restProps.modalType === 'create') {
    if (restProps.newData['initData']) {
      formItem = restProps.newData['initData'];
    }
  }

  if (initValue === undefined && formItem) {
    //从item中取
    initValue = formItem[restProps.value];
  }

  var newProps = restProps;
  delete newProps.formItem;
  delete newProps.typeOpts;
  return React.createElement(
    _Col,
    _extends({ className: clsString }, responsive[column], restProps),
    term && React.createElement(
      'div',
      { className: styles.term },
      term
    ),
    children ? React.createElement(
      'div',
      { className: styles.detail },
      children
    ) : React.createElement(
      'div',
      { className: styles.detail },
      initValue
    )
  );
};

Description.defaultProps = {
  term: '',
  children: ''
};

Description.propTypes = {
  term: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default Description;