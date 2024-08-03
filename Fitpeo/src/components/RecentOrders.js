import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  background-color: #383838;
  border-radius: 12px;
  overflow: hidden;
  margin: 20px 0;

  th, td {
    padding: 15px;
    text-align: left;
  }

  th {
    background-color:#383838;
  }

  td {
    border-top: 1px solid #3e3e55;
  }
`;

const StatusCell = styled.td`
  background-color: ${({ status }) => 
    status === 'Delivered' ? 'green' : 'red'};
  color: white;
  border-top: 1px solid #3e3e55;
  text-align: center;
  border-radius : 10px;
  width : 15%
`;

const RecentOrders = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48967886', amount: '$305.02', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Pending' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Cancelled' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Pending' },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Order No.</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td>{order.customer}</td>
            <td>{order.orderNo}</td>
            <td>{order.amount}</td>
            <StatusCell status={order.status}>{order.status}</StatusCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RecentOrders;
