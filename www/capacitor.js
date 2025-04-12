// This file helps initialize Capacitor and detect if we're running in a native app context
// It will be automatically included when you build with Capacitor
(function() {
  // This is a simplified version - Capacitor will inject the real implementation
  window.Capacitor = window.Capacitor || {
    isNative: false,
    Plugins: {}
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    // Create and dispatch deviceready event when Capacitor is loaded
    if (window.Capacitor && window.Capacitor.isNative) {
      const event = new CustomEvent('deviceready');
      document.dispatchEvent(event);
    }
  });
})();
