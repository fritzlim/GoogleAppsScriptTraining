// Module 4 Google Slides Script
// Author: Dr. Alfred Ang

// Change text color 
function updateColor() {
	var slides = SlidesApp.openByUrl('https://docs.google.com/presentation/d/1tO3qLbvL4zHWrFbE3X_pCL79RobFe6SwJUfyOP63uOg/edit#slide=id.g44683da0db_0_0').getSlides();
	slides.forEach(function(slide) {
      var elements = slide.getPageElements();
      elements.forEach(function(element){
        var type = element.getPageElementType();
        var textStyle = element.asShape().getText().getTextStyle();
        textStyle.setForegroundColor('#ff0000');
        }) 
      }) 
}

// change font family and font size
function updateFont() {
	var slides = SlidesApp.openByUrl('https://docs.google.com/presentation/d/1tO3qLbvL4zHWrFbE3X_pCL79RobFe6SwJUfyOP63uOg/edit#slide=id.g44683da0db_0_0').getSlides();
	slides.forEach(function(slide) {
      var elements = slide.getPageElements();
      elements.forEach(function(element){
        var textStyle = type.asShape().getText().getTextStyle();
        textStyle.setFontFamily('COMFORTAA');
        textStyle.setFontSize(50);
        }) 
      }) 
}

