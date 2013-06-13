
Handlebars.registerHelper('vern_info_tpl', function(name, opts){
  return new Handlebars.SafeString(Template[name] && Template[name]() || '');
});

Template.vern_info.version = function(){
  return VERSION;
}

Template.vern_info_modal.rendered = function(){
  $('#vern_info_modal_tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  })
}

Meteor.startup(function(){
  document.body.appendChild(Meteor.render(Template.vern_info_modal()));
});
