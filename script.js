//Declear the installed modules express and body-parser.
let express = require('express');
let bodyParser = require('body-parser');
let note = [{id: 1, body: 'We have a text'}, {id: 2, body: 'This is a second text'}];


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
  //assigning Note id to the notes using math.random
const userNote = {};
userNote.id = Math.random() * 100;
userNote.body = req.body.newNote 
 
  note.push(userNote);

  //then we redirect it to the root route
  res.redirect('/');
});
//Handling the edit request
app.post('/editNote/:id', function(req, res){
console.log(req.params.id);
console.log(note);
  const editNotes = note.(item => item.id = req.params.id);
  note = editNotes;

res.redirect('/');
});

//Handling the delete request

app.post('/deleteNote/:id', function(req, res){
  console.log(req.params.id);
  const deleteNotes = note.filter(item => item.id != req.params.id);
note = deleteNotes;
  return res.redirect('/');
    });


//then we set our server port. This should always be at bottom.
app.listen(5000, function () {
  console.log("NoteApp server is running at port 5000...")
});
