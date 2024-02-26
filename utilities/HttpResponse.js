const httpResonse = (res, statuscode, statusmessage, data, error, msg) => {
  return res.status(statuscode).json({
    status: statusmessage,
    data,
    error,
    msg,
  })};
module.exports = httpResonse;
