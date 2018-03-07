webpackHotUpdate(2,{

/***/ "./components/layout/Layout.scss":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = link.onerror = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev.nextSibling);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      module.hot.accept();
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1520459343997");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=2.1622e3c9e4763fee9fa0.hot-update.js.map