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
  UI.insert(UI.render(Template.vern_info_modal),document.body);
});

