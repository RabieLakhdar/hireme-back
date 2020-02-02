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

  const durationType = [
    {value: 'Hour'},
    {value: 'Half-Day'},
    {value: 'Day'},
    {value: 'Week'},
    {value: 'Month'},
    {value: 'Mission'},
  ];

  const priceByDuration = [
    {value: 'Hour', from: 5, to: 15},
    {value: 'Half-Day', from: 25, to: 45},
    {value: 'Day', from: 50, to: 80},
    {value: 'Week', from: 120, to: 230},
    {value: 'Month', from: 200, to: 500},
    {value: 'Mission', from: 100, to: 900},
  ];

  module.exports = {
      genderList,
      durationType,
      priceByDuration
  }