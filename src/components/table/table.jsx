import React, {Component, PropTypes} from 'react';

class Table extends Component {
  render() {

    console.log(this.props.searchFieldValue);

    /* Our for each loop */
    let rows = [];
    this.props.mpData.forEach((mp, index) => {

      const fulltext = Object.values(mp).join().toLowerCase();
      const searchValue = this.props.searchFieldValue.toLowerCase();

      if (!searchValue || fulltext.indexOf(searchValue) > -1) {

        /* Changes the order of the names */
        let name = mp.name.split(', ')
        name = name.reverse().join(' ');

        rows.push(
          <tr key={index}>
            <td>{name}</td>
            <td>{mp.party}</td>
            <td>{mp.electorate}</td>
            <td><a href={'mailto:' + mp.email}>{mp.email}</a></td>
          </tr>
        );

      }

    });

    if (rows.length === 0) {
      rows = (
          <tr><td colSpan="4">No results</td></tr>
      );
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Party</th>
            <th>Electorate</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );

  }
}

Table.propTypes = {
  mpData: PropTypes.array.isRequired,
  searchFieldValue: PropTypes.string
};

export default Table;
