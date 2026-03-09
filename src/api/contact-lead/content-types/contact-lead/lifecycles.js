'use strict';
const adminEmail = process.env.ADMIN_EMAIL;

module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugin('email').service('email').send({
                to: adminEmail,
                from: 'no-reply@venusinterior.com',
                subject: `New Lead From Venus Interior Website`,
                text: `You have a new message from ${result.email}`,
                html: `
          <h2>New Lead Submission From Venus Interior Website</h2>

          <h4>Lead Details:</h4>
          <p><strong>Name:</strong> ${result.name || 'No Name'}</p>
          <p><strong>Email:</strong> ${result.email || 'No Email'}</p>
          <p><strong>Phone Number:</strong> ${result.phone || 'No Phone'}</p>
          <p><strong>LeadType:</strong> ${result.leadType || 'No Subject'}</p>
          <p><strong>Quote Details:</strong> ${result.quoteDetails || 'No Subject'}</p>
          <p><strong>Selected Package:</strong> ${result.selectedPackage || 'No Package Selected'}</p>
          <p><strong>Date & Time:</strong> ${result.entryDateAndTime}</p>
          <p><strong>Property Name:</strong> ${result.propertyName || 'No Property Name'}</p>
          <p><strong>Pincode:</strong> ${result.pincode || 'No Pincode'}</p>
        `,
            });

            strapi.log.info('Contact email sent successfully');
        } catch (err) {
            strapi.log.error('Failed to send contact email:', err);
        }
    },
};
