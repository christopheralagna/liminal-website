
let currentButton = document.querySelector(".current");
let pastButton = document.querySelector(".past");

const wideScreenQuery = window.matchMedia('(min-width: 1025px)');

function highlightCurrentButton() {
  //currentButton.style.color = "var(--black-primary)";
  currentButton.style.color = "var(--black-secondary)";
  //currentButton.style['font-weight'] = "600";
  //checks if loading page for first time
  if (currentButton.classList.contains("custom-hover")) {currentButton.classList.remove("custom-hover")} 
  pastButton.style.color = "rgb(150,150,150)";
  pastButton.classList.add("custom-hover");
}

function highlightPastButton() {
  //pastButton.style.color = "var(--black-primary)";
  pastButton.style.color = "var(--black-secondary)";
  //pastButton.style['font-weight'] = "600";
  pastButton.classList.remove("custom-hover");
  currentButton.style.color = "rgb(150,150,150)";
  currentButton.classList.add("custom-hover");
}

function getDate(event) {
  const dateString = event.querySelector(".event-date").innerHTML;
  let date = new Date(dateString);
  return date;
}

function isCurrent(date) {
  currentDate = new Date();
  currentDate.setHours(0,0,0,0);
  if (date >= currentDate) {
    return true;
  } else {
    return false;
  }
}

function currentEventsExist() {
  let currentEvents = 0;
  const events = document.querySelectorAll(".event");
  events.forEach(event => {
    date = getDate(event);
    if (isCurrent(date)) {
      currentEvents += 1;
    }
  })
  if (currentEvents == 0) {
    return false;
  } else {
    return true;
  }
}

function pastEventsExist() {
  let pastEvents = 0;
  const events = document.querySelectorAll(".event");
  events.forEach(event => {
    date = getDate(event);
    if (!isCurrent(date)) {
      pastEvents += 1;
    }
  })
  if (pastEvents == 0) {
    return false;
  } else {
    return true;
  }
}

function createEmptyMessage(type) {
  let emptyMessage = document.createElement("p");
  emptyMessage.classList.add("empty-message");
  if (type == "current") {
    emptyMessage.innerHTML = "No Upcoming Events";
  } else if (type == "past") {
    emptyMessage.innerHTML = "No Past Events";
  }
  document.querySelector(".event-list").appendChild(emptyMessage);
}

function removeEmptyMessage() {
  if (document.querySelector(".empty-message")) {
    document.querySelector(".empty-message").remove();
  }
}

function handleEmptyMessage(type) {
  removeEmptyMessage();
  if (type == "current" && !currentEventsExist()) {
    createEmptyMessage("current");
  } else if (type == "past" && !pastEventsExist()) {
    createEmptyMessage("past");
  }
}

function displayEvents(type) {
  const events = document.querySelectorAll(".event");
  events.forEach(event => {
    date = getDate(event);
    if (type == "current") {
      if (isCurrent(date)) {
        //if window is greater than 1025, set display to "flex", otherwise to block
        if (window.matchMedia('(min-width: 1025px)').matches) {
          event.style.display = 'flex';
        } else {
          event.style.display = 'block';
        }
      } else {
        event.style.display = 'none'
      }
    } else if (type == "past") {
      if (!isCurrent(date)) {
        //if window is greater than 1025, set display to "flex"
        if (window.matchMedia('(min-width: 1025px)').matches) {
          event.style.display = 'flex';
        } else {
          event.style.display = 'block';
        }
      } else {
        event.style.display = 'none';
      }
    }
  })
}

function reverseOrder() {
  const events = document.querySelectorAll(".event");
  events.forEach(event => {
    if (event.style.display != 'none') {

    }
  })
}

function handleCurrentEvents() {
  highlightCurrentButton();
  handleEmptyMessage("current");
  displayEvents("current");
}

function handlePastEvents() {
  highlightPastButton();
  handleEmptyMessage("past");
  displayEvents("past");
  reverseOrder();
}

currentButton.onclick = handleCurrentEvents;
pastButton.onclick = handlePastEvents;

function handleScreenChange(e) {
  //match = greater than 1025
  if (currentButton.classList.contains("custom-hover")) {
    handlePastEvents();
  } else if (!currentButton.classList.contains("custom-hover")) {
    handleCurrentEvents();
  };
}

//these functions automatically call handleEvents() on startup
wideScreenQuery.addListener(handleScreenChange);
handleScreenChange(wideScreenQuery);



