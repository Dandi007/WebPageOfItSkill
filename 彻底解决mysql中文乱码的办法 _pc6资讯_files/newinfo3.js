//====================��������===================
 //��ȡCookiesֵ
function getCookie(cookieName) 
{ 
 var cookieString =document.cookie; 
 var start = cookieString.indexOf(cookieName + '='); 
 // ���ϵȺŵ�ԭ���Ǳ�����ĳЩ Cookie ��ֵ���� 
 // �� cookieName һ�����ַ����� 
 if (start == -1) // �Ҳ���
 return null; 
 start += cookieName.length + 1; 
 var end = cookieString.indexOf(';', start); 
 if (end == -1) 
 return unescape(cookieString.substring(start));
 return unescape(cookieString.substring(start, end)); 
}

 //д��Cookie PostCookie("Softview=Yes");
 function PostCookie(cookieName)
 {
  var expdate = new Date();
   expdate.setTime(expdate.getTime() + 604800000);
   document.cookie=cookieName+";expires="+expdate.toGMTString()+";path = /;";
 }

 //���ڲ��������ת��� i �������
function GetRandom(i)
 {
     var dt = new Date();
     var hr = dt.getSeconds();
     hr = hr%i; 
	 return hr;
 }
 

if (getCookie('IsPopAd')!="Yes")
	 {
	
//document.writeln("<script language=\'javascript\' src=\'http:\/\/play.unionsky2.cn\/shw\/?p=148109\'><\/script>")	

	
	    PostCookie("IsPopAd=Yes");

	 }
//document.writeln(" <script language=\"javascript\" src=\"http:\/\/cp.gs307.com\/r\/f.php?uid=2533&pid=1091\"><\/script> ")


document.writeln("<script type=\"text/javascript\">");
document.writeln("/*120*270��2014-08-03 pc6���� ��*/");
document.writeln("var cpro_id = \"u1642727\";");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/f.js\" type=\"text/javascript\"></script>");
//tuwen-top-300ad
$("#sidebar .ad:eq(0)").append('<iframe src="http://show.baobei999.com/new300.html" width="300" height="250" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" style="margin-bottom:10px;"></iframe>');



document.writeln('<script src="http://m.pc6.com/js/sj-sofe.js" type="text/javascript"></script>');