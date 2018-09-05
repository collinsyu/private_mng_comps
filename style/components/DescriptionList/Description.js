import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Col } from 'antd';
import styles from './index.less';
import responsive from './responsive';

const Description = ({ term, column, className, children, ...restProps }) => {
  const clsString = classNames(styles.description, className);
  let initValue = restProps.initValue;
  let formItem = restProps.formItem;
  if (restProps.modalType === 'create') {
    if (restProps.newData['initData']) {
      formItem = restProps.newData['initData'];
    }
  }

  if(initValue === undefined && formItem) {
    //从item中取
    initValue = formItem[restProps.value];
  }

  let newProps = restProps;
  delete newProps.formItem;
  delete newProps.typeOpts;
  return (
    <Col className={clsString} {...responsive[column]} {...restProps}>
      {term && <div className={styles.term}>{term}</div>}
      {children ? <div className={styles.detail}>{children}</div>:<div className={styles.detail}>{initValue}</div>}
    </Col>
  );
};

Description.defaultProps = {
  term: '',
  children: '',
};

Description.propTypes = {
  term: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Description;
