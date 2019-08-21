/**
 * DetailsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = function detailsPost (req, res) {
    console.log("Coming to server with req". req.body)

    return res.send('Hi there!')
};

