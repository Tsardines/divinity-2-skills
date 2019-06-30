import React, {Component} from 'react';
import './SearchBar.css';

import SearchResults from 'react-filter-search';

class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
          data: [],
          value: ''
      };
    }

    componentWillMount() {
      fetch('https://api.myjson.com/bins/pksng')
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
    }

    handleChange = event => {
      const { value } = event.target;
      this.setState({ value });
    };

    render() {
        const { data, value } = this.state;

        return (
            <div className="skills-wrapper">
              <input type="text" placeholder="skills, categories, keywords" value={value} onChange={this.handleChange} />

                <SearchResults
                    value={value}
                    data={data}
                    renderResults={results => (
                      <div class="all-skills-wrap">
                        {results.map(el => (
                          <div className="skill-section">
                              <table>
                                <tr>
                                  <span className="td-name"><td><i>{el.name}</i></td></span>
                                      <br />
                                  <span className="td-desc"><td>{el.desc}</td></span>
                                      <br />  
                                  <span className="td-cat"><td>{el.cat}</td></span>
                                  <span><td><strong>Memory:</strong> {el.cost} AP</td></span>
                                  <span><td><strong>Cooldown:</strong> {el.cool}</td></span>
                                  <span><td><strong>Requires:</strong> {el.req}</td></span>
                                </tr>
                              </table>
                          </div>
                        ))}
                      </div>
                    )}
                />

            </div>  
        );
    };
}

export default SearchBar;