import React, { Component } from 'react';
import './App.css';
import logo from './img/logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import $ from 'jquery'

library.add(faChevronUp, faChevronDown, faTwitter, faFacebookF)

class Banner extends Component {
  constructor(){
    super()
    this.state = {
      buttonClicked: false
    }
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent = event => {
    this.setState(prevState => ({
      buttonClicked: !prevState.buttonClicked
    }), function(){
      if (this.state.buttonClicked) {
        $('.blueDivOne').addClass('fullText')
      } else {
        $('.blueDivOne').removeClass('fullText')
      }
    });
  };


  render() {
    return (
      <div className="bannerContain">
        <div className="mainBannerContain" title="Image of presidential candidate Jim Harris">
        <div className="harrisStuff">

          <div className="inner">
          <div className="logoContain">
            <img className="logo" src={logo} alt="Jim Harris for President logo" />
          </div>
          <div className="callToAction">
          <h3 className="join">Join the Team</h3>
          <form>
          <input className="typeHere" type="text" placeholder="Email Address"></input>
          <input className="typeHere" type="text" placeholder="Zip Code"></input>
          </form>
            <button type="button" id="signUp" className="btn btn-primary">Sign Up</button>
            <p className="or">or</p>
            <button type="button" id="contribute" className="btn btn-primary">Contribute</button>
          </div>
          </div>

          </div>
        </div>

        {!this.state.buttonClicked &&
          <div className="blueDivOne">
          <button type="button" id="learnMore" onClick={this.handleEvent} className="btn btn-primary">
            Learn About Harris <FontAwesomeIcon icon="chevron-down" />
          </button>
          </div>
         }
        {this.state.buttonClicked &&
          <div className="blueDivOne">
          <button type="button" id="learnMore" onClick={this.handleEvent} className="btn btn-primary">
              Show Less <FontAwesomeIcon icon="chevron-up" />
          </button>
          <div className="about">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt fringilla magna vitae gravida. Etiam ut enim a urna condimentum rutrum ac vitae ipsum. Sed finibus vestibulum varius. Sed pretium justo sapien. In mattis, lorem nec ultricies pretium, neque neque pretium nisi, vel sollicitudin ligula odio nec justo. In fermentum mauris vel mauris ullamcorper convallis. Nulla sit amet massa auctor risus finibus tincidunt.</p>
            <p>Aliquam fringilla massa quis massa laoreet, congue scelerisque erat vulputate. Nullam neque tortor, pellentesque at eros vel, rhoncus posuere nisi. Duis viverra a purus et lacinia. Quisque consectetur placerat vehicula. Duis consequat, velit eu ultrices aliquet, augue libero aliquam ligula, dapibus placerat orci lorem nec mauris. Donec non ligula congue, vestibulum sem vitae, gravida ligula. Cras hendrerit facilisis leo, vel dapibus ligula placerat quis.</p>
          </div>
          </div>
         }
        <div className="blueDivTwo">
          <div className="icons">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </div>
          <p className="privacy">Privacy Policy</p>
          <button type="button" id="transparent" className="btn btn-primary">Paid for by Jim Harris for USA</button>
        </div>
      </div>
    );
  }
}

export default Banner;
