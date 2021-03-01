const errorHandler = (err, req, res, next) => {
  let statusCode;
  let messages;

  switch (err.name) {
    case "SequelizeValidationError":
      statusCode = 400;
      let errors = []
      err.errors.forEach(element => {
        errors.push(element.message)
      });
      messages = errors.join(', ')
      break;
    default:
      statusCode = 500;
      messages = "Internal Server Error"
      break;
  }

  console.log(err)
  res.status(statusCode).json({msg: messages})
}

module.exports = errorHandler