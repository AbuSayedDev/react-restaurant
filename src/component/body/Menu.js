import React, { Component } from 'react';
// import DISHES from '../../data/dishes.js';
// import COMMENTS from '../../data/comments.js';
import MenuItem  from './MenuItem.js';
import DishDetail  from './DishDetail.js';
import { CardColumns, Button, Modal, ModalBody, ModalFooter, } from "reactstrap";
import { connect } from 'react-redux';


// redux state Convert Component props
const mapStateToProps = state =>{
    // console.log("data ", state);
    return{
        dishes:state.dishes,
        comments: state.comments,
    }
}


// Menu
class Menu extends Component {
    state = {
        // dishes: DISHES,
        // comments: COMMENTS,
        selectedDish: null,
        modalOpen: false

    }

    onDishSelect = dish =>{
        this.setState({ 
            selectedDish: dish,
         });

        this.toggleModal();
    }

    toggleModal = () =>{
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    
    render(){
        document.title = "Menu";

        const menu = this.props.dishes.map( item => {
            return(
                <MenuItem 
                    dish={item} 
                    key={item.id} 
                    DishSelect={() => this.onDishSelect(item)}
                />
            );
        })

        // dishDetail null 
        let dishDetail = null;
        if(this.state.selectedDish != null ){
            const comments = this.props.comments.filter(comments => {
                return comments.dishId === this.state.selectedDish.id;
            });
            dishDetail = <DishDetail  
            dish={this.state.selectedDish}
            comments={comments}/>
        }

        return(
            <div className="container">
                <div className="row text-center">
                    <CardColumns>
                        {menu}
                    </CardColumns>

                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }

}

export default connect(mapStateToProps)(Menu);