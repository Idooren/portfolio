import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>Copyright &copy; 2020 <a title="Ido Oren" href="https://github.com/Idooren">Ido Oren</a></li>
              {/* <li>ReactJS Template by <a title="Tim Baker" href="http://www.timbakerdev.com/">Tim Baker</a></li> */}
              <li>Design by <a title="God" href="https://en.wikipedia.org/wiki/Prince_(musician)">God</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
