import React from "react";

class SearchBar extends React.Component {

   constructor(props) {
      super(props);
      this.state = {term: ""};
   }

   onFormSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.term);
   }

   render() {
      return (
         <div className="ui segment">
            <form className="ui form" onSubmit={e => this.onFormSubmit(e)}>
               <div className="feild">
                  <label>Seach Image </label>
                  <input type="text" value={this.state.term}
                     onChange={e => {this.setState({term: e.target.value});}} />
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;