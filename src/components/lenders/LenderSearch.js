import { useReducer } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { filterLenders, searchLenders } from "../../store/actions";
import styles from "./LenderSearch.scss";

const LenderSearch = (props) => {
    const initialState = {
        searchBy: "lender-name",
        searchValue: "",

      };

  const formReducer = (state, event) => {
    if(event.type === 'RESET_ALL'){
        return {
            ...initialState
        };
    }
    else if(event.type === 'RESET_SEARCH'){
        return {
            ...state,
            searchValue : event.searchValue
        };
    }else{
        return {
            ...state,
            [event.target.name]: event.target.value,
          };
    }
    
  };
  const [formData, setFormData] = useReducer(formReducer, initialState);

  const handleSearch = (event) => {
    event.preventDefault();
    props.$searchLenders(formData.searchBy, formData.searchValue);
  };

  const handleFilter = (event) => {
    event.preventDefault();
    props.$filterLenders(formData);
  };

  const handleSearchValue = (event) => {
      event.preventDefault();
      setFormData({
        type: 'RESET_SEARCH',
        searchValue: "",
        amount_total_amount: "",

      })
  }

  const handleReset = (event) => {
    event.preventDefault();
    setFormData({
      type: 'RESET_ALL'
    })
}
  return (
    <Row>
      <Col md={9} className="px-0">
        <div className="bg-light p-5">
          <form className="form-inline" onSubmit={handleSearch}>
            <div className="col-12 mb-3">
              <i className="search-icon"></i> &nbsp; Search by: &nbsp;
              <select
                name="searchBy"
                className="form-select search-by"
                onChange={setFormData}
                defaultValue="lender-name"
              >
                <option value="lender-name">Lender's name</option>
                <option value="lender-email">Lender's email</option>
                <option value="project-name">project's name</option>
              </select>
              <input
                type="text"
                name="searchValue"
                value={formData.searchValue}
                onChange={setFormData}
                className="form-control form-control-sm"
                placeholder="Mark..."
              />
              <button
                type="submit"
                className="ml-2 btn btn-primary btn-sm col-2"
              >
                Search
              </button>
              { formData.searchValue &&  <div className="ml-2 px-2 bg-semi-light d-inline"> <small>Search for: "{formData.searchValue}" <button type="button" onClick={handleSearchValue} className="ml-2 mb-1 btn btn-link btn-sm">x</button></small></div> }
              
            </div>
            </form>
            <form onSubmit={handleFilter}>
            <div className="col-12">
              <i className="filter-icon"></i> &nbsp; Filter by: &nbsp;
              <Dropdown className="d-inline">
                <Dropdown.Toggle
                  className="btn btn-link btn-sm bg-transparent border-0"
                  id="dropdown-total-amount"
                >
                  Total Amount
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-filters" style={{ width: "200px" }}>
                  <div className="col p-3">
                    <Row className="text-center">
                      <Col sm={6}>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="total_amount_under"
                            name="total_amount_direction"
                            value="under"
                            onChange={setFormData}
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="total_amount_under"
                          >
                            Under
                          </label>
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="total_amount_over"
                            name="total_amount_direction"
                            value="over"
                            onChange={setFormData}
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="total_amount_over"
                          >
                            Over
                          </label>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="input-group my-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text text-success pl-0"
                              id="basic-addon1"
                            >
                              $
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control amount-total-amount"
                            name="amount-total-amount"
                            onChange={setFormData}
                            placeholder="30000"
                            aria-label="amount"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <button
                          type="submit"
                          className="btn btn-link text-purple float-right"
                        >
                          Go
                        </button>
                      </Col>
                    </Row>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="d-inline">
                <Dropdown.Toggle
                  className="btn btn-link btn-sm bg-transparent border-0"
                  id="dropdown-basic"
                >
                  Project Status
                </Dropdown.Toggle>

                <Dropdown.Menu  className="dropdown-menu-filters" style={{ width: "200px" }}>
                  <div className="col p-3">
                  <Row className="">
                      <Col>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="project-status-fundraising"
                            name="project_status"
                            value="fundraising"
                            onChange={setFormData}
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="project-status-fundraising"
                          >
                            Fundraising
                          </label>
                        </div>
                      </Col>
                      <Col>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="project-status-repayments"
                            name="project_status"
                            value="repayments"
                            onChange={setFormData}
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="project-status-repayments"
                          >
                            Repayments
                          </label>
                        </div>
                      </Col>
                      <Col>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="project-status-finished"
                            name="project_status"
                            value="finished"
                            onChange={setFormData}
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="project-status-finished"
                          >
                            Finished
                          </label>
                        </div>
                      </Col>
                    
                    </Row>
                    <Row>
                        <Col>
                        <button type="submit" className="btn btn-link text-purple float-right">
                        Go
                    </button>
                    </Col>
                    </Row>
                    
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="d-inline">
                <Dropdown.Toggle
                  className="btn btn-link btn-sm bg-transparent border-0"
                  id="dropdown-basic"
                >
                  Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div><p className="px-2 text-center">Comming Soon!</p></div>
                </Dropdown.Menu>
              </Dropdown>
              <button type="submit" className="btn btn-link text-purple">
                Go
              </button>
              {/* <button onClick={handleReset} type="button" className="btn btn-link text-danger">
                Reset
              </button> */}
            </div>
          </form>
        </div>
      </Col>
      <Col md={3} className="pr-0">
        <div className="bg-light px-3 py-5">
          <div className="col-12 mb-3">
            <h6 className="text-purple mb-0">
              {props.$totalNumberOfLoans.toLocaleString()}
            </h6>
            <small>Total number of loans</small>
          </div>
          <div className="col-12">
            <h6 className="text-success mb-0">
              ${props.$totalAmountOfLoans.toLocaleString()}
            </h6>
            <small>Total amount of loans</small>
          </div>
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    $totalNumberOfLoans: state.lendersReducer.totalNumberOfLoans,
    $totalAmountOfLoans: state.lendersReducer.totalAmountOfLoans,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    $searchLenders: (SearchBy, SearchValue) =>
      dispatch(searchLenders(SearchBy, SearchValue)),
    $filterLenders: (settings) =>
      dispatch(filterLenders(settings)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LenderSearch);
