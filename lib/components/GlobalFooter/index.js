import React from 'react';
import classNames from 'classnames';
var styles = {
  'globalFooter': '_--css-module-js',
  'links': '_--css-module-js',
  'copyright': '_--css-module-js'
};


export default (function (_ref) {
  var className = _ref.className,
      links = _ref.links,
      copyright = _ref.copyright;

  var clsString = classNames(styles.globalFooter, className);
  return React.createElement(
    'div',
    { className: clsString },
    links && React.createElement(
      'div',
      { className: styles.links },
      links.map(function (link) {
        return React.createElement(
          'a',
          {
            key: link.key,
            target: link.blankTarget ? '_blank' : '_self',
            href: link.href
          },
          link.title
        );
      })
    ),
    copyright && React.createElement(
      'div',
      { className: styles.copyright },
      copyright
    )
  );
});
module.exports = exports['default'];