
let calendar = document.querySelector(".calendar");

let currentButton = document.querySelector(".current");
let pastButton = document.querySelector(".past");
let start = true;

const wideScreenQuery = window.matchMedia('(min-width: 1025px)');

/*

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
  let a = document.createElement('a');
  emptyMessage.classList.add("empty-message");
  emptyMessage.appendChild(a);
  a.classList.add("empty-message-one");
  if (type == "current") {
    //emptyMessage.innerHTML = "No Upcoming Events";
    a.innerHTML = "Click here to view upcoming events";
    a.href = "https://www.eventbrite.com/o/liminal-flagstaff-33232960629#events";
    a.target = "_blank"
  } else if (type == "past") {
    emptyMessage.innerHTML = "No Past Events";
  }
  //document.querySelector(".event-list").appendChild(emptyMessage);
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
  let array = [];
  let eventList = document.querySelector(".event-list")
  const events = document.querySelectorAll(".event");
  events.forEach(event => {
    if (event.style.display != 'none') {
      array.unshift(event);
    }
  })
  array.forEach(e => {
    eventList.appendChild(e);
  })
  start = false;
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
  if (start == true) {
    reverseOrder();
  }
}

//This reverses all past events on startup of webpage


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

*/

function handleScreenChange(e) {
  //match = greater than 1025
  

  if (wideScreenQuery.matches && calendar.hidden == true) {
    calendar.hidden = false;
  } else if (!wideScreenQuery.matches && calendar.hidden == false) {
    calendar.hidden = true;
  };
}

if (wideScreenQuery.matches) {
  wideScreenQuery.addListener(handleScreenChange);
  handleScreenChange(wideScreenQuery);
}

wideScreenQuery.addListener(handleScreenChange);
handleScreenChange(wideScreenQuery);
//these functions automatically call handleEvents() on startup




