import {Observable, Observer} from 'rxjs';


const observer:Observer<any> = {

    next: value => console.log('value :' + value),
    error: error => console.warn('error :'+ error ),
    complete: () => console.log('completado')
    
}


//Creacion Observable
//const obs$ = Observable.create();

//Función subscriber me permite crear subscripciones.
const obs$ = new Observable<string>(subscriber => {

    //metodo next usado para emitir
    subscriber.next("Hola");
    subscriber.next("Mundo");

    subscriber.complete();

    subscriber.next("Jijiji")

});

//obs$.subscribe( resp => console.log(resp));
obs$.subscribe(observer)