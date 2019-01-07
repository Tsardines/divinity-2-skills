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
                                <div>
                                    <table>
                                        <tr>
                                            <td>{el.name}&nbsp;</td>
                                                <br />
                                            <td>{el.desc}</td>
                                                <br />
                                            <td>{el.cost} AP</td>
                                                <br />
                                            <td>{el.cool}</td>
                                                <br />
                                            <td>{el.req}</td>
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