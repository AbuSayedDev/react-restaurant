import React from 'react';
import  { Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap';


const MenuItem = props => {
    return(
        <div>
            <Card className="m-4"> 
                <CardBody>
                    <CardImg className="mb-5" src={props.dish.image} alt={props.dish.name}  style={{ opacity:"0.5"}}/>

                    <CardImgOverlay>
                        <CardTitle>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;