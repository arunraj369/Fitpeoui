import React from "react";
import styled from "styled-components";

const FeedbackWrapper = styled.div`
  background-color: #383838;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const FeedbackItem = styled.div`
  margin-bottom: 20px;
`;

const Rating = styled.div`
  color: gold;
`;

const FeedbackText = styled.p`
  color: white;
  font-size: 14px;
`;

const CustomerFeedback = () => {
  const feedback = [
    {
      customer: "Jenny Wilson",
      rating: "★★★★★",
      comment:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.",
    },
    {
      customer: "Arun Raj",
      rating: "★★★★",
      comment:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.",
    },
    
  ];

  return (
    <FeedbackWrapper>
      {feedback.map((item, index) => (
        <FeedbackItem key={index}>
            <h1>{item.customer}</h1>
          <Rating>{item.rating}</Rating>
          <FeedbackText>{item.comment}</FeedbackText>
        </FeedbackItem>
      ))}
    </FeedbackWrapper>
  );
};

export default CustomerFeedback;
