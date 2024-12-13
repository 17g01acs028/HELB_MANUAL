const sidebars = {
  customTutorialSidebar: [
    'Customer-Service-Portal-Manual/First-time-login',
    'Customer-Service-Portal-Manual/Home',
    'Customer-Service-Portal-Manual/User-Setup',
    {
      type: 'category',
      label: 'Messaging',
      items: [
        'Customer-Service-Portal-Manual/Contact-Groups',
         'Customer-Service-Portal-Manual/Contacts',
          'Customer-Service-Portal-Manual/Dnd-Register',
          'Customer-Service-Portal-Manual/Notification-Category',
          'Customer-Service-Portal-Manual/Send-Bulk-sms',
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
    {
      type: 'category',
      label: 'Survey',
      items: [
        'Customer-Service-Portal-Manual/Cost-Center_List',

      ],
    },
  ],
};
export default sidebars;
