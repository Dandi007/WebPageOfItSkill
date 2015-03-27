document.domain="mydrivers.com";
var my_return_url = window.location.href;

function InitUser() {
    var username = get_cookie("mydrivers_userid");
    var userid = get_cookie("mydrivers_usernumid");
    if (username != null && username != "") {
        $("#div_unlogin").hide();
        $("#div_logined").show().html("��ӭ��: <font color='red'><a href='http://passport.mydrivers.com/myinfo.aspx'>" + decodeURI(username) + "</a></font><a style='padding-left:10px;' onclick='logout();return false;' href='javascript:;'>�˳�</a>");
        $("#div_loginuser").html("<div class=\"pinlun_login_xf_xx1 pinlun_login_xf_xx_bg1\"><a href=\"javascript:addFavorite()\" target=\"_self\">[�ղ�����֮��]</a></div><div class=\"pinlun_login_xf_xx1\" style=\"padding-left:10px; padding-right:10px;\"><a href=\"http:\/\/passport.mydrivers.com\/myinfo.aspx\" target=\"_self\"><img src=\"http:\/\/passport.mydrivers.com\/comments\/getusertouxiang.aspx?uid=" + userid + "&size=small\" width=\"16\" height=\"16\"/>" + decodeURI(username) + "<\/a> <a href=\"http:\/\/passport.mydrivers.com\/logout.aspx?returnurl=" + my_return_url + "\" target=\"_self\">�˳�<\/a></div><div id=\"usercommentmessage\"></div>");
    }
    else
    {
        $("#div_unlogin").show();
        $("#div_logined").hide();
    }
}
function logout()
{
	window.location = "http://passport.mydrivers.com/logout.aspx?ReturnUrl=" + my_return_url;
}
function ShowAjaxTip(divobj,ajaxReq,reqClass){
    $("#" + divobj).html('<div style="float: right"><img src="http://11.mydrivers.com/comments/images/v20130509/' + reqClass + '.gif" style="margin: 7px 7px;cursor:pointer;" onclick="HideAxajTip(this);"></div><div>' + ajaxReq + '<div>').removeAttr("class").addClass(reqClass).show();
}
function HideAxajTip(myobj){
	myobj.parentNode.parentNode.style.display='none';
}

function addFavorite(){
    var aUrls=document.URL.split("/");
    var vDomainName="http://"+aUrls[2]+"/";
    var description=document.title;
    try{//IE
        window.external.AddFavorite(vDomainName,description);
    }catch(e){//FF
        window.sidebar.addPanel(description,vDomainName,"");
    }
}
function check_login()
{ 
    if ($("#txtUserName").val() == "")
    {
        ShowAjaxTip("LoginTip", "����д�û�����", "AjaxTipWarning")
		$("#txtUserName").focus();
		return false;
    }
    if ($("#txtPwd").val() == "") {
        ShowAjaxTip("LoginTip", "����д���룡", "AjaxTipWarning")
        $("#txtPwd").focus();
        return false;
    }
    
    $("#mydrivers_Login").attr("action", "http://passport.mydrivers.com/comments/check_login.aspx?ReturnUrl=" + my_return_url).submit();
}
function check_login_comments() {
    if ($("#txtUserNameComments").val() == "") {
        ShowAjaxTip("CommentsTip", "����д�û�����", "AjaxTipWarning")
        $("#txtUserNameComments").focus();
        return false;
    }
    if ($("#txtPwdComments").val() == "") {
        ShowAjaxTip("CommentsTip", "����д���룡", "AjaxTipWarning")
        $("#txtPwdComments").focus();
        return false;
    }

    $("#mydrivers_LoginComments").attr("action", "http://passport.mydrivers.com/comments/check_login.aspx?ReturnUrl=" + my_return_url).submit();
}
 function get_cookie(varname)
{
	var tmp_ary = new Array();
	if (varname)
	{
		var a = document.cookie.indexOf(varname+"=");
		if (a != -1)
		{
			var b = document.cookie.substring((a+varname.length+1),document.cookie.length);
			var c = b.split(";");
			var d = c[0];
			return d;
		}
	}
}
function ShowLogin() {
    $.dialog({
        title: "��¼",
        padding: 0,
        lock: false,
        content: document.getElementById('div_login'),
        id: 'div_login_ididid'
    });
}
(function () {
    InitUser();
    //��������¼���¼�
    $("#a_login").click(function () {
        ShowLogin();
    });
    //�󶨵�¼��ť�¼�,���Ͻ�
    $("#img_btnlogin").click(function () {
        check_login();
    });
    //��sina��¼��ť�¼�
    $("#a_sina,#div_sina").click(function () {
        window.location.href = "http://passport.mydrivers.com/weibo/sinaweibo.aspx?reurl=" + my_return_url;
        return false;
    });
    //��qq��¼��ť�¼�
    $("#a_qq,#div_qq").click(function () {
        window.location.href = "http://passport.mydrivers.com/qq/qqlogin.aspx?reurl=" + my_return_url;
        return false;
    });
})();