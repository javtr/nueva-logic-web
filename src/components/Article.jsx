import React from "react";
import { useParams } from "react-router-dom";

export default function Article() {
  const params = useParams();

  return (
    <div>
      Article:
      {params.articleId}
    </div>
  );
}
