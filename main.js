var setColor = '#235191',
	baseColor = '#56A0D3';



function defaultColor() {
	baseColor = localStorage.getItem('baseColor');
	setColor = localStorage.getItem('setColor');
      let blocks = document.querySelectorAll( ".button" );
      for( let i = 0; i < blocks.length; i++){
        blocks[i].style.background = baseColor;
      }
    }

function choiceBuild(identifier) {
	defaultColor();
	localStorage.setItem('build', identifier.id);
	console.log(setColor);
	identifier.style.background = setColor;
	
}

function load() {
	baseColor = localStorage.getItem('baseColor');
	setColor = localStorage.getItem('setColor');
	var b = localStorage.getItem('build');
	if (b==null) {
		localStorage.setItem('build', "build1");
		b = "build1";
	}
	let blocks = document.querySelectorAll( ".button" );
      for( let i = 0; i < blocks.length; i++){
        if(blocks[i].id == b) {
			blocks[i].style.background = setColor;
			break;
		}
      }
}