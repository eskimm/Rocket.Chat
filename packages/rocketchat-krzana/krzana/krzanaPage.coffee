Template.krzanaPage.onCreated ->
	@page = new ReactiveVar ''
	Meteor.autorun =>
		@page.set RocketChat.settings.get 'krzanaPage'

Template.krzanaPage.helpers
	page: ->
		return Template.instance().page.get()