import React from "react";
import styles from "./About.module.css";
import { useNavigate} from "react-router-dom";
import htmlImg from '../../assets/html.png';
import cssImg from '../../assets/css.svg';
import javascriptImg from '../../assets/javascript.png';
import reactImg from '../../assets/react.png';
import redux from '../../assets/redux.png';
//import rmVideo from '../../assets/rick_landing.mp4'
import aboutImg from '../../assets/About.jpg';



export default function About (){
    const navigate = useNavigate();
    const techSkills = [
        {tech: 'Html', image: htmlImg },
        {tech: 'Css', image: cssImg }, 
        {tech: 'JavaScript', image: javascriptImg }, 
        {tech: 'React', image: reactImg }, 
        {tech: 'Redux', image: redux }]

    return (
    <div className={styles.blue}>        
        <div className={styles.AboutDiv}>***</div>
        <h1 className={styles.title}>Rick and Morty App</h1>
        <hr/>
        <h5 className={styles.subtitle}>Created By: Facu Centeno</h5>        
        <hr />
        <h3>About me...</h3>
        <br ></br>
        <img className={styles.aboutImg} src={aboutImg}/>        
        <p/>
        <p>I started my studies as a full stack developer at Henry I passed module 1</p>
        <p>and I am coursing module 2</p>
        <p/>
        <p>I studied the career of systems analyst at the UTN FRC University</p>        
        <p>Now add knowledge of advanced javascript, HTML5, Css, React, Redux.
        About to become a FrontEnd developer!!</p>
    <ul className={styles.unorderedList}>
        {techSkills.map(skill => (
          <li className={styles.listItem} key={skill}>{skill.tech}
          <img src={skill.image} alt={skill.tech} /></li>
        ))}
    </ul>
        <div>
            <button onClick={()=> navigate("/home")}>Back to Home</button>
        </div>  
    </div>
    )
}