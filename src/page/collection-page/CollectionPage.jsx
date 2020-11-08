import React from "react";

const CollectionPage = ({ match }) => {
  const { collection } = match.params;
  return (
    <div className="collection-page">
      <span className="collection-title">{collection.toUpperCase()}</span>
    </div>
  );
};

export default CollectionPage;
