import React from "react";

export default class Hello extends React.Component {

    constructor(props) {
        super(props);

        this.state = {greeting: 'Hello ' + this.props.name};

        this.getPythonHello = this.getPythonHello.bind(this);
    }


    personaliseGreeting(greeting) {
        this.setState({greeting: greeting + ' ' +this.props.name + '!'});
    }


    render() {
        return (
            <>
                <h1>{this.state.greeting}</h1>
                <hr/>
                <Button onClick={this.getPythonHello}>
                    Say Hello!
                </Button>
            </>
        );
    }
    // getPythonHello = () =>{
    //         $.get(
    //             window.location.href + 'hello', (data) => {
    //                 console.log(data);
    //                 this.personaliseGreeting(data);
    //             }
    //         );
    // }
}

