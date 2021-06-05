import React, { Component } from 'react'
import './App.css';
/*Import components*/
import Header from '../components/header/Header'
import About from '../components/About'
import News from '../components/News'
import Content from '../components/content/Content'
import img from '../images/ja_rounded.png'

class App extends Component {
  state = {
    main: {
      picture: img,
      name: "Edvin Sačić"
    },
    about: {
      birh_day: ["29", "Oct", "1997"],
      elem_school: "O.S. Mirsad Prnjavorac",
      high_school: "Srednja elemtrotehnicka skola Sarajevo",
      collage: "Elektrotehnicki fakultet Sarajevo"
    },
    news: {
      notifs: "No notification",
      mess: "No massages"
    }
  }
  render() {
    return (
      <div className="App">
        <Header img={this.state.main.picture} name={this.state.main.name} />
        {/* <div>
          <About />
          <Content />
          <News />
        </div> */}
      </div>
    );
  }
}

export default App;
