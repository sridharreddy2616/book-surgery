var express=require("express");
var bodyParser=require("body-parser");
var morgan=require("morgan");
var mongoose=require("mongoose");
var countryAdd=require("./api/country/api.js");
var stateAdd=require("./api/state/stateApi.js");
var cityAdd=require("./api/city/cityApi.js");
var hospetalsAdd=require("./api/hospital/api.js");
var procedureAdd=require("./api/procedure/api.js");
var departmentAdd=require("./api/department/api.js");
var adminAdd=require("./api/admin/adminapi.js");
var surgeonAdd=require("./api/hospital/surgeonapi.js");
var hosprocedureAdd=require("./api/hospital/procedureapi.js");
var insurenceAdd=require("./api/hospital/insurenceapi.js");
var hospitalInsurenceAdd=require("./api/hospital/hospitalinsurence.js");
var hospitalsdepartmentAdd=require("./api/hospital/hospitalsdepartments.js");
var hospitaldoctorAdd=require("./api/hospital/hospitaldoctor.js");	

	mongoose.connect("mongodb://giriuser:giripassword@ds145118.mlab.com:45118/giri",function(err){
	if(err){console.log("sorry database error")}
	else{console.log("database connected successfully")};
});

// mongoose.connect("mongodb://localhost/Country",function(err){
// 	if(err){console.log("sorry database error")}
// 	else{console.log("database connected successfully")};
// });


var app=express();
var app1=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use('/country/bsr',countryAdd);
app.use('/state/bsr',stateAdd);
app.use('/city/bsr',cityAdd);
app.use('/hospetals/bsr',hospetalsAdd);
app.use('/procedure/bsr',procedureAdd);
app.use('/department/bsr',departmentAdd);
app.use('/admin/bsr',adminAdd);
app.use('/surgeon/bsr',surgeonAdd);
app.use('/hospital/procedure/bsr',hosprocedureAdd);
app.use('/insurence/bsr',insurenceAdd);
app.use('/hospitalinsurence/bsr',hospitalInsurenceAdd);
app.use('/hospitalsdepartments/bsr',hospitalsdepartmentAdd);
app.use('/hospitaldoctor/bsr',hospitaldoctorAdd);


app.use(express.static(__dirname+'/design'));
// app.use(express.static(__dirname+'/design2'));
app1.use(express.static(__dirname+'/design3'));



app.listen("8000",function(err){
	if(err){
		console.log("error");
	} else{
		console.log("port working in 8000");
	}

});

app1.listen("7000",function(err){
	if(err){
		console.log("error");
	} else{
		console.log("port working in 7000");
	}
});
module.exports=app1;
module.exports=app;



















