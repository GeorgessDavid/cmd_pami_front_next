'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="text-2xl text-[var(--titles-foreground)] mt-4">
                <h1 className="loading-text"></h1>
                <p>Por favor, espere un momento.</p>
            </div>
            <div className="w-[22rem]">
                <DotLottieReact src="/animacion.json" loop autoplay />
            </div>
        </div>
    )
}


export default LoadingScreen;