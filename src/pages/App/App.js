import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import * as vhsAPI from '../../services/vhs-api';
import * as userAPI from '../../services/user-api';
import NavBar from '../../components/NavBar/NavBar';
import AddVhsPage from '../../pages/AddVhsPage/AddVhsPage';
import VhsListPage from '../VhsListPage/VhsListPage';
import EditVhsPage from '../EditVhsPage/EditVhsPage';

class App extends Component {
  state = {
    // Initialize user if there's a token, otherwise null
    user: userAPI.getUser(),
    vhss: []
  };

  /*--------------------------- Callback Methods ---------------------------*/

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  }

  handleAddVhs = async newVhsData => {
    const newVhs = await vhsAPI.create(newVhsData);
    this.setState(state => ({
      vhss: [...state.vhss, newVhs]
    }), () => this.props.history.push('/allvhs'));
  }

  

  /*-------------------------- Lifecycle Methods ---------------------------*/

  async componentDidMount() {
    const vhss = await vhsAPI.index();
    this.setState({ vhss });
  }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <h1>Welcome to Vhs</h1>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/allvhs' render={() => 
            userAPI.getUser() ? 
              <VhsListPage />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/add' render={() =>
            <AddVhsPage 
              handleAddVhs = {this.handleAddVhs}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
