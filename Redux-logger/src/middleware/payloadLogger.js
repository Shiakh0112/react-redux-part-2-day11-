// src/middleware/payloadLogger.js
const payloadLogger = (storeAPI) => (next) => (action) => {
  if (action.payload) {
    console.log("Payload:", action.payload);
  }
  return next(action);
};

export default payloadLogger;
