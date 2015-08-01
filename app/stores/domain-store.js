import alt from '../alt';
import DomainActions from '../actions/domain-actions';
import _ from 'underscore';

class DomainStore {
    constructor() {
        // binds actions to their handlers defined in store
        // ie: getDomainListSuccess looks for onGetDomainListSuccess here...
        this.bindActions(DomainActions);
        this.domains = [];
        this.editingDomain = null;
    }

    onEditDomainPending(data) {
        this.editingDomain = _.find(this.domains, function(domain) {
            return data.id === domain.id;
        });
    }

    onEditDomainSuccess() {
        var self = this;

        _.each(this.domains, function(value, index) {
            if (self.editingDomain && value.id === self.editingDomain.id) {
                _.extend(this.domains[index], self.editingDomain.data);
                this.emitChange.bind();
            }
        }.bind(this));

        this.editingDomain = null;
        this.emitChange();
    }

    // binded event/action handlers
    onGetDomainListSuccess(data) {
        this.domains = data.domains;
    }

    onGetDomainListFail(jqXhr) {
        throw Error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
}

export default alt.createStore(DomainStore);
