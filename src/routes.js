module.exports = function (stockRepository) {
	return {
		ping: function (req, res) {
     	   res.send('Hello World!');
    	},

    	stockUp: function (req, res, next) {
	        var isbn = req.body.isbn;
	        var count = req.body.count;

	        stockRepository.stockUp(isbn, count).then(function () {
	            res.json({
	                isbn: req.body.isbn,
	                count: req.body.count
	            });
	        }).catch(next);
	    },

	    findAll: function (req, res, next) {
	        stockRepository.findAll().then(function (results) {
	            res.json(results);
	        }).catch(next);
	    },

	    getCount: function (req, res, next) {
	        stockRepository.
	            getCount(req.params.isbn).
	            then(function (result) {
	                if (result) {
	                    res.json({count: result});
	                } else {
	                    res.status(404).send('No book with isbn ' + req.params.isbn);
	                }
	            }).
	            catch(next);
	    }
	};
};