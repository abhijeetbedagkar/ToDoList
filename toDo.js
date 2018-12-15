
$(document).ready(function() {
	var toDoPage = {
		init: function(){
			this.registerEvents()
		},

		registerEvents: function(){
			$(".to-do-items").on("mouseenter", '.to-do-item', function(event){
				var element = $(event.target).attr("title") === "Delete Item" ? $(event.target): $(event.target).find(".delete-to-do")
				element.css({"display":"inline","visibility":"visible"})
			})

			$(".to-do-items").on("mouseleave", '.to-do-item', function(event){
				var element = $(event.target).attr("title") === "Delete Item" ? $(event.target): $(event.target).find(".delete-to-do")
				element.css({"display":"inline","visibility":"hidden"})
			})

			$(".to-do-items").on("click", '.delete-to-do', function(event){
				$(event.target).closest("div").remove()
			})

			$(".to-do-input").keypress(function(event){
				if(event.which == 13) {
		        	var $todotext = $("<div class='to-do-item'><img src='filled-trash.png' class='delete-to-do' title='Delete Item'><label>"+ $(event.target).val() + "</label></div>")
					$(".to-do-items").append($todotext[0].outerHTML)			
				}		
			})
		}
	}

	toDoPage.init()
});