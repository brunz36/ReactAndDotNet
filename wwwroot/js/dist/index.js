/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ({

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            scores: [],
            timeUpdated: "loading..",
            newPlayerName: '',
            newPlayerScore: ''
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'handleClick',
        value: function handleClick() {
            var _this2 = this;

            console.log("posting", this.state.newPlayerName, this.state.newPlayerScore);
            fetch('/api/highscores', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ name: this.state.newPlayerName, score: this.state.newPlayerScore })
            }).then(function (resp) {
                console.log('resp', resp);
                return resp.json();
            }).then(function (json) {
                console.log('json', json);
                _this2.setState({
                    newPlayerName: '',
                    newPlayerScore: ''
                });
                _this2.setState(function (prevState, props) {
                    return {
                        timeUpdated: json.timeUpdated,
                        scores: json.scores
                    };
                });
            });
        }
    }, {
        key: 'updateScores',
        value: function updateScores() {
            var _this3 = this;

            fetch("/api/highscores").then(function (response) {
                console.log("repsonse", response);
                return response.json();
            }).then(function (json) {
                console.log("json", json.scores);

                _this3.setState(function (prevState, props) {
                    return {
                        timeUpdated: json.timeUpdated,
                        scores: json.scores
                    };
                });
            });
        }
    }, {
        key: 'updatePlayerName',
        value: function updatePlayerName(e) {
            this.setState({
                newPlayerName: e.target.value
            });
        }
    }, {
        key: 'updatePlayerScore',
        value: function updatePlayerScore(e) {
            this.setState({
                newPlayerScore: e.target.value
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            this.updateScores();
            setInterval(function () {
                _this4.updateScores();
            }, 3000);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'h4',
                        null,
                        'last updated @ ',
                        this.state.timeUpdated,
                        ' '
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'h3',
                        null,
                        'Number of players : ',
                        this.state.scores.length
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'Name', value: this.state.newPlayerName, onChange: function onChange(evt) {
                            return _this5.updatePlayerName(evt);
                        } }),
                    React.createElement('input', { type: 'number', placeholder: 'Score', value: this.state.newPlayerScore, onChange: function onChange(evt) {
                            return _this5.updatePlayerScore(evt);
                        } }),
                    React.createElement(
                        'button',
                        { onClick: this.handleClick },
                        'Add Player'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'table',
                        null,
                        React.createElement(
                            'tbody',
                            null,
                            this.state.scores.map(function (player, i) {
                                return React.createElement(
                                    'tr',
                                    { key: i },
                                    React.createElement(
                                        'td',
                                        null,
                                        player.name
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        player.score
                                    )
                                );
                            })
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

render(React.createElement(App, null), document.getElementById('app'));

/***/ })

/******/ });