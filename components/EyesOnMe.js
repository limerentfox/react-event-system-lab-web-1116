const React = require('react')

class EyesOnMe extends React.Component {
  constructor() {
    super()
  }
  handleonFocus(event){
    console.log("Good!")
  }

  handleonBlur(event){
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
    <div>
      <button onFocus={this.handleonFocus} onBlur={this.handleonBlur}></button>
    </div>)
  }
}



module.exports = EyesOnMe
