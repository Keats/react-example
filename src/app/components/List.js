import React, { PropTypes } from "react";
import Immutable from "immutable";
import { connect } from "react-redux";

import AddForm from "./AddForm";
import Card from "./Card";
import { addCard } from "../actions/cards";
import { getListCards } from "../reducers/cards";


class List extends React.Component {
  addCard(name) {
    this.props.addCard(name);
  }

  renderCards() {
    const cards = [];
    console.log(this.props.cards.toJS());
    this.props.cards.forEach((card) => {
      cards.push(<Card key={card.id} name={card.name} />);
    });
    return cards;
  }

  render() {
    const { id, name } = this.props.list;
    return (
      <div className="list">
        <h2 className="list__name">{name}</h2>
        {this.renderCards()}
        <AddForm placeholder="Add a card" callback={this.props.addCard.bind(null, id)} />
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.instanceOf(Immutable.Record).isRequired,
  cards: PropTypes.instanceOf(Immutable.List),
  addCard: PropTypes.func.isRequired,
};


function mapState(state, ownProps) {
  return {
    cards: getListCards(state, ownProps.list.cards),
  };
}

export default connect(
  mapState,
  { addCard }
)(List);
