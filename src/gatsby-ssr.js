import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  var tawkId = pluginOptions.tawkId
  var source = "https://embed.tawk.to/" + tawkId + "/default",
  
  return setPostBodyComponents([
    <script
      key="gatsby-plugin-tawk"
      src={source}
    />
  ]);
};
