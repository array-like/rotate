import rotateRight from './rotateRight.js';

/**
 * Rotate array values k places to the left in-place in time O(j-i).
 *
 * See http://prakhar.me/articles/the-string-rotation-problem/.
 *
 * @param {{[x: number]: any}} a
 * @param {number} i
 * @param {number} j
 * @param {number} k
 */
const rotateLeft = (a, i, j, k) => rotateRight(a, i, j, j - i - k);

export default rotateLeft;
