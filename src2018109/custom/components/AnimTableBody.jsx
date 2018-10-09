import React from 'react'
import PropTypes from 'prop-types'
import {TweenOneGroup} from 'rc-tween-one'

const AnimTableBody = ({
  body,
  page = 1,
  current
}) => {
  if (current !== + page) {
    console.log('=========================================');
    return body
  }
  function onEnd(e) {
    const dom = e.target;
    dom.style.height = 'auto';
  }

  const enterAnim = [
    {
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
    }
  ];
  const leaveAnim = [
    {
      duration: 250,
      opacity: 0
    }, {
      height: 0,
      duration: 200,
      ease: 'easeOutQuad'
    }
  ];

  return (
    <TweenOneGroup component="tbody" className={body.props.className} enter={enterAnim} leave={leaveAnim} appear={false}>
      {body.props.children}
    </TweenOneGroup>
  )
}

AnimTableBody.propTypes = {
  body: PropTypes.element,
  page: PropTypes.any,
  current: PropTypes.number.isRequired
}

export default AnimTableBody
