import React from 'react';
import "../css/iframe.css";

import CenteredTextComponent from '../../components/js/CenteredTextComponent';
import ImageTextComponent from '../../components/js/ImageTextComponent';
import cobbleclimber from "../../images/cobbleclimber.jpg";

const CobbleWebGL = () => {
  return (
    <div>
      <CenteredTextComponent headerLevel={1} headerText="Cobble Climber">
       Cobble Climber is a mobile game, developed by myself and my brother Ben Orr. We both contributed code to the project, Ben created the visual art, and I created the sound.
       </CenteredTextComponent>
       <ImageTextComponent imageSrc={cobbleclimber} altText="" reverse>
       The original goal of Cobble Climber was to complete a mobile game release on the Google Play Store. The game is currently released, and the project was a great learning experience. The game was developed in 2023, and the technologies used were Unity, Piskel, and Abelton Live, Code for Unity is written in C#.
       <hr/>
       The game is currently available on the Google Play Store. The game is a simple endless runner, where the player must climb a mountain of cobblestones. The player must avoid falling off the mountain by avoiding falling rocks. Below is the desktop version of the game, right click to jump. Or you can <a href="https://play.google.com/store/apps/details?id=com.DefaultCompany.Endless_Jumper&hl=en_US">get it on google play!</a>
       <br/><sub>The web player is only available for desktop, may have issues on some browsers, folks on mobile should checkout the downloadable version above. (Not available for IOS)</sub>
      </ImageTextComponent>
    <iframe
        src={`${process.env.PUBLIC_URL}/CobbleClimberWebGL/cobbleindex.html`}
      title="Unity WebGL Game"
    />
    </div>
  );
};

export default CobbleWebGL;