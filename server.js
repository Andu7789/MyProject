const express = require("express");
const app = express();
const fs = require("fs");
const Datastore = require("nedb");
const port = process.env.PORT || 3000;
require('dotenv').config()

app.listen(port, () => {
  console.log(`starting server at ${port}`);
});

app.use(express.static("public")); //listens for all files within the 'public' folder
app.use(express.json({ limit: "1mb" })); //need this for JSON to be allowed to be used

app.get('/api-keys', (req, res) => {
  const apiKey = process.env.API_KEY;
  const appId = process.env.APP_ID;

  res.json({ apiKey, appId });
});

// make a new database called database.db if it doesnt already exist
const databaseStock = new Datastore("databaseStock.db");
databaseStock.loadDatabase();
db1 = databaseStock;

const imagePath = "Img/Food/Beef Burger.png"; // Replace this with the actual path to your image file
const imageBuffer = fs.readFileSync(imagePath);
const base64Image = imageBuffer.toString("base64");

const imagePath1 = "Img/Food/Beef Fillet.png"; // Replace this with the actual path to your image file
const imageBuffer1 = fs.readFileSync(imagePath1);
const base64Image1 = imageBuffer1.toString("base64");

const imagePath2 = "Img/Food/Beef Mince.png"; // Replace this with the actual path to your image file
const imageBuffer2 = fs.readFileSync(imagePath2);
const base64Image2 = imageBuffer2.toString("base64");

const imagePath3 = "Img/Food/Chicken Breast.png"; // Replace this with the actual path to your image file
const imageBuffer3 = fs.readFileSync(imagePath3);
const base64Image3 = imageBuffer3.toString("base64");

const imagePath4 = "Img/Food/Peeled Prawns.png"; // Replace this with the actual path to your image file
const imageBuffer4 = fs.readFileSync(imagePath4);
const base64Image4= imageBuffer4.toString("base64");

const imagePath5 = "Img/Food/Salmon.png"; // Replace this with the actual path to your image file
const imageBuffer5 = fs.readFileSync(imagePath5);
const base64Image5= imageBuffer5.toString("base64");

const imagePath6 = "Img/Food/Sausages.png"; // Replace this with the actual path to your image file
const imageBuffer6 = fs.readFileSync(imagePath6);
const base64Image6= imageBuffer6.toString("base64");

const imagePath7 = "Img/Food/Whole Chicken.png"; // Replace this with the actual path to your image file
const imageBuffer7 = fs.readFileSync(imagePath7);
const base64Image7= imageBuffer7.toString("base64");

const imagePath8 = "Img/Food/Bananas.png"; // Replace this with the actual path to your image file
const imageBuffer8 = fs.readFileSync(imagePath8);
const base64Image8= imageBuffer8.toString("base64");

const imagePath9 = "Img/Food/Lemons.png"; // Replace this with the actual path to your image file
const imageBuffer9 = fs.readFileSync(imagePath9);
const base64Image9 = imageBuffer9.toString("base64");

const imagePath10 = "Img/Food/Limes.png"; // Replace this with the actual path to your image file
const imageBuffer10 = fs.readFileSync(imagePath10);
const base64Image10 = imageBuffer10.toString("base64");

const imagePath11 = "Img/Food/Oranges.png"; // Replace this with the actual path to your image file
const imageBuffer11 = fs.readFileSync(imagePath11);
const base64Image11 = imageBuffer11.toString("base64");

const imagePath12 = "Img/Food/Pineapple.png"; // Replace this with the actual path to your image file
const imageBuffer12 = fs.readFileSync(imagePath12);
const base64Image12 = imageBuffer12.toString("base64");

const imagePath13 = "Img/Food/Red Apples.png"; // Replace this with the actual path to your image file
const imageBuffer13 = fs.readFileSync(imagePath13);
const base64Image13 = imageBuffer13.toString("base64");

const imagePath14 = "Img/Food/Green Apples.png"; // Replace this with the actual path to your image file
const imageBuffer14 = fs.readFileSync(imagePath14);
const base64Image14 = imageBuffer14.toString("base64");

const imagePath15 = "Img/Food/Stawberries.png"; // Replace this with the actual path to your image file
const imageBuffer15 = fs.readFileSync(imagePath15);
const base64Image15 = imageBuffer15.toString("base64");



var doc = [
  { ID: 1, title: "Beef Burgers", price: 3.99, image: base64Image, stock: 0, Description: `Succulent beef, simply seasoned with sea salt and black pepper. Gluten free.
  Tender and succulent beef seasoned with salt and black pepper1`, orderQty: 0},
  { ID: 2, title: "Beef Fillet", price: 10, image: base64Image1, stock: 20, Description: `Beef fillet steak.
  Every Tesco steak is 21 day matured for extra flavour chosen for melt in the mouth tenderness`, orderQty: 0},
  { ID: 3, title: "Beef Mince", price: 5, image: base64Image2, stock: 20, Description: `Lean beef steak mince 5% fat.
  Typical percentage fat content under 5%. Typical percentage collagen/ meat protein ratio under 12%. From Trusted Farms. We work in partnership with trusted farmers to ensure high welfare standards from farm to fork, to deliver great quality beef.
  Leaner selected cuts, finely ground for tenderness`, orderQty: 0},
  { ID: 4, title: "Chicken Breast", price: 6.95, image: base64Image3, stock: 20, Description: `Fresh Class A skinless chicken breast fillets.  Quality and welfare are at the heart of what we do.
  Our Welfare Approved Fed on a wholegrain diet for a succulent texture`, orderQty: 0},
  { ID: 5, title: "Peeled Prawns", price: 8, image: base64Image4, stock: 20, Description: `Cooked and peeled king prawns (Litopenaeus vannamei).
  Responsibly sourcing our seafood is important to us, which is why our fish experts work with responsibly managed farms and fisheries to continually improve their high standards of quality, welfare and sustainability.
  Ready to Eat Responsibly Sourced`, orderQty: 0},
  { ID: 6, title: "Salmon", price: 7.49, image: base64Image5, stock: 20, Description: `Boneless skin-on salmon (Salmo salar) side.
  Farmed in waters off the coast of Norway or Scotland. A versatile fish prepared with the skin on for ease of cooking and to give a fuller flavour. Responsibly sourcing our seafood is important to us which is why our fish experts work with responsibly managed farms and fisheries to continually improve their high standards of quality, welfare and sustainability.`, orderQty: 0},
  { ID: 7, title: "Sausages", price: 3.29, image: base64Image6, stock: 20, Description: `Pork sausages with seasoning.
  Our sausages are made for us by a family run business who've taken pride in making sausages for more than 200 years. They are all made with 100% British pork which is hand trimmed by expertly trained butchers. The sausages are then seasoned and other carefully selected ingredients are added to enhance the rich, succulent flavour.`, orderQty: 0},
  { ID: 8, title: "Whole Chicken", price: 5.55, image: base64Image7, stock: 0, Description: `Fresh Class A whole chicken without giblets.
  From Trusted Farms Our range of whole chickens are perfect for a succulent roast dinner, and midweek meals made from tasty leftovers. Use lean chicken breasts in a stir fry or salad and cook up tasty thighs and drumsticks in casseroles, on the barbecue, or in a curry.`, orderQty: 0},
  { ID: 9, title: "Bananas", price: 0.15, image: base64Image8, stock: 20, Description: `Responsibly Grown. Hand picked and gently ripened with a sweet flavour.`, orderQty: 0},
  { ID: 10, title: "Lemons", price: 0.45, image: base64Image9, stock: 20, Description: `Hand picked Grown for their sharp, zingy taste, ideal for cooking or drinks.`, orderQty: 0},
  { ID: 11, title: "Limes", price: 0.42, image: base64Image10, stock: 20, Description: `Hand picked Grown for their sharp, zingy taste, ideal for cooking or drinks.`, orderQty: 0},
  { ID: 12, title: "Oranges", price: 0.37, image: base64Image11, stock: 20, Description: `Sweet & Juicy`, orderQty: 0},
  { ID: 13, title: "Pineapple", price: 1.29, image: base64Image12, stock: 20, Description: `Harvested by hand Grown in tropical climates for their golden colour and sweet flavour`, orderQty: 0},
  { ID: 14, title: "Red Apples", price: 0.34, image: base64Image13, stock: 20, Description: `Responsibly Grown. Hand picked and gently ripened with a sweet flavour.`, orderQty: 0},
  { ID: 15, title: "Green Apples", price: 0.37, image: base64Image14, stock: 20, Description: `Responsibly Grown. Hand picked and gently ripened with a sweet flavour.`, orderQty: 0},
  { ID: 16, title: "Strawberries", price: 2.29, image: base64Image15, stock: 20, Description: `Delicately hand picked. Carefully selected when ripe for their sweet, juicy flavour.`, orderQty: 0},
];
db1.remove({}, { multi: true }, function (err, newDocs) {
  if (err) {
    console.error('Error clearing the database:', err);
  } else {
    console.log('Doc - Database clearing completed:', newDocs);
  }
  
});
db1.insert(doc, function (err, newDocs) {
  if (err) {
    console.error('Error creating the database:', err);
  } else {
    console.log('Doc - Database creation completed:');
  }

});

const databaseDeliverySlots = new Datastore("databaseDeliverySlots.db");
databaseDeliverySlots.loadDatabase();
db2 = databaseDeliverySlots;

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Function to get the next day
function getNextDay(date, days) {
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + days);
  return nextDate;
}

// Your existing schedule data
var today = new Date(); // Get the current date
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var schedule = [
  {
    day: daysOfWeek[today.getDay()],
    date: formatDate(today), // Format the date as DD/MM
    slots: [
      { id: 'slot0', time: '8:00 AM - 10:00 AM', status: 'not booked', price: 1 },
      { id: 'slot1', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot2', time: '12:00 PM - 2:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot3', time: '2.00 PM - 4:00 PM', status: 'not booked', price: 2 },
      { id: 'slot4', time: '4:00 PM - 6:00 PM', status: 'not booked', price: 3.5 },
      { id: 'slot5', time: '6.00 PM - 8:00 PM', status: 'not booked', price: 4 },
      // Add more slots as needed
    ]
  },
  // Calculate the dates for the next days
  {
    day: daysOfWeek[(today.getDay() + 1) % 7],
    date: formatDate(getNextDay(today, 1)),
    slots: [
    { id: 'slot6', time: '8:00 AM - 10:00 AM', status: 'not booked', price: 1 },
      { id: 'slot7', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot8', time: '12:00 PM - 2:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot9', time: '2.00 PM - 4:00 PM', status: 'not booked', price: 2 },
      { id: 'slot10', time: '4:00 PM - 6:00 PM', status: 'not booked', price: 3.5 },
      { id: 'slot11', time: '6.00 PM - 8:00 PM', status: 'not booked', price: 4 },
    ]
  },
  {
    day: daysOfWeek[(today.getDay() + 2) % 7],
    date: formatDate(getNextDay(today, 2)),
    slots: [
    { id: 'slot12', time: '8:00 AM - 10:00 AM', status: 'not booked', price: 1 },
      { id: 'slot13', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot14', time: '12:00 PM - 2:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot15', time: '2.00 PM - 4:00 PM', status: 'not booked', price: 2 },
      { id: 'slot16', time: '4:00 PM - 6:00 PM', status: 'not booked', price: 3.5 },
      { id: 'slot17', time: '6.00 PM - 8:00 PM', status: 'not booked', price: 4 },
    ]
  },
  {
    day: daysOfWeek[(today.getDay() + 3) % 7],
    date: formatDate(getNextDay(today, 3)),
    slots: [
    { id: 'slot18', time: '8:00 AM - 10:00 AM', status: 'not booked', price: 1 },
      { id: 'slot19', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot20', time: '12:00 PM - 2:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot21', time: '2.00 PM - 4:00 PM', status: 'not booked', price: 2 },
      { id: 'slot22', time: '4:00 PM - 6:00 PM', status: 'not booked', price: 3.5 },
      { id: 'slot23', time: '6.00 PM - 8:00 PM', status: 'not booked', price: 4 },
    ]
  },
  {
    day: daysOfWeek[(today.getDay() + 4) % 7],
    date: formatDate(getNextDay(today, 4)),
    slots: [
    { id: 'slot24', time: '8:00 AM - 10:00 AM', status: 'not booked', price: 1 },
      { id: 'slot25', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot26', time: '12:00 PM - 2:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot27', time: '2.00 PM - 4:00 PM', status: 'not booked', price: 2 },
      { id: 'slot28', time: '4:00 PM - 6:00 PM', status: 'not booked', price: 3.5 },
      { id: 'slot29', time: '6.00 PM - 8:00 PM', status: 'not booked', price: 4 },
    ]
  },
  {
    day: daysOfWeek[(today.getDay() + 5) % 7],
    date: formatDate(getNextDay(today, 5)),
    slots: [
    { id: 'slot30', time: '8:00 AM - 10:00 AM', status: 'not booked', price: 1 },
      { id: 'slot31', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot32', time: '12:00 PM - 2:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot33', time: '2.00 PM - 4:00 PM', status: 'not booked', price: 2 },
      { id: 'slot34', time: '4:00 PM - 6:00 PM', status: 'not booked', price: 3.5 },
      { id: 'slot35', time: '6.00 PM - 8:00 PM', status: 'not booked', price: 4 },
    ]
  },
  {
    day: daysOfWeek[(today.getDay() + 6) % 7],
    date: formatDate(getNextDay(today, 6)),
    slots: [
    { id: 'slot36', time: '8:00 AM - 10:00 AM', status: 'not booked', price: 1 },
      { id: 'slot37', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot38', time: '12:00 PM - 2:00 PM', status: 'not booked', price: 1.5 },
      { id: 'slot39', time: '2.00 PM - 4:00 PM', status: 'not booked', price: 2 },
      { id: 'slot40', time: '4:00 PM - 6:00 PM', status: 'not booked', price: 3.5 },
      { id: 'slot41', time: '6.00 PM - 8:00 PM', status: 'not booked', price: 4 },
    ]
  },
  
];

db2.remove({}, { multi: true }, function (err, newDocs) {
  if (err) {
    console.error('Error clearing the database:', err);
  } else {
    console.log('Schedule - Database clearing completed:', newDocs);
  }
  
});
db2.insert(schedule, function (err, newDocs) {
  if (err) {
    console.error('Error creating the database:', err);
  } else {
    console.log('Schedule - Database creation completed:');
  }

});

// Retrieve schedule data from the database
app.get("/api/getDeliverySlotsFromDB", (req, res) => {
  db2.find({}, function (err, docs) {
    if (err) {
      console.error('Error retrieving schedule from the database:', err);
    } else {
      docs.sort((a, b) => {
        const dateA = convertToDateObject(a.date);
        const dateB = convertToDateObject(b.date);
        return dateA - dateB;
      });
      console.log('Retrieved and sorted schedule data from the database:');
      res.json(docs)
    }
});
})

function convertToDateObject(dateString) {
  const [day, month, year] = dateString.split('/');
  return new Date(`${month}/${day}/${year}`);
}




















app.get("/api/getItemsFromDB", (req, res) => {
  db1.find({}).sort({ title: 1 }).exec((err, items) => {
    if (err) {
      console.error('Error fetching documents:', err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('Items sorted by title: Success');
      res.json(items);
    }
  });
});

app.post('/api/POSTUpdateDBStockNumbers', (request, response) => { 
  const data = request.body
  console.log(data);
  data.forEach((item) => {
    db1.update({ title: item.title}, { $inc: { stock: -item.quantity } }, {}, (err, numAffected, upsert) => {
      if (err) {
        console.error('Error updating record:', err);
      } else {
        console.log('Record updated successfully');
        console.log('Number of documents matched:', numAffected);
      }
    });
  })
  response.json({
      status: "success",
    
  })
})

app.post('/api/POSTUpdateDBOrderQtyWhenDeleted', (request, response) => { 
  const title = request.body.title
  console.log("title",title);
  db1.update(
    { title : title },
    { $set: { orderQty: 0 } },
    {},
    (err, numAffected, upsert) => {
      if (err) {
        console.error('Error updating record:', err);
        response.status(500).json({ status: 'error', message: 'Internal Server Error' });
      } else {
        console.log('Record updated successfully');
        console.log('Number of documents matched:', numAffected);
        response.json({
          status: 'success',
        });
      }
    }
  );
});

app.post('/apigetProductInfo', (request, response) => {
  const  ID  = request.body.ID
  console.log("Received ID to find:", ID)
  db1.find({ ID: ID}, function (err, docs) {
    if (err) {
      console.error('Error fetching documents:', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('Items sorted by title: Success');
      response.json(docs);
    }
  });
});

app.post('/api/POSTUpdateCurrentOrderQTY', (request, response) => { 
  const ID = request.body.ID
  const numofItems = request.body.numOfItems
  console.log(ID, numofItems);
  db1.update(
    { ID: ID },
    { $set: { orderQty: numofItems } },
    {},
    (err, numAffected, upsert) => {
      if (err) {
        console.error('Error updating record:', err);
        response.status(500).json({ status: 'error', message: 'Internal Server Error' });
      } else {
        console.log('Record updated successfully');
        console.log('Number of documents matched:', numAffected);
        response.json({
          status: 'success',
        });
      }
    }
  );
});
 
app.post('/api/updateOrderQtyToZero', (req, res) => {
  const updateOptions = { multi: true };
  const updateQuery = { $set: { orderQty: 0 } };

  db1.update({}, updateQuery, updateOptions, (err, numAffected) => {
    if (err) {
      console.error('Error updating documents:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Number of documents updated:', numAffected);
      res.json({ status: 'success', numAffected: numAffected });
    }
  });
});    

app.post('/api/GETTitleID', (request, response) => {
  const title = request.body.title;

  console.log("Received title to find:", title);

  db1.find({ title: title }, function (err, docs) {
    if (err) {
      console.error('Error fetching documents:', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('Found item');
      response.json(docs);
    }
  });
});

  









