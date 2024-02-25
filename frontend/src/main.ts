import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(() => {
        console.log('Application has been bootstrapped');
    })
    .catch((err) => {
        console.error('Error bootstrapping the application', err);
    });
