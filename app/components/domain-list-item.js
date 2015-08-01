import React from 'react';
import DomainActions from '../actions/domain-actions';
import DomainStore from '../stores/domain-store.js';

class DomainListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    editDomain() {
        DomainActions.editDomain(this.props.domain);
    }

    render() {
        var domain = this.props.domain;
        return (
            <tr>
                <td><a href="#"
                       onClick={this.editDomain.bind(this)}>{domain.domain}</a>
                </td>
                <td>{/cars|lol/gi.test(domain.domain) ? <i className="fa fa-check"></i> : ''}</td>
                <td>${(domain.price / 100).toFixed(2)}</td>
            </tr>
        );
    }
}
export default DomainListItem;
