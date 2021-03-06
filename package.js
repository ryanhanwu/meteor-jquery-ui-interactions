Package.describe({
	name: "ryanwu:jquery-ui-interactions",
	version: "0.1.1",
	summary: "Basic interaction behaviors to any element",
	git: "https://github.com/ryanhanwu/meteor-jquery-ui-interactions.git",
	documentation: "README.md"
});

Package.onUse(function(api) {
	api.versionsFrom("METEOR@1.1.0.2");
	api.use("jquery", "client");
	api.addFiles(["jquery-ui-interactions.js", "jquery-ui-interactions.css"], "client");
});
