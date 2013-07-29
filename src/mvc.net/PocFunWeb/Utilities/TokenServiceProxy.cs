namespace PocFunWeb.Utilities
{
    using System.Net;

    using Newtonsoft.Json;

    using PocFunWeb.Messages;

    public class TokenServiceProxy
    {
        private string apiBaseUrl = "http://security.pocfun.wp.dev/api/";

        public string RequestToken(TokenRequest tokenRequest)
        {
            var apiResource = "TokenRequest";
            var address = apiBaseUrl + apiResource;
            var jsonRequest = JsonConvert.SerializeObject(tokenRequest);

            var client = new WebClient();
            client.Headers.Add(HttpRequestHeader.ContentType, "application/json");
            client.Headers.Add(HttpRequestHeader.AcceptCharset, "UTF-8");

            var token = JsonConvert.DeserializeObject<string>(client.UploadString(address, jsonRequest));

            return token;
        }
    }
}