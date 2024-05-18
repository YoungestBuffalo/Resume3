import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import '../css/webGL.css';

const WebGL = ({ loaderUrl, dataUrl, frameworkUrl, codeUrl }) => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl,
    dataUrl,
    frameworkUrl,
    codeUrl,
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className="container">
      {isLoaded === false && (
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity className="unity" unityProvider={unityProvider} />
    </div>
  );
};

export default WebGL;