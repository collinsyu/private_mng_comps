import React from 'react';
import PropTypes from 'prop-types';
import {getAuth} from '../tool';

function WrapAuth(WrappedComponent) {
  return class extends React.Component {
    static propTypes = {
      auth: PropTypes.string.isRequired
    };

    render() {
      let allprops = JSON.parse(JSON.stringify(this.props));
      delete allprops.auth;
      // 如果没有权限，需要不同的提示方式
      if (getAuth(this.props.auth)) {
        return <WrappedComponent { ...allprops}/>;
      } else {
        return null;
      }
    }
  }
}

export default WrapAuth;
