import React from "react";
import styled from "styled-components";
import { FaBullseye, FaUtensils, FaBookOpen } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const QuickLinksWrapper = styled.div`
  background-color: #383838;
  padding: 20px;
  border-radius: 12px;
`;

const LinkItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: white;
  font-size: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
    font-size: 60px; /* Increase icon size here */
  }
`;

const QuickLinks = () => {
  const links = [
    { name: "Goals", icon: <FaBullseye /> },
    { name: "Popular Dishes", icon: <FaUtensils /> },
    { name: "Menus", icon: <FaBookOpen /> },
  ];

  return (
    <QuickLinksWrapper>
      {links.map((link, index) => (
        <LinkItem key={index}>
          <IconWrapper>
            {link.icon}
            {link.name}
          </IconWrapper>
          <FiArrowRight style={{ fontSize: '20px' }} /> {/* Increase arrow icon size */}
        </LinkItem>
      ))}
    </QuickLinksWrapper>
  );
};

export default QuickLinks;
