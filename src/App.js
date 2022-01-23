import React from "react";

import user from "./user.json"
import Profile from "./Components/UserPage/Profile";
import Statistics from "./Components/Statistics/statistics";
import data from "./data.json"
import FriendsList from "./Components/FriendList/FriendList";
import friends from "./friends.json"

const App = () => {
    return(
        <div className="container">
            <Profile user={user}></Profile>
            <Statistics stats={data} title="Statistics"></Statistics>
            <FriendsList friends={friends}></FriendsList>
        </div>
    )
    
}
export default App