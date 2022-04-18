import React from "react";
import { Grid } from "@mantine/core";
const Dashboard = () => {
  return (
    <Grid grow className="h-full">
      <Grid.Col span={8}>
        <div className="bg-gray-300 w-full h-full"></div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div className="bg-gray-300 w-full h-full"></div>
      </Grid.Col>
      <Grid.Col span={8}>
        <div className="bg-gray-300 w-full h-full"></div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div className="bg-gray-300 w-full h-full"></div>
      </Grid.Col>
    </Grid>
  );
};

export default Dashboard;
