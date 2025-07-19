function Projects(){
    return(<section className="projects-container">
        <div>
            <h2>PROJECTS ➡️</h2>
            <h3>Here are some of my projects to let you know me better...👀</h3>
            <div className="projects-grid">
                <div className="projects-card">
                    <image/>
                    <h5>Weather App </h5>
                    <p>A weather app built using a weather API completely in JavaScript</p>
                </div>
                <div className="projects-card">
                    <image/>
                    <h5>Catching Game </h5>
                    <p>An in-browser game developed completely in JavaScript, React HTML and CSS.</p>
                </div>
                <div className="projects-card">
                    <image/>
                    <h5>Calculator </h5>
                    <p>Feelling lazy, use a calculator completely in JavaScript, HTML and CSS.</p>
                </div>
                <div className="projects-card">
                    <image/>
                    <h5>Website Model</h5>
                    <p>An introduction website about me completely made in JavaScript and React frameworks.</p>
                </div>
            </div>
        </div>
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
    </section>)
}

export default Projects