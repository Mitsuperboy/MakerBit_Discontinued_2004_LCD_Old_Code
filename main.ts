makerbit.connectLcd(39)
makerbit.clearLcd2004()
makerbit.setLcdBacklight(LcdBacklight.Off)
basic.forever(function () {
    makerbit.showStringOnLcd2004("MakerBit", makerbit.position2004(LcdPosition2004.P0), 20)
    if (makerbit.isLcdConnected()) {
    	
    }
})
