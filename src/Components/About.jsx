import myGraph from './Graphs.jpg';

function About(){
    return(<section>
        <div>
            <h2>So who am I? ❓</h2>
            <p>I am a an enthusiastic front-end web dev who is always in the search of new opportunities</p>
            <p>When I am not around I may be breaking up stuff(intentionaly?) IDK but I do ensure you that your stuff will look clean and crisp 🌟</p>
            <br/>
        </div>
        <br/>
        <h2>So how do I do it?</h2>
        <p>I utilise the base of JavaScript and the exceptional abilities of React JS to create my work and projects. Tjough I had
            tinkle my fingers a lot to study and make better web pages day by day, I feel like I am getting better at this everyday.
        </p>
        <br/>
        <h2>My GIT repository</h2>
        <p>You can check out my git repo and surf through some projects I built while I was entangled in the vines of the JavaScript 
            jungle - <a target="_blank" href="https://github.com/NotTheScuxe">Git Hub</a>. Though I may be not very regular due to my
            habit of never stopping to learn. Even when I am building this webpage I am thinking about how do I learn back end and more
            beyond that
        </p>
        <h3>My Skills : </h3>
        <img src={myGraph} width={350}/>
        <br/>
        <h2>How did I study WebDev</h2>
        <p>Being in India's one of the most prestigious institutes for technology, I was indeed exposed to a lot of likeminded
            people who helped me and are still supporting me to travel further in my journey towards becoming a better WebDev...
        </p>
        <br/>
        <hr/>
        <footer>
            <p>&copy; Arnav (Scuxe). All rights reserved</p>
            <p>Social Media links</p>
            <ul>
                <li><a target="_blank" href="https://x.com/Scuxe7136">x.com</a></li>
                <li><a target="_blank" href="https://github.com/NotTheScuxe">Git Hub</a></li>
                <li><a target="_blank" href="mailto:scuxe404@gmail.com">Email me at scuxe404@gmail.com</a></li>
            </ul>
            <p><b>Made with React JS ⚛️</b></p>
        </footer>
    </section>
    );
}

export default About