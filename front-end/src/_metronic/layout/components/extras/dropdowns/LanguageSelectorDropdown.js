/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown } from "react-bootstrap";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";



export function LanguageSelectorDropdown() {
  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-my-cart"
      >
        
      </Dropdown.Toggle>
  
    </Dropdown>
  );
}
