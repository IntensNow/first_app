webpackHotUpdate(0,{

/***/ 888:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(889);\n\nvar _socket = __webpack_require__(891);\n\nvar _socket2 = _interopRequireDefault(_socket);\n\nvar _SideBar = __webpack_require__(943);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _ChatBox = __webpack_require__(955);\n\nvar _ChatBox2 = _interopRequireDefault(_ChatBox);\n\nvar _CHANNELS_LIST = __webpack_require__(967);\n\nvar _CHANNELS_LIST2 = _interopRequireDefault(_CHANNELS_LIST);\n\nvar _MESSAGES_LIST = __webpack_require__(968);\n\nvar _MESSAGES_LIST2 = _interopRequireDefault(_MESSAGES_LIST);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar socket = (0, _socket2.default)('/api/chat');\n\nexports.default = function () {\n    return _react2.default.createElement(\n        'div',\n        { className: 'chat_container container' },\n        _react2.default.createElement(_SideBar2.default, { channels: _CHANNELS_LIST2.default, socket: socket }),\n        _react2.default.createElement(_ChatBox2.default, { messages: _MESSAGES_LIST2.default })\n    );\n};\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(884); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"ChatContainer.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9DaGF0Q29udGFpbmVyL0NoYXRDb250YWluZXIuanM/MzE5OCJdLCJuYW1lcyI6WyJzb2NrZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLHNCQUFHLFdBQUgsQ0FBZjs7a0JBRWUsWUFBTTtBQUNqQixXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsMEJBQWY7QUFDSSwyREFBUyxpQ0FBVCxFQUE2QixRQUFRQSxNQUFyQyxHQURKO0FBRUksMkRBQVMsaUNBQVQ7QUFGSixLQURKO0FBTUgsQyIsImZpbGUiOiI4ODguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbWFpbi5sZXNzJztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaWRlQmFyJztcclxuaW1wb3J0IENoYXRCb3ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DaGF0Qm94JztcclxuaW1wb3J0IENIQU5ORUxTIGZyb20gJy4uLy4uL0NIQU5ORUxTX0xJU1QnO1xyXG5pbXBvcnQgTUVTU0FHRVMgZnJvbSAnLi4vLi4vTUVTU0FHRVNfTElTVCc7XHJcblxyXG5jb25zdCBzb2NrZXQgPSBpbygnL2FwaS9jaGF0Jyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0X2NvbnRhaW5lciBjb250YWluZXInPlxyXG4gICAgICAgICAgICA8U2lkZUJhciBjaGFubmVscz17Q0hBTk5FTFN9IHNvY2tldD17c29ja2V0fS8+XHJcbiAgICAgICAgICAgIDxDaGF0Qm94IG1lc3NhZ2VzPXtNRVNTQUdFU30vPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvQ2hhdENvbnRhaW5lci9DaGF0Q29udGFpbmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})