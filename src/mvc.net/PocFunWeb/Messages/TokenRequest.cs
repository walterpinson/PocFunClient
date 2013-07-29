using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DotNetOpenAuth.AspNet;

namespace PocFunWeb.Messages
{
    public class TokenRequest
    {
        public string UserName { get; set; }

        public string IpAddress { get; set; }

        public DateTime RequestDate { get; set; }

        public void Initialize(AuthenticationResult authentication)
        {
            var user = authentication.UserName;
            if(string.IsNullOrEmpty(user))
                user = GetUserName();

            Initialize(user);
        }

        public void Initialize(string userName)
        {
            UserName = userName;
            IpAddress = GetIp();
            RequestDate = DateTime.Now;
        }

        private static string GetIp()
        {
            string ip = HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if(string.IsNullOrEmpty(ip)) ip = HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];

            return ip;
        }

        private static string GetUserName()
        {
            string user = HttpContext.Current.User.Identity.Name;
            if (string.IsNullOrEmpty(user)) throw new Exception();

            return user;
        }
    }
}