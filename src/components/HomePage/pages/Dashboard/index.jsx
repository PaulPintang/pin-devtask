import React from "react";
import { Grid } from "@mantine/core";
import Cards from "./components/Cards";
import Table from "./components/Table";
import Performance from "./components/Performance";
import Todos from "./components/Todos";
const Dashboard = () => {
  return (
    <Grid justify="space-between" className="h-full ">
      <Grid.Col span={8} className="h-2/4 ">
        <div className=" w-full h-full p-3">
          <Cards />
        </div>
      </Grid.Col>
      <Grid.Col span={4} className="h-2/4">
        <div className="w-full h-full pr-3">
          <Performance />
        </div>
      </Grid.Col>
      <Grid.Col span={8} className="h-2/4">
        <div className="w-full h-full p-3">
          <Table />
        </div>
      </Grid.Col>
      <Grid.Col span={4} className="h-2/4">
        <div className=" w-full h-full pr-3">
          <Todos />
        </div>
      </Grid.Col>
    </Grid>
  );
};

export default Dashboard;
