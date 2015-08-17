import React, { PropTypes } from "react";
import Immutable from "immutable";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as cardActionCreators from "../actionCreators/cards";
import AddForm from "./addForm";
import Card from "./card";


class List extends React.Component {
  renderCards() {
    const cards = [];
    this.props.cards.forEach((card) => {
      cards.push(<Card key={card.id} name={card.name} />);
    });
    return cards;
  }

  render() {
    const { name } = this.props.list;
    return (
      <div className="list">
        <h2 className="list__name">{name}</h2>
        {this.renderCards()}
        <AddForm placeholder="Add a card" callback={this.addCard.bind(this)} />
      </div>
    );
  }

  addCard(name) {
    this.props.addCard(name);
  }

}

List.propTypes = {
  list: PropTypes.instanceOf(Immutable.Record).isRequired,
  cards: PropTypes.instanceOf(Immutable.List),
  addCard: PropTypes.func.isRequired,
};


function mapState(state) {
  return {
    cards: state.cards,
  };
}

function mapActionCreators(dispatch) {
  return {
    cardActions: bindActionCreators(cardActionCreators, dispatch),
  };
}

function merge(state, actions, props) {
  return {
    ...props,
    cards: props.list.cards.map(cardId => state.cards.get(cardId)),
    addCard: (name) => actions.cardActions.addCard(props.list.id, name),
  };
}

export default connect(mapState, mapActionCreators, merge)(List);
