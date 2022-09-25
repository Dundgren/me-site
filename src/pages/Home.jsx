import selfie from "../assets/img/danielclose.jpg";

export default function Home() {
    return (
        <div className="home">
            <div>
                <h1>About Me</h1>
                <p>
                I'm a newly graduated web developer from Blekinge Tekniska Högskola. The education was a 2 year remote program which might not sound like much but because of perfect planning it was crammed full of practical knowledge! You can see all the courses on my CV. Most of my experience is with JavaScript and currently Vue.js is what I mostly turn to. I also have experience with PHP, Python and naturally HTML and CSS.
                </p>
                <p>
                The internet is used by pretty much everyone every single day and the idea of being able to contribute to the sea of websites that entertain and help us on a daily basis excites me! My professional dream would be to help build something that is a given part of the average person's virtual toolbox.
                </p>
                <p>
                I am currently looking for work to kickstart my career as a web developer! Be it full time, part time or even an internship I am very interested if it leads to permanent employment. I work just as well independently as in groups and I'm comfortable with receiving critique and sharing knowledge. I am located just south of Stockholm.
                </p>
            </div>
            <img className="round-image" src={selfie} alt="Selfie of Daniel Lundgren" />
        </div>
    )
}
