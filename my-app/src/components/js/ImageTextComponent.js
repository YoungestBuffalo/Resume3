import React from 'react';
import '../css/ImageTextComponent.css';

const ImageTextComponent = ({ imageSrc, altText, children, reverse }) => {
    const classes = `image-text-component ${reverse ? 'reverse' : ''}`;

    return (
        <div className={classes}>
            <img src={imageSrc} alt={altText} />
            <p>{children}</p>
        </div>
    );
};

export default ImageTextComponent;