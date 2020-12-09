import React from 'react'
import hover from '../images/hover.png'
import fcc from '../images/fcc.png'

class MouseOver extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       imgSrc: hover
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: fcc
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: hover
    });
  }

  render() {
    return (
      <div>
        <a href="https://www.freecodecamp.org/certification/carlodefilippis/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer"><img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} alt="Free Code Camp Certificate"/></a>
      </div>
    );
  }

}

MouseOver.propTypes = {
}

MouseOver.defaultProps = {
}

export default MouseOver;