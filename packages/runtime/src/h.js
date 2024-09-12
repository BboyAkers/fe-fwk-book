import { withoutNulls } from './utils/arrays'

export const DOM_TYPES = {
  TEXT: 'text',
  ELEMENT: 'element',
  FRAGMENT: 'fragment',
}

function mapTextNodes(children) {
  /* TODO: See if there's a way to optimize this by using the Map() obj and/or
    another more efficient way to evaluate whether the node is a string or not.
  */
  return children.map((child) => {
    typeof child === 'string' ? hString(child) : child
  })
}

export function h(tag, props = {}, children = []) {
  return {
    tag,
    props,
    children: mapTextNodes(withoutNulls(children)),
    type: DOM_TYPES.ELEMENT,
  }
}
