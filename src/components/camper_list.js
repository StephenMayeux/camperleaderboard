import React from 'react';

import CamperListItem from './camper_list_item';

const VideoList = ({ campers }) => {

  const recentCampersItems = campers.map((camper, index) => {
    return (
      <CamperListItem key={camper.username} camper={camper} number={index + 1} />
    );
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Last 30 Days</th>
          <th>All Time Points</th>
        </tr>
      </thead>
      <tbody>
        {recentCampersItems}
      </tbody>
    </table>
  );
}

export default VideoList;
