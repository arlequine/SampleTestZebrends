import React from 'react';
import {connect} from 'react-redux';
import getDataUser from '../actions/getDataUser';
import CardInfo from './CardInfo'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class Users extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      userShow: true
    }
    this.changeInput = this.changeInput.bind(this);
  }
  render () {
    return (
      <div>
        <section>
          <h1>Busca algun Usuario</h1>
          <Form>
            <Form.Group className="form-user" controlId="formSearchUser">
              <Form.Control size="sm" type="text" onChange={this.changeInput} placeholder="Introduce el texto" />
            </Form.Group>
          </Form>
        </section>

        <section>
          <CardInfo dataInfo={this.state} ></CardInfo>
        </section>

      </div>
    )
  };
  changeInput (e) {
    let params = e.target.value
    axios.get(`https://api.github.com/users/${params}`)
      .then(response => {
        this.setState({
          data: [response.data],
          userShow: true
        })
      })
     .catch(err => {console.log('pokemon error', err);})
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getDataUser: user => {
      dispatch(getDataUser(user));
    }
  };
};
const mapStateToProps = state => {
  return {
    data: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
