To enable bootstrap.css editing functionality run:
# npm i

After you may edit bootstrap.css via grunt with follows:

	Available Grunt commands:

	grunt dist (Just compile CSS and JavaScript)
		- Regenerates the /dist/ directory with compiled and minified CSS and JavaScript files. As a Bootstrap user, this is normally the command you want.

	grunt watch (Watch)
		- Watches the Less source files and automatically recompiles them to CSS whenever you save a change.

	grunt test (Run tests)
		- Runs JSHint and runs the QUnit tests headlessly in PhantomJS.

	grunt docs (Build & test the docs assets)
		- Builds and tests CSS, JavaScript, and other assets which are used when running the documentation locally via bundle exec jekyll serve.

	grunt (Build absolutely everything and run tests)
		- Compiles and minifies CSS and JavaScript, builds the documentation website, runs the HTML5 validator against the docs, regenerates the Customizer assets, and more. Requires Jekyll. Usually only necessary if you're hacking on Bootstrap itself.