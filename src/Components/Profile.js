import {useEffect, useState} from 'react';


const Profile = (props) => {
    const [count, setCount] = useState(0);

    useEffect( ()=>{
        const timer = setInterval(()=>{
            console.log("Useeffect timer");
        },1000);
        console.log("Testing timer")
        return() => {
            clearInterval(timer);
            console.log("Timer cleared/ unmount component")
        }
    }, []);
    console.log("Child render");
/*
    useEffect(()=>{
      (async()=> {

      })();
      return () => {

      }
    },[])

    *** Named Function ***
    useEffect(()=>{
      const getUsers = async()=>{

      }
      getUsers();
      return () => {

      };
    },[])
*/
    return(
        <div>
        <h2>Profile Component</h2>
        <h3>Name: {props.name}</h3>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            setCount(1);
          }}
        >
          Count
        </button>
        </div>
    )
}

export default Profile;