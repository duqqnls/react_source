import React, {Component} from "react";

class subject extends Component {
    render() {
        return (
            <header>                                    
                <h1>머리글 : {this.props.title}</h1>
                {this.props.subtitle}
            </header>
        );
    }
}

export default subject;
