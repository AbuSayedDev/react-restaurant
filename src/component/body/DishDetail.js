import React from 'react';
import ListComment from './ListComment.js';
import CommentForm from "./CommentForm.js";
import  { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

const DishDetail = props => {
    return(
        <div>
           <Card className="m-4">
                <CardImg top src={props.dish.image} alt={props.dish.name}/>
               <CardBody className="text-left">
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>Price: {props.dish.price} -/</CardText>
                    <hr/>
                    
                    <ListComment  comments ={props.comments} />
                    <hr/>
                    <CommentForm />
               </CardBody>
           </Card>
        </div>
    );
}

export default DishDetail;