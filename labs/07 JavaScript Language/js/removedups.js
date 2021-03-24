function removeDuplicates() {
    'use strict';

    tasks = [...new Set(tasks)];

    // Reference to where the output goes:
    var output = document.getElementById('output');

    // For the output:
    var message = '';

        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
}