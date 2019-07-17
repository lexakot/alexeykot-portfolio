import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import {from, Observable} from "rxjs";
import {mergeMap, tap, map} from "rxjs/operators";

interface User {
    role: string;
    name: string;
    github: string;
    id: string;
}

@Injectable({
    providedIn: 'root'
})


export class AuthService {
    userData: any;

    constructor(
        public afs: AngularFirestore,
        public afAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone, 
        private afd: AngularFireDatabase,
    ) {
    }

    GetUser() {
        const user = localStorage.getItem('user');
        return user && JSON.parse(user);
    }

    SignIn(email, password): Observable<User> {
        return from (this.afAuth.auth.signInWithEmailAndPassword(email, password)).pipe(
            mergeMap(user => this.afd.list<User>('users').valueChanges().pipe(
                map(profiles => profiles.find(profile => user.user.uid === profile.id)),
                tap(profile => localStorage.setItem('user', JSON.stringify(profile)))
            ))
        )
    }

    SignOut() {
        return this.afAuth.auth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['auth']);
    })
     }
    }






}