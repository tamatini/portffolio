import React from 'react';

const Landing = ({props}) => {
  return(
    <div className="container-fluid py-5">
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-md d-flex justify-content-center">
            <div className="pt-5 px-5" id="top">
              <h1 className="text-white" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="200">
                <span className="text-accent fw-bolder display-2">&lt;b></span>
                <span className="text-accent text-uppercase fw-bolder display-2">Salut</span>
                <span className="text-accent fw-bolder display-2">&lt;/b&gt;</span>
                <br />
                <span className="subtitle display-1">Je suis {props.firstname}</span>,
              </h1>
              <h1 className="text-white fw-bolder display-5" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="150">
                {props.job}
              </h1>
              <p className="text-detail pt-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="100">{props.detail}</p>
            </div>
          </div>
          <div className="col-md">
            <div className="profile-box mt-5 overflow-hidden mx-auto rounded-1">
              <img className="profile-img" src={'./img/profile.jpg'} alt={props.profilePic.alt}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Landing;