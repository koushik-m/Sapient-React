import React from 'react';
import axios from 'axios';
import {Route, BrowserRouter,Link} from 'react-router-dom';
import UserDetails from './UserDetails'

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let thePromise = axios.get('https://api.github.com/users');
        thePromise.then(
            (response) => {
                this.setState({ data: response.data })
            },
            (err) => { }
        )
    }

    render() {
        var titles = this.state.data.map(c => <li><Link to={"/users/"+c.login}>{c.login}</Link></li>)
        return (
            <React.Fragment>
                <header><h1><center>Welcome</center></h1></header>
                <div className="container">
                    <h1>USERS</h1>

                    <ul>{titles}</ul>
                </div>



                <footer class="page-footer font-small blue pt-4">


                    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                    </div>


                </footer>
            </React.Fragment>

        )


    }
}



export default UserList;
