import React from 'react';
import classNames from 'classnames';

export default ({ className, links, copyright }) => {
  const clsString = classNames("_yhq_globalFooter", className);
  return (
    <div className={clsString}>
      {
        links && (
          <div className={"links"}>
            {links.map(link => (
              <a
                key={link.key}
                target={link.blankTarget ? '_blank' : '_self'}
                href={link.href}
              >
                {link.title}
              </a>
            ))}
          </div>
        )
      }
      {copyright && <div className={"copyright"}>{copyright}</div>}

      <style>{`

        ._yhq_globalFooter {
          padding: 0 16px;
          margin: 48px 0 24px 0;
          text-align: center;
        }
        ._yhq_globalFooter .links {
          margin-bottom: 8px;
        }
        ._yhq_globalFooter .links a:last-child {
          margin-right: 40px;
        }
        ._yhq_globalFooter .links a:hover {
          color: fade(#000, 65%);
        }
        ._yhq_globalFooter .links a {
          color: fade(#000, 45%);
          transition: all .3s;
        }
        ._yhq_globalFooter .copyright {
          color: fade(#000, 45%);
          font-size: 14px;
        }

      `}</style>
    </div>
  );
};
