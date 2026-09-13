import { Container, Stack } from "@mui/material";
import withLayoutBasic from "../../libs/components/layout/layoutBasic";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  return (
    <div style={{ margin: "20px 0px" }}>
      <Stack className="container">PROPERTY LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
