import React from 'react'
import { Button, Card, Col, Row,} from 'react-bootstrap'


export const Cards = (props) => {
  return(
    <Row>
      {
        props.data.map((item) =>{
 return(
  <Col key={item.id} sm="12" className='mb-3'>
        <Card className='d-flex flex-row card_style mt-5 justify-content-center'>
          <Card.Img src={item.img} />
          <Card.Body>
            <Card.Title className='d-flex justify-content-between'>
              <h3>{item.title}</h3>
              <span>{item.price}</span>
            </Card.Title>
            <Card.Text className='py-2'>
               {item.des}
            </Card.Text>
          </Card.Body>
      </Card>
    </Col>
 )        })
      }

  </Row>
  )
}
