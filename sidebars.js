const sidebars = {
  customTutorialSidebar: [
    'HELB-Communication-Portal-Manual/First-time-login',
    'HELB-Communication-Portal-Manual/Home',
    'HELB-Communication-Portal-Manual/Dashboard',
    {
      type: 'category',
      label: 'Users',
      items: [
        'HELB-Communication-Portal-Manual/User-Setup',
        'HELB-Communication-Portal-Manual/Change-Phone',
        'HELB-Communication-Portal-Manual/Change-Email',
        'HELB-Communication-Portal-Manual/Change-Status',
        'HELB-Communication-Portal-Manual/Reset-Attempts',
        'HELB-Communication-Portal-Manual/Cost-Center',
        'HELB-Communication-Portal-Manual/Update-MFA',
      ]
    },
   
    {
      type: 'category',
      label: 'Messaging',
      items: [
        'HELB-Communication-Portal-Manual/Contact-Groups',
         'HELB-Communication-Portal-Manual/Contacts',
        'HELB-Communication-Portal-Manual/Dnd-reason',
          'HELB-Communication-Portal-Manual/Dnd-Register',
          'HELB-Communication-Portal-Manual/Notification-Category',
          'HELB-Communication-Portal-Manual/Templates',
          'HELB-Communication-Portal-Manual/Send-Bulk-sms',
          'HELB-Communication-Portal-Manual/Message-Logs'
      ],
    },
    {
      type: 'category',
      label: 'Finance',
      items: [
        'HELB-Communication-Portal-Manual/Cost-Center_List',
        'HELB-Communication-Portal-Manual/Financial-Years',
      ],
    },
    'HELB-Communication-Portal-Manual/Reports',
    {
      type: 'category',
      label: 'Survey',
      items: [
        'HELB-Communication-Portal-Manual/Survey-Dnd-reason',
        'HELB-Communication-Portal-Manual/Survey-Dnd-Register',
        'HELB-Communication-Portal-Manual/Survey-Notification-Category',
        'HELB-Communication-Portal-Manual/Survey-Questionnaire',
        'HELB-Communication-Portal-Manual/Survey-Publish',
        'HELB-Communication-Portal-Manual/Survey-Trigger',
        'HELB-Communication-Portal-Manual/Survey-Completion-Reminder',
        'HELB-Communication-Portal-Manual/Survey-Logs',
        'HELB-Communication-Portal-Manual/Survey-Report',
      ],
    },
    'HELB-Communication-Portal-Manual/Application-Workflows',
    'HELB-Communication-Portal-Manual/permissions',
  ],
};
export default sidebars;
