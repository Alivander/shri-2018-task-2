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

i = 0;

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

var date = document.querySelector(".date");
var dateActive = date.querySelector(".date__active-date");
var dateCalendar = date.querySelector(".calendar");

dateActive.addEventListener("click", function() {
  dateCalendar.classList.toggle("date__calendar--shown");
});

dateCalendar.addEventListener("click", function (event) {
  if (event.target.classList.contains("calendar__day-number")) {
    setTimeout(function () {
      dateCalendar.classList.remove("date__calendar--shown");
    }, 350);
  }
});
