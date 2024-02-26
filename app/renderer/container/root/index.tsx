import React from 'react';
import { useHistory } from 'react-router';
import { shell } from 'electron';

import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';

// import Logo from '../../../../assets/logo.png';
import Logo from '@assets/logo.png';
import './index.less';

function Root() {
  const history = useHistory();

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      // 通过 shell 模块，打开默认浏览器
      shell.openExternal(router.url);
    } else {
      history.push(router.url);
    }
  };

  return (
    <div styleName="root">
      <div styleName="action">
        <img src={Logo} alt="" />
        {ROUTER_ENTRY.map((router: TSRouter.Item) => {
          return (
            <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
              {router.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Root;
