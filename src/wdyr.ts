/// <reference types="@welldone-software/why-did-you-render" />

import React from 'react';
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    logOnDifferentValues: true,
    collapseGroups: false,
    trackHooks: true,
  });
}
