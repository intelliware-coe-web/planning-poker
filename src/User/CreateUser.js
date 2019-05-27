import React from 'react';

export default class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
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
        this.props.history.push('/meetings');      
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
}