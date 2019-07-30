var http = require('http');
var fs = require("fs");
var qs = require('querystring');

//for mongoDB
var MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://localhost:27017/";


http.createServer(function(request, response) {

	if(request.url === "/index"){
		console.log("loading main page");
		//sendFileContent(response, "web(client)_from_alex.html", "text/html");
		sendFileContent(response, "index.html", "text/html");
	}
	else if(request.url === "/"){
		//console.log("Requested URL is url" +request.url);
		//response.writeHead(200, {'Content-Type': 'text/html'});
		//response.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + request.url);
		sendFileContent(response, "index.html", "text/html");
	}
	
	
    else if(request.url==="/test"){

		//====================== (insert data to mongoDB) ======================
		
        if (request.method === "POST") {
            console.log("======test======");
			formData = '';
			msg = '';
			
			return request.on('data', function(data) {
			formData += data;
			console.log(formData);
		  
			return request.on('end', function() {
				var user;
				user = qs.parse(formData);
				//user.id = "123456";
				msg = JSON.stringify(user);
            
				info=formData.split("&");  //get user data
            
				for(i=0; i<info.length; i++){
                
					var d=info[i].split("=");

				}
            
				console.log(d[0]);
				console.log(d[1]);
				//console.log(info[0]);  //login name
				//console.log(info[1]);  //password

				stringMsg = JSON.parse(msg);
				MongoClient.connect(dbUrl, function(err, db) {

				if (err) throw err;

					var dbo = db.db("mydb");

					var myobj = stringMsg;

					dbo.collection("customers").insertOne(myobj, function(err, res) {

						if (err) throw err;

						console.log("1 document inserted ============");
	
						db.close();

					});
	
				});	
		  
			// request.writeHead(200, {
            //  "Content-Type": "application/json",
            //  "Content-Length": msg.length
           // });
            //return request.end("okok");
            response.end("okokss");
			});

			});
	
		} else {
        //form = publicPath + "ajaxSignupForm.html";
        sendFileContent(response, "index.html", "text/html");
  
		}	
	}
	
	
//=========================== Register (insert data to mongoDB) ===========================
	
	    else if(request.url==="/register"){

        if (request.method === "POST") {
            console.log("======register======");
			formData = '';
			msg = '';
			
			return request.on('data', function(data) {
			formData += data;
			console.log(formData);
		  
			return request.on('end', function() {
				var user;
				user = qs.parse(formData);
				//user.id = "123456";
				msg = JSON.stringify(user);
            
				info=formData.split("&");  //get user data
            
				for(i=0; i<info.length; i++){
                
					var d=info[i].split("=");

				}
            
				console.log(d[0]);
				console.log(d[1]);
				//console.log(info[0]);  //login name
				//console.log(info[1]);  //password

				stringMsg = JSON.parse(msg);
				MongoClient.connect(dbUrl, function(err, db) {

				if (err) throw err;

					var dbo = db.db("mydb");

					var myobj = stringMsg;

					dbo.collection("customers").insertOne(myobj, function(err, res) {

						if (err) throw err;

						console.log("1 document inserted ============");
	
						db.close();

					});
	
				});	
		  
			// request.writeHead(200, {
            //  "Content-Type": "application/json",
            //  "Content-Length": msg.length
           // });
            //return request.end("okok");
            response.end("okokss");
			});

			});
	
		} else {
        //form = publicPath + "ajaxSignupForm.html";
        sendFileContent(response, "register.html", "text/html");
  
		}	
	}
	
	
	//20190710 Lab
	//update one db data : https://www.w3schools.com/nodejs/nodejs_mongodb_update.asp
	//delete one db data : https://www.w3schools.com/nodejs/nodejs_mongodb_delete.asp
	
	
	
//==================================== add my fav =======================================
	
	else if(request.url==="/homeLoged"){

		//coding (insert data to mongoDB) ======================
		
		
        if (request.method === "POST") {
            console.log("======add my Fav list======");
			formData = '';
			msg = '';
			
			return request.on('data', function(data) {		//get value from client side:(data)
			formData += data;
			console.log(formData);
		  
			return request.on('end', function() {
				var user;
				user = qs.parse(formData);
				//user.id = "123456";
				msg = JSON.stringify(user);

				info=formData.split("&");  //get user data
            
				for(i=0; i<info.length; i++){
                
					var myFavTemp = info[i].split("=");
                
				}
            
				console.log("login User = " +myFavTemp[0]);
				console.log("Fav item = " +myFavTemp[1]);
				//console.log(info[0]);  //login name
				//console.log(info[1]);  //password


				stringMsg = JSON.parse(msg);
				MongoClient.connect(dbUrl, function(err, db) {

				if (err) throw err;

					var dbo = db.db("mydb");

					var myobj = stringMsg;

					dbo.collection("favlist").insertOne(myobj, function(err, res) {

						if (err) throw err;

						console.log("1 document inserted to favlist============");
	
						db.close();

					});
	
				});	
		  
			// request.writeHead(200, {
            //  "Content-Type": "application/json",
            //  "Content-Length": msg.length
           // });
            //return request.end("okok");
            response.end("okokss _favlist");
			});

			});
	
		} else {
        //form = publicPath + "ajaxSignupForm.html";
        sendFileContent(response, "loclist_1.html", "text/html");
  
		}	
	}
	
	
	
	
	
	
//==================================== del my fav =======================================
	
	else if(request.url==="/delfav"){

        if (request.method === "POST") {
            console.log("======del my Fav list======");
			formData = '';
			msg = '';
			
			return request.on('data', function(data) {		//get value from client side:(data)
			formData += data;
			console.log(formData);
		  
			return request.on('end', function() {
				var user;
				user = qs.parse(formData);
				
				msg = JSON.stringify(user);

				info=formData.split("&");  //get user data
            
				for(i=0; i<info.length; i++){
                
					var myFavTemp = info[i].split("=");
                
				}
            
				console.log("login User = " +myFavTemp[0]);
				console.log("Fav item = " +myFavTemp[1]);
				//console.log(info[0]);  //login name
				//console.log(info[1]);  //password


				stringMsg = JSON.parse(msg);
				MongoClient.connect(dbUrl, function(err, db) {

				if (err) throw err;

					var dbo = db.db("mydb");

					var myobj = stringMsg;

					dbo.collection("favlist").deleteOne(myobj, function(err, res) {

						if (err) throw err;

						console.log("1 document deleted from favlist============");
	
						db.close();

					});
	
				});	
		  
			// request.writeHead(200, {
            //  "Content-Type": "application/json",
            //  "Content-Length": msg.length
           // });
            //return request.end("okok");
            response.end("ok for del one_favlist");
			});

			});
	
		} else {
        //form = publicPath + "ajaxSignupForm.html";
        sendFileContent(response, "loclist_1.html", "text/html");
  
		}	
	}
	
	
	
	
	
	
	
	//==========================test mongoDB coding (login) ======================
	
	else if(request.url==="/login"){

		console.log("===/login page!!=================");
		
		//test mongoDB coding (find data) ======================
		
        if (request.method === "POST") {
            
			formData = '';
			msg = '';
			
			return request.on('data', function(data) {
			formData += data;
			//console.log("formData = "+formData);
	
			return request.on('end', function() {
				var user;
				user = qs.parse(formData);
				//user.id = "123456";
				msg = JSON.stringify(user);

				//console.log("msg = "+msg);
				//console.log("user = "+user);
				
				//https://www.w3schools.com/jsref/jsref_split.asp
				info=formData.split("&");  //get user data & split
				//console.log("info = "+info);
				
				//console.log("info[0] = "+info[0]);
				//console.log("info[1] = "+info[1]);
				
				
				//original split code
				//for(i=0; i<info.length; i++){ var d=info[i].split("="); }    
				
				var d = info[0].split("=");  //split login data
				var e = info[1].split("=");  //split password data
				
				//console.log("d = "+d);
				//console.log("d[0] = "+d[0]);
				console.log("login name = "+d[1]);
				
				//console.log("e = "+e);
				//console.log("e[0] = "+e[0]);
				console.log("password = "+e[1]);

				stringMsg = JSON.parse(msg);
				MongoClient.connect(dbUrl, function(err, db) {
//console.log("stringMsg = "+stringMsg);
				if (err) throw err;
//console.log("newnewnew========newnewnew");
					var dbo = db.db("mydb");

					var myobj = stringMsg;
					
					var query_chk = { loginname: d[1] , password1: e[1]};   // for query_(login id)_(login pwd)

					//https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp
					
					//db findOne (the first one record) =========
					//dbo.collection("customers").findOne({}, function(err, result) {
					
					//db findall =========
					//dbo.collection("customers").find({}).toArray(function(err, result) {
					
					
					
					//db query (check login id & pwd)===================
					//dbo.collection("customers").find(query_chk).toArray(function(err, result) {	
				
					//	if (err) throw err;

					//	console.log(result);
						
					//	db.close();

					//	if (result != ""){
					//		console.log("check login ok!!!!!!!!!");
					//		response.end("Login Successful")
					//	}else{
					//		console.log("Please register first!");
					//	}
					
					//});
					//end of db query (check login id & pwd)===================
					

					//db query (add my fav list)==========================
					//dbo.collection("customers").find({}).toArray(function(err, result) {	

					//var array=[];

					//	for (var i=0; i < result.length; i++){
					//		array.push(result[i].loginname);
					//	}			
				
					//if (err) throw err;

					//	console.log("myFav: "+array.toString());
					//	db.close();

					//	return response.end(array.toString());					
					//});				
					
					//end of db query (add my Fav list)========================






					//db query (check login id & pwd  & add my Fav list)===================
					dbo.collection("customers").find(query_chk).toArray(function(err, result) {	

					if (err) throw err;
						console.log(result);

					var array=[];

						for (var i=0; i < result.length; i++){
							array.push(result[i].loginname);
						}			
				
					if (err) throw err;

						console.log("myFav: "+array.toString());
						db.close();

						if (result != ""){
							console.log("check login ok la!");
							//response.end("Login Successful")
							response.end("Login Successful&"+d[1].toString());	//each function can 'response.end' one time only!	
								//==== 'response.end' return 1 value to client side
							
						}else{
							console.log("Please register first!");
						}


						return response.end(array.toString());					
					});				
					
					//end of db query (add my Fav list)========================











					
					
				});	
		  
            //response.end("okokss");
			});

			});
	
		} else {
        //form = publicPath + "ajaxSignupForm.html";
		
		
        sendFileContent(response, "login.html", "text/html");
  
		}
 
	}
	
	
	
	
	//======================== (show myFav list) ======================
	
	else if(request.url==="/myFav"){

		console.log("========/show myFav list page!!=============");
		
		// (find data) ======================
		
        if (request.method === "POST") {
            
			formData = '';
			//msg = '';
			
			return request.on('data', function(data) {
			formData += data;
			
			return request.on('end', function() {
				//var user;
				//user = qs.parse(formData);
				//msg = JSON.stringify(user);
				//msg = JSON.stringify(formData);
//console.log("user = " +user);
//console.log("msg = " +msg);				
				console.log("user login by = "+formData);

				//stringMsg = JSON.parse(msg);
				MongoClient.connect(dbUrl, function(err, db) {

				if (err) throw err;

					var dbo = db.db("mydb");
					//var myobj = stringMsg;
					
					var query_chk = { loginUser: formData };   // for query_(login id)

					//db query (find Fav list by used User name)===================
					dbo.collection("favlist").find(query_chk).toArray(function(err, result) {	

					if (err) throw err;
						console.log("query check = " +result);

					//save the result to array
					var array=[];
						for (var i=0; i < result.length; i++){
							array.push(result[i].favItem);		//get value from column "favItem"
						}			
				
					if (err) throw err;

						console.log("my Fav list = "+array.toString());
						db.close();

						if (result != ""){
							console.log(">>> Got my Fav list! <<<");
							//response.end("Login Successful")
							response.end(array.toString());	//each function can 'response.end' one time only!	
								//==== 'response.end' return 1 value to client side
							
						}else{
							console.log(">>> No Fav list found! <<<");
						}


						//return response.end(array.toString());					
					});				
					
	//======================== (show myFav list) ======================




					
				});	
		  
            //response.end("okokss");
			});

			});
	
		} else {
        //form = publicPath + "ajaxSignupForm.html";
		
		
        sendFileContent(response, "myFav.html", "text/html");
  
		}
 
	}
	
	
	
	
	
	
	
	
	else if(request.url === "/content_p1"){
		console.log("loading to content_p1");
		sendFileContent(response, "main_1.html", "text/html");
	}
	
	
	else if(/^\/[-\/\.a-zA-Z0-9_\/]*.js$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/javascript");
	}else if(/^\/[-\/\.a-zA-Z0-9_\/]*.css$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/css");
	}else if(/^\/[-\/\.a-zA-Z0-9_\/]*.min.js$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/min.javascript");
	}else if(/^\/[-\/\.a-zA-Z0-9_\/]*.png$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/png");
	}else if(/^\/[-\/\.a-zA-Z0-9_\/]*.jpg$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/jpg");
	}else if(/^\/[-\/\.a-zA-Z0-9_\/]*.ico$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/ico");
	}else if(/^\/[-\/\.a-zA-Z0-9_\/]*.woff$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/woff");
	}else if(/^\/[-\/\.a-zA-Z0-9_\/]*.ttf$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/ttf");
	}
	else{
		console.log("Requested URL is: " + request.url);
		response.end();
	}
}).listen(9999)

function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}