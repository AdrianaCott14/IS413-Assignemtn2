$("#submitButton").click(
    function () {
        var assignPct = parseFloat($("#assign").val()) * .5;
        var gProjPct = parseFloat($("#group").val()) * .1;
        var quizPct = parseFloat($("#quiz").val()) * .1;
        var examPct = parseFloat($("#exam").val()) * .2;
        var intexPct = parseFloat($("#intex").val()) * .1;
        var gradePct = assignPct + gProjPct + quizPct + examPct + intexPct;
        var letterGrade;

        if (gradePct < 60) {
            letterGrade = "E"
        }

        else if (gradePct >= 60 && gradePct <= 64) {
            letterGrade = "D-"
        }

        else if (gradePct >= 64 && gradePct < 67) {
            letterGrade = "D"
        }

        else if (gradePct >= 67 && gradePct < 70) {
            letterGrade = "D+"
        }

        else if (gradePct >= 70 && gradePct < 74) {
            letterGrade = "C-"
        }

        else if (gradePct >= 74 && gradePct < 77) {
            letterGrade = "C"
        }

        else if (gradePct >= 77 && gradePct < 80) {
            letterGrade = "C+"
        }

        else if (gradePct >= 80 && gradePct < 84) {
            letterGrade = "B-"
        }

        else if (gradePct >= 84 && gradePct < 87) {
            letterGrade = "B"
        }

        else if (gradePct >= 87 && gradePct < 90) {
            letterGrade = "B+"
        }

        else if (gradePct >= 90 && gradePct < 94) {
            letterGrade = "A-"
        }

        else if (gradePct >= 94) {
            letterGrade = "A"
        }

        else {
            letterGrade = "NA"
        }

        alert("Your letter grade is: " + letterGrade + " " + gradePct);
    });

