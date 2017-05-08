import {Component, Injectable} from '@angular/core';

@Injectable()
export class AppService {

    // this is where the variables go


    constructor() {
        // do init stuff
    }



    // this is where the function goes..


    toggle(prop:boolean) {
        let output = !prop;
         console.log('from app.service toggle method.......', output);
        return output;
        
    }
}
