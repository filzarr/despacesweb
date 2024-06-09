/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    images: {
        domains: ['via.placeholder.com'], // Tambahkan domain gambar eksternal di sini
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')], // Tentukan include paths untuk mengakses file Sass Anda
    },
}

module.exports = nextConfig
