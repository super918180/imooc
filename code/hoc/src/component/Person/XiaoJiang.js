import React, { Component } from 'react'
import person from './person'

@person()
export default class XiaoJiang extends Component {
  render() {
    return (
      <div>
        大家好我是{this.props.name}
        <br />
        我今年{this.props.age}
        <br />
        我的身高是{this.props.height}
        <br />
        我的爱好是{this.props.interest}
      </div>
    )
  }
}
