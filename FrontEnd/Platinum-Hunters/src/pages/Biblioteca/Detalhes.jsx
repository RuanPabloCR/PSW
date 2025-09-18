import React from 'react';
import Card from '../../components/CustomCard';
import Tag from '../../components/Tag';

const Detalhes = () => {
    return (
        <div>
            <h1>Detalhes</h1>
            <Card>
                <h2>Informações do Item</h2>
                <Tag label="Categoria" />
                <Tag label="Plataforma" />
            </Card>
        </div>
    );
};

export default Detalhes;