$(function() {
  var id = Number(window.location.search.split("=")[1]) - 1;
  $(".keynote-detail .keynot-banner").attr("src", keynotes[id].banner);
  $(".keynote-detail .speakers-abstract .title").append(keynotes[id].topic);
  $(".keynote-detail .speakers-abstract div p").append(keynotes[id].des);
  $(".keynote-detail .speaker-detail .speaker-detail-information").append(
    keynotes[id].intro
  );
  $(".keynote-detail .keynote-des img").attr("src", keynotes[id].avatar);
});
