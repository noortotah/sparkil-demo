import { Fragment } from "react";
import { Route } from "react-router-dom";
import DownloadExcel from "../components/lenders/DownloadExcel";
import Lenders from "../components/lenders/Lenders";
import Projects from "../components/projects/Projects";
import Header from "./Header";

const Layout = () => {
    return ( 
        <Fragment>
            <Header />
            <Route path="/lenders" component={Lenders} />
            <Route path="/projects" component={Projects} /> 
            <Route target="_blank" path="/download-excel"  component={DownloadExcel} />
        </Fragment>
        
        
     );
}
 
export default Layout;