exports.get = async (req, res) => {
  if (!req.user) return res.redirect('/login'); // is this line necessary
  console.log('This is the index route');
  res.redirect('/');
};
