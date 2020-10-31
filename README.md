# SampleAngular

This Angular CLI generated project can be be loaded into DigitalOcean App Platform, deployed and served

## Production Server

Since Angular is a SPA, serving the static files after build is all that's needed. 

To do so, a server ([serve](https://www.npmjs.com/package/serve)) is pointed to the directory of the built files `dist/sample-angular` and hooks the directory to a port to serve.

## On App Platform

Log into your DigitalOcean account and open "Apps", or you can use this link: https://cloud.digitalocean.com/apps

Create or "Launch App", then select "Github"

![Choose source](https://blog.khophi.co/wp-content/uploads/2020/09/image-edited-1.png)

Connect to your "Github" or other repo service shown. Then select your repository and branch of choice to use in creating the App.

![Choose branch](https://blog.khophi.co/wp-content/uploads/2020/09/image-1-edited.png)

For build command, enter `npm run build`

For run command, enter `npm run startApp`

Then "Launch App", and your app will then be created and deployed. After successful deployment, you should get a URL to open and view your angular app.

Sample URL is: 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
