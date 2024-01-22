import React from "react";

class UserClass extends React.Component{
  constructor(props){
    // console.log("Child construtor");
    super(props);

    this.state={
      userInfo:{
        name:"Dummy",
        location:"Default"
      }
    }
  }

  async componentDidMount(){
    // console.log("Child Component did mount");
    const data=await fetch("https://api.github.com/users/vihsshukla");
    const json=await data.json();
    console.log(json);
    this.setState({userInfo:json});
  }

  componentDidUpdate(){
    console.log("Component Did update");
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  }

  render(){
    // console.log("Child render");
    const {name,location,bio}=this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: XXXXX</h4>
        <p>{bio}</p>
      </div>
    )
  }
}

export default UserClass;