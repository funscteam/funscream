
    document.addEventListener('DOMContentLoaded', function () {
        const toggleSwitch = document.querySelector('.toggle input[type="checkbox"]');
        const offKnob = document.querySelector('.off-knob');
        const onKnob = document.querySelector('.on-knob');

        toggleSwitch.addEventListener('change', function () {
            if (toggleSwitch.checked) {
                // Checkbox is checked (ON state)
                offKnob.style.transform = 'translateX(-100%)';
                onKnob.style.transform = 'translateX(0)';
            } else {
                // Checkbox is unchecked (OFF state)
                offKnob.style.transform = 'translateX(0)';
                onKnob.style.transform = 'translateX(100%)';
            }
        });
    })
