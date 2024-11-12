import React, {useState} from 'react';

export interface CardInputProps {
    title: string;
    placeholder: string;
    size?: 'small' | 'default';
}

export const CardInput = ({
                              title,
                              placeholder,
                              size = 'default',
                          }: CardInputProps) => {

    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const baseStyle = 'flex-col justify-start items-start gap-2 inline-flex';

    const sizeStyles = {
        default: 'w-[390px] h-[76px]',
        small: 'w-[176px] h-[76px]',
    };

    const inputContainerStyle =
        'h-11 px-[11px] py-3.5 bg-background-300 rounded-lg border border-primary-500 flex justify-start items-center gap-2.5';

    const inputStyle =
        'w-full h-full text-text-400 text-h5-regular leading-[30px] bg-transparent outline-none';

    return (
        <div className={`${baseStyle} ${sizeStyles[size]}`}>
            <label className="text-text-500 text-h6-regular leading-normal">
                {title}
            </label>
            <div className={`${inputContainerStyle} ${size === 'small' ? 'w-44' : 'self-stretch'}`}>
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={handleChange}
                    className={inputStyle}
                />
            </div>
        </div>
    );
};

CardInput.displayName = 'CardInput';