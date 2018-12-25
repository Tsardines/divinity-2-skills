import React, { Component } from 'react';

import './Skills.css';

class Aero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    fetch('https://api.myjson.com/bins/1g1ags')
    .then(res => res.json())
    .then(data => {
      this.setState({ items: data });
    });
  }

  render() {

    const { items } = this.state;
    
    return (
      <div className="Aero">

        { items.map((item, num) => {

          return (

            <div className="aero-wrap">

              <tg>
                
                <th><div className="skill-name">
                  <p key={num}>{item.name}</p>
                </div></th>
                
                <th><div className="skill-desc">
                  <p key={num}>{item.desc}</p>
                </div></th>

                <th><div className="skill-spec">
                  <p key={num}>{item.special}</p>
                </div></th>

                <th><div className="skill-cost">
                  <p key={num}>{item.cost}</p>
                </div></th>

                <th><div className="skill-cool">
                  <p key={num}>{item.cool} turns</p>
                </div></th>

              </tg>

              {/* <div className="skill-req">
                <p key={num}>{item.req}[1]</p>
              </div> */}
                
            </div>
          );
        })}
        </div>
    );
  }
}

export default Aero;

