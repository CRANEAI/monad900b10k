
/*
payment view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the payment view has a Pager located at the very-top center of the view, correct text needs defined
the create account view has a add icon located at the  right of the view which on click will trigger the add() action
the create account view has a add icon located at the top right of the view which on click will trigger the add() action
the create account view has a back icon located at the very-top right of the view which on click will trigger the back() action
the create account view has a back icon located at the very-top left of the view which on click will trigger the back() action
the signup view has a add icon located at the  right of the view which on click will trigger the add() action
the signup view has a add icon located at the top right of the view which on click will trigger the add() action
the signup view has a back icon located at the very-top right of the view which on click will trigger the back() action
the signup view has a back icon located at the very-top left of the view which on click will trigger the back() action
the live view has a add icon located at the  right of the view which on click will trigger the add() action
the live view has a add icon located at the top right of the view which on click will trigger the add() action
the live view has a back icon located at the very-top right of the view which on click will trigger the back() action
the live view has a back icon located at the very-top left of the view which on click will trigger the back() action
the payment view has a add icon located at the  right of the view which on click will trigger the add() action
the payment view has a add icon located at the top right of the view which on click will trigger the add() action
the payment view has a back icon located at the very-top right of the view which on click will trigger the back() action
the payment view has a back icon located at the very-top left of the view which on click will trigger the back() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col   } from 'reactstrap';
        
        
        import {  }  from '../actions/paymentActions.js'; 

        
        
       
        class paymentView extends React.Component {

            state = {
                
                card_number : '', 
cardholder_name : '', 
exp._date : '', 
cvv : '', 
street_address : '', 
city : '', 
state : '', 
zip : '', 
country : '', 

            }
    
            
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }    
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        
                           
   
                    </Col> 
                     
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({   }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(paymentView);
    
        