namespace PocFunWeb.Utilities
{
    using System.Net;

    using Newtonsoft.Json;

    using PocFunWeb.Messages;

    public class TokenServiceProxy
    {
        private string apiBaseUrl = "http://api.pocfun.wp.dev/security/";

        public string RequestToken(TokenRequest tokenRequest)
        {
            var apiAction = "getToken";
            var address = apiBaseUrl + apiAction;            

            var client = new WebClient();
            var token = JsonConvert.DeserializeObject<string>(client.UploadString(address, tokenRequest.ToString()));

            return token;
        }
    }
}