import React from 'react';

const InstallPage = ({data}:any) => {
  console.log(data);
  if (!data || !data.markdownRemark) {
    return <div>
      <pre>
      <code>
      npm i enigma-ui-kit
      </code>
    </pre>
    </div>;
  }
  const { markdownRemark } = data;
  const { html } = markdownRemark;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default InstallPage;
