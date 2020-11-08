interface SubscriptionGolem {
    unsubscribe(): void;
}


/**
 * RXJS Subscriptions managment.
 * Easly add and unsubscribe all subscriptions in your component.
 * 
 * @example 
 * private subs = new Limbo();
 */
export class Limbo {
    constructor() { }

    private limbo: SubscriptionGolem[] = [];

    /** 
     * add subscription to the Limbo
     * @example
     * this.subs.oblium = observable1$.subscribe();
     */
    set oblium(s: SubscriptionGolem) {
        this.limbo.push(s);
    }


    /**
     * unsubscribe from all sulbsciption and clean the limbo
     * 
     * @example 
     * ngOnDestroy(){ this.subs.forget() }
     */
    public forget(): void {
        this.limbo.forEach((s: SubscriptionGolem) => s.unsubscribe())
        this.limbo = [];
    }


}