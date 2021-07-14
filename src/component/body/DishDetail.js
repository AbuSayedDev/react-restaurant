import React from 'react';
import  { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

const DishDetail = props => {
    return(
        <div>
           <Card className="m-4">
                <CardImg top src={props.dish.image} alt={props.dish.name}/>
               <CardBody className="text-left">
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description} <br />
                        Price: {props.dish.price}
                    </CardText>
               </CardBody>
           </Card>
        </div>
    );
}

export default DishDetail;