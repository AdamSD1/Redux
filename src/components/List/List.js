import React, { Component } from 'react'
import {Input, Button, List} from 'antd'
import './List.css'
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['我是测试啊','我是测试二号啊','我是测试三号啊']
    }
  }
  render() {
    return (
      <div className='listBox'>
        <div>
          <Input placeholder='write' style={{width:250, marginRight: 10}}/>
          <Button type='primary'></Button>

        </div>
        <div className='contentBox'>
          <List></List>
        </div>
      </div>
    )
  }
}