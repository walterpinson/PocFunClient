using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PocFunWeb.Messages
{
    public class TokenRequest
    {
        public string UserId { get; set; }

        public string IpAddress { get; set; }

        public void Initialize()
        {
            UserId = GetUserId();
            IpAddress = GetIp();
        }

        private static string GetIp()
        {
            string ip = HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if(string.IsNullOrEmpty(ip)) ip = HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];

            return ip;
        }

        private static string GetUserId()
        {
            string user = HttpContext.Current.User.Identity.Name;
            if (string.IsNullOrEmpty(user)) throw new Exception();

            return user;
        }
    }
}