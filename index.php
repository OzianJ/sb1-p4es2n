<?php
$pages = ['home', 'features', 'about', 'contact'];
$current_page = isset($_GET['page']) && in_array($_GET['page'], $pages) ? $_GET['page'] : 'home';

function get_component($name) {
    include "components/$name.php";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Academic Research Software Solution</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/lucide-static@latest/font/lucide.css" rel="stylesheet">
</head>
<body class="min-h-screen bg-gray-50">
    <?php get_component('header'); ?>
    
    <?php
    switch ($current_page) {
        case 'home':
            get_component('hero');
            get_component('features');
            break;
        case 'features':
            get_component('features');
            break;
        case 'about':
            get_component('about');
            break;
        case 'contact':
            get_component('contact');
            break;
    }
    ?>
    
    <?php get_component('footer'); ?>
</body>
</html>