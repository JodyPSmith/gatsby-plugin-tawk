import React from "react";

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  var tawkId = pluginOptions.tawkId;
  var widgetId = pluginOptions.widgetId || "default";
  var source = "https://embed.tawk.to/" + tawkId + "/" + widgetId;

  return setPostBodyComponents([
    <script key="gatsby-plugin-tawk" src={source} />
  ]);
};
