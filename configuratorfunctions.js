	var ToggleBonnet = false;
	var ToggleWing = false;
	var ToggleSplitter = false;
	var ToggleKit = false;
	var Color = "White";
	
	function ChangeToBlack() {
    // game object in the scene, method name, method parameter
	Color = "Black";
    GameInstance.SendMessage('Button_Black', 'SetColor');
	}
	function ChangeToGunMetal() {
	Color = "Gun Metal";
    GameInstance.SendMessage('Button_GunMetal', 'SetColor');
	}
	function ChangeToPurple() {
	Color = "Purple";
    GameInstance.SendMessage('Button_Purple', 'SetColor');
	}
	function ChangeToRed() {
	Color = "Red";
    GameInstance.SendMessage('Button_Red', 'SetColor');
	}
	function ChangeToWhite() {
	Color = "White";
    GameInstance.SendMessage('Button_White', 'SetColor');
	}
	function ChangeToYellow() {
	Color = "Yellow";
    GameInstance.SendMessage('Button_Yellow', 'SetColor');
	}
		
	function VentedBonnetOn() {
	ToggleBonnet = true;
    GameInstance.SendMessage('BonnetToggle', 'BonnetOn', 'toggle');
	console.log("Toggle is: " + toggle);
	}
	function VentedBonnetOff() {
	ToggleBonnet = false;
    GameInstance.SendMessage('BonnetToggle', 'BonnetOff');
	}
	function HillClimbWingOn() {
	ToggleWing = true;
    GameInstance.SendMessage('WingToggle', 'WingOn');
	}
	function HillClimbWingOff() {
	ToggleWing = false;
    GameInstance.SendMessage('WingToggle', 'WingOff');
	}
	function SplitterOn() {
	ToggleSplitter = true;
    GameInstance.SendMessage('SplitterToggle', 'SplitterOn');
	}
	function SplitterOff() {
	ToggleSplitter = false;
    GameInstance.SendMessage('SplitterToggle', 'SplitterOff');
	}
	function KitOn() {
	ToggleKit = true;
    GameInstance.SendMessage('BodyToggle', 'KitOn');
	}
	function KitOff() {
	ToggleKit = false;
    GameInstance.SendMessage('BodyToggle', 'KitOff');
	}
	
	GameInstance.SendMessage("MyMethod", "Hello from JavaScript!", function(result) {
    console.log("Received result from Unity:", result);
});