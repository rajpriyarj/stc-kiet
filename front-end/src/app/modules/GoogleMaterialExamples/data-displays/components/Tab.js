import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button} from "@material-ui/core";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <Button
        className={className}
        onClick={onClick}
        style={{float: 'left', listStyle: 'none', padding: '10px 115.7px', borderRight: '0.5px solid white', color: 'white'}}
      >
        {label}
      </Button>
    );
  }
}

export default Tab;