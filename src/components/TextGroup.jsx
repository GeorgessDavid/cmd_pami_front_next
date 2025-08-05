'use client';

const TextGroup = ({ icon, label, value }) => {
    return (
        <div className='flex w-auto items-center gap-2 text-[var(--titles-foreground)]'>
            {icon}
            <span className="m-0 text-base">{label}</span>
            <span className='text-black font-normal text-base'>{value}</span>
        </div>
    );
}

export default TextGroup;