import React from 'react';

const BannerItem = ({banner}) => {
    const {image, name} = banner;
    return (
        <div>
        <img src={image} alt='' />
        <p className="legend font-semibold">{name}</p>
    </div>
    );
};

export default BannerItem;