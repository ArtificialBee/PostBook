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
    },
    showNotif: false,
    showMess: false,
    newStatus: "",
    prevStatus: ["Pozdrav svima i dobar dan!", "Kako je dobro vidjeti te opet"]
  }

  notifPresent = () => {
    const v = this.state.showNotif;
    this.setState({ showNotif: !v, showMess: false });
  }

  messPresent = () => {
    const v = this.state.showMess;
    this.setState({ showMess: !v, showNotif: false });
  }

  takeInput = (event) => {
    if (event.target.value == "Etner") this.addStatus();
    this.setState({ newStatus: event.target.value })
  }

  addStatus = () => {
    const temp = [...this.state.prevStatus];
    temp.unshift(this.state.newStatus);
    this.setState({
      newStatus: "",
      prevStatus: temp
    });
  }

  deletePost = (index) => {
    const temp = this.state.prevStatus;
    temp.splice(index, 1);
    this.setState({ prevStatus: temp });
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
          <Content
            update={this.state.prevStatus}
            click={this.addStatus}
            input={this.takeInput}
            dlt={(index) => this.deletePost.bind(index)} />
          <News
            n={this.state.news.notifs}
            m={this.state.news.mess}
            notifClick={this.notifPresent}
            messClick={this.messPresent}
            sn={this.state.showNotif}
            sm={this.state.showMess} />
        </div>
      </div>
    );
  }
}

export default App;
