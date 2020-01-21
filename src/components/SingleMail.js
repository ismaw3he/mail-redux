import React, {Component} from 'react';

class SingleMail extends Component {
    state = {
        on: false
    };

    toggle = () => {
        this.setState(
            {
                on: !this.state.on
            }
        )
    };

    render() {
        return (
            <div>
                <button onClick={this.toggle}>{this.props.subject}</button>

                {   this.state.on && (
                    <div>
                        <h2 className="mail-from">From: {this.props.from}</h2>

                        <h3 className="mail-to">To: {this.props.to}</h3>

                        <p className="mail-date">{this.props.date}</p>
                        <h5 className="mail-message">{this.props.message}</h5>
                    </div>
                    ) }

            </div>
        )
    }
}

export default SingleMail;