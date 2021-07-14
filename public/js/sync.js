(function() {
  'use strict';
  var db = new PouchDB('todos');
  var SYNC_GATEWAY_URL = 'https://sync.confluxio.net/todos/';
  var remoteCouch = SYNC_GATEWAY_URL;
  var USER_ID = "";
  var grid = canvasDatagrid({
    parentNode: document.getElementById("db"),
    schema:[
      { name:"title"},
      { name:"checked"}
    ]
  });
  // auth sync session with google id_token
  function google_user_session(id_token, userId) {
    var request = new XMLHttpRequest();
    request.open('POST', SYNC_GATEWAY_URL + '_google', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        console.log('New SG session, starting sync!', request.response);
        USER_ID = userId
        sync();
      }
    };
    request.withCredentials = true;
    request.send(JSON.stringify({"id_token": id_token}));
  }
  // Initialise a sync with the remote server
  function sync(){
    var opts = {live: true, retry: true };
    //TODO : retry based on error code logic
    db.sync(remoteCouch,opts)
    .on("paused", function (err) {
      // replication paused (e.g. replication up to date, user went offline
      console.log('paused ' + JSON.stringify(err) )
    })
    .on("active", function (err) {
      // replicate resumed (e.g. new changes replicating, user went back online)
      console.log('active ' + JSON.stringify(err) )
    })
    .on("denied", function (err) {
      // a document failed to replicate (e.g. due to permissions)
      db.get(err.doc.id, {conflicts: true}).then(function (doc) {
        // remove the doc
        console.log("remove : ", doc)
        db.remove(doc._id, doc._rev).then(function (doc) {
          console.log("removed : ",doc)
        }).catch(function (err) {
          // handle any errors
        });
      }).catch(function (err) {
        // handle any errors
      });
      console.log('denied ' + JSON.stringify(err) )
    })
    .on("complete", function (info) {
      // handle complete
      console.log('complete ' + JSON.stringify(info) )
    })
    .on("error", function (err) {
      // handle error
      console.log('error ' + JSON.stringify(err) )
  });
};
  // update db with grid change
  function updateDB(event){
    var doc = JSON.parse(JSON.stringify(event.cell.data));
    //default document validated by sync-gateway sync function
    if(!doc._id){
      doc._id =  new Date().toISOString()
      doc.title = 'new tesk'
      doc.checked = false
      doc.type = 'task'
      doc.created_at = new Date()
      doc.creator = USER_ID
      doc.writers = [USER_ID]
      doc.channels = ["user:" + USER_ID]
    }
    //update document
    doc[event.cell.header.name] = event.newValue
    //assing defualt values for missing fields
    Object.assign(event.cell.data, doc)
    //save document
    db.put(event.cell.data, function(err, result) {
      console.log("put :", err, result )
      //TODO : process custom errors
    })
    //db.get('_local/_undo', console.log)
  };
  // update grid with db changes
  function updateDOM(change){
    console.log("updateDOM : ", change)
    db.allDocs({include_docs: true, descending: true}, function(err, doc) {
      var docs = []
      doc.rows.forEach(function(row) {
        docs.push(row.doc)
      });
      grid.data = docs
      console.log(docs);
    });
  };
  // listen for changes to db and grid
  db.changes({ since: 'now', live: true }).on('change', updateDOM);
  grid.addEventListener('beforeendedit', updateDB);
  grid.attributes.showNewRow = true;
  grid.addEventListener('keyup', function (e) {
    console.log('keyup :', e.NativeEvent.keyCode)
    if (e.NativeEvent.keyCode === 46) {
        grid.selections.forEach(function (selectedCells, rowIndex) {

            db.remove(grid.data[rowIndex],function(err, result) {
              console.log("remove :", err, result)
              //console.log('remove',grid.data[rowIndex]);
            });
            /*
            selectedCells.forEach(function (cellData, cellIndex){
                grid.data[rowIndex][cellIndex] = '';
            });
            */
        })
    }
  });
  grid.addEventListener('rendercellgrid', function (e) {
    document.getElementById("db").classList.add("nav-content");
  })
  updateDB({
    newValue:'new task',
    cell:{
      data:{},
      header:{
        name:'title'
      }
    }
  })

  grid.data = [
    { title: 'task 1', checked: 'false'},
    { title: 'task 2', checked: 'false'},
  ];
  //
  /*
  var gridDB = new gridjs.Grid({
    columns: ["Name", "Email", "Phone Number"],
    //search: true,
    data: [
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
      ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
      ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
    ],
    style: {
      table: {
        border: '3px solid #262626',
      },
      th: {
        'background-color': '#595540',
        color: '#000',
        'border': '3px solid #262626',
        'text-align': 'center'
      },
      td: {
        'background-color': '#262626',
        color:'silver',
        border: '3px solid #262626',
        'text-align': 'center'
      }
    }

  }).render(document.getElementById("db"));
  gridDB.on('rowClick', (...args) => console.log('row: ' + JSON.stringify(args), args));
  gridDB.on('cellClick', (...args) => console.log('cell: ' + JSON.stringify(args), args));
  */
})();
