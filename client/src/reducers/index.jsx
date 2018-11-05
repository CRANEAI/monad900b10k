import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import signup from "./reducer_signup"
import payment from "./reducer_payment"
import live from "./reducer_live"
import create_account from "./reducer_create_account"

const rootReducer = combineReducers({
  signup: signup,
  payment: payment,
  live: live,
  create_account: create_account
})

export default rootReducer
