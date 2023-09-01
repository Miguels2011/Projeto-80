nameOfTheStudentArray = [];
    
function submit()
{
       var displayStudentArray = [];

    for(var f = 1; f <=4; f++)
        {
        var nameOfTheStudent = document.getElementById("nameOfTheStudent"+ f).value;
        console.log(nameOfTheStudent);
        nameOfTheStudentArray.push(nameOfTheStudent);
        }

        console.log(nameOfTheStudentArray);

        var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
        console.log(lenghtOfNameOfStudentsArray);

        for(var j = 0; j < lenghtOfNameOfStudentsArray; j++) 
        {
        displayStudentArray.push("<h4>NAME - "+ nameOfTheStudentArray[j] + "</h4>");
        console.log(displayStudentArray);
        }

        console.log(displayStudentArray);
        document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

        var removeCommas = displayStudentArray.join(" ");
        console.log(removeCommas);
        document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;


        document.getElementById("submitButton").style.display = "none";
        document.getElementById("sortButton").style.display = "inline-block";

}

        function  sorting()
        {
        nameOfTheStudentArray.sort();
        console.log(nameOfTheStudentArray);

        var displayStudentArraySorting = [];

        var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
        console.log(lenghtOfNameOfStudentsArray);

        for (var j = 0; j < lenghtOfNameOfStudentsArray; j++) 
        {
        displayStudentArraySorting.push("<h4>NAME - " + nameOfTheStudentArray[j] + "</h4>");
        console.log(displayStudentArraySorting);
        }

        var removeCommas = displayStudentArraySorting.join(" ");
        console.log(removeCommas);

        document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
    }


//Atividade Adicional
function newUpdate()
{
    document.getElementById("displayNameWithoutCommas").innerHTML = "<h1>" + nameOfTheStudentArray +"</h1>";
}





