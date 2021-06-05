import React, { Component } from 'react'
import './App.css';
/*Import components*/
import Header from '../components/header/Header'
import About from '../components/About/About'
import News from '../components/news/News'
import Content from '../components/content/Content'
import img from '../images/ja_rounded.png'

class App extends Component {
  state = {
    main: {
      picture: img,
      name: "Edvin Sačić"
    },
    about: {
      street: "Igmanska do br. 75, Vogošća",
      birth_day: ["29", "Oct", "1997"],
      elem_school: "O.Š. Mirsad Prnjavorac",
      high_school: "Srednja elektrotehnička škola Sarajevo",
      collage: "Elektrotehnički fakultet Sarajevo",
      hobbies: "Make webpages"
    },
    news: {
      notifs: ["Korisnik X Vam je lajkao sliku", "Korisnik Y Vam je lajkao status"], /*No notification currently*/
      mess: [] /*No messages currently*/
    }
  }
  render() {
    return (
      <div className="App">
        <Header
          img={this.state.main.picture}
          name={this.state.main.name} />
        <div className="cont">
          <About
            s={this.state.about.street}
            bday={this.state.about.birth_day}
            es={this.state.about.elem_school}
            hs={this.state.about.high_school}
            co={this.state.about.collage}
            h={this.state.about.hobbies} />
          <News n={this.state.news.notifs} m={this.state.news.mess} />
        </div>
      </div>
    );
  }
}

export default App;
