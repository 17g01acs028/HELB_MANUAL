# Send Bulk SMS

## Overview of Bulk SMS Sending Methods
![send-bulk-sms-overview.png](..%2F..%2Fstatic%2Fimg%2Fsend-bulk-sms-overview.png)
Bulk SMS sending is organized into three distinct tabs:

1. **Template-Based Bulk SMS**:
   - Use predefined templates to craft your message.
   - **Important Note**: Before downloading the contact file, you must first select a message template. This ensures the file contains the appropriate fields for the selected template.
   - Download the contact file (Excel format).
   - Fill in the template with contact details, ensuring accuracy.
   - Upload the completed file and click **Send SMS**.

   **Fields in the Template File**:
   - **Template Variables**: Populate fields corresponding to the placeholders in the selected template (e.g., `{{Name}}`, `{{Amount}}`).
   - **Contact Name**: Enter the recipient’s name.
   - **Phone Number**: Enter the recipient’s phone number.
   - **Schedule**: Set a future time for the SMS to be sent.
   - **Override DND**: Optionally override the Do Not Disturb (DND) status, if permitted.


2. **File-Based SMS Sending**:
   - Upload a file that contains both the numbers and the message text.
   - Ensure the file format is correct and includes the required fields:
      - **Contact Name**: The recipient’s name.
      - **Phone Number**: The recipient’s number.
      - **Message Content**: The message to be sent.
      - **Schedule**: Set a future time for the SMS to be sent.
      - **Override DND**: Optionally override the Do Not Disturb (DND) status, if permitted.

   - Once uploaded, proceed to send the SMS.

3. **Direct SMS to Contacts or Groups**:
   - Select individual contacts or contact groups directly from the portal.
   - Draft your message.
   - **Schedule**: Set a future time for the SMS to be sent.
   - **Override DND**: Optionally override the Do Not Disturb (DND) status, if permitted.

## Process Flow for Bulk SMS

### Draft Stage
1. **Compose or Upload**:
   - Create a workflow by selecting one of the three methods above.
   - The system validates the contacts and message details.
   - View details in the draft list, including:
      - **Valid Contacts**: Ready for messaging.
      - **Invalid Entries**: Errors that need resolution.

2. **Processing**:
   - If all details are correct, proceed to process the draft.
   - The workflow transitions to the **In Progress** stage.

### In Progress Stage
1. **Review**:
   - A reviewer examines the workflow.
   - They can either approve it for sending or return it for revisions.
   - If returned, the creator can make the requested changes and resubmit. The process starts again at the draft stage.

2. **Approval**:
   - Once approved, messages are staged for sending.

### Sending Stage
1. **Real-Time Tracking**:
   - Messages progress through the following statuses:
      - **Pending**: Awaiting processing.
      - **In Queue**: Messages are queued for delivery.
      - **Sent**: Successfully sent to recipients.
      - **Failed**: Failed delivery attempts.
      - **Delivered**: Confirmed successful delivery.
   - A progress bar provides real-time updates on the workflow status.

### Dynamic Updates
- Real-time updates allow you to monitor the status of each message as they are sent.
- For example, if 100 messages are being sent, you can see the count of sent, failed, and delivered messages live.

### Revision and Resubmission
- If the workflow is sent back for changes, the creator can update the details and resubmit.
- The workflow re-enters the draft stage and follows the process again.

---

This process ensures seamless, efficient, and trackable bulk SMS management. Users must ensure the correct tab and method are selected for their specific needs.
