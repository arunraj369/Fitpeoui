import React from "react";
import styled from "styled-components";
import { FiHome, FiList, FiUser } from "react-icons/fi";

const SidebarWrapper = styled.div`
  width: 40px;
  background-color: #383838;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
  }
`;

const IconButton = styled.div`
  margin: 20px 0;
  color: white;

  &:hover {
    color: #4f4f7b;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <IconButton>
        <FiHome size={24} />
      </IconButton>
      <IconButton>
        <FiList size={24} />
      </IconButton>
      <IconButton>
        <FiUser size={24} />
      </IconButton>
    </SidebarWrapper>
  );
};

export default Sidebar;
