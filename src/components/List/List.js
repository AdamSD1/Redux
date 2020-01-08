import React, { Component } from 'react'
import {Input, Button, List} from 'antd'
import store from '../../store/index'
import {CHANGE_INPUT, ADD_ITEM, DELETEITEM } from "../../store/actionType";
import { changeInputAction, addItemAction, deleteItemAction } from "../../store/action";
import './List.less'
export default class ListBox extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeValue = this.changeValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }
  storeChange(){
    this.setState(store.getState());
  }
  changeValue(e){
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  clickButton(e){
    const action = addItemAction(e.target.value)
    store.dispatch(action);
  }
  deleteItem(index) {
    const action = deleteItemAction(index);
    store.dispatch(action)
  }
  render() {
    return (
      <div className='listBox'>
        <div>
          <Input
            style={{width:250, marginRight: 10}}
            onChange = {this.changeValue}
            value={this.state.inputValue}
            />
          <Button 
            type='primary'
            onClick={this.clickButton}
          >新增</Button>
        </div>
        <div className='contentBox'>
          <List
          bordered
          dataSource = {this.state.list}
          renderItem = {(item,index)=>(<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
          />
        </div>
      </div>
    )
  }
}