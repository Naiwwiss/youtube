import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import './cards.css';

export default function Cards({item}) {
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={item.src} />
      <Card.Body>
        <Card.Title>{item.Title}</Card.Title>
        <Card.Text>
          {item.cardText}
        </Card.Text>
        <Button variant="primary">{item.btnText}</Button>
      </Card.Body>
    </Card>
  );
}
