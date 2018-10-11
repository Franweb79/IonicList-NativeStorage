import {Injectable} from '@angular/core';

@Injectable()

export class CookiesService{

    //functions obtained here https://gist.github.com/joduplessis/7b3b4340353760e945f972a69e855d11

    setCookie(name: string, val: string) 
    {
        const date = new Date();
        const value = val;
    
        // Set it expire in 30 days
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    
        // Set it
        document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
    
       
    }

    getCookie(name: string) 
    {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
        else{
            return "no cookie is setted";
        }
    }
}