const URL = 'http://192.168.56.102/api/resource/Employee?fields=["employee_name","cell_number","emergency_phone_number"]&limit_start=0&limit_page_length=30'; //'https://api.thecatapi.com/v1/images/search';
//const cors = require("cors");

//app.use(cors({
//    origin: "http://localhost:3000"
//}));

fetch(URL,
    {
	    method:'GET',
	    headers:{
		    'Authorization' : 'token 8346b22217604a9:d90d4b05ca0bdbf',
	    },
        //mode: 'no-cors',
        //cache: 'default'
    })
    
    .then(res => res.json())
    .then(data => {
        console.log(data.data);
        
        llenarTabla(data.data);
    });


function searchPage() {

    var _txtSearch = $("#search").val();
    
    var _url_search = 'http://192.168.56.102/api/resource/Employee?fields=["employee_name","date_of_birth"]&filters=[["employee_name","like","%'+_txtSearch+'%"]]&limit_start=0&limit_page_length=30';

    fetch(_url_search,
        {
            method:'GET',
            headers:{
                'Authorization' : 'token 8346b22217604a9:d90d4b05ca0bdbf'
            },
            //mode: 'no-cors',
            //cache: 'default'
        })
        .then(res => res.json())
        .then(data => {
            llenarTabla(data.data);
        });

    //
    
}

function llenarTabla(_data) {
    $("#tblData").empty("");

    var _tblStr = "";
    _tblStr += " <thead>";
    _tblStr += "    <tr>";
    _tblStr += "        <th>Nombre de colaborador</th>";
    _tblStr += "        <th>Teléfono</th>";
    _tblStr += "    </tr>";
    _tblStr += " </thead>";
    _tblStr += "     <tbody>";

    for (var i = 0; i < _data.length; i++) {
        _tblStr += "    <tr>";
        _tblStr += "        <td>" + _data[i].employee_name + "</td>";
        _tblStr += "        <td>" + _data[i].cell_number + "</td>";
        _tblStr += "    </tr>";
    }
    _tblStr += "  </tbody>";

    $("#tblData").html(_tblStr);
}