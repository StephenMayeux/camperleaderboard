import React from 'react';

const CamperListItem = ({ camper }) => {
  return (
    <li>{camper.username} with {camper.recent} recent points.</li>
  );
}

export default CamperListItem;
