import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Test Name",
        email:"test@gmail.com",
    },
});

UserContext.displayName = "UserContext";

export default UserContext;