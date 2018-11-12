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
        console.log(API)
        fetch(API + DEFAULT_QUERY,{
            method: 'GET', 
        })
            .then(response => {
                if(response.ok){
                    return response.json();

                }else {
                    return response.json();
                }

            })
            .then(data => {
                console.log(data);
                this.setState({ hits: data.response, isLoading: false })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }
    render() {
       
        const { hits, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            
            <div>
                
                <div className="row">
                    {hits.map(hit =>
                        <div className="col s12 m6" key={hit.carro}>
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{hit.marca}</span>
                                    <p> 
                                       {hit.linea}
                                    </p>
                                    <p>
                                        {hit.modelo}
                                    </p>
                                    <p>
                                        {hit.descripcion}
                                    </p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        );

    }
}

export default Car;
