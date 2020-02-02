const util = require("../util/globalFunc");

const genderList = [
    {value: 'Girl'},
    {value: 'GirlFriend'},
    {value: 'Boy'},
    {value: 'BoyFriend'},
    {value: 'SexFriend'},
    {value: 'Family " Mother, Father"'},
    {value: 'Family " Mother, Father & Brother "'},
    {value: 'Family " Mother, Father & Sister "'},
    {value: 'Family " Mother, Father & Sister "'},
    {value: 'Family " Mother, Father, Brother & Sister "'},
    {value: 'Grand Father'},
    {value: 'Grand Mather'},
    {value: 'Cousin'},
    {value: 'Neighboor'},
  ];

exports.getAllgender = (req, res, next) => {
    res
    .status(200)
    .json(
      util._request_response("GET", "/genders", "get all genders typr", true, genderList)
    );
};
