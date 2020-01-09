console.log('??????????????????????????/loader');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  }
};
