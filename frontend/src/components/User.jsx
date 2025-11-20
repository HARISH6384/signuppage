import React from "react";

const User = () => {
  const name = localStorage.getItem("name");

  return (
    <div>
      <h1>Login Successfully</h1>

      {name ? <h2>Welcome, {name}</h2> : <h2>User not found</h2>}
    </div>
  );
};

export default User;
