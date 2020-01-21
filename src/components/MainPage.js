import React, { useState } from 'react';
import DraftsContainer from "./Drafts/DraftsContainer";
import InboxContainer from "./Inbox/InboxContainer";
import SentContainer from "./Sent/SentContainer";

function MainPage() {
    const condition = {
        inbox: true,
        draft: false,
        sent: false
    };
    const [inbox,setInbox]=useState(true);
    const [drafts,setDrafts]=useState(false);
    const [sent,setSent]=useState(false);
    const showInbox = function () {
        setInbox(true);
        setDrafts(false);
        setSent(false);
    };
    const showDraft = function () {
        setInbox(false);
        setDrafts(true);
        setSent(false);
    };
    const showSent = function () {
        setInbox(false);
        setDrafts(false);
        setSent(true);
    };
    return (
        <div className="main-page">


            <div className="side-bar">
                <button onClick={showInbox}>Inbox</button>
                <button onClick={showSent}>Sent</button>
                <button onClick={showDraft}>Drafts</button>
            </div>
            <div className="content-area">
                {drafts && <DraftsContainer/>}
                {inbox && <InboxContainer/>}
                {sent && <SentContainer/>}
            </div>
        </div>
    );

}

export default MainPage;