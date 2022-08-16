// const jwt = require('jsonwebtoken');

// // Login
// router.post("/login", (req, res) => {
//   try {
//     let sql = "SELECT * FROM users WHERE ?";
//     let user = {
//       email: req.body.email,
//     };
//     con.query(sql, user, async (err, result) => {
//       if (err) throw err;
//       if (result.length === 0) {
//         res.send("Email not found please register");
//       } else {
//         const isMatch = await bcrypt.compare(
//           req.body.password,
//           result[0].password
//         );
//         if (!isMatch) {
//           res.send("Password incorrect");
//         } else {
//           // The information the should be stored inside token
//           const payload = {
//             user: {
//               user_id: result[0].user_id,
//               full_name: result[0].full_name,
//               email: result[0].email,
//               user_type: result[0].user_type,
//               phone: result[0].phone,
//               country: result[0].country,
//               billing_address: result[0].billing_address,
//               default_shipping_address: result[0].default_shipping_address,
//             },
//           };
//           // Creating a token and setting expiry date
//           jwt.sign(
//             payload,
//             process.env.jwtSecret,
//             {
//               expiresIn: "365d",
//             },
//             (err, token) => {
//               if (err) throw err;
//               res.json({ token });
//             }
//           );
//         }
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// // Verify
// router.get("/verify", (req, res) => {
//     const token = req.header("x-auth-token");
//     jwt.verify(token, process.env.jwtSecret, (error, decodedToken) => {
//       if (error) {
//         res.status(401).json({
//           msg: "Unauthorized Access!",
//         });
//       } else {
//         res.status(200);
//         res.send(decodedToken);
//       }
//     });
//   });

// // Lets attach our middleware to out get all user routes ('/')

//   const middleware = require("../middleware/auth");

//   router.get("/", middleware, (req, res) => {
//     try {
//       let sql = "SELECT * FROM users";
//       con.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send(result);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   });