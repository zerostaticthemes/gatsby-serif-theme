import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Social from './Social';

const SubFooter = props => {
  const data = useStaticQuery(graphql`
    query SubFooterQuery {
      configJson {
        footer {
          copyright_text
          copyright_link
        }
      }
    }
  `);
  return (
    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sub-footer-inner" />
            <Social />
            <div className="copyright">
              {data.configJson.footer.copyright_text}
              {data.configJson.footer.copyright_link && (
                <a href={data.configJson.footer.copyright_link}>{data.configJson.footer.copyright_link}</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
