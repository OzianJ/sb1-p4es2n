<?php
$features = [
    ['icon' => 'book-open', 'title' => 'Digital Libraries', 'description' => 'Access vast collections of academic resources'],
    ['icon' => 'pen-tool', 'title' => 'Research Tools', 'description' => 'Advanced tools for data analysis and visualization'],
    ['icon' => 'database', 'title' => 'Data Management', 'description' => 'Secure and efficient research data management solutions'],
    ['icon' => 'users', 'title' => 'Collaboration Platform', 'description' => 'Connect with researchers worldwide'],
];
?>
<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <?php foreach ($features as $feature): ?>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <i class="lucide-<?php echo $feature['icon']; ?> w-12 h-12 text-blue-600 mb-4"></i>
                <h3 class="text-xl font-semibold mb-2"><?php echo $feature['title']; ?></h3>
                <p class="text-gray-600"><?php echo $feature['description']; ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>