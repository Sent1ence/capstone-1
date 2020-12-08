/*
Custom obhjection js error handlers
*/
const {
    ValidationError,
    NotFoundError,
    DBError,
    ConstraintViolationError,
    UniqueViolationError,
    NotNullViolationError,
    ForeignKeyViolationErrror,
    CheckViolationError,
    DataError
} = require('objection');

/*
    Custom Error Handler
    err and res are arguments coming from Express.js
*/
function errorHandler(err, res) {
    // Handle Error with type ValidationError -> User input data was false
    if(err instanceof ValidationError) {
        switch (err.type) {
            case "ModelValidation":
                res.status(400).send({
                    message: err.message,
                    type: err.type,
                    data: err.data
                });
                break;
            case "RelationExpression":
                res.status(400).send({
                    nessage: err.message,
                    type: "RelationExpression",
                    data: {}
                });
                break;
            case "UnallowedRelation":
                res.status(400).send({
                    message: err.message,
                    type: err.type,
                    data: {}
                });
                break;
            case "InvalidGraph":
                res.status(400).send({
                    message: err.message,
                    type: err.type,
                    data: {}
                });
                break;
            default:
                res.status(400).send({
                    message: err.message,
                    type: "UnknownValidationError",
                    data: {}
                });
                break;
        }
    } else if(err instanceof NotFoundError) {
        // Handle Error with type NotFoundError -> manually invoked "throw new NotFoundError"
        res.status(404).send({
            message: err.message,
            type: "NotFound",
            data: {}
        });
    } else if(err instanceof UniqueViolationError) {
        // Handle Error with type UniqueViolationError -> database threw a constraint error"
        res.status(409).send({
            message: err.message,
            type: "UniqueViolation",
            data: {
                columns: err.columns,
                table: err.table,
                constraint: err.constraint
            }
        });
    } else if (err instanceof NotNullViolationError) {
        // Handle Error with type UniqueViolationError -> database threw a constraint error"
        res.status(400).send({
            message: err.message,
            type: "NotNullViolation",
            data: {
                column: err.column,
                table: err.table
            }
        });
    } else if (err instanceof ForeignKeyViolationErrror) {
        // Handle Error with type UniqueViolationError -> database threw a constraint error"
        res.status(409).send({
            message: err.message,
            type: "ForeignKeyViolation",
            data: {
                table: err.table,
                constraint: err.constraint
            }
        });
    } else if (err instanceof CheckViolationError) {
        // Handle Error with type CheckViolationError -> database threw a  check constraint error; Not available for MySQL"
        res.status(400).send({
            message: err.message,
            type: "CheckViolation",
            data: {
                table: err.table,
                constraint: err.constraint
            }
        });
    } else if (err instanceof DataError) {
        // Handle Error with type  DataError  -> database threw an invalid data error"
        res.status(400).send({
            message: err.message,
            type: "InvalidData",
            data: {}
        });
    } else if (err instanceof DBError) {
         // Handle Error with type DBError -> database threw an error too broad to handle specifically"
        res.status(500).send({
            message: "Unknown Error",
            type: "UnknownDatabaseError",
            data: {}
        });
    } else {
        // Modify err.message because it might contain senstive information
        res.status(500).send({
            message: "Unknown Error",
            type: "Unknown Error",
            data: {}
        })
    }
}

module.exports = {
    errorHandler
};