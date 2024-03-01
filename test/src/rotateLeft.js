import test from 'ava';

import {alloc} from '@array-like/alloc';
import {iota} from '@array-like/fill';
import {copy} from '@array-like/copy';

import {rotateLeft} from '#module';

const macro = (t, n, k) => {
	const a = alloc(n);
	iota(a, 0, n, 0);

	const reference = alloc(n);
	copy(a, 0, n, reference, 0);

	rotateLeft(a, 0, n, k);
	t.is(a.length, n, 'length did not change');

	const expected = reference.slice(k).concat(reference.slice(0, k));
	t.deepEqual(a, expected, 'works as expected');
};

macro.title = (title, n, k) => title ?? `${n} - ${k}`;

test(macro, 1000, 0);
test(macro, 1000, 1);
test(macro, 1000, 2);
test(macro, 1000, 3);
test(macro, 1000, 500);
test(macro, 1000, 1000);
