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
        fetch('https://api.myjson.com/bins/i4w4o')
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
                                    <span>{el.name}</span>
                                    <span>{el.desc}</span>
                                    <span>{el.cost}</span>
                                    <span>{el.cool}</span>
                                    <span>{el.req}</span>
                                    <br />
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