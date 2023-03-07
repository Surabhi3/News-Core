import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./login";
import LogoutButton from "./logout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  let view = <div></div>
  if (isAuthenticated) {
    view = <div>
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <LogoutButton/>
      </div>
    </div>
  }
  else {
    view = <LoginButton />
  }

  return (
    view
  );
};

export default Profile;