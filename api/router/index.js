const express = require("express");
const router = express.Router();
const util = require("../util/globalFunc");

const Bearer = require("@bearer/node")("FUFbE-aEBIbyWN5aVuX3wpWVp5pMOL8C");
const gsheet = Bearer.integration("google_sheets");

const spreadsheetId = "1J_kgeaXs0xniV2Ts-W_AvUzM_BxuEF2cV3W-oDLnSXs";

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "server already start"
  });
});

router.post("/sheet", (req, res, next) => {

  const data = req.body.data
  gsheet
    .auth("546686b0-46bd-11ea-a02c-a9982b0e5ce5")
    .post(`${spreadsheetId}/values/A1:append`, {
      body: { values: [data] },
      query: { valueInputOption: "RAW" }
    })
    .then(() => {
        res
    .status(200)
    .json(util._request_response("POST", "/sheet", "add succed", true, null));
    });

});

module.exports = router;
