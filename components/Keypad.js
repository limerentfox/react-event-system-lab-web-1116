const React = require('react')

class Keypad extends React.Component {
  constructor() {
    super()
  }

  handleKeyUp(event){
    console.log("Entering password...")
  }

  render() {
    return (
    <div>
      <input type="password" onKeyUp={this.handleKeyUp} />
    </div>)
  }
}



module.exports = Keypad
