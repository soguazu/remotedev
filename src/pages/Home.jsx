import React from "react";
import { Avatar } from "../components/Style";
import { LOGO } from "../assets";

function Home() {
  return (
    <div>
      <div>
        <Avatar image={LOGO} />
      </div>
    </div>
  );
}

export default Home;
