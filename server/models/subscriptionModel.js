import mongoose from 'mongoose'

const subscriptionSchema = new mongoose.Schema({
  subscriptionId: {
    type: String,
    required: true,
  },
  planName: {
    type: String,
    required: true,
  },
  planDuration: {
    type: String,
    required: true,
  },
  price: {
    type: float,
    required: true,
  },
  // users: {
  //   type: mongoose
  //   required: true,
  // },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);
 export default Subscription;