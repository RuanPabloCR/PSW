import React from 'react';
import { Card as BootstrapCard, Button as BootstrapButton, Form } from 'react-bootstrap';

export const Card = ({ className, children, ...props }) => (
  <BootstrapCard
    className={`card-dark ${className || ''}`}
    {...props}
  >
    {children}
  </BootstrapCard>
);

export const CardContent = ({ className, children, ...props }) => (
  <BootstrapCard.Body className={className} {...props}>
    {children}
  </BootstrapCard.Body>
);

export const Input = ({ className, ...props }) => (
  <Form.Control
    className={`bg-dark text-white border-secondary ${className || ''}`}
    {...props}
  />
);

export const Button = ({ className, variant = "primary", size = "md", children, ...props }) => {
  return (
    <BootstrapButton
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {children}
    </BootstrapButton>
  );
};