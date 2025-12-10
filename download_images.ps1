# PowerShell script to download professional salon images
# Using Unsplash API (free professional images)

$imageUrls = @(
    "https://images.unsplash.com/photo-1527799820374-dcf8d4d4a388?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551652614-3b4c3a6b2d4a?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1563394639-aa91fbaf5c94?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop"
)

$imageDir = "$PSScriptRoot\assets\images"

if (-not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir | Out-Null
}

$fileNames = @(
    "hero-salon.jpg",
    "hero-styling.jpg",
    "stylist-1.jpg",
    "stylist-2.jpg",
    "stylist-3.jpg",
    "stylist-4.jpg",
    "gallery-color.jpg",
    "gallery-styling.jpg",
    "gallery-cutting.jpg"
)

Write-Host "Downloading salon images..."

for ($i = 0; $i -lt $imageUrls.Count; $i++) {
    $url = $imageUrls[$i]
    $filePath = Join-Path $imageDir $fileNames[$i]
    
    try {
        Write-Host "Downloading image $($i+1)/$($imageUrls.Count): $($fileNames[$i])"
        Invoke-WebRequest -Uri $url -OutFile $filePath -UseBasicParsing
        Write-Host "Success: $($fileNames[$i])"
    }
    catch {
        Write-Host "Failed to download: $($fileNames[$i])" -ForegroundColor Red
    }
}

Write-Host "Download complete!"
