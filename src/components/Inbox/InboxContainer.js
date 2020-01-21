import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchInbox} from "../../redux";
import SingleMail from "../SingleMail";

function InboxContainer({inboxData,fetchInbox}) {
    useEffect(() =>{
        fetchInbox()
    }, []);

    return inboxData.loading ? (
        <h2>Loading</h2>
    ): inboxData.error ? (
        <h2>{inboxData.error}</h2>
    ) :(
        <div className="section-center">
            <h1 className="section-header">INBOX</h1>
            {inboxData.inbox.map( mail => {
                return <SingleMail key={mail.id} subject={mail.subject}
                                   from={mail.from}
                                   date={mail.date}
                                   to={mail.to}
                                   message={mail.message}/>
            })}
        </div>
    )

}

const mapStateToProps = state =>{
    return {
        inboxData: state.inbox
    }
};

const mapDispatchToProps = dispatch => {
    return{
        fetchInbox: () =>dispatch(fetchInbox())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( InboxContainer);
