import React from 'react';
import "../css/home.css";
import ImageTextComponent from '../../components/js/ImageTextComponent';
import profileImage from "../../images/profile.jpg";
import projectImage from "../../images/projects.jpg";
import blogImage from "../../images/blog.jpg";
import collaborationImage from "../../images/collaboration.jpg";
import CenteredTextComponent from '../../components/js/CenteredTextComponent';

const Home = () => {
    return (
        <div>
            <CenteredTextComponent headerLevel={1} headerText="Welcome!">
            Welcome to my website! I'm an experienced web developer passionate about creating innovative, efficient, and user-friendly digital solutions. Feel free to explore my work, learn more about my background, and get in touch. Thank you for visiting!           
            </CenteredTextComponent>
            <CenteredTextComponent headerLevel={2} headerText="Julian Orr | Full-Stack Developer & Tech Enthusiast">
            In my healthcare career at Highmark Health, I've adapted to changes and taken on varied roles. Starting as a web author for <a href='https://www.ahn.org/'>AHN</a>, I transitioned to full-time QA, refining my attention to detail. Working on a Cypress test suite for the <a href='https://www.highmark.com/'>Highmark</a> scrum team renewed my interest in software development, leading to my current role as a developer at <a href='https://goengen.com/en.html'>enGen</a>. My diverse experiences gave equip me with a unique perspective and skills that I bring to all my work.          
            </CenteredTextComponent>
            <ImageTextComponent imageSrc={profileImage} altText="Profile">
            I've navigated diverse roles. Starting as a web author working in downtown Pittsburgh, I transitioned to QA and remote work during the pandemic, ensuring digital platforms' functionality and quality. I contributed to a Cypress test suite for the Highmark.com Scrum Team, showcasing my proficiency in testing and automation. Now, as a developer at enGen, I drive innovation and deliver top-notch solutions.            
            </ImageTextComponent>
            <ImageTextComponent imageSrc={projectImage} altText="Projects" reverse>
            After briefly pursuing a degree in wildlife biology, I shifted my focus towards the tech industry. I took IT classes at CCAC while working nightshifts at the Fairmont Pittsburgh, before immersing myself in a three-month tech bootcamp. Graduating in 2019 from the coding bootcamp <a href='https://www.academypgh.com/'>Academy PGH</a> marked a pivotal moment in my journey, igniting my passion for software development and paving the way for my subsequent career in the healthcare industry.
            <hr></hr><br />
            Throughout my career, I've been actively involved in diverse projects that have enriched my skill set and broadened my professional horizons. I've contributed to various digital initiatives within Highmark Health and its subsidiaries, including projects for AHN.org and Highmark.com. These experiences have honed my abilities in web development and user experience design. Additionally, I've participated in yearly game jams, fostering creativity and collaboration while exploring new avenues of game development, design and and project management.            </ImageTextComponent>
            <ImageTextComponent imageSrc={blogImage} altText="Blog" >
            Outside of work, I have a variety of interests. I enjoy cooking and making cocktails, find relaxation (and occasional frustration) in playing video games, and love spending time camping and exploring the outdoors. I'm also a musician, playing guitar and dabbling in Ableton production for fun.            </ImageTextComponent>
            <ImageTextComponent imageSrc={collaborationImage} altText="Collaborations" reverse> 
            Meet Scout, my food motivated tabby companion. He brings joy and companionship into my life with his playful, and occasionally malicious nature. Whether by my side as I work or nipping at my heels when I am walking up the stairs with arms full, Scout's presence adds warmth and levity to each day, reminding me to cherish life's simple pleasures. His desire for treats has also made him a willing participant in my culinary experiments, and he is always eager to perform tricks for a tasty reward.
            </ImageTextComponent>
        </div>
    );
};
export default Home;