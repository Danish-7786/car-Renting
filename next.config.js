/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio']
    },
    unstable_includeFiles: [
        'node_modules/next/dist/compiled/@edge-runtime/primitives/**/*.+(js|json)',
      ],
}


module.exports = nextConfig
