import React from "react";
// import axios from "axios";

import SearchBar from "./SearchBar";
import Unsplash from "../api/Unsplash";
import ImageList from "./ImageList";

class App extends React.Component {

   state = {images: []};

   onSearchSubmit = (term) => {
      Unsplash.get("/search/photos", {
         params: {
            query: term,
            per_page: 25,
            order_by: "popular"
         }
      }).then((response) => {
         console.log(response);
         this.setState({images: response.data.results});
      }).catch((err) => {
         console.log(err);
      });
   };

   render() {
      return (
         <div className="ui container" style={{marginTop: "1rem"}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
         </div>
      );
   }
}

export default App;