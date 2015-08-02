(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// get instance of alt.js
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var DomainActions = (function () {
    function DomainActions() {
        _classCallCheck(this, DomainActions);

        // equivalent to: getTopCharactersSuccess(payload){ this.dispatch(payload); }, etc..
        this.generateActions('getDomainListSuccess', 'getDomainListFail', 'editDomainSuccess', 'editDomainPending');
    }

    _createClass(DomainActions, [{
        key: 'editDomain',
        value: function editDomain(data) {
            var _this = this;

            $.ajax({ url: '/api/domains/' + data.id }).done(function (details) {
                data = _underscore2['default'].defaults(data, details);
                _this.actions.editDomainPending(data);
            });
        }
    }, {
        key: 'saveDomain',
        value: function saveDomain() {
            this.actions.editDomainSuccess();
        }
    }, {
        key: 'getDomainList',
        value: function getDomainList() {
            var _this2 = this;

            $.ajax({ url: '/api/domains' }).done(function (data) {
                _this2.actions.getDomainListSuccess(data);
            }).fail(function (jqXhr) {
                _this2.actions.getDomainListFail(jqXhr);
            });
        }
    }]);

    return DomainActions;
})();

exports['default'] = _alt2['default'].createActions(DomainActions);
module.exports = exports['default'];

},{"../alt":2,"underscore":"underscore"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

// flux helper (for much less boilerplate)

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
        // getInitialState() in es5
        this.state = {};
    }

    // propTypes in es5

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'uniregistry' },
                _react2['default'].createElement(_navbar2['default'], null),
                _react2['default'].createElement(_reactRouter.RouteHandler, null)
            );
        }
    }]);

    return App;
})(_react2['default'].Component);

App.propTypes = {};
// getDefaultProps in es5
App.defaultProps = {};

exports['default'] = App;
module.exports = exports['default'];

},{"./navbar":9,"react":"react","react-router":"react-router"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsDomainActions = require('../actions/domain-actions');

var _actionsDomainActions2 = _interopRequireDefault(_actionsDomainActions);

var _storesDomainStoreJs = require('../stores/domain-store.js');

var _storesDomainStoreJs2 = _interopRequireDefault(_storesDomainStoreJs);

var DomainDetailForm = (function (_React$Component) {
    _inherits(DomainDetailForm, _React$Component);

    function DomainDetailForm(props) {
        _classCallCheck(this, DomainDetailForm);

        _get(Object.getPrototypeOf(DomainDetailForm.prototype), 'constructor', this).call(this, props);
        this.state = _storesDomainStoreJs2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(DomainDetailForm, [{
        key: 'saveDomain',
        value: function saveDomain() {
            _actionsDomainActions2['default'].saveDomain();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesDomainStoreJs2['default'].listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesDomainStoreJs2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(field, e) {
            var editingDomain = this.state.editingDomain;
            editingDomain[field] = e.target.value;
            this.setState({ editingDomain: editingDomain });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { ref: 'detailView', className: 'widget-container align-left animated fadeInDown' },
                _react2['default'].createElement(
                    'form',
                    { className: 'form-horizontal' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group' },
                        _react2['default'].createElement(
                            'label',
                            { 'for': 'inputEmail3',
                                className: 'col-sm-2 control-label' },
                            'Domain Name'
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-sm-10' },
                            _react2['default'].createElement('input', { type: 'text', className: 'form-control',
                                value: this.props.domain.domain,
                                onChange: this.handleChange.bind(this, 'domain'),
                                placeholder: '' })
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group' },
                        _react2['default'].createElement(
                            'label',
                            { 'for': 'inputEmail3',
                                className: 'col-sm-2 control-label' },
                            'Registrant Email'
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-sm-10' },
                            _react2['default'].createElement('input', { type: 'text', className: 'form-control',
                                value: this.props.domain.registrant_email,
                                onChange: this.handleChange.bind(this, 'registrant_email'),
                                placeholder: '' })
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group' },
                        _react2['default'].createElement(
                            'label',
                            { 'for': 'inputEmail3',
                                className: 'col-sm-2 control-label' },
                            'Price'
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-sm-10' },
                            _react2['default'].createElement('input', { type: 'number', className: 'form-control',
                                value: this.props.domain.price,
                                onChange: this.handleChange.bind(this, 'price'),
                                placeholder: '' })
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-sm-offset-2 col-sm-10' },
                            _react2['default'].createElement(
                                'button',
                                { type: 'button', className: 'btn btn-default btn-primary',
                                    onClick: this.saveDomain.bind(this) },
                                'Save Changes'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DomainDetailForm;
})(_react2['default'].Component);

exports['default'] = DomainDetailForm;
module.exports = exports['default'];

},{"../actions/domain-actions":1,"../stores/domain-store.js":12,"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsDomainActions = require('../actions/domain-actions');

var _actionsDomainActions2 = _interopRequireDefault(_actionsDomainActions);

var _storesDomainStoreJs = require('../stores/domain-store.js');

var _storesDomainStoreJs2 = _interopRequireDefault(_storesDomainStoreJs);

var DomainListItem = (function (_React$Component) {
    _inherits(DomainListItem, _React$Component);

    function DomainListItem(props) {
        _classCallCheck(this, DomainListItem);

        _get(Object.getPrototypeOf(DomainListItem.prototype), 'constructor', this).call(this, props);
    }

    _createClass(DomainListItem, [{
        key: 'editDomain',
        value: function editDomain() {
            _actionsDomainActions2['default'].editDomain(this.props.domain);
        }
    }, {
        key: 'render',
        value: function render() {
            var domain = this.props.domain;
            return _react2['default'].createElement(
                'tr',
                null,
                _react2['default'].createElement(
                    'td',
                    null,
                    _react2['default'].createElement(
                        'a',
                        { href: '#',
                            onClick: this.editDomain.bind(this) },
                        domain.domain
                    )
                ),
                _react2['default'].createElement(
                    'td',
                    null,
                    /cars|lol/gi.test(domain.domain) ? _react2['default'].createElement('i', { className: 'fa fa-check' }) : ''
                ),
                _react2['default'].createElement(
                    'td',
                    null,
                    '$',
                    (domain.price / 100).toFixed(2)
                )
            );
        }
    }]);

    return DomainListItem;
})(_react2['default'].Component);

exports['default'] = DomainListItem;
module.exports = exports['default'];

},{"../actions/domain-actions":1,"../stores/domain-store.js":12,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsDomainActions = require('../actions/domain-actions');

var _actionsDomainActions2 = _interopRequireDefault(_actionsDomainActions);

var _storesDomainStoreJs = require('../stores/domain-store.js');

var _storesDomainStoreJs2 = _interopRequireDefault(_storesDomainStoreJs);

var _domainListItemJs = require('./domain-list-item.js');

var _domainListItemJs2 = _interopRequireDefault(_domainListItemJs);

var DomainListView = (function (_React$Component) {
    _inherits(DomainListView, _React$Component);

    function DomainListView(props) {
        _classCallCheck(this, DomainListView);

        _get(Object.getPrototypeOf(DomainListView.prototype), 'constructor', this).call(this, props);
    }

    _createClass(DomainListView, [{
        key: 'editDomain',
        value: function editDomain() {
            // Store.editDomain(...);
            this.setState({ isExpanded: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var domains = [];
            for (var domain in this.props.domains) {
                domains.push(_react2['default'].createElement(_domainListItemJs2['default'], { key: domain, domain: this.props.domains[domain] }));
            }
            return _react2['default'].createElement(
                'div',
                { ref: 'listView', className: 'widget-container animated fadeIn' },
                _react2['default'].createElement(
                    'table',
                    { className: 'table table-striped table-bolded' },
                    _react2['default'].createElement(
                        'thead',
                        null,
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Domain name'
                            ),
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Uniregistry'
                            ),
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Price'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'tbody',
                        null,
                        domains
                    )
                )
            );
        }
    }]);

    return DomainListView;
})(_react2['default'].Component);

exports['default'] = DomainListView;
module.exports = exports['default'];

},{"../actions/domain-actions":1,"../stores/domain-store.js":12,"./domain-list-item.js":5,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsDomainActionsJs = require('../actions/domain-actions.js');

var _actionsDomainActionsJs2 = _interopRequireDefault(_actionsDomainActionsJs);

var _storesDomainStoreJs = require('../stores/domain-store.js');

var _storesDomainStoreJs2 = _interopRequireDefault(_storesDomainStoreJs);

var _domainListViewJs = require('./domain-list-view.js');

var _domainListViewJs2 = _interopRequireDefault(_domainListViewJs);

var _domainDetailJs = require('./domain-detail.js');

var _domainDetailJs2 = _interopRequireDefault(_domainDetailJs);

var Domains = (function (_React$Component) {
    _inherits(Domains, _React$Component);

    function Domains(props) {
        _classCallCheck(this, Domains);

        _get(Object.getPrototypeOf(Domains.prototype), 'constructor', this).call(this, props);
        this.onChange = this.onChange.bind(this);
        this.state = _storesDomainStoreJs2['default'].getState();
    }

    _createClass(Domains, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesDomainStoreJs2['default'].listen(this.onChange);
            _actionsDomainActionsJs2['default'].getDomainList();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesDomainStoreJs2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var activatedView = this.state.editingDomain ? _react2['default'].createElement(_domainDetailJs2['default'], {
                domain: this.state.editingDomain }) : _react2['default'].createElement(_domainListViewJs2['default'], { domains: this.state.domains });

            return _react2['default'].createElement(
                'div',
                null,
                activatedView
            );
        }
    }]);

    return Domains;
})(_react2['default'].Component);

exports['default'] = Domains;
module.exports = exports['default'];

},{"../actions/domain-actions.js":1,"../stores/domain-store.js":12,"./domain-detail.js":4,"./domain-list-view.js":6,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _domains = require('./domains');

var _domains2 = _interopRequireDefault(_domains);

var Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'container home' },
                _react2['default'].createElement(_domains2['default'], null)
            );
        }
    }]);

    return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"./domains":7,"react":"react"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Navbar = (function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar() {
        _classCallCheck(this, Navbar);

        _get(Object.getPrototypeOf(Navbar.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Navbar, [{
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "nav",
                { className: "navbar navbar-fixed-top" },
                _react2["default"].createElement(
                    "div",
                    { className: "container" },
                    _react2["default"].createElement(
                        "div",
                        { className: "navbar-header" },
                        _react2["default"].createElement(
                            "button",
                            { type: "button", className: "navbar-toggle collapsed",
                                "data-toggle": "collapse",
                                "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar" },
                            _react2["default"].createElement(
                                "span",
                                { className: "sr-only" },
                                "Toggle navigation"
                            ),
                            _react2["default"].createElement("span", { className: "icon-bar" }),
                            _react2["default"].createElement("span", { className: "icon-bar" }),
                            _react2["default"].createElement("span", { className: "icon-bar" })
                        ),
                        _react2["default"].createElement(
                            "a",
                            { className: "navbar-brand", href: "#" },
                            "Uniregistry"
                        )
                    )
                )
            );
        }
    }]);

    return Navbar;
})(_react2["default"].Component);

exports["default"] = Navbar;
module.exports = exports["default"];

},{"react":"react"}],10:[function(require,module,exports){
// main entry point

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

// let's bootstrap everything
// note that HistoryLocation is to enable pretty urls (removes the hashes)

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
    _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":11,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/app');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

exports['default'] = _react2['default'].createElement(
    _reactRouter.Route,
    { handler: _componentsApp2['default'] },
    _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] })
);
module.exports = exports['default'];

},{"./components/app":3,"./components/home":8,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsDomainActions = require('../actions/domain-actions');

var _actionsDomainActions2 = _interopRequireDefault(_actionsDomainActions);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var DomainStore = (function () {
    function DomainStore() {
        _classCallCheck(this, DomainStore);

        // binds actions to their handlers defined in store
        // ie: getDomainListSuccess looks for onGetDomainListSuccess here...
        this.bindActions(_actionsDomainActions2['default']);
        this.domains = [];
        this.editingDomain = null;
    }

    _createClass(DomainStore, [{
        key: 'onEditDomainPending',
        value: function onEditDomainPending(data) {
            this.editingDomain = _underscore2['default'].find(this.domains, function (domain) {
                return data.id === domain.id;
            });
        }
    }, {
        key: 'onEditDomainSuccess',
        value: function onEditDomainSuccess() {
            var self = this;

            _underscore2['default'].each(this.domains, (function (value, index) {
                if (self.editingDomain && value.id === self.editingDomain.id) {
                    _underscore2['default'].extend(this.domains[index], self.editingDomain.data);
                    this.emitChange.bind();
                }
            }).bind(this));

            this.editingDomain = null;
            this.emitChange();
        }

        // binded event/action handlers
    }, {
        key: 'onGetDomainListSuccess',
        value: function onGetDomainListSuccess(data) {
            this.domains = data.domains;
        }
    }, {
        key: 'onGetDomainListFail',
        value: function onGetDomainListFail(jqXhr) {
            throw Error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }]);

    return DomainStore;
})();

exports['default'] = _alt2['default'].createStore(DomainStore);
module.exports = exports['default'];

},{"../actions/domain-actions":1,"../alt":2,"underscore":"underscore"}]},{},[10]);
