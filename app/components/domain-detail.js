import React from 'react';
import DomainActions from '../actions/domain-actions';
import DomainStore from '../stores/domain-store.js';

class DomainDetailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = DomainStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    saveDomain() {
        DomainActions.saveDomain();
    }

    componentDidMount() {
        DomainStore.listen(this.onChange);
    }

    componentWillUnmount() {
        DomainStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleChange(field, e) {
        var editingDomain = this.state.editingDomain;
        editingDomain[field] = e.target.value;
        this.setState({editingDomain: editingDomain});
    }

    render() {
        return (
            <div ref="detailView" className="widget-container animated fadeInDown">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label for="inputEmail3"
                               className="col-sm-2 control-label">Domain Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"
                                   value={this.props.domain.domain}
                                   onChange={this.handleChange.bind(this, 'domain')}
                                   placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputEmail3"
                               className="col-sm-2 control-label">Registrant Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"
                                   value={this.props.domain.registrant_email}
                                   onChange={this.handleChange.bind(this, 'registrant_email')}
                                   placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputEmail3"
                               className="col-sm-2 control-label">Price</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control"
                                   value={this.props.domain.price}
                                   onChange={this.handleChange.bind(this, 'price')}
                                   placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default btn-primary"
                                    onClick={this.saveDomain.bind(this)}>Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default DomainDetailForm;
