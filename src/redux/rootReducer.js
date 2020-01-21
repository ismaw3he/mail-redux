import {combineReducers} from "redux";

import draftsReducer from "./drafts/draftsReducer";
import sentReducer from "./sent/sentReducer";
import inboxReducer from "./inbox/inboxReducer";

const rootReducer=combineReducers({
    drafts: draftsReducer,
    sent: sentReducer,
    inbox: inboxReducer
});

export default rootReducer



