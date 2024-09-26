import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    required: true,
  },
  // user: {
  //   type: mongoose
  //   required: true,
  // },
  // item: {
  //   type: String,
  //   required: true,
  // },
  date: {
    type: Date,
    required: true,
  },
  subscriptionId: {
    type: String,
    required: true,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);
 export default Transaction;