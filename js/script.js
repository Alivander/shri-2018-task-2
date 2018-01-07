var events = document.querySelectorAll(".diagram__event");
var eventOnClick = function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    item.classList.toggle("diagram__event--active");
  });
};

for (var i = 0; i < events.length; i++) {
  var eventTooltip = events[i].querySelector(".tooltip");
  var eventLeft = events[i].offsetWidth / 2 - eventTooltip.offsetWidth / 2;
  eventTooltip.style.marginLeft = eventLeft + "px";
  eventOnClick (events[i]);
};
