import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import signup from "./reducer_signup"
import payment from "./reducer_payment"

const rootReducer = combineReducers({
  signup: signup,
  payment: payment
})

export default rootReducer
