import { useState } from "react";

const Community = () => {
  console.log("COMMUNITY COMPONENT -PAGE ROUTER");
  const [title, setTitle] = useState<string>("Hello");
  return (
    <div>
      COMMUNITY{" "}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        Press me
      </button>
    </div>
  );
};

export default Community;
