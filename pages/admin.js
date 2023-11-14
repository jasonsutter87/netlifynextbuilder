// pages/admin.js
import React from 'react';

import { useEffect } from 'react';

const AdminPage = ({ adminHtml }) => {
  useEffect(() => {
    // Redirect to /admin/index.html on the client side
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div>
      {/* You can choose to render the HTML content if needed */}
      {/* <div dangerouslySetInnerHTML={{ __html: adminHtml }} /> */}
    </div>
  );
};

export default AdminPage;