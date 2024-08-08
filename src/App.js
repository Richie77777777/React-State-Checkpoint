// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Tony Stark",
        bio: "Business Man, Billionaire, PlayBoy",
        imgSrc: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/Tony-Stark-from-Iron-Man.jpg",
        alt:"tony",
  
        profession: "Stark Industries"
      },
      shows: false,
      timeElapsed: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timeElapsed: prevState.timeElapsed + 1 }));
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clean up the interval when the component is unmounted
  }

  toggleShow() {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  }

  render() {
    const { person, shows, timeElapsed } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <div>Time since mount: {timeElapsed} seconds</div>
      </div>
    );
  }
}

export default App;
