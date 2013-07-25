using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PocFunWeb.Extensions
{
    using System.Text;
    using System.Web.Mvc;

    public class RedirectResultEx : RedirectResult
    {
        public RedirectResultEx(string url) : base(url){}

        public RedirectResultEx(string url, bool permanent) : base(url, permanent){}

        public override void ExecuteResult(ControllerContext context)
        {
            var destination = new StringBuilder();

            destination.Append(Url);

            //Add href fragment if set
            if (!string.IsNullOrEmpty(Fragment))
            {
                destination.AppendFormat("#{0}", Fragment);
            }

            context.HttpContext.Response.Redirect(destination.ToString(), false);
        }

        public string Fragment { get; set; }
    }

    public static class RedirectResultExtensions
    {
        public static RedirectResultEx AddFragment(this RedirectResult result, string fragment)
        {
            return new RedirectResultEx(result.Url)
            {
                Fragment = fragment
            };
        }
    }
}