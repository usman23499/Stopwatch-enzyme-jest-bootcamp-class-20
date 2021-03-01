import React,{Component } from 'react';
import "./Timer.css"
import TimerButton from "./TimerButton"

class Timer extends Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      minutes: 30,
      seconds: 59,
 	      isOn: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  
  }
 

  startTimer() {
    
    this.setState({ isOn: true });
    if (this.state.isOn === true) {
      return;
    }
   var myInterval = setInterval(() => {
      const { seconds, minutes }:any = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }:any) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          this.setState(({ minutes }:any) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
      if(this.state.isOn === false){
        clearInterval(myInterval);
      }
    }, 1000);
    
  }

  stopTimer() {
    
    this.setState({ isOn: false });
  }

 resetTimer() {
  this.stopTimer();
  this.setState({
    minutes: 30,
    seconds: 59,
  });
  }

  render = () => {
    const { minutes, seconds }:any = this.state;

    return (
      <div className="timer-container">
        <div className="time-display">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className="timer-button-container">
          <div style={{display:'inline-block'}} className="start-timer">
                <TimerButton
                
                buttonAction={this.startTimer}
                buttonValue={'Start'}
              />
          </div>
         <div style={{display:'inline-block'}} className='stop-timer'>

         
          <TimerButton
            
            buttonAction={this.stopTimer}
            buttonValue={'Stop'}
          />
          </div>
          <div style={{display:'inline-block'}} className="reset-timer">
          <TimerButton
            
            buttonAction={this.resetTimer}
            buttonValue={'Reset'}
          />
          </div>



        </div>
      </div>
    );
  };
}

export default Timer;