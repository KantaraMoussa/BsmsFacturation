(function () {
    "use strict";

    var IDLE_LIMIT_MS = 5 * 60 * 1000; // 5 minutes
    var timer = null;

    function doLogout() {
        window.location.href = window.baseUrl + "user/logout?timeout=1";
    }

    function resetTimer() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(doLogout, IDLE_LIMIT_MS);
    }

    ["mousemove", "mousedown", "keydown", "scroll", "touchstart", "click"].forEach(function (evt) {
        document.addEventListener(evt, resetTimer, { passive: true });
    });

    resetTimer();
})();
