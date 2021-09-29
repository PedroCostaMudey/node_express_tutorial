import query_db from "./sql_db_connection.js";

//CREATE
export const createRequestModel = (req, callback) => {
  
  /* const FAKE_REQUEST = {
    table_name: "requests",
    0: { sql_argument: "content", sql_value: "info" },
    //1: { sql_argument: "arg2", sql_value: "val2" },
    //2: { sql_argument: "arg3", sql_value: "val3" },
  }; */

  //const requestObject = FAKE_REQUEST;

  //Removes [Object: null prototype] prefix
  const requestObject = JSON.parse( JSON.stringify( req.body ));

  console.log( "req: ", requestObject );

  //request data extraction
  const {fields:fields_string, values:values_string}  = extractFieldsValues(requestObject);

  console.log( "table: ", requestObject.db_table, "| fields:", fields_string, "| values:", values_string);

  //querry composition
  const sql = `INSERT INTO ${requestObject.db_table} (${fields_string}) VALUES (${values_string})`;

  console.log("sql query: ", sql);

  query_db(sql, (result) => {
    if (Object.keys(result).length == 0) {
      console.log("error: create_module_error");
      return null;
    }

    const result_message = "".concat(
      "Inserted with success with id:",
      result.insertId
    );

    callback(result_message);
  });
};

//READ

//UPDATE

//DELETE


//data extraction methods
const extractFieldsValues = (requests) => {
  
  let fields = "", values = "", counter_fields=0, counter_values=0;

  Object.entries(requests).forEach( (request) => {
    if ( request[0].includes("db_field") ) {
      fields = fields.concat(" ", request[1], "\," );
      counter_fields++;
    }else if(request[0].includes("db_value")){
      values = values.concat(" \'", request[1], "\'\," );
      counter_values++;
    }
  } );

  counter_fields !== counter_values && console.log("Error: SQL arguments quantities: Feilds quantity doesn't match values quantity!");

  fields = fields.slice( 0, fields.length - 1 );
  values = values.slice( 0, values.length - 1 );
  
  return {fields, values};
}

export default null;
