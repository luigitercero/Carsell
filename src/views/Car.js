import React, { Component } from 'react';
import{ API } from '../Api'
const DEFAULT_QUERY = "/cars"
class Car extends Component {

    constructor(props) {
        super(props);
        this.state ={
            hits:[],
            isLoading: false,
            error: null,

        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(API + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => this.setState({ hits: data.hits, isLoading: false }))
            .catch (error => this.setState({ error, isLoading: false }));
    }
    render() {
        const { hits, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <ul>
                {hits.map(hit =>
                    <li key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                    </li>
                )}
            </ul>
        );

    }
}

export default Car;
