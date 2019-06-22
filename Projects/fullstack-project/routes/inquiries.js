const express = require('express')
const inquiriesRouter = express.Router();
const nodemailer = require("nodemailer");
const Inquiry = require('../models/inquiryModel')

//SMS Auth
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

inquiriesRouter.route('/')
    .post((req, res) => {
        const newInquiry = new Inquiry(req.body);
        newInquiry.save((err, saveInquiry) => {
            if (err) return res.status(500).send(err);

            //SEND EMAIL
            const output = `
            <p>You have a new inquiry!</p>
            <h3>Contact details</h3>
        
            <ul>
                <li>Name: ${req.body.fullName}</li>
                <li>Phone number: ${req.body.phoneNumber}</li>
                <li>Address: ${req.body.address}</li>
                <li>E-mail: ${req.body.email}</li>
                <li>Preferred Time: ${req.body.preferredTime}</li>
            </ul>
        
            <h3>Message</h3>
            <p>${req.body.message}</p>`;

            let transporter = nodemailer.createTransport({
                // service: "gmail",
                host: "smtp.zoho.com",
                port: 465,
                // secure: true, // true for 465, false for other ports
                auth: {
                    user: process.env.MAIL_USERNAME, // generated ethereal user
                    pass: process.env.MAIL_PASSWORD // generated ethereal password
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Grace Hannah" <info@mapmygene.com>', // sender address
                to: 'roydensynderen@gmail.com', // list of receivers
                subject: 'You have a new contact request!', // Subject line
                text: '', // plain text body
                html: output // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.status(500).send(error);
                }
                const testUrl = nodemailer.getTestMessageUrl(info)
                console.log('Message sent: %s', info.messageId);
                res.status(201).send({
                    messageId: info.messageId,
                })
            });

            //SEND SMS
            client.messages.create({
                to: process.env.MY_PHONE_NUMBER,
                from: '+14804704141',
                body: `New inquiry!\nContact details\nName: ${req.body.fullName}\nPhone Number: ${req.body.phoneNumber}\nAddress: ${req.body.address}\nEmail: ${req.body.email}\nPreferred Time: ${req.body.preferredTime}\nMessage: ${req.body.message}`
            })
            .then(message => {
                console.log(message.sid)
            })
        })
    })

module.exports = inquiriesRouter