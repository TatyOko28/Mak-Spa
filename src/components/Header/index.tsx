import React from 'react';
import './style.css';
import cd from './cd.png'

interface State {
  currentTime: string;
}

class Header extends React.Component<{}, State> {
  timerID: NodeJS.Timeout | null = null;

  state: State = {
    currentTime: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      currentTime: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <header>
        <img src={cd} alt="Header" className='cd' />
        <select name="languages" id="language-select">
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
        <div className="watch">{this.state.currentTime}</div>        
      </header>
    );
  }
}

export default Header;
