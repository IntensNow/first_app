webpackHotUpdate(0,{

/***/ 1001:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _formsyReact = __webpack_require__(963);\n\nvar _formsyReact2 = _interopRequireDefault(_formsyReact);\n\nvar _getMuiTheme = __webpack_require__(602);\n\nvar _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);\n\nvar _MuiThemeProvider = __webpack_require__(593);\n\nvar _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);\n\nvar _Paper = __webpack_require__(675);\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _RaisedButton = __webpack_require__(653);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _validations = __webpack_require__(970);\n\nvar _validations2 = _interopRequireDefault(_validations);\n\nvar _lib = __webpack_require__(1002);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  paperStyle: {\n    width: 300,\n    margin: 'auto',\n    padding: 20\n  },\n  submitStyle: {\n    marginTop: 32\n  }\n};\n\nvar errorMessages = {\n  emailError: 'This is not a valid email',\n  loginError: 'Please choose another login',\n  passwordError: 'Please provide a strong password',\n  passwordReError: 'Passwords do not match',\n  uniqueError: 'This username is already taken'\n};\n\nvar SignUp = function (_React$Component) {\n  _inherits(SignUp, _React$Component);\n\n  function SignUp(props) {\n    _classCallCheck(this, SignUp);\n\n    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));\n\n    _this.state = {\n      canSubmit: false,\n      isUniqueLogin: false\n    };\n    _this.disableButton = _this.disableButton.bind(_this);\n    _this.enableButton = _this.enableButton.bind(_this);\n    _this.isUniqueLogin = _this.isUniqueLogin.bind(_this);\n    _this.checkLogin = _this.checkLogin.bind(_this);\n    return _this;\n  }\n\n  _createClass(SignUp, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var socket = this.props.socket;\n\n      socket.on('user exist info', function (data) {\n        _this2.setState({\n          isUniqueLogin: data.isUniqueLogin\n        });\n      });\n    }\n  }, {\n    key: 'enableButton',\n    value: function enableButton() {\n      this.setState({\n        canSubmit: true\n      });\n    }\n  }, {\n    key: 'disableButton',\n    value: function disableButton() {\n      this.setState({\n        canSubmit: false\n      });\n    }\n  }, {\n    key: 'isUniqueLogin',\n    value: function isUniqueLogin(values, value) {\n      if (value !== 'undefined' && !this.state.isUniqueLogin) {\n        return false;\n      }\n      return true;\n    }\n  }, {\n    key: 'checkLogin',\n    value: function checkLogin(e) {\n      var socket = this.props.socket;\n      var data = {\n        login: e.target.value\n      };\n      socket.emit('is user exist', data);\n    }\n  }, {\n    key: 'submitForm',\n    value: function submitForm(data) {\n      alert(JSON.stringify(data, null, 4));\n    }\n  }, {\n    key: 'notifyFormError',\n    value: function notifyFormError(data) {\n      console.error('Form error:', data);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var paperStyle = styles.paperStyle,\n          submitStyle = styles.submitStyle;\n      var emailError = errorMessages.emailError,\n          passwordError = errorMessages.passwordError,\n          passwordReError = errorMessages.passwordReError,\n          loginError = errorMessages.loginError,\n          uniqueError = errorMessages.uniqueError;\n\n\n      return _react2.default.createElement(\n        _MuiThemeProvider2.default,\n        { muiTheme: (0, _getMuiTheme2.default)() },\n        _react2.default.createElement(\n          _Paper2.default,\n          { style: paperStyle },\n          _react2.default.createElement(\n            _formsyReact2.default.Form,\n            {\n              onValid: this.enableButton,\n              onInvalid: this.disableButton,\n              onValidSubmit: this.submitForm,\n              onInvalidSubmit: this.notifyFormError\n            },\n            _react2.default.createElement(_lib.FormsyText, {\n              name: 'login',\n              validations: { isUniqueLogin: this.isUniqueLogin },\n              validationErrors: { uniqueError: uniqueError },\n              required: true,\n              floatingLabelText: 'Login',\n              maxLength: '20',\n              onChange: this.checkLogin\n            }),\n            _react2.default.createElement(_lib.FormsyText, {\n              type: 'password',\n              name: 'password',\n              validations: { strongPassword: _validations2.default.strongPassword },\n              validationErrors: { strongPassword: passwordError },\n              required: true,\n              floatingLabelText: 'Password'\n            }),\n            _react2.default.createElement(_lib.FormsyText, {\n              type: 'password',\n              name: 'passwordRe',\n              validations: { passwordsMatch: _validations2.default.passwordsMatch },\n              validationErrors: { passwordsMatch: passwordReError },\n              floatingLabelText: 'Password repeat'\n            }),\n            _react2.default.createElement(_lib.FormsyText, {\n              name: 'email',\n              validations: 'isEmail',\n              validationError: emailError,\n              required: true,\n              floatingLabelText: 'Email',\n              updateImmediately: true\n            }),\n            _react2.default.createElement(_RaisedButton2.default, {\n              style: submitStyle,\n              type: 'submit',\n              label: 'Sign Up',\n              disabled: !this.state.canSubmit\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignUp;\n}(_react2.default.Component);\n\nexports.default = SignUp;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(936); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"SignUp.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9TaWduVXAvU2lnblVwLmpzeD85MjMyIl0sIm5hbWVzIjpbInN0eWxlcyIsInBhcGVyU3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJzdWJtaXRTdHlsZSIsIm1hcmdpblRvcCIsImVycm9yTWVzc2FnZXMiLCJlbWFpbEVycm9yIiwibG9naW5FcnJvciIsInBhc3N3b3JkRXJyb3IiLCJwYXNzd29yZFJlRXJyb3IiLCJ1bmlxdWVFcnJvciIsIlNpZ25VcCIsInByb3BzIiwic3RhdGUiLCJjYW5TdWJtaXQiLCJpc1VuaXF1ZUxvZ2luIiwiZGlzYWJsZUJ1dHRvbiIsImJpbmQiLCJlbmFibGVCdXR0b24iLCJjaGVja0xvZ2luIiwic29ja2V0Iiwib24iLCJzZXRTdGF0ZSIsImRhdGEiLCJ2YWx1ZXMiLCJ2YWx1ZSIsImUiLCJsb2dpbiIsInRhcmdldCIsImVtaXQiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwiZXJyb3IiLCJzdWJtaXRGb3JtIiwibm90aWZ5Rm9ybUVycm9yIiwic3Ryb25nUGFzc3dvcmQiLCJwYXNzd29yZHNNYXRjaCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTO0FBQ1hDLGNBQVk7QUFDVkMsV0FBTyxHQURHO0FBRVZDLFlBQVEsTUFGRTtBQUdWQyxhQUFTO0FBSEMsR0FERDtBQU1YQyxlQUFhO0FBQ1hDLGVBQVc7QUFEQTtBQU5GLENBQWY7O0FBV0EsSUFBTUMsZ0JBQWdCO0FBQ2xCQyxjQUFZLDJCQURNO0FBRWxCQyxjQUFZLDZCQUZNO0FBR2xCQyxpQkFBZSxrQ0FIRztBQUlsQkMsbUJBQWlCLHdCQUpDO0FBS2xCQyxlQUFhO0FBTEssQ0FBdEI7O0lBU01DLE07OztBQUNGLGtC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cEI7QUFLRSw0QkFMRjtBQU1FLGlDQUFrQjtBQU5wQixjQWZGO0FBdUJFO0FBQ0Usb0JBQUssVUFEUDtBQUVFLG9CQUFLLFlBRlA7QUFHRSwyQkFBYSxFQUFDOEIsZ0JBQWdCLHNCQUFZQSxjQUE3QixFQUhmO0FBSUUsZ0NBQWtCLEVBQUNBLGdCQUFnQjdCLGVBQWpCLEVBSnBCO0FBS0UsaUNBQWtCO0FBTHBCLGNBdkJGO0FBOEJFO0FBQ0Usb0JBQUssT0FEUDtBQUVFLDJCQUFZLFNBRmQ7QUFHRSwrQkFBaUJILFVBSG5CO0FBSUUsNEJBSkY7QUFLRSxpQ0FBa0IsT0FMcEI7QUFNRTtBQU5GLGNBOUJGO0FBc0NFO0FBQ0UscUJBQU9ILFdBRFQ7QUFFRSxvQkFBSyxRQUZQO0FBR0UscUJBQU0sU0FIUjtBQUlFLHdCQUFVLENBQUMsS0FBS1UsS0FBTCxDQUFXQztBQUp4QjtBQXRDRjtBQURGO0FBREYsT0FERjtBQW1ERDs7OztFQWxIa0IsZ0JBQU15QixTOztrQkFxSFo1QixNIiwiZmlsZSI6IjEwMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9ybXN5IGZyb20gJ2Zvcm1zeS1yZWFjdCc7XHJcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnO1xyXG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XHJcbmltcG9ydCBQYXBlciBmcm9tICdtYXRlcmlhbC11aS9QYXBlcic7XHJcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcclxuaW1wb3J0IHZhbGlkYXRpb25zIGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRpb25zJztcclxuaW1wb3J0IHsgRm9ybXN5VGV4dCB9IGZyb20gJ2Zvcm1zeS1tYXRlcmlhbC11aS9saWInO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgcGFwZXJTdHlsZToge1xyXG4gICAgICB3aWR0aDogMzAwLFxyXG4gICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgcGFkZGluZzogMjAsXHJcbiAgICB9LFxyXG4gICAgc3VibWl0U3R5bGU6IHtcclxuICAgICAgbWFyZ2luVG9wOiAzMixcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcclxuICAgIGVtYWlsRXJyb3I6ICdUaGlzIGlzIG5vdCBhIHZhbGlkIGVtYWlsJyxcclxuICAgIGxvZ2luRXJyb3I6ICdQbGVhc2UgY2hvb3NlIGFub3RoZXIgbG9naW4nLFxyXG4gICAgcGFzc3dvcmRFcnJvcjogJ1BsZWFzZSBwcm92aWRlIGEgc3Ryb25nIHBhc3N3b3JkJyxcclxuICAgIHBhc3N3b3JkUmVFcnJvcjogJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnLFxyXG4gICAgdW5pcXVlRXJyb3I6ICdUaGlzIHVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4nXHJcbn1cclxuXHJcblxyXG5jbGFzcyBTaWduVXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2FuU3VibWl0OmZhbHNlLFxyXG4gICAgICAgICAgICBpc1VuaXF1ZUxvZ2luOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc2FibGVCdXR0b24gPSB0aGlzLmRpc2FibGVCdXR0b24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVuYWJsZUJ1dHRvbiA9IHRoaXMuZW5hYmxlQnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pc1VuaXF1ZUxvZ2luID0gdGhpcy5pc1VuaXF1ZUxvZ2luLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jaGVja0xvZ2luID0gdGhpcy5jaGVja0xvZ2luLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5wcm9wcy5zb2NrZXQ7XHJcbiAgICAgIFxyXG4gICAgICBzb2NrZXQub24oJ3VzZXIgZXhpc3QgaW5mbycsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgaXNVbmlxdWVMb2dpbjogZGF0YS5pc1VuaXF1ZUxvZ2luXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgZW5hYmxlQnV0dG9uKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhblN1Ym1pdDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYW5TdWJtaXQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlzVW5pcXVlTG9naW4odmFsdWVzLCB2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLnN0YXRlLmlzVW5pcXVlTG9naW4pIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgICBcclxuICBjaGVja0xvZ2luKGUpIHtcclxuICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5wcm9wcy5zb2NrZXQ7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICBsb2dpbjogZS50YXJnZXQudmFsdWVcclxuICAgICAgfVxyXG4gICAgICBzb2NrZXQuZW1pdCgnaXMgdXNlciBleGlzdCcsIGRhdGEpO1xyXG4gIH1cclxuICAgIFxyXG4gIHN1Ym1pdEZvcm0oZGF0YSkge1xyXG4gICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgNCkpO1xyXG4gIH1cclxuXHJcbiAgbm90aWZ5Rm9ybUVycm9yKGRhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm0gZXJyb3I6JywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyBwYXBlclN0eWxlLCBzdWJtaXRTdHlsZSB9ID0gc3R5bGVzO1xyXG4gICAgbGV0IHsgZW1haWxFcnJvciwgcGFzc3dvcmRFcnJvciwgcGFzc3dvcmRSZUVycm9yLCBsb2dpbkVycm9yLCB1bmlxdWVFcnJvciB9ID0gZXJyb3JNZXNzYWdlcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17Z2V0TXVpVGhlbWUoKX0+XHJcbiAgICAgICAgPFBhcGVyIHN0eWxlPXtwYXBlclN0eWxlfT5cclxuICAgICAgICAgIDxGb3Jtc3kuRm9ybVxyXG4gICAgICAgICAgICBvblZhbGlkPXt0aGlzLmVuYWJsZUJ1dHRvbn1cclxuICAgICAgICAgICAgb25JbnZhbGlkPXt0aGlzLmRpc2FibGVCdXR0b259XHJcbiAgICAgICAgICAgIG9uVmFsaWRTdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cclxuICAgICAgICAgICAgb25JbnZhbGlkU3VibWl0PXt0aGlzLm5vdGlmeUZvcm1FcnJvcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm1zeVRleHRcclxuICAgICAgICAgICAgICBuYW1lPVwibG9naW5cIlxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7aXNVbmlxdWVMb2dpbjp0aGlzLmlzVW5pcXVlTG9naW59fVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3t1bmlxdWVFcnJvcjp1bmlxdWVFcnJvcn19XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkxvZ2luXCJcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9JzIwJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoZWNrTG9naW59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3Jtc3lUZXh0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7c3Ryb25nUGFzc3dvcmQ6IHZhbGlkYXRpb25zLnN0cm9uZ1Bhc3N3b3JkfX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7c3Ryb25nUGFzc3dvcmQ6IHBhc3N3b3JkRXJyb3J9fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3Jtc3lUZXh0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRSZVwiXHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3twYXNzd29yZHNNYXRjaDogdmFsaWRhdGlvbnMucGFzc3dvcmRzTWF0Y2h9fVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3twYXNzd29yZHNNYXRjaDogcGFzc3dvcmRSZUVycm9yfX1cclxuICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlBhc3N3b3JkIHJlcGVhdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3Jtc3lUZXh0XHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB2YWxpZGF0aW9ucz1cImlzRW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcj17ZW1haWxFcnJvcn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIHVwZGF0ZUltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWlzZWRCdXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17c3VibWl0U3R5bGV9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTaWduIFVwXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY2FuU3VibWl0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3Jtc3kuRm9ybT5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL1NpZ25VcC9TaWduVXAuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})