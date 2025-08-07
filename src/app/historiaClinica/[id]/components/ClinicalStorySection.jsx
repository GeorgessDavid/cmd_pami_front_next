'use client';

export function ClinicalStorySection({ 
    clinicalStory, 
    loading = false
}) {

    return (
        <div className="flex flex-col flex-[3.5]">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold">Historia Clínica Previa</h2>
            </div>
            {!loading && (
                <div 
                    className="max-h-60 overflow-hidden transition-all duration-300 
                             hover:overflow-y-auto 
                             hover:scrollbar-thin
                             hover:scrollbar-thumb-[#0b2344] 
                             hover:scrollbar-track-transparent 
                             hover:scrollbar-thumb-rounded-[10px]
                             sm:max-h-48 
                             [&::-webkit-scrollbar-button]:hidden
                             [&::-webkit-scrollbar-corner]:hidden"
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#0b2344 transparent'
                    }}
                >
                    <p 
                        className="text-gray-700 leading-relaxed text-base sm:text-sm"
                        dangerouslySetInnerHTML={{
                            __html: clinicalStory?.historia?.replace(/\n/g, '<br/><br/>') || 'No hay historia clínica previa'
                        }}
                    />
                </div>
            )}

            {/* Estado de carga con skeletons */}
            {loading && (
                <div className="space-y-3">
                    <div className="animate-pulse bg-gray-200 h-6 w-full rounded"></div>
                    <div className="animate-pulse bg-gray-200 h-6 w-full rounded"></div>
                    <div className="animate-pulse bg-gray-200 h-6 w-3/5 rounded"></div>
                    <div className="animate-pulse bg-gray-200 h-6 w-1/5 rounded"></div>
                </div>
            )}
        </div>
    );
}
