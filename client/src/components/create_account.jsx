/*
create account view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the payment view has a Pager located at the very-top center of the view, correct text needs defined
the create account view has a add icon located at the  right of the view which on click will trigger the add() action
the create account view has a add icon located at the top right of the view which on click will trigger the add() action
the create account view has a back icon located at the very-top right of the view which on click will trigger the back() action
the create account view has a back icon located at the very-top left of the view which on click will trigger the back() action

*/

import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Row, Col, Input, InputGroup, InputGroupText } from "reactstrap"

import { sign_up_action, postSignup } from "../actions/create_accountActions.js"

class createaccountView extends React.Component {
  state = {
    show_loading_indicator: false,
    email: "",
    password: "",
    confirm_password: "",
    confirm_password: ""
  }

  // sign_up event
  sign_up = value => {
    const { sign_up_action } = this.props
    e.preventDefault()

    let sign_up_data = {}
    sign_up_data.email = this.state.email
    sign_up_data.password = this.state.password
    sign_up_data.confirm_password = this.state.confirm_password
    sign_up_data.confirm_password = this.state.confirm_password

    //Dispatch action mapped to redux
    sign_up_action(sign_up_data)

    // Change state of activity indicator
    this.setState({
      show_loading_indicator: true
    })
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount = () => {}

  render() {
    const { show_loading_indicator } = this.state
    const { data } = this.props

    return (
      <Row>
        {!data.error_message && show_loading_indicator === true ? (
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
        ) : (
          <Col md={12}>
            <Col md={12}>
              <InputGroup>
                {" "}
                <Input
                  className="form-group input-white-black"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  placeholder="email"
                />{" "}
              </InputGroup>{" "}
            </Col>

            <Col md={12}>
              <InputGroup>
                {" "}
                <Input
                  className="form-group input-white-black"
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                  placeholder="password"
                />{" "}
              </InputGroup>{" "}
            </Col>

            <Col md={12}>
              <InputGroup>
                {" "}
                <Input
                  className="form-group input-white-black"
                  value={this.state.confirm_password}
                  onChange={this.handleChange}
                  name="confirm_password"
                  placeholder="confirm password"
                />{" "}
              </InputGroup>{" "}
            </Col>
          </Col>
        )}
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    data: state.create_account
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sign_up_action, postSignup }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createaccountView)
