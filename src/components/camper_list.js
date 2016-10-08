import React from 'react';

import CamperListItem from './camper_list_item';

const VideoList = ({ campers }) => {

  const recentCampersItems = campers.map((camper) => {
    return (
      <CamperListItem key={camper.username} camper={camper} />
    );
  });

  return (
    <ul>
      {recentCampersItems}
    </ul>
  );
}

export default VideoList;
