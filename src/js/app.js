var $ = window.jQuery = require("jquery");
var attachFastClick = require("fastclick");

module.exports = {
  init: function() {
    this.setupHandlers();
    attachFastClick(document.body);
  },
  setupHandlers: function() {
    $(function() {
      $(".header--nav__menu-button").click(function() {
        $("body").toggleClass("menu-is-open");
      });      
    });
  },
};
