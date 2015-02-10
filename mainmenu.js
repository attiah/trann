$(function () {
    loaddata();
    $("#MainMenu").enhanceWithin().popup();
    
});
var compnaycode, companyname;
function loadbranch() {
  
        var sex = "0";

        try {
            var sex = document.getElementById('opsex').value;
         
        $.ajax({
            type: "POST",
            url: "http://www.mharat.ws/getBranch.aspx",
            data: { sex: sex },
            success: OnSuccessgetBranch,
            error: OnErrorgetBranch
        });
    }
    catch (e) { toast(e); }
}
function OnSuccessgetBranch(response) {
    try {
        var arr = response.split("/++/");
        var data = arr[0].split("//");
        //alert(data.length);
        while (document.getElementById("cmbbranch").options.length > 0) {
            document.getElementById("cmbbranch").options.remove(0);
        }

        var opt = document.createElement("option");
        document.getElementById("cmbbranch").options.add(opt);
        opt.text = "اختار الفرع";
        opt.value = "0";

        var x = 0;
        while (x < data.length - 1) {
            var info = data[x].split(";");

            var optdata = document.createElement("option");
            document.getElementById("cmbbranch").options.add(optdata);
            optdata.text = info[1];
            optdata.value = info[0];
            //alert(info[0]+' ////   '+info[1]);
            x = x + 1;
        }
        document.getElementById("listcourse").innerHTML = "";
    }
    catch (e) { alert(e); }

}
function OnErrorgetBranch(response) {

}

//=============================================

function loadcourse() {
    try {
        var id = '';
      
        { id = document.getElementById("cmbbranch").value; }
        if (id == '0') {
            toast("يجب تحديد الفرع او يجب تحدد الجنس حتي تظهر الفروع");
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://www.mharat.ws/getcourse.aspx",
            data: { id: id },
            success: OnSuccesscourse,
            error: OnErrorcourse
        });

    } catch (ee) { alert(ee); }
}
function OnSuccesscourse(response) {
    var arr = response.split("/++/");
    //alert(response);
    document.getElementById("listcourse").innerHTML = arr[0];
}
function OnErrorcourse(response) {

}
//==================
function loaddata() 
{
    $('#menudata').empty();
    $('<li>').append('<a href="javascript:home()" class="ui-btn ui-btn-icon-right ui-icon-user"  style="text-align:right"> للتسجيل   </a>').appendTo('#menudata');
    $('<li>').append('<a href="javascript:map()"  class="ui-btn ui-btn-icon-right ui-icon-phone"  style="text-align:right"> للتواصل معنا</a> ').appendTo('#menudata');
  
    $('#menudata').listview().listview('refresh');
}
//============== message 
var toast = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h3>" + msg + "</h3></div>")
.css({ display: "block",
    opacity: 0.90,
    position: "fixed",
    padding: "7px",
    color: "#FFFFFF",
    "background-color": "#000000",
    "text-align": "center",
    width: "270px",
    left: ($(window).width() - 284) / 2,
    top: $(window).height() / 2
})
.appendTo($.mobile.pageContainer).delay(1500)
.fadeOut(400, function () {
    $(this).remove();
});
}
//=================================
function home() {
    window.location = "index.html";
}
function map() {
    window.location = "map.html";
}


//=======================================

function send() {
    try {

        var name = document.getElementById("tbname").value;
        var jawal = document.getElementById("tbjawal").value;
        var email = document.getElementById("tbemail").value;
        var job = document.getElementById("tbjob").value;
        var branch = document.getElementById("cmbbranch").value;
        var knew = document.getElementById("knew").value;
        var pass = document.getElementById("tbpassreg").value;
        var pass1 = document.getElementById("tbpassreg0").value;
        var nat = document.getElementById("cmbnat").value;
        var op = document.getElementById("opsex").value;
        var expname = /^[a-zA-zأ-ي| ]+$/;
        var expno = /^[0-9|]+$/;
        var expemail = /^[a-zA-z0-9.@|]+$/;
        //           if(!expname.test(phone))

        if (name == "") {
            toast('يجب إدخال الاسم بصورة صحيحة');
            return;
        }
        var arr = name.split(" ");

        var no = 0;
        no = arr.length;
        if (no < 3) {
            toast(' يجب إدخال الإسم بصورة صحيحة ثلاثي');
            return;

        }
        if (!expname.test(name)) {
            toast("يجب ادخال الاسم بالحروف فقط");
            return;
        }

        if (email.indexOf(".") == -1 || email.indexOf("@") == -1) {
            toast("يجب ادخال البريد الالكتروني بصورة صحيحة");
            return ;
        }
        if (!expemail.test(email)) {
            toast("يجب ادخال البريد الالكتورني  بصورة صحيحة");
            return;
        }
        if (jawal.length < 10) {
            toast("من فضلك ادخل الجوال بصورة صحيحه ومكون من 10 ارقام");
            return ;
        }
        if (jawal.substr(0, 2) != '05') {
            toast("من فضلك ادخل رقم الجوال بصورة صحيحه وان يبدا بـ 05");
            return ;
        }

        if (!expno.test(jawal)) {
            toast("يجب ادخال الجوال ارقام فقط");
            return;
        }
        if (op == 0) {
            toast("من فضلك اختار الجنس");
            return ;
        }
       
        if (nat == "0" || nat == "") {
            toast("من فضلك اختار الجنسية");
            return ;
        }

        if (knew == "0" || knew == "") {
            toast("من فضلك اختار  وسيلة المعرفة");
            return ;
        }

        if (branch == "0" || branch == "") {
            toast("من فضلك اختار الفرع");
            return ;
        }
        var x = 0;
        x = document.getElementById("tcount").value;
        var y = 0;
        var id = "";
        while (y < x) {
            data = document.getElementById('ch' + y).checked;
            if (data) {
                id += document.getElementById('tkey' + y).value + ";";
            }
            y = y + 1;
        }
        if (id == "") {
            toast("يجب تحديد الدورات المراد  الاشتراك فيها  ");
            return;
        }
        if (knew == "0" || knew == "") {
            toast("من فضلك اختار  وسيلة المعرفة");
            return ;
        }
        if (pass == "") {
            toast("من فضلك  ادخل كلمة المرور");
            return ;
        }
        if (pass.length < 8) {
            toast("من فضلك  ادخل كلمة المرور 8 حروف علي الاقل");
            return ;
        }
        if (pass != pass1) {
            toast("لا يوجد تطابق بين كلمتي المرور");
            return ;
        }
        Execute('send');
    } catch (e) { toast(e); }
}


function Execute(Mode) {
    try {
        var name = document.getElementById("tbname").value;
        var email = document.getElementById("tbemail").value;
        var job = document.getElementById("tbjob").value;
        var branch = document.getElementById("cmbbranch").value;
        var knew = document.getElementById("knew").value;
        var tel = document.getElementById("tbtel").value;
        var fax = document.getElementById("tbfax").value;
        var nat = document.getElementById("cmbnat").value;
        var pass = document.getElementById("tbpassreg").value;
        var sex = document.getElementById("opsex").value;
        var jawal = document.getElementById("tbjawal").value;
        var x = 0;
        x = document.getElementById("tcount").value;
        var y = 0;
        var id = "";
        while (y < x) {
            data = document.getElementById('ch' + y).checked;
            if (data) {
                id += document.getElementById('tkey' + y).value + ";";
            }
            y = y + 1;
        }
        //-----------------------------  
        document.getElementById('senddata').disabled = true;
        
        $.ajax({
            type: "POST",
            url: "http://www.mharat.ws/connDB.aspx",
            data: {  tname: name, temail: email, tel: tel, fax: fax, branch: branch, pass: pass, course: id, tjawal: jawal, tsex: sex, knew: knew, fax: fax, job: job, nat: nat },
            //contentType: "application/json; charset=utf-8",

            success: OnSuccessCall,
            error: OnErrorCall
        });


    }
    catch (e) {toast(e); }
	}
     
//==================================

function OnSuccessCall(response) {
 
    document.getElementById("tbname").value = "";
    document.getElementById("tbjawal").value = "";
    document.getElementById("tbemail").value = "";
    document.getElementById("cmbbranch").value = "";
    document.getElementById("cmbnat").value = "";
    document.getElementById("tbjob").value = "";
    document.getElementById("tbtel").value = "";
    document.getElementById("tbfax").value = "";
    document.getElementById("tbpassreg").value = "";
     document.getElementById("tbpassreg0").value = "";
    document.getElementById("knew").value = "";
    var arr = response.split("/++/");
    toast(arr[0]);
    document.getElementById('senddata').disabled = false;
}


function OnErrorCall(response) {
    toast(response.status + "  " + response.statusText);
    document.getElementById('senddata').disabled = false;
}
     
