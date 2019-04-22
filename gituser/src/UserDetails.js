import React from 'react';
import axios from 'axios';


class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: props.match.params.login,
            details: []
        }
    }
    componentDidMount() {
        let thePromise = axios.get('https://api.github.com/users/'+this.state.login);
        thePromise.then(
            (response) => {
                this.setState({ details: response.data })
            },
            (err) => { }
        )
    }

    render() {
        return <div className="jumbotron"><h1>{this.state.details.name}({this.state.details.login})</h1>
        
        <img src={this.state.details.avatar_url}/>
       
    </div>
    }
}

export default UserDetails;

