import {fetchDrafts} from "../../redux";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import SingleMail from "../SingleMail";

function DraftsContainer({draftsData,fetchDrafts}) {
    useEffect(() =>{
        fetchDrafts()
    }, []);

    return draftsData.loading ? (
        <h2>Loading</h2>
    ): draftsData.error ? (
        <h2>{draftsData.error}</h2>
    ) :(
        <div className="section-center">
            <h1 className="section-header">DRAFTS</h1>
            <div className="divider-line"></div>
            {draftsData.drafts.map( mail => {
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
        draftsData: state.drafts
    }
};

const mapDispatchToProps = dispatch => {
    return{
        fetchDrafts: () =>dispatch(fetchDrafts())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)( DraftsContainer);