// import React from "react";
// import VideoItem from "./VideoItem";

// const VideoList = (props) => {
//   const renderedList = props.videos.map((video) => { return <VideoItem />;
//   });

//   return <div>{renderedList}</div>;
// };

// export default VideoList;

import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>; // show list of videos
};

export default VideoList;
