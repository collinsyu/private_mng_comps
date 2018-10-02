Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTweenOne = require('rc-tween-one');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnimTableBody = function AnimTableBody(_ref) {
  var body = _ref.body,
      _ref$page = _ref.page,
      page = _ref$page === undefined ? 1 : _ref$page,
      current = _ref.current;

  if (current !== +page) {
    console.log('=========================================');
    return body;
  }
  function onEnd(e) {
    var dom = e.target;
    dom.style.height = 'auto';
  }

  var enterAnim = [{
    opacity: 0,
    x: 30,
    backgroundColor: '#fffeee',
    duration: 0
  }, {
    height: 0,
    duration: 200,
    type: 'from',
    delay: 250,
    ease: 'easeOutQuad',
    onComplete: onEnd
  }, {
    opacity: 1,
    x: 0,
    duration: 250,
    ease: 'easeOutQuad'
  }, {
    delay: 1000,
    backgroundColor: '#fff'
  }];
  var leaveAnim = [{
    duration: 250,
    opacity: 0
  }, {
    height: 0,
    duration: 200,
    ease: 'easeOutQuad'
  }];

  return _react2.default.createElement(
    _rcTweenOne.TweenOneGroup,
    { component: 'tbody', className: body.props.className, enter: enterAnim, leave: leaveAnim, appear: false },
    body.props.children
  );
};

AnimTableBody.propTypes = {
  body: _propTypes2.default.element,
  page: _propTypes2.default.any,
  current: _propTypes2.default.number.isRequired
};

exports.default = AnimTableBody;
module.exports = exports['default'];