import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Footer() {
  return (
    <Card bg="dark" data-bs-theme="dark"  >
      <Card.Header as="h5">Footer section</Card.Header>
      <Card.Body>
        <Card.Text>
          Created by @ -- mavchi1212@gmail.com
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
