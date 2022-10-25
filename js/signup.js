
//kiem tra tên đăng nhập
    function ktten() {
        var re = /^[a-z0-9]{6,16}$/;
        if ($("#form__body__email").val() == "") {
            $("#username-warning").html("Input required.");
            return false;
        }
        if (!re.test($("#form__body__email").val())) {
            $("#username-warning").html("Invalid username format.");
            return false;
        }
        $("#username-warning").html("");
        return true;
    }
    $("#form__body__email").blur(ktten);

    //kiem tra mat khau
    function ktmk() {
        var re = /^[a-z0-9]{6,16}$/;
        if ($("#form__body__password").val() == "") {
            $("#password-warning").html("Input required.");
            return false;
        }
        if (!re.test($("#form__body__password").val())) {
            $("#password-warning").html("Invalid password value.");
            return false;
        }
        $("#password-warning").html("*");
        return true;
    }
    $("#form__body__password").blur(ktmk);

    //kiem tra lai mat khau
    function ktmklai() {
        if (document.getElementById("form__body__password").value !=
            document.getElementById("form__body__retype").value) {
            $("#retype-warning").html("Retyping must match to password.");
            return false;
        }
        else {
            $("#retype-warning").html("");
            return true;;
        }
    }
    $("#form__body__retype").blur(ktmklai);


    //kiem tra họ và tên
    function kthoten() {
        var re = /^[A-Z]+[A-Za-z]*((\s)*[A-Z]+[A-Za-z]*)*$/;
        if ($("#form__body__name").val() == "") {
            $("#name-warning").html("Input required.");
            return false;
        }
        if (!re.test($("#form__body__name").val())) {
            $("#name-warning").html("Fullname is not valid.");
            return false;
        }
        $("#name-warning").html("");
        return true;
    }
    $("#form__body__name").blur(kthoten);

   
    //kiem tra dia chi
    function ktdiachi() {
        var re = /^([0-9]+(\s))+((\s)*[a-z]*)*$/
        if ($("#txtdiachi").val() == "") {
            $("#tbdiachi").html("* bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtdiachi").val())) {
            $("#tbdiachi").html("* Địa chỉ phải gồm số nhà và tên đường/quận/huyện và tỉnh (89 nguyen van nghi tphcm)!");
            return false;
        }
        $("#tbdiachi").html("*");
        return true;
    }
    $("#txtdiachi").blur(ktdiachi);

    //kiem tra email
    function ktemail() {
        var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        if ($("#txtemail").val() == "") {
            $("#tbemail").html("* bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtemail").val())) {
            $("#tbemail").html("* Email không hợp lệ!!!");
            return false;
        }
        $("#tbemail").html("*");
        return true;
    }
    $("#txtemail").blur(ktemail);

    function policiesCheck() {
        if($('#form__checkbox__input').prop('checked')) {
            $("#checkbox-warning").html("");
            return true;
        } else {
            $("#checkbox-warning").html("Checking this box to continues");
            return false;

        }
    }

    //Luu thong tin dang ky
    document.querySelector('.form__submit').onclick = function() {
        // kiem tra tat ca du lieu dung moi cho them vao bang
        if(!ktten()||!ktmk()||!ktmklai()||!kthoten()||!policiesCheck()) {
           alert("Please check all requirement before submit")
            return false;
        } else {
            alert('Register successful!');
            return true;
        }
    }    
