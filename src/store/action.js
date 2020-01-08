import {CHANGE_INPUT, ADD_ITEM, DELETEITEM } from "./actionType";
export const changeInputAction = (value)=>({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = (value)=>({
  type: ADD_ITEM,
  value
})
export const deleteItemAction = (index)=>({
  type: DELETEITEM,
  index
})