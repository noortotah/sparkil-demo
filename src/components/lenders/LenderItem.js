import { Fragment } from "react";
import styles from "./LendersList.scss";

const LenderItem = (props) => {
  return (
    <Fragment>
      <tr className="bg-light mb-2">
        <th scope="row" rowSpan={props.lender.supportedProjects.length }>
          {props.index + 1}.
        </th>
        <td className="font-weight-500" rowSpan={props.lender.supportedProjects.length }>
          {props.lender.name}
        </td>
        <td rowSpan={props.lender.supportedProjects.length }>{props.lender.email}</td>
        <td rowSpan={props.lender.supportedProjects.length }>{props.lender.registrationDate}</td>
        <td className="text-purple font-weight-500" rowSpan={props.lender.supportedProjects.length  }>
          {props.lender.numberOfLoans}
        </td>
        <td className="text-purple font-weight-500" rowSpan={props.lender.supportedProjects.length  }>
          ${props.lender.totalLoans.toLocaleString()}
        </td>
        <td rowSpan={props.lender.supportedProjects.length }>
          <p className="mb-0 py-3 balance-border text-success font-weight-500">
            ${props.lender.balance.toLocaleString()}
          </p>
        </td>

        <td className="font-weight-500">
          <i className={props.lender.supportedProjects[0].type+'-icon'}></i>“
          {props.lender.supportedProjects[0].name}”
        </td>
        <td>{props.lender.supportedProjects[0].categories.join(", ")}</td>
        <td className="font-weight-500">
          ${props.lender.supportedProjects[0].loan.toLocaleString()}
        </td>
        <td>
          <p className="mb-1 font-weight-500">
            ${props.lender.supportedProjects[0].repayment.toLocaleString()} repayed
          </p>
          <small className="text-muted font-weight-light">
            ($
            {(props.lender.supportedProjects[0].loan -
              props.lender.supportedProjects[0].repayment).toLocaleString()}{" "}
            left)
          </small>
        </td>
      </tr>

      {props.lender.supportedProjects.map((project, projectIndex) => (
          ( projectIndex > 0 && <tr key={props.lender.id+projectIndex} className="bg-light">
            <td className="font-weight-500">
              <i className={project.type+'-icon'}></i>“{project.name}”
            </td>
            <td>{project.categories.join(", ")}</td>
            <td className="font-weight-500">${project.loan.toLocaleString()}</td>
            <td>
              <p className="mb-1 font-weight-500">
                ${project.repayment.toLocaleString()} repayed
              </p>
              <small className="text-muted font-weight-light">
                (${(project.loan - project.repayment).toLocaleString()} left)
              </small>
            </td>
          </tr> )
      ))}

      <tr className="separator"></tr>
    </Fragment>
  );
};

export default LenderItem;
