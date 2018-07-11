import React, { Component } from 'react'

// 新增属性
const commonProps = {
  "interest": "看书"
}

export default newProps => WrappedComponent => class componentName extends Component {
  render() {
    const { age, ...others } = this.props
    return <WrappedComponent {...others} {...commonProps} {...newProps} />
  }
}