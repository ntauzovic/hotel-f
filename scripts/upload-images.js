const cloudinary = require('cloudinary').v2
const fs = require('fs')
const path = require('path')

// ─── Config ───────────────────────────────────────────────────────────────────
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const IMAGES_DIR = path.join(__dirname, 'hotel-images')

// ─── Upload ───────────────────────────────────────────────────────────────────
async function uploadAll() {
  const files = fs.readdirSync(IMAGES_DIR).filter((f) =>
    ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(f).toLowerCase())
  )

  if (files.length === 0) {
    console.log('Nema slika u scripts/hotel-images/ folderu!')
    process.exit(1)
  }

  console.log(`Uploading ${files.length} slika na Cloudinary...\n`)

  const urls = []

  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file)
    const publicId = `hotel-azura/${path.basename(file, path.extname(file))}`

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        folder: 'hotel-azura',
        transformation: [{ width: 1200, quality: 85, fetch_format: 'auto' }],
      })
      urls.push(result.secure_url)
      console.log(`✓ ${file} → ${result.secure_url}`)
    } catch (err) {
      console.error(`✗ ${file} — greška:`, err.message)
    }
  }

  // ─── Output za seeder ──────────────────────────────────────────────────────
  console.log('\n─────────────────────────────────────────────')
  console.log('Kopiraj ove URL-ove u RoomSeeder.php:\n')
  console.log('$images = [')
  urls.forEach((url) => console.log(`  '${url}',`))
  console.log('];')
  console.log('\nUkupno uploadovano:', urls.length, 'slika')
}

uploadAll()
