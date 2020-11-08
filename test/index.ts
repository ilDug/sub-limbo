import { from, interval } from 'rxjs';
import { delay, take } from "rxjs/operators";
import { Limbo } from '../dist';

let source = interval(1000).pipe(take(10))
let subs = new Limbo();

subs.oblium = source
    .pipe()
    .subscribe(val => console.log(val))

setTimeout(() => {
    console.log('timeout');
    subs.forget();
}, 5000);


/**
 * PER ESEGUIRE IL TEST
 *
 * node ./node_modules/.bin/tsc ./test/index.ts
 * node ./test/
 */