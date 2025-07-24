/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'media.consultoriosmedicosdavid.com.ar',
            }
        ]
    }
};

export default nextConfig;
