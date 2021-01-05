/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import objectPath from "object-path";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";

export function QuickActionsDropdown() {
 
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas:
        objectPath.get(uiService.config, "extras.quick-actions.layout") ===
        "offcanvas",
    };
  }, [uiService]);

  return (
    <>
      
      {!layoutProps.offcanvas && (
        <Dropdown drop="down" alignRight>
          <Dropdown.Toggle
            as={DropdownTopbarItemToggler}
            id="kt_quick_actions_panel_toggle"
          >
            
          </Dropdown.Toggle>

          
        </Dropdown>
      )}
    </>
  );
}
