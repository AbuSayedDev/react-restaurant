import React, { Component } from "react";
import { Card, CardHeader, CardBody, Button, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import {LocalForm, Control, Errors} from 'react-redux-form';

class Contact extends Component  {
/*
    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "Tel.",
            message: "",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.type === "checkbox" ?  event.target.checked : event.target.value;

        this.setState({
            [name]:value
        });
    }

    handleSubmit = event => {
        console.log(this.state);

        this.setState({
            firstName: "",
            lastName: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "Tel.",
            message: "",
        });

        event.preventDefault();
    }

*/



handleSubmit = values => {
    console.log(values);
}


   render(){
    document.title = "Contact";
        return(
            <div>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-8 m-auto">
                            <Card className="mb-5">
                                <CardHeader>
                                    Contact From
                                </CardHeader>

                                <CardBody>
                                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label htmlFor="firstName">First Name</Label>
                                                    <Control.text model=".firstName" className="form-control" name="firstName" placeholder="First Name" />

                                                    {/* <Input type="text" name="firstName" placeholder="First Name"
                                                    value={this.state.firstName} onChange={this.handleInputChange} /> */}
                                                </FormGroup>
                                            </Col>
                                            
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label htmlFor="lastName">Last Name</Label>
                                                    <Control.text model=".lastName" className="form-control" name="lastName"  placeholder="Last Name" />

                                                    {/* <Input type="text" name="lastName"  placeholder="Last Name"
                                                    value={this.state.lastName} onChange={this.handleInputChange} /> */}
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label htmlFor="telnum">Contact Tel.</Label>
                                                    <Control.text model=".telnum" className="form-control" name="telnum"  placeholder="Tel. Number" />

                                                    {/* <Input type="tel" name="telnum"  placeholder="Tel. Number"
                                                    value={this.state.telnum} onChange={this.handleInputChange} /> */}
                                                </FormGroup>
                                            </Col>

                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label htmlFor="email">Email</Label>
                                                    <Control.text model=".email" className="form-control" name="email"  placeholder="Email" />


                                                    {/* <Input type="email" name="email"  placeholder="Email"
                                                    value={this.state.email} onChange={this.handleInputChange} /> */}
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={6}>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Control.checkbox className="form-check-input" model=".agree" name="agree" /> 

                                                        {/* <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} />  */}
                                                            <strong>
                                                                May we contat you?
                                                            </strong>
                                                    </Label>
                                                </FormGroup>
                                            </Col>

                                            <Col md={6}>
                                                <FormGroup>
                                                <Label for="exampleSelect">Contact Type</Label>
                                                <Control.select model=".contactType" className="form-control" name="contactType" id="exampleSelect" >
                                                    <option>Tel.</option>
                                                    <option>Email</option>
                                                </Control.select>
                                                
                                                {/* <Input type="select" name="contactType" id="exampleSelect" value={this.state.contactType} onChange={this.handleInputChange} >
                                                    <option>Tel.</option>
                                                    <option>Email</option>
                                                </Input> */}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        
                                        <Row>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Label htmlFor="message">Message</Label>
                                                    <Control.textarea model=".message" className="form-control" name="message" placeholder="message" />


                                                    {/* <Input type="textarea" name="message" placeholder="message"
                                                    value={this.state.message} onChange={this.handleInputChange} /> */}
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Button type="Submit" value="submit" className="d-flex" style={{margin:"0 auto"}}>Submit</Button>
                                    </LocalForm>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
   }
}

export default Contact;