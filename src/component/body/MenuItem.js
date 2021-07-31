import React from 'react';
import  { Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap';


const MenuItem = props => {
    return(
        <div>
            <Card className="m-4"> 
                <CardBody onClick={props.DishSelect}>
                    <CardImg src={props.dish.image} alt={props.dish.name}  style={{ opacity:"0.5"}}/>

                    <CardImgOverlay>
                        <CardTitle style={{cursor:"pointer"}}>
                            <h3>{props.dish.name}</h3>
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;