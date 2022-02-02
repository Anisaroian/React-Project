import "./styles.css";

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
              <section className="mb-4">
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/ani.saroian22/" role="button"
                  ><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="mailto:ani.saroian@gmail.com" role="button"
                  ><i className="fab fa-google"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/ani.saroian/" role="button"
                  ><i className="fab fa-instagram"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ani-saroian/" role="button"
                  ><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Anisaroian" role="button"
                  ><i className="fab fa-github"></i></a>
              </section>
            </div>
            <div className="text-center p-3" style={{
                backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}>
              © 2020 Copyright:
              <a href="https://tco.am/am" target="_target" rel="noreferrer" className="link"> TCO Team</a>
              <p className="footer-text">Web Full Stack trainings 07/21-01/22</p>
            </div>
    </footer>
    )
}

export default Footer;