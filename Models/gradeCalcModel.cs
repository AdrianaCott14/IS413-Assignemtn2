using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace FirstWebApp.Models
{
    public class gradeCalcModel
    {
        //model for the grades, validation for if the inputted value isn't between 0 and 100
        [Range(0, 100,
            ErrorMessage = "Grade value must be between 0 and 100")]
        public float assignment { get; set; }

        [Range(0, 100,
            ErrorMessage = "Grade value must be between 0 and 100")]
        public float groupProject { get; set; }

        [Range(0, 100,
            ErrorMessage = "Grade value must be between 0 and 100")]
        public float quiz { get; set; }

        [Range(0, 100,
            ErrorMessage = "Grade value must be between 0 and 100")]
        public float exam { get; set; }

        [Range(0, 100,
            ErrorMessage = "Grade value must be between 0 and 100")]
        public float intex { get; set; }
    }
}
