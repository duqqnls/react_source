import React, { Component } from 'react';

class MyComponent2 extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log("Constructor Method 호출");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps 호출");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount 호출");
    }

    render() {
        console.log("render 호출");

        return (
            <div>
                <h1>데이터 입력: {this.props.name}</h1>
            </div>
        );
    }
}

export default MyComponent2;
