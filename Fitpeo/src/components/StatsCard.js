import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #383838;
  border-radius: 12px;
  padding: 20px;
  color: white;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Value = styled.h2`
  font-size: 24px;
  margin-bottom: 5px;
`;

const Change = styled.p`
  font-size: 14px;
  color: ${({ isProfit }) => (isProfit ? 'green' : 'red')};
  display: flex;
  align-items: center;
`;

const Arrow = styled.span`
  margin-right: 5px;
  font-size: 18px;
`;

const StatsCard = ({ title, value, change }) => {
  // Check if the change represents a profit or a loss
  const isProfit = parseFloat(change) >= 0;

  return (
    <Card>
      <Title>{title}</Title>
      <Value>{value}</Value>
      <Change isProfit={isProfit}>
        <Arrow>{isProfit ? '▲' : '▼'}</Arrow>
        {change}
      </Change>
    </Card>
  );
};

export default StatsCard;
