
// import '../style/blocks/infrastructure_media.css'

export const Boxlayout = (function () {
    let wrapper = document.body,
    sgroups = Array.from(document.querySelectorAll(".sgroup")),
    closeButtons = Array.from(document.querySelectorAll(".close-sgroup")),
    expandedClass = "is-expanded",
    hasExpandedClass = "has-expanded-item";
    return { init: init };
    function init() {
        _initEvents();
    }
    function _initEvents() {
        sgroups.forEach(function (element) {
            element.onclick = function (event) {
                _opensgroup(event.target.parentElement);
            };
        });
        closeButtons.forEach(function (element) {
            element.onclick = function (event) {
                event.stopPropagation();
                _closesgroup(event.target.parentElement);
            };
        });
    }
    function _opensgroup(element) {
        if (!element.classList.contains(expandedClass)) {
            element.classList.add(expandedClass);
            wrapper.classList.add(hasExpandedClass);
        }
    }
    function _closesgroup(element) {
        if (element.classList.contains(expandedClass)) {
            element.classList.remove(expandedClass);
            wrapper.classList.remove(hasExpandedClass);
        }
    }
})();
Boxlayout.init();