import chatboxImage from "../assets/img/chatbox.png";

export default function Skills() {
    return (
        <div className="skills">
            <h1>My skills</h1>
            <i class="fa-brands fa-square-js"></i>
            <i class="fa-brands fa-php"></i>
            <i class="fa-brands fa-python"></i>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <i class="fa-brands fa-vuejs"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-html5"></i>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-sass"></i>
            <i class="fa-brands fa-docker"></i>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-wrench"></i>
            <figure className="screenshot">
                <a href="https://chatbox-react-tan.vercel.app" target="_blank" rel="noreferrer" aria-label="Link to ChatBox">
                    <img src={chatboxImage} alt="Screenshot of Daniel Lundgrens app ChatBox." />
                </a>
                <figcaption>Please check out my little web-app ChatBox! It was originally created in Vue and later recreated using React. Both versions can be found on my github!</figcaption>
            </figure>
        </div>
    )
}
