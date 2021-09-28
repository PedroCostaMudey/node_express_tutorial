import query_db from "./sql_db_connection.js";

//CREATE
export const createRequestModel = (request, callback) => {
  //request extraction

  const concat_arguments = () => {
    let extracted_arguments = [];
    Object.values(request).forEach((entry) => {
      if (entry.sql_argument) {
        extracted_arguments.push(entry.sql_argument);
      }
    });
    //console.log(extracted_arguments);
    return extracted_arguments.reduce((accumulator, arg) => {
      return accumulator.concat(" ", arg);
    }, "");
  };

  const concat_values = () => {
    let extracted_values = [];
    Object.values(request).forEach((entry) => {
      if (entry.sql_argument) {
        extracted_values.push(entry.sql_value);
      }
    });
    //console.log(extracted_values);
    return extracted_values.reduce((accumulator, value) => {
      return accumulator.concat(" ", value);
    }, "");
  };

  const arguments_string = concat_arguments();
  const values_string = concat_values();

  console.log("arguments: ", arguments_string, "| values:", values_string);

  //querry composition
  const sql = `INSERT INTO ${request.table_name} (${arguments_string}) VALUES (${values_string})`;

  query_db(sql, (result) => {
    if (Object.keys(result).length == 0) {
      console.log("error: create_module_error");
      return null;
    }

    callback();
  });
};

//READ

//UPDATE

//DELETE

export default null;
