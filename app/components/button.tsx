"use client";

type ButtonProps = {
    label: string;
    onClick: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: '#2563eb',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
        >
            {label}
        </button>
    );
}
