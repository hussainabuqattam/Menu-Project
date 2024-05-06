import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

export const Category = ({allcategory,filterbycategory }) => {
  // console.log(props.allcategory)
  const filters = (cat) =>{
          filterbycategory(cat)
  }
  return (
    <Row>
        <Col sm="12" className='d-flex justify-content-center '>
          {
            allcategory.map((item, index) =>{
                   return(
                    <div key={index}>
                      <Button onClick={() => filters(item)} variant="light" className='mx-2'>{item}</Button>
                    </div>
                        
                   )
            })
          }
        </Col>
    </Row>
  )
}
