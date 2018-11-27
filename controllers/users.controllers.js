const sendResponse = require('../modules/response.helper');



var createUser = function(req, res, next){

    var data = "testing";

    console.log("hiiiiiiiiii");
    console.log("LLLLLLLLLLLLLLLLLLddddLL");
  //  sendResponse.sendJsonResponse('req', 'res',200, data, 'success');
   res.send('respond with a resourcedddd');

}

exports.createUser = createUser;