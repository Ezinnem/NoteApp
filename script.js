//Declear the installed modules express and body-parser.
let express = require('express');
let bodyParser = require('body-parser');
let note = ['We have a text', 'This is a sceond text'];


//call the express and Body-parser
let app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
//we installed the ejs and created a file inside the views
app.set('view engine', 'ejs');

//We set up the route for the App. We first use the app.get option.
app.get('/', function (req, res) {
  res.render('notes', {
    note: note
  });
});

//then, we use app.post option.
app.post("/addNotes", function (req, res) {

  let newNotes = [ req.body.newNote ];
  //add the new Note from the post route into the array of notes
  note.push(newNotes);

  //then we redirect it to the root route
  res.redirect('/');
});

app.post("/deleteNote", function(req, res){
  let tableName = document.getElementById("myTr[i]");
  for (var i=0; i < tableName.length; i++){
    if (tableName[i] < 0){
      tableName.splice(i, 1);
    }
    return;
  }
    res.redirect('/');
    });


//then we set our server port. This should always be at bottom.
app.listen(5000, function () {
  console.log("NoteApp server is running at port 5000...")
});
