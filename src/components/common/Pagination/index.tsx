// * react/next
import React from 'react';

//  * redux
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'store/store';
import { setPage } from 'store/slices/paginationSlice';

// * styles
import SliderButton from 'components/ui/SliderButton';
import styles from './Pagination.module.scss';
import { IPaginationProps } from './types';

const Pagination: React.FC<IPaginationProps> = ({ totalPages }) => {
    const dispatch = useDispatch();
    const { page } = useTypedSelector((state) => state.paginate);

    const userChangePage = (selectedPage: number) => {
        dispatch(setPage(selectedPage));
    };

    return (
        <div className={styles.pagination}>
            <SliderButton
                disable={page === 1}
                fn={() => userChangePage(page - 1)}
                dir="prev"
            />
            <div className={styles.paginateList}>
                {page > 1 && (
                    <>
                        {page !== 1 && page > 4 && (
                            <span onClick={() => userChangePage(1)}>1</span>
                        )}
                        {page > 4 && <>. . .</>}
                        {page !== 2 && page !== 3 && (
                            <span onClick={() => userChangePage(page - 3)}>
                                {page - 3}
                            </span>
                        )}
                        {page !== 2 && (
                            <span onClick={() => userChangePage(page - 2)}>
                                {page - 2}
                            </span>
                        )}
                        <span onClick={() => userChangePage(page - 1)}>
                            {page - 1}
                        </span>
                    </>
                )}
                <span className={styles.currentPage}>{page}</span>
                {page !== totalPages && (
                    <span onClick={() => userChangePage(page + 1)}>
                        {page + 1}
                    </span>
                )}
                {page !== totalPages &&
                    totalPages &&
                    page !== totalPages - 1 &&
                    page !== totalPages - 2 && (
                        <span onClick={() => userChangePage(page + 2)}>
                            {page + 2}
                        </span>
                    )}
                {page !== totalPages &&
                    totalPages &&
                    page !== totalPages - 1 &&
                    page !== totalPages - 2 && (
                        <span onClick={() => userChangePage(page + 3)}>
                            {page + 3}
                        </span>
                    )}
                {totalPages &&
                    page < totalPages &&
                    page !== totalPages - 1 &&
                    page !== totalPages - 2 &&
                    page !== totalPages - 3 && <>. . .</>}
                {page !== totalPages &&
                    totalPages &&
                    page !== totalPages - 1 &&
                    page !== totalPages - 2 &&
                    page !== totalPages - 3 && (
                        <span onClick={() => userChangePage(totalPages)}>
                            {totalPages}
                        </span>
                    )}
            </div>
            <SliderButton
                disable={page === totalPages}
                fn={() => userChangePage(page + 1)}
                dir="next"
            />
        </div>
    );
};

export default Pagination;
