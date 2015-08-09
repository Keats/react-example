import React, { PropTypes } from "react";
import Immutable from "immutable";


class List extends React.Component {
  render() {
    const { name } = this.props.list;
    return (
      <div className="list">
        <h2 className="list__name">{name}</h2>
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.instanceOf(Immutable.Record).isRequired,
};


export default List;
