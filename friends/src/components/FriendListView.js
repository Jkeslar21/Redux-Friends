import React from "react";
import { connect } from "react-redux";

import Friends from './Friends';
import { getFriends } from '../actions';

class FriendListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    if (this.props.isFetching) {
      return <p>LOADING...</p>
    }
    return (
      <div className="FriendList_wrapper">
        <Friends friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  friends: state.friends,
  err: state.err
})

export default connect(mapStateToProps, { getFriends })(FriendListView);
