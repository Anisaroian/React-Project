import "./styles.css";

const Footer = () => {
    return (
            <footer className="text-white text-center text-lg-start bg-dark">
              <div className="p-5">
                <div className="row mt-4">
                  <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4">About company</h5>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                      voluptatum deleniti atque corrupti.
                    </p>
                    <p>
                      Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                      molestias.
                    </p>
                    <div className="mt-4">
                    <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.facebook.com/ani.saroian22/" role="button"
                            ><i className="fab fa-facebook-f"></i></a>
                          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="mailto:ani.saroian@gmail.com" role="button"
                            ><i className="fab fa-google"></i></a>
                          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.instagram.com/ani.saroian/" role="button"
                            ><i className="fab fa-instagram"></i></a>
                          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.linkedin.com/in/ani-saroian/" role="button"
                            ><i className="fab fa-linkedin-in"></i></a>
                          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://github.com/Anisaroian" role="button"
                            ><i className="fab fa-github"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mb-4 mb-md-0 text-dark contacts">
                    <h5 className="text-uppercase mb-4 pb-1">Contacts</h5>
                    <ul className="fa-ul" style={{marginLeft: "1.65em"}}>
                      <li className="mb-3">
                        <a href="https://goo.gl/maps/f7V4KipkWoYTYBXH7">
                          <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Yerevan, Armenia</span>
                        </a>
                      </li>
                      <li className="mb-3">
                      <a target="_blank" href="mailto:ani.saroian@gmail.com" role="button">
                        <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">ani.saroian@gmail.com</span></a>
                      </li>
                      <li className="mb-3">
                      <a target="_blank" href="https://www.linkedin.com/in/ani-saroian/" role="button">
                        <span className="fa-li"><i className="fab fa-linkedin-in"></i></span><span className="ms-2">Ani Saroian</span>
                      </a>
                      </li>
                      <li clasclassNames="mb-3">
                        <a href="tel:+37477885864">
                          <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+374 (77) 88-58-64</span>
                        </a>
                      </li> 
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4">About company</h5>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                      voluptatum deleniti atque corrupti.
                    </p>
                    <p>
                      Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                      molestias.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center p-2 text-dark" style={{fontFamily: "'Cinzel', serif"}}>
                © 2022 Copyright:
              </div>
            </footer>
    )
}

export default Footer;