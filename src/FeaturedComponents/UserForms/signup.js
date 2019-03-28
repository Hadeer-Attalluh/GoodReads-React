import React,{ Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import uuidv1 from 'uuid/v1';
import { context } from '../../App';

export class SignUpForm extends Component{

    state = {
        fname: "",
        lname: "",
        email:"",
        password:"",
        'confirm-password':"",
        image: "",
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}); 
    }

    handleSubmit = (addUser) => (e) => {
        e.preventDefault();
        if (!(this.state.fname && this.state.email && this.state.password && this.state['confirm-password'])) return;
        const validationContext = new SimpleSchema({
            fname: String,
            lname: String,
            email: String,
            password: {
                type: String,
                min: 8,
            },
            'confirm-password': {
                type: String,
                min: 8,
                custom() {
                if (this.value !== this.field('password').value) {
                    return "passwordMismatch";
                }
            }},
            image: String,
        }).newContext();

        console.log(validationContext.validate(this.state));
        if(validationContext.validationErrors().length === 0){
            const user = { 
                id: uuidv1(),
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                password: this.state.password,
                image: this.state.image,
            }
            addUser(user);
            console.log(user);
        }
        else {
            console.log(validationContext.validationErrors());
        }
        this.setState({fname:'', lname:'', email:'', password:'','confirm-password':''});
    }

    render(){
        return(
            <context.Consumer>
                {
                    value => (
                        <Form style={{width:'50%',margin:'1rem auto', border:'1px solid #E9E8E8', padding:'1rem'}} onSubmit={this.handleSubmit(value.addUser)} key={this.state.id}>
                            <h3 className='text-center text-primary'>New Here? Create A free account!</h3>
                            <Form.Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label >First Name</Form.Label>
                                    <Form.Control type="text" name='fname' placeholder="Enter Your First Name" onChange={this.handleChange} value={this.state.fname|| ''} />
                                </Form.Group>
                                <Form.Group as={Col} md="6" >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name='lname' placeholder="Enter Your Last Name" onChange={this.handleChange} value={this.state.lname|| ''}/>
                                </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter Your Email" onChange={this.handleChange} value={this.state.email}/>
                                </Form.Group>
                            <Form.Row>
                                <Form.Group controlId="formBasicPassword" as={Col} md="6" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Enter Your Password" onChange={this.handleChange} value={this.state.password}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPlainPassword" as={Col} md="6" >
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" name='confirm-password' placeholder="Confirm Your Password" onChange={this.handleChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="6" >
                                    <Form.Label>Browse Your Image</Form.Label>
                                    <Form.Control type="file" name='image' class='custom-file-input' id="customFile"  onChange={this.handleChange} value={this.state.image}/>
                                </Form.Group>
                            </Form.Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    )}
           </context.Consumer>
        );
    }
}
