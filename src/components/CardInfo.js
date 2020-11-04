import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './cardInfo.scss'

class CardInfo extends React.Component {
  constructor (props) {
    super(props);
  };
  render () {
    const data = this.props.dataInfo.data
    const template = data.userShow ? (
      data.map((item, i) => {
        return (
          <div key={i}>
            <div className="card-container">
              <Card style={{ width: '18rem' }}>
                <Card.Img text="dark" src={item.avatar_url} />
                <Card.Body>
                  <Card.Title>Nombre: {item.title}</Card.Title>
                    <Card.Text style={{color: '#000000'}}>
                      <p>Seguidores:{item.followers}</p>
                      <p>Repositorios: {item.public_repos}</p>
                      <p>Bio: {item.bio ? item.bio : 'Sin info'}</p>
                    </Card.Text>
                    <Button variant="primary"><a style={{color: '#000000'}} href={item.html_url}>Ir cuenta</a></Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        )
      })
    ) : (
      data.map((item, i) => {
        return (
          <div key={i}>
            <div className="card-container-repos">
              <Card style={{ width: '18rem' }}>
                <Card.Img text="dark" src={item.avatar_url} />
                <Card.Body>
                  <Card.Title style={{color: '#000000'}}>{item.name}</Card.Title>
                    <Card.Text style={{color: '#000000'}}>
                      <p>Autor:{item.owner.login}</p>
                      <p>Lenguaje: {item.language}</p>
                      <p>Rama base: {item.default_branch}</p>
                    </Card.Text>
                    <Button variant="primary"><a style={{color: '#000000'}} href={item.html_url}>Ir cuenta</a></Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        )
      })
    );
    return template;
  }
}

export default CardInfo;




// <Button variant="primary">Go somewhere</Button>
