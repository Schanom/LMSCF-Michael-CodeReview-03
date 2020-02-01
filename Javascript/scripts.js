		function calculateInsurancePerCountry(){
			var selector = document.getElementById("country");
			var countryId = parseInt( selector.options[selector.selectedIndex].value );
			var name = document.getElementById("ownerName").value;
			var age = parseInt(document.getElementById("carAge").value);
			var hp = parseInt(document.getElementById("horsePower").value);
			
			var insurance = 0;
			switch( countryId ) {
				case 100: // Austria
					insurance = 50;
					break;
				case 150: // Hungary
					insurance = 100;
					break;
				case 180: // Greece
					insurance = 50;
					break;}

			var add3 = 0;
			switch( countryId ) {
				case 100: // Austria
					add3 = 0;
					break;
				case 150: // Hungary
					add3 = 0;
					break;
				case 180: // Greece
					add3 = 3;
					break;}
			
			document.getElementById("result").innerHTML= name + ", your insurance costs € " + Math.round( hp * countryId / (age + add3) + insurance ) + ",-" ;
			return result;
		}