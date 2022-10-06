import chatboxImage from "../assets/img/chatbox.png";

export default function Skills() {
    return (
        <div className="skills">
            <h1>My skills</h1>
            <span>
                <i class="fa-brands fa-square-js"></i>
                <p>
                    JavaScript is my goto language wether it is as vanilla or a framework in frontend or as node in backend.
                    Ever since an introductory course in vanilla and another in JavaScript-based frameworks I have preferred JS
                    so naturally I have most of my experience with it.
                    <br />
                    I have recently also started using TypeScript. After a quick guide I started using it for my ChatBox-API
                    but later decided to go through a more thorough introduction using Scrimba!
                </p>
            </span>
            <span>
                <i class="fa-brands fa-php"></i>
                <p>
                    Despite being widely seen as going out of style PHP still interests me because of it's close connection
                    to web development and former widespread use. I have completed an introductory course as well as an
                    object-oriented course in PHP.
                </p>
            </span>
            <span>
                <i class="fa-brands fa-python"></i>
                <p>
                    If i'm writing a simple script or creating a terminal-based application I would prefer Python for it's simple
                    styling and convenient methods. I have completed an introductory course as well as an
                    object-oriented course in Python.
                </p>
            </span>
            <span>
                <i class="fa-brands fa-vuejs"></i>
                <p>
                    I have a great love for VueJS as I so far consider it the best when it comes to creating Single Page Applications.
                    I have used VueJS for several minor project but most notably my app ChatBox which may be found on my github page.
                </p>
            </span>
            <span>
                <i class="fa-brands fa-react"></i>
                <p>
                    Despite my love for VueJS, React is now my goto framework. I have completed the fantastic 12 hour React-course
                    by Bob Ziroll which may be found on Scrimba. After completing the course I decided to recreate ChatBox using React
                    and it is with React that I continue to update the app.
                </p>
            </span>
            <span>
                <i class="fa-brands fa-html5"></i>
                <p>
                    Having completed a 2 year web development program I have naturally learnt and made use of HTML through my entire
                    journey to becoming a web developer.
                </p>
            </span>
            <span>
                <i class="fa-brands fa-css3-alt"></i>
                <p>
                    When writing CSS it is almost always in the form of SCSS files. A course in design has taught me to make
                    conscious decisions when it comes to determining colors, placement, format etc.
                </p>
            </span>
            <span>
                <i class="fa-brands fa-docker"></i>
                <p>
                    After a course in virtual environments I have learnt to use Docker both through the terminal as well as using
                    Docker desktop. A Docker environment is my goto when creating a server because of it's ease of use once you have
                    prepared a docker-compose file or uploaded an image to dockerhub.
                </p>
            </span>
            <span>
                <i class="fa-brands fa-github"></i>
                <p>
                    I always make use of Github for my projects and I am familiar with concepts such as branching, forking and 
                    pull requests among others. My Github page is linked in the footer.
                </p>
            </span>
            <span>
                <i class="fa-solid fa-wrench"></i>
                <p>
                    Other tools that I have used during my education or for personal projects include but may not be limited to:
                </p>
            </span>
            <figure className="screenshot">
                <a href="https://chatbox-react-tan.vercel.app" target="_blank" rel="noreferrer" aria-label="Link to ChatBox">
                    <img src={chatboxImage} alt="Screenshot of Daniel Lundgrens app ChatBox." />
                </a>
                <figcaption>Please check out my little web-app ChatBox! It was originally created in Vue and later recreated using React. Both versions can be found on my github!</figcaption>
            </figure>
        </div>
    )
}
