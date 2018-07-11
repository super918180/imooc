import React, { Component } from 'react'

// function withHeader(WrapComponent) {
//   return class HOC extends Component {
//     render() {
//       return (
//         <div>
//           <h1>公共头部</h1>
//           <WrapComponent />
//           <h1>公共底部</h1>
//         </div>
//       )
//     }
//   }
// }

// export default withHeader

export default title => WrapComponent => class HOC extends Component {
  render() {
    return (
      <div>
        <h1>{title}-公共头部</h1>
        <WrapComponent />
        <h1>{title}-公共底部</h1>
      </div>
    )
  }
}
