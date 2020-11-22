import * as React from "react";
import {Link} from "react-router-dom";
import {Button} from "./Button";
import {Logo} from "./Logo";
import {HeaderStyle} from "./HeaderStyle";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderStyle>
                <Link to="/">
                    <Button height="45px"
                            width="120px"
                            onclick={this.buttonClick}>
                        Personal
                    </Button>
                </Link>
                <Logo>
                    XSphere
                </Logo>
                <Link to="/enterprise">
                    <Button height="45px"
                            width="120px"
                            onclick={this.buttonClick}>
                        Enterprise
                    </Button>
                </Link>
            </HeaderStyle>
        );
    }
}