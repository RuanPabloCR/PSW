import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCard = ({ children, style, className, ...props }) => (
  <Card
    className={`card-dark ${className || ''}`}
    style={style}
    {...props}
  >
    <Card.Body>
      {children}
    </Card.Body>
  </Card>
);

export default CustomCard;
