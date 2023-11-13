const addNew = document.getElementById("addNew");
addNew.addEventListener("click", displayTime);
// 2nd part
const theForm = document.getElementById("theForm");
const peace = document.getElementById("peace");
//3rd part
theForm.addEventListener("submit", saveReminder);

function displayTime() {
  //2nd part
  peace.style.display = "none";
  addNew.style.display = "none";
  theForm.style.display = "block";
  //1st part
  let d = new Date();
  const currTime = document.getElementById("currTime");
  const currDate = document.getElementById("currDate");
  let m = d.getMinutes();
  let h = d.getHours();

  m = test(m);
  h = test(h);
  const dUTC = h + ":" + m;
  const tUTC = 1 + d.getMonth() + "/" + d.getDate()
      + "/" + d.getFullYear();
  currTime.innerHTML = dUTC;
  currDate.innerHTML = tUTC;
  const clock = setTimeout(function() { displayTime() }, 1000);
  function test(i) {
    if( i < 10) {
      i = "0" + i;
    }
    return i;
  }
}
//2nd part
function sayHi() {
  let d = new Date();
  let h = d.getHours();
  return  h > 4 && h < 12 ?  peace.innerHTML = "Good Morning!"
        : h > 12 && h < 17 ? peace.innerHTML = "Good Afternoon!"
        :                peace.innerHTML = "Good Evening!";

}
//3rd part
function saveReminder(evt) {
  const remTitle = document.getElementById("title").value;
  const remDate = document.getElementById("date").value;
  const remLocation = document.getElementById("location").value;

  const reminder = {
    title: remTitle,
    date: remDate,
    location: remLocation
  }

  if (localStorage.getItem("reminders") === null) {
    let reminders = [];
    reminders.push(reminder);
    localStorage.setItem("reminders", JSON.stringify(reminders));
  } else {
    // get reminders from localStorage
    const reminders = JSON.parse(localStorage.getItem("reminders"));
    // add reminder to reminders
    reminders.push(reminder);
    // set again to localStorage
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }
  // clear form
  theForm.reset();
  // refetch reminders
  fetchReminders();
  // prevent form from submitting
  evt.preventDefault();
}

function fetchReminders() {
  const reminders = JSON.parse(localStorage.getItem("reminders"));
  //get output
  const addedReminders = document.getElementById("addedReminders");
  // create output
  addedReminders.innerHTML = "";
  reminders.forEach(addReminder);
  function addReminder(reminder) {

    const title = reminder.title;
    const date = reminder.date;
    const location = reminder.location;

    // Change date format  ( Messed a lot here :) so many variables tedious :( )
    const splitDate = date.split("");
    const splittedYear = splitDate.slice(0, 4);
    const splittedMonth = splitDate.slice(5, 7);
    const splittedDay = splitDate.slice(8);

    const jYear = splittedYear.join("");
    const jMonth = splittedMonth.join("");
    const jDay = splittedDay.join("");
    const jDate = jMonth +"/"+ jDay +"/"+
        jYear;
    // Parsed Date attributes
    const pYear = parseInt(jYear, 10);
    const pMonth = parseInt(jMonth, 10);
    const pDay = parseInt(jDay, 10);
    // Current Date
    let cDate = new Date();
    let cDay = cDate.getDate();
    let cMonth = cDate.getMonth() + 1;
    let cYear = cDate.getFullYear();

    addedReminders.innerHTML += '<div class="res">'+
                                  '<span class="reminder-title">' + title +'</span>' +
                                  '<span class="reminder-location">' + location +'</span>'+
                                  " " + '<span class="reminder-date">' + jDate +'</span>'+
                                  '<button onclick="deleteRem(\'' + title + '\',\'' + date + '\',\'' + location + '\')" id="remove">Delete</button>' +
                                 '</div>';
  }
}

// Delete Reminders
function deleteRem(title, date, location) {
  const reminders = JSON.parse(localStorage.getItem("reminders"));
  for (let i = 0; i < reminders.length; i++) {
    if(reminders[i].title == title
      && reminders[i].date == date
      && reminders[i].location == location) {
      reminders.splice(i, 1);
    }
  }
  //set the new reminders Array to localStorage
  localStorage.setItem("reminders", JSON.stringify(reminders));
  // refetch reminders
  fetchReminders();
}
fetchReminders();