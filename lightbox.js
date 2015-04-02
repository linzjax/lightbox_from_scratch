
// create lightbox styling
function injectStyles(rule) {
  		var div = $("<div />", {
   			html: '<style>' + rule + '</style>'
  		}).appendTo("body");    
		};

function lightbox_style() {
	injectStyles("#lightbox { position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0, .7) repeat; text-align:center; }");
	injectStyles("#content img { box-shadow:0 0 25px #111; -webkit-box-shadow:0 0 25px #111; -moz-box-shadow:0 0 25px #111; max-width: 90%; max-height: 90%; height: auto; width: auto;}");
  injectStyles("#content {padding-top: 20px; height: 98%;}");
};


// if lightbox does not exist: create light box. ONLY DO THIS ONCE.
function lightbox_create(image_clicked) {
	var create_lightbox = '<div id="lightbox">' + '<div id="content">' +  '<img src = "' + image_clicked + '">' +  '</div>' + '</div>';
	$('body').append(create_lightbox);
};

// if lightbox DOES exist: insert new image
function lightbox_add_image(image_clicked) {
	$('#content').html('<img src = "' + image_clicked + '">');
};


$(document).ready(function(){
// lightbox pattern:
  
// 	on clicking a gallery image
 	  $('.lightbox_trigger').click(function(e){
    	e.preventDefault();

// store clicked images href
    	var image_href = $(this).attr("href");

//check if lightbox exists
    	if ($('#lightbox').length === 0) {

//insert lightbox style onto the page
    		lightbox_style();

//insert lightbox html onto the page
    		lightbox_create(image_href);
    	}

//if lightbox exists: do this instead
    	else {
    		//remove .hide();
    		$('#lightbox').show();
    		lightbox_add_image(image_href);

    	}
	});

 	$('#lightbox').live('click', function() {
		$('#lightbox').hide();
	});

});
