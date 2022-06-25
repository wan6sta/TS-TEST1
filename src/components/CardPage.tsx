import React from 'react';
import Card, {CardVariant} from "./Card";

const CardPage = () => {
    return (
        <Card onClick={(num) => console.log('click', num) } variant={CardVariant.outlined} width='200px' height='200px'>
            <button>Кнопка</button>
            <p>Yes im text</p>
        </Card>
    );
};

export default CardPage;