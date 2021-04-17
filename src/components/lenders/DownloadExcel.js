import { Fragment } from "react";
import ReactExport from "react-export-excel";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const DownloadExcel = (props) => {
  return (
    <Fragment>
      <h3 className="text-center mt-5 pt-5 text-secondary">Download Document...</h3>
      <ExcelFile hideElement={true} filename="sparkIL_lenders">
        <ExcelSheet data={props.$lenders} name="lenders">
          <ExcelColumn label="Name" value="name" />
          <ExcelColumn label="Email" value="email" />
          <ExcelColumn label="Registration" value="registrationDate" />
          <ExcelColumn label="# of loans" value="numberOfLoans" />
          <ExcelColumn label="Total loans" value="totalLoans" />
          <ExcelColumn label="Balance" value="balance" />
        </ExcelSheet>
      </ExcelFile>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    $lenders: state.lendersReducer.lenders,
  };
};
export default connect(mapStateToProps)(withRouter(DownloadExcel));
