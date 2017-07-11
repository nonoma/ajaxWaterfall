    function ajax(obj) {
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        obj.url += '?' + obj.data;
        xhr.open(obj.method, obj.url, true);
        if (obj.method == 'get') {
            xhr.send();
        } else if (obj.method == 'post') {
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhr.send(data);
        } else {
        	alert("the method is wrong!!");
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                	obj.success && obj.success(xhr.responseText);
                }else {
                	alert('the error is:' + xhr.status);
                }
            }
        }
    }
