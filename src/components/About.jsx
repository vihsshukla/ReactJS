import UserClass from "./UserClass";
import React from 'react';
import UserContext from "../utils/UserContext";

class About extends React.Component{
  constructor(props){
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent Component did mount");
  }
  render(){
    console.log("Parent render");
    return <div className="about">
    <h1>About</h1>
    <div>
      Logged In User
      <UserContext.Consumer>
        {({loggedInUser})=><h1 className="text-xl">{loggedInUser}</h1> }
      </UserContext.Consumer>
    </div>
    <h3>This is about page</h3>
    <UserClass name={"Shiv (class)"}/>
  </div>
  }
}

export default About;