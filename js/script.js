//При открытии страницы

var mainPage = document.querySelector(".page__main");
var eventPage = document.querySelector(".event");

eventPage.style.display = "none";

//Появление тултипа с информацией о встрече

var events = document.querySelectorAll(".floor__event");

var eventOnClick = function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    item.classList.toggle("floor__event--active");
  });
};

for (var i = 0; i < events.length; i++) {
  var eventTooltip = events[i].querySelector(".tooltip");
  var eventLeft = events[i].offsetWidth / 2 - eventTooltip.offsetWidth / 2;
  eventTooltip.style.marginLeft = eventLeft + "px";
  eventOnClick (events[i]);
};


//Появление плавающего тултипа с названием переговорки

var diagram = document.querySelector(".diagram");
var room = diagram.querySelector(".floor__room");
var roomTitles = diagram.querySelectorAll(".floor__room-title");

var roomOnScroll = function (items) {
  if (window.pageXOffset > room.offsetWidth) {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add("floor__room-title--tooltip");
      items[i].style.left = window.pageXOffset + 12 + "px";
    };
  } else {
    for (var j = 0; j < roomTitles.length; j++) {
      if (items[j].classList.contains("floor__room-title--tooltip")) {
        items[j].classList.remove("floor__room-title--tooltip");
      };
    };
  };
};

window.addEventListener("scroll", function () {
  roomOnScroll(roomTitles);
});


//Реализация открытия календаря на главной странице

var date = document.querySelector(".date");
var dateActive = date.querySelector(".date__active-date");
var dateCalendar = date.querySelector(".calendar");

dateActive.addEventListener("click", function () {
  dateCalendar.classList.toggle("date__calendar--shown");
});

dateCalendar.addEventListener("click", function (event) {
  if (event.target.classList.contains("calendar__day-number")) {
    setTimeout(function () {
      dateCalendar.classList.remove("date__calendar--shown");
    }, 350);
  }
});


//Реализация окрытия календаря на странице встречи

var eventCalendarControl = eventPage.querySelector(".event__calendar-contol");
var eventCalendar = eventPage.querySelector(".calendar");

eventCalendarControl.addEventListener("click", function () {
  eventCalendar.classList.toggle("event__calendar--shown");
});

eventCalendar.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("calendar__day-number")) {
    setTimeout(function () {
      eventCalendar.classList.remove("event__calendar--shown");
    }, 350);
  }
});


//Реализация открытия списка возможных участников на странице всречи

var eventOptionsControl = eventPage.querySelector(".event__options-control");
var eventOptions = eventPage.querySelector(".event__options");

eventOptionsControl.addEventListener("click", function () {
  eventOptions.classList.toggle("event__calendar--shown");
});


// Реализация открытия страницы с созданием встречи

var headerButton = document.querySelector(".header__button");
var eventRecommendation = eventPage.querySelector(".event__recommendation");
var eventWarning = eventPage.querySelector(".event__warning");

headerButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  eventPage.removeAttribute('style');
  mainPage.style.display = "none";
  headerButton.style.display = "none";
  eventRecommendation.style.display = "none";
  eventWarning.style.display = "none";
});

//Закрытие страницы с встречей без сохранения

var eventClose = eventPage.querySelector(".event__button[type=reset]");

eventClose.addEventListener("click", function () {
  eventPage.style.display = "none";
  mainPage.removeAttribute('style');
  headerButton.removeAttribute('style');
  eventRecommendation.removeAttribute('style');
  eventWarning.removeAttribute('style');
});
