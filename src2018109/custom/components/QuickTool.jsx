import React from 'react';
import {message,Popconfirm} from 'antd';
import {patch} from '../../utils/request';
import AuthA from './AuthA';
/**
 * 快捷操作工具，删除，冻结等场景，主要是单向与服务器交互
 * 无状态组件下无this，请注意使用
 *
 */
const QuickTool = (props) => {
    const {auth,text,field,value,path, params} = props;

    function handleClick(){

      patch(path, params).then((data)=>{
        if (data && data.data && data.data.success) {
          message.info('操作成功');
          if(props.callbak) {
            props.callbak();
          }
        } else {
          console.log(data);
        }
      });

    };

    // 如果没有权限，需要不同的提示方式
    return (
      <div>
        {field === value?
          <Popconfirm title={`确定要${text}吗？`} onConfirm={() => handleClick()}>
           <AuthA auth={auth} >{text}</AuthA>
          </Popconfirm>
          :""}
      </div>

    )
};

export default QuickTool;
