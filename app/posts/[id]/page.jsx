import React from "react";

const PostInfo = ({ params }) => {
  const { id } = params;
  return (
    <div className="">
      <h1>esto es post numero: {id}</h1>
    </div>
  );
};
export default PostInfo;
