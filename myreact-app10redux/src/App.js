import './App.css';
import React, { Component } from 'react';
import AddNumberSuper from './mydir/AddNumberSuper';
import ShowNumberSuper from './mydir/ShowNumberSuper';

class App extends Component {
  state = {number:0}

  render() {
  return (
    <div className="App">
      <h2>Main</h2>
      {/* App 소유 state 변수 number + size (AddNumberSuper가 전달한 값) */}
      
      {/* 
      <AddNumberSuper onClick={function(size){
        this.setState({number:this.state.number + size})
      }.bind(this)}/>
      AddNumber : {this.state.number}
      */}

      {/* AddNumber -> AddNumberSuper -> Main 순서로 올라왔고, 이제 ShowNumberSuper -> ShowNumber로 내려간다. */}
      {/* <ShowNumberSuper number={this.state.number}/> */}

      {/* store 사용 */}
      <AddNumberSuper/>
      <ShowNumberSuper/>

    </div>
    );
  }
}

export default App;
