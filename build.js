import { copyFile } from 'fs'

copyFile(
  'public/manifest.json',
  '.vercel/output/static/manifest.json',
  (err) => {
    if (err) throw err
  }
)
