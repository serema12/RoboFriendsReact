import React from 'react';

const Card = (props) =>{
    const {id,name,email} = props.attributes;
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            
        </div>
    )
}

export default Card;
