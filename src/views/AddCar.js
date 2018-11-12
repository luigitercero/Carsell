import React, { Component } from 'react';

import { API } from '../Api'
const DEFAULT_QUERY = "/createcar"

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputvalue: '',
            line: '',
            model: '',
            description: '',
            marca: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

   

    handleSubmit(event) {
        console.log('Form line: ' + this.state.line);
        console.log('Form model: ' + this.state.model);
        console.log('Form description: ' + this.state.description);
        console.log('Form marca: ' + this.state.marca);
        if (this.state.line != '' && this.state.model != '' && this.state.description != '' && this.state.marca != '' ){
        fetch(API+DEFAULT_QUERY, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                line: this.state.line + "",
                model: this.state.model + "",
                description: this.state.description+ "",
                marca: this.state.marca + "" })
        });}
        else {

            console.log("hay que llenar los campo")
        }
        event.preventDefault();
    }

    render() {
        return (

            <div className="col s5 offset-s3 z-depth-6 card-panel">
                <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <label>Linea</label>
                        <div className="input-field col s12">
                            <input type="text" value={this.state.line} 
                                    onChange={(event, newValue) => this.setState({ line: event.target.value  })}
                            />
                            
                        </div>
                    </div>
                    <div className="row">
                        <label>model</label>
                        <div className="input-field col s12">
                            <input type="text" value={this.state.model} 
                                    onChange={(event, newValue) => this.setState({ model: event.target.value })}
                            />
                     
                        </div>
                    </div>   
                    <div className="row">
                        <label>Decription</label>
                        <div className="input-field col s12">
                            <input type="text" value={this.state.description}
                                    onChange={(event, newValue) => this.setState({ description: event.target.value })}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <label>Marca</label>
                        <div className="input-field col s12">
                                <input type="text" value={this.state.marca}
                                    onChange={(event, newValue) => this.setState({ marca: event.target.value })}
                            />
                        </div>
                    </div>  
                        
                    <input type="submit" value="Submit" />
                </form>
                </div>
            </div>
        );
    }
}

export default Add;
