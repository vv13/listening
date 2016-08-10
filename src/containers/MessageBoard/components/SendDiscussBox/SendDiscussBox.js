
import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { Input, Button } from 'antd';

// TODO 如何以更好的方式来进行动态的样式加载
class SendDiscussBox extends Component {
  static propTypes = {
    isReply: PropTypes.bool,
  };
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const isReply = this.props.isReply;
    const replyBtnStyle = {
      top: '3px',
      right: '-56px',
    };
    const replyHeadStyle = {
      width: '35px',
      height: '35px',
      position: 'relative',
      top: '-5px',
    };
    return (
      <div
        className={style.postBox}
      >
        <div className={style.postBoxLeft}>
          <a href="/img/default_head.png" className={style.userHeadUrl}>
            {isReply ? <img alt="userhead" style={replyHeadStyle} src="/img/default_head.png" className={style.userHead} /> : <img alt="userhead" src="/img/default_head.png" className={style.userHead} />}
          </a>
        </div>
        <div className={style.textWrap}>
          <Input placeholder="您想评论一点什么呢.." type="textarea" rows={this.props.isReply ? 1 : 3} />
          {isReply ? <Button className={style.discussBtn} type="primary" size="small" style={replyBtnStyle}>评论</Button> : <Button className={style.discussBtn} type="primary" size="large">评论</Button>}
        </div>
      </div>
    );
  }
}

export default SendDiscussBox;