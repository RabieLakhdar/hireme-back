const util = require("../util/globalFunc");
const { genderList, durationType, priceByDuration } = require("../util/data");
const Bearer = require("@bearer/node")("FUFbE-aEBIbyWN5aVuX3wpWVp5pMOL8C");
const gsheet = Bearer.integration("google_sheets");

const spreadsheetId = "1J_kgeaXs0xniV2Ts-W_AvUzM_BxuEF2cV3W-oDLnSXs";
const data = [["loca", "mica"]];

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

exports.getSheet = (req, res, next) => {

  res
  .status(200)
  .json(
    util._request_response(
      "POST",
      "/sheet",
      "add succed",
      true,
      null
    )
  );
   
  
};
