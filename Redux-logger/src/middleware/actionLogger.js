// src/middleware/actionLogger.js
const actionLogger = (storeAPI) => (next) => (action) => {
  console.log("Dispatching action type:", action.type);
  return next(action);
};

export default actionLogger;
