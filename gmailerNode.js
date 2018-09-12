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
    <li>First Name: ${req.body.First_Name}</li>
    <li>Last Name: ${req.body.Last_Name}</li>
    <li>Email: ${req.body.Email}</li>
  </ul>
  <h3>Message</h3>
  <p>Message: ${req.body.Message}</p>
  `;
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'mail.mrvdevelopment.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user:'info@mrvdevelopment.com', // generated ethereal user
            pass: 'Vikings83!' // generated ethereal password
        }
        ,
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'MR.V Development <info@mrvdevelopment.com>', // sender address
        to: 'martel1983@yahoo.com, mvramdin@gmail.com', // list of receivers
        subject: 'New Contact Info', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
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
 




const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => console.log("Server listening on " + PORT ));