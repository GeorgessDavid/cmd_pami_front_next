'use client';

const DataDisplay = ({label, value}) => {
    return (
        <div className="flex gap-2 items-center" title={value}>
            <h2 className="text-sm font-bold m-0 whitespace-nowrap">{label}:</h2>
            <span className="text-sm text-[#212529] overflow-hidden text-ellipsis whitespace-nowrap">{value}</span>
        </div>
    )
}

export default DataDisplay;