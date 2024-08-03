import React from "react";
import styled from "styled-components";
import { FiHome, FiList, FiUser } from "react-icons/fi";

const SidebarWrapper = styled.div`
  width: 30px; 
  background-color: #383838;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s ease; /* Smooth transition for width changes */

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    padding: 10px;
    flex-direction: row;
    justify-content: space-around;
    height: auto; /* Auto height for mobile */
  }

  @media (max-width: 480px) {
    width: 100%; /* Ensure full width on very small screens */
  }
`;

const IconButton = styled.div`
  margin: 15px 0;
  color: white;
  cursor: pointer;

  &:hover {
    color: #4f4f7b;
  }

  @media (max-width: 768px) {
    margin: 0 10px; /* Adjust margins for horizontal layout */
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
