import mysql from "mysql";

const query_db = (query_string, callback) => {
  const connection = mysql.createConnection({
    host: "",
    port: "",
    user: "",
    password: "",
    database: "",
  });

  connection.connect((error) => {
    if (error) {
      return console.log("connection error: ", error.message);
    }

    console.log("DB connection established...");
    
    connection.query(query_string, (error, result) => {
      if (error) throw error;

      connection.end((error) => {
        if (error) {
          console.log("query error: ", error);
        }
        console.log("DB connection ended.");
      });

      callback(result);
    });

  });
};


export default query_db;