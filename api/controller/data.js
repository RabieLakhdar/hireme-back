const util = require("../util/globalFunc");
const { genderList, durationType, priceByDuration } = require("../util/data");


exports.getAllgender = (req, res, next) => {
  res
    .status(200)
    .json(
      util._request_response(
        "GET",
        "/genders",
        "get all genders type",
        true,
        genderList
      )
    );
};

exports.getAllDurtion = (req, res, next) => {
  res
    .status(200)
    .json(
      util._request_response(
        "GET",
        "/duration",
        "get all duration type",
        true,
        durationType
      )
    );
};

exports.getAllPriceByDuration = (req, res, next) => {
  res
    .status(200)
    .json(
      util._request_response(
        "GET",
        "/price-duration",
        "get all price by duration",
        true,
        priceByDuration
      )
    );
};


