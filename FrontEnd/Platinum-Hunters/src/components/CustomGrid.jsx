import React from 'react';
import { Box, Typography } from '@mui/material';

const CustomGrid = ({ items }) => (
    <Box
        sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            py: 1,
            px: 0,
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
        }}
    >
        {items.map((item, idx) => (
            <Box
                key={idx}
                sx={{
                    minWidth: 120,
                    maxWidth: 180,
                    flex: '0 0 clamp(120px, 20vw, 180px)',
                    textAlign: 'center',
                    scrollSnapAlign: 'start',
                }}
            >
                <Box
                    component="img"
                    src={item.img}
                    alt={item.name}
                    sx={{
                        width: '100%',
                        height: 140,
                        objectFit: 'cover',
                        borderRadius: 2,
                        mb: 1,
                        boxShadow: 2,
                    }}
                />
                <Typography variant="body2" sx={{ fontSize: '0.95rem', color: 'text.primary' }}>
                    {item.name}
                </Typography>
            </Box>
        ))}
    </Box>
);

export default CustomGrid;

