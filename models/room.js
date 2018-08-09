const mongoose = require('mongoose');
const rooms = require('../migrations/rooms.json');

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "nameRequired"],
    maxlength: [128, "tooLong"],
    unique: true
  },
  area: {
    type: Number,
    required: [true, "areaRequired"]
  },
  guestsNumber: {
    type: Number,
    required: [true, "guestsNumberRequired"]
  },
  costPerNight: {
    type: Number,
    required: [true, "costPerNightRequired"]
  },
  previewImg: {
    type: String,
    maxlength: [256, "tooLong"]
  },
  code: {
    type: String,
    required: [true, "codeRequired"],
    maxlength: [20, "tooLong"],
    unique: true
  }
});

let Room;

roomSchema.statics.initRoom = (Room) => {
  console.info("Start setting init rooms data...");

  let _rooms = rooms;
  console.log("Rooms in migration: ", rooms.length);

  Room.remove({}, (err) => {
    Room.insertMany(_rooms).then(rooms => {
      console.log("Rooms added: ", rooms.length);
      Room.find().then(dbRooms => {
        console.log("Total rooms in db: ", dbRooms.length);
      });
    });
  })
}



module.exports = mongoose.model('Room', roomSchema);