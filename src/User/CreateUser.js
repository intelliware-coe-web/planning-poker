import React from 'react';

export default class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
    }
    
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const body = {
         name: this.state.name
        }
        // API call here
        console.log(body);
        this.postData('http://localhost:9000/users', body)
            .then(this.props.history.push('/meetings'))
            .catch(error => console.log(error));            
     }

    render() {
        return (
            <div className="uk-flex uk-flex-center">
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                    <h1 className="uk-heading-small">Create New User</h1>                
                    <input placeholder="Name" className="uk-input uk-margin" 
                        value={this.state.name} 
                        onChange={e => this.handleChange(e)}></input>
                    <button className="uk-button uk-button-primary"
                        onClick={(e) => this.onSubmit(e)}>CREATE</button>
                </div>
            </div>
        );
    }
    
    postData = (url = '', data = {}) => {
        // Default options are marked with *
        return fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('HTTP status ' + response.status);
            }
            return response.json();
        })
    }
}