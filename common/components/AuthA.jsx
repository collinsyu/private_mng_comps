import React from 'react';
import {getAuth} from '../tool';

const AuthA = (props) => {

    let allprops = {
      ...props
    };
    delete allprops.auth;
    // 如果没有权限，需要不同的提示方式
    if (getAuth(props.auth)) {
      return <a { ...allprops}/>;
    } else {
      return null;
    }
};

export default AuthA;
