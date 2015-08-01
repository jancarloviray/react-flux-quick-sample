import React from 'react';
import DomainActions from '../actions/domain-actions';
import DomainStore from '../stores/domain-store.js';
import DomainListItem from './domain-list-item.js';

class DomainListView extends React.Component {
    constructor(props) {
        super(props);
    }

    editDomain() {
        // Store.editDomain(...);
        this.setState({isExpanded: true});
    }

    render() {
        var domains = [];
        for (var domain in this.props.domains) {
            domains.push(<DomainListItem key={domain} domain={this.props.domains[domain]}/>);
        }
        return (
            <div ref="listView" className="widget-container animated fadeIn">
                <table className="table table-striped table-bolded">
                    <thead>
                    <tr>
                        <th>Domain name</th>
                        <th>Uniregistry</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {domains}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default DomainListView;
