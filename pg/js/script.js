function capturePhoto(){
		navigator.camera.getPicture(uploadPhoto,null,{sourceType:1,quality:60});
}
function uploadPhoto(data){
	// this is where you would send the image file to server
	//output image to screen
	//console.log(data);
	cameraPic.src = "data:image/jpeg;base64," + data;
	navigator.notification.alert(
		'Your Photo has been uploaded', // message
		okay,                           // callback
		'Photo Uploaded',               // title
		'OK'                            // buttonName
	);
}
function okay(){
	//Do something
}