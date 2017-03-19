# myportfolio
My personal portfolio website project.

## Installation
You first need to download and install Node.js, a JavaScript engine that runs
natively on your OS. Node.js includes a command-line JavaScript package manager
called `npm`.

Download and install the latest Node.js build - https://docs.npmjs.com/getting-started/installing-node

Then, clone this repository into a folder in your computer, enter it in the command line
and simply run `npm install`. This will download all the files necessary for the build process
and all JavaScript files that will be bundled into the actual build (which is what you actually serve to end users on the web).

## Building
There is a `package.json` file in the root directory of the project, which is a file
that has a variety of configuration options and a list of dependencies for your project.

You will notice that there is a `scripts` config object containing two scripts - `dev` and `build`.
You can run these scripts by doing `npm run *script-name*` in your terminal, where
`*script-name*` is one of these scripts. Eg - `npm run build`.

`npm run build` will bundle all of your HTML, JS, CSS and SCSS files in the `src/` directory
and put the bundled files in the `build/` directory.

`npm run dev` will bundle all of your files and also open local server on your PC
that you can use for development purposes. The server will auto-refresh when it detects a
change in any files it's watching in the `src/` directory.

## Deployment
To get the built site up on the internet, simply run `npm run build` to build the project.
The contents of the `build/` folder after running the build command are what you actually
want up on your server. So simply build, then upload the contents of `build/` to your server
via FTP.
