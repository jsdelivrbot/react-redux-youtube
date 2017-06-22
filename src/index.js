import React, { Component } from 'react';
//To render components onto the DOM, have to use react-dom
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//Youtube Data Browser API Key
const API_KEY = 'AIzaSyDZ0QhwCDWi7ZHcFLKIUyUA0yZf2AaLMw8';

class App extends Component {
  constructor(props) {
    super(props);

    //main app state has a prop of a list of videos
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('dota2');
  }

  videoSearch(term) {
    //grabbing a first list of videos on app instantiation
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      // *quick note: when the key and property are the same, you can reduce it to the one term in ES6 - videos in this case
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    // debounce function from lodash to throttle the requests made to YT
    // debounce returns a new function that can only be called every 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
          />
      </div>
    );
  }
}

//JSX returns an instance of the class component - instances
//are created via React.createElement implicitely in the lib.  By passing
//render a JSX syntax it instantiates the class
//ReactDom.render takes a 2nd argument which is a reference to a DOM node on the page
ReactDOM.render(<App />, document.querySelector('.container'));