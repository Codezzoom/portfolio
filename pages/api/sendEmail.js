import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { firstName, lastName, email, phone, idea, attachments } = req.body;

    if (!firstName || !lastName || !email || !idea) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        // Configure Nodemailer transport
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465, // Port for secure SMTP
            secure: true, // Use SSL
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Prepare attachments if any
        const formattedAttachments =
            attachments?.map((file) => ({
                filename: file.name,
                content: file.content,
                encoding: "base64",
            })) || [];

        // Use "N/A" if phone is not provided
        const formattedPhone = phone && phone.trim() !== "" ? phone : "N/A";

        // Get the current year
        const currentYear = new Date().getFullYear();


        // Email options
        const mailOptions = {
            from: email, // The sender's email address
            to: process.env.SMTP_USER, // Your SMTP email address
            subject: `New Inquiry from ${firstName} ${lastName}`, // Email subject
            html:
                `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Contact Form Submission</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                background-color: #f9fafb;
                                margin: 0;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                min-height: 100vh;
                                padding: 2rem;
                            }

                            .envelope-container {
                                position: relative;
                                width: 100%;
                            }

                            .logo-circle {
                                position: absolute;
                                width: 4rem;
                                height: 4rem;
                                text-align: center;
                                border-radius: 50%;
                                z-index: 20;
                            }
                    
                            .logo-circle img {
                                height: 100px;
                                width: 100px;
                                padding: 10px;
                                text-align: center;
                                background: rgba(0, 0, 0, 0.5);
                                border-radius: 10px;
                                margin-bottom: 2rem;
                            }

                            .contact-card {
                                background-color: white;
                                border-radius: 0.5rem;
                                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
                                overflow: hidden;
                                
                            }

                            .card-header {
                                background: #B8C1EC;
                                text-align: center;
                                padding: 1.5rem;
                            }

                            .card-header h1 {
                                font-size: 1.5rem;
                                margin-top: 6.5rem;
                                font-weight: bold;
                                color: black;
                            }

                            .card-header p {
                                color: rgba(255, 255, 255, 0.7);
                            }

                            .contact-details {
                                padding: 2rem;
                            }

                            .contact-info {
                                background-color: #f9fafb;
                                border-radius: 0.5rem;
                                padding: 1.5rem;
                                display: grid;
                                grid-template-columns: 1fr 1fr;
                                gap: 1rem;
                            }

                            .contact-info-item {
                                margin-bottom: 1rem;
                            }

                            .contact-info-item .label {
                                color: #6b7280;
                                font-size: 0.875rem;
                            }

                            .contact-info-item .value {
                                color: #111827;
                                font-weight: 500;
                            }

                            .message-section {
                                margin-top: 1.5rem;
                            }

                            .message-section h2 {
                                font-size: 1.125rem;
                                color: #111827;
                                margin-bottom: 0.75rem;
                            }

                            .message-content {
                                background-color: #f9fafb;
                                border-left: 5px solid #B8C1EC;
                                border-radius: 0.5rem;
                                padding: 1.5rem;
                                color: #374151;
                                line-height: 1.6;
                            }

                            .action-buttons {
                                margin: 1.5rem;
                                text-align: center;
                            }
                        
                            .action-buttons a {
                                text-decoration: none;
                                color: black;
                            }

                            .btn {
                                height: 20px;
                                width: 120px;
                                padding: 0.75rem 2.5rem;
                                margin: 10px 10px;
                                border-radius: 0.5rem;
                                text-decoration: none;
                                font-weight: 500;
                                font-size: 14px;
                            }

                            .btn-primary {
                                background-color: #B8C1EC;
                            }
                        

                            .card-footer {
                                background: #B8C1EC;
                                border-top: 1px solid #e5e7eb;
                                padding: 1.5rem;
                                gap: 20px;
                                text-decoration: none;
                            }
                        
                            .social-icons {
                                gap: 1.5rem;
                                margin-top: 1rem;
                                text-align: center;
                            }

                            .social-icons a {
                                color: black;
                                text-decoration: none;
                                padding: 0px 10px;
                            }

                            .social-icons a:hover {
                                color: #2563eb;
                            }

                            .copyrights{
                                text-align: center;
                                font-size: 12px;
                                color: black;
                            }
                        </style>
                    </head>
                <body>
                    <div class="envelope-container">  
                        <div class="contact-card">
                            <div class="card-header">
                                <div class="logo-circle">
                                    <img src="https://github.com/Codezzoom/portfolio/blob/main/public/Navbar/logo.png?raw=true"
                                         alt="Portfolio Logo"/>
                                </div>
                                    <h1>New Contact Form Submission</h1>
                            </div>

                        <div class="contact-details">
                            <div class="contact-info">
                                <div class="contact-info-item">
                                    <div class="label">First Name</div>
                                    <div class="value">${firstName}</div>
                                </div>
                                <div class="contact-info-item">
                                    <div class="label">Last Name</div>
                                    <div class="value">${lastName}</div>
                                </div>
                                <div class="contact-info-item" style="grid-column: 1 / -1;">
                                    <div class="label">Email</div>
                                    <div class="value">${email}</div>
                                </div>
                                <div class="contact-info-item" style="grid-column: 1 / -1;">
                                    <div class="label">Phone</div>
                                    <div class="value">${formattedPhone}</div>
                                </div>
                            </div>

                            <div class="message-section">
                                <h2>Message</h2>
                                <div class="message-content">
                                    "${idea}"
                                </div>
                            </div>

                            <div class="action-buttons">
                                <a href="mailto:${email}" class="btn btn-primary">
                                    Reply Message
                                </a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="social-icons">
                                <a href="mailto:${process.env.SMTP_USER}" target="_blank">Mail</a>
                                <a href="https://github.com/codezzoom" target="_blank">GitHub</a>
                                <a href="https://linkedin.com/in/asrandhawa2" target="_blank">LinkedIn</a>
                                <a href="https://instagram.com/codezzoom" target="_blank">Instagram</a>
                            </div>
                        <div class="copyrights">
                            <p>&copy; ${currentYear} AR Developer. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </html>
`,
            attachments: formattedAttachments, // Add attachments if any
        };


        // Send the email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Detailed error:", JSON.stringify(error, null, 2));
        res.status(500).json({
            message: "Failed to send email",
            error: {
                name: error.name,
                message: error.message
            }
        });
    }
}
