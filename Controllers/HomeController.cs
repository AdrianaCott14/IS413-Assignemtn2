using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FirstWebApp.Models;

namespace FirstWebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //access for the grade calculator view when loads
        [HttpGet("gradeCalc")]
        public IActionResult gradeCalc ()
        {
            return View();
        }

        //access for the grade calculator view when a form is submitted
        [HttpPost("gradeCalc")]
        public IActionResult gradeCalc (gradeCalcModel model)
        {
            return View();
        }
    }
}
