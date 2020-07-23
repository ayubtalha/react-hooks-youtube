import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
// import ReactDOM from "react-dom"

const KEY = "AIzaSyBkGrz-7ITMbdVDSxDy8mvOekvFu1DVwPk";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // when user first open it buildings would be searched already
  componentDidMount() {
    this.onTermSubmit("Messi");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video", // index.js:1 Warning: Each child in a list should have a unique "key" prop.
        key: KEY,
      },
    });
    console.log(term);
    console.log(response);
    console.log(response.data);
    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0], // when first searched buildings then first video in
      // videolist would be displyed in video detail area
    });
  };

  onVideoSelect = (video) => {
    //video in function is passed
    //from VideoItem.js and it is a callback function
    //whenever user select the specific vido in VideoList
    console.log(video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* {this.state.videos.length} videos */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
              {/* props for VideoDetail */}
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect} //callback from VideoItem
                videos={this.state.videos} //props for VideoList
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
