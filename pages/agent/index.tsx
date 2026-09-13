import withLayoutBasic from "../../libs/components/layout/layoutBasic";
import { NextPage } from "next";
import { Stack } from "@mui/material";

const AgentList: NextPage = () => {
  return (
    <div style={{ margin: "20px 0px" }}>
      <Stack className="container">AGENT LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(AgentList);
