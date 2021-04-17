import * as actionTypes from "../actions/actionTypes";

const initialState = {
  totalNumberOfLoans: 4,
  totalAmountOfLoans: 49000,
  lenders: [
    {
      id: 1,
      name: "Israel Israeli",
      email: "israel@mail.com",
      registrationDate: "14/09/20",
      numberOfLoans: 3,
      totalLoans: 33000,
      balance: 4000,
      supportedProjects: [
        {
          name: "The Negev project",
          loan: 10000,
          repayment: 1000,
          categories: ["Periphery", "Ethiopian Community"],
          type: "repayments",
        },
        {
          name: "Iggy",
          loan: 15000,
          repayment: 2000,
          categories: ["LGBTQ"],
          type: "fundraising",
        },
        {
          name: "COVID-19",
          loan: 8000,
          repayment: 1000,
          categories: ["Health"],
          type: "finished",
        },
      ],
    },
    {
      id: 2,
      name: "Mark Tzuki",
      email: "mark@mail.com",
      registrationDate: "29/09/20",
      numberOfLoans: 1,
      totalLoans: 8000,
      balance: 1000,
      supportedProjects: [
        {
          name: "The Negev project",
          loan: 8000,
          repayment: 1000,
          categories: ["Periphery", "Ethiopian Community"],
          type: "repayments",
        },
      ],
    },
    {
      id: 3,
      name: "Ella Israela",
      email: "ella@mail.com",
      registrationDate: "03/10/20",
      numberOfLoans: 1,
      totalLoans: 8000,
      balance: 0,
      supportedProjects: [
        {
          name: "Iggy",
          loan: 8000,
          repayment: 0,
          categories: ["LGBTQ"],
          type: "fundraising",
        },
      ],
    },
  ],
};

const LendersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_LENDERS:
      return {
        ...state,
        lenders: [
          ...initialState.lenders.filter((lender) => {
            if (action.searchBy === "lender-name") {
              return lender.name
                .toLowerCase()
                .includes(action.searchValue.toLowerCase());
            } else if (action.searchBy === "lender-email") {
              return lender.email
                .toLowerCase()
                .includes(action.searchValue.toLowerCase());
            } else if (action.searchBy === "project-name") {
              const project = lender.supportedProjects.find((element) =>
                element.name
                  .toLowerCase()
                  .includes(action.searchValue.toLowerCase())
              );
              return project ? true : false;
            }
            return false;
          }),
        ],
      };

    case actionTypes.FILTER_LENDERS:
      return {
        ...state,
        lenders: [

          ...initialState.lenders.filter((lender) => {
              let isReturned = true;
            if(action.settings.total_amount_direction && action.settings['amount-total-amount']){
                
                if(action.settings.total_amount_direction === 'under') {
                    isReturned = isReturned && lender.totalLoans < +action.settings['amount-total-amount'];
                }else{
                    isReturned = isReturned && lender.totalLoans > +action.settings['amount-total-amount']; 
                }
            }
            if(action.settings['project_status']){
                const project = lender.supportedProjects.find((element) =>
                    element.type === action.settings['project_status']
              );
              isReturned = isReturned && ( project ? true: false );
            }
            return isReturned;
          }),
        ],
      };

    default:
      break;
  }
  return state;
};

export default LendersReducer;
