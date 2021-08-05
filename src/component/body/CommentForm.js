import React, { Component } from "react";
import { Form, Button, Input, FormGroup, Label } from "reactstrap"



// CommentForm  class Compontnt
class CommentForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            author: '',
            rating: '',
            comment: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event =>{
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value
        });
    }

    handleSubmit = event =>{
        console.log("form data", this.state);

        this.props.addComment(
            this.props.dishId, 
            this.state.author,
            this.state.rating, 
            this.state.comment
        );

        this.setState({
            author: '',
            rating: '',
            comment: ''
        });

        event.preventDefault();
    }


    render(){
        // console.log(this.props);
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="author">Author Name</Label>
                        <Input type="text" name="author" placeholder=" Your Name"
                        value={this.state.author}
                        onChange={this.handleInputChange} required />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="rating">Select</Label>
                        <Input type="select" name="rating" id="rating" value={this.state.rating} onChange={this.handleInputChange}>
                            <option>Rating 1</option>
                            <option>Rating 2</option>
                            <option>Rating 3</option>
                            <option>Rating 4</option>
                            <option>Rating 5</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="comment">Comment</Label>
                        <Input type="textarea" name="comment" id="comment" value={this.state.comment} onChange={this.handleInputChange} required/>
                    </FormGroup>

                    <FormGroup>
                        <Button type="submit"> Submit Comment </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export  default CommentForm;