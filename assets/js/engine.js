///////////////////////////////////////////////////
///// JAVASCRIPT ENGING FOR IWRITE CALCULATOR /////
///////////////////////////////////////////////////
// Dev.By: Atsu Emmanuel T (Software Developer)
// Dev.Contact: atsuemmanuel@gmail.com
// For: https://iWrite.ae
// Owner: Tochukwu Nkwocha
// Created At: 08-03-2020 
// Updated At: 08-03-2020
// Copyright (C) 2020. All Rights Reserved
///////////////////////////////////////////////////


//calculate iwrite service cost
function icalculator(rate, nos_of_words) {
    var cost = (Number(rate) * Number(nos_of_words)).toFixed(2);
    document.getElementById('total_cost').innerHTML = '$' + thousands_separator(cost);
}


//Computation for the number of words entered 
function nos_words_action(text_val) {
    //initialize variables
    var rate = 0;
    var nos_of_words = 0;

    //input variables
    var type = document.getElementById("select_type").value;
    var nos_of_words = document.getElementById("box").value;

    if (type == '0') { alert('Please select an iWrite Service'); }

    //convert service type to service charges rates
    if (type == '0') { rate = 0; weeks = 0; }
    if (type == '1') { rate = 0.2; weeks = 7; }
    if (type == '2') { rate = 0.1; weeks = 3; }
    if (type == '3') { rate = 0.3; weeks = 8; }
    if (type == '4') { rate = 0.1; weeks = 2; }

    //update service type charge
    //document.getElementById('rate_display').innerHTML = '$'+rate;

    //compute additional Weeks
    weeks = weeks + additional_duration(nos_of_words)

    //update project duration
    document.getElementById('duration_display').innerHTML = weeks + ' Weeks';

    //initiate calculator
    icalculator(rate, nos_of_words);
}


//Service type action
function service_type(type) {
    //initialize variables
    var rate = 0;
    var nos_of_words = 0;

    //input variables
    var type = document.getElementById("select_type").value;
    var nos_of_words = document.getElementById("box").value;

    //convert service type to service charges rates
    if (type == '0') { rate = 0; weeks = 0; }
    if (type == '1') { rate = 0.2; weeks = 7; }
    if (type == '2') { rate = 0.1; weeks = 3; }
    if (type == '3') { rate = 0.3; weeks = 8; }
    if (type == '4') { rate = 0.1; weeks = 2; }

    //update service type charge
    document.getElementById('rate_display').innerHTML = '$' + rate;

    //compute additional Weeks
    weeks = weeks + additional_duration(nos_of_words)

    //update project duration
    document.getElementById('duration_display').innerHTML = weeks + ' Weeks';

    //initiate calculator
    icalculator(rate, nos_of_words);
}

//Additional duration weeks
function additional_duration(nos_of_words) {
    if (nos_of_words > 20000) {
        var weeksx;
        additional_words = nos_of_words - 20000;

        weeksx = Math.ceil(additional_words / 5000);
        return weeksx;

    } else { weeksx = 0; return weeksx; }
}

//Thousand Comma Separator
function thousands_separator(number) {
    var num_parts = number.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}