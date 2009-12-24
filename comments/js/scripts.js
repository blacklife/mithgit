function init ()
{
}

var xmlHttp;
function CreateXMLHttpRequest()
{
  if (window.ActiveXObject)
  {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
  else if (window.XMLHttpRequest)
  {
    return new XMLHttpRequest();
  }
}
function saveNewsLetter()
{

    xmlHttp =CreateXMLHttpRequest();

    var url = 'includes/SaveNewsLetter.php?NewsLetterEmail='+document.getElementById('NewsLetterEmail').value;
    document.getElementById('indicator').style.display = 'block';
    xmlHttp.onreadystatechange = nlCallback;
    xmlHttp.open("get",url,true);
    xmlHttp.send(null);
}
function nlCallback()
{

  if (xmlHttp.readyState == 4)
  {

    if (xmlHttp.status == 200)
    {

      var response = xmlHttp.responseText;

        document.getElementById('newsletterDiv').innerHTML = response;
        document.getElementById('indicator').style.display = 'none';
       opacity("newsletterDiv", 0, 100, 1500);
    }
  }
}

function ajaxLoadUrl(url)
{
    xmlHttp =CreateXMLHttpRequest();
    //document.getElementById('indicator').style.display = 'block';
    xmlHttp.onreadystatechange = LoadUrlCallback;
    xmlHttp.open("get",url,true);
    xmlHttp.send(null);
    return false;
}
function LoadUrlCallback()
{
    if (xmlHttp.readyState == 4)
    {
        if (xmlHttp.status == 200)
        {
            var response = xmlHttp.responseText;
            objContentArea = document.getElementById('divContentArea');
            objContentArea.innerHTML = response;
        }
  }

}

function showHide(obj, td)
{
	var tdObj = document.getElementById(td);

	if (tdObj.style.display == 'none')
	{

		tdObj.style.display = 'block';
		obj.src = 'images/collaps.gif';
	}
	else
	{

		tdObj.style.display = 'none';
		obj.src = 'images/expand.gif';

	}
}

function openWindow(url)
{
    window.open(url,'mywindow','width=400,height=400');
}
function fixText(v)
{
    v = v.replace (/\n/gi,'<br>');
    v = v.replace (/>/gi,'&gt;');
    v = v.replace (/</gi,'&lt;');
    
 

    return v;
}