import React from 'react';
import { Row, Col } from 'react-bootstrap';

const CustomGrid = ({ items }) => (
    <div className="d-flex gap-3 overflow-auto py-2 px-0" style={{ scrollSnapType: 'x mandatory' }}>
        {items.map((item, idx) => (
            <div
                key={idx}
                className="flex-shrink-0 text-center"
                style={{
                    minWidth: '120px',
                    maxWidth: '180px',
                    scrollSnapAlign: 'start',
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                }}
                onMouseEnter={e => e.target.closest('div').style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.closest('div').style.transform = 'scale(1)'}
            >
                <img
                    src={item.img}
                    alt={item.name}
                    className="w-100 rounded shadow"
                    style={{ height: '140px', objectFit: 'cover' }}
                />
                <p className="text-white small mt-2 text-truncate mb-0">
                    {item.name}
                </p>
            </div>
        ))}
    </div>
);

export default CustomGrid;

