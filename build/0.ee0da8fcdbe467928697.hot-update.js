webpackHotUpdate(0,{

/***/ 956:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(1010);\n\nvar _formsyReact = __webpack_require__(972);\n\nvar _formsyReact2 = _interopRequireDefault(_formsyReact);\n\nvar _validations = __webpack_require__(982);\n\nvar _validations2 = _interopRequireDefault(_validations);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CreateChannel = function (_React$Component) {\n    _inherits(CreateChannel, _React$Component);\n\n    function CreateChannel(props) {\n        _classCallCheck(this, CreateChannel);\n\n        var _this = _possibleConstructorReturn(this, (CreateChannel.__proto__ || Object.getPrototypeOf(CreateChannel)).call(this, props));\n\n        _this.state = {\n            canSubmit: false,\n            showPwInput: false\n        };\n        _this.pwToggle = _this.pwToggle.bind(_this);\n        return _this;\n    }\n\n    _createClass(CreateChannel, [{\n        key: 'enableButton',\n        value: function enableButton() {\n            this.setState({\n                canSubmit: true\n            });\n        }\n    }, {\n        key: 'disableButton',\n        value: function disableButton() {\n            this.setState({\n                canSubmit: false\n            });\n        }\n    }, {\n        key: 'submit',\n        value: function submit(e) {\n            console.log(e);\n        }\n    }, {\n        key: 'pwToggle',\n        value: function pwToggle() {\n            this.setState(function (prevState) {\n                return {\n                    showPwInput: !prevState.showPwInput\n                };\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            //show input type='password' only if user want to\n            var passwordRow = this.state.showPwInput ? _react2.default.createElement(\n                'label',\n                null,\n                ' Password  ',\n                _react2.default.createElement('br', null),\n                ' ',\n                _react2.default.createElement('input', { type: 'password', maxLength: '20',\n                    validations: _validations2.default.strongPassword,\n                    validationError: 'This is not a valid password' })\n            ) : null;\n            return _react2.default.createElement(\n                _formsyReact2.default.Form,\n                { onValidSubmit: this.submit,\n                    onValid: this.enableButton,\n                    onInvalid: this.disableButton },\n                _react2.default.createElement(\n                    'label',\n                    null,\n                    ' Title ',\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement('input', { type: 'text', maxLength: '20',\n                        validations: _validations2.default.isGoodTitle,\n                        validationError: 'This is not a valid title' })\n                ),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(\n                    'label',\n                    null,\n                    ' Make it private',\n                    _react2.default.createElement('input', { type: 'radio', checked: this.state.showPwInput,\n                        onClick: this.pwToggle })\n                ),\n                _react2.default.createElement('br', null),\n                passwordRow,\n                _react2.default.createElement('input', { type: 'submit', disabled: !this.state.canSubmit,\n                    value: 'Create channel' }),\n                _react2.default.createElement('br', null)\n            );\n        }\n    }]);\n\n    return CreateChannel;\n}(_react2.default.Component);\n\nexports.default = CreateChannel;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(884); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"CreateChannel.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9DcmVhdGVDaGFubmVsL0NyZWF0ZUNoYW5uZWwuanM/Y2IyNyJdLCJuYW1lcyI6WyJDcmVhdGVDaGFubmVsIiwicHJvcHMiLCJzdGF0ZSIsImNhblN1Ym1pdCIsInNob3dQd0lucHV0IiwicHdUb2dnbGUiLCJiaW5kIiwic2V0U3RhdGUiLCJlIiwiY29uc29sZSIsImxvZyIsInByZXZTdGF0ZSIsInBhc3N3b3JkUm93Iiwic3Ryb25nUGFzc3dvcmQiLCJzdWJtaXQiLCJlbmFibGVCdXR0b24iLCJkaXNhYmxlQnV0dG9uIiwiaXNHb29kVGl0bGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsYTs7O0FBQ2pCLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ2JBLEtBRGE7O0FBRW5CLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx1QkFBVyxLQURGO0FBRVRDLHlCQUFZO0FBRkgsU0FBYjtBQUlBLGNBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBTm1CO0FBT2xCOzs7O3VDQUNjO0FBQ1gsaUJBQUtDLFFBQUwsQ0FBYztBQUNWSiwyQkFBVTtBQURBLGFBQWQ7QUFHSDs7O3dDQUNlO0FBQ1osaUJBQUtJLFFBQUwsQ0FBYztBQUNWSiwyQkFBVTtBQURBLGFBQWQ7QUFHSDs7OytCQUNNSyxDLEVBQUc7QUFDTkMsb0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNIOzs7bUNBQ1U7QUFDUCxpQkFBS0QsUUFBTCxDQUFjLHFCQUFhO0FBQ3ZCLHVCQUFPO0FBQ0hILGlDQUFhLENBQUNPLFVBQVVQO0FBRHJCLGlCQUFQO0FBR0gsYUFKRDtBQUtIOzs7aUNBQ1E7QUFDTDtBQUNBLGdCQUFNUSxjQUFjLEtBQUtWLEtBQUwsQ0FBV0UsV0FBWCxHQUNiO0FBQUE7QUFBQTtBQUFBO0FBQWtCLHlEQUFsQjtBQUFBO0FBQXdCLHlEQUFPLE1BQUssVUFBWixFQUF1QixXQUFVLElBQWpDO0FBQ1osaUNBQWEsc0JBQVlTLGNBRGI7QUFFWixxQ0FBZ0IsOEJBRko7QUFBeEIsYUFEYSxHQUlBLElBSnBCO0FBS0EsbUJBQ0k7QUFBQSxzQ0FBUSxJQUFSO0FBQUEsa0JBQWEsZUFBZSxLQUFLQyxNQUFqQztBQUNhLDZCQUFTLEtBQUtDLFlBRDNCO0FBRWEsK0JBQVcsS0FBS0MsYUFGN0I7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFjLDZEQUFkO0FBQ0ksNkRBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsSUFBN0I7QUFDTyxxQ0FBYSxzQkFBWUMsV0FEaEM7QUFFTyx5Q0FBZ0IsMkJBRnZCO0FBREosaUJBSEo7QUFPWSx5REFQWjtBQVFJO0FBQUE7QUFBQTtBQUFBO0FBQ0ksNkRBQU8sTUFBSyxPQUFaLEVBQW9CLFNBQVMsS0FBS2YsS0FBTCxDQUFXRSxXQUF4QztBQUNPLGlDQUFTLEtBQUtDLFFBRHJCO0FBREosaUJBUko7QUFXWSx5REFYWjtBQVlNTywyQkFaTjtBQWFRLHlEQUFPLE1BQUssUUFBWixFQUFxQixVQUFVLENBQUMsS0FBS1YsS0FBTCxDQUFXQyxTQUEzQztBQUNPLDJCQUFNLGdCQURiLEdBYlI7QUFlSTtBQWZKLGFBREo7QUFtQkg7Ozs7RUF2RHNDLGdCQUFNZSxTOztrQkFBNUJsQixhIiwiZmlsZSI6Ijk1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9tYWluLmxlc3MnO1xyXG5pbXBvcnQgRm9ybXN5IGZyb20gJ2Zvcm1zeS1yZWFjdCc7XHJcbmltcG9ydCB2YWxpZGF0aW9ucyBmcm9tICcuLi8uLi91dGlscy92YWxpZGF0aW9ucyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZUNoYW5uZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgY2FuU3VibWl0OiBmYWxzZSxcclxuICAgICAgICBzaG93UHdJbnB1dDpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIHRoaXMucHdUb2dnbGUgPSB0aGlzLnB3VG9nZ2xlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbmFibGVCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNhblN1Ym1pdDp0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGRpc2FibGVCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNhblN1Ym1pdDpmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdWJtaXQoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gICAgcHdUb2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2hvd1B3SW5wdXQ6ICFwcmV2U3RhdGUuc2hvd1B3SW5wdXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy9zaG93IGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBvbmx5IGlmIHVzZXIgd2FudCB0b1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkUm93ID0gdGhpcy5zdGF0ZS5zaG93UHdJbnB1dCA/XHJcbiAgICAgICAgICAgICAgKDxsYWJlbD4gUGFzc3dvcmQgIDxici8+IDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgbWF4TGVuZ3RoPScyMCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt2YWxpZGF0aW9ucy5zdHJvbmdQYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcj0nVGhpcyBpcyBub3QgYSB2YWxpZCBwYXNzd29yZCcgLz4gXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPikgOiBudWxsO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3Jtc3kuRm9ybSBvblZhbGlkU3VibWl0PXt0aGlzLnN1Ym1pdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvblZhbGlkPXt0aGlzLmVuYWJsZUJ1dHRvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkludmFsaWQ9e3RoaXMuZGlzYWJsZUJ1dHRvbn0gPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiBUaXRsZSA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBtYXhMZW5ndGg9JzIwJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3ZhbGlkYXRpb25zLmlzR29vZFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I9J1RoaXMgaXMgbm90IGEgdmFsaWQgdGl0bGUnIC8+IFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiBNYWtlIGl0IHByaXZhdGUgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBjaGVja2VkPXt0aGlzLnN0YXRlLnNob3dQd0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnB3VG9nZ2xlfS8+IFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgeyBwYXNzd29yZFJvdyB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmNhblN1Ym1pdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdDcmVhdGUgY2hhbm5lbCcvPiBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDwvRm9ybXN5LkZvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL0NyZWF0ZUNoYW5uZWwvQ3JlYXRlQ2hhbm5lbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})