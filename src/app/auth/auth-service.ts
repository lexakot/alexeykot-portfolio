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
    userData: any; // Save logged in user data

    constructor(
        public afs: AngularFirestore,   // Inject Firestore service
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router,
        public ngZone: NgZone, // NgZone service to remove outside scope warning
        private afd: AngularFireDatabase,
    ) {
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        // this.afAuth.authState.subscribe(user => {
        //     if (user) {
        //         this.userData = user;
        //         localStorage.setItem('user', JSON.stringify(this.userData));
        //         JSON.parse(localStorage.getItem('user'));
        //     } else {
        //         localStorage.setItem('user', null);
        //         JSON.parse(localStorage.getItem('user'));
        //     }
        // })
    }

    GetUser() {
        const user = localStorage.getItem('user');
        return user && JSON.parse(user);
    }
    // Sign in with email/password
    SignIn(email, password): Observable<User> {
        return from (this.afAuth.auth.signInWithEmailAndPassword(email, password)).pipe(
            mergeMap(user => this.afd.list<User>('users').valueChanges().pipe(
                map(profiles => profiles.find(profile => user.user.uid === profile.id)),
                tap(profile => localStorage.setItem('user', JSON.stringify(profile)))
            ))
        )
    }







}