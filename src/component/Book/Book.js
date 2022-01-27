import React from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
    const {bedType} = useParams()
    return (
        <div>
            <h1>this is a book {bedType}</h1>
        </div>
    );
};

export default Book;