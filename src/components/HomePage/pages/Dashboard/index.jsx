import React from "react";
import { Grid } from "@mantine/core";
import Cards from "./components/Cards";
import Table from "./components/Table";
import Performance from "./components/Performance";
const Dashboard = () => {
  return (
    <Grid justify="space-between" className="h-full ">
      <Grid.Col span={8} className="h-2/4 ">
        <div className=" w-full h-full p-3">
          <Cards />
        </div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div className="w-full h-full">
          <Performance />
        </div>
      </Grid.Col>
      <Grid.Col span={8} className="h-2/4">
        <div className="w-full h-full p-3">
          <Table />
        </div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div className="bg-gray-300 w-full h-full"></div>
      </Grid.Col>
    </Grid>
  );
};

export default Dashboard;
