// get instance of alt.js
import alt from '../alt';
import _ from 'underscore';

class DomainActions {
    constructor() {
        // equivalent to: getTopCharactersSuccess(payload){ this.dispatch(payload); }, etc..
        this.generateActions(
            'getDomainListSuccess',
            'getDomainListFail',
            'editDomainSuccess',
            'editDomainPending'
        )
    }

    editDomain(data) {
        $.ajax({url: '/api/domains/' + data.id}).done((details) => {
            data = _.defaults(data, details);
            this.actions.editDomainPending(data);
        });
    }

    saveDomain() {
        this.actions.editDomainSuccess();
    }

    getDomainList() {
        $.ajax({url: '/api/domains'}).done((data) => {
            this.actions.getDomainListSuccess(data);
        }).fail((jqXhr) => {
            this.actions.getDomainListFail(jqXhr)
        });
    }
}

export default alt.createActions(DomainActions);
