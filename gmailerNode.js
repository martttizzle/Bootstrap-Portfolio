 const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

//View Engine Setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));


//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.render('index1');

});

app.post('/send', (req, res) => {
  //body parse allows to get body 
  const output = `
  <p> You have a new contact request </p>
  <h3> Contact Details</h3>
  <ul>
    <li>Name: ${req.body.First_Name}</li>
    <li>Name: ${req.body.Last_Name}</li>
    <li>Name: ${req.body.Email}</li>
  </ul>
  <h3>Message</h3>
  <p>Name: ${req.body.Message}</p>
  `;
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'mail.mrvdevelopment.com',
        port: 25,
        secure: false, // true for 465, false for other ports
        auth: {
            user:'info@mrvdevelopment.com', // generated ethereal user
            pass: 'Martel83#' // generated ethereal password
        }
        // ,
        // tls: {
        //     rejectUnauthorized: false
        // }
    });
    transporter.verify(function(error, success) {
      if (error) {
           console.log(error);
      } else {
           console.log('Server is ready to take our messages');
      }
   });


    // setup email data with unicode symbols
    let mailOptions = {
        from: 'MrVDevEmail', // sender address
        to: 'mvramdin@gmail.com', // list of receivers
        subject: 'New Contact Info', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('index1', {msg:"Email has been sent"});

        })

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
 




const PORT = 3000; 
app.listen(PORT, () => console.log("Server listening on " + PORT ));