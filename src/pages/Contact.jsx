export default function Contact() {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <ul>
                <li>
                    <span className="fa-stack big">
                        <i className="fa-solid fa-square fa-stack-2x"></i>
                        <i className="fa-solid fa-envelope fa-stack-1x fa-inverse"></i>
                    </span>
                    <p>Email</p>
                    <p>me@daniellundgren.com</p>
                </li>
                <li>
                    <span className="fa-stack big">
                        <i className="fa-solid fa-square fa-stack-2x"></i>
                        <i className="fa-solid fa-mobile-screen-button fa-stack-1x fa-inverse"></i>
                    </span>
                    <p>Phone</p>
                    <p>+46 702614669</p>
                </li>
            </ul>
        </div>
    )
}
