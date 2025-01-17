# Workflow

## Overview
Every part of the application is designed as a modular unit to simplify tracking and workflow management. This document outlines details on managing workflows.

**Topbar Inbox Icon:**  
On the topbar, there is an **Inbox icon** that notifies users of any workflows requiring their action. This provides a convenient way to track pending tasks and ensures users can quickly respond to workflows assigned to them.  
![workflow-inbox.png](..%2F..%2Fstatic%2Fimg%2Fworkflow-inbox.png)

**List of User Pending Workflows:**  
![pending-workflow-list.png](..%2F..%2Fstatic%2Fimg%2Fpending-workflow-list.png)

**Action Workflow:**  
![pending-workflow-list-button.png](..%2F..%2Fstatic%2Fimg%2Fpending-workflow-list-button.png)

---

## Workflow Management

### Overview
Each application includes a workflow view, which tracks the progress of tasks. Workflows can have the following statuses:

![Workflow-m-list.png](..%2F..%2Fstatic%2Fimg%2FWorkflow-m-list.png)

- **Draft**: The workflow is created but not yet submitted for approval. Further actions are required by the user.
- **In Progress**: The workflow is being processed.
- **In Review**: The workflow has been submitted for approval.
- **Discarded**: The workflow was rejected by an approver.
- **Complete**: The workflow has been approved and finalized.
- **Error**: The workflow encountered an issue during processing.
- **Partial Commit**: The workflow was only partially processed.

### Workflow Actions
Users can take the following actions based on their permissions and the workflow’s current status:

#### 1. Approve
- This action finalizes the approval at the current level and moves the workflow to the next stage or marks it as complete if it’s the final approval level.
- Accessible only to users with appropriate approval rights.

#### 2. Reject
- This action discards the workflow, marking it as **Discarded**.
- The initiator receives a notification and can update and resubmit the workflow.

#### 3. Send Back for Review
- This action returns the workflow to the initiator for further revisions, moving it to the **Draft** status.
- Review comments can be added to guide the initiator on required changes.

#### Individual Workflow Actions View:
Users can interact with workflows individually via the **Action Panel**. Each workflow includes options to **Approve**, **Reject**, or **Send Back for Review**:

![Single-workflow-display.png](..%2F..%2Fstatic%2Fimg%2FSingle-workflow-display.png)

#### Bulk Workflow Actions
For actions such as **Bulk SMS**, **Bulk Contact Upload**, and **Bulk DND Register**, the system provides a dedicated view:

- **Bulk Action Workflow View:**
   - This view consolidates all bulk workflows, allowing users to take bulk actions efficiently.
    EG: ** BULK SMS**
  
- **Workflow Details**

![Bulk-sms-workflow-details.png](..%2F..%2Fstatic%2Fimg%2FBulk-sms-workflow-details.png)

- **Workflow Approval Trail Details**

![Bulk-sms-workflow-trail.png](..%2F..%2Fstatic%2Fimg%2FBulk-sms-workflow-trail.png)

### Workflow Permissions
Not all users have permission to perform workflow actions. Permissions are assigned based on roles and approval levels.

#### Key Rules for Workflow Actions:
1. **Drafts**:
   - When a user creates a workflow but has not completed all required actions, it remains in **Draft** status.

2. **Approvals**:
   - Approval Levels define the number of approvers required for a workflow.
   - Example:
      - If a workflow has 3 approval levels, each level requires approval by a different user.
      - Even if a user has rights to approve at all levels, they can only approve one level per workflow.

3. **Initiators Cannot Approve**:
   - Users who initiate a workflow cannot approve it, regardless of their approval level rights.

4. **Application-Specific Rights**:
   - Approval rights are assigned per application.
   - A user with Level 2 approval rights for one application cannot approve at Level 2 for another application unless explicitly granted.

---

## Summary
The **Workflow Management** module is designed for flexibility and transparency. It enables users to:
- View and edit workflows with precision.
- Perform individual or bulk actions efficiently.
- Manage workflows adhering to predefined rules and permissions.

For additional details or support, contact your administrator.



