var express=require("express");
var app=express();
var cors=require('cors');
app.use(cors());
var mongo=require('mongodb');
var bodyParser=require('body-parser');
app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var MongoClient=mongo.MongoClient;
var url="mongodb://localhost:27017/nabeel";

app.post('/formsubmit',urlencodedParser,function(request,response){

  MongoClient.connect(url, function (err,db) {

    if (err) {
      console.log('unable to connect!!');
    }

    else{

         var collection=db.collection('formdata');
         var data={first_name:request.param('first'),
                   last_name:request.param('last'),
                   add_ress:request.param('address'),
                   ci_ty:request.param('city'),
                   sta_te:request.param('state'),
                   zi_p:request.param('zip'),
                   ph_one:request.param('phone')
         }
      collection.insert(data, function (err,result) {

        if(err){console.log('cannot insert:' +err);}
        else{console.log('inserted successfully');

             response.end("Thank You for Registering"+request.param('first')+" "+request.param('last'));

        }
      });
    }
  });
});

var server=app.listen(8090,function() {

  var host = server.address().address
  var port = server.address().port;
});


