import React, {Component} from 'react';
import ProfileFunctional from "../Components/Profile";
import UserContext from "../utils/UserContext";

class About extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div>
<h1>This is About Us Page</h1>
<UserContext.Consumer>
{({user}) => (
  <h4 className="font-bold text-xl p-10">
  {user.name} - {user.email}
  </h4>
)}
</UserContext.Consumer>
<ProfileFunctional/>
    </div>
    )
  }
}

export default About;
