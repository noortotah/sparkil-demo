import { Container, Row } from "react-bootstrap";
import LenderSearch from "./LenderSearch";
import LendersList from "./LendersList";

const Lenders = () => {
    return ( 
        <Container>
            <Row>
               <h4 className="my-4">Lenders</h4> 
            </Row>
            <LenderSearch />
            <LendersList />
        </Container>
     );
}
export default Lenders;