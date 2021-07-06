module.exports = {
  clientId: process.env.GT_ClientId,
  clientSecret: process.env.GT_ClientSecret,
  redirectUri: process.env.GT_RedirectUri,
  configurationEndpoint:
    "https://developer.api.intuit.com/.well-known/openid_sandbox_configuration/",
  api_uri: "https://api.gusto-demo.com/v1/companies",
  scopes: {
    sign_in_with_intuit: ["openid", "profile", "email", "phone", "address"],
    connect_to_quickbooks: [
      "com.intuit.quickbooks.accounting",
      "com.intuit.quickbooks.payment",
    ],
    connect_handler: [
      "com.intuit.quickbooks.accounting",
      "com.intuit.quickbooks.payment",
      "openid",
      "profile",
      "email",
      "phone",
      "address",
    ],
  },
  NGROK_ENABLED: process.env.NGROK_ENABLED === "true",
};
