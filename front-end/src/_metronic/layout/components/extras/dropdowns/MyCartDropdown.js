/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown } from "react-bootstrap";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";



export function MyCartDropdown() {
  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-my-cart-toggle"
      >
        
      </Dropdown.Toggle>
      
    </Dropdown>
  );
}
