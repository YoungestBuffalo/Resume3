import React from 'react';
import "../css/iframe.css";

import CenteredTextComponent from '../../components/js/CenteredTextComponent';
import ImageTextComponent from '../../components/js/ImageTextComponent';
import screen2don from "../../images/screen2don.jpg";
import titlescreen from "../../images/titlescreen.jpg";

const DonWebGL = () => {
  return (
    <div>
      <CenteredTextComponent headerLevel={1} headerText="Global Game Jam 2024">
      For those unfamiliar: <a href="https://globalgamejam.org/" target="_blank" rel="noopener noreferrer">The GGJ</a> is the world's largest game creation event taking place around the globe boasting tens of thousands of participants (jammers) at hundreds of physical and virtual sites in over one hundred countries around the world.
      <hr/>
      A game jam is similar to a hackathon where people come together for a short period of time to create games around a central theme revealed at the start of the jam. The structure of GGJ is usually that everyone gathers on Friday late afternoon, watches a short video keynote with advice from leading game developers, and then a secret theme is announced. All jammers worldwide are then challenged to make games based on that same theme to be completed by Sunday afternoon. 
      <hr/>
      The GGJ stirs a global creative buzz in games, while at the same time exploring the process of development, be it programming, iterative design, narrative exploration or artistic expression. It is all condensed into a shortened development cycle. The GGJ encourages people with all kinds of backgrounds to participate and contribute to this spread of game development and creativity. Jammers are invited to explore new technology tools, trying on new roles in development and testing their skills to do something that requires them to design, develop create, test and make a new game. The GGJ is rooted in the idea that in today’s heavily connected world, we can come together, be creative, share experiences and express ourselves in a multitude of ways using the universal language of video games.         
       </CenteredTextComponent>
       <ImageTextComponent imageSrc={titlescreen} altText="Screenshot of global game jam game menu screen. the tile is DON LANTERNFLIES N'AT, to the left is a video box, to the right there are options PLAY, CREDITS and QUIT. The Background is a lowpoly 3D render of pittsburgh">
       While I have participated in three global game jams, this is one of my more exciting projects. The theme of the game was "Make Me Laugh". Despite being a global event, we instantly decide to make ours a local inside joke. There were multiple elements that were new to me, I had not really experienced managing a team or coding for GGJ. Typically my roles in the past were centered around either making music, art, helping with ideas, and playtesting.
        <hr/>This is the first FPS game we have made. My team consisted of three folks: Myself, My Brother Ben Orr, and an academy alumni Ed Korb. We all commited code to the game, I created the music and sound, some 3D models including a render of pittsburgh from google maps. Ed modeled and animated the lanterfly enemy. 
        </ImageTextComponent>
      <ImageTextComponent imageSrc={screen2don} altText="Screenshot of global game jam game. First person view of a giant eagle grocery story, with the player holding a low-poly firearm" reverse>
        The game was made in Unity, and we used some free assets from the asset store. The technologies used were Unity, Blender, Abelton Live, Capcut. Code for Unity is written in C#.
        <hr/>Don, a guy from Pittsburgh, defends the Giant Eagle from hordes of invading lanternflies. Play in browser below or <a href="https://globalgamejam.org/games/2024/don-lanternflies-nat-8" target="_blank" rel="noopener noreferrer">download for windows!</a>
        <br/> 
        <sub>The web player and game is only available for desktop, may have issues on some browsers, and the main intro video (black box on the menu screen) is only viewable on the downloadable version.</sub>
      </ImageTextComponent>
    <iframe
      src={`${process.env.PUBLIC_URL}/DonWebGL/donindex.html`}
      title="Unity WebGL Game"
    />
    </div>
  );
};

export default DonWebGL;