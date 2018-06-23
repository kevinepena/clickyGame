import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
// import Modal from "./components/Modal";
import "./App.css";

class App extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
    prev: 0,
    guessed: [0],
    modal: false
  };

  // handleIncrement increases this.state.count by 1

  handleClick = (check) => {
    this.setState({ modal: false })

    console.log(check);
    console.log(this.state.count);

    this.state.guessed.map(ran => {
      if (ran === check) {
        console.log("same");
        this.setState({ count: 0 });
      } else {
        this.state.guessed.push(check);
        this.setState({ count: this.state.count + 1 });
        console.log("dif");
        this.getShuffled();
      }
      return ran;
    })

    if (this.state.count === 5) {
      console.log("WINNER");
      this.setState({ modal: true, count: 0 });
    }


  };

  getShuffled = () => {
    return friends.sort(function () {
      return 0.5 - Math.random();
    });
  };

  // showModal = (props) => {
  //   if (!props.modal) {
  //     return null;
  //   }
  //   return (
  //     <Modal />
  //   );
  // }




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.modal ? (<Title>Winner</Title>) : (<Title> Click Click... Score: {this.state.count}</Title>)}
        

        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            name={friend.name}
            count={this.state.count}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
