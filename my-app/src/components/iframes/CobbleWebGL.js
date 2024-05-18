import React from 'react';

const DonWebGL = () => {
  return (
    <iframe
      src={`${process.env.PUBLIC_URL}/CobbleClimberWebGL/cobbleindex.html`}
      style={{ width: '100vw', height: '100vh', border: 'none'}}
      title="Unity WebGL Game"
    />
  );
};

export default DonWebGL;