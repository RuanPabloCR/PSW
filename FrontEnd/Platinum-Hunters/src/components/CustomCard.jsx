import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const CustomCard = ({ children, style }) => (
  <Card
    elevation={0}
    sx={{
      background: 'linear-gradient(90deg, #23232b 0%, #3a2547 100%)',
      border: '1px solid #1f2937',
      borderRadius: '2rem',
      p: '0.875rem',
      ...style
    }}
  >
    <CardContent sx={{ p: 0 }}>{children}</CardContent>
  </Card>
);

export default CustomCard;
