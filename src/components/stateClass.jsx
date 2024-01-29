import React, { Component } from 'react'

export default class stateClass extends Component {

    constructor(){
        super()
        this.state={
            list: [
                {
                  id: 1,
                  task: 'Create tasks',
                  completed: false,
                },
                {
                  id: 2,
                  task: 'Read tasks',
                  completed: false,
                },
                {
                  id: 3,
                  task: 'Mark complete',
                  completed: false,
                },
                {
                  id: 4,
                  task: 'Delete tasks',
                  completed: false,
                },
              ],

        }
    }
  render() {
    return (
      <div>

        <h1>{this.state.list.task}</h1>
       
      </div>
    )
  }
}
