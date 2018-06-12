var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.post('/', function(req, res, next) {
  
  this.path = path.join(__dirname , 'users.json' );
	this.user = [];

	if (!fs.existsSync(this.path))
	{
		fs.writeFileSync(this.path,'[]');
	}
	else
	{
    var name = req.body.name ;
    this.users = JSON.parse(fs.readFileSync(this.path)); 
    for (var i=0 ; i<this.users.length; i++)
    {
      console.log(users[i].Name == name ) ;
      if (users[i].Name == name)
      {
        this.user = users[i] ;
        break;
      }
    }
	}

  res.render('profile' , {user: this.user});
});

module.exports = router;
