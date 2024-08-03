import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const ChartWrapper = styled.div`
  margin: 20px 0;
  background-color: #383838;
  padding: 20px;
  border-radius: 12px;
`;

const data = [
  { name: '5', uv: 4000 },
  { name: '9', uv: 3000 },
  { name: '11', uv: 2000 },
  { name: '13', uv: 2780 },
  { name: '15', uv: 1890 },
  { name: '17', uv: 2390 },
  { name: '19', uv: 3490 },
  { name: '21', uv: 2000 },
  { name: '23', uv: 2780 },
  { name: '25', uv: 1890 },
];

const ActivityChart = () => (
  <ChartWrapper>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </ChartWrapper>
);

export default ActivityChart;
