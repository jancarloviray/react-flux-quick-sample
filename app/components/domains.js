import React from 'react';
import DomainActions from '../actions/domain-actions.js';
import DomainStore from '../stores/domain-store.js';
import DomainListView from './domain-list-view.js';
import DomainDetailForm from './domain-detail.js';

class Domains extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = DomainStore.getState();
    }

    componentDidMount() {
        DomainStore.listen(this.onChange);
        DomainActions.getDomainList();
    }

    componentWillUnmount() {
        DomainStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        var activatedView = this.state.editingDomain ? <DomainDetailForm
            domain={this.state.editingDomain}/> : <DomainListView domains={this.state.domains}/>;

        return (
            <div>{activatedView}</div>
        );
    }
}

export default Domains;
