
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.demoPage = function(req, res){
  res.render('demos/' + req.params.demoName);
};

exports.vendorJS = function(req, res){
  res.sendfile("vendor/" + req.params.fileName);
};
