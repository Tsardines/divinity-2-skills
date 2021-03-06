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
      this.setState ({ items: data });
    });
  }


  render() {

    const { items } = this.state;

    return (

      <div className="App">

      <span className="our-people"><h1>Our People</h1></span>
      <span className="intro"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ipsa animi ducimus repudiandae facilis totam ipsam tenetur libero recusandae nostrum similique optio, explicabo illo veniam alias.</p></span>

      { items.map((item, num) => {

        return (

          <div className="aero-wrap">

            <p key={num}>{item.req}</p>
          
          </div>

        );
      })}
      </div>
    );
  }
}

export default Aero;

