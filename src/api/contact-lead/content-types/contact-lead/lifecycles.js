'use strict';

const adminEmail = process.env.ADMIN_EMAIL;

module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugin('email').service('email').send({
                to: adminEmail,
                from: `Venus Interior <${adminEmail}>`,
                replyTo: result.email,
                subject: `New Lead From Venus Interior Website`,
                text: `You have a new message from ${result.email}`,
                html: `
          <h2>New Lead Submission From Venus Interior Website</h2>

          <h4>Lead Details:</h4>
          <p><strong>Name:</strong> ${result.name || 'No Name'}</p>
          <p><strong>Email:</strong> ${result.email || 'No Email'}</p>
          <p><strong>Phone Number:</strong> ${result.phone || 'No Phone'}</p>
          <p><strong>LeadType:</strong> ${result.leadType || 'No Subject'}</p>
          <p><strong>Quote Details:</strong> ${result.quoteDetails || 'No Details'}</p>
          <p><strong>Selected Package:</strong> ${result.selectedPackage || 'No Package Selected'}</p>
          <p><strong>Date & Time:</strong> ${result.entryDateAndTime}</p>
          <p><strong>Property Name:</strong> ${result.propertyName || 'No Property Name'}</p>
          <p><strong>Pincode:</strong> ${result.pincode || 'No Pincode'}</p>
        `,
            });

            if (result.email) {
                await strapi.plugin('email').service('email').send({
                    to: result.email, 
                    from: `Venus Interior <${adminEmail}>`,
                    replyTo: adminEmail, 
                    subject: `We received your request | Venus Interior - Chennai`,
                    text: `Hi ${result.name || 'Customer'}, we received your request. Our team will contact you shortly.`,
                    html: `
            <h2>Thank You for Contacting Venus Interior</h2>

            <p>Hi <strong>${result.name || 'Customer'}</strong>,</p>

            <p>We have successfully received your request.</p>

            <p>Our team will contact you shortly.</p>

            <h4>Your Submitted Details</h4>
            <p><strong>Name:</strong> ${result.name && result.name.toUpperCase() || 'Not Provided'}</p>
            <p><strong>Phone:</strong> ${result.phone || 'Not Provided'}</p>
            <p><strong>Email:</strong> ${result.email || 'Not Provided'}</p>
            <br/>

            <p>Best Regards,</p>
            <p><strong>Venus Interior Team</strong></p>
            <p>📞 +91-9962993939</p>
            <p>🌐 https://venusinterior.com</p>
          `,
                });
            }

            strapi.log.info('Admin email and user confirmation email sent successfully');

        } catch (err) {
            strapi.log.error('Failed to send email:', err);
        }
    },
};