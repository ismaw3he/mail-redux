import React from 'react';
import {Provider} from 'react-redux'
import store from "./redux/store";
import './App.css';
import MainPage from "./components/MainPage";
import InboxContainer from "./components/Inbox/InboxContainer";
import SentContainer from "./components/Sent/SentContainer";
import DraftsContainer from "./components/Drafts/DraftsContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                {/*<DraftsContainer/>*/}
                {/*<SentContainer/>*/}
                {/*<InboxContainer/>*/}
                <MainPage/>
            </div>
        </Provider>
    );
}

export default App;
