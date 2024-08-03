import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import StatsCard from "./StatsCard";
import ActivityChart from "./ActivityChart";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";
import QuickLinks from "./QuickLinks";

const DashboardWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: hsl(240, 0%, 10%);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentArea = styled.div`
  flex-grow: 1;
  padding: 20px;
  color: white;
  overflow-x: auto; /* Handle horizontal overflow */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin-bottom: 20px;
  overflow: hidden; /* Prevent overflow of grid items */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MainContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
  overflow: hidden; /* Prevent overflow of grid items */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const OrdersAndFeedbackGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
  overflow: hidden; /* Prevent overflow of grid items */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
        <Sidebar />
      <ContentArea>
        <TopBar />
        <StatsGrid>
          <StatsCard title="Total Orders" value="75" change="3%" />
          <StatsCard title="Total Delivered" value="70" change="3%" />
          <StatsCard title="Total Cancelled" value="5" change="-3%" />
          <StatsCard title="Total Revenue" value="$12k" change="3%" />
          <StatsCard title="Net Profit" value="$6759.25" change="3%" />
        </StatsGrid>
        <MainContentGrid>
          <ActivityChart />
          <QuickLinks />
        </MainContentGrid>
        <OrdersAndFeedbackGrid>
          <RecentOrders />
          <CustomerFeedback />
        </OrdersAndFeedbackGrid>
      </ContentArea>
    </DashboardWrapper>
  );
};

export default Dashboard;
