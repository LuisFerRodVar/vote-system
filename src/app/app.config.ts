import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "preferential-voting-system", appId: "1:299941872864:web:6307164bd2020997253c85", storageBucket: "preferential-voting-system.firebasestorage.app", apiKey: "AIzaSyD-zruS1euJ4zvwXTCV3QQX883HbaHzenQ", authDomain: "preferential-voting-system.firebaseapp.com", messagingSenderId: "299941872864" })), provideFirestore(() => getFirestore())]
};
