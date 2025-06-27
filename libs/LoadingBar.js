/*
class LoadingBar{
	constructor(options){
		this.domElement = document.createElement("div");
		this.domElement.style.position = 'fixed';
		this.domElement.style.top = '0';
		this.domElement.style.left = '0';
		this.domElement.style.width = '100%';
		this.domElement.style.height = '100%';
		this.domElement.style.background = '#502003';
		this.domElement.style.opacity = '0.7';
		this.domElement.style.display = 'flex';
		this.domElement.style.alignItems = 'center';
		this.domElement.style.justifyContent = 'center';
		this.domElement.style.zIndex = '1111';
		const barBase = document.createElement("div");
		barBase.style.background = '#FF4B3E';
		barBase.style.width = '50%';
		barBase.style.minWidth = '250px';
		barBase.style.borderRadius = '10px';
		barBase.style.height = '15px';
		this.domElement.appendChild(barBase);
		const bar = document.createElement("div");
		bar.style.background = '#FFB20F';
		bar.style.width = '50%';
		bar.style.borderRadius = '10px';
		bar.style.height = '100%';
		bar.style.width = '0';
		barBase.appendChild(bar);
		this.progressBar = bar;
		
		document.body.appendChild(this.domElement);
		
		function onprogress(delta){
			const progress = delta*100;
			loader.progressBar.style.width = `${progress}%`;
		}
	}
	
	set progress(delta){
		const percent = delta*100;
		this.progressBar.style.width = `${percent}%`;
	}
	
	set visible(value){
		if (value){
			this.domElement.style.display = 'flex';
		}else{
			this.domElement.style.display = 'none';
		}
	}
}

export { LoadingBar };

		*/

class LoadingBar {
	constructor(options) {
		this.domElement = document.createElement("div");
		this.domElement.style.position = 'fixed';
		this.domElement.style.top = '0';
		this.domElement.style.left = '0';
		this.domElement.style.width = '100%';
		this.domElement.style.height = '100%';
		this.domElement.style.background = '#502003'; // changed from black to dark gray
		this.domElement.style.opacity = '0.7';
		this.domElement.style.display = 'flex';
		this.domElement.style.alignItems = 'center';
		this.domElement.style.justifyContent = 'center';
		this.domElement.style.zIndex = '1111';

		const barBase = document.createElement("div");
		barBase.style.background = '#FF4B3E'; // changed from #aaa to light blue
		barBase.style.width = '50%';
		barBase.style.minWidth = '250px';
		barBase.style.borderRadius = '20px';
		barBase.style.height = '40px';  // made it taller to fit text
		barBase.style.position = 'relative';  // needed for positioning text
		this.domElement.appendChild(barBase);

		// Loading text centered
		const loadingText = document.createElement("div");
		loadingText.innerText = "loading ...";
		loadingText.style.position = 'absolute';
		loadingText.style.top = '50%';
		loadingText.style.left = '50%';
		loadingText.style.transform = 'translate(-50%, -50%)';
		loadingText.style.color = '#000';  // black text
		loadingText.style.fontWeight = 'bold';
		loadingText.style.pointerEvents = 'none';  // so clicks pass through text
		barBase.appendChild(loadingText);

		const bar = document.createElement("div");
		bar.style.background = '#FFB20F'; // changed from blue to orange
		bar.style.width = '0';
		bar.style.borderRadius = '20px';
		bar.style.height = '100%';
		barBase.appendChild(bar);

		this.progressBar = bar;

		document.body.appendChild(this.domElement);
	}

	set progress(delta) {
		const percent = delta * 100;
		this.progressBar.style.width = `${percent}%`;
	}

	set visible(value) {
		this.domElement.style.display = value ? 'flex' : 'none';
	}
}

export { LoadingBar };
