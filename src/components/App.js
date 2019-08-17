import React, { useState, } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

import ResourceList from './ResourceList';


const App = () => {
  const [resourceName, setResourceName] = useState('posts')

  return (
    <React.Fragment>
      <Container  className="head">
        <Row >
          <h1>React Hook App</h1>
        </Row>
        <Row>
          <Col>
            <Button color="success" onClick={() => setResourceName('posts')}>Posts</Button>{'   '}
            <Button color="primary" onClick={() => setResourceName('todos')}>Todos</Button>

          </Col>
          <Col>
            <h2 className="h2"> {resourceName}</h2>
          </Col>
        </Row>
        <Row>
          <ResourceList resourceName={resourceName} />

        </Row>
      </Container>

    </React.Fragment>
  )


}
export default App;