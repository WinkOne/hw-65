import React, {Fragment} from 'react';
import Container from "@material-ui/core/Container";
import Toolbar from "../Toolbar/Toolbar";

const Layout = (props) => {
    return (
        <Fragment>
            <Toolbar/>
            <Container>
                {props.children}
            </Container>
        </Fragment>
    );
};

export default Layout;