contest_date = "2021-07-24";
contest_name= "Piscine_June_A20【毎朝8:30】";
contest_participants = "miraxial mercy";

document.getElementsByClassName("form-control")[0].value = contest_name;
document.getElementsByClassName("form-control")[1].value = "白/茶/茶/緑";


start_group = document.getElementsByClassName("input-group")[2];
start_group.getElementsByClassName("form-control")[0].value = contest_date;
start_group.getElementsByClassName("form-control")[1].value = "8";
start_group.getElementsByClassName("form-control")[2].value = "30";

end_group = document.getElementsByClassName("input-group")[3];
end_group.getElementsByClassName("form-control")[0].value = contest_date;
end_group.getElementsByClassName("form-control")[1].value = "9";
end_group.getElementsByClassName("form-control")[2].value = "30";


document.getElementsByClassName("form-control")[9].value = contest_participants;

Bacha_Gacha = document.getElementsByClassName("row")[1];

document.querySelector("[aria-label='Exclude experimental difficulty']").checked = true;

document.getElementsByClassName("form-control")[9].value = contest_participants;

document.querySelector("[aria-label='Exclude experimental difficulty']").checked = true;

document.querySelector("[aria-label='Close']").click();
document.querySelector("[aria-label='Close']").click();


//document.getElementsByClassName("btn btn-success")[0].click();
