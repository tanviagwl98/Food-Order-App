import React, {Component} from 'react';

class ProfileClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Tanvi",
                location:"UK"
            },
            count:1
        };
        console.log("Child Constructor");
    }
// If there are side effects like API calls, timer etc inside Did mount it will come in Commit Phase and will come after parent did mount otherwise first child did mount and then parent did mount
    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Child Did Mount"); 
            }, 1000)
        console.log("Child Did Mount");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Child Will Unmount")
    }

    render(){
        const {count} = this.state;
        console.log("Child render");
        return(
            <div>
            <h1> Profile Class Component </h1>
             <h2>Name: {this.state.userInfo.name}</h2>
             <h2>Location: {this.state.userInfo.location}</h2>
          </div>
        )
    }
}

export default ProfileClass;