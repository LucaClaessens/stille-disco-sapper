export function focusable(node) {
    node.classList.add("focus:outline-none");
    node.classList.add("focus:ring-2");
    node.classList.add("focus:ring-inset");
    node.classList.add("focus:ring-blue-500");
}