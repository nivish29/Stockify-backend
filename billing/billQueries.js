const db = require("../db/conn");

// exports.createOrder = (data,id, callback) => {
//   let ts = Date.now();
// let date_ob = new Date(ts);
//   let date = date_ob.getDate();
//   let month = date_ob.getMonth() + 1; 
//   let year = date_ob.getFullYear();
//   let today = year + "-" + month + "-" + date 
//   db.query(
//     `INSERT INTO ORDERS (ORDER_ID, PRODUCT_ID, SUPPLIER_ID, DATE, QUANTITY, USER_ID) values (?,?,?,?,?,?)`,
//     [
//       data.ORDER_ID,
//       data.PRODUCT_ID,
//       data.SUPPLIER_ID,
//       today,
//       data.QUANTITY,
//       id
//     ],
//     (error, results, fields) => {
//       if (error) {
//         return callback(error);
//       }
//       return callback(null, results);
//     }
//   );
// };

exports.getBills = (id,callback) => {
    db.query(`select b.BILL_ID,b.cust_name,b.cust_contact,b.total_amount,b.date from BILLS as b`, [id], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  };