// src/components/BlogPagination.js
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const getVisiblePages = () => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        if (currentPage <= 4) {
            return [1, 2, 3, 4, 5, '...', totalPages];
        }
        if (currentPage > totalPages - 4) {
            return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        }
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    };

    const pages = getVisiblePages();

    const PageButton = ({ children, onClick, disabled, isActive }) => (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center w-10 h-10 rounded-lg font-semibold text-sm transition-all duration-300 ${
                disabled ? 'border-gray-700 text-gray-500 cursor-not-allowed' :
                isActive ? 'bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 transform scale-110 shadow-lg' :
                'text-gray-300 border-2 border-gray-600 hover:border-orange-400 hover:text-orange-400 hover:bg-orange-400/10'
            }`}
        >
            {children}
        </button>
    );

    return (
        <div className="flex items-center justify-center py-10">
            <div className="flex items-center gap-2">
                <PageButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <ChevronLeft size={18} />
                </PageButton>
                {pages.map((page, index) =>
                    page === '...' ? (
                        <span key={index} className="text-gray-500 px-2">...</span>
                    ) : (
                        <PageButton key={index} onClick={() => onPageChange(page)} isActive={currentPage === page}>
                            {page}
                        </PageButton>
                    )
                )}
                <PageButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    <ChevronRight size={18} />
                </PageButton>
            </div>
        </div>
    );
};

export default BlogPagination;
