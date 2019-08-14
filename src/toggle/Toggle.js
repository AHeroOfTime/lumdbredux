import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { toggleMessage } from '../toggle/actions';

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <ToggleText>
    {messageVisibility && <p>This is toggleable text!</p>}
    <button onClick={toggleMessage}>Toggle Me</button>
  </ToggleText>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toggle);

const ToggleText = styled.div`
  color: #fff;
`;
