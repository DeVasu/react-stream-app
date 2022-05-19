import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStream } from '../../actions';

class StreamDelete extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            <React.Fragment>
                <button
                    className="ui button negative"
                    onClick={()=>this.props.deleteStream(id)}
                >
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if(!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }

        return ('Are you sure you want to delete stream: ' + this.props.stream.title)
    }

    render() {
        return (
            <Modal 
                title="Nothing"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={()=> {history.push('/')}}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(
    mapStateToProps,
    { fetchStream,
      deleteStream }
)(StreamDelete);