import React from 'react';
import {connect} from 'react-redux';
import getDataUser from '../actions/getDataUser';
import CardInfo from './CardInfo'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class Repos extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      userShow: false
    }
    this.changeInput = this.changeInput.bind(this);
  }
  render () {
    return (
      <div>
        <section>
          <h1>Busca algun Usuario</h1>
          <Form>
            <Form.Group className="form-repo" controlId="formSearchUser">
              <Form.Control size="sm" type="text" onChange={this.changeInput} placeholder="Introduce el texto" />
            </Form.Group>
          </Form>
        </section>

        <section class="content-card">
          <CardInfo dataInfo={this.state} ></CardInfo>
        </section>

      </div>
    )
  };
  changeInput (e) {
    let params = e.target.value
    axios.get(`https://api.github.com/search/repositories?q=${params}`)
      .then(response => {
        this.setState({
          data: response.data.items,
          userShow: false
        })
      })
     .catch(err => {console.log('pokemon error', err);})
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getDataUser: repo => {
      dispatch(getDataUser(repo));
    }
  };
};
const mapStateToProps = state => {
  return {
    data: state.repo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);
