import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink, Route, withRouter } from "react-router-dom";
import DownloadExcel from "./DownloadExcel";
import LenderItem from "./LenderItem";

import styles from "./LendersList.scss";

const LendersList = (props) => {
  return (
    <Fragment>
      <Row>
        <Col className="pl-0 py-3">
          <div>
            <div className="fund-type d-inline mr-4">
              <i className="fundraising-icon"></i>
              Fundraising
            </div>
            <div className="fund-type d-inline mr-4">
              <i className="repayments-icon"></i>
              Repayments
            </div>
            <div className="fund-type d-inline mr-4">
              <i className="finished-icon"></i>
              Finished
            </div>
            <NavLink
              target="_blank"
              to={{ pathname: "/download-excel" }}
              className="float-right text-success"
            >
              <i className="excel-icon mr-1"></i>
              Export
            </NavLink>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="pl-0">
          {!props.$lenders.length && (
            <div className="p-5 text-center">
              <h4>No lenders found!</h4>
            </div>
          )}
          {!!props.$lenders.length && (
            <div className="table-responsive">
              <table className="table border-0 text-left">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Registration</th>
                    <th style={{ width: "1%" }}># of Loans</th>
                    <th> Total Loans</th>
                    <th>Balance</th>
                    <th>Supported projects</th>
                    <th>Categories</th>
                    <th>Loan</th>
                    <th style={{ width: "12%" }}>Repayments</th>
                  </tr>
                </thead>
                <tbody>
                  {props.$lenders.map((lender, index) => (
                    <LenderItem key={lender.id} index={index} lender={lender} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Col>
      </Row>
      {/* <Route target="_blank" path="/download-excel"  component={DownloadExcel} /> */}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    $lenders: state.lendersReducer.lenders,
  };
};

export default connect(mapStateToProps)(withRouter(LendersList));
