import Title from "@/components/Title";
import React from "react";

const TutorialPages = async ({ params }) => {
  const { slug } = await params;
  const [technology, topic, page_no, subject] = slug || [];
  // console.log(result);
  //   const result = await params;
  //   console.log(result);
  return (
    <div>
      <Title>{technology} tutorials</Title>
      <h2>{topic}</h2> <hr />
      <div>
        <h3 className="font-bold">{subject}</h3>
        <p>page no : {page_no}</p>
      </div>
      <p>this is TutorialPages</p>
      <p>this is tutorials page</p>
    </div>
  );
};

export default TutorialPages;
