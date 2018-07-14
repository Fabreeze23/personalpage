import React, { Component } from 'react';
import CountryInfo from './CountryInfo/CountryInfo';
import axios from 'axios';

/* Practing http requests.
 Searches through country codes with API call. Will pass down the returned object to CountryInfo Component
 as countryListProps.
*/

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',

      countryList: [],
    }

  }

  searchSubmit = this.searchSubmit.bind(this);

  //=============================================================API REQUEST============================================

  searchSubmit(event) {
    event.preventDefault();
    const inputs = event.target.getElementsByTagName('input');

    var searchInput = inputs.countryCode.value;

    this.setState({
      searchTerm: searchInput,
    })

    const API_URL = `http://services.groupkt.com/state/get/${searchInput}/all`;

  //=====================GET REQUEST
    axios.get(API_URL)
  .then( (response) => {
    console.log(response.data.RestResponse.result);
    this.setState({
      countryList: response.data.RestResponse.result,
    })
  })
  .catch( (error) => {
    console.log(error);
  });

  }

  //===================================================================================================================

  render() {
    return(


    <div>
     <form onSubmit={this.searchSubmit}>
       <label>
         Country Code:
         <input type="text" name="countryCode" />
       </label>


       <input type="submit" value="Submit" />
     </form>


     <CountryInfo countryListProps={this.state.countryList}/>
   </div>
  );
 }




}

export default Search;
