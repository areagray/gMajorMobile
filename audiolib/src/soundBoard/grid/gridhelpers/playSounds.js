Grid.prototype.playSounds = function( frequencyOrSound, volume, start ){
	//See the commented code in soundBoard.  This is essentially the same function.  The code in soundboard just
	//applies this code to the currentGrid.
  var duration = 60 / this.BPM / 2;
  var osc = context.createBufferSource();
  var gainNode = context.createGain();
  gainNode.gain.value = volume;

  var buffer = this.soundHash[frequencyOrSound];
  osc.buffer = buffer;
  osc.loop = false;

  var analyserNode   = context.createAnalyser();
  analyserNode.fftSize = 512;
  var frequencyBins = new Uint8Array(analyserNode.frequencyBinCount);

  osc.connect(analyserNode);
  analyserNode.connect(gainNode);
  gainNode.connect(context.destination);
  osc.start(start);
};