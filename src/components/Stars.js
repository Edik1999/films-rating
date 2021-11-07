import React from 'react';
import Star from './Star';
import shortid from "shortid";

const Stars = ({count}) => {

    let render;

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    if( isNumeric(count) && count >= 1 && count <= 5 ){
        render = true
    } else {
        render = false
    }

    const arrayCount = Array.from({length: count}, (x,i) => i);

    const arrayCountWithIndexes = arrayCount.map((array) =>
        ({id: shortid.generate(), value: array}));

    return (
        <>
        {render 
            ?
            <ul className="card-body-stars u-clearfix">
                {arrayCountWithIndexes.map((arr) => 
                    <li key={arr.id}>
                        <Star/>
                    </li>
                )}
            </ul>
            :
            <></>
        }
        </>
    );
}

export default Stars;
