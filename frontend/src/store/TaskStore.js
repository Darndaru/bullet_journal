import {makeAutoObservable} from "mobx";

export default class TaskStore {
  constructor() {
    this._types = [
      {id: 1, name: 'task'},
      {id: 2, name: 'event'},
      {id: 3, name: 'note'}
    ]
    this._actions = [
      {id: 1, name: 'clean the room'},
      {id: 2, name: 'do homework'},
      {id: 3, name: 'cook a pie'}
    ]
    this._dates = [
      {id: 1, name: '01.08.2023'},
      {id: 2, name: '02.08.2023'},
      {id: 3, name: '03.08.2023'}
    ]
    makeAutoObservable(this)
  }

  setTypes(type) {
    this._types = type
  }
  setActions(action) {
    this._actions = action
  }
  setDate(date) {
    this._dates = date
  }

  get types() {
    return this._types
  }
  get actions() {
    return this._actions
  }
  get dates() {
    return this._dates
  }
}