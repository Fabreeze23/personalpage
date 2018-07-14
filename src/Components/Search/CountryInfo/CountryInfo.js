import React, { Component } from 'react';

/* Receives returned data from Search Component as countryListProps

*/



class CountryInfo extends Component {


  constructor(props) {
    super(props);

    this.state = {

    }

  }


  // Do not need to bind this method because it does not handle state.
  // countryData is simply my name for the individual country data that is mapped

  renderCountries(countryData) {

    const ID = countryData.id;
    const country = countryData.country
    const name = countryData.name;
    const abbr = countryData.abbr;
    const area = countryData.area;
    const largest_city = countryData.largest_city;
    const capital = countryData.capital;

    return (
      <tr key={ID}>
        <td>{ID}</td>
        <td>{country}</td>
        <td>{name}</td>
        <td>{abbr}</td>
        <td>{area}</td>
        <td>{largest_city}</td>
        <td>{capital}</td>
      </tr>
    );

  }

  render() {

    return(
      <center>
        <h1>Countries With States (So far only USA and IND search have worked with API)</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Country</th>
              <th>Name</th>
              <th>Abbreviation</th>
              <th>Area</th>
              <th>Largest City</th>
              <th>Capital</th>
            </tr>
          </thead>
          <tbody>
            {this.props.countryListProps.map(this.renderCountries)}
          </tbody>
        </table>
      </center>
    );

  }




}

export default CountryInfo;
