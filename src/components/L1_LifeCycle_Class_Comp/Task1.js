import React, { Component } from "react";

class Task1 extends Component {

    constructor(props) {
        super()

        this.state = {
            age: 20,
            section: "react",
            batch: "a",
            ispaid: true,
            arraydata: [1, 2, 3, 4, 5, 677,]
        }

        console.log("state is", this.state)
    }


    updateData = (e) => {
        console.log("inside method")
        // this.lastName = "new name"
        this.setState({ age: 30, batch: "cb", ispaid: false })

    }


    render() {
        const name = "abc"
        let lastName = "xyz"
        var fullName = "qqqq"

        console.log("reload")

        return (
            <div style={{ border: '2px solid black', margin: '5px', padding: '5px', borderRadius: "10px" }}>
                <h1>
                    class comp
                    <br />
                    {this.state.age}
                    <br />
                    {this.state.batch}
                    <br />
                    {this.state.arraydata[3]}
                </h1>
                <button onClick={this.updateData}>click me</button>
            </div>
        );
    }
}

export default Task1;



