ReactTemplate
===========

To install reactTemplate, run:

    git clone https://github.com/istewart/reactTemplate.git
    cd reactTemplate
    npm install

This will install the OuterCircle respository and all of its dependencies. You can then build the repository using:

    npm run build

This will create a handful of compiled files in dist/ containing the front end code. You can then run the back end using:

    npm run server

Which will create a web server listening on port 8080 that you can access at:

    localhost:8080/

As a shortcut after making changes, you can also run:

    npm run boot

Which will clean dist, run build, and start the server.



=======
To navigate the pages:

Going to http://localhost:8080/ will take you to home
Going to http://localhost:8080/example will take you to an example page
