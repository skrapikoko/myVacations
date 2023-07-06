import { useEffect, useState } from "react";
import "./Footer.css";
import { Row } from "react-bootstrap";

function Footer(): JSX.Element {

    const [currentYear, setCurrentYear] = useState(0)

    useEffect(() => {
        const updatedYear = new Date().getFullYear()
        setCurrentYear(updatedYear)
    }, [])

    return (
        <div className="Footer">
            <Row className="row">
                <p>{currentYear} is your year! so way not take pampering vacation?</p>
            </Row>
        </div>
    );
}

export default Footer;
