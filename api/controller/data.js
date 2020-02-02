const util = require("../util/globalFunc");
const {
   genderList
  } = require("../util/data");


exports.getAllgender = (req, res, next) => {
    res
    .status(200)
    .json(
      util._request_response("GET", "/genders", "get all genders typr", true, genderList)
    );
};
