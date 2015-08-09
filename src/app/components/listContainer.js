import Immutable from "immutable";
import React, { PropTypes } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../actionCreators/lists";
import List from "./list";
import EmptyList from "./emptyList";


class ListContainer extends React.Component {
  renderLists() {
    const lists = [];
    this.props.lists.forEach(list => {
      lists.push(<List key={list.id} list={list} />);
    });
    lists.push(<EmptyList key="empty" addList={this.props.addList} />);
    return lists;
  }

  render() {
    return (
      <div>
        <h3>A random board</h3>
        <div className="lists">
          {this.renderLists()}
        </div>
      </div>
    );
  }
}

ListContainer.propTypes = {
  lists: PropTypes.instanceOf(Immutable.Map).isRequired,
  addList: PropTypes.func.isRequired,
};


function mapState(state) {
  return {
    lists: state.lists,
  };
}

function mapActionCreators(dispatch) {
  return {
    addList: (name) => dispatch(actionCreators.addList(name)),
  };
}

export default connect(mapState, mapActionCreators)(ListContainer);
