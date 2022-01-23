import React from "react";

import user from "./user.json"
import Profile from "./Components/UserPage/Profile";
import Statistics from "./Components/Statistics/statistics";
import data from "./data.json"

const App = () => {
    return(
        <div className="container">
            <Profile user={user}></Profile>
            <Statistics stats={data} title="Statistics"></Statistics>
        </div>
    )
    
}
export default App