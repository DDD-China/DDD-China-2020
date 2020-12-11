var NAV_ITEMS = {
  CONFERENCE: {
    itemIndex: 1,
    title: "CONFERENCE"
  },
  SPEAKER_INFO: {
    itemIndex: 2,
    title: "SPEAKER_INFO"
  },
  LOOK_BACK: {
    itemIndex: 3,
    title: "LOOK_BACK"
  },
  ABOUT_THOUGHTWORKS: {
    itemIndex: 4,
    title: "ABOUT_THOUGHTWORKS"
  },
  TRANSLATION: {
    itemIndex: 5,
    title: "TRANSLATION"
  },
  WORKSHOP: {
    itemIndex: null,
    title: "WORKSHOP"
  },
  AGENDA: {
    itemIndex: null,
    title: "AGENDA"
  },
  TOPIC_GATHERING: {
    itemIndex: null,
    title: "TOPIC_GATHERING"
  },
  LOOK_BACK_2017: {
    itemIndex: null,
    title: "LOOK_BACK_2017"
  },
  LOOK_BACK_2018: {
    itemIndex: null,
    title: "LOOK_BACK_2018"
  },
  LOOK_BACK_2019: {
    itemIndex: null,
    title: "LOOK_BACK_2019"
  },
  BOOKING_TICKETS: {
    itemIndex: null,
    title: "BOOKING_TICKETS"
  }
};

var LANGUAGE = {
  ZH: "ZH",
  EN: "EN"
};
var TRANSLATION_LOCATIONS = {
  [LANGUAGE.EN]: {
    CONFERENCE: "../en/index.html#agenda",
    SPEAKER_INFO: "../en/speaker-info.html",
    WORKSHOP: "../en/workshop.html",
    AGENDA: "../en/conf-schedule.html",
    TOPIC_GATHERING: "../en/topic-gathering.html",
    LOOK_BACK_2017: "../en/look-back-2017.html",
    LOOK_BACK_2018: "../en/look-back-2018.html",
    LOOK_BACK_2019: "../en/look-back-2019.html",
    BOOKING_TICKETS: "../en/booking-tickets.html",
    ABOUT_THOUGHTWORKS: "../en/about-thoughtworks.html"
  },
  [LANGUAGE.ZH]: {
    CONFERENCE: "../zh/index.html#agenda",
    SPEAKER_INFO: "../zh/speaker-info.html",
    WORKSHOP: "../zh/workshop.html",
    AGENDA: "../zh/conf-schedule.html",
    TOPIC_GATHERING: "../zh/topic-gathering.html",
    LOOK_BACK_2017: "../zh/look-back-2017.html",
    LOOK_BACK_2018: "../zh/look-back-2018.html",
    LOOK_BACK_2019: "../zh/look-back-2019.html",
    BOOKING_TICKETS: "../zh/booking-tickets.html",
    ABOUT_THOUGHTWORKS: "../zh/about-thoughtworks.html"
  }
};

function changeBannerSize() {
  var window_height = $(window).height();
  $(".top-banner").css("height", window_height - 43);
}

function focusOn(menuItem, targetTranslateLanguage) {
  console.log(menuItem, targetTranslateLanguage);
  var locations = targetTranslateLanguage
    ? TRANSLATION_LOCATIONS[targetTranslateLanguage]
    : TRANSLATION_LOCATIONS[LANGUAGE.EN];
  $(".navbar .menu-item").removeClass("menu-item-selected");
  if (menuItem.itemIndex) {
    $(".navbar .menu-item:nth-child(" + menuItem.itemIndex + ")").addClass(
      "menu-item-selected"
    );
  }
  console.log("translation message: ", locations[menuItem.title], menuItem);
  $(
    ".navbar .menu-item:nth-child(" + NAV_ITEMS.TRANSLATION.itemIndex + ") a"
  ).attr("href", locations[menuItem.title]);
}
