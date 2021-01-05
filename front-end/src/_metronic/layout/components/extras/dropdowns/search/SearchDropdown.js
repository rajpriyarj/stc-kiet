import React, { useEffect, useState, useMemo } from "react";
import clsx from "clsx";
import { Dropdown } from "react-bootstrap";  
import SVG from "react-inlinesvg";
import objectPath from "object-path";
import { useHtmlClassService } from "../../../../_core/MetronicLayout";
import { SearchResult } from "./SearchResult";
import { toAbsoluteUrl } from "../../../../../_helpers";
import { DropdownTopbarItemToggler } from "../../../../../_partials/dropdowns";


function createData5(type, text, description, iconImage) {
  return { type, text, description, iconImage };
}

const fakeData = [
  createData5("Text Demo(Name)","Text Demo(Profile)","Text Demo(Eligibility)","Text Demo(CTC)"),
  createData5("","","",""),
  createData5("","","","")
].sort((a, b) => (a.major < b.major ? -1 : 1));


export function SearchDropdown() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  let timeoutId;

  const clearTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
  };

  const handleSearchChange = (event) => {
    setData(null);
    setSearchValue(event.target.value);

    if (event.target.value.length > 2) {
      clearTimeout();

      setLoading(true);

      // simulate getting search result
      timeoutId = setTimeout(() => {
        setData(fakeData);
        setLoading(false);
      }, 500);
    }
  };


  useEffect(() => {
    return () => {
      clearTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas:
        objectPath.get(uiService.config, "extras.search.layout") ===
        "offcanvas",
    };
  }, [uiService]);

  
  return (
    <>
      {layoutProps.offcanvas && (
        <div className="topbar-item">
          <div
            className="btn btn-icon btn-clean btn-lg mr-1"
            id="kt_quick_search_toggle"
          >
            <span className="svg-icon svg-icon-xl svg-icon-primary">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Search.svg")} />
            </span>
          </div> 
        </div>
      )}
      {!layoutProps.offcanvas && (
        <Dropdown
          alignRight
          drop="down"
          onToggle={() => {
            setData(null);
            setLoading(false);
            setSearchValue("");
          }}
          id="kt_quick_search_toggle"
        >
          <Dropdown.Toggle as={DropdownTopbarItemToggler}>

              <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1" style={{width: "200px", backgroundColor: "#f2f2f2"}}>
                
              
            <div
              id="kt_quick_search_dropdown"
              className={clsx("quick-search quick-search-dropdown", {
                "quick-search-has-result": data && data.length,
              })}
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
                    value={searchValue}
                    onChange={handleSearchChange}
                    className="form-control"
                  />

                  <div
                    className={`input-group-append ${
                      loading ? "spinner spinner-sm spinner-primary" : ""
                    }")}`}
                  >
                    
                  </div>
                </div>
              </form>
              <SearchResult data={data} />
            </div>
            </div>
            
          </Dropdown.Toggle>
        </Dropdown>
        
      )}
    </>
  );
}
