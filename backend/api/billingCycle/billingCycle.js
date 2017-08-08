const restful = require('node-restful');
const mongoose = restful.mongoose

const creditSchema = new Mongoose.Schema({
  name: { Type: String, required: true },
  value: { Type: Number, min: 0, required: true }
});

const debtSchema = new Mongoose.Schema({
  name: { Type: String, required: true },
  value: { Type: Number, min: 0, required: true },
  status: { Type: String, required: true, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
});

const billingCycleSchema = new Mongoose.Schema({
  name: { Type: String, required: true },
  month: { Type: Number, min: 1, max: 12, required: true },
  year: { Type: Number, min: 1970, max: 2100, required: true },
  credits: [creditSchema],
  debts: [debtSchema]
});

module.exports = restful.model('BillingCycle', billingCycleSchema);
