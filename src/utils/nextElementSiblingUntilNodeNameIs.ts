export default function nextElementSiblingUntilNodeNameIs(
  element: HTMLElement | Element,
  nodeName: string
): Element {
  let currentNode: Element = element;
  while (currentNode.nodeName.toLowerCase() !== nodeName) {
    currentNode = currentNode.nextElementSibling;
  }
  return currentNode;
}
