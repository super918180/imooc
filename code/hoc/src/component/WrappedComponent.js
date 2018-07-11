import React, { Component } from 'react'
import withHeader from './withHeader'

class WrappedComponent extends Component {
  render() {
    return (
      <div>
        我是一个普通组件
      </div>
    )
  }
}

export default withHeader('首页')(WrappedComponent)

// @withHeader("头部")
// export default class WrappedComponent extends Component {
//   render() {
//     return (
//       <div>
//         我是一个普通组件
//       </div>
//     )
//   }
// }