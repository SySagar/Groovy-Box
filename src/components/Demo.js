import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/content\/Install.md/" }) {
      html
    }
  }
`;

const InstallPage = ({data}) => {
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
