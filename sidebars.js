const sidebars = {
  customTutorialSidebar: [
    'Customer-Service-Portal-Manual/First-time-login',
    'Customer-Service-Portal-Manual/Home',

    {
      type: 'category',
      label: 'Users',
      items: [
        'Customer-Service-Portal-Manual/User-Setup',
        'Customer-Service-Portal-Manual/Change-Phone',
        'Customer-Service-Portal-Manual/Change-Email',
        'Customer-Service-Portal-Manual/Change-Status',
        'Customer-Service-Portal-Manual/Reset-Attempts',
        'Customer-Service-Portal-Manual/Cost-Center',
        'Customer-Service-Portal-Manual/Update-MFA',
      ]
    },
    {
      type: 'category',
      label: 'Messaging',
      items: [
        'Customer-Service-Portal-Manual/Contact-Groups',
         'Customer-Service-Portal-Manual/Contacts',
        'Customer-Service-Portal-Manual/Dnd-reason',
          'Customer-Service-Portal-Manual/Dnd-Register',
          'Customer-Service-Portal-Manual/Notification-Category',
          'Customer-Service-Portal-Manual/Templates',
          'Customer-Service-Portal-Manual/Send-Bulk-sms',
          'Customer-Service-Portal-Manual/Message-Logs'
      ],
    },
    {
      type: 'category',
      label: 'Finance',
      items: [
        'Customer-Service-Portal-Manual/Cost-Center_List',
        'Customer-Service-Portal-Manual/Financial-Years',
      ],
    },
    'Customer-Service-Portal-Manual/Reports',
    {
      type: 'category',
      label: 'Survey',
      items: [
        'Customer-Service-Portal-Manual/Survey-Dnd-reason',
        'Customer-Service-Portal-Manual/Survey-Dnd-Register',
        'Customer-Service-Portal-Manual/Survey-Notification-Category',
        'Customer-Service-Portal-Manual/Survey-Questionnaire',
        'Customer-Service-Portal-Manual/Survey-Publish',
        'Customer-Service-Portal-Manual/Survey-Trigger',
        'Customer-Service-Portal-Manual/Survey-Completion-Reminder',
        'Customer-Service-Portal-Manual/Survey-Logs',
        'Customer-Service-Portal-Manual/Survey-Report',
      ],
    },
  ],
};
export default sidebars;
