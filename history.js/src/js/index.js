/*
* @Author: fengyun2
* @Date:   2016-05-09 21:26:45
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-09 21:39:26
*/

'use strict';

/**
 * HTML5 history and ajax
 */

 $(function(){
  var ajax,
  currentState;
  $(".container li").unbind().bind("click",function(e){

    e.preventDefault();
    var target = e.target,
    url = $(target).attr("href");
    !$(this).hasClass("current") && $(this).addClass("current").siblings().removeClass("current");
    if(ajax == undefined) {
      currentState = {
        url: document.location.href,
        title: document.title,
        html: $(".content").html()
      };
    }
    ajax = $.ajax({
      type:"GET",
      url: url,
      dataType:"json",
      success: function(data){
        var html = "";
        if(data.length > 0) {
          for(var i = 0, ilist = data.length; i < ilist; i++) {
            html += "<li>" +data[i].age+ "</li>" +
            "<li>" +data[i].name+ "</li>" +
            "<li>" +data[i].sex+ "</li>";
          }
          $(".content").html(html);
        }
        var state = {
          url: url,
          title: document.title,
          html: $(".content").html()
        };
        history.pushState(state,null,url);
      }
    });

  });

  window.addEventListener("popstate",function(event){
    if(ajax == null){
      return;
    }else if(event && event.state){
      document.title = event.state.title;
      $(".content").html(event.state.html);
    }else{
      document.title = currentState.title;
      $(".content").html(currentState.html);
    }
  });
});
