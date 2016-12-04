# Angular2 in ASP.NET MVC Nuget Package
This Nuget Package will help you to integrate Angular2 JS framework into ASP.NET MVC or WebAPI applications

Package includes ASP.NET MVC compatible tsconfig.json, typings.json, systemjs.config.js, package.json files. Package also includes client side JS libraries reference and configuration for Angular2, @angular/common, @angular/compiler, @angular/core, @angular/forms, @angular/http, @angular/platform-browser, core-js, lodash, rxjs, systemjs, zone.js. Package also contains sample SPA template implemented according to Angular2 Best Design Guidelines.

### File Type INFO:

* File1: Package.json file

	  package.json identifies npm package dependencies for the project.

* File2: tsconfig.json file

	  This file defines how the TypeScript compiler generates JavaScript from the project’s files.

* File3: typings.json file

	  This file provides additional definition files for libraries that the TypeScript compiler doesn’t natively recognize.

* __Required Step: Install package.json file__
	  
    Open CMD and redirect to your application folder and Using npm from the command line, install the packages listed in package.json with the command:

	    > npm install --save --save-dev

	*wait for the installation to complete*
	
* File4: systemjs.config.js file
	  This file provides information to a module loader about where to find application modules, and registers all the necessary packages.

### Project Usage:
 
1. **Folder name “App” in Scripts folder**

2. **Application module file (App/app.module.ts)**

	  Angular itself is split into separate Angular Modules. This makes it possible for you to keep payload size small by only importing the parts of Angular that your application needs.Every Angular application has at least one module: the root module, named AppModule here.

3. **Component & add it to your application (App/app.component.ts)**

	  Every Angular application has at least one component: the root component, named AppComponent here.Components are the basic building blocks of Angular applications. A component controls a portion of the screen—a view—through its associated template.

4. **Start up file (App/main.ts)**

	  Now we need to tell Angular to start up your application.

5. **Index.cshtml in View Folders contain angular 2 directive**

	    <my-app>Loading...</my-app>

6. **_Layout.cshtml contain angular2 script reference and system.js startup configuration**

        <script src="../../node_modules/core-js/client/shim.min.js"></script>
        <script src="../../node_modules/zone.js/dist/zone.js"></script>
        <script src="../../node_modules/reflect-metadata/Reflect.js"></script>
        <script src="../../node_modules/systemjs/dist/system.src.js"></script>

        <!-- 2. Configure SystemJS -->
        <script src="../../systemjs.config.js"></script>
        <script>
            System.import('../../Scripts/App/main').catch(function (err) {
                console.error(err);
            });
        </script>


![screenshot_29](https://cloud.githubusercontent.com/assets/10474169/20869337/69ff98fe-ba25-11e6-8f00-df75a91b7d48.png)
