/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink, Link } from "react-router-dom";
import { checkIsActive, toAbsoluteUrl } from "../../../../_helpers";
import SVG from "react-inlinesvg";
import clsx from "clsx";

export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        {/*begin::Header Nav*/}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/dashboard')}`}>
                <NavLink className="menu-link" to="/dashboard">
                    <span className="menu-text">Dashboard</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {/*Classic submenu*/}
            {/*begin::1 Level*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-rel ${getMenuItemActive('/google-material/data-displays/tables')}`}>
                <NavLink className="menu-link" to="/google-material/data-displays/tables">
                    <span className="menu-text">REPORTS</span>
                    <i className="menu-arrow"></i>
                </NavLink>
            </li>
            {/*end::1 Level*/}
            {/*begin::1 Level*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                float="right"
                className={`menu-item menu-item-rel ${getMenuItemActive('/google-material/data-displays/result')}`}>
                <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1" style={{width: "200px", backgroundColor: "#f2f2f2"}}>
                
                <Link className="menu-link" to="/google-material/data-displays/result">
                <div
                  id="kt_quick_search_dropdown"
                  className={clsx("quick-search quick-search-dropdown")}
                >
                  <form className="quick-search-form">
                    <div className="input-group">
                      <div className={`input-group-prepend`}>
                        <span className="input-group-text">
                         
                          <span className="svg-icon svg-icon-lg">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/General/Search.svg"
                              )}
                            />
                          </span>
                
                        </span>
                      </div>
                      <input
                        type="text"
                        autoFocus={true}
                        placeholder="Search..."
                        className="form-control"
                        
                      />
                    </div>
                  </form>
                </div>
                </Link>
                </div>
            </li>
            {/*end::1 Level*/}
            
        </ul>
        {/*end::Header Nav*/}
    </div>;
}
