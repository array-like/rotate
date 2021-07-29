import assert from 'assert';
import {reverse} from '@array-like/reverse';

/**
 * Rotate array values k places to the right in-place in time O(j-i).
 *
 * See http://prakhar.me/articles/the-string-rotation-problem/.
 *
 * @param {{[x: number]: any}} a
 * @param {number} i
 * @param {number} j
 * @param {number} k
 */
const rotateRight = (a, i, j, k) => {
	assert(k >= 0);
	assert(k <= j - i);
	reverse(a, i, j);
	reverse(a, i, i + k);
	reverse(a, i + k, j);
};

export default rotateRight;
