import React, { Component } from 'react';

// import './Aero.css';

class Aero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    fetch('https://api.jsonbin.io/b/5c1d4f643f8bd92e4cc0ceef/1')
    .then(res => res.json())
    .then(data => {
      this.setState({ items: data });
    });
  }

  render() {

    const { items } = this.state;
    
    return (
      <div className="Aero">

      <span className="lorem"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto dolorum praesentium provident, earum pariatur quae esse fugit numquam in vero eos cum? Qui quia magni veniam. Dolore, autem velit.</p></span>

        { items.map((item, num) => {

          return (

            <div className="aero-wrap">

            <div className="skill-name">
              <p key={num}>{item.name}</p>
            </div>

            </div>

          );
        })}
      </div>
    );
  }
}

export default Aero;

