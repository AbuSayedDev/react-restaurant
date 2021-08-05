import React, { Component } from 'react';
// import DISHES from '../../data/dishes.js';
// import COMMENTS from '../../data/comments.js';
import MenuItem  from './MenuItem.js';
import DishDetail  from './DishDetail.js';
import { CardColumns, Button, Modal, ModalBody, ModalFooter, } from "reactstrap";
import { connect } from 'react-redux';
import { addComment, fetchDishes } from "../../redux/actionCreators.js";
import Loding from './Loding.js';

// redux state Convert Component props
const mapStateToProps = state =>{
    // console.log("data ", state);
    return{
        dishes:state.dishes,
        comments: state.comments,
    }
}


// redux mapDispatchToProps
const mapDispatchToProps = dispatch =>{
    return{
        addComment: (dishId, author, rating, comment) => 
        dispatch(addComment(dishId, author, rating, comment)),

        fetchDishes: () => dispatch(fetchDishes())
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

    componentDidMount(){
        this.props.fetchDishes();
    }
    
    render(){
        document.title = "Menu";


        if(this.props.dishes.isLoading){
            return(
                <Loding />
            )
        }
        else{
            const menu = this.props.dishes.dishes.map( item => {
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
                comments={comments}
                addComment= {this.props.addComment}/>
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

}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);