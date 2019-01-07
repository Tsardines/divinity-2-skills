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
        fetch('https://api.myjson.com/bins/1bd9xk')
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
            <div>
                <input type="text" value={value} onChange={this.handleChange} />

                <SearchResults
                    value={value}
                    data={data}
                    renderResults={results => (
                        <div>
                            {results.map(el => (
                                <div className="skill-section">
                                <table>
                                    <tr>
                                        <span className="td-cat"><td>{el.cat}</td></span>
                                        <span><td>{el.name}</td></span>
                                        <span className="td-desc"><td>{el.desc}</td></span>
                                        <span><td>Cost: {el.cost} AP</td></span>
                                        <span><td>Cooldown: {el.cool}</td></span>
                                        <span><td>Requires: {el.req}</td></span>
                                    </tr>
                                </table>
                                    {/* <span>{el.name}&nbsp;</span>
                                    <span>{el.desc}&nbsp;</span>
                                    <span>{el.cost}&nbsp;</span>
                                    <span>{el.cool}&nbsp;</span>
                                    <span>{el.req}&nbsp;</span> */}
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