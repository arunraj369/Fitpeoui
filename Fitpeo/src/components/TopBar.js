import React from "react";
import styled from "styled-components";
import { FiSearch, FiBell, FiMail } from "react-icons/fi";

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
`;

const SearchBar = styled.input`
  padding: 10px;
  border: none;
  border-radius: 8px;
  width: 50%;
  background-color:#383838;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const TopBar = () => {
  return (
    <TopBarWrapper>
      <SearchBar placeholder="Search..." />
      <IconWrapper>
        <FiSearch size={24} />
        <FiBell size={24} />
        <FiMail size={24} />
      </IconWrapper>
    </TopBarWrapper>
  );
};

export default TopBar;
