import React, { useContext } from 'react'

import { Container, Row, Col, Card, Alert } from 'react-bootstrap'
import MsgContext from '../context/MsgContext'





const Home = () => {
  
  const {msgState, dispatch}=useContext(MsgContext)
   

    return (
      <>
        <Container className='my-3'>
          <Row className="justify-content-center">
            <Col md={5}>
              <Card className='shadow-sm'>
                <Card.Body>
                  <div className="my-3">
                    <input value={msgState} onChange={ e=>dispatch({type:'FIELD_UPDATE', payload:( e.target.value)})} type="text" className="form-control" />
                  </div>
                  <h1>{msgState}</h1>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Home