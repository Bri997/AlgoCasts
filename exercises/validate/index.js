// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }
  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    /// min is null and max is node.data value
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    //move the value of the min for the right
    return false;
  }

  return true;
}

module.exports = validate;
