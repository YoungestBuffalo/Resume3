import React from 'react';
import '../css/ImageTextComponent.css';

const ImageTextComponent = ({ imageSrc, altText, children, reverse }) => {
    const classes = `image-text-component ${reverse ? 'reverse' : ''}`;

    return (
        <div className={classes}>
            <img src={imageSrc} alt={altText} />
            <div className='bodyText'>{children}</div>
        </div>
    );
};

export default ImageTextComponent;