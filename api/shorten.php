<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

http_response_code(503);
echo json_encode([
    'success' => false,
    'message' => 'Backend is not deployed yet. Upload the PHP backend to InfinityFree.'
], JSON_UNESCAPED_SLASHES);
