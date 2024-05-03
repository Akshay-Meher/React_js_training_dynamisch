import React, { Component } from 'react'
import "./Counter.css";

export default class Counter extends Component {
    indianMenu = [
        { id: 0, dish: "Butter Chicken 🍗" },
        { id: 1, dish: "Paneer Tikka 🧀" },
        { id: 2, dish: "Tandoori Chicken 🍖" },
        { id: 3, dish: "Palak Paneer 🥘" },
        { id: 4, dish: "Chole Bhature 🍲" },
        { id: 5, dish: "Biryani 🍚" },
        { id: 6, dish: "Masala Dosa 🥞" },
        { id: 7, dish: "Samosa 🥟" },
        { id: 8, dish: "Rogan Josh 🍛" },
        { id: 9, dish: "Pani Puri 🥤" }
    ];
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            menuData: this.indianMenu
        }
        this.handleDec = this.handleDec.bind(this);
        this.handleInc = this.handleInc.bind(this);

    }

    handleDec() {
        let count = this.state.count;
        if (count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        } else {
            alert("value can not be Negative")
        }

    }
    handleInc() {
        let count = this.state.count;
        let length = this.state.menuData.length;
        if (count < length - 1) {
            this.setState({
                count: this.state.count + 1
            })
        } else {
            alert(`value can not greater that${length}`)
        }

    }

    render() {
        console.log(this.state.menuData);

        let count = this.state.count;
        return (
            <div className='App-header' style={{ border: '2px solid black', margin: '5px', borderRadius: "10px" }}>
                <h1>Selected Dish: {this.state.menuData[count].dish}</h1>
                <div className=''>
                    <button onClick={this.handleDec}>Decrement</button>
                    <span>Count:{this.state.count + 1} </span>
                    <button onClick={this.handleInc}>Increament</button>
                </div>
                <ul className='list'>
                    {this.state.menuData.map((item, index) => {
                        return <li
                            style={{ margin: '5px' }}
                            key={index}
                            className={index === count ? 'selected' : ''}> {item.dish}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
