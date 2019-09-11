import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { userService } from '../../_services';

import { authenticationService } from '../../_services';
import { history, Role } from '../../_helpers';

class Admin extends React.Component {


    logout() {
        this.setState({
            currentUser: null,
            isAdmin: false
        })
        authenticationService.logout();
        history.push('/');
    }
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand bg-nav">
                    <Link class="navbar-brand">Stock Tips-Admin</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            {<li class="nav-item"><Link to="/admin/commodities" className="nav-item nav-link">Commodities</Link></li>}
                            {<li class="nav-item"><Link to="/admin/advisors" className="nav-item nav-link">Advisors</Link></li>}
                            {<li class="nav-item"><Link to="/admin/tips" className="nav-item nav-link">Tips</Link></li>}
                            <li class="nav-item">
                                <Link onClick={this.logout.bind(this)} className="nav-link btn" href="#">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="body-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <Card body>
                                    <CardTitle>Commodities</CardTitle>
                                    <Link to="/admin/commodities" className="nav-item nav-link"><Button className="btn-full">Go</Button></Link>
                                </Card>
                            </div>
                            <div className="col-md-4">
                                <Card body>
                                    <CardTitle>Advisors</CardTitle>
                                    <Link to="/admin/advisors" className="nav-item nav-link"><Button className="btn-full">Go</Button></Link>
                                </Card>
                            </div>
                            <div className="col-md-4">
                                <Card body>
                                    <CardTitle>Tips</CardTitle>
                                    <Link to="/admin/tips" className="nav-item nav-link"><Button className="btn-full">Go</Button></Link>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export { Admin };