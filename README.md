# sub-limbo

## RXJS subscriptions managment

Forget to manage all subscriptions in tour Angular component.


## Installation

```
npm install @ildug/sub-limbo
```

## Usage

Example:

``` typescript

import { Limbo } from '@ildug/sub-limbo';

...
export class SomeComponent implements OnDestroy{
    
    private subs = new Limbo();

    ...
    this.subs.oblium = observable1$.subscribe();
    this.subs.oblium = observable2$.subscribe();
    this.subs.oblium = observable3$.subscribe();
    ...

    ngOnDestroy(){ this.subs.forget() }
}

```