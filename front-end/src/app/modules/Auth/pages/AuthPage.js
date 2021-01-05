/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Link, Switch, Redirect} from "react-router-dom";
import {toAbsoluteUrl} from "../../../../_metronic/_helpers";
import {ContentRoute} from "../../../../_metronic/layout"
import Login from "./Login";
import Registration from "./Registration";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";

export function AuthPage() {
  return (
      <>
        <div className="d-flex flex-column flex-root">
          {/*begin::Login*/}
          <div
              className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white"
              id="kt_login"
          >
            
            {/*begin::Content*/}
            <div className="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10">
              
              {/*begin::Content header*/}
              <div className="position-absolute top-0 left-0 text-left" 
              style={{
                margin: "1%"
              }}>
                <div className="flex-column-auto">
                  <img
                      alt="Logo"
                      className="flex-column-auto mr-40"
                      style={{
                        height: "100px",
                        width: "130px",
                      }}
                      src={toAbsoluteUrl("/media/logos/hk.png")}
                  />
                  <img
                      alt="Logo"
                      className="flex-column-auto ml-40"
                      style={{
                        height: "100px",
                        width: "165px",
                        paddingLeft: "55px",
                        marginRight:"0%"
                      }}
                      src={toAbsoluteUrl("/media/logos/kiet-logo.png")}
                  />
                  </div>
                </div>
              {/*end::Content header*/}

              {/* begin::Content body */}
              <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
                <Switch>
                <ContentRoute path="/auth/login" component={Login}/>
                <ContentRoute path="/auth/registration" component={Registration}/>
                {/* <ContentRoute
                    path="/auth/forgot-password"
                    component={ForgotPassword}
                /> */}
                <Redirect from="/auth" exact={true} to="/auth/login"/>
                <Redirect to="/auth/login"/>
              </Switch>
              </div>
              {/*end::Content body*/}

              {/* start:: Aside footer for desktop */}
      <div className="position-absolute bottom-0 left-0 d-none flex-column-auto d-lg-flex justify-content-between mt-10" style={{
        marginBottom: "1.3%",
        marginLeft: "0.6%"}}>
            <div className="opacity-70 font-weight-bold	text-black">
              Designed and Developed by STC-KIET
            </div>
            <div className="d-flex" style={{color: "black", paddingLeft:"200px"}}>
                <Link to="/terms" className="text-black ml-10">
                  Meet the Team
                </Link>
            </div>
      </div>
      {/* end:: Aside footer for desktop */}
      
            </div>
            {/*end::Content*/}

            {/*begin::Aside*/}
            <div
                className="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden"
                style={{
                  backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-4.jpg")})`
                }}
            >
              {/*begin: Aside Container*/}
              <div className="d-flex flex-row-fluid flex-column justify-content-between">
                {/* start:: Aside header */}
                <Link to="/" className="flex-column-auto mt-5">
                  <center>
                  <img
                      alt="Logo"
                      className="max-h-70px"
                      style={{
                        height: "250px",
                        width: "250px"
                      }}
                      src={toAbsoluteUrl("/media/logos/connectx-logo.png")}
                  />
                  </center>
                </Link>
                {/* end:: Aside header */}

                {/* start:: Aside content */}
                <div className="row flex-column-fluid d-flex flex-column justify-content-center" style={{color:"white"}}>
              
                <h4 style={{
                  marginLeft: "25%",
                  marginBottom: "0%"}}>ABOUT US
                  <span style={{
                    marginLeft: "17.85%",
                    marginBottom: "0%"
                  }}></span>
                  <span style={{
                  marginLeft: "25%"}}>APPROACH</span></h4>
                  <div className="row" style={{marginRight: "25px", marginLeft: "55px"}}>
                  <div className="col-md-6 col-sm-6 h-1 p-26" style={{borderRight: "1.55px solid white", borderBottom: "1.55px solid white"}}>
                  </div>
                  <div className="col-md-6 col-sm-6" style={{borderLeft: "1.55px solid white", borderBottom: "1.55px solid white"}}>
                  </div>
                  </div>
                  <div className="row" style={{marginRight: "25px", marginLeft: "55px"}}>
                  
                  <div className="col-md-6 col-sm-6" style={{borderRight: "1.55px solid white", borderTop: "1.55px solid white"}}>
                  <center><h4 style={{
                  marginLeft: "45%",
                  marginBottom: "0%"}}>OBJECTIVE
                  <span style={{
                    marginLeft: "100%",
                    marginBottom: "0%"
                  }}></span>
                  <span style={{
                  marginLeft: "25%"}}>DISCLAIMER</span></h4></center>
                  </div>
                  <div className="col-md-6 col-sm-6 h-1 p-26" style={{borderLeft: "1.55px solid white", borderTop: "1.55px solid white"}}>
                  </div>
                  </div>

                </div>
                {/* end:: Aside content */}

                {/* start:: Aside footer for desktop */}
      <div className="d-none flex-column-auto d-lg-flex justify-content-between mt-10">
            <div className="opacity-70 font-weight-bold	text-black">
            </div>
            <div className="d-flex text-white">
                All Rights Reserved
            </div>
      </div>
      {/* end:: Aside footer for desktop */}
              </div>
              {/*end: Aside Container*/}
            </div>
            {/*begin::Aside*/}
            
          </div>
          {/*end::Login*/}
        </div>
      </>
  );
}