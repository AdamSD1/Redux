import {CHANGE_INPUT, ADD_ITEM, DELETEITEM } from "./actionType";
const defaultState = {
  inputValue : 'write',
  list: ['我是测试啊','我是测试二号啊','我是测试三号啊']
}
export default (state = defaultState, action)=>{
  // reducer只能接受state,而不能改变state
  if(action.type === CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    console.log(action.value)
    return newState;
  }
  if(action.type === ADD_ITEM){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETEITEM){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(newState.index, 1);
    return newState;
  }
  return state;
}