
//startup callbacks
window.onload = function() {
    startupPopup();
    //randomizeSkillCardsRotation();
    // Usage of attr() hasn't been implemented in CSS yet, so per-card rotation would need an event listener
    // uncomment if it ever gets implemented and supported

    //
    compile_elements();

    //
    mobileDiscrimination();
};