import React, {Component} from 'react';
import HomeCss from './home.module.css';
import keyBoard from '../assets/images/awesome-keyboard.svg';
import FormDataComponent from '../Form';
class Home extends Component {   
    render() {
        return (
          <div className={HomeCss.homeBg}>
            <div className={HomeCss.homeMiddleSection}>
              <img src={keyBoard} aria-hidden alt="keyboard image" />
              <h1>Fast Fingers</h1>
              <p>the ultimate typing game</p>
              <FormDataComponent/>
            </div>
          </div>
        );
    }
}

export default Home;