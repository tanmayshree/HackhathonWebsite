import React from 'react';
import FaqComp from './FaqComp'


function Faq() {
  return (
    <div className="flex flex-col justify-center items-center my-14">
      <FaqComp sno="1" ques="Why this kolaveri di?" ans="Jai shree Ram" />
      <FaqComp sno="1" ques="Why this kolaveri di?" ans="Jai shree Ram" />
      <FaqComp sno="1" ques="Why this kolaveri di?" ans="Jai shree Ram" />
      <FaqComp sno="1" ques="Why this kolaveri di?" ans="Jai shree Ram" />
      <FaqComp sno="1" ques="Why this kolaveri di?" ans="Jai shree Ram" /> 
    </div>
  );
}

export default Faq;
