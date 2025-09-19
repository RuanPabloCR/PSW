import React from 'react';
import { Button } from './BaseComponents';

const CustomButton = ({ children, ...props }) => (
    <Button variant="outline" {...props}>
        {children}
    </Button>
);

export default CustomButton;
