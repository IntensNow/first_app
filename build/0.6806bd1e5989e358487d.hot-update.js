webpackHotUpdate(0,{

/***/ 1001:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _formsyReact = __webpack_require__(963);\n\nvar _formsyReact2 = _interopRequireDefault(_formsyReact);\n\nvar _getMuiTheme = __webpack_require__(602);\n\nvar _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);\n\nvar _MuiThemeProvider = __webpack_require__(593);\n\nvar _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);\n\nvar _Paper = __webpack_require__(675);\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _RaisedButton = __webpack_require__(653);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _validations = __webpack_require__(970);\n\nvar _validations2 = _interopRequireDefault(_validations);\n\nvar _lib = __webpack_require__(1002);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  paperStyle: {\n    width: 300,\n    margin: 'auto',\n    padding: 20\n  },\n  submitStyle: {\n    marginTop: 32\n  }\n};\n\nvar errorMessages = {\n  emailError: 'This is not a valid email',\n  loginError: 'Please choose another login',\n  passwordError: 'Please provide a strong password',\n  passwordReError: 'Passwords do not match',\n  uniqueError: 'This username is already taken'\n};\n\nvar SignUp = function (_React$Component) {\n  _inherits(SignUp, _React$Component);\n\n  function SignUp(props) {\n    _classCallCheck(this, SignUp);\n\n    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));\n\n    _this.state = {\n      canSubmit: false,\n      isUniqueLogin: false,\n      fieldsWriteable: true\n    };\n    _this.checkLogin = _this.checkLogin.bind(_this);\n    _this.disableButton = _this.disableButton.bind(_this);\n    _this.enableButton = _this.enableButton.bind(_this);\n    _this.isUniqueLogin = _this.isUniqueLogin.bind(_this);\n    _this.submitForm = _this.submitForm.bind(_this);\n    return _this;\n  }\n\n  _createClass(SignUp, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var socket = this.props.socket;\n\n      socket.on('user exist info', function (data) {\n        _this2.setState({\n          isUniqueLogin: data.isUniqueLogin\n        });\n      });\n    }\n  }, {\n    key: 'enableButton',\n    value: function enableButton() {\n      this.setState({\n        canSubmit: true\n      });\n    }\n  }, {\n    key: 'disableButton',\n    value: function disableButton() {\n      this.setState({\n        canSubmit: false\n      });\n    }\n  }, {\n    key: 'isUniqueLogin',\n    value: function isUniqueLogin(values, value) {\n      if (value !== 'undefined' && !this.state.isUniqueLogin) {\n        return false;\n      }\n      return true;\n    }\n  }, {\n    key: 'checkLogin',\n    value: function checkLogin(e) {\n      var socket = this.props.socket;\n      var data = {\n        login: e.target.value\n      };\n      socket.emit('is user exist', data);\n    }\n  }, {\n    key: 'submitForm',\n    value: function submitForm(data) {\n      this.disableFields();\n      var socket = this.props.socket;\n      socket.emit('sign up', data);\n    }\n  }, {\n    key: 'disableFields',\n    value: function disableFields() {\n      this.setState({\n        fieldsWriteable: fieldsWriteable\n      });\n    }\n  }, {\n    key: 'notifyFormError',\n    value: function notifyFormError(data) {\n      console.error('Form error:', data);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var paperStyle = styles.paperStyle,\n          submitStyle = styles.submitStyle;\n      var emailError = errorMessages.emailError,\n          passwordError = errorMessages.passwordError,\n          passwordReError = errorMessages.passwordReError,\n          uniqueError = errorMessages.uniqueError,\n          loginError = errorMessages.loginError;\n      var isUniqueLogin = _validations2.default.isUniqueLogin,\n          strongPassword = _validations2.default.strongPassword,\n          passwordsMatch = _validations2.default.passwordsMatch,\n          goodLogin = _validations2.default.goodLogin;\n\n\n      return _react2.default.createElement(\n        _MuiThemeProvider2.default,\n        { muiTheme: (0, _getMuiTheme2.default)() },\n        _react2.default.createElement(\n          _Paper2.default,\n          { style: paperStyle },\n          _react2.default.createElement(\n            _formsyReact2.default.Form,\n            {\n              onValid: this.enableButton,\n              onInvalid: this.disableButton,\n              onValidSubmit: this.submitForm,\n              onInvalidSubmit: this.notifyFormError\n            },\n            _react2.default.createElement(_lib.FormsyText, {\n              name: 'userLogin',\n              validations: { isUniqueLogin: this.isUniqueLogin, goodLogin: goodLogin },\n              validationErrors: { isUniqueLogin: uniqueError, goodLogin: loginError },\n              required: true,\n              floatingLabelText: 'Login',\n              maxLength: '20',\n              onChange: this.checkLogin,\n              disabled: !this.state.fieldsWriteable\n            }),\n            _react2.default.createElement(_lib.FormsyText, {\n              type: 'password',\n              name: 'userPassword',\n              validations: { strongPassword: strongPassword },\n              validationErrors: { strongPassword: passwordError },\n              required: true,\n              floatingLabelText: 'Password',\n              disabled: !this.state.fieldsWriteable\n\n            }),\n            _react2.default.createElement(_lib.FormsyText, {\n              type: 'password',\n              name: 'passwordRe',\n              validations: { passwordsMatch: passwordsMatch },\n              validationErrors: { passwordsMatch: passwordReError },\n              floatingLabelText: 'Password repeat',\n              disabled: !this.state.fieldsWriteable\n\n            }),\n            _react2.default.createElement(_lib.FormsyText, {\n              name: 'userEmail',\n              validations: 'isEmail',\n              validationError: emailError,\n              required: true,\n              floatingLabelText: 'Email',\n              updateImmediately: true,\n              disabled: !this.state.fieldsWriteable\n\n            }),\n            _react2.default.createElement(_RaisedButton2.default, {\n              style: submitStyle,\n              type: 'submit',\n              label: 'Sign Up',\n              disabled: !this.state.canSubmit\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignUp;\n}(_react2.default.Component);\n\nexports.default = SignUp;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(936); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"SignUp.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9TaWduVXAvU2lnblVwLmpzeD85MjMyIl0sIm5hbWVzIjpbInN0eWxlcyIsInBhcGVyU3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJzdWJtaXRTdHlsZSIsIm1hcmdpblRvcCIsImVycm9yTWVzc2FnZXMiLCJlbWFpbEVycm9yIiwibG9naW5FcnJvciIsInBhc3N3b3JkRXJyb3IiLCJwYXNzd29yZFJlRXJyb3IiLCJ1bmlxdWVFcnJvciIsIlNpZ25VcCIsInByb3BzIiwic3RhdGUiLCJjYW5TdWJtaXQiLCJpc1VuaXF1ZUxvZ2luIiwiZmllbGRzV3JpdGVhYmxlIiwiY2hlY2tMb2dpbiIsImJpbmQiLCJkaXNhYmxlQnV0dG9uIiwiZW5hYmxlQnV0dG9uIiwic3VibWl0Rm9ybSIsInNvY2tldCIsIm9uIiwic2V0U3RhdGUiLCJkYXRhIiwidmFsdWVzIiwidmFsdWUiLCJlIiwibG9naW4iLCJ0YXJnZXQiLCJlbWl0IiwiZGlzYWJsZUZpZWxkcyIsImNvbnNvbGUiLCJlcnJvciIsInN0cm9uZ1Bhc3N3b3JkIiwicGFzc3dvcmRzTWF0Y2giLCJnb29kTG9naW4iLCJub3RpZnlGb3JtRXJyb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUztBQUNYQyxjQUFZO0FBQ1ZDLFdBQU8sR0FERztBQUVWQyxZQUFRLE1BRkU7QUFHVkMsYUFBUztBQUhDLEdBREQ7QUFNWEMsZUFBYTtBQUNYQyxlQUFXO0FBREE7QUFORixDQUFmOztBQVdBLElBQU1DLGdCQUFnQjtBQUNsQkMsY0FBWSwyQkFETTtBQUVsQkMsY0FBWSw2QkFGTTtBQUdsQkMsaUJBQWUsa0NBSEc7QUFJbEJDLG1CQUFpQix3QkFKQztBQUtsQkMsZUFBYTtBQUxLLENBQXRC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Z0JBQU15QixTOztrQkF1SVo1QixNIiwiZmlsZSI6IjEwMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9ybXN5IGZyb20gJ2Zvcm1zeS1yZWFjdCc7XHJcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnO1xyXG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XHJcbmltcG9ydCBQYXBlciBmcm9tICdtYXRlcmlhbC11aS9QYXBlcic7XHJcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcclxuaW1wb3J0IHZhbGlkYXRpb25zIGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRpb25zJztcclxuaW1wb3J0IHsgRm9ybXN5VGV4dCB9IGZyb20gJ2Zvcm1zeS1tYXRlcmlhbC11aS9saWInO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgcGFwZXJTdHlsZToge1xyXG4gICAgICB3aWR0aDogMzAwLFxyXG4gICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgcGFkZGluZzogMjAsXHJcbiAgICB9LFxyXG4gICAgc3VibWl0U3R5bGU6IHtcclxuICAgICAgbWFyZ2luVG9wOiAzMixcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcclxuICAgIGVtYWlsRXJyb3I6ICdUaGlzIGlzIG5vdCBhIHZhbGlkIGVtYWlsJyxcclxuICAgIGxvZ2luRXJyb3I6ICdQbGVhc2UgY2hvb3NlIGFub3RoZXIgbG9naW4nLFxyXG4gICAgcGFzc3dvcmRFcnJvcjogJ1BsZWFzZSBwcm92aWRlIGEgc3Ryb25nIHBhc3N3b3JkJyxcclxuICAgIHBhc3N3b3JkUmVFcnJvcjogJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnLFxyXG4gICAgdW5pcXVlRXJyb3I6ICdUaGlzIHVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4nXHJcbn1cclxuXHJcblxyXG5jbGFzcyBTaWduVXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2FuU3VibWl0OmZhbHNlLFxyXG4gICAgICAgICAgICBpc1VuaXF1ZUxvZ2luOiBmYWxzZSxcclxuICAgICAgICAgICAgZmllbGRzV3JpdGVhYmxlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tMb2dpbiAgICA9IHRoaXMuY2hlY2tMb2dpbi4gICBiaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbiA9IHRoaXMuZGlzYWJsZUJ1dHRvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlQnV0dG9uICA9IHRoaXMuZW5hYmxlQnV0dG9uLiBiaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaXNVbmlxdWVMb2dpbiA9IHRoaXMuaXNVbmlxdWVMb2dpbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSAgICA9IHRoaXMuc3VibWl0Rm9ybS4gICBiaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMucHJvcHMuc29ja2V0O1xyXG4gICAgICBcclxuICAgICAgc29ja2V0Lm9uKCd1c2VyIGV4aXN0IGluZm8nLCBkYXRhID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGlzVW5pcXVlTG9naW46IGRhdGEuaXNVbmlxdWVMb2dpblxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIGVuYWJsZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYW5TdWJtaXQ6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgICBcclxuICBkaXNhYmxlQnV0dG9uKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhblN1Ym1pdDogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgaXNVbmlxdWVMb2dpbih2YWx1ZXMsIHZhbHVlKSB7XHJcbiAgICAgIGlmICh2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuc3RhdGUuaXNVbmlxdWVMb2dpbikge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICAgIFxyXG4gIGNoZWNrTG9naW4oZSkge1xyXG4gICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLnByb3BzLnNvY2tldDtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgIGxvZ2luOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICB9XHJcbiAgICAgIHNvY2tldC5lbWl0KCdpcyB1c2VyIGV4aXN0JywgZGF0YSk7XHJcbiAgfVxyXG4gICAgXHJcbiAgc3VibWl0Rm9ybShkYXRhKSB7XHJcbiAgICB0aGlzLmRpc2FibGVGaWVsZHMoKTtcclxuICAgIGNvbnN0IHNvY2tldCA9IHRoaXMucHJvcHMuc29ja2V0O1xyXG4gICAgc29ja2V0LmVtaXQoJ3NpZ24gdXAnLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVGaWVsZHMoKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZmllbGRzV3JpdGVhYmxlXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gICAgXHJcbiAgbm90aWZ5Rm9ybUVycm9yKGRhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm0gZXJyb3I6JywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyBwYXBlclN0eWxlLCBzdWJtaXRTdHlsZSB9ID0gc3R5bGVzO1xyXG4gICAgbGV0IHsgZW1haWxFcnJvciwgcGFzc3dvcmRFcnJvciwgcGFzc3dvcmRSZUVycm9yLCB1bmlxdWVFcnJvciwgbG9naW5FcnJvciB9ID0gZXJyb3JNZXNzYWdlcztcclxuICAgIGxldCB7IGlzVW5pcXVlTG9naW4sIHN0cm9uZ1Bhc3N3b3JkLCBwYXNzd29yZHNNYXRjaCwgZ29vZExvZ2luIH0gPSB2YWxpZGF0aW9ucztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17Z2V0TXVpVGhlbWUoKX0+XHJcbiAgICAgICAgPFBhcGVyIHN0eWxlPXtwYXBlclN0eWxlfT5cclxuICAgICAgICAgIDxGb3Jtc3kuRm9ybVxyXG4gICAgICAgICAgICBvblZhbGlkPXt0aGlzLmVuYWJsZUJ1dHRvbn1cclxuICAgICAgICAgICAgb25JbnZhbGlkPXt0aGlzLmRpc2FibGVCdXR0b259XHJcbiAgICAgICAgICAgIG9uVmFsaWRTdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cclxuICAgICAgICAgICAgb25JbnZhbGlkU3VibWl0PXt0aGlzLm5vdGlmeUZvcm1FcnJvcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm1zeVRleHRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlckxvZ2luXCJcclxuICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e2lzVW5pcXVlTG9naW46dGhpcy5pc1VuaXF1ZUxvZ2luLCBnb29kTG9naW46IGdvb2RMb2dpbn19XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e2lzVW5pcXVlTG9naW46dW5pcXVlRXJyb3IsIGdvb2RMb2dpbjogbG9naW5FcnJvcn19XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkxvZ2luXCJcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9JzIwJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoZWNrTG9naW59XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmZpZWxkc1dyaXRlYWJsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1zeVRleHRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7c3Ryb25nUGFzc3dvcmQ6IHN0cm9uZ1Bhc3N3b3JkfX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7c3Ryb25nUGFzc3dvcmQ6IHBhc3N3b3JkRXJyb3J9fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmZpZWxkc1dyaXRlYWJsZX1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1zeVRleHRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFJlXCJcclxuICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e3Bhc3N3b3Jkc01hdGNoOiBwYXNzd29yZHNNYXRjaH19XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e3Bhc3N3b3Jkc01hdGNoOiBwYXNzd29yZFJlRXJyb3J9fVxyXG4gICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiUGFzc3dvcmQgcmVwZWF0XCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmllbGRzV3JpdGVhYmxlfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybXN5VGV4dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyRW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25zPVwiaXNFbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yPXtlbWFpbEVycm9yfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgdXBkYXRlSW1tZWRpYXRlbHlcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmllbGRzV3JpdGVhYmxlfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFpc2VkQnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3N1Ym1pdFN0eWxlfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiU2lnbiBVcFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmNhblN1Ym1pdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybXN5LkZvcm0+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9TaWduVXAvU2lnblVwLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})