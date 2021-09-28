import query_db from "./sql_db_connection.js";

//CREATE
export const createRequestModel = (req, callback) => {
  //request data extraction
  const arguments_string = concat_arguments(req);
  const values_string = concat_values(req);

  console.log("table: ", req.table_name, "| arguments:", arguments_string, "| values:", values_string);

  //querry composition
  const sql = `INSERT INTO ${req.table_name} (${arguments_string}) VALUES (${values_string})`;

  query_db(sql, (result) => {
    if (Object.keys(result).length == 0) {
      console.log("error: create_module_error");
      return null;
    }

    callback(result);
  });
};

//READ

//UPDATE

//DELETE

//data extraction methods
const concat_arguments = (req) => {
  let extracted_arguments = [];
  let arguments_string = "";

  Object.values(req).forEach((entry) => {
    if (entry.sql_argument) {
      extracted_arguments.push(entry.sql_argument);
    }
  });
  //console.log(extracted_arguments);
  arguments_string = extracted_arguments.reduce((accumulator, arg) => {
    return accumulator.concat(" ", arg, ",");
  }, "");

  arguments_string = arguments_string.slice(0, arguments_string.length - 1);

  return arguments_string;
};

const concat_values = (req) => {
  let extracted_values = [];
  let values_string = "";

  Object.values(req).forEach((entry) => {
    if (entry.sql_argument) {
      extracted_values.push(entry.sql_value);
    }
  });
  //console.log(extracted_values);
  values_string = extracted_values.reduce((accumulator, value) => {
    return accumulator.concat(" '", value, " ',");
  }, "");

  values_string = values_string.slice(0, values_string.length - 1);

  return values_string;
};

export default null;
