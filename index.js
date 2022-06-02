function getLetters()
{
    var L1 = document.getElementById(1).value.toLowerCase();
    var L2 = document.getElementById(2).value.toLowerCase();
    var L3 = document.getElementById(3).value.toLowerCase();
    var L4 = document.getElementById(4).value.toLowerCase();
    var L5 = document.getElementById(5).value.toLowerCase();

    var Y1 = document.getElementById("y1").value.toLowerCase();
    var Y2 = document.getElementById("y2").value.toLowerCase();
    var Y3 = document.getElementById("y3").value.toLowerCase();
    var Y4 = document.getElementById("y4").value.toLowerCase();
    var Y5 = document.getElementById("y5").value.toLowerCase();

    var G = document.getElementById("grey").value;
    var s = "";
    var y = "";

    // first letter
    s += "(";
    if(L1 != "")
    {
        s += L1;
    }
    else if(Y1=="")
    {
        s += "[" + Y2+Y3+Y4+Y5 + "]|[^" + G+Y1+ "]";
    }
    else
    {
        s += "[^" + G+Y1+ "]";
        y += "(?=.*"+Y1+")";
    }
    s += ")";

    // second letter
    s += "(";
    if(L2 != "")
    {
        s += L2;
    }
    else if(Y2=="")
    {
        s += "[" + Y1+Y3+Y4+Y5 + "]|[^" + G+Y2+ "]";
    }
    else
    {
        s += "[^" + G+Y2+ "]";
        y += "(?=.*"+Y2+")";
    }
    s += ")";

    // third letter
    s += "(";
    if(L3 != "")
    {
        s += L3;
    }
    else if(Y3=="")
    {
        s += "[" + Y1+Y2+Y4+Y5 + "]|[^" + G+Y3+ "]";
    }
    else
    {
        s += "[^" + G+Y3+ "]";
        y += "(?=.*"+Y3+")";
    }
    s += ")";

    // fourth letter
    s += "(";
    if(L4 != "")
    {
        s += L4;
    }
    else if(Y4=="")
    {
        s += "[" + Y1+Y2+Y3+Y5 + "]|[^" + G+Y4+ "]";
    }
    else
    {
        s += "[^" + G+Y4+ "]";
        y += "(?=.*"+Y4+")";
    }
    s += ")";

    // fifth letter
    s += "(";
    if(L5 != "")
    {
        s += L5;
    }
    else if(Y5=="")
    {
        s += "[" + Y1+Y2+Y3+Y4 + "]|[^" + G+Y5+ "]";
    }
    else
    {
        s += "[^" + G+Y5+ "]";
        y += "(?=.*"+Y5+")";
    }
    s += ")";

    y += ".+";

    var regexConst = new RegExp(s);
    var regexYellow = new RegExp(y);
    var possibleWords = [];

    for(var i = 0;i < ko.length;i++)
    {
        if(regexConst.test(ko[i]) && regexYellow.test(ko[i]))
        {
            possibleWords.push(ko[i]);
        }
    }

    //console.log(possibleWords.length);
    //console.log(possibleWords);
    possibleWords.sort();
    document.getElementById("wordcount").innerHTML = possibleWords.length;
    document.getElementById("wordbank").value = possibleWords.join("\n");
}

