﻿#target photoshop//// AnimC2_paintBucketAll.jsx////// Generated Fri May 30 2014 17:20:28 GMT+0200//cTID = function(s) { return app.charIDToTypeID(s); };sTID = function(s) { return app.stringIDToTypeID(s); };////==================== AnimC2_paintBucketAll ==============//function AnimC2_paintBucketAll() {  // Select  function step1(enabled, withDialog) {    if (enabled != undefined && !enabled)      return;    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);    var desc1 = new ActionDescriptor();    var ref1 = new ActionReference();    ref1.putName(sTID("toolPreset"), "AnimC2_PaintBucket_All");    desc1.putReference(cTID('null'), ref1);    executeAction(sTID('select'), desc1, dialogMode);  };  step1();      // Select};//=========================================//                    AnimC2_paintBucketAll.main//=========================================//AnimC2_paintBucketAll.main = function () {  AnimC2_paintBucketAll();};//app.activeDocument.suspendHistory("Select Paint Bucket Tool Preset (All)", 'AnimC2_paintBucketAll.main()');AnimC2_paintBucketAll.main();// EOF"AnimC2_paintBucketAll.jsx"// EOF