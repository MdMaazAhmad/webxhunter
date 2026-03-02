import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BlogPagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    const getVisiblePages = () => {
        if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
        if (currentPage <= 3) return [1, 2, 3, 4, '...', totalPages];
        if (currentPage > totalPages - 3) return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    };

    return (
        <div className="flex items-center justify-center py-12">
            <div className="flex items-center gap-2">
                <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 text-gray-400 hover:border-orange-500 hover:text-orange-500 disabled:opacity-50 disabled:hover:border-gray-700 disabled:hover:text-gray-400 transition-all">
                    <ChevronLeft size={18} />
                </button>
                {getVisiblePages().map((page, index) =>
                    page === '...' ? (
                        <span key={index} className="text-gray-600 px-2">...</span>
                    ) : (
                        <button key={index} onClick={() => onPageChange(page)} className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${currentPage === page ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25' : 'border border-gray-700 text-gray-400 hover:border-orange-500 hover:text-orange-500'}`}>
                            {page}
                        </button>
                    )
                )}
                <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 text-gray-400 hover:border-orange-500 hover:text-orange-500 disabled:opacity-50 disabled:hover:border-gray-700 disabled:hover:text-gray-400 transition-all">
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}