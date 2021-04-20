import {Observable, Observer} from 'rxjs';


const observer:Observer<any> = {

    next: value => console.log('value :' + value),
    error: error => console.warn('error :'+ error ),
    complete: () => console.log('completado')
    
}









