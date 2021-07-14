import React from 'react';
import ListComment from './ListComment.js';
import  { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

const DishDetail = props => {
    return(
        <div>
           <Card className="m-4">
                <CardImg top src={props.dish.image} alt={props.dish.name}/>
               <CardBody className="text-left">
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>Price: {props.dish.price} -/</p>
                    </CardText>
                    <hr/>
                    
                    <ListComment  comments ={props.dish.comments} />
               </CardBody>
           </Card>
        </div>
    );
}

export default DishDetail;