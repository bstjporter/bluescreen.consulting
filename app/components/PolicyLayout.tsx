'use client';

interface PolicyLayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function PolicyLayout({ title, children }: PolicyLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-[#000756] mb-8">{title}</h1>
                <div className="prose max-w-none text-gray-700">
                    {children}
                </div>
            </div>
        </div>
    );
}