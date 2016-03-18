Package.describe({
	name: 'rocketchat:krzana',
	version: '0.1.0',
	summary: 'Allows you to run a Krzana Finance installation within Rocket Chat, using an iFrame',
	git: '',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'templating',
		'coffeescript',
		'underscore',
		'rocketchat:lib'
	]);

	api.addFiles('krzana/krzanaPage.html', 'client');
	api.addFiles('krzana/krzanaPage.coffee', 'client');
	
	api.addAssets('img/krzana.svg', ['server','client']);
	api.addAssets('img/krzana-black.svg', ['server','client']);

	api.addAssets('styles/krzana.less', 'server');
	api.addFiles('styles/loader.coffee', 'server');
});
