$(document).ready(function(){


	//search for articles - do somethign when enter(keypress) like 'click' 
			$.ajax({//ajax is a function and takes a parameter- which is an extreme large object 	
			"url":"https://www.goodreads.com/book/title.FORMAT?", //add '?', parameters will be added
						//we have different types of request: big four: 
						//1) POST: creating smt in database 
						//2) PUT: updating smt in database
						//3) DELTE: request you delete from the database
						//4) GET: request you access smt  
			"type": "GET",
			"dataType": "XML",
			"data":{ // the two parameters will be added to my url 
				'api-key':"4zdr9gjU0y70gs9b11a2Q",
			},
			success:function(data){
				//call this function if request works 
				//ex.1:
				// console.log(data);
				// console.log(data.response.docs[0].headline.main);

				//ex.2: for loop
				console.log(data);
				
				var myArticles = data.Goodreadsresponse.book;//give me an array of last 10 articles
				for(var i=0; i<myArticles.length;i++){
					console.log(data.Goodreadsresponse.book[i]);
					var newHeader= $("<h1>"+data.response.book[i]+"</h1>");
					$('body').append(newHeader);
								}
			},
			error: function(data, textStatus, errorThrown){
				console.log("err")
		}

	})
		}
	});

	





})