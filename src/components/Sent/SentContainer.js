import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSent} from "../../redux";
import SingleMail from "../SingleMail";

function SentContainer({sentData,fetchSent}) {
    useEffect(() =>{
        fetchSent()
    }, []);

    return sentData.loading ? (
        <h2>Loading</h2>
    ): sentData.error ? (
        <h2>{sentData.error}</h2>
    ) :(
        <div className="section-center">
            <h1 className="section-header">SENT</h1>
            {sentData.sent.map( mail => {
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
        sentData: state.sent
    }
};

const mapDispatchToProps = dispatch => {
    return{
        fetchSent: () =>dispatch(fetchSent())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)( SentContainer);
