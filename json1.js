/*var requestURL = 'https://raw.githubusercontent.com/womackx/JSONDataRepo/master/example.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var requestData = request.response;
    var myH1 = document.createElement('h1');
    myH1.textContent = requestData['squadName'];
    document.getElementsByTagName('head')[0].appendChild(myH1);
};*/



function getJSON() {
    var requestURL = 'https://raw.githubusercontent.com/womackx/JSONDataRepo/master/example.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    console.log(request);
    request.onload = function() {
        return request.response;
    }
}

function displayData() {
    var data = getJSON();

    console.log("hello");
}

/*
<tr>
                            <td class="text-center">1</td>
                            <td>Craig Stone</td>
                            <td class="hidden-xs">
                                <span class="label label-danger">Disabled</span>
                            </td>
                            <td class="text-center">
                                <div class="btn-group">
                                    <button class="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="" data-original-title="Edit Client"><i class="fa fa-pencil"></i></button>
                                    <button class="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="" data-original-title="Remove Client"><i class="fa fa-times"></i></button>
                                </div>
                            </td>
                        </tr>
 */