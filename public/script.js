// pictures are free stock photos from unsplash.com and pexels.com
// Taniti website prototype
// days is which days the place is open, 0 = sunday 6 = saturday
// x and y are for where it shows up on the map

let activities = [
  {
    name: "Volcano Tour", img: "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?w=800&q=60&auto=format&fit=crop",
    cats: ["Tours", "Adventure"], area: "Island interior", adult: 85, kid: 50,
    desc: "Guided tour up to the volcano. A bus picks you up in Taniti City and the whole thing takes about 4 hours. You can see the crater and the lava fields.",
    days: [1, 2, 3, 4, 5, 6], times: ["7:00 AM", "1:00 PM"],
    age: "8+", safety: "Helmets provided, bring water", wear: "closed toe shoes and long pants (no sandals!!)",
    address: "Taniti City Bus Station, Main St", x: 58, y: 48, popular: true
  },
  {
    name: "Snorkeling", img: "https://images.pexels.com/photos/2772155/pexels-photo-2772155.jpeg?auto=compress&cs=tinysrgb&w=600", cats: ["Beaches", "Family"],
    area: "Taniti City", adult: 60, kid: 35,
    desc: "Snorkel in Yellow Leaf Bay with a guide. Good for beginners",
    days: [0, 1, 2, 3, 4, 5, 6], times: ["9:00 AM", "12:00 PM", "3:00 PM"],
    age: "Ages 6 and up", safety: "Life vests and snorkel gear are provided. Kids under 12 have to wear a life vest.", wear: "Swimsuit and reef safe sunscreen",
    address: "Yellow Leaf Bay, Dock 3", x: 30, y: 62, popular: true
  },
  {
    name: "Zip-lining", img: "https://images.pexels.com/photos/6454835/pexels-photo-6454835.jpeg?auto=compress&cs=tinysrgb&w=600", cats: ["Adventure"], area: "Island interior",
    adult: 95, kid: 70,
    desc: "Zip line over the rainforest! 6 lines total.",
    days: [2, 3, 4, 5, 6], times: ["8:00 AM", "11:00 AM", "2:00 PM"],
    age: "10 and older, have to be at least 70 lbs", safety: "Harness + helmet", wear: "Closed toe shoes. Take off jewelry",
    address: "Rainforest Adventure Center, Ridge Rd", x: 47, y: 38, popular: true
  },
  {
    name: "Rainforest Hike", img: "https://images.unsplash.com/photo-1506214627375-73b490d8b1e5?w=800&q=60&auto=format&fit=crop", cats: ["Adventure", "Family"], area: "Island interior", adult: 40, kid: 20,
    desc: "Easy 3 mile hike with a local guide who shows you plants and birds.",
    days: [0, 1, 2, 3, 4, 5, 6], times: ["8:00 AM", "1:00 PM"],
    age: "5+", wear: "Sneakers or hiking shoes, bring bug spray",
    address: "Trailhead on Ridge Rd", x: 42, y: 52
  },
  {
    name: "Boat Tour", img: "https://images.pexels.com/photos/2004354/pexels-photo-2004354.jpeg?auto=compress&cs=tinysrgb&w=600", cats: ["Tours", "Family", "Beaches"], area: "Taniti City", adult: 55, kid: 30,
    desc: "Boat ride around the island that stops at a couple of beaches. About 3 hrs",
    days: [1, 3, 5, 6], times: ["10:00 AM"],
    age: "All ages", safety: "Life vests for everyone",
    address: "Taniti City Harbor, Pier 1", x: 22, y: 70
  },
  {
    name: "Helicopter Ride", img: "https://images.unsplash.com/photo-1581720488341-a02fe8d6575d?w=800&q=60&auto=format&fit=crop", cats: ["Tours"], area: "Taniti City",
    adult: 250, kid: 200,
    desc: "See the whole island and the volcano from the air. 45 min.",
    days: [1, 2, 3, 4, 5, 6], times: ["9:00 AM", "12:00 PM", "4:00 PM"],
    age: "3 and older (kids under 12 sit with a parent)", safety: "Headsets and seatbelts",
    address: "Taniti Airport - Hangar B", x: 35, y: 77
  },
  {
    name: "History Museum", img: "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=600", cats: ["Rainy Day", "Family"], area: "Taniti City", adult: 15, kid: 5,
    desc: "Learn about the history of Taniti. Closed Mondays.",
    days: [0, 2, 3, 4, 5, 6], times: ["10:00 AM", "1:00 PM", "3:00 PM"],
    age: "All ages",
    address: "12 Market Street, Taniti City", x: 27, y: 55
  },
  {
    name: "Bowling and Arcade", img: "https://images.unsplash.com/photo-1473441771330-42393d826246?w=800&q=60&auto=format&fit=crop", cats: ["Rainy Day", "Family"],
    area: "Merriton Landing", adult: 20, kid: 12,
    desc: "Bowling and arcade games, good for rainy days",
    days: [0, 1, 2, 3, 4, 5, 6], times: ["12:00 PM", "3:00 PM", "6:00 PM"],
    age: "all ages", safety: "they give you bowling shoes", wear: "Socks",
    address: "Merriton Landing Plaza", x: 57, y: 23, popular: true
  },
  {
    name: "Movie Theater", img: "https://images.pexels.com/photos/7991231/pexels-photo-7991231.jpeg?auto=compress&cs=tinysrgb&w=600", cats: ["Rainy Day", "Family"], area: "Merriton Landing", adult: 12, kid: 8,
    desc: "Showtimes change every week.",
    days: [0, 1, 2, 3, 4, 5, 6], times: ["2:00 PM", "5:00 PM", "8:00 PM"],
    age: "Depends on the movie rating",
    address: "Merriton Landing Plaza", x: 64, y: 18
  },
  {
    name: "Fishing Trip", img: "https://images.pexels.com/photos/4166305/pexels-photo-4166305.jpeg?auto=compress&cs=tinysrgb&w=600", cats: ["Tours"], area: "Taniti City", adult: 120, kid: 80,
    desc: "Half day deep sea fishing with a local captain. You can keep what you catch.",
    days: [1, 2, 4, 6], times: ["6:00 AM"],
    age: "8+", safety: "Life vests provided", wear: "Non slip shoes, sunscreen, hat",
    address: "Taniti City Harbor, Pier 2", x: 18, y: 60
  },
  // TODO: find out if the brewery does food too
  {
    name: "Brewery Tour", img: "https://images.unsplash.com/photo-1711335792535-acacf1727eab?w=800&q=60&auto=format&fit=crop", cats: ["Nightlife"], area: "Merriton Landing", adult: 30, kid: 0,
    desc: "Tour of the island's microbrewery with samples.",
    days: [3, 4, 5, 6], times: ["4:00 PM", "7:00 PM"],
    age: "18+ only, bring ID",
    address: "Bay St, Merriton Landing", x: 69, y: 28
  },
  {
    name: "Dance Club", img: "https://images.pexels.com/photos/2233370/pexels-photo-2233370.jpeg?auto=compress&cs=tinysrgb&w=600", cats: ["Nightlife"], area: "Merriton Landing", adult: 15, kid: 0,
    desc: "The newest dance club on the island",
    days: [4, 5, 6], times: ["9:00 PM"],
    age: "18+ (ID required)", wear: "No swimsuits or beach clothes",
    address: "Bay St, Merriton Landing", x: 70, y: 34
  }
];

let hotels = [
  { name: "Yellow Leaf Bay Resort", img: "https://images.unsplash.com/photo-1698772463731-efd1488536aa?w=800&q=60&auto=format&fit=crop", type: "Resort", area: "Merriton Landing", price: 320, amenities: "Pool, spa, beach access, restaurant, free wifi", atHotel: "Kids club, pool games, beach volleyball", x: 60, y: 30 },
  { name: "Harborview Hotel", img: "https://images.unsplash.com/photo-1663998468593-1f104e7c9213?w=800&q=60&auto=format&fit=crop", type: "Hotel", area: "Taniti City", price: 140, amenities: "Free breakfast, family rooms, wifi, 5 min walk to the beach", atHotel: "Game room", x: 25, y: 64 },
  { name: "Palm Street Inn", img: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=800&q=60&auto=format&fit=crop", type: "Hotel", area: "Taniti City", price: 115, amenities: "Airport shuttle, wifi", x: 32, y: 58 },
  { name: "Merriton Bay Hotel", img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=60&auto=format&fit=crop", type: "Hotel", area: "Merriton Landing", price: 155,
    amenities: "Pool, wifi, bike rentals", atHotel: "pool", x: 66, y: 24 },
  { name: "Hibiscus House B&B", img: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=60&auto=format&fit=crop", type: "Bed & Breakfast", area: "Taniti City", price: 110, amenities: "Homemade breakfast every morning, garden", x: 29, y: 50 },
  { name: "Rainforest B&B", img: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=800&q=60&auto=format&fit=crop", type: "Bed & Breakfast", area: "Island interior", price: 125, amenities: "Breakfast, right by the hiking trails", atHotel: "Bird watching", x: 46, y: 44 },
  { name: "Taniti City Hostel", img: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&q=60&auto=format&fit=crop", type: "Hostel", area: "Taniti City", price: 35, amenities: "shared kitchen, lockers, bike rentals", atHotel: "Common room w/ games", x: 21, y: 56 }
];

// restaurants (5 local, 3 american, 2 pan-asian like the island doc says)
let restaurants = [
  { name: "Ocean Catch Kitchen", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=60&auto=format&fit=crop", type: "Local fish & rice", area: "Taniti City", price: "$$", hours: "11am - 9pm", kids: true },
  { name: "Mama Leila's", img: "https://images.unsplash.com/photo-1725393325387-07f0d4951528?w=800&q=60&auto=format&fit=crop", type: "Local fish & rice", area: "Taniti City", price: "$", hours: "7am - 3pm (breakfast and lunch only)", kids: true },
  { name: "Harbor Rice House", img: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=800&q=60&auto=format&fit=crop", type: "Local fish & rice", area: "Taniti City", price: "$", hours: "11am - 10pm" },
  { name: "Yellow Leaf Grill", img: "https://images.unsplash.com/photo-1665401015549-712c0dc5ef85?w=800&q=60&auto=format&fit=crop", type: "Local fish & rice", area: "Merriton Landing", price: "$$$", hours: "5pm - 11pm, reservations recommended" },
  { name: "Blue Net Cafe", img: "https://images.unsplash.com/photo-1584300005420-38486f627b07?w=800&q=60&auto=format&fit=crop", type: "Local fish & rice", area: "Merriton Landing", price: "$$", hours: "8am - 8pm", kids: true },
  { name: "Island Burger", img: "https://images.pexels.com/photos/9975765/pexels-photo-9975765.jpeg?auto=compress&cs=tinysrgb&w=600", type: "American", area: "Taniti City", price: "$", hours: "11am-10pm", kids: true },
  { name: "Dockside Diner", img: "https://images.unsplash.com/photo-1697748836791-9ddf7e616ece?w=800&q=60&auto=format&fit=crop", type: "American", area: "Taniti City", price: "$$", hours: "6am - 2pm", kids: true },
  { name: "Sunset Steak and Pizza", img: "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=800&q=60&auto=format&fit=crop", type: "American", area: "Merriton Landing", price: "$$$", hours: "4pm - 11pm", kids: true },
  { name: "Lotus Bowl", img: "https://images.pexels.com/photos/18467147/pexels-photo-18467147/free-photo-of-ramen.jpeg?auto=compress&cs=tinysrgb&w=600", type: "Pan-Asian", area: "Merriton Landing", price: "$$", hours: "11am - 10pm" },
  { name: "Bamboo Garden", img: "https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-soup-with-egg.jpeg?auto=compress&cs=tinysrgb&w=600", type: "Pan-Asian", area: "Taniti City", price: "$$", hours: "dinner only, 5 to 10pm" }
];

// fake holidays for testing, need real ones from the government
let holidays = ["2026-10-12", "2026-11-03", "2026-11-26", "2026-12-25", "2027-01-01"];

let info = [
  { title: "Money", text: "Taniti uses the US dollar. A lot of places also take euros and yen. You can exchange money at the banks and most places take credit cards." },
  { title: "Power outlets", text: "Outlets are 120 volts, same as the US." },
  { title: "Holidays and closures", text: "Taniti has a lot of national holidays and many attractions and restaurants close on those days. Upcoming holidays: " + holidays.join(", ") },
  { title: "Safety", text: "Violent crime is very rare. Pickpocketing has been going up though so watch your stuff in busy areas." },
  { title: "Hospital", text: "There is one hospital and a few clinics. A lot of the hospital staff speak more than one language." },
  { title: "Language", text: "Most younger people speak English. Not much English is spoken in rural areas, especially by older people." },
  { title: "Alcohol", text: "Alcohol can't be sold between midnight and 9am. The drinking age is 18." },
  { title: "Getting here", text: "Most people fly into the airport. A small cruise ship docks in Yellow Leaf Bay one night a week." },
  { title: "Culture and customs", text: "Coming soon - waiting on info from the Tanitian government." }
];

let myTrip = [];
let pickedCat = "All";
let view = "list";
let startDate = "";
let endDate = "";
let bookingNumber = 1000;
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


// shows the right page and hides the rest
function showPage(id) {
  let pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove("show");
  }
  document.getElementById(id).classList.add("show");

  let links = document.querySelectorAll("#navList a");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("current");
  }
  if (document.getElementById("nav-" + id) != null) {
    document.getElementById("nav-" + id).classList.add("current");
  }

  document.getElementById("bookMenu").style.display = "none";
  document.getElementById("navList").classList.remove("open");

  if (id == "todo") loadActivities();
  if (id == "stay") loadHotels("hotelList");
  if (id == "eat") makeFoodList();
  if (id == "trip") showTrip();

  window.scrollTo(0, 0);
}

function toggleMenu() {
  document.getElementById("navList").classList.toggle("open");
}

function toggleBookMenu() {
  let menu = document.getElementById("bookMenu");
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}


// ---- date stuff ----

// had to add T00:00:00 or the day was off by one
function getDayNum(d) {
  return new Date(d + "T00:00:00").getDay();
}

function formatDate(d) {
  let date = new Date(d + "T00:00:00");
  return dayNames[date.getDay()] + " " + (date.getMonth() + 1) + "/" + date.getDate();
}

// returns "" if its open, or why its closed
function isClosed(act, d) {
  if (holidays.includes(d)) {
    return "Closed for a national holiday";
  }
  if (!act.days.includes(getDayNum(d))) {
    return "Not open on " + dayNames[getDayNum(d)];
  }
  return "";
}

function openDays(act) {
  if (act.days.length == 7) {
    return "Open every day";
  }
  let list = [];
  for (let i = 0; i < act.days.length; i++) {
    list.push(dayNames[act.days[i]]);
  }
  return "Open " + list.join(", ");
}

function countNights(a, b) {
  let diff = new Date(b + "T00:00:00") - new Date(a + "T00:00:00");
  return Math.round(diff / 86400000);
}

// makes a list of every day of the trip
function tripDays() {
  let days = [];
  let d = new Date(startDate + "T00:00:00");
  let end = new Date(endDate + "T00:00:00");
  while (d <= end) {
    let month = String(d.getMonth() + 1).padStart(2, "0");
    let day = String(d.getDate()).padStart(2, "0");
    days.push(d.getFullYear() + "-" + month + "-" + day);
    d.setDate(d.getDate() + 1);
  }
  return days;
}

// keep the dates the same on every page
function updateDates() {
  startDate = document.getElementById("stayStart").value;
  endDate = document.getElementById("stayEnd").value;
  document.getElementById("planStart").value = startDate;
  document.getElementById("planEnd").value = endDate;
}


// ---- home page ----
function loadPopular() {
  let html = "";
  for (let i = 0; i < activities.length; i++) {
    if (activities[i].popular == true) {
      html += '<div class="box click" onclick="openActivity(' + i + ')">';
      html += '<img class="pic" src="' + activities[i].img + '" alt="' + activities[i].name + '">';
      html += '<h3>' + activities[i].name + '</h3>';
      html += '<p class="price">$' + activities[i].adult + ' per adult</p>';
      html += '<button class="btn">View Details</button>';
      html += '</div>';
    }
  }
  document.getElementById("popular").innerHTML = html;
}


// ---- things to do ----
function loadCats() {
  let cats = ["All", "Beaches", "Adventure", "Tours", "Family", "Rainy Day", "Nightlife"];
  let html = "";
  for (let i = 0; i < cats.length; i++) {
    if (cats[i] == pickedCat) {
      html += '<span class="cat picked" onclick="pickCat(\'' + cats[i] + '\')">' + cats[i] + '</span>';
    } else {
      html += '<span class="cat" onclick="pickCat(\'' + cats[i] + '\')">' + cats[i] + '</span>';
    }
  }
  document.getElementById("cats").innerHTML = html;
}

function pickCat(c) {
  pickedCat = c;
  loadActivities();
}

function clearDate() {
  document.getElementById("datePick").value = "";
  loadActivities();
}

function loadActivities() {
  loadCats();
  let area = document.getElementById("areaPick").value;
  let date = document.getElementById("datePick").value;
  let html = "";
  let pins = [];

  for (let i = 0; i < activities.length; i++) {
    let a = activities[i];
    if (pickedCat != "All" && !a.cats.includes(pickedCat)) continue;
    if (area != "all" && a.area != area) continue;
    if (date != "" && isClosed(a, date) != "") continue;

    html += '<div class="box">';
    html += '<img class="pic" src="' + a.img + '" alt="' + a.name + '">';
    html += '<h3>' + a.name + '</h3>';
    html += '<p class="price">Adults $' + a.adult;
    if (a.kid > 0) {
      html += ', Kids $' + a.kid;
    }
    html += ' - ' + a.area + '</p>';
    html += '<p>' + a.desc + '</p>';
    html += '<p class="price">' + openDays(a) + '</p>';
    html += '<button class="btn" onclick="openActivity(' + i + ')">View Details</button>';
    html += '</div>';

    pins.push({ x: a.x, y: a.y, name: a.name, click: "openActivity(" + i + ")" });
  }

  if (html == "") {
    html = "<p>Nothing found. Try changing the filters.</p>";
  }
  document.getElementById("actList").innerHTML = html;
  document.getElementById("actMap").innerHTML = makeMap(pins);
  switchView(view);
}

function switchView(v) {
  view = v;
  if (v == "map") {
    document.getElementById("actList").style.display = "none";
    document.getElementById("actMap").style.display = "block";
  } else {
    document.getElementById("actList").style.display = "grid";
    document.getElementById("actMap").style.display = "none";
  }
}

// draws the island. its just a green circle for now
// TODO: replace with a real map
function makeMap(pins) {
  let html = '<div class="mapWrap"><div class="map">';
  html += '<div class="land"></div>';
  html += '<div class="mapLabel" style="left:18%; top:84%">Taniti City</div>';
  html += '<div class="mapLabel" style="left:55%; top:11%">Merriton Landing</div>';
  html += '<div class="mapLabel" style="left:47%; top:62%">Island interior</div>';
  for (let i = 0; i < pins.length; i++) {
    html += '<div class="dot" style="left:' + pins[i].x + '%; top:' + pins[i].y + '%" onclick="' + pins[i].click + '">' + pins[i].name + '</div>';
  }
  html += '</div></div>';
  return html;
}


// ---- activity page ----
function openActivity(i) {
  let a = activities[i];
  let html = '<p><a href="#" onclick="showPage(\'todo\'); return false;">&lt; Back to Things to Do</a></p>';
  html += '<div class="twoCol">';

  html += '<div>';
  html += '<img class="pic" style="height:250px" src="' + a.img + '" alt="' + a.name + '">';
  html += '<h1>' + a.name + '</h1>';
  html += '<p><b>Adults: $' + a.adult + '</b>';
  if (a.kid > 0) {
    html += ' &nbsp; <b>Kids: $' + a.kid + '</b>';
  }
  html += '</p>';
  html += '<p>' + a.desc + '</p>';
  html += '<p><b>' + openDays(a) + '</b></p>';
  html += '<p class="red">Closed on national holidays. <a href="#" onclick="openHolidays(); return false;">See holidays</a></p>';
  html += '<h3>Know Before You Go</h3>';
  html += '<ul>';
  html += '<li><b>Age limit:</b> ' + a.age + '</li>';
  if (a.safety) {
    html += '<li><b>Safety equipment:</b> ' + a.safety + '</li>';
  }
  if (a.wear) {
    html += '<li><b>What to wear:</b> ' + a.wear + '</li>';
  } else {
    html += '<li><b>What to wear:</b> Nothing special</li>';
  }
  html += '<li><b>Address:</b> ' + a.address + '</li>';
  html += '</ul>';
  html += '<button class="btn2" onclick="alert(\'This would open directions in Google Maps\')">Get Directions</button>';
  html += '</div>';

  html += '<div>';
  html += '<div class="bookBox" id="bookBox">';
  html += '<h3>Book this</h3>';
  html += '<p>Date: <input type="date" id="actDate" value="' + startDate + '" onchange="checkDate(' + i + ')"></p>';
  html += '<p id="dateMsg"></p>';
  html += '<p>Tour Start Time: <select id="actTime">';
  for (let t = 0; t < a.times.length; t++) {
    html += '<option>' + a.times[t] + '</option>';
  }
  html += '</select></p>';
  html += '<p>Adults: <input type="number" id="actAdults" value="' + document.getElementById("planAdults").value + '" min="1" style="width:50px"></p>';
  if (a.kid > 0) {
    html += '<p>Kids: <input type="number" id="actKids" value="' + document.getElementById("planKids").value + '" min="0" style="width:50px"></p>';
  } else {
    html += '<p>(18+ only)</p><input type="hidden" id="actKids" value="0">';
  }
  html += '<button class="btn" onclick="bookActivity(' + i + ', true)">Book Now</button> ';
  html += '<button class="btn2" onclick="bookActivity(' + i + ', false)">Add to My Trip</button>';
  html += '<p id="addMsg"></p>';
  html += '</div>';
  html += '<h3>Map</h3>';
  html += makeMap([{ x: a.x, y: a.y, name: a.name, click: "" }]);
  html += '</div>';

  html += '</div>';

  // book now bar for phones
  html += '<div class="mobileBook"><b>$' + a.adult + ' per adult</b> <button class="btn" onclick="document.getElementById(\'bookBox\').scrollIntoView()">Book Now</button></div>';

  document.getElementById("activity").innerHTML = html;
  showPage("activity");
  if (startDate != "") {
    checkDate(i);
  }
}

function checkDate(i) {
  let d = document.getElementById("actDate").value;
  let msg = document.getElementById("dateMsg");
  if (d == "") {
    msg.innerHTML = "";
    return;
  }
  let closed = isClosed(activities[i], d);
  if (closed != "") {
    msg.innerHTML = '<span class="red">' + closed + '. Pick a different day.</span>';
  } else {
    msg.innerHTML = '<span class="green">Open on ' + formatDate(d) + '</span>';
  }
}

function bookActivity(i, goToTrip) {
  let a = activities[i];
  let d = document.getElementById("actDate").value;
  if (d == "") {
    document.getElementById("addMsg").innerHTML = '<span class="red">Pick a date first</span>';
    return;
  }
  if (isClosed(a, d) != "") {
    document.getElementById("addMsg").innerHTML = '<span class="red">It\'s closed that day</span>';
    return;
  }
  let adults = Number(document.getElementById("actAdults").value);
  let kids = Number(document.getElementById("actKids").value);

  myTrip.push({
    type: "Activity",
    name: a.name,
    date: formatDate(d),
    time: document.getElementById("actTime").value,
    people: adults + " adults, " + kids + " kids",
    price: adults * a.adult + kids * a.kid
  });
  updateCount();

  if (goToTrip) {
    showPage("trip");
  } else {
    document.getElementById("addMsg").innerHTML = '<span class="green">Added to your trip!</span>';
  }
}


// ---- where to stay ----
function loadHotels(where) {
  let type = document.getElementById("typePick").value;
  let area = document.getElementById("hotelArea").value;
  // planner shows everything
  if (where == "planHotels") {
    type = "all";
    area = "all";
  }

  let html = "";
  let pins = [];
  for (let i = 0; i < hotels.length; i++) {
    let h = hotels[i];
    if (type != "all" && h.type != type) continue;
    if (area != "all" && h.area != area) continue;

    // stuff to do in the same area
    let nearby = [];
    for (let j = 0; j < activities.length; j++) {
      if (activities[j].area == h.area && nearby.length < 4) {
        nearby.push(activities[j].name);
      }
    }

    html += '<div class="listing">';
    html += '<img class="pic" src="' + h.img + '" alt="' + h.name + '">';
    html += '<div>';
    html += '<h3>' + h.name + '</h3>';
    html += '<p class="price">' + h.type + ' - ' + h.area + '</p>';
    html += '<p><b>$' + h.price + ' a night</b></p>';
    html += '<p><b>Amenities:</b> ' + h.amenities + '</p>';
    if (h.atHotel) {
      html += '<p><b>Things to do at the hotel:</b> ' + h.atHotel + '</p>';
    }
    html += '<p><b>Nearby:</b> ' + nearby.join(", ") + '</p>';
    html += '<button class="btn" onclick="bookHotel(' + i + ', \'' + where + '\')">Add to My Trip</button>';
    html += ' <span id="msg-' + where + i + '"></span>';
    html += '</div></div>';

    pins.push({ x: h.x, y: h.y, name: h.name, click: "" });
  }
  if (html == "") {
    html = "<p>No places found.</p>";
  }
  document.getElementById(where).innerHTML = html;
  if (where == "hotelList") {
    document.getElementById("hotelMap").innerHTML = makeMap(pins);
  }
}

function hotelView(v) {
  if (v == "map") {
    document.getElementById("hotelList").style.display = "none";
    document.getElementById("hotelMap").style.display = "block";
  } else {
    document.getElementById("hotelList").style.display = "block";
    document.getElementById("hotelMap").style.display = "none";
  }
}

function bookHotel(i, where) {
  let h = hotels[i];
  let msg = document.getElementById("msg-" + where + i);
  if (startDate == "" || endDate == "") {
    msg.innerHTML = '<span class="red">Enter your check in and check out dates first</span>';
    return;
  }
  let nights = countNights(startDate, endDate);
  if (nights < 1) {
    msg.innerHTML = '<span class="red">Check out has to be after check in</span>';
    return;
  }

  // you can only have one hotel so take out the old one
  myTrip = myTrip.filter(function (item) {
    return item.type != "Hotel";
  });

  let guests = document.getElementById("guests").value;
  if (where == "planHotels") {
    guests = Number(document.getElementById("planAdults").value) + Number(document.getElementById("planKids").value);
  }

  myTrip.push({
    type: "Hotel",
    name: h.name,
    date: formatDate(startDate) + " - " + formatDate(endDate),
    time: nights + " nights",
    people: guests + " guests",
    price: nights * h.price
  });
  updateCount();
  msg.innerHTML = '<span class="green">Added!</span>';
  //console.log(myTrip);
}


// ---- where to eat ----
function makeFoodList() {
  let pick = document.getElementById("foodPick").value;
  let html = "";
  for (let i = 0; i < restaurants.length; i++) {
    let r = restaurants[i];
    if (pick != "all" && r.type != pick) continue;

    html += '<div class="listing">';
    html += '<img class="pic" src="' + r.img + '" alt="' + r.name + '">';
    html += '<div>';
    html += '<h3>' + r.name + '</h3>';
    html += '<p class="price">' + r.type + ' - ' + r.price + ' - ' + r.area + '</p>';
    html += '<p>Hours: ' + r.hours + '</p>';
    if (r.kids) {
      html += '<p>Kid friendly</p>';
    }
    html += '<p>Date: <input type="date" id="foodDate' + i + '"> ';
    html += '<select id="meal' + i + '"><option>Breakfast</option><option>Lunch</option><option selected>Dinner</option></select> ';
    html += 'People: <input type="number" id="ppl' + i + '" value="2" min="1" style="width:45px"></p>';
    html += '<button class="btn" onclick="reserve(' + i + ')">Reserve a Table</button>';
    html += ' <span id="foodMsg' + i + '"></span>';
    html += '</div></div>';
  }
  document.getElementById("foodList").innerHTML = html;
}

function reserve(i) {
  let d = document.getElementById("foodDate" + i).value;
  let msg = document.getElementById("foodMsg" + i);
  if (d == "") {
    msg.innerHTML = '<span class="red">Pick a date</span>';
    return;
  }
  if (holidays.includes(d)) {
    msg.innerHTML = '<span class="red">Most restaurants are closed that day (holiday)</span>';
    return;
  }
  myTrip.push({
    type: "Restaurant",
    name: restaurants[i].name,
    date: formatDate(d),
    time: document.getElementById("meal" + i).value,
    people: document.getElementById("ppl" + i).value + " people",
    price: 0
  });
  updateCount();
  msg.innerHTML = '<span class="green">Added! You pay at the restaurant.</span>';
}


// ---- travel info ----
function loadInfo() {
  let html = "";
  for (let i = 0; i < info.length; i++) {
    html += '<div class="infoItem" id="item' + i + '">';
    html += '<div class="infoTitle" onclick="toggleInfo(' + i + ')">+ ' + info[i].title + '</div>';
    html += '<div class="infoText" id="text' + i + '">' + info[i].text + '</div>';
    html += '</div>';
  }
  document.getElementById("infoList").innerHTML = html;
}

function toggleInfo(i) {
  let t = document.getElementById("text" + i);
  if (t.style.display == "block") {
    t.style.display = "none";
  } else {
    t.style.display = "block";
  }
}

// from the link on the activity page
function openHolidays() {
  showPage("info");
  document.getElementById("text2").style.display = "block";
}

function searchInfo() {
  let s = document.getElementById("search").value.toLowerCase();
  let count = 0;
  for (let i = 0; i < info.length; i++) {
    let words = (info[i].title + " " + info[i].text).toLowerCase();
    if (words.includes(s)) {
      document.getElementById("item" + i).style.display = "block";
      count++;
    } else {
      document.getElementById("item" + i).style.display = "none";
    }
  }
  if (count == 0) {
    document.getElementById("noResults").style.display = "block";
  } else {
    document.getElementById("noResults").style.display = "none";
  }
}


// ---- planner ----
function startPlanner() {
  document.getElementById("planStart").value = startDate;
  document.getElementById("planEnd").value = endDate;
  goToStep(1);
  showPage("planner");
}

function goToStep(n) {
  for (let i = 1; i <= 3; i++) {
    if (i == n) {
      document.getElementById("plan" + i).style.display = "block";
      document.getElementById("step" + i).className = "on";
    } else {
      document.getElementById("plan" + i).style.display = "none";
      document.getElementById("step" + i).className = "";
    }
  }
}

function planStep2() {
  let s = document.getElementById("planStart").value;
  let e = document.getElementById("planEnd").value;
  if (s == "" || e == "") {
    document.getElementById("planError").innerHTML = "Please enter both dates";
    return;
  }
  if (countNights(s, e) < 1) {
    document.getElementById("planError").innerHTML = "Leaving date has to be after arriving date";
    return;
  }
  document.getElementById("planError").innerHTML = "";
  startDate = s;
  endDate = e;
  document.getElementById("stayStart").value = s;
  document.getElementById("stayEnd").value = e;

  let text = "<b>Your trip: " + formatDate(s) + " to " + formatDate(e) + "</b>";
  document.getElementById("datesText").innerHTML = text;
  document.getElementById("datesText2").innerHTML = text;
  loadHotels("planHotels");
  goToStep(2);
}

function planStep3() {
  let days = tripDays();
  let html = '<div class="row3">';
  for (let i = 0; i < activities.length; i++) {
    let a = activities[i];
    let open = [];
    for (let j = 0; j < days.length; j++) {
      if (isClosed(a, days[j]) == "") {
        open.push(days[j]);
      }
    }
    if (open.length == 0) continue;

    html += '<div class="box">';
    html += '<img class="pic" src="' + a.img + '" alt="' + a.name + '">';
    html += '<h3>' + a.name + '</h3>';
    html += '<p class="price">Adults $' + a.adult + ', Kids $' + a.kid + ' - ' + a.area + '</p>';
    html += '<p>Day: <select id="pDay' + i + '">';
    for (let k = 0; k < open.length; k++) {
      html += '<option value="' + open[k] + '">' + formatDate(open[k]) + '</option>';
    }
    html += '</select></p>';
    html += '<p>Tour Start Time: <select id="pTime' + i + '">';
    for (let t = 0; t < a.times.length; t++) {
      html += '<option>' + a.times[t] + '</option>';
    }
    html += '</select></p>';
    html += '<button class="btn" onclick="planAdd(' + i + ')">Add to My Trip</button> ';
    html += '<button class="btn2" onclick="openActivity(' + i + ')">Details</button>';
    html += '<p id="pMsg' + i + '"></p>';
    html += '</div>';
  }
  html += '</div>';
  document.getElementById("planActs").innerHTML = html;
  goToStep(3);
}

function planAdd(i) {
  let a = activities[i];
  let adults = Number(document.getElementById("planAdults").value);
  let kids = Number(document.getElementById("planKids").value);
  if (a.kid == 0 && kids > 0) {
    kids = 0;
    document.getElementById("pMsg" + i).innerHTML = '<span class="red">18+ only so only the adults were added</span>';
  } else {
    document.getElementById("pMsg" + i).innerHTML = '<span class="green">Added!</span>';
  }
  let d = document.getElementById("pDay" + i).value;
  myTrip.push({
    type: "Activity",
    name: a.name,
    date: formatDate(d),
    time: document.getElementById("pTime" + i).value,
    people: adults + " adults, " + kids + " kids",
    price: adults * a.adult + kids * a.kid
  });
  updateCount();
}


// ---- my trip ----
function updateCount() {
  document.getElementById("tripCount").innerHTML = myTrip.length;
}

function showTrip() {
  if (myTrip.length == 0) {
    document.getElementById("tripList").innerHTML = '<p>You haven\'t added anything yet.</p>' +
      '<button class="btn" onclick="startPlanner()">Start Planning</button> ' +
      '<button class="btn2" onclick="showPage(\'todo\')">Things to Do</button>';
    return;
  }

  let total = 0;
  let html = '<div class="tableWrap"><table>';
  html += '<tr><th>Type</th><th>Name</th><th>Date</th><th>Time</th><th>People</th><th>Price</th><th></th></tr>';
  for (let i = 0; i < myTrip.length; i++) {
    let item = myTrip[i];
    total = total + item.price;
    html += '<tr>';
    html += '<td>' + item.type + '</td>';
    html += '<td>' + item.name + '</td>';
    html += '<td>' + item.date + '</td>';
    html += '<td>' + item.time + '</td>';
    html += '<td>' + item.people + '</td>';
    if (item.price > 0) {
      html += '<td>$' + item.price + '</td>';
    } else {
      html += '<td>Pay there</td>';
    }
    html += '<td><button class="btn2 sm" onclick="removeItem(' + i + ')">Remove</button></td>';
    html += '</tr>';
  }
  html += '</table></div>';
  html += '<h3>Total: $' + total + '</h3>';
  html += '<button class="btn2" onclick="showPage(\'todo\')">Add more</button>';

  html += '<h2>Your Info</h2>';
  html += '<p>Name: <input type="text" id="name"></p>';
  html += '<p>Email: <input type="text" id="email"></p>';
  html += '<p>Phone: <input type="text" id="phone"></p>';
  html += '<p>Card number: <input type="text" id="card" placeholder="not real"></p>';
  html += '<p class="red" id="tripError"></p>';
  html += '<button class="btn big" onclick="confirmBooking()">Confirm and Pay</button>';
  document.getElementById("tripList").innerHTML = html;
}

function removeItem(i) {
  myTrip.splice(i, 1);
  updateCount();
  showTrip();
}

function confirmBooking() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (name == "" || email == "") {
    document.getElementById("tripError").innerHTML = "Please enter your name and email";
    return;
  }
  bookingNumber++;
  document.getElementById("doneText").innerHTML = "Thanks " + name + "! Your booking number is TAN-" + bookingNumber + ". We sent a confirmation to " + email + ".";

  let html = '<div class="tableWrap"><table><tr><th>Type</th><th>Name</th><th>Date</th><th>Time</th></tr>';
  for (let i = 0; i < myTrip.length; i++) {
    html += '<tr><td>' + myTrip[i].type + '</td><td>' + myTrip[i].name + '</td><td>' + myTrip[i].date + '</td><td>' + myTrip[i].time + '</td></tr>';
  }
  html += '</table></div>';
  document.getElementById("doneList").innerHTML = html;

  myTrip = [];
  updateCount();
  showPage("done");
}


// run when the page loads
loadPopular();
loadInfo();
loadCats();
