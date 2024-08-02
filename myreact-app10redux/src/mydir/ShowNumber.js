import React, {Component} from "react";
import store from "../store";

export default class ShowNumber extends Component{
    state = {number:store.getState().number}

    constructor(props){
        super(props);

        store.subscribe(function(){
            this.setState({number:store.getState().number});
        }.bind(this));
    }


    render() {
        return (
            <div>
                <h1>Show Number</h1>
                
                {/* value={this.props.number} 는 ShowNumberSuper가 전달해준 값을 읽어온다. */}
                {/* <input type="text" value={this.props.number} readOnly></input> */}
                
                {/* store 이용*/}
                <input type="text" value={this.state.number} readOnly></input>
            </div>
        );
    }
}