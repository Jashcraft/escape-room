const userSeeds = require('./userSeed.json');
const roomSeeds = require('./roomSeed.json');
const db = require('../config/connection');
const { User, Room } = require('../models');

db.once('open', async () => {
    try {

      await User.deleteMany({});

      await User.create(userSeeds);

      await Room.deleteMany({});

      await Room.create(roomSeeds);

    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });