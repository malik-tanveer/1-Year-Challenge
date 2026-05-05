import mongoose from "mongoose";

// DB Schema 
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);