const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WaitlistUserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dateCreated: {
      type: Date,
      default: new Date(),
    },
    plans: [
      {
        type: {
          type: String,
          required: true,
        },
        active: {
          type: Boolean,
          required: true,
          default: true,
        },
      },
    ],
    active: { type: Boolean },
  },
  { collection: "waitlist" }
)

module.exports = WaitlistUser = mongoose.model(
  "waitlistUser",
  WaitlistUserSchema
)
