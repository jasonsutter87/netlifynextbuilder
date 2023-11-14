// pages/admin.js
import React from 'react';
import fs from 'fs';
import path from 'path';

const AdminPage = ({ adminHtml }) => {
  const router = useRouter();

  // Use useEffect to redirect to /admin/index.html on mount
  useEffect(() => {
    // Redirect to /admin/index.html
    router.push('/admin/index.html');
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: adminHtml }} />
  );
};

export async function getStaticProps() {
  // Read the HTML content from public/admin/index.html
  const filePath = path.join(process.cwd(), 'public', 'admin', 'index.html');
  const adminHtml = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      adminHtml,
    },
  };
}

export default AdminPage;
