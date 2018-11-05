
/*
payment view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

signup is a form
signup view has a Input located at the mid-top center of the view. the placeholder text is email
signup view has a Input located at the center center of the view. the placeholder text is password
view has actions which trigger on events, view should should error messages and display activity indicator when processing

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
email : '', 
password : '', 

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
    
        