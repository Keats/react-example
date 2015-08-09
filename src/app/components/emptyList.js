import React, { PropTypes } from "react";

import AddForm from "./addForm";


class EmptyList extends React.Component {
  render() {
    return (
      <div className="list list--add">
        <AddForm placeholder="Add a list" callback={this.addList.bind(this)} />
      </div>
    );
  }

  addList(name) {
    this.props.addList(name);
  }
}

EmptyList.propTypes = {
  addList: PropTypes.func.isRequired,
};

export default EmptyList;
