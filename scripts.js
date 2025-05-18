// Custom JavaScript// scripts.js - Custom JavaScript

// Animate skill bars on profile page
$(document).ready(function () {
    $('.skill-bar-fill').each(function () {
      const percent = $(this).data('percent');
      $(this).animate({ width: percent }, 1500);
    });
  });