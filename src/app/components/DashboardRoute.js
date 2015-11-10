import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Immutable from "immutable";


import List from "./List";
import EmptyList from "./EmptyList";
import { getAllLists } from "../reducers/lists";


export class DashboardRoute extends React.Component {
  renderLists() {
    const lists = [];
    this.props.lists.forEach(list => {
      lists.push(<List key={list.id} list={list} />);
    });
    lists.push(<EmptyList key="empty" />);
    return lists;
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <div className="lists">{this.renderLists()}</div>
      </div>
    );
  }
}

DashboardRoute.propTypes = {
  lists: PropTypes.instanceOf(Immutable.List).isRequired,
};

function mapStateToProps(state) {
  return {
    lists: getAllLists(state),
  };
}

export default connect(
  mapStateToProps,
  null,
)(DashboardRoute);
