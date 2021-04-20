import { Observable, Observer } from "rxjs";


const observable = new Observable<number>((subscribe) => {
    let count: number = 0;
  
    const interval = setInterval(() => {
      count++;
      subscribe.next(count);
    }, 1000);
  
    //return del Observable...instrucción ejecutada cuando se invoca el unsubscribe.
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido')
    }
  });
  
  //Subscritor u observable.
  const subscription = observable.subscribe((num) =>
    console.log("Subscriptor 1: " + num)
  );
  const subscription2 = observable.subscribe((num) =>
    console.log("Subscriptor 2: " + num)
  );
  const subscription3 = observable.subscribe((num) =>
    console.log("Subscriptor 3: " + num)
  );
  
  //Cancelar subscription
  setTimeout(() => {
    subscription.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();
  }, 3000);