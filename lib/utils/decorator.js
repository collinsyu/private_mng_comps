Object.defineProperty(exports, "__esModule", {
   value: true
});
exports._pagination = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _React = require("React");

var _React2 = _interopRequireDefault(_React);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// export function _pagination(target){
//     console.log(target)
// }

var _pagination = exports._pagination = function _pagination() {
   return function (WrappedComponent) {
      return function (_React$Component) {
         _inherits(_class, _React$Component);

         function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
         }

         _createClass(_class, [{
            key: "render",
            value: function render() {
               this.props.pagination.showTotal = function (total, range) {
                  return range[0] + "-" + range[1] + "\u6761 \u5171 " + total + " \u6761";
               };
               this.props.pagination.showSizeChanger = true;
               this.props.pagination.pageSizeOptions = ["10", "20", "50", "100", "200"];

               return _React2.default.createElement(WrappedComponent, this.props);
            }
         }]);

         return _class;
      }(_React2.default.Component);
   };
};