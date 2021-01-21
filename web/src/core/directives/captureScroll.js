import throttle from "lodash/throttle";
export function captureScroll(node) {
    let top;
    let left;

    function scrollCallback() {
        top = node.scrollLeft;
        left = node.scrollTop;

        node.dispatchEvent(new CustomEvent('move', {
            detail: { x: top, y: left }
        }));
    }

    node.addEventListener('scroll', throttle(
        scrollCallback,
        100
    ), { passive: true });

    return {
        destroy() {
            node.removeEventListener('scroll', throttleScroll);
        }
    };


}